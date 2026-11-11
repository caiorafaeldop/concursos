"""Converte provas FGV (PDF da PCI, já com gabarito anexado) em Markdown limpo.

- Remove cabeçalho/rodapé/marca da PCI.
- Separa questões e alternativas; anexa o gabarito de cada questão.
- IGNORA questões que contêm imagem no corpo (código/figura/gráfico).
- Texto de apoio (ex.: texto de Português) vai como "Contexto" da questão seguinte.

Uso:  python converter.py            (converte todos os PDFs de organizadas/)
      python converter.py ARQ.pdf    (converte um)
"""
import glob
import os
import re
import sys
import warnings

warnings.filterwarnings("ignore")
import fitz  # PyMuPDF

BASE = os.path.dirname(os.path.abspath(__file__))
ORG = os.path.join(BASE, "organizadas")
OUT = os.path.join(BASE, "markdown")

# Texto que identifica o bloco do cargo/tipo na página do gabarito.
CFG = {
    "ALEGO_Analista_Legislativo_Desenvolvedor": ("ALEGO 2026 · Analista Legislativo – Desenvolvedor de Sistemas", "Desenvolvedor de Sistemas - 1", "definitivo"),
    "ALEGO_Analista_Legislativo_Analista": ("ALEGO 2026 · Analista Legislativo – Analista de Sistemas", "Analista de Sistemas - 1", "definitivo"),
    "AMAZUL": ("AMAZUL (edital 01/2025, prova 25/01/2026) · Analista de Desenvolvimento de Sistemas", "Analista de Desenvolvimento de Sistemas (CBO: 212405) - 1 - Turno", "definitivo"),
    "MPES": ("MP/ES 2026 · Agente Especializado – Analista de Sistemas", "Analista de Sistemas - PROVA 1", "PRELIMINAR"),
    "NAV_Brasil": ("NAV Brasil 2026 · Engenheiro de Software", "ENGENHEIRO DE SOFTWARE - PROVA TIPO 1", "PRELIMINAR"),
    "TJSC": ("TJ/SC 2026 · Analista de Sistemas", "Analista de Sistemas - 1 - Turno", "definitivo"),
}
CONTEXT_RE = re.compile(r"^(Aten[cç][aã]o!?|Texto\b|Leia\b|Considere o texto|O texto a seguir|Os textos a seguir|As quest[oõ]es)", re.I)
STMT_RE = re.compile(r"^(I{1,3}V?|IV|V|VI{0,3})\s*[\.\-–](\s+|$)|^\(\s*\)\s|^[•●]\s*|^(Com base|Assinale|Est[áa] correto|Est[ãa]o corretas?|Nesse contexto|Diante d|As afirmativas|Analise|Considerando)")


def norm(s):
    return " ".join(s.lower().split())


def n_objetivas(first_pages_text):
    m = re.search(r"contendo\s+(\d+)\s*\(", first_pages_text)
    return int(m.group(1)) if m else None


def parse_gabarito(page, header):
    t = re.sub(r"pcimarkpci\S+", "", page.get_text())
    lines = [x.strip() for x in t.splitlines() if x.strip()]
    h = norm(header)
    start = None
    for i in range(len(lines)):
        for k in range(0, 4):
            if h in norm(" ".join(lines[i:i + k + 1])):
                start = i + k + 1
                break
        if start:
            break
    if start is None:
        return None
    nums, ans = [], {}
    for x in lines[start:]:
        if x.isdigit():
            nums.append(int(x))
        elif x in ("A", "B", "C", "D", "E", "*"):
            if nums:
                ans[nums.pop(0)] = x
        else:
            break
    return ans


def extract_questions(doc, total):
    qs = {}
    cur = None
    expected = 1
    pending_img = False
    for pno in range(len(doc) - 1):  # última página = gabarito
        page = doc[pno]
        W, H = page.rect.width, page.rect.height
        items = []
        blocks = page.get_text("blocks")
        # limites do corpo: logo abaixo do cabeçalho ("FGV CONHECIMENTO") e acima do rodapé ("... PÁGINA n")
        top = max([b[3] for b in blocks if b[6] == 0 and re.search(r"FGV\s+CONHECIMENTO", b[4]) and b[1] < 120] or [50]) + 1
        bot = min([b[1] for b in blocks if b[6] == 0 and re.search(r"P[ÁA]GINA\s+\d+", b[4]) and b[1] > H - 120] or [H - 50]) - 1
        for b in blocks:
            x0, y0, x1, y1, t, _, ty = b
            if ty != 0 or not t.strip() or y0 < top or y0 > bot:
                continue
            col = 0 if (x0 + x1) / 2 < W / 2 else 1
            items.append((col, y0, "t", t, x1 - x0))
        for im in page.get_image_info():
            x0, y0, x1, y1 = im["bbox"]
            if y1 < top or y0 > bot or (x1 - x0) < 20 or (y1 - y0) < 12:
                continue  # logo, rodapé, ruído
            if x0 <= 2 and y1 >= H - 5:
                continue  # marca d'água colada na borda
            col = 0 if (x0 + x1) / 2 < W / 2 else 1
            items.append((col, y0, "i", None, 0))
        items.sort(key=lambda z: (z[0], z[1]))
        for col, y, kind, t, w in items:
            if kind == "t":
                s = t.strip()
                if pno >= 1 and w < 40 and s.isdigit() and int(s) == expected and expected <= total:
                    cur = {"n": expected, "lines": [], "img": pending_img}
                    pending_img = False
                    qs[expected] = cur
                    expected += 1
                    continue
                if cur is not None:
                    if re.search(r"QUEST(Õ|O)ES DISCURSIVAS|PROVA DISCURSIVA", s, re.I) and cur["n"] == total:
                        cur = None
                        continue
                    cur["lines"].extend(l.strip() for l in t.splitlines() if l.strip())
            else:
                if cur is None:
                    if expected > 1:
                        pending_img = True
                elif any(re.match(r"^\(E\)", l) for l in cur["lines"]):
                    pending_img = True  # imagem depois da alternativa E = apoio da próxima questão
                else:
                    cur["img"] = True
    return qs


def split_question(lines):
    """-> (stem_paragraphs, alts{letter:text}, trailing_context_lines)"""
    stem, alts, cur_alt = [], {}, None
    trailing = []
    expanded = []
    for ln in lines:
        # separa "... (C) texto" quando a alternativa seguinte veio na mesma linha
        parts = re.split(r"(?<=[\.\)!?\w”\"])\s*(?=\([B-E]\)(?:\s|$))", ln)
        expanded.extend(x for x in parts if x.strip())
    for ln in expanded:
        m = re.match(r"^\(([A-E])\)\s*(.*)$", ln)
        if m and m.group(1) not in alts:
            cur_alt = m.group(1)
            alts[cur_alt] = [m.group(2)]
            continue
        if cur_alt == "E" and CONTEXT_RE.match(ln):
            cur_alt = None
            trailing.append(ln)
            continue
        if trailing:
            trailing.append(ln)
        elif cur_alt:
            alts[cur_alt].append(ln)
        else:
            if STMT_RE.match(ln) or not stem:
                stem.append(ln)
            else:
                stem[-1] += " " + ln
    return stem, {k: " ".join(v).strip() for k, v in alts.items()}, trailing


def para(lines):
    out, buf = [], ""
    for ln in lines:
        if STMT_RE.match(ln) and buf:
            out.append(buf)
            buf = ln
        else:
            buf = (buf + " " + ln).strip()
    if buf:
        out.append(buf)
    return out


def convert(path):
    stem_name = os.path.basename(path)
    key = next((k for k in CFG if k in stem_name), None)
    titulo, header, status = CFG[key]
    doc = fitz.open(path)
    cover = " ".join(doc[0].get_text().split())
    total = n_objetivas(cover) or 0
    gab = parse_gabarito(doc[len(doc) - 1], header) or {}
    qs = extract_questions(doc, total)

    out, ign_img, bad_alt, converted = [], [], [], 0
    carry = []
    recs = []
    last_ctx = []
    for n in range(1, total + 1):
        q = qs.get(n)
        if not q:
            continue
        stem, alts, trailing = split_question(q["lines"])
        ctx = carry
        carry = para(trailing) if trailing else []
        if q["img"]:
            ign_img.append(n)
            continue
        if sorted(alts) != list("ABCDE"):
            bad_alt.append(n)
        g = gab.get(n)
        stem_txt = "\n\n".join(para(stem))
        apoio, inferido = (ctx, False) if ctx else ([], False)
        if ctx:
            last_ctx = ctx
        elif last_ctx and re.search(r"(texto|trecho|fragmento|par[aá]grafo|t[ií]tulo)", stem_txt, re.I) and not re.search(r"(banco de dados|SQL|Java|Python|API|sistema)", stem_txt):
            apoio, inferido = last_ctx, True
        recs.append(dict(n=n, enunciado=stem_txt, apoio="\n\n".join(apoio), apoio_inferido=inferido,
                         alternativas={k: alts.get(k, "") for k in "ABCDE"},
                         gabarito=("ANULADA" if g == "*" else g), anulada=(g == "*")))
        glabel = "ANULADA" if g == "*" else (g or "?")
        md = [f"### Questão {n}", ""]
        if ctx:
            md += ["> **Texto de apoio:** " + "  \n> ".join(ctx), ""]
        md += [p + "\n" for p in para(stem)]
        for L in "ABCDE":
            if L in alts:
                md.append(f"- ({L}) {alts[L]}")
        md += ["", f"**Gabarito:** {glabel}" + ("  _(questão anulada: não usar)_" if g == "*" else ""), ""]
        out.append("\n".join(md))
        converted += 1

    sem_gab = [n for n in range(1, total + 1) if n in qs and n not in gab]
    head = [
        f"# {titulo}", "",
        f"- **Arquivo de origem:** `{stem_name}`",
        f"- **Gabarito:** {status} (tipo/caderno 1)",
        f"- **Questões objetivas:** {total} · **convertidas:** {converted}",
        f"- **Ignoradas por conter imagem:** {', '.join(map(str, ign_img)) or 'nenhuma'}",
    ]
    if bad_alt:
        head.append(f"- **Atenção (não achei as 5 alternativas):** {', '.join(map(str, bad_alt))}")
    if sem_gab:
        head.append(f"- **Atenção (sem gabarito lido):** {', '.join(map(str, sem_gab))}")
    head += ["", "---", ""]
    os.makedirs(OUT, exist_ok=True)
    dest = os.path.join(OUT, os.path.splitext(stem_name)[0].replace("+", "_") + ".md")
    with open(dest, "w", encoding="utf-8") as f:
        f.write("\n".join(head) + "\n".join(out))
    return dict(recs=recs, titulo=titulo, status=status, src=stem_name, ign=ign_img, arq=os.path.basename(dest), total=total, ok=converted, img=ign_img, bad=bad_alt, nogab=sem_gab, found=len(qs))


if __name__ == "__main__":
    files = sys.argv[1:] or sorted(glob.glob(os.path.join(ORG, "*.pdf")))
    for f in files:
        r = convert(f)
        print(f"{r['arq'][:60]:60} | total {r['total']} | achadas {r['found']} | convertidas {r['ok']} | imagem {r['img']} | sem5alt {r['bad']} | sem gab {r['nogab']}")

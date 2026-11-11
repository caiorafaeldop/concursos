"""Gera a base única de questões (AI-friendly) a partir das provas organizadas.

Saídas (em base/):
  questoes.jsonl   uma questão completa por linha (sem duplicatas)
  temas/*.md       as mesmas questões, um arquivo por tema (leitura humana / contexto de IA)
  LEIA-ME.md       esquema e regras

Uso: python build_base.py
"""
import glob
import json
import os
import re
import sys
import warnings

warnings.filterwarnings("ignore")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import converter as c

BASE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(BASE, "base")

META = {
    "ALEGO_Analista_Legislativo_Desenvolvedor": dict(id="alego26-dev", banca="FGV", orgao="ALEGO", ano=2026, cargo="Analista Legislativo – Desenvolvedor de Sistemas"),
    "ALEGO_Analista_Legislativo_Analista": dict(id="alego26-sis", banca="FGV", orgao="ALEGO", ano=2026, cargo="Analista Legislativo – Analista de Sistemas"),
    "AMAZUL": dict(id="amazul26", banca="FGV", orgao="AMAZUL", ano=2026, cargo="Analista de Desenvolvimento de Sistemas"),
    "MPES": dict(id="mpes26", banca="FGV", orgao="MP/ES", ano=2026, cargo="Agente Especializado – Analista de Sistemas"),
    "NAV_Brasil": dict(id="nav26", banca="FGV", orgao="NAV Brasil", ano=2026, cargo="Engenheiro de Software"),
    "TJSC": dict(id="tjsc26", banca="FGV", orgao="TJ/SC", ano=2026, cargo="Analista de Sistemas"),
}

TEMAS = {
    "engsw": "Engenharia de software (requisitos, UML, ágil, testes, arquitetura, padrões de projeto)",
    "programacao": "Programação (linguagens, POO, algoritmos, estruturas de dados, web/APIs)",
    "bd": "Banco de dados (SQL, modelagem, NoSQL, DW/BI, big data)",
    "devops": "DevOps, nuvem, contêineres e versionamento",
    "seguranca": "Segurança da informação (criptografia, ataques, LGPD, normas ISO 27k)",
    "ia": "Inteligência artificial e ciência de dados",
    "gestao_ti": "Governança, gestão de TI e de projetos (ITIL, COBIT, PMBOK, Scrum gestão)",
    "redes_so": "Redes, sistemas operacionais e infraestrutura",
    "portugues": "Língua portuguesa",
    "rl": "Raciocínio lógico e matemática",
    "direito_adm": "Direito, administração pública e conhecimentos do órgão",
    "informatica": "Informática básica (pacote office, internet)",
    "ingles": "Língua inglesa",
    "conhecimentos_regionais": "Conhecimentos regionais (história, geografia, atualidades do estado)",
    "outros": "Outros / não classificado",
}

# Classificação MANUAL (revisada leitura a leitura) por prova: "ini-fim:tema,n:tema,..."
SPEC = {
    "alego26-sis": "1-14:portugues,15-20:rl,21-24:conhecimentos_regionais,25-40:direito_adm,41-43:engsw,44-45:programacao,46-50:engsw,51-52:programacao,53-54:engsw,55:gestao_ti,56-60:engsw,61-67:seguranca,68:gestao_ti,69:programacao,70:engsw",
    "alego26-dev": "40:direito_adm,41:engsw,42:programacao,43:engsw,44:redes_so,45:seguranca,46:engsw,47:devops,48-50:programacao,51:gestao_ti,52:engsw,53-54:programacao,55:engsw,56:programacao,57:engsw,58:devops,59:gestao_ti,60:seguranca,61:programacao,62:engsw,63:programacao,64:seguranca,65:ia,66:seguranca,67:programacao,68:seguranca,69-70:engsw",
    "amazul26": "1-10:portugues,11-20:rl,21:informatica,22-24:redes_so,25:seguranca,26-30:ingles,31-33:redes_so,34:gestao_ti,37:bd,38-41:seguranca,42-43:redes_so,45-50:redes_so,51-52:seguranca,53:redes_so,54:bd,55-56:seguranca,57-58:devops,60:programacao",
    "mpes26": "1-10:portugues,11-15:rl,16-20:direito_adm,21-23:programacao,24-25:engsw,26-27:programacao,28:seguranca,29-31:programacao,32:seguranca,33-37:engsw,38:redes_so,39-40:devops,41:seguranca,42-47:bd,48-49:bd,50-51:ia,52-57:gestao_ti,58-60:programacao",
    "nav26": "1-20:portugues,21-28:rl,29:informatica,30:informatica,31:informatica,33:ia,34-40:direito_adm,41:programacao,42:engsw,43:bd,44:seguranca,45:devops,46:gestao_ti,47:engsw,48-49:programacao,50-51:engsw,52-53:programacao,54:ia,55:seguranca,56-57:engsw,58-60:bd,61:seguranca,62:gestao_ti,63-64:programacao,65:engsw,66:engsw,67-68:gestao_ti,69:engsw,70:gestao_ti",
    "tjsc26": "2-10:portugues,11-20:direito_adm,21-25:seguranca,26-30:direito_adm,31-32:engsw,33:gestao_ti,34:programacao,35:engsw,36-37:programacao,38:devops,39:engsw,40:gestao_ti,41-42:redes_so,43:engsw,44:programacao,45:engsw,46-47:programacao,48:engsw,49:devops,50:engsw,51-58:bd,59-62:devops,63-66:redes_so,67-72:seguranca,73:devops,74:seguranca,75-80:gestao_ti",
}


# Questões que dependem de texto que a prova imprimiu como IMAGEM (não dá pra responder sem ele)
INCOMPLETAS = {"amazul26": [1, 2, 5, 26, 27, 28, 29, 30]}
MOTIVO_INC = "texto de apoio impresso como imagem na prova; questão não pode ser respondida sem ele"
# Questões que usam o texto de outra questão (n -> n da questão que traz o texto)
APOIO_REF = {"nav26": {4: 3, 5: 3}}


def tema_manual(prefix, n):
    for parte in SPEC.get(prefix, "").split(","):
        if not parte:
            continue
        rng, tema = parte.split(":")
        a, _, b = rng.partition("-")
        if int(a) <= n <= int(b or a):
            return tema
    return None

# (tema, regex) em ordem de prioridade
REGRAS = [
    ("portugues", r"\b(vocábulo|vocabulo|regência|concordância|crase|pontuação|figura de linguagem|ortográfic|substantivo|adjetivo|advérbio|pronome|oração|período composto|sintax|coesão|coerência|sinônimo|antônimo|verbal|conjunção|predicado|termo da oração|sentido d[aoe]|no trecho|no segmento|a expressão|o texto|do texto|ao texto|segundo o texto|norma-padrão|norma padrão|interpretação)\b"),
    ("rl", r"\b(proposição|proposições|tabela-verdade|premissa|silogismo|probabilidade|combinatória|permutação|sequência lógica|raciocínio|conjuntos?|diagrama de venn|porcentagem|razão|proporção|equação|média aritmética|geometria|negação de|equivalente a|verdadeir[oa]s? e falsos?)\b"),
    ("ia", r"\b(inteligência artificial|machine learning|aprendizado de máquina|aprendizado supervisionado|rede neural|redes neurais|deep learning|llm|prompt|nlp|processamento de linguagem natural|overfitting|regressão|classificação|clusteriza|ciência de dados|random forest|transformer|rag\b|embedding|ia generativa)\b"),
    ("seguranca", r"\b(criptograf|hash|assinatura digital|certificado digital|malware|phishing|ransomware|firewall|ids\b|ips\b|vpn|lgpd|proteção de dados|iso\s*27|confidencialidade|integridade|disponibilidade|autenticação|owasp|injeção|xss|csrf|ataque|vulnerabilidade|pentest|sql injection|zero trust|cve\b|oauth|jwt|ssl|tls|backup|dos\b|ddos)\b"),
    ("bd", r"\b(sql|select|insert|update|delete|join|group by|trigger|stored procedure|índice|indice|banco de dados|sgbd|relacional|normalização|forma normal|chave primária|chave estrangeira|transação|acid\b|nosql|mongodb|redis|cassandra|data warehouse|olap|etl|bi\b|data lake|big data|hadoop|spark|modelo entidade|mer\b|postgres|mysql|oracle)\b"),
    ("devops", r"\b(devops|ci/cd|integração contínua|entrega contínua|pipeline|docker|contêiner|conteiner|kubernetes|k8s|git\b|github|gitlab|terraform|ansible|jenkins|nuvem|cloud|aws|azure|iaas|paas|saas|serverless|microsserviç|microserviç|observabilidade|prometheus|helm|infraestrutura como código)\b"),
    ("gestao_ti", r"\b(itil|cobit|governança|pmbok|gerenciamento de projetos|gestão de projetos|gerenciamento de serviços|sla\b|portfólio|escritório de projetos|pmo|cmmi|mps\.br|ciclo pdca|bsc\b|balanced scorecard|swot|estratégia|planejamento estratégico|gestão de riscos|iso\s*31000|iso\s*20000|togaf|bpm|bpmn|processo de negócio|análise de pontos de função|pontos de função|contratação de ti|in sgd|sisp)\b"),
    ("engsw", r"\b(requisito|uml|diagrama|caso de uso|scrum|kanban|ágil|agil|xp\b|extreme programming|tdd|bdd|teste unitário|testes?\b|qualidade de software|refatora|clean code|solid|padrão de projeto|design pattern|singleton|factory|observer|strategy|arquitetura|mvc|mvvm|ddd|domain-driven|api rest|restful|soa\b|cascata|iterativo|incremental|rup\b|manutenção de software|engenharia de software|backlog|sprint|user story|história de usuário|acoplamento|coesão|metodologia)\b"),
    ("programacao", r"\b(java|python|javascript|typescript|c#|c\+\+|php|ruby|go\b|golang|kotlin|swift|spring|node|react|angular|vue|html|css|json|xml|orientação a objetos|orientada a objetos|herança|polimorfismo|encapsulamento|classe|objeto|interface|método|algoritmo|recursão|complexidade|pilha|fila|lista ligada|árvore|grafo|ordenação|busca binária|código|função|variável|laço|loop|array|vetor|string|exceção|thread|concorrência|api\b|http|rest\b|web|framework|compilador|interpretador|lambda|stream)\b"),
    ("redes_so", r"\b(tcp|udp|ip\b|ipv4|ipv6|dns|dhcp|roteamento|rede\b|redes\b|osi|switch|roteador|vlan|wi-?fi|sistema operacional|linux|windows|unix|processo\b|processos|escalonamento|memória virtual|paginação|deadlock|kernel|raid|virtualização|hipervisor|servidor)\b"),
    ("informatica", r"\b(word|excel|powerpoint|libreoffice|planilha|navegador|e-?mail|pasta|arquivo|windows explorer|área de trabalho|atalho|ctrl)\b"),
    ("direito_adm", r"\b(constituição|constitucional|lei\s*n|lei nº|decreto|servidor público|improbidade|licitação|licitações|contrato administrativo|administração pública|princípio d[ae]|direito|tribunal|assembleia|legislativ|poder judiciário|ministério público|regimento|estatuto|ouvidoria|ética|cidadania|compliance)\b"),
]


def classificar(rec):
    texto = " ".join([rec["enunciado"]] + list(rec["alternativas"].values()))
    t = texto.lower()
    # Português costuma ter texto de apoio
    if rec.get("apoio"):
        return "portugues"
    pontos = {}
    for tema, rx in REGRAS:
        n = len(re.findall(rx, t, re.I))
        if n:
            pontos[tema] = n
    if not pontos:
        return "outros"
    # empate: vale a ordem de REGRAS (mais específico primeiro)
    ordem = [x for x, _ in REGRAS]
    return sorted(pontos, key=lambda k: (-pontos[k], ordem.index(k)))[0]


def norm(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())


def main():
    os.makedirs(OUT, exist_ok=True)
    recs, vistos = [], {}
    resumo = []
    for f in sorted(glob.glob(os.path.join(c.ORG, "*.pdf"))):
        r = c.convert(f)
        key = next(k for k in META if k in r["src"])
        m = META[key]
        status = "preliminar" if r["status"].lower().startswith("prelim") else "definitivo"
        novos = dup = 0
        for q in r["recs"]:
            if q["gabarito"] is None:
                continue
            fp = norm(q["enunciado"])[:300] + norm(q["alternativas"]["A"])[:60]
            if fp in vistos:
                vistos[fp]["tambem_em"].append(f"{m['id']}#{q['n']}")
                dup += 1
                continue
            q.update(
                id=f"{m['id']}-q{q['n']:02d}",
                banca=m["banca"], orgao=m["orgao"], ano=m["ano"], cargo=m["cargo"],
                gabarito_status=status, tambem_em=[],
            )
            q["tema"] = tema_manual(m["id"], q["n"]) or classificar(q)
            q["tema_origem"] = "manual" if tema_manual(m["id"], q["n"]) else "auto"
            vistos[fp] = q
            recs.append(q)
            novos += 1
        resumo.append((m["id"], novos, dup, r["ign"]))

    # pós-processamento: incompletas e textos compartilhados
    por_id = {q["id"]: q for q in recs}
    for q in recs:
        pref = q["id"].rsplit("-q", 1)[0]
        q["incompleta"] = q["n"] in INCOMPLETAS.get(pref, [])
        q["motivo_incompleta"] = MOTIVO_INC if q["incompleta"] else ""
        ref = APOIO_REF.get(pref, {}).get(q["n"])
        if ref and not q["apoio"]:
            src = por_id.get(f"{pref}-q{ref:02d}")
            if src:
                q["apoio"] = src["enunciado"]
                q["apoio_inferido"] = True
                q["apoio_ref"] = src["id"]
        q.setdefault("apoio_ref", "")

    # saída jsonl
    campos = ["id", "banca", "orgao", "ano", "cargo", "n", "tema", "enunciado", "apoio", "apoio_inferido", "apoio_ref", "incompleta", "motivo_incompleta", "alternativas", "gabarito", "anulada", "tema_origem", "gabarito_status", "tambem_em"]
    with open(os.path.join(OUT, "questoes.jsonl"), "w", encoding="utf-8") as fh:
        for q in recs:
            fh.write(json.dumps({k: q[k] for k in campos}, ensure_ascii=False) + "\n")

    # saída md por tema (sem anuladas)
    por_tema = {}
    for q in recs:
        if not q["anulada"] and not q["incompleta"]:
            por_tema.setdefault(q["tema"], []).append(q)
    tdir = os.path.join(OUT, "temas")
    os.makedirs(tdir, exist_ok=True)
    for old in glob.glob(os.path.join(tdir, "*.md")):
        os.remove(old)
    old_big = os.path.join(OUT, "questoes.md")
    if os.path.exists(old_big):
        os.remove(old_big)
    indice = ["# Temas", "", "| Tema | Questões | Arquivo |", "|---|---:|---|"]
    for tema in TEMAS:
        lst = por_tema.get(tema, [])
        if not lst:
            continue
        md = [f"# {TEMAS[tema]}", "", f"`{tema}` · {len(lst)} questões FGV (sem anuladas/incompletas). Gabarito ao final de cada uma.", ""]
        for q in lst:
            md += [f"## {q['id']} · {q['orgao']} {q['ano']}" + (" · gabarito preliminar" if q["gabarito_status"] == "preliminar" else ""), ""]
            if q["apoio"]:
                md += ["> **Texto de apoio" + (" (compartilhado, confira)" if q["apoio_inferido"] else "") + ":** " + q["apoio"].replace("\n\n", "\n> "), ""]
            md += [q["enunciado"], ""]
            md += [f"- ({k}) {v}" for k, v in q["alternativas"].items()]
            md += ["", f"**Gabarito:** {q['gabarito']}", ""]
        with open(os.path.join(tdir, tema + ".md"), "w", encoding="utf-8") as fh:
            fh.write("\n".join(md))
        indice.append(f"| {TEMAS[tema]} | {len(lst)} | [{tema}.md]({tema}.md) |")
    with open(os.path.join(tdir, "INDEX.md"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(indice) + "\n")

    # contagens
    cont = {t: len(por_tema.get(t, [])) for t in TEMAS}
    return recs, resumo, cont


if __name__ == "__main__":
    recs, resumo, cont = main()
    print("total", len(recs), "| anuladas", sum(q["anulada"] for q in recs))
    for r in resumo:
        print(r)
    print(cont)

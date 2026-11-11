"""Junta uma prova + as páginas do gabarito que correspondem a ela.

Uso:
  python juntar.py PROVA.pdf GABARITO.pdf SAIDA.pdf --buscar "texto que aparece no gabarito do cargo"

--buscar: texto (sem diferenciar maiúsculas) que identifica o cargo/tipo na página do gabarito.
          Só as páginas do gabarito que contêm esse texto entram no PDF final.
          Sem --buscar, o gabarito inteiro é anexado.
"""
import argparse
import sys
import warnings

warnings.filterwarnings("ignore")
import fitz  # PyMuPDF
from pypdf import PdfReader, PdfWriter


def norm(s):
    return " ".join(s.lower().split())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("prova")
    ap.add_argument("gabarito")
    ap.add_argument("saida")
    ap.add_argument("--buscar", default=None)
    a = ap.parse_args()

    gab_doc = fitz.open(a.gabarito)
    if a.buscar:
        q = norm(a.buscar)
        pages = [i for i in range(len(gab_doc)) if q in norm(gab_doc[i].get_text())]
        if not pages:
            sys.exit("Nenhuma página do gabarito contém: " + a.buscar)
    else:
        pages = list(range(len(gab_doc)))

    w = PdfWriter()
    prova = PdfReader(a.prova)
    gab = PdfReader(a.gabarito)
    for p in prova.pages:
        w.add_page(p)
    w.add_outline_item("Prova", 0)
    start = len(w.pages)
    for i in pages:
        w.add_page(gab.pages[i])
    w.add_outline_item("Gabarito", start)
    with open(a.saida, "wb") as f:
        w.write(f)
    print(f"OK: {a.saida} | prova {len(prova.pages)} pág. + gabarito {len(pages)} pág. (págs. {[i + 1 for i in pages]} do original)")


if __name__ == "__main__":
    main()

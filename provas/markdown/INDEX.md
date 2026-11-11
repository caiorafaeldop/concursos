# Provas FGV em Markdown

Geradas por `../converter.py` a partir de `../organizadas/*.pdf` (prova + gabarito do tipo certo).
Cada questão tem enunciado, alternativas (A–E) e `**Gabarito:**` ao final.
Questões com **imagem** (código em print, figura, planilha, peça publicitária) foram **ignoradas**.

| Prova | Gabarito | Objetivas | Convertidas | Ignoradas (imagem) |
|---|---|---:|---:|---|
| [ALEGO · Desenvolvedor de Sistemas](2026_ALEGO_Analista_Legislativo_Desenvolvedor_de_Sistemas_PROVA_GABARITO.md) | definitivo | 70 | 69 | 18 |
| [ALEGO · Analista de Sistemas](2026_ALEGO_Analista_Legislativo_Analista_de_Sistemas_PROVA_GABARITO.md) | definitivo | 70 | 69 | 18 |
| [AMAZUL · Analista de Desenvolvimento de Sistemas](2026_AMAZUL_Analista_de_Desenvolvimento_de_Sistemas_PROVA_GABARITO.md) | definitivo | 60 | 55 | 14, 35, 36, 44, 59 |
| [MP/ES · Agente Especializado – Analista de Sistemas](2026_MPES_Agente_Especializado_Analista_de_Sistemas_PROVA_GABARITO.md) | **preliminar** | 60 | 59 | 12 |
| [NAV Brasil · Engenheiro de Software](2026_NAV_Brasil_Engenheiro_de_Software_PROVA_GABARITO.md) | **preliminar** | 70 | 69 | 32 |
| [TJ/SC · Analista de Sistemas](2026_TJSC_Analista_de_Sistemas_PROVA_GABARITO.md) | definitivo | 80 | 78 | 1, 9 |

## Observações
- As duas provas da ALEGO compartilham as 40 primeiras questões (conhecimentos gerais); só diferem nas específicas.
- Questões **anuladas** aparecem com `Gabarito: ANULADA` e não devem ser usadas.
- Em Português, o texto de apoio fica junto da questão onde está impresso; as demais questões do mesmo texto não repetem o texto.
- As discursivas (ALEGO e MP/ES) **não** foram convertidas; só as objetivas.

## Para converter novas provas
1. Junte prova + gabarito (`../juntar.py`) e salve em `../organizadas/`.
2. Adicione uma linha em `CFG` no `converter.py` com o texto que identifica o cargo no gabarito.
3. Rode `python converter.py`.

## Base unificada (recomendado para IA/quiz)
Veja `../base/LEIA-ME.md`: `questoes.jsonl` (deduplicado, com tema) e `temas/*.md`.

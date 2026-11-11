# Base de questões FGV (TI) — leia primeiro

Base única, deduplicada e classificada por tema. **Comece por aqui** (IA ou humano).

## Arquivos
| Arquivo | Para quê |
|---|---|
| `questoes.jsonl` | **Fonte da verdade.** 1 questão por linha, completa por si só. Use para filtrar, sortear, montar quiz. |
| `temas/<tema>.md` | As mesmas questões em texto, 1 arquivo por tema (cabe no contexto de uma IA). `temas/INDEX.md` lista os temas. |
| `../markdown/*.md` | Conversão original, prova por prova (inclui anuladas/incompletas). |

## Esquema de cada linha do `questoes.jsonl`
| Campo | Tipo | Significado |
|---|---|---|
| `id` | str | `<prova>-q<nn>`, ex.: `tjsc26-q57`. Único. |
| `banca`, `orgao`, `ano`, `cargo` | | origem da questão |
| `n` | int | número da questão na prova original |
| `tema` | str | um dos temas abaixo |
| `tema_origem` | `manual`/`auto` | `manual` = revisado questão a questão; `auto` = palavra-chave (confira) |
| `enunciado` | str | texto da pergunta (parágrafos separados por `\n\n`) |
| `apoio` | str | texto de apoio (se houver e foi capturado) |
| `apoio_inferido` | bool | `true` = o texto vem de outra questão (ver `apoio_ref`) |
| `apoio_ref` | str | `id` da questão que traz o texto compartilhado |
| `alternativas` | obj | `{"A":…,"B":…,"C":…,"D":…,"E":…}` |
| `gabarito` | str | `A`–`E` ou `ANULADA` |
| `anulada` | bool | `true` → **não usar** |
| `incompleta` | bool | `true` → depende de texto impresso como imagem; **não usar** (`motivo_incompleta` explica) |
| `gabarito_status` | `definitivo`/`preliminar` | preliminar pode mudar após recursos |
| `tambem_em` | list | ids de duplicatas descartadas (mesma questão em outro cargo) |

**Para quiz/estudo, use só:** `anulada == false` e `incompleta == false`.

## Temas
| `tema` | Conteúdo |
|---|---|
| `engsw` | Engenharia de software: requisitos, UML, ágil, testes, arquitetura, padrões de projeto |
| `programacao` | Linguagens, POO, algoritmos, web/APIs, frameworks |
| `bd` | SQL, modelagem, NoSQL, DW/BI, big data |
| `devops` | CI/CD, nuvem, contêineres, Git |
| `seguranca` | Criptografia, ataques, LGPD, ISO 27k, OWASP |
| `ia` | IA, ML, ciência de dados |
| `gestao_ti` | ITIL, COBIT, MPS.BR, projetos, APF, contratações de TI, BPM |
| `redes_so` | Redes, sistemas operacionais, virtualização, armazenamento |
| `portugues`, `rl`, `ingles` | Matérias gerais |
| `direito_adm` | Direito constitucional/administrativo, regimentos |
| `conhecimentos_regionais`, `informatica` | Regional (GO etc.) e informática básica |

## Receitas rápidas
```bash
# 5 questões de banco de dados, só as válidas (jq)
jq -c 'select(.tema=="bd" and (.anulada|not) and (.incompleta|not))' questoes.jsonl | head -5
```
```python
import json
qs = [json.loads(l) for l in open("questoes.jsonl", encoding="utf-8")]
validas = [q for q in qs if not q["anulada"] and not q["incompleta"]]
```

## Limitações conhecidas
- **Sem questões com imagem** (código/figura/planilha em print) — foram removidas na conversão.
- **Texto de apoio:** capturado quando vem como texto. Em Português, vários textos vêm embutidos no enunciado.
  Questões cujo texto veio como imagem estão marcadas `incompleta`.
- **Gabarito preliminar:** MP/ES e NAV Brasil.
- **Sem explicações**: só a letra do gabarito. Explicar é tarefa da IA (ou do NotebookLM).
- **Discursivas** não foram convertidas.
- ALEGO Dev e ALEGO Sis dividem 40 questões gerais; ficam uma vez só (`tambem_em` registra a outra).

## Como adicionar uma prova nova
1. `python juntar.py PROVA.pdf GAB.pdf SAIDA.pdf --buscar "texto do cargo"` → salvar em `organizadas/`.
2. Em `converter.py`: nova linha em `CFG` (texto que identifica o cargo no gabarito).
3. Em `build_base.py`: linha em `META` (id, órgão, ano, cargo) e, de preferência, em `SPEC` (tema por faixa de questão). Sem `SPEC`, usa palavras-chave (`tema_origem: auto`).
4. `python build_base.py` regenera `questoes.jsonl` e `temas/`.

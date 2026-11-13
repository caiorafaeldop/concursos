# Spec 001 — Realinhamento ao Edital TJPB 2026, Cidade LGPD, Foco Discursiva e Leitor de Fontes Oficiais

> **Status:** approved (autorização direta do usuário via `/goal` para planejar e executar de ponta a ponta)
> **Cargo-alvo:** Analista Judiciário – Área de TI – Desenvolvimento de Sistemas (TJPB 2026, Banca FGV)
> **Referências:** `docs/01-EDITAL-TJPB-DEV-COMPILADO.md`, `editais/tjpb/TJPB-prova-conteudo-e-metas.md`, `fontes/tjpb/INDEX.md`

---

## 1. Resumo

Realinhar integralmente os conteúdos, cidades e funcionalidades do jogo **TJPB Quest** (`jogo/`) ao peso real da prova do TJPB (80% Conhecimentos Específicos / 20% Gerais), adicionando uma cidade dedicada de **LGPD**, unificando temas redundantes ou de baixo retorno, preenchendo as lacunas do edital com base nos textos oficiais de `fontes/tjpb/` e oferecendo um **Leitor de Fontes Oficiais** completo para consulta dentro do jogo.

---

## 2. Motivação

A revisão adversária (`doc-review`) identificou quatro desvios graves que desperdiçam tempo de estudo e aumentam risco na prova objetiva e discursiva:

1. **Desequilíbrio peso × esforço:** Conhecimentos Gerais (20% da nota) consomem proporcionalmente muito mais slides do que Programação/Frameworks (estimado em ~5 questões objetivas + alta incidência na discursiva de 40 pts), além de duplicação direta entre `logica` × `matematica` e `discursiva` × `redacao`, e 98 slides combinados para Mobile + UI/UX (~2% da nota).
2. **Lacunas literais do Edital:** Ausência nos slides de **BI/DW/OLAP/Governança de Dados**, **Redação Oficial** (item 6.5 de Português), **BPMN 2.0**, **Material Design vs Cupertino** (Flutter) e **harness/especificação executável** em SDD.
3. **Excessos fora do edital:** Capítulos/tópicos como **Grafos/BFS/DFS/Dijkstra** em `algoritmos.html` e aprofundamento pesado em `Ω/Θ` e contagem exaustiva manual de tabelas **APF** consomem energia sem constar (ou sem retorno proporcional) no edital.
4. **Falta de base documental integral no jogo:** Módulos anteriores traziam ressalvas *"confira o texto oficial"*, hoje desnecessárias porque os documentos integrais (LGPD, Marco Civil, Resoluções CNJ, MoReq-Jus, eMAG 3.1, WCAG 2.1/2.2, COBIT 2019 e OWASP Top 10 / API / LLM) já existem localmente em `fontes/tjpb/`.

---

## 3. Personas

### Persona Primária — Candidato Dev TJPB (Foco 1º Lugar)
* **Cenário A (Estudo focado em alto retorno):** Acessa as cidades da Banda dos Específicos pelo celular ou desktop, estuda capítulos profundos de Java/Spring/TS/Angular/React/Python/Flutter, BD+BI, Arquitetura, Segurança, LGPD e Discursiva (temas quentes em 30 linhas), sem tropeçar em conteúdo fora de edital ou duplicado.
* **Cenário B (Consulta à norma seca):** Durante o estudo ou após errar uma questão de LGPD, OWASP, CNJ 615/2025 ou WCAG, abre o **Acervo de Fontes Oficiais** dentro do jogo (pelo mapa/HUB ou atalho `[D]`) e pesquisa instantaneamente o artigo, risco OWASP ou critério WCAG exato, mesmo offline no celular.

---

## 4. Critérios de Aceite

* **AC-001 (Must) — Nova Cidade LGPD:** Deve existir uma cidade própria para `lgpd` na Banda dos Específicos (5×3 = 15 cidades), com casa (3 NPCs, estagiário com desafio e boss com 8 questões estilo FGV) + biblioteca (6 capítulos profundos fundamentados na Lei nº 13.709/2018 integral de `fontes/tjpb/leis/LGPD_Lei_13709_2018.md`, cobrindo princípios, bases legais, direitos do titular, Poder Público/Judiciário, segurança/Privacy by Design/RIPD e sanções/vida real).
* **AC-002 (Must) — Eliminação da cidade redundante de Redação e inclusão de Redação Oficial em Português:** Remover a cidade duplicada `redacao` do mapa (fundindo técnicas úteis de 30 linhas/coesão em `discursiva`), e adicionar **Redação Oficial** (Manual da Presidência: Padrão Ofício, fechos *Atenciosamente*/*Respeitosamente*, pronomes de tratamento e atributos) dentro de `portugues.html` e `study1.js` (suportando 8 capítulos na biblioteca).
* **AC-003 (Must) — Consolidação de baixo ROI (Mobile + UI/UX → Interfaces) e enxugamento de RLM/Matemática:** Unificar `mobile` e `uiux` em uma única cidade enxuta e de alta precisão (`interfaces` — 5 capítulos com ciclo mobile, segurança/SSL Pinning, UX/Design Systems/Material×Cupertino, eMAG 3.1 oficial e WCAG 2.1/2.2 oficial), liberar a vaga para `lgpd` mantendo a grade 5×3 simétrica, e eliminar a duplicação de Conjuntos/Razão/Combinatória/Probabilidade entre `logica.html` e `matematica.html`.
* **AC-004 (Must) — Remoção de conteúdo fora do edital / excessos:** Remover **Grafos, BFS, DFS e Dijkstra** de `algoritmos.html`/`algoritmos.js` (substituindo Cap. 3 por **Árvores Binárias, BST, Percursos e Heaps**), reduzir `Ω/Θ` ao estritamente contextual de `Big-O`, e enxugar o Cap. 4 de `engsoft.html` (foco conceitual/classificatório de APF + estimativas ágeis) aprofundando o Cap. 5 em **SDD executável e harness assistido por IA**.
* **AC-005 (Must) — Preenchimento das lacunas técnicas de alto peso:**
  1. `bd.html` + `bd.js`: adicionar Cap. 6 (**BI, Data Warehouse, OLAP vs OLTP, ETL/ELT, Modelagem Dimensional / Star Schema**) e Cap. 7 (**Governança de Dados / DMBOK & Comparativo de SGBDs PostgreSQL, Oracle, MySQL, SQL Server**).
  2. `linguagens.html` + `linguagens.js`: expandir para **7 capítulos profundos** (separando Python/FastAPI/Django, Dart/Flutter + Material×Cupertino, e Gerenciamento de Estado Provider/Riverpod/Cubit/BLoC, além de reforçar Java 21/Spring/JPA e TS/Angular/React com leitura de código FGV).
  3. `govti.html` + `govti.js`: incluir **BPMN 2.0**, detalhamento literal de **COBIT 2019** (40 objetivos / 7 componentes) e **Res. CNJ 468/2022** via textos oficiais de `fontes/tjpb/`.
* **AC-006 (Must) — Aprofundamento na Prova Discursiva (40% da nota):** Expandir `discursiva.html` e `discursiva.js` para **7 capítulos** incluindo técnica de 30 linhas nos 4 pilares do item 10.7.2, aprofundamento nos temas mais prováveis (PDPJ-Br/Microsserviços/Resiliência, OWASP/Auth/LGPD, IA Generativa/Res. CNJ 615/2025, Contratação TIC CNJ 468/MoReq-Jus/Acessibilidade) e estudos de caso modelo resolvidos de 30 linhas.
* **AC-007 (Must) — Calibração oficial CNJ & OWASP em `govjud` e `seguranca`:** Atualizar `govjud.html`/`govjud.js` com artigos/prazos literais das Resoluções CNJ 335, 370, 396, 522 e **615/2025**, revogação da 91/2009 pela 522/2023 + Res. Conjunta 03/2013 (MNI) e prazos literais do Marco Civil (`fontes/tjpb/`); e atualizar `seguranca.html`/`seguranca.js` com os itens literais de **OWASP Top 10 (2021)**, **OWASP API Security (2023)** e **OWASP LLM Top 10 v2**.
* **AC-008 (Must) — Leitor In-Game de Fontes Oficiais na Íntegra:** Criar leitor navegável e pesquisável (`jogo/fontes.html` + acervo gerado em `jogo/fontes/` a partir de `fontes/tjpb/`) acessível dentro do jogo pelo prédio **Acervo Oficial** na cidade de consulta / Paraíba Central e por atalho direto (`[D]` / botão `📚 Docs` nos controles móveis/HUD), funcionando offline no mobile e desktop com busca textual, índice por artigo/capítulo e ajuste de fonte/tema.
* **AC-009 (Must) — Integridade de engine, PWA, links e validações:** Zero erros de sintaxe JS, zero URLs externas (`http`/`https`), contagem exata de slides/capítulos e títulos sincronizados entre `materias/*.js` e `aulas/*.html`, PWA `sw.js` atualizado, save existente de jogador antigo compatível sem quebrar o carregamento.

---

## 5. Não-Objetivos

* Não alterar os arquivos originais de `fontes/tjpb/`, `provas/` ou `docs/01-EDITAL-TJPB-DEV-COMPILADO.md`.
* Não criar cidade separada para Redação Oficial nem para BI isolado (BI integra `bd`, Redação Oficial integra `portugues`).
* Não inventar números/metas do **PDTI TJPB 2024–2026** cujo download retornou `HTTP 403` em `fontes/tjpb/INDEX.md` — declarar explicitamente essa ausência onde aplicável.
* Não usar o navegador Chrome nem depender de rede externa em tempo de execução.

---

## 6. Restrições

* **Técnicas:** Scripts clássicos em `jogo/` (sem bundler/imports ES modules); offline total (`CONTRATO.md`: nenhum `http` em `src`/`href`); mobile-first portrait & landscape; PWA service worker (`sw.js`) funcional; validação Node automática para todos os `.js` e `.html`.
* **Legais & Normativas:** Citações de leis (LGPD, Marco Civil), Resoluções CNJ (335, 370, 396, 468, 522, 615, Conj. 03/2013), eMAG 3.1, WCAG 2.1/2.2, COBIT 2019 e OWASP devem ser fiéis aos documentos em `fontes/tjpb/`.
* **Qualidade de código & conteúdo:** Manter o estilo didático de `aula.css` (`normalizacao-visual.html`), com ilustrações SVG, tabelas comparativas, trechos de código, `.say.trap` e testes rápidos estilo FGV.

---

## 7. Dados Envolvidos

* `SUBJ_DEFS` e `GEN_ORDER` em `jogo/engine.js`
* Módulos `window.MATERIAS['<id>']` em `jogo/materias/*.js` e `window.STUDY` em `jogo/study1.js`..`study2.js`
* Aulas HTML em `jogo/aulas/*.html`
* Índices e textos convertidos em `jogo/fontes/` consumidos por `jogo/fontes.html`

---

## 8. Riscos e Suposições

| Risco / Suposição | Impacto | Mitigação |
|---|---|---|
| Arquivos grandes de COBIT 2019 (806 KB) e MoReq-Jus (448 KB) pesarem no PWA mobile | Alto (lentidão/cota de cache) | Gerar documentos JSON/JS ou Markdown individuais em `jogo/fontes/` carregados sob demanda via `fetch`, sem pré-cachear todos os MB no `install` do `sw.js`. |
| Saves antigos no `localStorage` (`save.done['mobile']`, `save.done['redacao']`, `save.study`) | Médio | Engine usa `TOPICS.filter(t => save.done[t.id])`; chaves antigas são ignoradas com segurança sem causar erro. |
| Biblioteca com >7 capítulos ultrapassar estantes no `makeRoom` (`engine.js`) | Alto | Atualizar `makeRoom` para suportar até 8 capítulos (`i < 8`) colocando `sim` abaixo ou realocando prateleiras na sala (`ROOM_W=10`). |
| Usuário abrir URL antiga de `redacao.html`, `mobile.html` ou `uiux.html` | Baixo | Manter wrappers ou redirecionamento/aviso útil nesses arquivos (ou removê-los apenas se nada referenciar; manter redirect leve evita 404 em favoritos). |


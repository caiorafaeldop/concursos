# Tasks 001 — Revisão Edital TJPB, Cidade LGPD, Foco Discursiva e Leitor de Fontes

> **Spec:** `01-spec.md` | **Plan:** `03-plan.md` | **Log:** `05-implementation-log.md`

---

## Fase 1 — Acervo e Leitor de Fontes Oficiais

- [x] **T-001** Extrair e empacotar os textos oficiais de `fontes/tjpb/` em bundles JS carregáveis sob demanda (`jogo/fontes/data/*.js` + `jogo/fontes/index.js`). — *AC-008*
  - Critério: Todos os 17 documentos oficiais convertidos em JS válido (`node --check`), com metadados (título, categoria, índice de seções).
- [x] **T-002** Criar `jogo/fontes.html` (leitor responsivo mobile/desktop offline-first, busca instantânea no texto, sumário de capítulos/artigos, dark/light mode, fonte ajustável, botão Fechar/`postMessage` para o jogo). — *AC-008, AC-009*

## Fase 2 — Nova Cidade LGPD e Unificação Mobile+UI/UX

- [x] **T-003** Criar `jogo/materias/lgpd.js` (3 NPCs, desafio match 6 pares, 6 quick, boss com 8 questões estilo FGV baseadas nos artigos da Lei 13.709/2018, 6 capítulos de study com 2 questões cada). — *AC-001*
- [x] **T-004** Criar `jogo/aulas/lgpd.html` (6 capítulos profundos de LGPD com base literal em `LGPD_Lei_13709_2018.md`: princípios/conceitos, 10 bases legais + sensíveis + crianças, direitos do titular + vida real, Poder Público/Judiciário Arts. 23–30, Privacy by Design/Segurança/RIPD/Incidentes, Sanções ANPD + Pegadinhas FGV; ≥3 ilustrações SVG/tabelas por capítulo). — *AC-001*
- [x] **T-005** Criar `jogo/materias/interfaces.js` e `jogo/aulas/interfaces.html` unificando o essencial de Mobile + UI/UX/Acessibilidade em 5 capítulos enxutos com literalidade de `eMAGv31.md` e `wcag21.json`/`wcag22.json` + Material vs Cupertino. — *AC-003, AC-009*

## Fase 3 — Reorganização Técnica de Alto Peso e Remoção de Excessos

- [x] **T-006** Atualizar `jogo/aulas/algoritmos.html` e `jogo/materias/algoritmos.js`: remover Grafos, BFS, DFS e Dijkstra; transformar Cap. 3 em Árvores Binárias, BST, Percursos e Heaps; reduzir `Ω/Θ` ao estritamente contextual de Big-O no Cap. 1. — *AC-004*
- [x] **T-007** Atualizar `jogo/aulas/engsoft.html` e `jogo/materias/engsoft.js`: enxugar contagem exaustiva manual de tabelas APF no Cap. 4 (focando classificação ALI/AIE/EE/SE/CE + estimativas ágeis) e aprofundar Cap. 5 em SDD executável + harness assistido por IA. — *AC-004*
- [x] **T-008** Expandir `jogo/aulas/bd.html` e `jogo/materias/bd.js` para 7 capítulos adicionando Cap. 6 (**BI, DW, OLAP vs OLTP, ETL/ELT, Star Schema vs Snowflake**) e Cap. 7 (**Governança de Dados DMBOK + Comparativo SGBDs**). — *AC-005*
- [x] **T-009** Expandir `jogo/aulas/linguagens.html` e `jogo/materias/linguagens.js` para 7 capítulos profundos com leitura de código real: Java 21+, Jakarta/Spring Boot/JPA, JS/TS/Node, Angular/React, Python/FastAPI/Django (capítulo próprio), Dart/Flutter Widgets/Ciclo/Material×Cupertino/Rotas (capítulo próprio), Flutter Estado (Provider/Riverpod/Cubit/BLoC). — *AC-005*

## Fase 4 — Calibração Oficial (OWASP, COBIT, CNJ) e Discursiva (40 pts)

- [x] **T-010** Atualizar `jogo/aulas/seguranca.html` e `jogo/materias/seguranca.js` com fidelidade aos textos de OWASP Top 10 (2021), OWASP API Security (2023) e OWASP LLM v2 PT-BR (referenciando a cidade `lgpd` sem duplicar aula inteira). — *AC-007*
- [x] **T-011** Atualizar `jogo/aulas/govti.html` e `jogo/materias/govti.js` com COBIT 2019 (40 objetivos, 7 componentes, 11 fatores de desenho), BPMN 2.0 completo no Cap. 4, artigos reais da Res. CNJ 468/2022 e nota transparente sobre o PDTI TJPB (`HTTP 403`). — *AC-005*
- [x] **T-012** Atualizar `jogo/aulas/govjud.html` e `jogo/materias/govjud.js` com literalidade das Res. CNJ 335, 370, 396, 522, 615/2025 (revogando Res. 332/2020), revogação da 91/2009 + Res. Conjunta 03/2013 (MNI), MoReq-Jus 2ª Ed. e Marco Civil (prazos Arts. 13 e 15). — *AC-007*
- [x] **T-013** Expandir `jogo/aulas/discursiva.html` e `jogo/materias/discursiva.js` para 7 capítulos, absorvendo técnicas úteis de escrita em 30 linhas/Nota Zero e aprofundando os temas mais prováveis de Estudo de Caso (PDPJ-Br/Microsserviços, Segurança/OWASP/LGPD, IA/CNJ 615, CNJ 468/MoReq-Jus/eMAG) + 3 espelhos comentados de 30 linhas. — *AC-002, AC-006*

## Fase 5 — Conhecimentos Gerais (20% da prova) sem Duplicação + Redação Oficial

- [x] **T-014** Atualizar `jogo/aulas/portugues.html` e `jogo/study1.js` adicionando Cap. 8 (**Redação Oficial — Manual da Presidência da República**: Padrão Ofício, fechos, pronomes de tratamento, atributos). — *AC-002*
- [x] **T-015** Enxugar e deduplicar `jogo/aulas/logica.html` + `jogo/study2.js` + `jogo/content2.js` (5 caps focados em Proposições, Equivalências, Negações, Argumentos/Diagramas, Verdades/Associações/Sequências FGV) preservando `jogo/aulas/matematica.html` + `jogo/materias/matematica.js` (5 caps sem repetir Lógica). — *AC-003*

## Fase 6 — Integração do Jogo, PWA, Stubs e Validação Completa

- [x] **T-016** Atualizar `jogo/engine.js`, `jogo/index.html`, `jogo/aulas/index.html`, `jogo/aulas/aula.js`, `jogo/aulas/aula.css` e `jogo/sw.js`:
  - Grade 5×3 com `lgpd` e `interfaces`;
  - `GEN_ORDER` sem `redacao` e com prédio interativo `archive` (*Acervo Oficial*);
  - Atalho global `[F]` (`[F]ontes`, evitando conflito com `D` do WASD) + botão `📜 Fontes` nos controles móveis + botão `🏛️ Fontes` em `aula.js`;
  - `makeRoom` suportando até 8 capítulos (`portugues` com `sim` em `y=2`);
  - Stubs amigáveis em `redacao.html`, `mobile.html`, `uiux.html`;
  - Cache `tjpb-quest-v9` em `sw.js`. — *AC-001, AC-002, AC-003, AC-008, AC-009*
- [x] **T-017** Rodar suíte automatizada de verificação Node (`node --check` em todos os 50 `.js`, validação estrutural de todas as 18 matérias, contagem de capítulos/slides e sincronia de títulos em todos os `.html`, checagem de ausência de `http` em `src`/`href`, auditoria de ausência de Grafos/BFS/DFS em `algoritmos` e presença de todos os itens do edital). — *AC-009*

---

## Tabela de Cobertura (`AC ↔ Tasks`)

| AC | Tarefas |
|---|---|
| AC-001 | T-003, T-004, T-016 |
| AC-002 | T-013, T-014, T-016 |
| AC-003 | T-005, T-015, T-016 |
| AC-004 | T-006, T-007 |
| AC-005 | T-008, T-009, T-011 |
| AC-006 | T-013 |
| AC-007 | T-010, T-012 |
| AC-008 | T-001, T-002, T-016 |
| AC-009 | T-002, T-016, T-017 |

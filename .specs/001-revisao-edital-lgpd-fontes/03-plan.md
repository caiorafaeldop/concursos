# Plano Técnico 001 — Realinhamento ao Edital TJPB, Cidade LGPD, Foco Discursiva e Acervo de Fontes

> **Spec:** `.specs/001-revisao-edital-lgpd-fontes/01-spec.md`
> **Escopo:** `jogo/` (engine, aulas, matérias, leitor de fontes oficiais, PWA)

---

## 1. Visão Geral

Reestruturaremos a grade do mapa do jogo (`jogo/engine.js`) para manter a simetria perfeita **5×3 (15 cidades) nos Conhecimentos Específicos**, substituindo as duas cidades de baixíssimo ROI (`mobile` + `uiux` = ~2 questões) por uma cidade unificada (`interfaces`) e abrindo espaço para a **nova cidade `lgpd`**. Na banda inferior (**Conhecimentos Gerais**), removeremos a cidade duplicada `redacao`, inserindo no lugar a cidade/prédio especial **`fontes` (Acervo Oficial)** além de um atalho global (`[D]` / botão `📚 Docs`) para consulta rápida das leis, resoluções CNJ, OWASP, WCAG/eMAG e COBIT 2019 na íntegra. Por fim, atualizaremos e aprofundaremos as aulas de maior peso na prova objetiva e discursiva diretamente com base nos textos oficiais em `fontes/tjpb/`.

---

## 2. Decisões Técnicas-Chave

| Decisão | Opção Escolhida | Alternativas Consideradas | Justificativa |
|---|---|---|---|
| **Layout do mapa com LGPD** | Unificar `mobile` + `uiux` → `interfaces` e colocar `lgpd` na grade 5×3 de Específicos | Expandir o mapa para 4 linhas em Específicos (20 células, deixando 4 vazias) | Mantém a proporção 5×3, pontes, portais e trilhas intactos, e reflete na geografia do mapa que Mobile+UI/UX juntos equivalem a ~2 questões enquanto LGPD merece cidade própria. |
| **Substituição de `redacao` em Gerais** | Mover técnica útil para `discursiva` (7 caps), incluir Redação Oficial como Cap. 8 de `portugues` e usar o slot col 1 de `GEN_ORDER` para `fontes` (Acervo Oficial, prédio interativo sem boss) | Deixar `GEN_ORDER` com buraco vazio | Elimina cidade duplicada de redação sem deixar buraco visual no mapa e dá destaque imediato ao Acervo de Fontes Oficiais. |
| **Suporte a 7–8 capítulos na biblioteca** | Ajustar `makeRoom` (`engine.js`) para posicionar estantes 1..8 na linha `y=1` (ou `y=1` cols `1..8` e `sim` em `{x:8, y:2}` quando `chapters.length === 8`) | Limitar todas as matérias a 5–7 capítulos comprimidos | Permite que `linguagens`, `bd`, `discursiva` (7 caps) e `portugues` (8 caps com Redação Oficial) tenham espaço adequado sem espremer Python, Flutter, BI e Discursiva. |
| **Armazenamento e entrega de `fontes/`** | Script build Node (`tools/build-fontes.js` em memória ou executado em tempo de build) converte os `.md` e `.json` selecionados de `fontes/tjpb/` em arquivos limpos dentro de `jogo/fontes/` + `jogo/fontes/manifest.json` carregados sob demanda por `jogo/fontes.html` | Embutir 2 MB de textos em `<script>` dentro de `index.html` | Não atrasa o boot inicial do jogo nem estoura memória no celular; funciona offline via `fetch` no GitHub Pages e HTTP local; permite busca client-side rápida por documento. |
| **Compatibilidade de `fontes.html` com `file://` vs HTTP** | `manifest.json` + arquivos `.txt`/`.md` individuais + fallback/aviso amigável, ou bundle `.js` carregado dinamicamente via `<script>` (`jogo/fontes/data/<id>.js`)! | Apenas `fetch('fontes/...')` | **Carregar `jogo/fontes/data/<id>.js` via `<script>` dinâmico (`window.__FONTE_DOC`) funciona tanto em `https://` (GitHub Pages / PWA) quanto em `file://` local sem CORS!** |

> **Vitória arquitetural:** Usar `<script src="fontes/data/<id>.js">` sob demanda em `jogo/fontes.html` garante 100% de funcionamento em **GitHub Pages, PWA instalado e `file://` offline**, sem CORS e sem pesar o carregamento inicial de `index.html`!

---

## 3. Arquitetura e Mapeamento de Arquivos

### 3.1. Mapa de Cidades (`jogo/engine.js` & `jogo/index.html`)

```
BANDA SUPERIOR — CONHECIMENTOS ESPECÍFICOS (5×3 = 15 cidades · 80 pts)
[0] infra       [1] engsoft     [2] arqsoft     [3] algoritmos  [4] bd (+BI/GovDados)
[5] linguagens  [6] sysdesign   [7] devops      [8] seguranca   [9] lgpd (NOVA!)
[10] govti      [11] govjud     [12] ia         [13] interfaces [14] discursiva
--------------------------------- RIO (y=53..55) ---------------------------------
BANDA INFERIOR — CONHECIMENTOS GERAIS (5 colunas)
[0] portugues   [1] FONTES      [2] HUB         [3] logica      [4] matematica
(+Redação Ofic.) (Acervo Oficial) (Paraíba Central) (enxuto)     (sem duplicação)
```

### 3.2. Arquivos Criados / Alterados / Deprecados

1. **Novos:**
   * `jogo/materias/lgpd.js` & `jogo/aulas/lgpd.html`
   * `jogo/materias/interfaces.js` & `jogo/aulas/interfaces.html` (unificação cirúrgica de `mobile` + `uiux` com eMAG 3.1 e WCAG 2.1/2.2 oficiais)
   * `jogo/fontes.html` + `jogo/fontes/index.js` + `jogo/fontes/data/*.js` (gerados a partir de `fontes/tjpb/`)
2. **Alterados (Conteúdo & Edital):**
   * `jogo/aulas/portugues.html` & `jogo/study1.js`: Cap. 8 (**Redação Oficial — Manual da Presidência**)
   * `jogo/aulas/logica.html` & `jogo/study2.js` & `jogo/aulas/matematica.html` & `jogo/materias/matematica.js`: eliminação de duplicação (Conjuntos, Razão, Combinatória, Probabilidade ficam só em `matematica`; `logica` foca 100% em proposições, equivalências, negações, argumentos, diagramas e associação/sequências FGV)
   * `jogo/aulas/algoritmos.html` & `jogo/materias/algoritmos.js`: remover Grafos/BFS/DFS/Dijkstra; focar Cap. 3 em Árvores/BST/Heaps; enxugar `Ω/Θ` no Cap. 1
   * `jogo/aulas/engsoft.html` & `jogo/materias/engsoft.js`: enxugar tabela bruta de APF no Cap. 4; aprofundar SDD executável + harness de IA no Cap. 5
   * `jogo/aulas/bd.html` & `jogo/materias/bd.js`: ampliar para 7 capítulos (+Cap. 6 BI/DW/OLAP/Star Schema/ETL; +Cap. 7 Governança de Dados DMBOK & SGBDs)
   * `jogo/aulas/linguagens.html` & `jogo/materias/linguagens.js`: ampliar para 7 capítulos (Java Moderno, Jakarta/Spring/JPA, JS/TS/Node, Angular/React, Python/FastAPI/Django, Dart/Flutter + Material×Cupertino, Estado: Provider/Riverpod/Cubit/BLoC)
   * `jogo/aulas/govti.html` & `jogo/materias/govti.js`: atualizar COBIT 2019 (40 objetivos, 7 componentes, 11 fatores de desenho), incluir BPMN 2.0 no Cap. 4, detalhar Res. CNJ 468/2022 pelos artigos reais, declarar transparência no PDTI TJPB (`HTTP 403`)
   * `jogo/aulas/govjud.html` & `jogo/materias/govjud.js`: calibrar literalidade de PDPJ-Br (335), MNI (Conj. 03/2013 & revogação da 91/2009), ENTIC (370), ENSEC (396), MoReq-Jus (522), Marco Civil (12.965 Art. 13/15) e IA (615/2025)
   * `jogo/aulas/seguranca.html` & `jogo/materias/seguranca.js`: integrar OWASP Top 10 (2021), OWASP API Security (2023) e OWASP LLM v2 literais
   * `jogo/aulas/discursiva.html` & `jogo/materias/discursiva.js`: consolidar técnicas úteis de `redacao`, ampliar para 7 capítulos com aprofundamento nos temas prováveis de Estudo de Caso e 3 espelhos comentados de 30 linhas
3. **Alterados (Engine, UI, Atalhos e PWA):**
   * `jogo/engine.js`: `SUBJ_DEFS`, `GEN_ORDER` com slot especial `FONTES`, prédio interativo `kind:'archive'` (*Acervo Oficial*), atalho `[D]` (`openFontes()`), `makeRoom` suportando até 8 capítulos (`sim` em `(8,2)` quando `>=8` caps), `openFontes()` em iframe igual a `openAula`
   * `jogo/index.html`: carregar `materias/lgpd.js` e `materias/interfaces.js` (remover `mobile.js`, `uiux.js`, `redacao.js`), adicionar botão `📚 Docs` nos controles móveis (`#mctrl`), bump de query `?v=7`
   * `jogo/aulas/aula.css` & `jogo/aulas/aula.js`: link/botão discreto `📚 Fontes` quando em aula (opcional via `postMessage` `{type:'aula-fontes'}` para abrir o leitor de fontes direto)
   * `jogo/sw.js`: atualizar `CACHE = 'tjpb-quest-v9'` e lista `ASSETS`
   * `jogo/aulas/redacao.html`, `mobile.html`, `uiux.html`: manter stubs com link/redirect amigável para `discursiva.html` e `interfaces.html` caso alguém abra o arquivo direto pelos favoritos.

---

## 4. Documentos incluídos no Acervo Oficial (`jogo/fontes/data/`)

Extraídos **direta e integralmente** de `fontes/tjpb/`:
1. `lgpd` — **LGPD (Lei nº 13.709/2018)** completa (`LGPD_Lei_13709_2018.md`)
2. `marco-civil` — **Marco Civil da Internet (Lei nº 12.965/2014)** completo (`Marco_Civil_Lei_12965_2014.md`)
3. `owasp-top10` — **OWASP Top 10 (2021) PT-BR** completo (todos os arquivos A00..A11 unidos)
4. `owasp-api` — **OWASP API Security Top 10 (2023)** completo (intro + API1..API10)
5. `owasp-llm` — **OWASP Top 10 for LLM Applications v2 PT-BR** completo (LLM00..LLM10)
6. `cnj-335` — **Resolução CNJ nº 335/2020 (PDPJ-Br / PJe)** completa
7. `cnj-370` — **Resolução CNJ nº 370/2021 (ENTIC-JUD)** completa
8. `cnj-396` — **Resolução CNJ nº 396/2021 (ENSEC-PJ)** completa
9. `cnj-468` — **Resolução CNJ nº 468/2022 (Contratações STIC)** completa
10. `cnj-522` — **Resolução CNJ nº 522/2023 (MoReq-Jus)** + Resumo estruturado de **MoReq-Jus 2ª Ed. (2023)** (ou texto completo dividido/navegável — verificaremos o tamanho para não travar mobile!)
11. `cnj-615` — **Resolução CNJ nº 615/2025 (IA no Poder Judiciário)** completa
12. `cnj-mni` — **Resolução Conjunta CNJ/CNMP nº 03/2013 (MNI)** completa
13. `emag` — **eMAG 3.1 (Modelo de Acessibilidade em Governo Eletrônico)** completo (`eMAGv31.md`)
14. `wcag` — **WCAG 2.1 e 2.2 — Guia Completo de Critérios (A, AA, AAA)** estruturado a partir de `wcag21.json` + `wcag22.json` com destaque `[NOVO NA 2.2]`
15. `cobit-intro` & `cobit-obj` — **COBIT 2019 (Introduction/Methodology + 40 Objetivos de Governança e Gestão)**

---

## 5. Plano de Implementação em Fases

1. **Fase 1 — Infraestrutura & Acervo de Fontes Oficiais (`jogo/fontes.html` + `jogo/fontes/data/*.js`)**: construir e testar o gerador de dados oficiais e o leitor offline com busca e sumário.
2. **Fase 2 — Nova Cidade LGPD (`lgpd.js` / `lgpd.html`) & Unificação `interfaces` (`interfaces.js` / `interfaces.html`)**.
3. **Fase 3 — Reorganização do Núcleo Técnico de Alto Peso (`bd`, `linguagens`, `algoritmos`, `engsoft`)**.
4. **Fase 4 — Calibração Oficial CNJ/OWASP/COBIT (`seguranca`, `govti`, `govjud`) & Aprofundamento da Discursiva (`discursiva`)**.
5. **Fase 5 — Conhecimentos Gerais enxutos + Redação Oficial (`portugues`, `logica`, `matematica`)**.
6. **Fase 6 — Integração Engine/UI/PWA (`engine.js`, `index.html`, `sw.js`, stubs) & Auditoria/Testes Automatizados completos**.


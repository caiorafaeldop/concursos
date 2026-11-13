# Implementation Log 001 — Revisão Edital TJPB, Cidade LGPD, Foco Discursiva e Leitor de Fontes

> **Spec:** `01-spec.md` | **Plan:** `03-plan.md` | **Tasks:** `04-tasks.md`

---

## Resumo de Execução

Todas as tarefas `T-001` a `T-017` foram implementadas e validadas de ponta a ponta sobre o projeto estático/offline em `jogo/`.

### Entregas por Fase

1. **Acervo Oficial Offline (`T-001`, `T-002`):**
   - Gerados `jogo/fontes/index.js` + 17 bundles em `jogo/fontes/data/*.js` com textos integrais de `fontes/tjpb/`.
   - Criado `jogo/fontes.html` (leitor offline com catálogo agrupado por categoria, busca textual com destaque, controle de fonte, alternância claro/escuro e saída `postMessage` para o jogo).
   - Nota de transparência preservada: PDTI TJPB 2024–2026 documentado com aviso explícito (`HTTP 403` no portal institucional), sem fabricação de metas internas.

2. **Nova Cidade `lgpd` e Unificação `interfaces` (`T-003`..`T-005`):**
   - `jogo/materias/lgpd.js` e `jogo/aulas/lgpd.html` criados do zero com 6 capítulos literais da Lei nº 13.709/2018 (Princípios Arts. 1–6, 10 Bases/Sensíveis/Crianças Arts. 7–14, Direitos Arts. 17–22, Poder Público Arts. 23–30, RIPD/Segurança/Incidentes Arts. 38–48, Sanções ANPD Art. 52), 54 slides.
   - `jogo/materias/interfaces.js` e `jogo/aulas/interfaces.html` criados unificando Mobile + UI/UX + Acessibilidade (eMAG 3.1 com atalhos 1/2/3 e contraste 7:1; WCAG 2.1/2.2 com remoção do 4.1.1 e novos critérios de foco/alvo 24×24px/autenticação acessível), 5 capítulos / 45 slides.

3. **Alinhamento de ROI no Edital (`T-006`..`T-009`):**
   - `algoritmos`: removidos Grafos, BFS, DFS e Dijkstra; Cap. 3 convertido para Árvores Binárias, BST, Percursos e Heaps/Árvores B+.
   - `engsoft`: enxugada decoreba manual 3×3 de APF no Cap. 4; aprofundado SDD executável + harness assistido por IA no Cap. 5.
   - `bd`: expandido para 7 capítulos (78 slides) incluindo BI/DW/OLAP/Dimensional e Governança DMBOK/Data Lake/Dialetos SQL.
   - `linguagens`: expandido para 7 capítulos (74 slides) separando Python/FastAPI/Django (Cap. 5), Dart/Flutter Arquitetura (Cap. 6) e Gerência de Estado Flutter (Cap. 7).

4. **Calibração Normativa Literal e Prova Discursiva (`T-010`..`T-013`):**
   - `seguranca`: Marco Civil Arts. 13 (1 ano conexão) e 15 (6 meses acesso); OWASP API 2023 e OWASP LLM v2; ponte direta para a cidade `lgpd`.
   - `govti`: BPMN 2.0 (gateways XOR/AND/OR, Pool/Lane) e literalidade da Res. CNJ 468/2022 (Arts. 6º, 7º § único e 8º §2º) + nota PDTI HTTP 403.
   - `govjud`: literalidade da Res. CNJ 615/2025 (Art. 46 **revogou Res. 332/2020**; Art. 10 vedações de risco excessivo; Art. 43 §3º PDPJ-Br/Sinapses) e substituição da Res. 91/2009 por Res. Conjunta CNJ/CNMP 3/2013 (MNI) / Res. 522/2023 (MoReq-Jus).
   - `discursiva`: expandida para 7 capítulos (66 slides), absorvendo técnica de redação técnica em 30 linhas/coesão/crase/rasura da antiga oficina `redacao` (Cap. 6) e 3 Estudos de Caso Temáticos completos sem código (Cap. 7: OWASP API+LGPD, IA Res. 615+RAG, Contratação Res. 468+MoReq-Jus+WCAG 2.2).

5. **Conhecimentos Gerais sem Duplicação (`T-014`, `T-015`):**
   - `portugues`: adicionado Cap. 8 (**Redação Oficial — Manual da Presidência**, 105 slides totais), cobrindo Padrão Ofício, fechos *Respeitosamente*/*Atenciosamente* e pronomes de tratamento na 3ª pessoa.
   - `logica`: enxugada para 5 capítulos de RLM puro (59 slides), removendo duplicatas de Porcentagem, Juros, Conjuntos numéricos e Combinatória/Probabilidade (mantidos em `matematica`, 5 capítulos / 51 slides).

6. **Integração no Motor, PWA e Stubs (`T-016`, `T-017`):**
   - `jogo/engine.js`: grade 5×3 (`15 esp` + `3 ger` = 18 matérias, `TRIB_REQ = 14`), `FONTESD = 98` com edifício interativo `Acervo Oficial` na banda inferior (`GEN_ORDER`), `makeRoom` suportando 8 capítulos em biblioteca, atalho `[F]ontes` (evitando conflito com `D` do WASD) + `openFontes()` / `closeFontes()` sobre `z-index: 1000001`.
   - `jogo/index.html`, `jogo/aulas/index.html`, `jogo/aulas/aula.js`, `jogo/aulas/aula.css`, `jogo/sw.js` (`tjpb-quest-v9`): botões `📜 Fontes`, carregamento atualizado dos módulos, remoção dos scripts aposentados e stubs de redirecionamento offline em `redacao.html`, `mobile.html` e `uiux.html`.
   - Verificação automatizada (`verify-all.js`) executada após o último ajuste com `ok: true`, `0` falhas em 50 arquivos `.js`, 18 matérias, 17 documentos do Acervo Oficial e 36 assets no Service Worker.


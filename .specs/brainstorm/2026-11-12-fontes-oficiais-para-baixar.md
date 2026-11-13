# Brainstorm — Fontes Oficiais e Materiais para Baixar (TJPB × ABDI)

> Data: 2026-11-12 | Participantes: Usuário, Antigravity
> Status: aberto

## Problema

Definir **quais textos completos e fontes de referência** vale a pena baixar localmente para elevar a precisão técnica das aulas/questões (`jogo/`), eliminar os avisos *"confira o texto oficial"* já encontrados nos arquivos e calibrar ainda melhor o **estilo FGV** para **ABDI (20/12/2026)** e **TJPB (24/01/2027)**.

- **Quem sente esse problema?** O candidato estudando em par com a IA usando o jogo (`jogo/materias/`, `jogo/aulas/`) e o banco de provas (`provas/`).
- **Qual o custo de não resolver?**
  1. **Lacuna total na ABDI (prova em 20/12/2026):** Os 20 itens de Conhecimentos Institucionais da ABDI (24% da objetiva) exigem normativos próprios da agência que ainda não estão no workspace.
  2. **Risco de errar literalidade FGV no TJPB:** Em `govjud.js`, `govti.js`, `uiux.js`, `engsoft.js` e `discursiva.html` há ressalvas de *"confira o texto oficial"* em prazos, artigos e critérios exatos (Resoluções CNJ, PDTI TJPB, WCAG, Marco Civil).
  3. **Pouca amostra do estilo discursivo/objetivo recente:** `provas/markdown/` tem atualmente 6 provas objetivas FGV de 2026, sem os cadernos/espelhos das discursivas convertidos.
- **Como o sucesso se parece?** Uma pasta de fontes limpas (preferencialmente convertidas para `.md`/`.txt` pesquisável) cobrindo 100% da literalidade legal/normativa dos dois editais + núcleo oficial dos frameworks + mais provas FGV recentes.

## Restrições conhecidas

- **Ordem do calendário:** **ABDI é em 20/12/2026** e **TJPB em 24/01/2027** (`docs/00-GUIA-MESTRE-CONCURSOS-DEV.md`).
- **Eficiência de contexto:** PDFs extensos e diagramados consomem muitos tokens; arquivos `.md` ou `.txt` (como o pipeline já existente em `provas/converter.py`) permitem busca exata com precisão.
- **Offline e sem alucinação:** Conforme `jogo/materias/CONTRATO.md`, precisão normativa é inegociável — sem fonte oficial local, números de artigos/prazos não podem ser afirmados com segurança.

---

## Alternativas

### A: Kit Mínimo "Só Leis Secas + Normativos ABDI/CNJ" ("Do jeito mais simples possível")

Baixar apenas as leis brasileiras, resoluções do CNJ, PDTI do TJPB e regulamentos internos da ABDI. Não baixar PDFs longos de COBIT, ITIL ou manuais de tecnologia.

- **Vantagens:**
  1. Volume pequeno de arquivos (maioria tem de 5 a 40 páginas).
  2. Resolve 100% das citações de artigos, prazos, alçadas e competências que a FGV cobra literalmente.
  3. Cobre imediatamente a lacuna de Conhecimentos Institucionais da ABDI.
- **Desvantagens / riscos:**
  1. Não fecha detalhes específicos de frameworks que mudam entre versões (COBIT 2019: 40 objetivos e fatores de desenho; WCAG 2.2: novos critérios de sucesso; OWASP LLM Top 10).
  2. Não amplia a base de questões e discursivas reais FGV em `provas/`.
  3. Exige ainda confiar em memória do modelo para nomenclatura exata de frameworks extensos.
- **Esforço relativo:** P
- **Fit com a constituição:** ✅ Verde

### B: Kit Curado em 3 Camadas (Normativos + Guias Oficiais Resumidos + Provas FGV) — Recomendada

Criar uma pasta dedicada (ex.: `fontes/` com subpastas `abdi/`, `leis/`, `cnj-tjpb/`, `frameworks/`, convertendo o principal para `.md`/`.txt`) priorizada pela data da prova e pelo retorno em pontos:

1. **Camada 1 — Urgência ABDI (20/12) + Leis Comuns:**
   - **ABDI Institucional (20q = 24% da objetiva):** Lei nº 11.080/2004 (com redação da Lei nº 14.440/2022), Decreto nº 5.352/2005, Estatuto Social da ABDI, **Regulamento de Licitações e Contratos da ABDI** e **Regulamento de Convênios da ABDI** (8 questões só nesses dois!), Regulamento de Ética e Conduta (Res. CD nº 004/2022) e Planejamento Estratégico 2024–2029 (Res. CD nº 008/2023).
   - **Leis Digitais (ABDI + TJPB):** LGPD integral (Lei nº 13.709/2018), Marco Civil da Internet (Lei nº 12.965/2014), LAI (Lei nº 12.527/2011) e Lei nº 12.737/2012.
2. **Camada 2 — Normativos TJPB / Judiciário (24/01):**
   - **Resoluções CNJ:** nº 370/2021 (ENTIC-JUD), nº 396/2021 (ENSEC-PJ), nº 468/2022 (Contratações de TIC — alta chance na discursiva), **nº 615/2025** (IA no Judiciário — recente e pouco coberta em materiais antigos), nº 335/2020 (PDPJ-Br), nº 522/2023 (RDC-Arq) e nº 91/2009 (MNI).
   - **Documentos técnicos de órgão/governo:** **PDTI TJPB 2024–2026**, **MoReq-Jus**, **eMAG 3.1** e lista oficial de critérios **WCAG 2.1 / 2.2** (A/AA/AAA).
3. **Camada 3 — Frameworks + Estilo FGV:**
   - **COBIT 2019:** *Introduction and Methodology* + *Governance and Management Objectives* (os dois PDFs centrais da ISACA, com os 40 objetivos e 7 componentes).
   - **OWASP:** Top 10 (2021), API Security Top 10 (2023) e **OWASP Top 10 for LLM Applications** (cobre prompt injection, jailbreak e vazamento de contexto do edital TJPB).
   - **ITIL 4 / APF (IFPUG):** Guia/resumo oficial das 34 práticas do ITIL 4 e manual/resumo de contagem APF/IFPUG (SISP/MGI ajuda muito pela clareza didática em setor público).
   - **Mais provas FGV + espelhos de discursiva** para expandir `provas/organizadas/` e `provas/markdown/`.

- **Vantagens:**
  1. Ataca primeiro o que tem maior risco de erro literal e o concurso mais próximo (ABDI).
  2. Elimina os *"confira o texto oficial"* das matérias do jogo `jogo/materias/` e `jogo/aulas/`.
  3. Inclui COBIT 2019 e frameworks exatamente nos documentos de referência que a FGV usa para montar enunciados e distratores.
- **Desvantagens / riscos:**
  1. Exige que o usuário baixe os PDFs (especialmente da ISACA/COBIT, que pode pedir cadastro gratuito, e documentos do portal da ABDI/TJPB).
  2. Precisa de um passo rápido de conversão PDF → `.md`/`.txt` para ficar leve para a IA.
- **Esforço relativo:** M
- **Fit com a constituição:** ✅ Verde

### C: Híbrido Local (Leis/ABDI em Markdown) + NotebookLM para Livros/PDFs Pesados ("Fora da caixa")

Manter leis, resoluções CNJ e normativos da ABDI localmente em Markdown (busca exata por artigo), e subir os PDFs grandes (COBIT 2019 completo, livros/guias de ITIL 4, manuais extensos de MoReq-Jus e PDTI) em um caderno no **NotebookLM**, consultado daqui via MCP `gemini-notebook`.

- **Vantagens:**
  1. Zero poluição ou peso excessivo no repositório local para livros de centenas de páginas.
  2. Permite gerar resumos em áudio e consultas cruzadas sobre documentos longos no NotebookLM.
  3. Preserva busca exata local (`Select-String`) para leis e regulamentos curtos.
- **Desvantagens / riscos:**
  1. Depende de login/sessão ativa no MCP `gemini-notebook` e upload manual das fontes.
  2. Fica fora do git local do workspace.
- **Esforço relativo:** M
- **Fit com a constituição:** ⚠️ Amarelo (depende de autenticação externa no MCP)

### D: Dump Total Local (Livros, Especificações e Apostilas Completas em PDF)

Baixar manuais completos de todas as tecnologias (Java, Spring, Flutter, PostgreSQL, Kubernetes, Terraform, COBIT, ITIL, todas as leis) em PDF bruto dentro do workspace.

- **Vantagens:**
  1. Tudo disponível offline num lugar só.
  2. Nenhuma curadoria prévia necessária.
- **Desvantagens / riscos:**
  1. Documentações de linguagem/framework (Java, React, Kubernetes) já são bem consolidadas e mudam pouco em prova; o PDF bruto não melhora muito a qualidade frente ao espaço e ruído que gera.
  2. PDFs gigantes sem conversão atrapalham busca e aumentam chance de leitura parcial.
- **Esforço relativo:** G
- **Fit com a constituição:** ⚠️ Amarelo

---

## Comparação

| Critério | A: Só Leis/Normas | B: Curado em 3 Camadas | C: Local + NotebookLM | D: Dump Total PDF |
|----------|:-----------------:|:----------------------:|:---------------------:|:-----------------:|
| Esforço de coleta | P | M | M | G |
| Elimina *"confira o oficial"* | Parcial | **Total** | Total | Parcial |
| Cobre urgência ABDI (20/12) | ✅ | **✅** | ✅ | ✅ |
| Eficiência p/ IA consultar | **Alta** | **Alta** | Média (via MCP) | Baixa |
| Calibra estilo FGV | Baixa | **Alta** | Média | Baixa |

---

## Recomendação

Adotar a **Alternativa B (Kit Curado em 3 Camadas)**, começando pelos **normativos da ABDI + leis digitais (Camada 1)** por causa da prova em **20/12/2026**, seguido das **Resoluções CNJ + PDTI TJPB (Camada 2)** e **COBIT 2019 / OWASP / novas provas FGV (Camada 3)**.

Se quiser subir o **COBIT 2019 completo** sem pesar o workspace, dá para combinar com a **Alternativa C** jogando os PDFs grandes no NotebookLM e mantendo as leis/resoluções em `.md`/`.txt` aqui dentro.

## Próximos passos

1. Criar uma pasta `fontes/` (com `abdi/`, `leis/`, `cnj-tjpb/`, `frameworks/`) e adicionar mais PDFs de provas/discursivas FGV em `provas/`.
2. Converter os PDFs baixados para `.md`/`.txt` (no mesmo espírito de `provas/converter.py`).
3. Atualizar os pontos marcados com *"confira o texto oficial"* em `jogo/materias/` e `jogo/aulas/`, e criar o módulo/aulas de **Institucionais ABDI**.


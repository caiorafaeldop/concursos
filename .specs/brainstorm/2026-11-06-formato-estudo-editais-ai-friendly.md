# Brainstorm — Formato AI-Friendly para Estudo e Consulta de Editais (TJPB e ABDI)

> Data: 2026-11-06 | Participantes: Usuário, Antigravity
> Status: aberto

## Problema

Converter e estruturar os editais em PDF de dois concursos (TJPB — incluindo 1ª e 2ª retificações — e ABDI) em uma base de conhecimento fácil de consultar pela IA (baixo custo de tokens, busca exata, sem alucinação com retificações) e prática para organizar o estudo humano.

- **Quem sente esse problema?** O candidato estudando simultaneamente para 2 concursos (TJPB e ABDI) em par com a IA.
- **Qual o custo de não resolver?**
  1. **Risco de estudar errado:** O edital do TJPB já possui 2 retificações soltas em PDFs separados (`extrato-1a-retificacao` e `29.10-extrato-2a-retificacao`); consultar o PDF original sem cruzar as retificações induz a erro em datas ou conteúdo programático.
  2. **Ineficiência para a IA:** PDFs exigem leitura paginada pesada, quebram tabelas de pesos/cronograma e impedem buscas rápidas (`grep`) ou atualização de checklist de estudo.
  3. **Retrabalho nos estudos:** Sem cruzar o que cai nos dois editais (TJPB × ABDI), perde-se a chance de priorizar o conteúdo de interseção.
- **Como o sucesso se parece?** Uma estrutura na pasta `estudo/` onde os editais estão **compilados** (com retificações já aplicadas), os tópicos do conteúdo programático estão verticalizados com pesos e interseção entre os dois concursos, e tanto humano quanto IA conseguem consultar regras e atualizar o progresso instantaneamente.

## Restrições conhecidas

- **Arquivos atuais no workspace (`c:/Users/coliveirar/Desktop/A`):**
  - `edital-01-2026-abertura-do-processo-seletivo-abdi-1.pdf`
  - `edital-tjpb_19.10-versao-final.pdf`
  - `extrato-1a-retificacao-do-edital-tjpb.pdf`
  - `29.10-extrato-2a-retificacao-do-edital-tjpb.pdf`
  - Documentos acessórios (`autodeclaracao-preto-abdi.pdf`, `autodeclaracao-preto.pdf`, `negro.pdf`)
  - Pasta `estudo/` já criada (atualmente vazia).
- **Sem uso de navegador (Chrome):** Tudo deve funcionar localmente nos arquivos do workspace ou via ferramentas nativas/MCP.

---

## Alternativas

### A: Markdown Monolítico Compilado ("Do jeito mais simples possível")

Converter cada edital para um único arquivo Markdown limpo (`estudo/edital-tjpb-compilado.md` e `estudo/edital-abdi.md`), aplicando as duas retificações do TJPB diretamente no texto do edital principal (como uma "lei compilada").

- **Vantagens:**
  1. Setup imediato (fica pronto em minutos).
  2. Zero complexidade de pastas ou schemas.
  3. Resolve o problema das retificações espalhadas em PDFs diferentes.
- **Desvantagens / riscos:**
  1. Arquivos `.md` muito grandes ainda consomem bastante contexto quando lidos inteiros.
  2. Não separa regras burocráticas (inscrição, cotas, recursos) do conteúdo programático de estudo diário.
  3. Difícil cruzar matérias em comum entre TJPB e ABDI ou acompanhar progresso por tópico.
- **Esforço relativo:** P
- **Fit com a constituição:** ✅ Verde

### B: Knowledge Base Modular em Markdown + YAML Frontmatter + Edital Verticalizado (Recomendada)

Transformar a pasta `estudo/` em um repositório estruturado para IA e humano (estilo Obsidian / Docs-as-Code):
1. **Editais Compilados e Fatiados (`estudo/editais/`):** Separar cada concurso em `regras-e-cronograma.md`, `pesos-e-provas.md` e `conteudo-verticalizado.md` (já com 1ª e 2ª retificações do TJPB incorporadas e sinalizadas com `[Retificado]`).
2. **Matriz de Interseção (`estudo/00-matriz-tjpb-x-abdi.md` + `syllabus.json`):** Tabela e JSON cruzando todos os tópicos dos dois editais, destacando o que cai **nos dois** vs. o que é exclusivo de cada um, ordenado por peso/relevância.
3. **Cadernos por Matéria (`estudo/materias/<materia>.md`):** Arquivos com cabeçalho YAML (`concursos: [tjpb, abdi]`, `peso_tjpb`, `peso_abdi`, `status`) + checklist `- [ ]` de cada subtópico do edital + espaço para resumos, mapas em Mermaid e questões comentadas geradas pela IA.

- **Vantagens:**
  1. **100% AI-Native:** A IA usa `grep`, lê apenas o arquivo exato da matéria/regra em segundos e atualiza seu progresso direto nos checklists ou no `syllabus.json`.
  2. **Foco em resultado (Estudo Comparado):** Deixa visível o que estudar uma única vez para pontuar nos dois concursos.
  3. **Segurança jurídica do candidato:** O edital do TJPB fica consolidado com as retificações 1 e 2 embutidas.
- **Desvantagens / riscos:**
  1. Exige um script/processamento inicial para extrair, limpar e cruzar os PDFs com precisão.
  2. Requer manter a convenção de arquivos ao adicionar novos materiais.
  3. Visualização é baseada em Markdown (sem gráficos dinâmicos, a menos que combinada com HTML).
- **Esforço relativo:** M
- **Fit com a constituição:** ✅ Verde

### C: Base Estruturada JSON/SQLite + Dashboard HTML Interativo Local

Extrair os editais para um banco estruturado (`estudo/data/editais.json`) e gerar um painel interativo em um único arquivo `estudo/dashboard.html` (usando a skill `generative_ui` / HTML autocontido) com filtros por concurso, calculadora de pontos por peso, cronograma regressivo e progresso por tópico.

- **Vantagens:**
  1. Excelente visualização gráfica de progresso, pesos e contagem regressiva para as provas.
  2. Dados 100% tipados em JSON para scripts de análise e geração de simulados.
  3. Ótimo para simular cenários de nota de corte / estratégia de prova.
- **Desvantagens / riscos:**
  1. Menos prático para escrever resumos longos de estudo do que arquivos Markdown puros.
  2. Edição manual do conteúdo pelo usuário fica mais chata se estiver tudo preso em JSON/HTML.
  3. Maior esforço inicial de construção da interface.
- **Esforço relativo:** M/G
- **Fit com a constituição:** ✅ Verde

### D: Híbrido Local Markdown + NotebookLM via MCP ("Fora da caixa")

Adotar a estrutura modular em Markdown local (Alternativa B) e sincronizá-la com um caderno no **Google NotebookLM** usando o servidor MCP `gemini-notebook` já disponível no ambiente. Os arquivos Markdown compilados viram fontes no NotebookLM para gerar Audio Overviews (podcasts de revisão das matérias), flashcards e perguntas cruzadas.

- **Vantagens:**
  1. Une o melhor controle local (Markdown + checklists no VS Code/Antigravity) com recursos multimodais de estudo (áudio/resumos do NotebookLM).
  2. Permite ouvir revisões das matérias ou das regras do edital fora do computador.
  3. Tudo orquestrado direto daqui via MCP, sem precisar abrir navegador.
- **Desvantagens / riscos:**
  1. Depende de autenticação ativa no MCP `gemini-notebook`.
  2. Exige ressincronizar fontes quando os resumos locais mudarem muito.
  3. Adiciona uma camada externa ao workspace local.
- **Esforço relativo:** M
- **Fit com a constituição:** ⚠️ Amarelo (depende de sessão autenticada do MCP externo)

---

## Comparação

| Critério | A: MD Monolítico | B: MD Modular + YAML/JSON | C: JSON + Dashboard HTML | D: MD Local + NotebookLM (MCP) |
|----------|:----------------:|:-------------------------:|:------------------------:|:------------------------------:|
| Esforço inicial | P | M | M/G | M |
| Velocidade de consulta da IA | Média | **Alta** | Alta | Alta |
| Economia de tokens/contexto | Baixa | **Alta** | Alta | Alta |
| Facilidade p/ estudar e anotar | Média | **Alta** | Baixa | **Alta** |
| Cruzamento TJPB × ABDI | Manual | **Automático (Matriz)** | Automático | Automático |
| Fit / Independência | ✅ | ✅ | ✅ | ⚠️ (Requer auth MCP) |

---

## Recomendação

Recomendo a **Alternativa B (Knowledge Base Modular em Markdown + YAML Frontmatter + JSON de Edital Verticalizado)**, opcionalmente com um painel HTML leve de visão geral (pitada da C) ou integração com o NotebookLM (D) depois.

**Por quê?** Markdown com cabeçalho YAML + tabelas GFM + um `syllabus.json` é o "padrão ouro" para LLMs: eu consigo buscar qualquer regra ou tópico em milissegundos sem precisar reler dezenas de páginas de PDF, nunca confundo o texto original com as **2 retificações do TJPB** (porque já deixamos o edital compilado), e podemos gerar resumos, flashcards e baterias de questões direto dentro da pasta de cada matéria.

---

## Decisões em aberto / Próximos passos

1. **Qual(is) cargo(s)/área(s)** você vai prestar no edital do **TJPB** e no da **ABDI**? (Fundamental para extrairmos apenas o conteúdo programático e os pesos do seu cargo específico, ignorando as dezenas de páginas de outros cargos!).
2. Você prefere apenas a **Alternativa B** (Markdown Modular + Edital Verticalizado + JSON) ou quer que eu também gere um **Dashboard HTML** visual / conecte ao **NotebookLM**?


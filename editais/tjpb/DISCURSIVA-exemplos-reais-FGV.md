# Discursivas reais da FGV (TI) que já temos

Das 6 provas em `provas\organizadas\`, **3 têm discursiva** (ALEGO Dev, ALEGO Sis, MP/ES). TJ/SC, AMAZUL e NAV não têm.
Os PDFs trazem **só os enunciados**: não há padrão de resposta nem gabarito da discursiva. Por isso aqui estão as perguntas e a análise do estilo, sem resposta oficial.

> Diferença para o TJPB: nestas provas a discursiva é **lista de comandos** (cite, descreva, compare…). No TJPB a 2ª retificação diz **estudo de caso** (situação-problema → problemas → fundamentação → solução). O estilo FGV de enunciado, porém, é o mesmo, então vale treinar com estas.

---

## 1. ALEGO 2026 · Analista Legislativo – Desenvolvedor de Sistemas (2 questões)

### Questão 1 — Blockchain
> Contexto (6 linhas): novas tecnologias revolucionam áreas da sociedade; a ALEGO acompanha as inovações; uma tecnologia altera modelos de governança e gestão de dados (finanças, saúde, logística, administração pública). **Dito isto, faça o que se pede:**
> 1. Cite **4 características fundamentais** da tecnologia Blockchain.
> 2. **Descreva** as características elencadas acima.
> 3. Discorra sobre a **principal diferença** entre as Blockchain **públicas e privadas**.

### Questão 2 — Programação Orientada a Objetos
> Contexto: a ALEGO padroniza práticas de desenvolvimento de software e quer profissionais com compreensão sólida de orientação a objetos. **Disponha sobre:**
> 1. **Enumere e descreva** os pilares da POO.
> 2. Diga **qual pilar** o código apresentado evidencia e **justifique**.
>
> ```java
> public class Produto {
>     private double preco;
>     public double getPreco() { return preco; }
>     public void setPreco(double preco) { if (preco > 0) { this.preco = preco; } }
> }
> ```
*(Gabarito conceitual: encapsulamento. Atributo privado + getter/setter com validação. Os outros pilares: abstração, herança, polimorfismo.)*

## 2. ALEGO 2026 · Analista Legislativo – Analista de Sistemas (2 questões)

### Questão 1 — Bitcoin, hash e assinatura digital
> Contexto: o Bitcoin combinou criptografia, redes P2P e teoria dos jogos para criar confiança sem autoridade central; define função hash criptográfica. **Responda:**
> a) No Bitcoin, como funcionam os mecanismos de confiança que transformam uma base de dados comum em **blockchain**? Descreva a **macroestrutura** (ligação entre blocos) e a **microestrutura** (organização interna dos dados).
> b) Como operam no Bitcoin **Assinatura Digital** e **Certificado Digital**?
> c) Por que o **tamanho do hash** no Bitcoin aparece com **256 bits** (64 hex) e com **160 bits** (40 hex)?

### Questão 2 — Scrum
> Contexto: Scrum é o framework ágil mais usado para projetos complexos. **Faça o que é pedido:**
> a) Descreva os principais **papéis** da Scrum Team e suas atribuições.
> b) Descreva os **eventos/cerimônias** do Scrum e suas finalidades para garantir colaboração e resolução de problemas.
> c) Descreva os **artefatos** e suas finalidades.

## 3. MP/ES 2026 · Agente Especializado – Analista de Sistemas (2 questões)

### Questão 1 — Power BI e desempenho
> Contexto: o MP reestrutura a arquitetura de dados para indicadores de celeridade/produtividade processual; usa Power BI sobre bases SQL de alta volumetria; o gestor questiona a performance e a comunicação visual dos painéis.
> a) **Compare Medidas (Measures) e Colunas Calculadas** no Power BI quanto: 1) momento de execução (carga vs. consulta); 2) impacto em RAM e CPU; 3) adequação a grandes volumes, **justificando** a escolha sob a ótica de performance.
> b) **Defina Atributos Pré-Atentivos** e descreva **dois exemplos práticos** em um gráfico de barras para destacar varas que ultrapassaram a meta, indicando o atributo e o efeito perceptivo.
> c) Apresente **duas estratégias distintas** de modelagem/otimização no Power BI, a aplicação prática e como cada uma melhora o desempenho.

### Questão 2 — Normalização (com esquema SQL)
> Contexto: você é analista de sistemas do MPES, base PostgreSQL com 4 tabelas (`clube`, `jogador` com PK composta, `partida`, `gol` com FK composta para `jogador`). **Para cada item, indique se a estrutura atende à forma normal e justifique:** a) **1FN**; b) **2FN**; c) **3FN**.
> *(O enunciado traz o `CREATE TABLE` completo; veja o PDF `2026_MPES_..._PROVA+GABARITO.pdf`, pág. 18.)*

---

## O que esses exemplos ensinam
1. **O enunciado é "contexto curto + comandos numerados"**. Cada letra ou número é um item pontuável.
2. **Verbos de comando recorrentes:** *cite, enumere, descreva, compare, defina, justifique, indique, apresente, discorra, explique por que*. Quase sempre aparece **"justifique"**: não basta dar a resposta, é preciso dar a razão.
3. **Cobram conceito, não cola de código.** Quando há código, é para **identificar um conceito** (Q2 ALEGO) ou **analisar um esquema** (normalização).
4. **Pedem comparação ou contraste** ("principal diferença", "compare X e Y", "por que 256 e 160 bits"): treine **tabelas mentais** de contraste (medida vs. coluna calculada, blockchain pública vs. privada).
5. **Mistura de contexto institucional e conteúdo clássico.** O contexto usa "ALEGO", "MP", "Tribunal", mas o conteúdo cobrado é o de livro: Scrum, POO, normalização, hash, Power BI.
6. **Temas que se repetem nas objetivas:** blockchain apareceu em questões objetivas da ALEGO e depois virou discursiva. Tema que a banca gosta tende a cair nos dois formatos.

## Como usar para o TJPB
- Pegue cada enunciado acima e **responda em 30 linhas, à mão**. Cada item (a, b, c) ganha as linhas proporcionais.
- Em seguida, transforme o mesmo tema em **estudo de caso**: por exemplo, "o TJ vai usar blockchain para registrar atos processuais. Aponte problemas e proponha solução". Treine sempre as duas formas.
- Os temas que estes enunciados tocam e **também estão no edital do TJPB**: Scrum, POO, SQL e normalização (1FN–3FN), assinatura/certificado digital (PKI), arquitetura de dados. **Blockchain não aparece em nenhum ponto do edital do TJPB.** O Power BI só aparece no cargo de Ciência de Dados, não no seu. No seu cargo há apenas "Business Intelligence (BI)" genérico, no bloco comum. Não gaste tempo com blockchain nem com Power BI.

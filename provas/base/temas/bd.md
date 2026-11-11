# Banco de dados (SQL, modelagem, NoSQL, DW/BI, big data)

`bd` · 22 questões FGV (sem anuladas/incompletas). Gabarito ao final de cada uma.

## amazul26-q37 · AMAZUL 2026

Em um banco de dados MySQL, o otimizador de consultas decide qual é a melhor forma de executar uma query. Para analisar o plano de execução e identificar gargalos de performance, assinale a opção que apresenta o comando SQL que  é utilizado, e informação específica que pode indicar a necessidade de criação de um índice.

- (A) CHECK TABLE; a presença de "Using temporary" ou "Using filesort" na coluna Extra sugere problemas.
- (B) ANALYZE TABLE; a coluna Rows_examined indica o número de linhas lidas, e valores altos sugerem otimização.
- (C) SHOW INDEX; o campo Cardinality revela a seletividade do índice.
- (D) EXPLAIN; a presença de "Using filesort" ou "Using temporary" na coluna Extra do resultado indica que o MySQL e execução de operações custosas que, frequentemente, poderiam ser evitadas com a indexação apropriada.
- (E) OPTIMIZE TABLE; a coluna Key_len indica o comprimento da chave utilizada, e valores baixos sugerem otimização.

**Gabarito:** D

## amazul26-q54 · AMAZUL 2026

No contexto de gerenciamento de banco de dados relacional (RDBMS), as transações devem aderir às propriedades ACID para garantir a integridade e consistência dos dados, mesmo em caso de falhas no sistema.

Assinale a opção que descreve corretamente a propriedade da Isolamento (Isolation).

- (A) Garante que uma transação completa seja permanentemente registrada no banco de dados, após a confirmação (commit), e que os efeitos de uma transação incompleta sejam desfeitos (rollback) em caso de falha.
- (B) Assegura que uma transação leve o banco de dados de um estado válido para outro estado válido, mantendo todas as restrições (constraints) e regras de integridade intactas.
- (C) Refere-se à capacidade do sistema de gerenciar múltiplas transações concorrentes de forma que a execução de uma transação não interfira na outra, como se estivessem sendo executadas sequencialmente.
- (D) Garante que todas as operações dentro de uma transação sejam tratadas como uma única unidade de trabalho; ou todas são concluídas com sucesso, ou nenhuma delas é aplicada.
- (E) Descreve a capacidade do banco de dados de se recuperar de falhas de hardware ou software, garantindo que os dados não sejam perdidos e possam ser restaurados para o último estado consistente.

**Gabarito:** C

## mpes26-q42 · MP/ES 2026 · gabarito preliminar

No contexto de Sistemas de Gerenciamento de Bancos de Dados Relacionais (SGBD), um conjunto de operações é considerado uma transação confiável se atender a critérios rigorosos que garantam, por exemplo, que uma falha no sistema não deixa os dados em um estado parcial ou corrompido. Sobre as propriedades fundamentais que regem as transações em bancos de dados, assinale a opção que indica a propriedade que, uma vez confirmada, assegura que a operação não será perdida, mesmo em caso de falha de energia ou colapso do sistema.

- (A) Atomicidade.
- (B) Consistência.
- (C) Durabilidade
- (D) Isolamento.
- (E) Persistência.

**Gabarito:** C

## mpes26-q43 · MP/ES 2026 · gabarito preliminar

A Normalização é uma técnica aplicada ao projeto lógico para evitar anomalias de atualização e redundância. Em consequência, foram feitas algumas adaptações na estrutura de dados para atender aos critérios das diferentes Formas Normais. Uma tabela é considerada como estando na Primeira Forma Normal (1FN) quando

- (A) a tabela possui um índice único criado sobre a chave primária.
- (B) não existem dependências transitivas entre atributos não chave.
- (C) existe pelo menos uma chave estrangeira vinculada a outra tabela normalizada.
- (D) todos os seus atributos possuem apenas valores atômicos e não existem grupos repetitivos.
- (E) não existem dependências parciais, ou seja, todos os atributos dependem da chave primária total.

**Gabarito:** D

## mpes26-q44 · MP/ES 2026 · gabarito preliminar

Em uma repartição há 150 funcionários lotados em 12 departamentos. Cada departamento possui diferentes estruturas funcionais, de modo que os salários dos funcionários oscilam conforme a função exercida. Uma consulta solicitada por meio da Lei de Acesso à Informação (LAI) pede para listar todos os departamentos que possuem uma média salarial superior a R$ 5.000,00 (cinco mil reais). A cláusula SQL que deve ser utilizada para filtrar esse resultado após o agrupamento dos dados é a

- (A) WHERE
- (B) HAVING
- (C) GROUP BY
- (D) ORDER BY
- (E) GROUP FILTER

**Gabarito:** B

## mpes26-q45 · MP/ES 2026 · gabarito preliminar

No desenvolvimento de sistemas de banco de dados robustos, os gatilhos (triggers) funcionam como mecanismos automatizados para garantir a integridade semântica e manter trilhas de auditoria. Na programação desses gatilhos, as variáveis de transição (geralmente chamadas de OLD e NEW) permitem ao desenvolvedor acessar diferentes estados de uma tupla (linha) no momento do disparo.

Considerando um gatilho disparado por uma instrução delete, assinale a opção que indica a disponibilidade e o conteúdo dessas variáveis.

- (A) Apenas a variável NEW está disponível, contendo os valores nulos.
- (B) Ambas as variáveis estão disponíveis e possuem os mesmos valores.
- (C) Nenhuma das variáveis está disponível em operações de exclusão.
- (D) Apenas a variável OLD está disponível, contendo os dados do registro que será removido.
- (E) Ambas as variáveis estão disponíveis, mas a OLD contém valores nulos e a NEW contém os dados removidos.

**Gabarito:** D

## mpes26-q46 · MP/ES 2026 · gabarito preliminar

A criação de visões em bancos de dados permite apresentar um extrato personalizado sobre os registros reais, simplificando consultas complexas e protegendo informações sensíveis.

Assinale a opção que indica a sintaxe correta, em SQL, para criar uma visão chamada 'v_vendas' que mostre todos os registros de uma tabela denominada 'pedidos'.

- (A) WITH VIEW v_vendas AS (SELECT * FROM pedidos)
- (B) CREATE VIEW v_vendas AS SELECT * FROM pedidos
- (C) INSERT VIEW v_vendas VALUES (SELECT ALL FROM pedidos)
- (D) NEW VIEW v_vendas FROM (SELECT * FROM pedidos)
- (E) ALTER TABLE pedidos ADD VIEW v_vendas AS SELECT * FROM pedidos

**Gabarito:** B

## mpes26-q47 · MP/ES 2026 · gabarito preliminar

O comando explain plan (ou similar, dependendo do SGBD) é um recurso valioso para nortear as decisões de um administrador ou desenvolvedor de banco de dados quando o volume de dados pode comprometer o desempenho das consultas.

Assinale a opção que apresenta, corretamente, a situação em que o uso do plano de execução é mais indicado para resolver um problema de performance.

- (A) Quando se deseja verificar se o SGBD está convertendo tipos de dados de forma implícita e invalidando o uso de índices.
- (B) Quando é necessário garantir que os dados sensíveis de uma tabela sejam criptografados antes do armazenamento.
- (C) Quando é necessário auditar o usuário que realizou a última alteração em um registro específico da tabela.
- (D) Quando o desenvolvedor deseja alterar permanentemente a ordem física das linhas no disco rígido.
- (E) Quando uma cópia física de segurança (backup) de uma visão materializada será criada.

**Gabarito:** A

## mpes26-q48 · MP/ES 2026 · gabarito preliminar

Deseja-se controlar o comportamento dinâmico entre os elementos gráficos de uma mesma página de um relatório desenvolvido no Power BI Desktop. Para isso, é utilizado o recurso de edição de interações entre visuais.

Com base nas funcionalidades desse recurso e nas boas práticas de visualização de dados, analise as afirmativas a seguir.

I. A seleção de um ponto de dado em um visual de origem pode ser configurada para filtrar ou destacar (realçar) os dados exibidos nos demais visuais da página.

II. O desenvolvedor pode modificar as interações padrão, ativando, desativando ou alterando o comportamento de cada visual de destino de forma independente.

III. A gestão criteriosa das interações entre visuais contribui para reduzir a carga cognitiva do usuário, evitando interpretações equivocadas e favorecendo a clareza da análise.

Está correto o que se afirma em

- (A) III, apenas.
- (B) I e II, apenas.
- (C) I e III, apenas.
- (D) II e III, apenas.
- (E) I, II e III.

**Gabarito:** E

## mpes26-q49 · MP/ES 2026 · gabarito preliminar

Um relatório analítico é estruturado para subsidiar a tomada de decisão, iniciando com a apresentação de um indicador consolidado e, na sequência, explorando desdobramentos por diferentes dimensões, como região e período, com destaque para variações relevantes. Essa forma de organização da informação está associada ao princípio de storytelling com dados que consiste em

- (A) utilizar múltiplas codificações visuais redundantes para reforçar a leitura dos dados.
- (B) aplicar o design progressivo de informação, priorizando a visão macro antes do detalhamento analítico.
- (C) evitar qualquer forma de direcionamento interpretativo, mantendo a neutralidade na apresentação dos dados.
- (D) maximizar a quantidade de informação exibida, priorizando a densidade informacional em detrimento da hierarquia visual.
- (E) apresentar inicialmente detalhes específicos para, posteriormente, contextualizar os resultados de forma agregada.

**Gabarito:** B

## nav26-q43 · NAV Brasil 2026 · gabarito preliminar

O Sistema de Alocação de Pistas e Coordenação de Slots de Pouso de um aeroporto internacional de alta densidade opera sobre um SGBD relacional transacional ACID. Em momentos de pico de tráfego, múltiplos controladores de voo executam requisições síncronas concorrentes para buscar e reservar os mesmos intervalos de horários disponíveis. A gerência de TI identificou que, durante execuções paralelas, uma transação T1 lê um conjunto de slots livres atendendo a um critério de busca geográfica; simultaneamente, uma transação T2 insere e confirma uma nova linha de slot de pouso que atende perfeitamente ao mesmo critério de T1; ao reexecutar a mesma busca na mesma transação, T1 passa a ver a nova linha inserida por T2, gerando inconsistências nas telas de planejamento dos controladores. A anomalia de concorrência transacional descrita no estudo de caso e o nível de isolamento ANSI SQL mais baixo capaz de impedir por completo a ocorrência desse fenômeno são, respectivamente,

- (A) Leitura Suja (Dirty Read) e nível Read Committed.
- (B) Leitura Não-Repetível (Non-repeatable Read) e nível Repeatable Read.
- (C) Leitura Fantasma (Phantom Read) e nível Serializable.
- (D) Perda de Atualização (Lost Update) e nível Read Uncommitted.
- (E) Gravação Fantasma (Phantom Write) e nível Snapshot Isolation.

**Gabarito:** C

## nav26-q58 · NAV Brasil 2026 · gabarito preliminar

Durante a modelagem do banco de dados relacional que armazenará o histórico de planos de voo aprovados, um analista projetou uma tabela contendo os campos: ID_PlanoVoo (chave primária), Prefixo_Aeronave, Comandante_Nome, Telefone_Comandante e DDD_Telefone. O processo de normalização visa eliminar redundâncias e anomalias de atualização em bancos de dados relacionais através da aplicação de regras formais conhecidas como Formas Normais (FN).

Assinale a opção que apresenta a condição exigida para que uma tabela esteja estritamente na Segunda Forma Normal (2FN).

- (A) A tabela deve estar previamente na 1FN e nenhum atributo não chave pode depender de forma parcial de uma chave primária composta.
- (B) Todos os atributos não chave devem possuir valores atômicos (indivisíveis), sem matrizes ou grupos repetitivos aninhados.
- (C) A tabela deve estar na 3FN e remover dependências transitivas entre colunas que não pertencem ao conjunto de chaves candidatas.
- (D) Toda chave estrangeira mapeada na tabela deve obrigatoriamente apontar para uma chave primária do tipo autoincremento numérico.
- (E) Devem ser criadas tabelas separadas para cada linha inserida, garantindo que o banco não cresça horizontalmente ao longo do tempo.

**Gabarito:** A

## nav26-q59 · NAV Brasil 2026 · gabarito preliminar

O administrador de banco de dados do Centro de Controle de Área (ACC) precisa remover permanentemente do banco de dados relacional de homologação uma tabela inteira chamada Logs_antigos_2020, incluindo toda a sua estrutura de colunas, índices e dados armazenados. A linguagem SQL é dividida em subgrupos como DDL para manipulação de estruturas e para manipulação de dados operacionais. O comando DDL padrão utilizado para eliminar de forma definitiva a estrutura e os dados da tabela citada é:

- (A) DELETE TABLE Logs_Antigos_2020;
- (B) REMOVE FROM TABLE Logs_Antigos_2020;
- (C) DROP TABLE Logs_Antigos_2020;
- (D) TRUNCATE ROW Logs_Antigos_2020;
- (E) ALTER TABLE Logs_Antigos_2020 DROP ALL;

**Gabarito:** C

## nav26-q60 · NAV Brasil 2026 · gabarito preliminar

Durante o processamento de uma transferência de plano de voo entre dois servidores regionais de controle de tráfego, ocorre uma falha catastrófica de energia elétrica exatamente após a exclusão do registro no Servidor A, mas antes da inserção correspondente no Servidor B. Para evitar inconsistências graves e corrupção de dados em cenários de falha, os Sistemas de Gerenciamento de Banco de Dados (SGBD) devem suportar rigorosamente as propriedades ACID para suas transações. A propriedade ACID, responsável por garantir que uma operação seja executada em sua totalidade, ou seja, completamente desfeita, sem estados intermediários inválidos, é a(o)

- (A) Atomicidade.
- (B) Consistência.
- (C) Isolamento.
- (D) Durabilidade.
- (E) Disponibilidade.

**Gabarito:** A

## tjsc26-q51 · TJ/SC 2026

OLTP e OLAP são mecanismos de gerenciamento de dados com propósitos distintos. A esse respeito, relacione as opções 1 e 2, da coluna da esquerda, às respectivas características, da coluna da direita.

(   )  Altera pequenas quantidades de dados com frequência e, em geral, apresenta maior equilíbrio entre operações de leitura e gravação.

(   )  Armazena grandes volume de dados históricos, o que normalmente exige maior capacidade de armazenamento.

(   )  Executa consultas mais complexas, envolvendo uma grande quantidade de registros.

(   )  É comumente utilizado em transações 1.  OLTP 2.  OLAP bancárias online, compras eletrônicas ou envio de mensagens de texto.

Assinale a opção que indica a relação correta, na ordem apresentada.

- (A) 1 – 2 – 2 – 1.
- (B) 1 – 2 – 1 – 2.
- (C) 1 – 1 – 2 – 1.
- (D) 2 – 2 – 2 – 1.
- (E) 2 – 1 – 1 – 2.

**Gabarito:** A

## tjsc26-q52 · TJ/SC 2026

No contexto da modelagem de dados relacional, analise as afirmativas a seguir e assinale (V) para verdadeira e (F) para falsa.

(   )  As tabelas são representações das relações, sendo que as linhas (ou tuplas) correspondem aos registros, enquanto as colunas correspondem aos atributos.

(   )  Quando se fixa que certo campo só pode aceitar valores numéricos, trata-se de uma restrição de entidade.

(   )  A forma normal que elimina a dependência transitiva é a terceira forma normal.

(   )  Uma entidade é considerada forte quando utiliza uma chave primária composta formada pela chave primária de outra entidade e um atributo discriminador (chave parcial).

As afirmativas são, respectivamente,

- (A) V – F – V – F.
- (B) F – V – V – F.
- (C) V – V – F – V.
- (D) F – F – V – V.
- (E) V – F – F – F.

**Gabarito:** A

## tjsc26-q53 · TJ/SC 2026

No desenvolvimento de soluções de Business Intelligence, a modelagem dimensional é amplamente utilizada para organizar os dados de forma a facilitar a análise e a performance de consultas. Sobre os conceitos e as componentes dessa técnica de modelagem, analise as afirmativas a seguir.

I. As tabelas fato são projetadas para armazenar métricas quantitativas resultantes de processos ou eventos de negócio.

II. As tabelas dimensão fornecem o contexto necessário para os fatos, contendo atributos descritivos.

III. A modelagem dimensional baseia-se na normalização extensiva de suas tabelas como princípio de organização dos dados.

Está correto o que se afirma em

- (A) I, apenas.
- (B) II, apenas.
- (C) I e II, apenas.
- (D) II e III, apenas.
- (E) I, II e III.

**Gabarito:** C

## tjsc26-q54 · TJ/SC 2026

Letícia é analista de sistemas do Tribunal de Justiça e elabora análises e relatórios sobre os processos de sua região. No desempenho de suas atribuições, realiza operações em OLAP (Online Analytical Processing). Em uma dessas análises, utilizando um cubo de dados com as dimensões processos, tempo e cidade, ela deverá realizar as seguintes operações:

I. detalhar a quantidade de processos de ano para trimestre;

II. filtrar os processos, considerando apenas os de natureza criminal; e

III. rotacionar a visualização dos dados, trocando linhas por colunas. A sequência de operações que Letícia deverá realizar é, respectivamente,

- (A) Drill-down, Dice e Pivot.
- (B) Slice, Roll-Up e Drill-down.
- (C) Drill-down, Slice e Pivot.
- (D) Drill-down, Pivot e Dice.
- (E) Slice, Roll-up e Dice.

**Gabarito:** C

## tjsc26-q55 · TJ/SC 2026

Jonas é administrador de banco de dados do Tribunal de Justiça de Santa Catarina. Em sua rotina, realiza criação, manipulação e definição de dados por meio de linguagem SQL, atendendo às demandas da equipe de desenvolvimento de sistemas. Em determinada tarefa, verificou que havia criado uma tabela de forma equivocada e que ela não seria mais necessária, inclusive em sua estrutura.

Diante disso, para eliminar definitivamente essa tabela, ele deve utilizar o comando

- (A) TRUNCATE table.
- (B) DELETE table.
- (C) UPDATE table.
- (D) GRANT table.
- (E) DROP table.

**Gabarito:** E

## tjsc26-q56 · TJ/SC 2026

No contexto de Sistemas Gerenciadores de Bancos de Dados Relacionais (SGBDR), como SQL Server, PostgreSQL e Oracle, o conceito de transação é fundamental para o processamento de dados. Uma transação corresponde a uma unidade lógica de trabalho que deve ser executada de forma completa e consistente. O uso de transações tem como objetivo principal garantir que o banco de dados

- (A) maximize a redundância controlada de dados para otimizar a velocidade de recuperação em caso de falhas de hardware.
- (B) mantenha a consistência e a integridade dos dados, assegurando o cumprimento das propriedades de atomicidade, consistência, isolamento e durabilidade.
- (C) dispense a utilização de estruturas de indexação e de restrições de chave estrangeira (foreign keys) nas tabelas.
- (D) centralize o processamento analítico no servidor de aplicação, eliminando a necessidade de mecanismos de controle de concorrência.
- (E) restrinja o acesso simultâneo de múltiplos usuários, priorizando operações de leitura em detrimento de operações de escrita.

**Gabarito:** B

## tjsc26-q57 · TJ/SC 2026

Um Tribunal de Justiça identificou degradação de desempenho em consultas que filtram registros por múltiplas colunas combinadas por operadores lógicos AND na cláusula WHERE. A equipe de administração de banco de dados (DBA) decide criar um índice composto (multi-column index) para otimizar essas operações.

Considerando o funcionamento de índices compostos baseados em árvores balanceadas (B-Tree), em sistemas gerenciadores de bancos de dados relacionais, assinale a afirmativa correta.

- (A) A ordem das colunas na definição do índice não interfere em sua eficiência, uma vez que o otimizador de consultas reordena os predicados automaticamente para garantir o uso do índice.
- (B) A utilização do índice composto é otimizada quando os predicados da consulta seguem a ordem de definição das colunas no índice, respeitando a regra do prefixo à esquerda (leftmost prefix).
- (C) Um índice composto só pode ser utilizado pelo motor de execução se todas as colunas que o compõem forem obrigatoriamente referenciadas na cláusula de filtragem da consulta.
- (D) A criação de índices compostos em colunas com baixa seletividade garante, de forma determinística, a substituição do escaneamento sequencial de tabela (table scan) pelo escaneamento de índice (index scan).
- (E) Índices compostos tornam-se desnecessários em sistemas modernos que implementam técnicas como index skip scan, sendo a ordem das colunas irrelevante para o desempenho das consultas.

**Gabarito:** B

## tjsc26-q58 · TJ/SC 2026

Com relação às arquiteturas de armazenamento e processamento de dados em larga escala, analise as afirmativas a seguir e assinale (V) para verdadeira e (F) para falsa.

(   ) Os Data Lakes fundamentam-se no conceito de schema-on- read, permitindo o armazenamento de dados em seu formato bruto sem a necessidade de uma estrutura rígida no momento da ingestão.

(   ) Os Data Warehouses operam sob o modelo de schema-on- write, exigindo que os dados sejam transformados e estruturados conforme um esquema definido antes de sua carga e disponibilização para consulta.

(   ) Os Data Lakes são repositórios projetados exclusivamente para o armazenamento de dados não estruturados, sendo tecnicamente incompatíveis para dados estruturados provenientes de sistemas transacionais.

As afirmativas são, respectivamente,

- (A) V – V – F.
- (B) V – F – V.
- (C) F – V – V.
- (D) V – F – F.
- (E) F – V – F. Infraestrutura de TI e Computação em Nuvem

**Gabarito:** A

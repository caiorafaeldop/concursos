window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['bd'] = {
  id: 'bd',
  name: 'Banco de Dados',
  npcs: [
    { name: 'Dona Tupla, a Fichária', lines: [
      'Relação é tabela, tupla é linha, atributo é coluna. Grau conta colunas; cardinalidade conta linhas.',
      'σ (seleção) corta LINHAS e vira o WHERE. π (projeção) corta COLUNAS e vira a lista do SELECT.',
      'Superchave identifica a linha. Candidata é a superchave mínima. A primária é a candidata escolhida.',
      'R × S tem |R|·|S| linhas. Junção é derivada: σ aplicada sobre o produto cartesiano.'
    ] },
    { name: 'Seu Normaldo, o Arrumador', lines: [
      'A chave, toda a chave e nada além da chave: 1FN atômica, 2FN sem parcial, 3FN sem transitiva.',
      '2FN só falha com chave COMPOSTA: coluna que depende de só um pedaço da chave mora na casa errada.',
      '3FN: coluna comum não manda em coluna comum. id_aluno → id_turma → professor? Separe a turma!',
      'tel1, tel2, tel3 não resolvem a 1FN: é grupo repetitivo. Crie a tabela de telefones.'
    ] },
    { name: 'Vovó Vetorina', lines: [
      'WHERE filtra linhas antes de agrupar; HAVING filtra grupos depois. COUNT(*) conta NULL; COUNT(col) não.',
      'TRUNCATE é DDL, GRANT é DCL, COMMIT é TCL. E NOT IN com NULL na lista não devolve nada!',
      'Função na coluna, LIKE com % no início e coluna fora do prefixo do índice composto matam o índice.',
      'Embedding põe significados parecidos perto. HNSW é busca aproximada (ANN): rápida, mas sem garantia exata.',
      'BI/DW: OLTP normaliza p/ transação; OLAP desnormaliza em Star Schema (fato + dimensões) p/ análise. ETL transforma antes; ELT carrega no Lakehouse e transforma depois!'
    ] }
  ],
  boss: {
    name: 'Prof. Codd Júnior',
    intro: 'Sou neto do pai do modelo relacional. Se você confundir σ com π ou WHERE com HAVING, eu dou ROLLBACK na sua aprovação!',
    questions: [
      { q: 'Considere as relações R, com 6 tuplas e grau 4, e S, com 3 tuplas e grau 2. O produto cartesiano R × S possui:',
        options: ['9 tuplas e grau 6', '18 tuplas e grau 8', '18 tuplas e grau 6', '9 tuplas e grau 8', '6 tuplas e grau 6'],
        answer: 2, explain: 'No produto cartesiano as cardinalidades se multiplicam (6·3 = 18) e os graus se somam (4+2 = 6). Somar tuplas ou multiplicar graus são as confusões mais comuns.' },
      { q: 'A tabela itemPedido(id_pedido, id_produto, quantidade, descricao_produto), com chave (id_pedido, id_produto), viola qual forma normal?',
        options: ['1FN, pois há chave composta', '3FN apenas, por dependência transitiva', 'BCNF apenas, pois está na 3FN', '2FN, pois descricao_produto depende só de id_produto', 'Nenhuma, pois todos os atributos são atômicos'],
        answer: 3, explain: 'descricao_produto depende de parte da chave (id_produto): dependência parcial, que viola a 2FN. Chave composta não viola a 1FN, e a análise de 3FN pressupõe a 2FN.' },
      { q: 'Deseja-se listar as varas que possuem mais de 50 processos ativos. A forma correta é:',
        options: ['WHERE status = \'ativo\' AND COUNT(*) > 50 GROUP BY vara', 'WHERE status = \'ativo\' GROUP BY vara HAVING COUNT(*) > 50', 'GROUP BY vara WHERE COUNT(*) > 50', 'HAVING status = \'ativo\' GROUP BY vara', 'WHERE COUNT(status) > 50 ORDER BY vara'],
        answer: 1, explain: 'O filtro de linha (status) vai no WHERE, antes do agrupamento; a condição sobre agregação (COUNT) vai no HAVING, depois do GROUP BY. Agregação no WHERE gera erro.' },
      { q: 'Sobre a classificação dos comandos SQL, assinale a correta.',
        options: ['TRUNCATE é DML, pois remove linhas', 'GRANT e REVOKE pertencem à TCL', 'SAVEPOINT pertence à DDL', 'ALTER e DROP pertencem à DML', 'COMMIT e ROLLBACK pertencem à TCL'],
        answer: 4, explain: 'COMMIT, ROLLBACK e SAVEPOINT são TCL. TRUNCATE é DDL; GRANT/REVOKE são DCL; ALTER e DROP são DDL.' },
      { q: 'Há índice B-tree na coluna nome. Qual condição tende a impedir o uso eficiente desse índice?',
        options: ['WHERE UPPER(nome) = \'ANA\', sem índice de expressão', 'WHERE nome = \'Ana\'', 'WHERE nome LIKE \'An%\'', 'WHERE nome BETWEEN \'A\' AND \'C\'', 'ORDER BY nome'],
        answer: 0, explain: 'Aplicar função à coluna faz o SGBD comparar um valor que não está no índice, levando a full scan (salvo índice de expressão). Igualdade, prefixo, faixa e ordenação aproveitam a B-tree.' },
      { q: 'Sobre views, é correto afirmar que:',
        options: ['toda view armazena fisicamente o resultado da consulta', 'view materializada está sempre atualizada em tempo real', 'a view comum guarda apenas a definição da consulta, lida das tabelas-base a cada uso', 'views não podem ser usadas para restringir acesso a colunas', 'WITH CHECK OPTION torna a view somente leitura'],
        answer: 2, explain: 'A view comum é virtual: guarda a consulta. Quem armazena é a materializada, que depende de refresh. Views servem para segurança, e WITH CHECK OPTION impede gravar linhas fora do filtro.' },
      { q: 'Segundo o teorema CAP, ao ocorrer uma partição de rede num sistema distribuído, deve-se escolher entre:',
        options: ['particionamento e replicação', 'atomicidade e durabilidade', 'escalabilidade vertical e horizontal', 'consistência e disponibilidade', 'normalização e desnormalização'],
        answer: 3, explain: 'CAP: diante de partição (P), o sistema prioriza consistência (C) ou disponibilidade (A). Atomicidade e durabilidade são propriedades ACID, não do CAP.' },
      { q: 'Num banco vetorial usado em RAG, o índice HNSW é caracterizado por:',
        options: ['garantir sempre os k vizinhos exatos', 'realizar busca aproximada de vizinhos, trocando parte do recall por velocidade', 'funcionar apenas com distância euclidiana', 'substituir a necessidade de gerar embeddings', 'ser um índice B-tree sobre o texto original'],
        answer: 1, explain: 'HNSW é um índice ANN baseado em grafo em camadas: aproximado, rápido e ajustável. Não garante vizinhos exatos, aceita várias métricas e opera sobre os embeddings, não sobre o texto.' }
    ]
  },
  match: { title: 'Ligue o conceito', pairs: [
    ['σ (seleção)', 'filtra linhas pela condição'],
    ['π (projeção)', 'escolhe colunas'],
    ['2FN', 'sem dependência parcial'],
    ['3FN', 'sem dependência transitiva'],
    ['HAVING', 'filtra grupos após o GROUP BY'],
    ['HNSW', 'índice aproximado para vetores']
  ] },
  quick: [
    { q: 'Qual família SQL inclui o TRUNCATE?', options: ['DDL', 'DML', 'DCL', 'TCL'], answer: 0, explain: 'TRUNCATE é DDL: esvazia a tabela sem WHERE.' },
    { q: 'Qual cláusula filtra grupos depois da agregação?', options: ['WHERE', 'ORDER BY', 'HAVING', 'FROM'], answer: 2, explain: 'HAVING atua sobre os grupos do GROUP BY.' },
    { q: 'Dependência transitiva viola qual forma normal?', options: ['1FN', '2FN', 'BCNF apenas', '3FN'], answer: 3, explain: 'Chave → A → B é dependência transitiva: viola a 3FN.' },
    { q: 'Qual operação da álgebra corta colunas?', options: ['Seleção', 'Projeção', 'Divisão', 'União'], answer: 1, explain: 'A projeção π escolhe atributos (colunas).' },
    { q: 'MongoDB é qual tipo de NoSQL?', options: ['Documento', 'Grafo', 'Chave-valor', 'Wide-column'], answer: 0, explain: 'Guarda documentos BSON em coleções.' },
    { q: 'Qual comando confirma uma transação?', options: ['GRANT', 'SAVEPOINT', 'ROLLBACK', 'COMMIT'], answer: 3, explain: 'COMMIT torna as alterações permanentes.' }
  ],
  study: {
    title: 'Biblioteca de Banco de Dados',
    chapters: [
      { title: 'Modelo e álgebra relacional',
        pages: [
          'Vocabulário\n• Relação = tabela; tupla = linha; atributo = coluna\n• Domínio = valores permitidos\n• Grau = nº de atributos; cardinalidade = nº de tuplas\n• Teoria: relação é conjunto (sem ordem, sem tuplas repetidas, valores atômicos)\n• Níveis: conceitual (DER) → lógico (tabelas) → físico (SGBD)\n• 1:N vira FK no lado N; N:M vira tabela associativa',
          'Chaves e integridade\n• Superchave: identifica a tupla (pode ter sobra)\n• Candidata: superchave mínima\n• Primária: candidata escolhida; as outras são alternativas\n• Integridade de entidade: PK não nula\n• Integridade referencial: FK aponta para PK existente ou é nula\n• ON DELETE: RESTRICT/NO ACTION, CASCADE, SET NULL',
          'Álgebra relacional\n• σ seleção: linhas (≈ WHERE)\n• π projeção: colunas (≈ lista do SELECT), elimina duplicatas\n• ∪ ∩ −: exigem compatibilidade; − não é comutativa\n• × produto: |R|·|S| tuplas, graus somados\n• ⋈ junção = σ(R × S); natural iguala colunas de mesmo nome\n• ÷ divisão: "para todos"\n• Fundamentais: σ π ∪ − × ρ'
        ],
        tip: 'σ é peneira de linhas, π é tesoura de colunas. Junção, interseção e divisão são derivadas.',
        quiz: [
          { q: 'Na álgebra relacional, a operação que corresponde à cláusula WHERE do SQL é:',
            options: ['projeção', 'produto cartesiano', 'seleção', 'divisão', 'renomeação'],
            answer: 2, explain: 'WHERE filtra tuplas, papel da seleção σ. A projeção corresponde à lista de colunas do SELECT.' },
          { q: 'Na relação servidor(matricula, cpf, nome), com matrícula e CPF únicos, é correto afirmar que:',
            options: ['{matricula, nome} é chave candidata', '{cpf} é superchave e também chave candidata', '{nome} é superchave', 'só pode haver uma chave candidata', 'a chave primária pode conter NULL'],
            answer: 1, explain: '{cpf} identifica a tupla e é mínima, logo é candidata (e superchave). {matricula, nome} é superchave não mínima; nome repete; PK não aceita NULL.' }
        ] },
      { title: 'Normalização 1FN a 3FN',
        pages: [
          'Base\n• Objetivo: reduzir redundância e anomalias de inserção, atualização e exclusão\n• Dependência funcional X → Y: mesmo X, sempre o mesmo Y\n• Atributo primo: pertence a alguma chave candidata\n• Frase-chave: "a chave, toda a chave e nada além da chave"',
          '1FN e 2FN\n• 1FN: atributos atômicos; sem multivalorados, compostos ou grupos repetitivos (tel1, tel2…)\n• 2FN: 1FN + nenhum não primo depende de PARTE da chave (sem dependência parcial)\n• Com chave simples, a 2FN é automática\n• Correção: criar tabela com o determinante como chave e mover o atributo',
          '3FN e além\n• 3FN: 2FN + sem dependência transitiva (chave → A → B)\n• Forma geral: em X → A, X é superchave ou A é primo\n• BCNF: todo determinante é superchave (mais rígida)\n• Toda BCNF está na 3FN; o inverso nem sempre\n• Desnormalizar pode ser escolha de desempenho (BI, relatórios)'
        ],
        tip: 'Chave composta? Teste a 2FN. Depois veja se alguma coluna comum manda em outra: é 3FN.',
        quiz: [
          { q: 'A relação funcionario(id, nome, cod_depto, nome_depto), com chave id, viola:',
            options: ['a 1FN, por ter quatro atributos', 'a 2FN, por dependência parcial', 'nenhuma forma normal', 'a 3FN, pois cod_depto determina nome_depto', 'apenas a 4FN'],
            answer: 3, explain: 'id → cod_depto → nome_depto é dependência transitiva (3FN). Com chave simples não há dependência parcial, então a 2FN está atendida.' },
          { q: 'Sobre as formas normais, assinale a correta.',
            options: ['Uma tabela com chave primária simples, em 1FN, está obrigatoriamente na 2FN', 'Toda tabela na 3FN está na BCNF', 'A 1FN proíbe chaves compostas', 'Criar colunas tel1, tel2 e tel3 atende à 1FN', 'Normalizar sempre melhora o desempenho de consultas'],
            answer: 0, explain: 'Sem chave composta não existe dependência de parte da chave. BCNF ⊂ 3FN, não o contrário; tel1/tel2/tel3 é grupo repetitivo; normalizar aumenta junções.' }
        ] },
      { title: 'SQL: DDL, DML, DCL, TCL, subconsultas, GROUP BY e HAVING',
        pages: [
          'Famílias\n• DDL: CREATE, ALTER, DROP, TRUNCATE\n• DML: SELECT, INSERT, UPDATE, DELETE (MERGE)\n• DCL: GRANT, REVOKE\n• TCL: COMMIT, ROLLBACK, SAVEPOINT\n• Alguns autores: SELECT na DQL\n• Oracle e MySQL: DDL faz commit implícito\n• UPDATE/DELETE sem WHERE atingem todas as linhas',
          'Consultas\n• Ordem lógica: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY\n• WHERE filtra linhas; HAVING filtra grupos\n• COUNT(*) conta linhas; COUNT(col), SUM, AVG ignoram NULL\n• NULL: use IS NULL; comparação dá UNKNOWN\n• INNER: só pares; LEFT: mantém a esquerda com NULL',
          'Subconsultas e transações\n• Escalar: WHERE valor > (SELECT AVG(valor) …)\n• IN, EXISTS; correlacionada usa coluna da consulta externa\n• NOT IN com NULL na lista: nenhuma linha\n• ACID: atomicidade, consistência, isolamento, durabilidade\n• ROLLBACK TO savepoint desfaz só o que veio depois dele'
        ],
        tip: 'Agregação no filtro? HAVING. TRUNCATE é DDL. NOT IN + NULL = vazio.',
        quiz: [
          { q: 'Numa tabela com 5 linhas, uma delas com valor NULL, SELECT COUNT(*), COUNT(valor) retorna:',
            options: ['5 e 5', '4 e 4', '4 e 5', '5 e 4', 'erro, pois há NULL'],
            answer: 3, explain: 'COUNT(*) conta todas as linhas (5); COUNT(valor) ignora o NULL (4).' },
          { q: 'Uma transação executa INSERT A; SAVEPOINT s1; INSERT B; ROLLBACK TO s1; COMMIT. O que fica gravado?',
            options: ['A e B', 'nada', 'apenas A', 'apenas B', 'depende do GRANT'],
            answer: 2, explain: 'ROLLBACK TO s1 desfaz só o que veio após o savepoint (B). O COMMIT confirma A.' }
        ] },
      { title: 'Views, triggers, procedures e tuning (índices, planos)',
        pages: [
          'Objetos\n• View: tabela virtual, guarda só a consulta; usada para segurança e simplificação\n• View materializada: guarda o resultado; precisa de refresh\n• WITH CHECK OPTION: impede gravar fora do filtro\n• Trigger: automático em INSERT/UPDATE/DELETE; BEFORE, AFTER, INSTEAD OF; por linha ou comando; OLD/NEW\n• Function entra no SELECT; procedure via CALL/EXEC',
          'Otimizador e planos\n• Parser → otimizador por custo → plano → executor\n• Estatísticas: ANALYZE (PostgreSQL), UPDATE STATISTICS (SQL Server), DBMS_STATS (Oracle)\n• EXPLAIN estima; EXPLAIN ANALYZE executa de verdade\n• Seq Scan × Index Scan\n• Junções: nested loop, hash join, merge join',
          'Índices e partições\n• B-tree: =, faixas, ORDER BY, LIKE \'abc%\'\n• Não usa: função na coluna, LIKE \'%x\', coluna fora do prefixo do composto\n• Índice deixa escritas mais lentas e ocupa espaço\n• Clusterizado (SQL Server): um por tabela\n• Particionamento RANGE/LIST/HASH + partition pruning\n• Sharding: dados em servidores diferentes'
        ],
        tip: 'View guarda a pergunta; materializada guarda a resposta. Função na coluna desliga o índice.',
        quiz: [
          { q: 'No PostgreSQL, o comando que exibe o plano com tempos reais, executando a consulta, é:',
            options: ['EXPLAIN', 'ANALYZE TABLE', 'SHOW PLAN', 'DESCRIBE', 'EXPLAIN ANALYZE'],
            answer: 4, explain: 'EXPLAIN ANALYZE executa e mostra tempos e linhas reais. EXPLAIN só estima; ANALYZE sozinho atualiza estatísticas.' },
          { q: 'Há índice composto em (vara, ano). Qual filtro, em regra, aproveita melhor esse índice?',
            options: ['WHERE ano = 2024', 'WHERE vara = 3 AND ano = 2024', 'WHERE ano + 1 = 2025', 'WHERE CAST(vara AS TEXT) = \'3\'', 'WHERE vara + 0 = 3'],
            answer: 1, explain: 'O índice composto segue o prefixo à esquerda: vara e ano juntos usam o índice. Filtrar só ano ou aplicar expressões às colunas, em regra, impede o uso.' }
        ] },
      { title: 'NoSQL e bancos vetoriais',
        pages: [
          'Fundamentos\n• NoSQL = Not only SQL\n• Escala horizontal, esquema flexível, modelagem por consulta\n• CAP: na partição de rede, escolher consistência ou disponibilidade\n• BASE: basicamente disponível, estado flexível, consistência eventual\n• ACID: consistência forte por transação',
          'Os 4 tipos\n• Chave-valor (Redis, DynamoDB): cache, sessão, TTL\n• Documento (MongoDB): BSON, coleções, _id, find, pipeline $match/$group/$sort, $lookup\n• Wide-column (Cassandra, HBase): chave de partição + clustering, sem JOIN\n• Grafo (Neo4j): nós e arestas com propriedades, Cypher\n• "Colunar" analítico (BI) ≠ wide-column',
          'Bancos vetoriais\n• Embedding: vetor numérico; significados parecidos ficam perto\n• Medidas: cosseno, euclidiana (L2), produto interno\n• pgvector: <=> cosseno, <-> L2, <#> produto interno negativo\n• kNN exato × ANN (HNSW, IVF): rapidez com perda de recall\n• RAG: busca top-k e entrega trechos ao LLM\n• Busca híbrida: vetor + palavra-chave + metadados'
        ],
        tip: 'Cabideiro, pasta, estante, mural e mapa: chave-valor, documento, wide-column, grafo e vetorial.',
        quiz: [
          { q: 'Para analisar relações em vários níveis entre partes, advogados e empresas, o modelo mais adequado é:',
            options: ['chave-valor', 'documento', 'grafo', 'wide-column', 'arquivo sequencial'],
            answer: 2, explain: 'Bancos de grafos tratam relacionamentos como dados de primeira classe e percorrem arestas em profundidade sem múltiplos JOINs.' },
          { q: 'Sobre bancos vetoriais, assinale a correta.',
            options: ['A busca é feita por igualdade exata de texto', 'kNN exato e ANN sempre retornam o mesmo resultado', 'Embeddings só podem ter duas dimensões', 'pgvector não permite uso de SQL', 'A busca retorna os vetores mais próximos do vetor de consulta segundo uma métrica de similaridade'],
            answer: 4, explain: 'Busca vetorial é por similaridade (top-k). ANN pode diferir do exato; embeddings têm centenas de dimensões; pgvector é extensão do PostgreSQL usada via SQL.' }
        ] },
      { title: 'Business Intelligence, Data Warehouse, OLAP e Modelagem Dimensional',
        pages: [
          'OLTP vs OLAP (Data Warehouse de Inmon vs Data Marts de Kimball):\n• OLTP (transacional): muitas escritas curtas, dados atuais, alta normalização (3FN) para evitar anomalias.\n• OLAP / DW (analítico): consultas pesadas de leitura/agregação, dados históricos (não volátil, variante no tempo, integrado, orientado a assuntos — definição clássica de Inmon), desnormalizado.\n• Data Mart: subconjunto departamental do DW (ex.: Varas Cíveis ou RH).',
          'Modelagem Dimensional (Star Schema vs Snowflake):\n• Tabela Fato: centro da estrela, guarda métricas numéricas aditivas/semi-aditivas e FKs para dimensões (ex.: qtd_processos, valor_custas).\n• Dimensões: contexto descritivo (Tempo, Comarca, Magistrado, Classe).\n• Star Schema (Esquema Estrela): dimensões desnormalizadas em 1 tabela cada → menos JOINs e queries mais rápidas!\n• Snowflake (Floco de Neve): normaliza as dimensões em sub-tabelas → economiza espaço, exige mais JOINs.',
          'Operações OLAP e ETL vs ELT:\n• Drill-down (detalhar: ano→mês→dia) / Roll-up (agregar: dia→mês) · Slice (fatiar 1 dimensão) / Dice (recortar cubo em várias dimensões) · Pivot (rotacionar eixos).\n• ETL (Extract → Transform → Load): transforma em servidor intermediário antes de gravar no DW estruturado.\n• ELT (Extract → Load → Transform): carrega dados brutos primeiro (Data Lake / Lakehouse) e transforma sob demanda com o poder do próprio cluster.'
        ],
        tip: 'Star Schema = dimensões desnormalizadas (menos JOINs!). Drill-down = descer ao detalhe; Roll-up = subir/agregar.',
        quiz: [
          { q: 'Em modelagem dimensional de Data Warehouse, comparando o Esquema Estrela (Star Schema) ao Floco de Neve (Snowflake), o Star Schema diferencia-se por:',
            options: ['Manter as tabelas de dimensão desnormalizadas, reduzindo a quantidade de JOINs em consultas analíticas.', 'Exigir normalização até a 5FN em todas as dimensões.', 'Eliminar completamente a tabela fato.', 'Armazenar apenas logs operacionais em tempo real sem histórico.', 'Substituir SQL exclusivamente por consultas em grafos Cypher.'],
            answer: 0, explain: 'Star Schema desnormaliza as dimensões (menos JOINs, consultas OLAP mais rápidas). Snowflake normaliza as dimensões em hierarquias, economizando espaço às custas de mais JOINs.' },
          { q: 'Ao analisar o painel de produtividade do tribunal, o gestor parte do total anual por região e desce para visualizar mês a mês por comarca. Essa operação OLAP é chamada de:',
            options: ['Roll-up', 'Drill-down', 'Pivot', 'TRUNCATE', 'VACUUM'],
            answer: 1, explain: 'Descer na hierarquia de granularidade (ano → mês → dia) é Drill-down. O caminho inverso (agregar do detalhe para o resumo) é Roll-up.' }
        ] },
      { title: 'Governança de Dados (DMBOK), Data Lake e Dialetos SQL',
        pages: [
          'Governança de Dados (DAMA-DMBOK) & Arquiteturas:\n• Data Steward (curador): zela pela qualidade, definição e conformidade dos dados do domínio.\n• Metadados (técnicos, de negócio e operacionais) + Linhagem de Dados (origem até consumo) + Catálogo de Dados.\n• Data Lake: armazena dados estruturados, semiestruturados e não estruturados no formato nativo (schema-on-read).\n• Data Lakehouse: une governança/ACID transacional de DW sobre armazenamento barato de Data Lake (Delta Lake/Iceberg).',
          'Dialetos SQL cobrados no Edital (PostgreSQL, Oracle, MySQL, SQL Server):\n• Limitação de linhas: PostgreSQL/MySQL usam LIMIT n; Oracle 12c+ / SQL Server padrão usam FETCH FIRST n ROWS ONLY (SQL Server legado também usa TOP n).\n• Concatenação de strings: PostgreSQL e Oracle usam ||; SQL Server usa + / CONCAT(); MySQL exige PIPES_AS_CONCAT para || (padrão é OR lógico!).\n• Autoincremento: PostgreSQL (SERIAL / GENERATED ALWAYS AS IDENTITY); MySQL (AUTO_INCREMENT); SQL Server (IDENTITY); Oracle 12c+ (GENERATED ... AS IDENTITY / SEQUENCE).',
          'Recursos modernos de prova:\n• CTE (WITH cte AS (...)) e CTE Recursiva para hierarquias organizacionais.\n• Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD() com OVER (PARTITION BY ... ORDER BY ...) — NÃO reduzem linhas como GROUP BY!\n• PostgreSQL específico: MVCC com VACUUM para limpar tuplas mortas, JSONB indexável com GIN.'
        ],
        tip: 'Schema-on-write = DW tradicional. Schema-on-read = Data Lake. Window Function (OVER) mantém todas as linhas!',
        quiz: [
          { q: 'Qual característica distingue um Data Lake tradicional de um Data Warehouse corporativo clássico?',
            options: ['O Data Lake armazena dados brutos estruturados, semiestruturados e não estruturados aplicando esquema na leitura (schema-on-read).', 'O Data Lake aceita apenas tabelas estritamente normalizadas na 3FN.', 'O Data Warehouse utiliza exclusivamente schema-on-read em arquivos Parquet sem modelo definido.', 'O Data Lake proíbe armazenamento em nuvem orientada a objetos.', 'O Data Warehouse é sempre um banco NoSQL chave-valor.'],
            answer: 0, explain: 'Data Warehouse aplica schema-on-write com dados estruturados e limpos na carga; Data Lake aceita diversos formatos brutos com schema-on-read.' },
          { q: 'Em SQL analítico nos principais SGBDs (PostgreSQL, Oracle, SQL Server, MySQL 8+), ao usar SUM(valor) OVER (PARTITION BY vara ORDER BY data), o resultado:',
            options: ['Agrupa e reduz a saída para apenas uma linha por vara.', 'Calcula a soma acumulada/particionada preservando todas as linhas originais da consulta.', 'Gera erro por falta da cláusula HAVING.', 'Executa commit implícito na transação.', 'Equivale exatamente a TRUNCATE TABLE.'],
            answer: 1, explain: 'Funções de janela (Window Functions com OVER) calculam métricas sobre partições sem colapsar as linhas como faz o GROUP BY.' }
        ] }
    ]
  }
};

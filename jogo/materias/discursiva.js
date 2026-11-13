window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['discursiva'] = {
  id: 'discursiva',
  name: 'Prova Discursiva',
  npcs: [
    {
      name: 'Corretora FGV',
      lines: [
        'Não escreva redação de tema social! A discursiva é um parecer técnico de estudo de caso em até 30 linhas.',
        'Cada verbo do enunciado (identifique, justifique, proponha) é um comando que vale ponto no padrão de resposta.',
        'Nota mínima é 24 de 40 na ampla (19,2 nas cotas), mas a meta de 1º lugar é 34 a 37 pontos.',
        'Deixe 60 a 75 minutos livres na prova de 5h para rascunhar tópicos e passar a limpo com letra legível.'
      ]
    },
    {
      name: 'Fiscal da Nota Zero',
      lines: [
        'Regra de ouro do edital 10.7.3: NÃO escreva trechos de código, SQL ou YAML na resposta definitiva!',
        'Código é considerado alheio à língua portuguesa e pode zerar sua prova. Descreva em português com nomes técnicos.',
        'Use apenas caneta azul ou preta e nunca coloque nome, rubrica, seta ou desenho que identifique você.',
        'Fugir do tema, do formato estudo de caso ou dar resposta técnica plenamente incorreta também dá nota zero.'
      ]
    },
    {
      name: 'Arquiteto Parecerista',
      lines: [
        'Estruture em 5 blocos: Diagnóstico (3-4L), Fundamentação (8-10L), Proposta (10-12L), Riscos/Trade-offs (3-4L) e Fecho (1-2L).',
        'Troque frases vagas por termos exatos: teorema CAP, circuit breaker, OAuth 2.0, RAG e mascaramento de logs.',
        'Em casos do Judiciário, conecte técnica e norma: PDPJ-Br (Res. 335/2020), MNI (Res. 91/2009), LGPD e normas de IA do CNJ.',
        'Toda solução tem custo: mostre o trade-off (ex.: consistência forte na gravação vs. eventual na leitura).'
      ]
    }
  ],
  boss: {
    name: 'Prof. Banca Examinadora',
    intro: 'Trinta linhas, caneta na mão e zero código na folha. Mostre que você resolve o caso com técnica e norma!',
    questions: [
      {
        q: 'Conforme o edital do TJPB (2ª retificação, itens 10.7 a 10.7.3), a prova discursiva do cargo de Analista Judiciário – Desenvolvimento de Sistemas exige:',
        options: [
          'uma dissertação argumentativa de até 60 linhas sobre tema de atualidades brasileiras',
          'um estudo de caso de até 30 linhas sobre Conhecimentos Específicos, valendo 40 pontos',
          'duas questões discursivas de 15 linhas cada, sendo permitida consulta à legislação seca',
          'a implementação completa de uma API REST em Java e SQL na folha de resposta definitiva',
          'um resumo executivo de no mínimo 50 linhas escrito obrigatoriamente a lápis antes da caneta'
        ],
        answer: 1,
        explain: 'O edital prevê 1 questão na modalidade estudo de caso, até 30 linhas, valendo 40 pontos, sobre Conhecimentos Específicos, à mão com caneta azul ou preta e sem consulta.'
      },
      {
        q: 'Durante a prova discursiva do TJPB, um candidato escreve um bloco de comando SELECT e CREATE TABLE em SQL para exemplificar a solução de banco de dados. À luz do item 10.7.3 do edital, essa conduta:',
        options: [
          'garante pontuação máxima em fundamentação técnica por demonstrar domínio sintático',
          'é obrigatória sempre que o estudo de caso mencionar modelagem relacional ou índices',
          'gera risco direto de nota ZERO por conter códigos alheios à língua portuguesa escrita',
          'é convertida em bônus de clareza caso o candidato traduza o código na linha seguinte',
          'só é penalizada se o candidato usar caneta azul em vez de caneta preta'
        ],
        answer: 2,
        explain: 'O item 10.7.3(d) atribui nota zero a texto com "códigos alheios à língua portuguesa escrita". Deve-se descrever a solução em português usando termos como "índice composto" e "chave estrangeira".'
      },
      {
        q: 'No esqueleto recomendado de 30 linhas para um estudo de caso técnico da FGV, a distribuição mais equilibrada para atender análise, fundamentação, proposta e trade-offs é:',
        options: [
          '20 linhas de introdução histórica, 5 linhas de conclusão e 5 linhas de exemplos genéricos',
          'Diagnóstico (3-4L), Fundamentação (8-10L), Proposta ordenada (10-12L), Riscos/Trade-offs (3-4L) e Fecho (1-2L)',
          'apenas tópicos soltos numerados sem conectivos, ocupando no máximo 10 linhas',
          'cópia literal do enunciado nas 12 primeiras linhas seguida de opinião pessoal sem normas',
          '15 linhas de código comentado e 15 linhas de fluxograma desenhado à mão'
        ],
        answer: 1,
        explain: 'A divisão 3-4 / 8-10 / 10-12 / 3-4 / 1-2 garante cobertura proporcional dos 4 passos do edital (contexto/problemas, teoria/norma, proposta e encaminhamento) dentro das 30 linhas.'
      },
      {
        q: 'Um tribunal opera sistema processual monolítico em servidor único, que trava nos picos de prazo devido a consultas pesadas concorrendo com gravações no banco. Na fundamentação técnica da proposta, é mais adequado recomendar:',
        options: [
          'remover todas as chaves primárias e transações ACID para eliminar bloqueios de leitura',
          'escalabilidade horizontal stateless com balanceador, réplicas de leitura, cache distribuído (Redis) e mensageria assíncrona',
          'substituir o banco relacional por planilhas locais compartilhadas em rede sem controle de sessão',
          'desligar o sistema nos últimos dias de prazo processual para preservar a integridade do servidor',
          'armazenar a sessão do usuário apenas na memória RAM de uma única instância sem failover'
        ],
        answer: 1,
        explain: 'Escalabilidade horizontal stateless + réplicas de leitura + cache (Redis) + mensageria (Kafka/RabbitMQ) atacam o ponto único de falha e a contenção entre leitura e gravação.'
      },
      {
        q: 'Ao aplicar o Teorema CAP em um parecer técnico sobre banco de dados distribuído para sistema judicial com réplicas de leitura, a justificativa tecnicamente precisa é:',
        options: [
          'em partição de rede é possível garantir simultaneamente consistência forte, disponibilidade total e tolerância à partição',
          'em partição de rede escolhe-se entre consistência e disponibilidade: mantém-se consistência forte (ACID) na gravação de atos e admite-se consistência eventual em consultas às réplicas',
          'o Teorema CAP exige consistência eventual nas gravações financeiras e processuais para acelerar o disco',
          'consistência eventual significa que os dados nunca convergem entre o nó primário e as réplicas',
          'o Teorema CAP se aplica apenas a sistemas monolíticos em servidor único sem rede'
        ],
        answer: 1,
        explain: 'Pelo Teorema CAP, sob partição (P) escolhe-se C ou A. No Judiciário, gravações críticas exigem consistência forte (ACID), enquanto consultas em réplicas toleram consistência eventual.'
      },
      {
        q: 'Um estudo de caso relata que os logs da aplicação registram CPF e nome completo das partes em texto claro e que a equipe quer usar IA generativa em nuvem pública para sugerir minutas. A resposta completa deve associar:',
        options: [
          'exclusão de todos os logs do sistema e envio irrestrito de autos sigilosos para treino do modelo público',
          'LGPD (mascaramento de logs, minimização, TLS e controle de acesso) e governança de IA do CNJ (supervisão humana, RAG institucional, retenção zero e proteção contra prompt injection)',
          'Marco Civil apenas para provedor de conexão e proibição absoluta de qualquer ferramenta de apoio digital',
          'anonimização reversível por base64 nos logs e delegação integral da decisão judicial ao LLM',
          'publicação dos logs em repositório aberto para auditoria pública e uso de prompt livre sem sanitização'
        ],
        answer: 1,
        explain: 'Logs com CPF violam a LGPD (exigem mascaramento, minimização e segurança). IA para minutas exige supervisão humana, RAG em base institucional, retenção zero e mitigação de prompt injection.'
      },
      {
        q: 'Quando o estudo de caso menciona necessidade de interoperabilidade entre o sistema local do tribunal e outros órgãos do Judiciário, bem como adoção de arquitetura modular nacional, as normas do CNJ pertinentes são:',
        options: [
          'ITIL 4 para barramento físico e WCAG 2.2 para protocolo de processos entre tribunais',
          'PDPJ-Br (Res. CNJ 335/2020) para microsserviços e Marketplace, e MNI (Res. CNJ 91/2009) para intercâmbio processual',
          'APF/IFPUG para assinatura digital e MoReq-Jus para balanceamento de carga em nuvem',
          'Scrum para controle de acesso RBAC e Terraform para criptografia assimétrica ICP-Brasil',
          'e-MAG para filas de mensageria e SAST para definição de tabelas unificadas'
        ],
        answer: 1,
        explain: 'A Res. CNJ 335/2020 instituiu a PDPJ-Br (microsserviços, APIs e Marketplace), enquanto o MNI (Res. CNJ 91/2009) padroniza o intercâmbio de dados processuais entre órgãos.'
      },
      {
        q: 'Ao comparar enunciados discursivos recentes da FGV (como ALEGO e MP/ES) com o formato do TJPB, qual estratégia evita perda de pontos na redação da resposta?',
        options: [
          'responder apenas ao último comando do enunciado, pois os anteriores são apenas introdução',
          'usar adjetivos genéricos como "sistema moderno e seguro" sem nomear protocolos ou normas',
          'marcar cada verbo de comando do enunciado (identifique, justifique, proponha), respondê-los na ordem e explicitar o porquê de cada escolha',
          'copiar trechos longos do texto motivador para preencher as 10 primeiras linhas da folha',
          'desenhar diagramas de blocos com setas na folha definitiva para economizar palavras'
        ],
        answer: 2,
        explain: 'A FGV pontua por comandos e justificativas no padrão de resposta. Responder na ordem com termos exatos evita omissões, e desenhos na folha definitiva geram nota zero (10.7.3-d).'
      }
    ]
  },
  match: {
    title: 'Ligue o pilar ao papel na discursiva',
    pairs: [
      ['Diagnóstico (3-4L)', 'Resume o contexto e numera os problemas do caso'],
      ['Fundamentação (8-10L)', 'Conecta cada problema a conceito técnico e norma'],
      ['Proposta (10-12L)', 'Detalha solução ordenada: arquitetura, dados e segurança'],
      ['Riscos/Trade-offs (3-4L)', 'Mostra o que se ganha, o custo e como mitigar'],
      ['Nota Zero 10.7.3(d)', 'Código SQL/Java, desenhos, números ou marca pessoal'],
      ['Comandos FGV', 'Verbos como identifique, justifique e proponha']
    ]
  },
  quick: [
    {
      q: 'Limite máximo de linhas da discursiva do TJPB?',
      options: ['20 linhas', '30 linhas', '45 linhas', '60 linhas'],
      answer: 1,
      explain: 'O edital fixa 1 estudo de caso de até 30 linhas, valendo 40 pontos.'
    },
    {
      q: 'Nota mínima na discursiva para ampla concorrência?',
      options: ['19,2 pontos', '20,0 pontos', '24,0 pontos', '30,0 pontos'],
      answer: 2,
      explain: 'Exige-se 60% da nota: 24 pontos na ampla (19,2 pontos nas cotas).'
    },
    {
      q: 'Pode escrever trecho de código SQL na folha definitiva?',
      options: ['Sim, sempre', 'Só em Java', 'Não, dá zero', 'Só no fecho'],
      answer: 2,
      explain: 'Item 10.7.3(d) proíbe códigos alheios à língua portuguesa escrita.'
    },
    {
      q: 'Qual resolução do CNJ instituiu a PDPJ-Br?',
      options: ['Res. 91/2009', 'Res. 335/2020', 'Res. 468/2022', 'Lei 13.709'],
      answer: 1,
      explain: 'A Res. CNJ 335/2020 instituiu a PDPJ-Br (microsserviços e Marketplace).'
    },
    {
      q: 'Cor de caneta permitida na prova discursiva?',
      options: ['Azul ou preta', 'Preta ou vermelha', 'Lápis e azul', 'Qualquer cor'],
      answer: 0,
      explain: 'Item 10.7.3(e): caneta diferente de azul ou preta resulta em nota zero.'
    },
    {
      q: 'Tempo recomendado para planejar e escrever a discursiva?',
      options: ['15 a 20 min', '60 a 75 min', '120 a 150 min', '5 minutos'],
      answer: 1,
      explain: 'Reserve 60 a 75 minutos dentro das 5h de prova para planejar e redigir limpo.'
    }
  ],
  study: {
    title: 'Biblioteca de Prova Discursiva',
    chapters: [
      {
        title: 'O Que é o Estudo de Caso FGV',
        pages: [
          'A discursiva do TJPB NÃO é redação sobre tema social. É um parecer técnico curto de 1 questão, até 30 linhas, valendo 40 pontos (40% da nota final), feito à mão com caneta azul ou preta.\n\nO edital (10.7.2) exige 4 passos:\n• Análise crítica do contexto\n• Identificação dos problemas\n• Aplicação de teoria e normas\n• Proposta de solução fundamentada',
          'Notas e metas:\n• Mínimo do edital: 24/40 (ampla) e 19,2/40 (cotas)\n• Meta de 1º lugar: 34 a 37/40 (errar no máximo 3 a 6 pts)\n• Tempo sugerido: 60 a 75 min dentro das 5h (13h–18h)\n\nA FGV não publica tabela de pontos prévia, mas corrige por padrão de resposta: cada comando e conceito citado vale fração da nota.',
          'Causas de NOTA ZERO (edital 10.7.3):\n• Sem texto, fuga ao tema ou ao formato de estudo de caso\n• Texto ilegível, desenhos, números, versos ou espaçamento excessivo\n• "Códigos alheios à língua portuguesa" (NÃO escreva SQL, Java ou YAML!)\n• Caneta fora do padrão azul/preta ou plágio\n• Qualquer marca que identifique você (nome, rubrica, rabisco)\n• Resposta técnica plenamente incorreta'
        ],
        tip: 'Nunca escreva código SQL ou Java na folha: descreva em português usando os nomes técnicos (ex.: índice composto, chave estrangeira).',
        quiz: [
          {
            q: 'Qual combinação resume corretamente as regras do edital 10.7 a 10.7.3 para a discursiva do TJPB?',
            options: [
              'Redação de 60 linhas sobre tema atual, valendo 20 pontos, com mínimo de 10 pontos',
              'Estudo de caso de até 30 linhas sobre Conhecimentos Específicos, valendo 40 pontos, com mínimo de 24 pontos na ampla',
              'Duas questões objetivas abertas de 15 linhas, permitindo trecho de código SQL e consulta ao edital',
              'Estudo de caso de 40 linhas, valendo 60 pontos, com caneta preta ou vermelha',
              'Parecer técnico digital digitado no computador após as 5 horas da prova objetiva'
            ],
            answer: 1,
            explain: 'Conforme a 2ª retificação, é 1 estudo de caso de até 30 linhas, valendo 40 pontos, sobre Conhecimentos Específicos, com mínimo de 24 pontos (60%) na ampla.'
          },
          {
            q: 'Qual atitude do candidato na folha definitiva provoca risco imediato de nota ZERO segundo o edital 10.7.3?',
            options: [
              'Citar siglas técnicas como LGPD, OAuth 2.0, JWT e PDPJ-Br em português',
              'Numerar os quatro problemas identificados logo no parágrafo inicial de diagnóstico',
              'Assinar suas iniciais no canto da folha ou desenhar um diagrama de caixas e setas',
              'Usar caneta esferográfica azul de corpo transparente em letra cursiva legível',
              'Apresentar um trade-off explicando as desvantagens da solução proposta'
            ],
            answer: 2,
            explain: 'O edital 10.7.3 proíbe desenhos (d) e qualquer marca que identifique o candidato (g), como assinatura, rubrica ou iniciais.'
          }
        ]
      },
      {
        title: 'Anatomia da Resposta em 30 Linhas',
        pages: [
          'Esqueleto de 30 linhas para não faltar nada:\n• 1. Diagnóstico (3-4L): resume o caso e numera os problemas (1 a 4)\n• 2. Fundamentação (8-10L): cada problema ganha conceito técnico + norma\n• 3. Proposta (10-12L): solução em ordem (arquitetura, dados, processo, segurança)\n• 4. Riscos e trade-offs (3-4L): o que pode falhar e como mitigar\n• 5. Fecho (1-2L): resultado esperado em 1 frase',
          'Como ler o enunciado FGV:\n• Sublinhe cada verbo de comando: identifique, descreva, compare, justifique, proponha\n• Responda na EXATA ordem em que foram pedidos\n• "Justifique" significa dar o porquê técnico (nunca só "sim" ou "não")\n• Marque um visto em cada comando ao revisar o rascunho; comando sem resposta = ponto perdido',
          'Precisão de vocabulário é o que separa 22/40 de 36/40:\n• Em vez de "forma segura de logar", escreva "OAuth 2.0, OpenID Connect e JWT"\n• Em vez de "equilíbrio do banco", escreva "Teorema CAP: consistência forte (ACID) na gravação e eventual na réplica"\n• Em vez de "proteger a IA", escreva "RAG institucional, retenção zero e mitigação de prompt injection"'
        ],
        tip: 'No rascunho, faça uma tabela mental: Problema → Conceito Técnico → Norma → Ação Concreta → Trade-off.',
        quiz: [
          {
            q: 'Por que o bloco de "Riscos e trade-offs" (3-4 linhas) diferencia uma resposta nota 36 de uma resposta mediana?',
            options: [
              'Porque substitui a necessidade de identificar os problemas do enunciado',
              'Porque demonstra maturidade de analista ao explicitar custos da arquitetura (ex.: latência vs. consistência) e formas de mitigação',
              'Porque permite inserir trechos de código para compensar falta de normas',
              'Porque dispensa o uso de termos técnicos específicos na fundamentação',
              'Porque serve para preencher linhas vazias caso o candidato não saiba a solução'
            ],
            answer: 1,
            explain: 'Toda decisão arquitetural envolve concessões. Explicitar o trade-off (ex.: consistência eventual em réplicas ou complexidade operacional de microsserviços) e como mitigar mostra domínio pleno.'
          },
          {
            q: 'Ao analisar provas discursivas recentes da FGV (como ALEGO e MP/ES), qual padrão de cobrança se repete nos enunciados?',
            options: [
              'Pedidos abertos de opinião pessoal sem relação com o conteúdo programático',
              'Contexto institucional curto seguido de comandos numerados com verbos como cite, compare, justifique e proponha',
              'Exclusivamente tradução de textos técnicos em inglês para o português',
              'Cobrança de decoreba de números de portarias internas sem aplicação prática',
              'Questões de múltipla escolha disfarçadas sem necessidade de justificativa'
            ],
            answer: 1,
            explain: 'A FGV usa contexto institucional curto + lista de comandos objetivos. Cada verbo de comando corresponde a um bloco de pontuação no padrão de resposta.'
          }
        ]
      },
      {
        title: 'Arquitetura, Dados e Segurança no Judiciário',
        pages: [
          'Cenário clássico 1 — Monólito lento e banco travado:\n• Problema: ponto único de falha + contenção entre leitura e gravação\n• Arquitetura: escalabilidade horizontal stateless atrás de balanceador (NGINX/HAProxy), sessão externalizada, failover automático\n• Desempenho e Resiliência: réplicas de leitura, cache distribuído (Redis) com TTL, mensageria (Kafka/RabbitMQ), circuit breaker e degradação graciosa',
          'Cenário clássico 2 — Interoperabilidade e Arquitetura Modular:\n• Migração gradual do monólito para microsserviços por domínio (DDD) via API Gateway (evita reescrita big-bang arriscada)\n• PDPJ-Br (Res. CNJ 335/2020): publicação de módulos no Marketplace nacional\n• MNI (Res. CNJ 91/2009): padrão de troca de dados processuais entre órgãos\n• Trade-off: microsserviços aumentam complexidade de rede e observabilidade',
          'Cenário clássico 3 — Vazamento e Segurança:\n• LGPD (Lei 13.709/2018): mascaramento de CPF/nome em logs, minimização, privacidade por padrão, Controlador vs. Operador\n• Criptografia em trânsito (TLS) e em repouso, controle de acesso por perfil (RBAC) e trilha de auditoria\n• Autenticação: OAuth 2.0, OpenID Connect, JWT e assinatura ICP-Brasil (PKI)\n• Prevenção a falhas web: OWASP Top 10'
        ],
        tip: 'Se o caso envolver banco distribuído no Judiciário, cite o Teorema CAP: ACID na gravação de atos, consistência eventual na leitura.',
        quiz: [
          {
            q: 'Em um estudo de caso sobre lentidão em prazos finais por excesso de consultas no banco transacional, qual combinação de soluções ataca diretamente a contenção e falhas em cascata?',
            options: [
              'Aumentar apenas o tamanho do log em texto claro e desabilitar índices',
              'Réplicas de leitura, cache distribuído (Redis) com expiração, mensageria assíncrona (Kafka/RabbitMQ) e circuit breaker',
              'Unificar todos os módulos em um único servidor vertical sem balanceador de carga',
              'Remover o controle de sessão e exigir login manual a cada requisição SQL',
              'Substituir o protocolo TLS por HTTP simples para reduzir uso de CPU'
            ],
            answer: 1,
            explain: 'Réplicas e cache aliviam leituras repetitivas; mensageria desacopla picos assíncronos; circuit breaker e degradação graciosa impedem que uma falha derrube todo o sistema.'
          },
          {
            q: 'Um sistema judicial grava CPF e nome das partes nos logs de erro em texto claro. Na fundamentação normativa e técnica da resposta, deve-se apontar:',
            options: [
              'conformidade com o Marco Civil, pois logs são livres para qualquer desenvolvedor',
              'violação à LGPD (Lei 13.709/2018), propondo mascaramento, minimização, criptografia (TLS/repouso), RBAC e trilha de auditoria',
              'necessidade de publicar os logs no Marketplace da PDPJ-Br para transparência',
              'uso exclusivo de WCAG 2.2 para ocultar os dados pessoais dos leitores de tela',
              'substituição do banco relacional por JSON sem autenticação para evitar vazamento'
            ],
            answer: 1,
            explain: 'Gravar dados pessoais sem controle viola a LGPD. A solução técnica inclui mascaramento nos logs, minimização, TLS, criptografia em repouso, controle de acesso e auditoria.'
          }
        ]
      },
      {
        title: 'IA, DevSecOps, Acessibilidade e Gestão',
        pages: [
          'Cenário 4 — IA Generativa em minutas ou triagem:\n• Normas do CNJ sobre IA: o modelo apenas apoia e NÃO decide; exige supervisão humana, transparência, auditabilidade e avaliação de impacto algorítmico\n• Arquitetura segura: RAG sobre base institucional (reduz alucinação), sanitização de saídas, defesa contra prompt injection e contrato de retenção zero de dados',
          'Cenário 5 — Entregas lentas e com muitos bugs:\n• CI/CD automatizado com contêineres (Docker e Kubernetes)\n• DevSecOps: testes automatizados (TDD), análise estática e dinâmica (SAST/DAST), SonarQube\n• Métricas de entrega: MTTR (tempo médio de recuperação) e frequência de liberação\n• Trade-off: automação inicial exige investimento, mas reduz falhas em produção',
          'Cenários 6, 7 e 8 — Acessibilidade, Gestão e Mobile:\n• Portal inacessível: e-MAG e WCAG 2.1/2.2 (princípios POUR: Perceptível, Operável, Compreensível, Robusto), HTML5 semântico, ARIA e mobile-first\n• Estimativa e Contratação: APF/IFPUG, Scrum/SAFe e contratações de TIC no Judiciário (Res. CNJ 468/2022)\n• App móvel: Flutter/nativo, SSL pinning, armazenamento seguro e REST/JSON'
        ],
        tip: 'Em qualquer caso com IA no tribunal, duas frases são obrigatórias: "supervisão humana (não decide sozinha)" e "RAG com retenção zero".',
        quiz: [
          {
            q: 'Ao propor o uso de LLM para auxiliar magistrados e servidores na elaboração de minutas, qual conjunto de salvaguardas atende às exigências técnicas e do CNJ?',
            options: [
              'Deixar o LLM assinar despachos automaticamente sem revisão para acelerar a meta',
              'RAG sobre base institucional, retenção zero de dados, proteção contra prompt injection, auditabilidade e supervisão humana obrigatória',
              'Treinar modelo aberto com processos sigilosos sem anonimização e sem trilha de auditoria',
              'Substituir o MNI e a PDPJ-Br por prompts livres enviados a APIs sem controle de acesso',
              'Desabilitar sanitização de saída para preservar a criatividade do modelo generativo'
            ],
            answer: 1,
            explain: 'No Judiciário, a IA apoia com supervisão humana, transparência e auditabilidade; tecnicamente, RAG reduz alucinações e retenção zero + defesa contra prompt injection protegem os dados.'
          },
          {
            q: 'Em um estudo de caso sobre portal de consulta processual que exclui usuários com deficiência visual e falha em celulares, os referenciais técnicos corretos são:',
            options: [
              'Teorema CAP e RabbitMQ para melhorar o contraste das fontes',
              'e-MAG, WCAG 2.1/2.2 (POUR), HTML5 semântico, atributos ARIA e design responsivo mobile-first',
              'APF/IFPUG e SAST para substituir leitores de tela no navegador',
              'RDC-Arq e MoReq-Jus para corrigir formulários sem rótulos acessíveis',
              'OAuth 2.0 e SSL pinning como únicas medidas de usabilidade visual'
            ],
            answer: 1,
            explain: 'Acessibilidade web no setor público brasileiro segue o e-MAG e a WCAG 2.1/2.2 (POUR), implementados com HTML5 semântico, ARIA e layout responsivo/mobile-first.'
          }
        ]
      },
      {
        title: 'Estudo de Caso Resolvido e Treino',
        pages: [
          'Caso modelo completo (4 blocos em 1):\nUm tribunal opera monólito em servidor único; cai nos picos; consultas travam o banco; logs gravam CPF; direção quer integrar à PDPJ-Br e testar IA para minutas.\n\nNo Diagnóstico (4L), numeramos exatamente os 4 problemas: (1) ponto único de falha, (2) contenção no BD, (3) logs sem controle (LGPD), (4) falta de interoperabilidade e governança de IA.',
          'Como o texto modelo resolve sem código:\n• Disponibilidade: balanceador stateless, réplicas de leitura, CAP (ACID na gravação, eventual na leitura), Redis, Kafka/RabbitMQ e circuit breaker\n• Arquitetura: migração gradual DDD, API Gateway, PDPJ-Br (Res. 335/2020), MNI (Res. 91/2009), CI/CD, SAST/DAST, OAuth 2.0/OIDC/JWT\n• LGPD + IA: mascarar logs, TLS, RAG, retenção zero, supervisão humana',
          'Rotina semanal até a prova:\n• 1 estudo de caso por semana, cronometrado (60-75 min), à mão, caneta azul/preta, 30 linhas\n• Régua de autocorreção (40 pts): Diagnóstico (8) + Fundamentação (12) + Proposta (14) + Clareza/Estrutura (6)\n• Adapte questões FGV de comandos (ex.: Scrum, Normalização 1FN-3FN, PKI) para o formato estudo de caso'
        ],
        tip: 'Antes de entregar a folha, cheque: 30 linhas respeitadas, todos os comandos respondidos, zero código e zero marca pessoal.',
        quiz: [
          {
            q: 'Na rotina de autocorreção do estudo de caso (régua sugerida de 40 pontos), qual falha derruba mais pontos de uma só vez?',
            options: [
              'Usar caneta preta em vez de azul na folha definitiva',
              'Deixar sem resposta um dos problemas ou comandos do enunciado e omitir as normas aplicáveis',
              'Escrever 28 linhas em vez de ocupar exatamente a linha 30',
              'Dividir a fundamentação e a proposta em parágrafos claros e objetivos',
              'Citar o trade-off da migração incremental de monólito para microsserviços'
            ],
            answer: 1,
            explain: 'Como a FGV corrige por padrão de resposta itemizado, deixar um problema ou comando sem resposta (ou sem norma quando aplicável) elimina blocos inteiros de pontuação.'
          },
          {
            q: 'Ao adaptar uma questão discursiva clássica da FGV (como Normalização 1FN-3FN do MP/ES) para o formato de estudo de caso do TJPB, o candidato deve:',
            options: [
              'copiar o comando CREATE TABLE na folha definitiva para mostrar que sabe SQL',
              'identificar as anomalias no cenário, explicar 1FN/2FN/3FN em português claro, propor a separação de tabelas e citar o trade-off de joins/desempenho',
              'ignorar a 2FN e a 3FN e responder apenas com a definição de Scrum',
              'desenhar o diagrama entidade-relacionamento à mão na folha de resposta definitiva',
              'responder em tópicos soltos de 1 palavra sem justificar as formas normais'
            ],
            answer: 1,
            explain: 'No formato estudo de caso sem código/desenho, você diagnostica as anomalias, fundamenta 1FN/2FN/3FN em português, propõe a decomposição lógica e aponta o trade-off (mais joins vs. integridade).'
          }
        ]
      }
    ]
  }
};

window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['redacao'] = {
  id: 'redacao',
  name: 'Escrita Discursiva',
  npcs: [
    {
      name: 'Profa. Clarice',
      lines: [
        'A discursiva de 40 pontos NÃO é redação do ENEM! Nada de "desde os primórdios" ou "na sociedade atual".',
        'A FGV quer um parecer técnico curto: você entra direto no diagnóstico dos problemas logo na 1ª linha.',
        'Escreva em 3ª pessoa ("recomenda-se", "identifica-se"), nunca em 1ª pessoa ("eu acho", "nós devemos").',
        'Cada palavra vaga custa décimos: troque "forma segura de logar" por "autenticação com OAuth 2.0 e OIDC".'
      ]
    },
    {
      name: 'Mentor 30 Linhas',
      lines: [
        '30 linhas passam voando! Planeje antes: Diagnóstico (3-4), Fundamentação (8-10), Proposta (10-12), Riscos (3-4), Fecho (1-2).',
        'Numere os problemas na abertura: (1)..., (2)..., (3)... e responda na mesma ordem nos parágrafos seguintes.',
        'Use tópico frasal: a 1ª frase de cada parágrafo já diz o assunto ("Quanto à escalabilidade...", "Em relação à LGPD...").'
      ]
    },
    {
      name: 'Revisor Rigoroso',
      lines: [
        'Cuidado com a regra do edital: "códigos alheios à língua portuguesa" dão NOTA ZERO! Nada de escrever SQL ou YAML.',
        'Qualquer marca que identifique você — rubrica, nome, desenho ou até asterisco estranho — zera a prova inteira.',
        'Deixe 5 minutos no fim só para caçar crase, concordância, repetição de palavras e conferir se respondeu a tudo.'
      ]
    }
  ],
  boss: {
    name: 'Prof. Estilo FGV',
    intro: 'Caneta na mão e 30 linhas na folha! Quero ver se você sabe escrever um parecer de 40 pontos sem enrolação.',
    questions: [
      {
        q: 'Na abertura de um estudo de caso de 30 linhas da FGV (40 pontos), qual é a estratégia de escrita mais eficiente?',
        options: [
          'Apresentar uma contextualização histórica sobre a transformação digital no Brasil antes de citar o caso.',
          'Ir direto ao diagnóstico na primeira frase, enumerando objetivamente os problemas identificados no cenário.',
          'Iniciar com "Prezado Senhor Diretor, venho por meio deste parecer técnico apresentar..." em formato de ofício.',
          'Usar a primeira pessoa do singular ("Na minha experiência como analista, entendo que...") para mostrar autoria.',
          'Copiar integralmente o enunciado do caso nas cinco primeiras linhas para garantir fidelidade ao tema.'
        ],
        answer: 1,
        explain: 'Em 30 linhas, não há espaço para introdução genérica, formato de ofício nem cópia do enunciado; ir direto ao diagnóstico enumerado organiza o texto e mostra domínio imediato.'
      },
      {
        q: 'Qual frase mantém a impessoalidade e a precisão técnica adequadas a um parecer discursivo de TI?',
        options: [
          'Eu acho que a gente precisa colocar um balanceador bom para o sistema não cair mais.',
          'Na minha opinião, o banco está lento porque faltou capricho na hora de programar as telas.',
          'Recomenda-se a adoção de escalabilidade horizontal com balanceador de carga e réplicas de leitura.',
          'Nós vamos resolver esse problema gravíssimo usando ferramentas modernas da atualidade.',
          'É notório que, nos dias atuais, a tecnologia evolui rápido e exige atenção dos gestores.'
        ],
        answer: 2,
        explain: 'A 3ª pessoa com voz passiva sintética ("Recomenda-se") e termos técnicos exatos garante impessoalidade e objetividade; as demais têm 1ª pessoa, coloquialismo ou clichê.'
      },
      {
        q: 'Segundo o edital do TJPB (item 10.7.3), qual atitude pode resultar em NOTA ZERO na prova discursiva?',
        options: [
          'Citar siglas técnicas amplamente usadas em português, como LGPD, API, TLS e OAuth 2.0.',
          'Escrever um trecho de código SQL (SELECT * FROM...) ou YAML para exemplificar a solução.',
          'Dividir a resposta em cinco parágrafos curtos, sem pular linhas em branco entre eles.',
          'Usar conectivos como "portanto", "contudo" e "em contrapartida" para articular trade-offs.',
          'Rasurar uma palavra com um traço simples e escrever a palavra correta logo ao lado.'
        ],
        answer: 1,
        explain: 'O edital proíbe "códigos alheios à língua portuguesa escrita". Descreva a solução técnica em português ("índice composto", "política de expiração") sem escrever blocos de código.'
      },
      {
        q: 'Ao propor uma solução arquitetural em 30 linhas, como demonstrar maturidade técnica sem perder concisão?',
        options: [
          'Listar vinte frameworks diferentes sem explicar por que cada um resolve o problema do caso.',
          'Apresentar a solução em ordem lógica e explicitar o trade-off (o que se ganha e o custo ou risco envolvido).',
          'Evitar mencionar qualquer risco ou limitação para que a proposta pareça infalível.',
          'Repetir os mesmos adjetivos elogiosos ("excelente", "indispensável", "revolucionário") em todo parágrafo.',
          'Escrever todo o texto em um único parágrafo de 30 linhas para economizar espaço.'
        ],
        answer: 1,
        explain: 'Ordenar a proposta e apontar trade-offs (ex.: consistência forte vs. eventual, custo de migração) mostra análise crítica; listar ferramentas sem critério ou fazer bloco único prejudica a clareza.'
      },
      {
        q: 'Qual opção substitui corretamente a frase prolixa "O sistema acaba ficando lento devido ao fato de que faz muitas consultas pesadas no banco"?',
        options: [
          'O sistema vem a estar ficando lento por causa de que realiza inúmeras consultas pesadas no banco.',
          'O sistema apresenta lentidão em razão de consultas concorrentes e sem índice no banco de dados.',
          'Atualmente, o sistema sofre lentidão pois muitas consultas acontecem na base de dados.',
          'O sistema está passando por lentidão pelo motivo de estar consultando muito o banco.',
          'Verifica-se que o sistema vai ficando devagar por conta das consultas no banco.'
        ],
        answer: 1,
        explain: 'Elimina gerundismo ("acaba ficando", "vem a estar") e locuções inchadas ("devido ao fato de que"), usando verbo preciso ("apresenta") e causa técnica clara.'
      },
      {
        q: 'Qual recurso de coesão garante que o corretor ligue facilmente cada solução ao problema correspondente?',
        options: [
          'Usar apenas o conectivo "e" no início de todos os períodos do texto.',
          'Retomar os itens do diagnóstico na mesma ordem com marcadores claros ("Quanto ao primeiro ponto...", "No tocante à LGPD...").',
          'Trocar a ordem dos assuntos em cada parágrafo para manter o leitor surpreso.',
          'Substituir todos os termos técnicos por pronomes indefinidos ("isso", "algo", "coisa").',
          'Deixar cada parágrafo completamente isolado, sem nenhuma palavra de transição.'
        ],
        answer: 1,
        explain: 'O paralelismo entre a enumeração inicial e os tópicos frasais de cada parágrafo cria um mapa visual para o examinador conferir rapidamente o padrão de resposta.'
      },
      {
        q: 'Na redação do parecer técnico, qual frase apresenta pontuação e regência corretas?',
        options: [
          'A equipe deve obedecer, as normas do CNJ e garantir acesso à dados públicos.',
          'Para mitigar falhas em cascata, recomenda-se o uso de circuit breaker e degradação graciosa.',
          'O tribunal, precisa integrar o sistema à PDPJ-Br, visando melhorar a eficiência.',
          'Caso ocorra partição de rede deve-se priorizar, a consistência nas gravações.',
          'Os logs expõem dados pessoais; portanto, é necessário que aplica-se mascaramento.'
        ],
        answer: 1,
        explain: 'Em B, a adjunta adverbial antecipada é isolada por vírgula e a regência/concordância estão perfeitas. As demais separam sujeito do verbo, erram crase ("à dados") ou modo verbal.'
      },
      {
        q: 'Nos 5 minutos finais da prova discursiva, qual deve ser a prioridade absoluta da revisão?',
        options: [
          'Apagar todo o último parágrafo e reescrevê-lo com letra maior para preencher até a linha 30.',
          'Assinar as iniciais no canto da folha definitiva para comprovar a autoria do texto.',
          'Conferir se todos os comandos do enunciado foram respondidos, corrigir deslizes gramaticais e checar ausência de marcas identificadoras.',
          'Adicionar setas e desenhos explicativos na margem da folha para ilustrar a arquitetura.',
          'Sublinhar os termos mais difíceis com caneta marca-texto colorida.'
        ],
        answer: 2,
        explain: 'Desenhos, iniciais/assinatura e marca-texto colorido zeram a prova (edital 10.7.3). A revisão final checa completude dos comandos, norma culta e limpeza da folha.'
      }
    ]
  },
  match: {
    title: 'Ligue a técnica ao efeito no texto',
    pairs: [
      ['Tópico frasal', '1ª frase do parágrafo que antecipa o assunto'],
      ['Voz passiva sintética', 'Impessoalidade sem "eu acho" ("Recomenda-se...")'],
      ['Paralelismo', 'Responder aos problemas na mesma ordem em que foram citados'],
      ['Trade-off explícito', 'Mostrar ganho e custo/risco da solução proposta'],
      ['Corte de prolixidade', 'Trocar "devido ao fato de que" por "porque" ou "em razão de"'],
      ['Regra anti-zero', 'Nada de código SQL/YAML, desenhos ou assinatura na folha']
    ]
  },
  quick: [
    { q: 'Quantas linhas tem a discursiva do TJPB?', options: ['20 linhas', '30 linhas', '45 linhas', '60 linhas'], answer: 1, explain: 'Edital 10.7: 1 questão de estudo de caso em 30 linhas, valendo 40 pontos.' },
    { q: 'Qual pessoa verbal usar no parecer técnico?', options: ['1ª do singular', '2ª do singular', '3ª pessoa', '1ª do plural'], answer: 2, explain: '3ª pessoa ("identifica-se", "recomenda-se") garante impessoalidade.' },
    { q: 'Escrever bloco de código SQL na resposta causa:', options: ['Bônus técnico', 'Desconto de 2 pts', 'Nota ZERO', 'Nada'], answer: 2, explain: 'Edital 10.7.3 (d): "códigos alheios à língua portuguesa escrita" dão nota zero.' },
    { q: 'Cor de caneta permitida na folha definitiva:', options: ['Azul ou preta', 'Preta ou vermelha', 'Qualquer cor', 'Lápis HB'], answer: 0, explain: 'Edital 10.7.3 (e): apenas caneta esferográfica azul ou preta.' },
    { q: 'O que NUNCA fazer na abertura do estudo de caso?', options: ['Numerar problemas', 'Enrolação histórica', 'Citar o cenário', 'Ser direto'], answer: 1, explain: '30 linhas não comportam introdução filosófica ou histórica.' },
    { q: 'Como ligar diagnóstico e proposta sem repetir palavras?', options: ['Tópicos frasais', 'Gírias técnicas', 'Blocos sem vírgula', 'Abreviar tudo'], answer: 0, explain: 'Tópicos frasais + conectivos organizam a progressão do texto.' }
  ],
  study: {
    title: 'Oficina de Escrita Discursiva (40 pts)',
    chapters: [
      {
        title: 'O texto que a prova pede: parecer direto, não redação escolar',
        pages: [
          'A discursiva do TJPB vale 40 pontos em 30 linhas e NÃO é uma redação dissertativa sobre tema social. É um parecer técnico de estudo de caso.\n\n• Esqueça "nos dias atuais", "desde a antiguidade" ou "sabe-se que".\n• Comece respondendo ao caso já na 1ª linha, com diagnóstico claro.',
          'Como escrever com postura técnica:\n\n• Use sempre 3ª pessoa e impessoalidade: "Identifica-se...", "Recomenda-se...", "Convém adotar...".\n• Nunca escreva "eu acho", "na minha opinião" ou "nós devemos".\n• Substitua palavras vagas ("sistema bom", "forma segura") pelo termo exato do edital.',
          'O padrão de resposta da FGV funciona como um checklist de conceitos.\n\n• Cada comando do enunciado (identifique, fundamente, proponha) vale pontos.\n• Texto bonito mas vago perde nota para um texto direto, limpo e cheio dos termos técnicos e normas certas.'
        ],
        tip: 'Parecer técnico = diagnóstico na 1ª linha + 3ª pessoa + termo técnico exato (sem enrolação).',
        quiz: [
          {
            q: 'Qual abertura é mais adequada para a discursiva de 30 linhas do TJPB?',
            options: [
              'Desde a invenção da internet, os tribunais enfrentam desafios crescentes na área de tecnologia.',
              'O cenário descrito apresenta três problemas críticos: ponto único de falha, ausência de índices e exposição de dados pessoais.',
              'Prezado examinador, apresento a seguir minhas ideias sobre como melhorar o sistema do tribunal.',
              'A tecnologia da informação é fundamental para a justiça brasileira no século XXI.',
              'Em primeiro lugar, gostaria de destacar que o monólito possui vantagens e desvantagens.'
            ],
            answer: 1,
            explain: 'A opção B vai direto ao diagnóstico enumerado, sem clichê histórico, sem 1ª pessoa e sem vocativo.'
          },
          {
            q: 'Por que palavras vagas como "mecanismo moderno de proteção" derrubam a nota na FGV?',
            options: [
              'Porque a banca proíbe adjetivos na língua portuguesa.',
              'Porque a correção busca termos técnicos e normativos específicos do padrão de resposta (ex.: TLS, OAuth 2.0, LGPD).',
              'Porque palavras curtas ocupam menos linhas e geram nota zero.',
              'Porque o corretor só lê a última frase do texto.',
              'Porque termos genéricos são considerados plágio do edital.'
            ],
            answer: 1,
            explain: 'O corretor pontua os conceitos esperados no espelho de resposta; termos genéricos não comprovam domínio técnico.'
          }
        ]
      },
      {
        title: 'Arquitetura das 30 linhas: planejando parágrafos sem estourar',
        pages: [
          'Com apenas 30 linhas, cada linha vale ouro. Divida o texto em 5 blocos proporcionais:\n\n• 1. Diagnóstico (3–4 linhas): resumo do contexto + problemas numerados (1) a (4).\n• 2. Fundamentação (8–10 linhas): conceito técnico + norma para cada problema.\n• 3. Proposta (10–12 linhas): solução ordenada.\n• 4. Riscos/Trade-offs (3–4 linhas) e 5. Fecho (1–2 linhas).',
          'Regra de ouro da organização: use o paralelismo de ordem.\n\n• Se você listou os problemas (1) escala, (2) banco, (3) LGPD e (4) IA no 1º parágrafo, desenvolva exatamente na ordem 1 → 2 → 3 → 4.\n• Cada parágrafo começa com um tópico frasal que anuncia o bloco ("Quanto à escala...", "No tocante à LGPD...").',
          'Nunca pule linhas em branco entre parágrafos (desperdiça espaço precioso) nem faça um blocão único de 30 linhas (cansa o corretor).\n\n• Faça recuo claro de parágrafo (~1,5 cm) no início de cada bloco.\n• Antes de passar a limpo, faça um rascunho de 5 minutos só com tópicos e números de linha.'
        ],
        tip: 'Numere (1, 2, 3...) no diagnóstico e siga a MESMA ordem nos parágrafos seguintes.',
        quiz: [
          {
            q: 'Qual é a função do tópico frasal no início de cada parágrafo da discursiva?',
            options: [
              'Repetir o enunciado inteiro para preencher linhas.',
              'Anunciar imediatamente ao corretor qual problema ou comando aquele parágrafo vai responder.',
              'Substituir a conclusão final do parecer técnico.',
              'Inserir uma citação filosófica antes do argumento técnico.',
              'Justificar por que o candidato não teve tempo de detalhar o tema.'
            ],
            answer: 1,
            explain: 'O tópico frasal orienta a leitura rápida do examinador e amarra o texto ao comando do enunciado.'
          },
          {
            q: 'Ao planejar 30 linhas, qual erro de espaço mais prejudica candidatos?',
            options: [
              'Usar recuo de parágrafo consistente.',
              'Gastar 10 linhas só recontando o enunciado e ficar sem espaço para a proposta de solução e trade-offs.',
              'Reservar 1 a 2 linhas para uma frase de fecho objetiva.',
              'Separar fundamentação e proposta de modo equilibrado.',
              'Fazer um esqueleto rápido em tópicos antes de escrever.'
            ],
            answer: 1,
            explain: 'Recontar o caso consome linhas que deveriam trazer fundamentação e proposta — onde está a maior parte dos 40 pontos.'
          }
        ]
      },
      {
        title: 'Coesão, conectivos e progressão lógica do parecer',
        pages: [
          'Texto bom não parece uma lista de frases soltas. Conectivos certos mostram raciocínio de causa → consequência → solução:\n\n• Adição/ordenação: "Além disso", "Em primeiro plano", "Somado a isso".\n• Causa/efeito: "Em razão de", "Por conseguinte", "Dessa forma".\n• Contraste/trade-off: "Contudo", "Entretanto", "Em contrapartida".',
          'Como retomar ideias sem repetir a mesma palavra toda hora:\n\n• Use sinônimos técnicos e expressões referenciais: "esse gargalo", "tal vulnerabilidade", "essa medida".\n• Cuidado com "onde": só use para lugar físico! Em texto técnico, prefira "em que", "no qual" ou "na qual".',
          'Paralelismo sintático dá ritmo e clareza às listas:\n\n• Errado: "Recomenda-se criptografar dados, controle de acesso e que haja auditoria."\n• Certo: "Recomendam-se a criptografia de dados, o controle de acesso e a trilha de auditoria." (todos substantivos com artigo!).'
        ],
        tip: 'Troque "onde" abstrato por "em que" e mantenha itens de uma lista na mesma classe gramatical.',
        quiz: [
          {
            q: 'Qual frase respeita o paralelismo sintático e a coesão formal?',
            options: [
              'A solução exige escalar instâncias, cache distribuído e que monitore os logs.',
              'A solução exige escalonamento horizontal, uso de cache distribuído e monitoramento contínuo de logs.',
              'O problema ocorre no banco, onde as consultas travam todas as gravações.',
              'Para resolver, deve-se aplicar TLS, porém contudo entretanto aumenta a latência.',
              'Isso resolve aquilo porque essa coisa melhora tudo no sistema.'
            ],
            answer: 1,
            explain: 'Em B, os três complementos são sintagmas nominais paralelos; C usa "onde" fora de lugar físico e D empilha conectivos redundantes.'
          },
          {
            q: 'Qual conectivo introduz melhor um trade-off ou limitação após apresentar uma solução?',
            options: [
              'Portanto',
              'Em contrapartida',
              'Inclusive',
              'Visto que',
              'Afinal'
            ],
            answer: 1,
            explain: '"Em contrapartida" (ou "contudo") marca exatamente a contrapartida/custo da decisão arquitetural.'
          }
        ]
      },
      {
        title: 'Clareza, concisão e corte de gordura na frase',
        pages: [
          'Frases longas demais geram erro de concordância e cansam o corretor.\n\n• Regra prática: prefira períodos de 2 a 3 linhas (ordem direta: Sujeito + Verbo + Complemento).\n• Evite intercalar 3 orações no meio de uma frase só.',
          'Corte "gordura" verbal que só gasta linha sem dizer nada:\n\n• "Devido ao fato de que" → "porque" / "em razão de".\n• "Com o objetivo de realizar a melhoria" → "para melhorar".\n• "Vai estar implementando" / "acaba causando" → "implementará" / "causa".',
          'Substitua verbos "frouxos" (fazer, ter, dar, colocar) por verbos precisos:\n\n• "Fazer a verificação dos logs" → "auditar os logs".\n• "Dar mais segurança ao acesso" → "restringir o acesso" / "autenticar".\n• "Ter um plano caso caia" → "adotar failover automático".'
        ],
        tip: 'Ordem direta (Sujeito + Verbo + Complemento) + zero gerundismo = texto limpo e denso.',
        quiz: [
          {
            q: 'Qual reescrita elimina melhor a prolixidade mantendo o sentido técnico?',
            options: [
              'Com a finalidade de estar evitando que ocorram falhas em cascata, deve-se colocar um circuit breaker.',
              'Para evitar falhas em cascata, recomenda-se adotar o padrão circuit breaker.',
              'Visando o objetivo de evitar as falhas que acontecem em cascata, usa-se circuit breaker.',
              'Deve-se estar aplicando um circuit breaker devido ao fato de evitar falhas em cascata.',
              'A colocação de circuit breaker acaba sendo feita para evitar falhas em cascata.'
            ],
            answer: 1,
            explain: 'A opção B reduz 17 palavras para 11, sem gerundismo nem locuções inchadas, com verbo preciso ("adotar").'
          },
          {
            q: 'Qual é o tamanho ideal de período para manter clareza e evitar erros de pontuação na discursiva?',
            options: [
              'Um único período de 10 linhas por parágrafo.',
              'Períodos médios e diretos de 2 a 3 linhas, articulados por conectivos.',
              'Frases de apenas duas palavras separadas por ponto final.',
              'Períodos cheios de parênteses aninhados e travessões duplos.',
              'Orações invertidas começando sempre pelo complemento.'
            ],
            answer: 1,
            explain: 'Períodos de 2 a 3 linhas em ordem direta equilibram fluidez, clareza e controle gramatical.'
          }
        ]
      },
      {
        title: 'Norma culta prática, estética e regras de Nota ZERO',
        pages: [
          'Os 4 erros de gramática que mais aparecem em textos técnicos:\n\n• Vírgula entre sujeito e verbo (ERRO GRAVE: "O sistema, apresenta lentidão").\n• Crase antes de masculino/verbo/plural sem artigo ("à dados" ❌ → "a dados" ✓; "à PDPJ-Br" ✓).\n• Concordância com "haver" (impessoal: "há problemas", nunca "haviam") e "trata-se de" (singular).',
          'Regras de NOTA ZERO do Edital TJPB (item 10.7.3):\n\n• Nada de "códigos alheios à língua portuguesa": NÃO escreva SQL, JSON, Python ou YAML! Descreva em português ("índice composto", "payload JSON").\n• Caneta exclusivamente azul ou preta.\n• Nenhuma marca de identificação (nome, rubrica, desenho, símbolo).',
          'Checklist dos últimos 5 minutos antes de entregar:\n\n1. Respondi a TODOS os comandos do enunciado?\n2. Usei os termos técnicos e normas do edital?\n3. Errou uma palavra? Passe UM traço simples horizontal e escreva ao lado (sem rabiscar!).\n4. Letra legível e sem nada além da margem?'
        ],
        tip: 'Nunca separe sujeito do verbo com vírgula e JAMAIS escreva código SQL/YAML na folha definitiva.',
        quiz: [
          {
            q: 'Como corrigir corretamente uma palavra escrita errada na folha definitiva à caneta?',
            options: [
              'Pintar um borrão preto por cima até cobrir toda a palavra.',
              'Colocar entre parênteses e escrever "digo" ao lado.',
              'Passar um único traço horizontal simples sobre a palavra e escrever a correta logo ao lado.',
              'Usar corretivo líquido branco na folha oficial.',
              'Desenhar uma seta levando o corretor até a margem inferior.'
            ],
            answer: 2,
            explain: 'Um traço horizontal simples é limpo e aceito pela banca; parênteses não anulam erro e corretivo/desenhos podem zerar ou prejudicar a correção.'
          },
          {
            q: 'Qual frase está 100% correta quanto à crase, concordância e pontuação?',
            options: [
              'Haviam muitas falhas no servidor, que precisava de ajustes.',
              'O acesso à base de dados, exige autenticação multifator.',
              'Trata-se de medidas essenciais para atender à LGPD e evitar vazamentos.',
              'Recomenda-se à implantação de testes automatizados antes do deploy.',
              'Submeteu-se os dados à uma análise rigorosa de segurança.'
            ],
            answer: 2,
            explain: 'Em C, "trata-se de" fica no singular e há crase antes de "LGPD" (feminino: a Lei). As demais erram "haver", vírgula no sujeito ou crase antes de masculino/artigo indefinido.'
          }
        ]
      }
    ]
  }
};

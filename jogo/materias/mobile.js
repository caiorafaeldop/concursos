window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['mobile'] = {
  id: 'mobile',
  name: 'Desenvolvimento Mobile',
  npcs: [
    {
      name: 'Mestra Ciclo (Android & iOS)',
      lines: [
        'No Android, onCreate() monta a tela uma vez; onResume() coloca a Activity em foco interagindo com o usuário.',
        'Virou o celular? Por padrão a Activity passa por onPause, onStop, onDestroy e é recriada em onCreate!',
        'No iOS, viewDidLoad() roda só na criação da view; viewWillAppear() e viewDidAppear() rodam toda vez que ela aparece.',
        'Se o Android ficar sem RAM, mata primeiro processos em Cache/Background, nunca o Foreground em uso.'
      ]
    },
    {
      name: 'Guardião Cofre (Persistência & Sec)',
      lines: [
        'SharedPreferences e UserDefaults guardam preferências simples em chave-valor — jamais salve senhas em texto puro lá!',
        'Room é a camada ORM do Jetpack sobre o SQLite: valida queries SQL em tempo de compilação e facilita migrations.',
        'Segredos locais vão no Android Keystore / EncryptedSharedPreferences ou no iOS Keychain com proteção de hardware.',
        'Ofuscação com R8/ProGuard dificulta engenharia reversa de APKs, mas não substitui validação no servidor.'
      ]
    },
    {
      name: 'Sentinela Rede (TLS, Pinning & FCM)',
      lines: [
        'TLS garante sigilo e integridade em trânsito, mas confia em dezenas de CAs instaladas no sistema operacional.',
        'SSL Pinning fixa o certificado ou o hash da chave pública (SPKI) no app, barrando proxies MitM mesmo com CA instalada.',
        'Chamadas REST/JSON devem rodar fora da Main Thread (Coroutines/async-await) para evitar travamento e ANR.',
        'No FCM, Notification Message é exibida pelo SO em background; Data Message sempre aciona o handler do app.'
      ]
    }
  ],
  boss: {
    name: 'Prof. Mobile FGV',
    intro: 'Ciclo de vida, cofre, pinning e push: prove que seu app não trava nem vaza dados!',
    questions: [
      {
        q: 'Um usuário está preenchendo um formulário em uma Activity Android quando recebe uma ligação telefônica que cobre toda a tela. Nesse momento, a Activity do formulário passa pelos callbacks:',
        options: [
          'apenas onCreate() seguido de onDestroy()',
          'onPause() e onStop(), mantendo seu estado em memória se não for destruída',
          'onRestart() seguido de onStart()',
          'onDestroy() imediato sem passar por onPause()',
          'apenas onResume() em modo silencioso'
        ],
        answer: 1,
        explain: 'Quando outra tela cobre totalmente a Activity, ela perde o foco (onPause) e deixa de ficar visível (onStop), sem ser necessariamente destruída. onRestart() só ocorre quando ela volta a ficar visível.'
      },
      {
        q: 'Ao comparar o ciclo de vida de telas entre Android e iOS, o callback onCreate() de uma Activity Android desempenha papel equivalente, na UIViewController do iOS, ao método:',
        options: [
          'viewDidDisappear()',
          'viewWillAppear()',
          'viewDidLoad()',
          'applicationDidEnterBackground()',
          'viewDidAppear()'
        ],
        answer: 2,
        explain: 'viewDidLoad() é chamado uma única vez quando a view é carregada em memória, análogo ao onCreate(). Já viewWillAppear/viewDidAppear rodam a cada exibição, como onStart/onResume.'
      },
      {
        q: 'Uma equipe Flutter precisa de persistência local NoSQL de alta performance, baseada em objetos com suporte a índices e consultas estruturadas (filtros e ordenação) e transações ACID, sem escrever SQL manual. A escolha mais adequada dentre as listadas é:',
        options: [
          'SharedPreferences',
          'Isar',
          'UserDefaults',
          'Android Keystore',
          'FCM Topic Storage'
        ],
        answer: 1,
        explain: 'Isar é um banco NoSQL embutido para Flutter/Dart focado em alta performance, índices, queries ricas e transações ACID. SharedPreferences/UserDefaults são chave-valor simples; Keystore guarda chaves.'
      },
      {
        q: 'Sobre o uso da biblioteca Room no Android, assinale a afirmativa correta.',
        options: [
          'Substitui o SQLite por um banco NoSQL em nuvem sincronizado automaticamente',
          'Dispensa a definição de entidades e DAOs, gravando tudo em arquivos XML',
          'Fornece uma camada de abstração sobre o SQLite e verifica consultas SQL em tempo de compilação',
          'Armazena automaticamente todas as colunas criptografadas no Android Keystore',
          'Executa todas as consultas síncronas na Main Thread por padrão para reduzir latência'
        ],
        answer: 2,
        explain: 'Room é uma biblioteca Jetpack sobre o SQLite (com @Entity, @Dao e @Database) que valida queries SQL em tempo de compilação e bloqueia queries na Main Thread por padrão.'
      },
      {
        q: 'Um analista de segurança percebeu que um app bancário aceitava conexões HTTPS interceptadas por um proxy corporativo cuja CA raiz havia sido instalada no aparelho. Para impedir esse tipo de ataque Man-in-the-Middle (MitM), a medida específica recomendada é:',
        options: [
          'trocar JSON por XML nas requisições REST',
          'habilitar android:allowBackup="true" no manifesto',
          'implementar SSL/Certificate Pinning fixando a chave pública (SPKI) ou certificado esperado',
          'desativar TLS e usar apenas Base64 no payload',
          'armazenar o token JWT em SharedPreferences padrão'
        ],
        answer: 2,
        explain: 'O TLS comum confia em qualquer CA instalada no aparelho. O SSL Pinning (preferencialmente via hash SHA-256 da chave pública SPKI) garante que o app só aceite o certificado/chave esperada.'
      },
      {
        q: 'Durante a análise de segurança de um APK Android de produção, um auditor conseguiu descompilar o bytecode DEX com facilidade e ler nomes de classes de negócio e uma chave secreta de API gravada em constante. Quais duas práticas deveriam ter sido aplicadas, respectivamente, para dificultar a leitura e evitar a exposição da chave?',
        options: [
          'Ofuscação com R8/ProGuard e remoção do segredo do cliente (mantendo-o no backend)',
          'Uso de Room Database e desativação de TLS',
          'Aumento do timeout HTTP e uso de FCM Data Message',
          'Troca de POST por GET e habilitação de modo debuggable',
          'Uso de SharedPreferences e remoção do Certificado Digital'
        ],
        answer: 0,
        explain: 'R8/ProGuard minifica e ofusca nomes de classes/métodos contra engenharia reversa, mas NUNCA protege segredos hardcoded no app — chaves de API privadas devem ficar apenas no servidor.'
      },
      {
        q: 'Em uma aplicação Android, uma chamada síncrona a uma API REST lenta foi executada diretamente na Main Thread (UI Thread), bloqueando o desenho da tela por mais de 5 segundos. Qual problema típico ocorre nesse cenário?',
        options: [
          'Erro de compilação no SQLite',
          'ANR (Application Not Responding)',
          'Revogação automática do token FCM',
          'Falha de validação de certificado X.509',
          'Conversão automática de JSON para XML'
        ],
        answer: 1,
        explain: 'Bloquear a Main Thread por cerca de 5 segundos no Android dispara o diálogo de ANR (Application Not Responding). Chamadas de rede devem ser assíncronas (Coroutines, async/await).'
      },
      {
        q: 'Sobre o envio de notificações push com Firebase Cloud Messaging (FCM), quando o aplicativo Android está em background (ou fechado) e recebe uma mensagem do tipo Notification Message (contendo apenas o bloco notification), o comportamento padrão é:',
        options: [
          'o método onMessageReceived() do app é sempre chamado para montar o layout customizado',
          'o sistema operacional exibe a notificação automaticamente na bandeja do sistema',
          'a mensagem é descartada silenciosamente até o usuário abrir o app',
          'o FCM reenvia a mensagem via HTTP GET para a API REST do cliente',
          'o token de registro do dispositivo é apagado após a entrega'
        ],
        answer: 1,
        explain: 'No Android, Notification Messages em background são entregues à bandeja pelo próprio sistema (Play Services). Para processar sempre no código do app (onMessageReceived), usa-se Data Message.'
      }
    ]
  },
  match: {
    title: 'Ligue o conceito mobile',
    pairs: [
      ['onCreate() / viewDidLoad()', 'Inicializa a tela uma vez ao criar'],
      ['Room', 'ORM Jetpack sobre SQLite com checagem em compilação'],
      ['Android Keystore / Keychain', 'Cofre seguro protegido por hardware para chaves'],
      ['SSL Pinning (SPKI)', 'Fixa chave pública no app contra proxies MitM'],
      ['R8 / ProGuard', 'Minifica e ofusca código contra engenharia reversa'],
      ['FCM Data Message', 'Payload tratado pelo código do app mesmo em background']
    ]
  },
  quick: [
    {
      q: 'Callback Android chamado quando a Activity fica visível e interativa:',
      options: ['onCreate', 'onResume', 'onStop', 'onDestroy'],
      answer: 1,
      explain: 'onResume() marca o estado em foco, pronto para o usuário interagir.'
    },
    {
      q: 'Onde guardar tokens sensíveis com segurança no iOS?',
      options: ['UserDefaults', 'Keychain', 'SQLite puro', 'Info.plist'],
      answer: 1,
      explain: 'Keychain Services armazena segredos cifrados com suporte de hardware (Secure Enclave).'
    },
    {
      q: 'Ferramenta padrão Android que ofusca e reduz o tamanho do APK/AAB:',
      options: ['R8 / ProGuard', 'SQLCipher', 'Retrofit', 'Gradle Sync'],
      answer: 0,
      explain: 'R8 (sucessor do ProGuard) faz shrinking, otimização e ofuscação do bytecode.'
    },
    {
      q: 'O que fixar no SSL Pinning para facilitar renovação de certificado?',
      options: ['Data de validade', 'Hash da chave pública', 'Endereço IP', 'Nome do usuário'],
      answer: 1,
      explain: 'Fixar o hash SHA-256 da chave pública (SPKI) permite renovar o cert mantendo a mesma chave.'
    },
    {
      q: 'Erro clássico ao rodar requisição HTTP pesada na Main Thread Android:',
      options: ['ANR', 'CORS', 'SQL Injection', 'CSRF'],
      answer: 0,
      explain: 'Bloquear a UI Thread por ~5s dispara Application Not Responding (ANR).'
    },
    {
      q: 'Banco NoSQL embutido no Flutter com índices e consultas rápidas:',
      options: ['SharedPreferences', 'Isar', 'Room', 'CoreData'],
      answer: 1,
      explain: 'Isar é um banco NoSQL local para Flutter com suporte a índices, queries e transações.'
    }
  ],
  study: {
    title: 'Biblioteca de Desenvolvimento Mobile',
    chapters: [
      {
        title: 'Ciclo de Vida Android e iOS',
        pages: [
          '• Activity Android tem 7 callbacks principais:\n• onCreate(): cria a UI e vincula dados (1x por instância).\n• onStart(): tela fica visível, mas sem foco ainda.\n• onResume(): tela no topo, usuário interagindo.\n• onPause(): perdeu foco (diálogo/outra tela parcial).\n• onStop(): totalmente oculta em segundo plano.\n• onRestart(): volta de onStop para onStart.\n• onDestroy(): encerrada ou recriada.',
          '• Rotação de tela no Android destrói e recria a Activity (onPause → onStop → onDestroy → onCreate).\n• Use ViewModel (sobrevive à rotação) e onSaveInstanceState() para não perder dados digitados.\n• Prioridade de processos Android: Foreground > Visible > Service > Cached (Background). Sem RAM, o sistema mata de baixo para cima.',
          '• iOS UIViewController:\n• viewDidLoad(): carregou na memória (1x).\n• viewWillAppear() / viewDidAppear(): antes/depois de aparecer na tela.\n• viewWillDisappear() / viewDidDisappear(): ao sair.\n• Estados do App iOS: Not Running → Inactive (transição/ligação) → Active (em uso) → Background (executando oculto) → Suspended (congelado na RAM).'
        ],
        tip: 'onCreate = viewDidLoad (1x). onResume = viewDidAppear/Active (toda vez que entra em foco).',
        quiz: [
          {
            q: 'Ao girar o smartphone Android na horizontal, qual sequência padrão ocorre na Activity se não houver tratamento especial de configuração?',
            options: [
              'onPause() → onResume() diretamente sem destruir a tela',
              'onStop() → onRestart() → onStart()',
              'onPause() → onStop() → onDestroy() → onCreate() → onStart() → onResume()',
              'onCreate() é chamado novamente mantendo a mesma instância sem onDestroy()',
              'nenhum callback é disparado no ciclo de vida'
            ],
            answer: 2,
            explain: 'A mudança de orientação é uma alteração de configuração: o Android destrói a Activity atual (onPause, onStop, onDestroy) e cria uma nova instância (onCreate, onStart, onResume).'
          },
          {
            q: 'No iOS, qual método da UIViewController é ideal para inicializar componentes de interface uma única vez após o carregamento da hierarquia de views em memória?',
            options: [
              'viewDidAppear()',
              'viewWillDisappear()',
              'viewDidLoad()',
              'applicationWillTerminate()',
              'viewWillAppear()'
            ],
            answer: 2,
            explain: 'viewDidLoad() executa apenas uma vez quando a view é carregada em memória. viewWillAppear e viewDidAppear executam a cada vez que a tela volta a ser exibida.'
          }
        ]
      },
      {
        title: 'Persistência Local e Bancos no Celular',
        pages: [
          '• Nem todo dado precisa do mesmo armazenamento:\n• Chave-Valor leve: SharedPreferences (Android, arquivo XML) e UserDefaults (iOS, plist). Ideal para tema escuro, idioma ou flags.\n• NUNCA use SharedPreferences/UserDefaults para listas grandes, objetos complexos ou senhas sem criptografia.',
          '• Relacional estruturado:\n• SQLite: banco embutido leve, padrão em Android e iOS, com transações ACID.\n• Room (Android Jetpack): camada ORM oficial sobre o SQLite. Usa @Entity (tabela), @Dao (consultas) e @Database.\n• Grande trunfo do Room: valida o SQL em tempo de compilação e integra com Coroutines/Flow.',
          '• NoSQL em Flutter/Dart:\n• Hive: rápido, leve, chave-valor/caixas binárias com TypeAdapters; ótimo para cache simples, mas sem queries ricas nativas.\n• Isar: evolução do mesmo autor do Hive, com índices secundários, filtros, ordenação, texto completo e transações ACID.'
        ],
        tip: 'Preferência simples = SharedPreferences/UserDefaults. SQL validado = Room. Flutter com queries = Isar.',
        quiz: [
          {
            q: 'Qual componente do Android Jetpack Room é responsável por definir os métodos de acesso aos dados (SELECT, INSERT, UPDATE, DELETE) sobre as entidades?',
            options: [
              '@Entity',
              '@Dao (Data Access Object)',
              'SharedPreferences',
              'ContentProvider',
              'BroadcastReceiver'
            ],
            answer: 1,
            explain: 'No Room, @Entity representa a tabela, @Dao define a interface com as operações SQL validadas em compilação, e @Database reúne entidades e DAOs.'
          },
          {
            q: 'Sobre SharedPreferences (Android) e UserDefaults (iOS), assinale a afirmação correta:',
            options: [
              'São bancos relacionais compatíveis com JOINs SQL complexos',
              'Criptografam automaticamente todos os valores com chave de hardware por padrão',
              'Destinam-se a pares chave-valor simples (como preferências do usuário), não a grandes volumes ou segredos em texto puro',
              'Substituem o servidor backend para sincronização entre usuários distintos',
              'Exigem conexão com a internet para gravar dados localmente'
            ],
            answer: 2,
            explain: 'Ambos gravam pares chave-valor simples em arquivos locais (XML/plist) sem criptografia forte nativa, sendo inadequados para segredos ou grandes conjuntos de dados.'
          }
        ]
      },
      {
        title: 'Armazenamento Seguro e Engenharia Reversa',
        pages: [
          '• Em aparelhos com Root (Android) ou Jailbreak (iOS), arquivos comuns do app (SharedPreferences, SQLite, assets) podem ser lidos diretamente.\n• Por isso, tokens JWT, chaves e dados sensíveis exigem armazenamento cifrado apoiado por hardware.',
          '• Cofres oficiais:\n• Android: Android Keystore guarda chaves criptográficas (TEE/StrongBox) + EncryptedSharedPreferences (Jetpack Security) ou SQLCipher para bancos.\n• iOS: Keychain Services integrado ao Secure Enclave.\n• Boa prática: desativar android:allowBackup="true" e android:debuggable em produção.',
          '• Engenharia Reversa:\n• APK/AAB contém bytecode DEX facilmente descompilável (jadx, apktool); IPA contém binário Mach-O analisável (Ghidra/Hopper).\n• Defesas: R8/ProGuard (ofuscação e remoção de código morto), detecção de Root/Jailbreak e atestado de integridade (Play Integrity API / Apple App Attest).\n• Regra de ouro: NUNCA embutir API secrets no código do app.'
        ],
        tip: 'R8 ofusca o código, mas não esconde segredo hardcoded: chave privada fica no backend!',
        quiz: [
          {
            q: 'Qual recurso do Android permite gerar e armazenar chaves criptográficas de forma isolada do processo do app, frequentemente com apoio de hardware seguro (TEE/StrongBox)?',
            options: [
              'SharedPreferences padrão',
              'Android Keystore System',
              'SQLiteOpenHelper',
              'AssetManager',
              'Intent Bundle'
            ],
            answer: 1,
            explain: 'O Android Keystore protege as chaves contra extração mesmo se o processo do app for comprometido, podendo usar hardware dedicado (TEE/StrongBox).'
          },
          {
            q: 'Em relação à segurança contra engenharia reversa em aplicativos móveis, é correto afirmar que:',
            options: [
              'compilar o app em modo release impede totalmente a descompilação de um APK',
              'ofuscar com R8/ProGuard torna seguro deixar senhas de banco de dados hardcoded no cliente',
              'ofuscação dificulta a leitura do código descompilado, mas segredos reais nunca devem residir no aplicativo cliente',
              'habilitar android:allowBackup="true" impede que dados locais sejam copiados via ADB',
              'apps iOS em formato IPA são imunes à análise estática'
            ],
            answer: 2,
            explain: 'Ofuscação (R8/ProGuard) apenas dificulta a análise estática, não torna impossível. Segredos nunca devem ficar no app cliente, pois o binário está sob controle físico do atacante.'
          }
        ]
      },
      {
        title: 'TLS/SSL e SSL Pinning na Rede',
        pages: [
          '• TLS/SSL protege os dados em trânsito (confidencialidade + integridade + autenticidade do servidor).\n• No handshake TLS, o servidor envia seu Certificado X.509; o celular confere se foi assinado por uma CA (Autoridade Certificadora) confiável na lista do sistema e negocia uma chave simétrica de sessão.',
          '• O furo do TLS padrão: se o usuário (ou malware) instalar uma CA raiz maliciosa ou de proxy (Burp/Charles) no aparelho, o sistema operacional passa a confiar nela — permitindo ataque Man-in-the-Middle (MitM) invisível ao app.',
          '• SSL Pinning (Certificate Pinning): o próprio app "alfineta" qual certificado ou chave pública aceita.\n• Melhor prática: fixar o hash SHA-256 da Chave Pública (SPKI), não o certificado inteiro — assim você renova o certificado sem quebrar o app (se mantiver a chave).\n• Sempre inclua um pin de backup! No Android moderno, configura-se via network_security_config.xml.'
        ],
        tip: 'TLS confia em qualquer CA do sistema; SSL Pinning só confia no hash SPKI que o app fixou.',
        quiz: [
          {
            q: 'Qual a principal vantagem de fazer SSL Pinning usando o hash SHA-256 da chave pública (SPKI) em vez de fixar o certificado X.509 completo?',
            options: [
              'Dispensa completamente o uso de HTTPS/TLS na rede',
              'Permite renovar o certificado no servidor sem quebrar apps antigos, desde que o par de chaves seja mantido',
              'Criptografa o banco SQLite local automaticamente',
              'Permite que qualquer proxy MitM intercepte o tráfego para depuração em produção',
              'Elimina a necessidade de validar o domínio da requisição'
            ],
            answer: 1,
            explain: 'Fixar o SPKI (Subject Public Key Info) amarra a confiança à chave pública, permitindo renovar a data de expiração do certificado sem precisar atualizar o app imediatamente.'
          },
          {
            q: 'Ao configurar network_security_config.xml no Android para produção, qual boa prática reduz o risco de travar todos os usuários caso a chave principal precise ser rotacionada de emergência?',
            options: [
              'Desativar o certificado do servidor',
              'Definir apenas um pin sem data de expiração',
              'Incluir ao menos um pin de backup (chave reserva) na configuração',
              'Permitir tráfego HTTP em texto claro (cleartextTrafficPermitted="true")',
              'Enviar a chave privada do servidor dentro do APK'
            ],
            answer: 2,
            explain: 'Ter um pin de backup (chave reserva gerada previamente) evita que o app pare de funcionar se a chave primária vazar ou precisar de troca urgente.'
          }
        ]
      },
      {
        title: 'Consumo de APIs REST/JSON e Push (FCM)',
        pages: [
          '• Consumo REST/JSON no mobile:\n• Métodos HTTP: GET (lê), POST (cria), PUT (substitui), PATCH (atualiza parcial), DELETE (remove).\n• Status codes chave: 200/201 (sucesso), 401 (não autenticado → renovar token), 403 (sem permissão), 429 (rate limit), 5xx (erro no servidor).\n• Boas práticas: timeouts curtos, retry com backoff exponencial, paginação e cache local.',
          '• Regra de ouro de concorrência:\n• Rede e parse de JSON pesado NUNCA rodam na Main Thread (UI Thread).\n• No Android, travar a UI Thread por ~5s causa ANR (Application Not Responding). Use Coroutines/Flow (Kotlin), async/await (Swift) ou Isolates/Futures (Flutter).',
          '• Push com FCM (Firebase Cloud Messaging):\n• Fluxo: Seu Backend → FCM → transporte do SO (Android / APNs no iOS) → App.\n• Cada instalação ganha um Registration Token (pode ser rotacionado — envie ao backend no onNewToken).\n• Notification Message: o SO exibe em background. Data Message: entrega payload JSON direto ao código (onMessageReceived) mesmo em background.'
        ],
        tip: 'Rede na Main Thread = ANR. FCM Notification = SO exibe em background; Data = app sempre trata.',
        quiz: [
          {
            q: 'Ao consumir uma API REST em um aplicativo Android, o servidor responde com status HTTP 401 (Unauthorized) porque o access token JWT expirou. Esse código significa que:',
            options: [
              'o usuário está autenticado, mas não tem perfil para a ação (erro 403)',
              'faltam credenciais válidas de autenticação; o app deve renovar o token ou pedir novo login',
              'o servidor sofreu erro interno de banco de dados (500)',
              'o JSON enviado é inválido sintaticamente (400)',
              'a conexão TLS foi interceptada por SSL Pinning'
            ],
            answer: 1,
            explain: '401 Unauthorized indica falha/ausência/expiração de autenticação (quem você é). Já 403 Forbidden indica que o servidor sabe quem você é, mas você não tem autorização.'
          },
          {
            q: 'No Firebase Cloud Messaging (FCM), um sistema precisa enviar uma atualização silenciosa de dados para sincronizar o cache do aplicativo Android mesmo quando ele está em segundo plano, sem exibir alerta visual automático pelo sistema operacional. Deve-se enviar uma:',
            options: [
              'Notification Message pura (apenas campo notification)',
              'Data Message (payload no campo data)',
              'Requisição HTTP GET síncrona na Main Thread',
              'Mensagem SMS via SharedPreferences',
              'Chave pública SPKI no cabeçalho HTTP'
            ],
            answer: 1,
            explain: 'Data Messages carregam apenas pares chave-valor no campo data e são entregues ao método onMessageReceived() do app tanto em foreground quanto em background.'
          }
        ]
      }
    ]
  }
};

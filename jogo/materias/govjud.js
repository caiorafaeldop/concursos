window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['govjud'] = {
  id: 'govjud',
  name: 'Governança do Judiciário',
  npcs: [
    { name: 'Desembargadora Digital', lines: [
      'A PDPJ-Br (Res. CNJ 335/2020) transforma o Judiciário em plataforma de microsserviços e APIs, com Marketplace colaborativo.',
      'O PJe continua existindo, mas agora conversa com módulos independentes via serviços estruturantes compartilhados.',
      'Interoperabilidade é trocar dados sem redigitar: MNI padroniza troca processual; MInG orienta padrões de governo.',
      'Acessibilidade digital segue o e-MAG e a WCAG: perceber, operar, entender e ser robusto para todos os cidadãos.'
    ] },
    { name: 'Arquivista Guardião', lines: [
      'Documento digital sem metadados e preservação vira arquivo morto ilegível em poucos anos.',
      'MoReq-Jus define requisitos para sistemas de gestão de processos e documentos no Judiciário.',
      'RDC-Arq é o Repositório Arquivístico Digital Confiável (modelo OAIS) que garante autenticidade a longo prazo.',
      'Sobre artigos e prazos exatos da Res. CNJ 522/2023 e tabelas de temporalidade, confira sempre o texto oficial.'
    ] },
    { name: 'Delegado de Dados & IA', lines: [
      'Na LGPD: Controlador decide o tratamento; Operador executa em nome dele; Encarregado (DPO) faz a ponte com titulares e ANPD.',
      'No Marco Civil: provedor de conexão guarda IP/tempo de conexão; provedor de aplicação guarda logs de acesso ao serviço.',
      'IA no Judiciário exige supervisão humana, transparência, auditabilidade e controle de vieses (Res. CNJ 332/2020 e 615/2025).',
      'Res. 370/2021 trata da ENTIC-JUD; Res. 396/2021 de Segurança Cibernética; confira os textos oficiais para detalhes.'
    ] }
  ],
  boss: {
    name: 'Prof. Magistrado Digital',
    intro: 'Quem confunde PDPJ-Br com monólito, MNI com banco único ou Controlador com Operador não homologa o sistema!',
    questions: [
      { q: 'Sobre a Plataforma Digital do Poder Judiciário Brasileiro (PDPJ-Br, Res. CNJ 335/2020), é correto afirmar que ela:',
        options: [
          'substitui imediatamente todos os sistemas processuais dos tribunais por um único código monolítico',
          'adota arquitetura orientada a microsserviços, APIs e Marketplace para desenvolvimento colaborativo de módulos',
          'proíbe o uso de APIs REST e exige comunicação exclusiva por troca manual de planilhas',
          'centraliza todas as bases de dados dos tribunais em um único servidor físico sem autonomia local',
          'restringe o acesso dos módulos apenas ao STF, vedando adesão dos tribunais estaduais'
        ],
        answer: 1, explain: 'A PDPJ-Br (Res. CNJ 335/2020) promove arquitetura modular em microsserviços, APIs e Marketplace colaborativo. Não é um monólito único nem proíbe autonomia dos tribunais.' },
      { q: 'Um tribunal precisa integrar seu sistema processual ao Ministério Público e à Defensoria para envio eletrônico de autos e intimações. O padrão nacional voltado à interoperabilidade processual nesse contexto é:',
        options: [
          'RDC-Arq',
          'COBIT 2019',
          'MNI (Modelo Nacional de Interoperabilidade)',
          'Marco Civil da Internet',
          'ITIL 4'
        ],
        answer: 2, explain: 'O MNI padroniza o intercâmbio de informações processuais entre órgãos do Judiciário e entidades externas (MP, Defensoria, etc.). RDC-Arq trata de preservação arquivística; COBIT/ITIL são frameworks de TI.' },
      { q: 'No contexto da gestão documental digital no Judiciário (MoReq-Jus e RDC-Arq), a função principal de um RDC-Arq baseado no modelo OAIS é:',
        options: [
          'substituir o protocolo de peticionamento inicial para acelerar o despacho do juiz',
          'assegurar preservação, autenticidade, integridade e acesso de longo prazo aos documentos arquivísticos digitais',
          'aplicar penalidades administrativas previstas na LGPD a provedores de internet',
          'gerenciar exclusivamente senhas de rede e balanceadores de carga do tribunal',
          'treinar modelos de linguagem generativa sem necessidade de classificação documental'
        ],
        answer: 1, explain: 'O RDC-Arq (modelo OAIS: SIP, AIP, DIP) preserva documentos digitais autênticos a longo prazo. MoReq-Jus define requisitos de gestão, mas não substitui o repositório confiável nem trata de LGPD/senhas.' },
      { q: 'Na LGPD (Lei 13.709/2018), um tribunal contrata uma empresa de nuvem para hospedar e processar dados conforme suas instruções. Nessa relação, o tribunal e a empresa são, respectivamente:',
        options: [
          'Operador e Controlador',
          'Encarregado e Titular',
          'Controlador e Operador',
          'ANPD e Controlador',
          'Titular e Operador'
        ],
        answer: 2, explain: 'O Controlador (tribunal) toma as decisões referentes ao tratamento de dados pessoais; o Operador (empresa contratada) realiza o tratamento em nome do controlador.' },
      { q: 'De acordo com a LGPD (Lei 13.709/2018), o dado relativo a um indivíduo que, considerando meios técnicos razoáveis e disponíveis no momento do tratamento, não permite identificar o titular é classificado como:',
        options: [
          'dado pessoal sensível, sujeito a sigilo absoluto',
          'dado anonimizado, que em regra não é considerado dado pessoal salvo reversão com esforço razoável',
          'dado público irrestrito de propriedade exclusiva do operador',
          'metadado de conexão sob guarda do provedor de aplicação',
          'registro de acesso judicialmente dispensado de segurança'
        ],
        answer: 1, explain: 'Na LGPD, o dado anonimizado não é considerado dado pessoal, salvo quando o processo de anonimização puder ser revertido utilizando exclusivamente meios próprios ou com esforços razoáveis.' },
      { q: 'Sobre o Marco Civil da Internet (Lei 12.965/2014), a diferença entre registro de conexão e registro de acesso a aplicações de internet é que:',
        options: [
          'ambos são guardados apenas pelo usuário final em seu navegador',
          'o provedor de conexão guarda dados de data/hora de início e término de conexão e IP; o de aplicação guarda acesso a serviços/sites',
          'o provedor de aplicação é proibido por lei de guardar qualquer log, mesmo com ordem judicial',
          'a neutralidade de rede permite priorizar pacotes pagos de tribunais sobre cidadãos comuns',
          'registros de conexão podem ser divulgados livremente sem autorização judicial'
        ],
        answer: 1, explain: 'O Marco Civil distingue provedores de conexão (guardam registro de conexão) e de aplicações (guardam registro de acesso a aplicações), exigindo ordem judicial para quebra de sigilo.' },
      { q: 'Um tribunal implanta ferramenta de IA para sugerir minutas de sentença e classificar processos. Segundo os princípios de governança algorítmica e normas do CNJ sobre IA (como Res. CNJ 332/2020 e 615/2025), é obrigatório:',
        options: [
          'delegar a decisão final exclusivamente ao algoritmo para eliminar intervenção humana',
          'manter os critérios do modelo em segredo absoluto, vedando auditoria interna ou externa',
          'garantir supervisão humana efetiva, transparência, auditabilidade e mitigação de vieses discriminatórios',
          'treinar o modelo apenas com dados biométricos sensíveis sem base legal',
          'dispensar avaliação de risco quando o sistema for desenvolvido internamente'
        ],
        answer: 2, explain: 'A governança algorítmica no Judiciário exige supervisão humana (a decisão jurisdicional é do magistrado), transparência, explicabilidade, auditabilidade e prevenção de vieses.' },
      { q: 'Qual conjunto associa corretamente normas estratégicas do CNJ no âmbito de TIC e Segurança Cibernética?',
        options: [
          'Res. CNJ 370/2021 (ENTIC-JUD) e Res. CNJ 396/2021 (Segurança Cibernética do Poder Judiciário)',
          'Res. CNJ 335/2020 (Marco Civil) e Res. CNJ 91/2009 (LGPD)',
          'Res. CNJ 396/2021 (MoReq-Jus) e Res. CNJ 370/2021 (Tabela de Custas)',
          'Res. CNJ 468/2022 (LGPD) e Res. CNJ 522/2023 (Neutralidade de Rede)',
          'Res. CNJ 615/2025 (RDC-Arq) e Res. CNJ 335/2020 (Contratações de TIC)'
        ],
        answer: 0, explain: 'Res. CNJ 370/2021 institui a ENTIC-JUD e Res. CNJ 396/2021 institui a Estratégia Nacional de Segurança Cibernética do Poder Judiciário. As demais opções trocam os temas das normas.' }
    ]
  },
  match: {
    title: 'Ligue o conceito de Governança',
    pairs: [
      ['PDPJ-Br', 'Plataforma de microsserviços, APIs e Marketplace do Judiciário'],
      ['MNI', 'Padrão nacional de interoperabilidade de dados processuais'],
      ['RDC-Arq', 'Repositório confiável (OAIS) para preservação digital de longo prazo'],
      ['Controlador (LGPD)', 'Quem toma as decisões sobre o tratamento de dados pessoais'],
      ['Marco Civil', 'Lei de princípios, neutralidade de rede e guarda de registros'],
      ['ENTIC-JUD (Res. 370)', 'Estratégia Nacional de TIC do Poder Judiciário']
    ]
  },
  quick: [
    { q: 'Qual resolução do CNJ instituiu a PDPJ-Br?', options: ['Res. 335/2020', 'Res. 91/2009', 'Res. 396/2021', 'Res. 468/2022'], answer: 0, explain: 'A Resolução CNJ 335/2020 instituiu a PDPJ-Br.' },
    { q: 'Quem executa o tratamento em nome do Controlador na LGPD?', options: ['Titular', 'Operador', 'ANPD', 'Provedor'], answer: 1, explain: 'O Operador realiza o tratamento em nome do Controlador.' },
    { q: 'Qual modelo conceitual fundamenta o RDC-Arq?', options: ['Scrum', 'OAIS', 'ITIL', 'TCP/IP'], answer: 1, explain: 'O RDC-Arq segue o modelo de referência OAIS (SIP, AIP, DIP).' },
    { q: 'Qual princípio do Marco Civil impede discriminar pacotes por conteúdo?', options: ['Anonimização', 'Neutralidade', 'Temporalidade', 'Microsserviço'], answer: 1, explain: 'A neutralidade de rede veda discriminação ou degradação de tráfego.' },
    { q: 'Qual sigla representa o Modelo Nacional de Interoperabilidade?', options: ['MInG', 'MNI', 'PJe', 'DPO'], answer: 1, explain: 'MNI é o Modelo Nacional de Interoperabilidade.' },
    { q: 'Na IA no Judiciário, quem mantém a palavra final na decisão?', options: ['O modelo LLM', 'O magistrado', 'O provedor', 'O operador'], answer: 1, explain: 'Supervisão humana garante que a decisão final cabe ao magistrado.' }
  ],
  study: {
    title: 'Biblioteca de Governança do Judiciário',
    chapters: [
      { title: 'PDPJ-Br, PJe e Marketplace do Judiciário',
        pages: [
          'Por que mudar o PJe?\n• O PJe unificou processos eletrônicos, mas sistemas monolíticos são difíceis de evoluir.\n• A Res. CNJ 335/2020 instituiu a PDPJ-Br para integrar tribunais sem jogar fora o que já funciona.\n• Em vez de um sistema gigante único, usa serviços modulares conectados por APIs.',
          'Pilares da PDPJ-Br:\n• Microsserviços: módulos pequenos e independentes (ex.: cálculos, assinador, consulta).\n• Marketplace: vitrine onde um tribunal publica solução e outros reutilizam.\n• Serviços estruturantes: autenticação única, tabelas unificadas e mensageria.\n• Confira o texto oficial da Res. 335/2020 para regras de adesão.',
          'Governo e Acessibilidade Digital:\n• Governo digital busca serviços centrados no cidadão, sem papel e com transparência.\n• Acessibilidade digital (e-MAG / WCAG): conteúdo deve ser Perceptível, Operável, Compreensível e Robusto.\n• Leitores de tela, contraste e navegação por teclado são obrigatórios em portais públicos.'
        ],
        tip: 'PDPJ-Br = plataforma aberta de microsserviços + APIs + Marketplace (colaboração entre tribunais).',
        quiz: [
          { q: 'Qual é o principal ganho arquitetural da PDPJ-Br (Res. CNJ 335/2020) em relação a sistemas monolíticos?',
            options: [
              'Eliminar APIs para que cada módulo acesse diretamente o banco de outros tribunais',
              'Permitir desenvolvimento colaborativo de microsserviços compartilháveis via Marketplace',
              'Impedir o uso do PJe em qualquer tribunal estadual do país',
              'Centralizar todas as sentenças em planilhas offline sem autenticação',
              'Substituir a acessibilidade digital por formulários em papel'
            ],
            answer: 1, explain: 'A PDPJ-Br permite criar módulos desacoplados em microsserviços e compartilhá-los no Marketplace entre tribunais.' },
          { q: 'Nos padrões de acessibilidade digital (WCAG / e-MAG), os quatro princípios fundamentais exigem que a interface seja:',
            options: [
              'Rápida, paga, fechada e proprietária',
              'Perceptível, operável, compreensível e robusta',
              'Criptografada, anônima, monolítica e síncrona',
              'Visual apenas, sem suporte a teclado ou leitor de tela',
              'Restrita a navegadores móveis de última geração'
            ],
            answer: 1, explain: 'Os 4 princípios POUR da WCAG são: Perceptível, Operável, Compreensível e Robusto.' }
        ] },
      { title: 'Interoperabilidade: MNI, MInG e Integração',
        pages: [
          'O que é interoperabilidade?\n• É a capacidade de sistemas diferentes conversarem e entenderem os mesmos dados.\n• Tem 3 dimensões: Técnica (protocolos/APIs), Semântica (significado igual dos campos) e Organizacional (processos e acordos entre órgãos).\n• Evita redigitação entre Tribunal, MP, Defensoria e OAB.',
          'MNI e MInG:\n• MNI (Modelo Nacional de Interoperabilidade): padrão comum para envio e consulta de dados processuais entre sistemas de justiça.\n• MInG (Modelo de Interoperabilidade do Governo): diretrizes e padrões abertos para troca de informações no setor público.\n• Confira a Res. CNJ 91/2009 e atualizações oficiais do MNI para detalhes normativos.',
          'Como funciona na prática?\n• O sistema A envia uma mensagem padronizada (XML/SOAP ou JSON/REST) validada por esquema (XSD/OpenAPI).\n• O sistema B valida a estrutura, verifica autenticidade/certificado e grava os autos sem intervenção manual.\n• Padrões abertos evitam aprisionamento a um único fornecedor (vendor lock-in).'
        ],
        tip: 'Interoperabilidade = Técnica (fio/API) + Semântica (dicionário) + Organizacional (acordo).',
        quiz: [
          { q: 'Quando dois sistemas trocam um JSON válido sintaticamente, mas um chama "data_dist" de data de nascimento e o outro de data de distribuição, há falha de interoperabilidade:',
            options: [
              'Física de camada elétrica',
              'Semântica',
              'Exclusivamente de armazenamento em fita',
              'De neutralidade de rede',
              'De anonimização reversível'
            ],
            answer: 1, explain: 'Interoperabilidade semântica garante que ambos os sistemas atribuam o mesmo significado aos dados trocados.' },
          { q: 'O uso de padrões abertos como os previstos no MNI e no MInG tem como objetivo central:',
            options: [
              'Tornar os dados incompatíveis com órgãos externos ao tribunal',
              'Permitir integração entre sistemas heterogêneos sem dependência de fornecedor único',
              'Substituir a necessidade de certificados digitais e controle de acesso',
              'Impedir a comunicação entre Poder Judiciário e Ministério Público',
              'Guardar todos os processos exclusivamente em arquivos de áudio'
            ],
            answer: 1, explain: 'Padrões abertos garantem que sistemas distintos (PJe, e-Proc, sistemas do MP/OAB) se integrem sem lock-in.' }
        ] },
      { title: 'Gestão Documental Digital, MoReq-Jus e RDC-Arq',
        pages: [
          'Ciclo de vida do documento digital:\n• Produção/captura → classificação (código de assunto) → tramitação → avaliação/temporalidade → destinação (eliminação ou guarda permanente).\n• Metadados (quem criou, quando, hash, classe) são o "RG" que prova contexto e autenticidade.',
          'MoReq-Jus:\n• Modelo de Requisitos para Sistemas Informatizados de Gestão de Processos e Documentos do Poder Judiciário.\n• Garante que o sistema capture documentos com metadados, aplique tabelas de temporalidade e mantenha trilha de auditoria.\n• Sem MoReq-Jus, um sistema vira "pasta compartilhada" sem valor arquivístico.',
          'RDC-Arq e Res. CNJ 522/2023:\n• RDC-Arq é o Repositório Arquivístico Digital Confiável, baseado no modelo OAIS: SIP (pacote de envio), AIP (pacote de arquivamento) e DIP (pacote de disseminação).\n• Preserva integridade (hashes/assinaturas) e legibilidade contra obsolescência de formatos.\n• Confira o texto oficial da Res. CNJ 522/2023 para regras vigentes.'
        ],
        tip: 'OAIS no RDC-Arq: SIP (Submissão/entra) → AIP (Arquivo/guarda) → DIP (Disseminação/sai).',
        quiz: [
          { q: 'No modelo OAIS adotado pelo RDC-Arq, os pacotes de informação de entrada (submissão), preservação interna e entrega ao usuário são chamados, respectivamente, de:',
            options: [
              'DIP, SIP e AIP',
              'SIP, AIP e DIP',
              'AIP, DIP e SIP',
              'XML, PDF e JSON',
              'MNI, MInG e PDPJ'
            ],
            answer: 1, explain: 'SIP = Submission (entra); AIP = Archival (guarda/preserva); DIP = Dissemination (sai para consulta).' },
          { q: 'Qual é o papel dos metadados arquivísticos em um sistema aderente ao MoReq-Jus?',
            options: [
              'Apenas enfeitar a interface gráfica sem valor probatório',
              'Registrar contexto, autoria, datas, classificação e integridade do documento ao longo do tempo',
              'Substituir o backup em nuvem por exclusão imediata dos autos',
              'Permitir que qualquer usuário altere datas de protocolo sem deixar rastro',
              'Criptografar a senha do wifi do tribunal'
            ],
            answer: 1, explain: 'Metadados preservam o contexto, a autenticidade, a classificação e a trilha de auditoria do documento digital.' }
        ] },
      { title: 'LGPD e Marco Civil da Internet no Judiciário',
        pages: [
          'Marco Civil da Internet (Lei 12.965/2014):\n• Princípios: neutralidade de rede, privacidade, liberdade de expressão.\n• Provedor de conexão: guarda registro de conexão (IP, início/fim).\n• Provedor de aplicação: guarda registro de acesso a aplicações.\n• Entrega de registros exige ordem judicial (confira prazos exatos nos arts. 13 e 15 da lei).',
          'LGPD (Lei 13.709/2018) — Conceitos e Papéis:\n• Dado pessoal: identifica ou torna identificável pessoa natural. Sensível: saúde, biometria, religião, etc.\n• Dado anonimizado não é dado pessoal, salvo reversão com esforço razoável.\n• Controlador (decide) × Operador (executa) × Encarregado/DPO (canal com titular e ANPD).',
          'Princípios e Bases Legais no Judiciário:\n• Princípios: finalidade, adequação, necessidade (minimização), transparência, segurança e responsabilização.\n• Bases legais comuns no setor público/Judiciário: cumprimento de obrigação legal, execução de políticas públicas e exercício regular de direitos em processo judicial.\n• Incidentes relevantes exigem comunicação à ANPD e aos titulares.'
        ],
        tip: 'Controlador = manda no "porquê/como"; Operador = executa; DPO = ponte; Anonimizado = fora da LGPD se irreversível.',
        quiz: [
          { q: 'Conforme o Marco Civil da Internet (Lei 12.965/2014), o princípio da neutralidade de rede determina que o responsável pela transmissão e roteamento:',
            options: [
              'deve cobrar tarifa extra de pacotes de vídeo e tribunais',
              'deve tratar de forma isonômica quaisquer pacotes de dados, sem distinção por conteúdo, origem ou destino',
              'pode bloquear sites concorrentes por interesse comercial',
              'é obrigado a guardar o conteúdo de todas as conversas privadas por 10 anos',
              'dispensa ordem judicial para entregar dados cadastrais e conteúdo de e-mails'
            ],
            answer: 1, explain: 'A neutralidade de rede impõe tratamento isonômico de pacotes, vedando discriminação ou degradação por conteúdo, origem ou serviço.' },
          { q: 'Na LGPD, o princípio que limita o tratamento ao mínimo necessário para a realização de suas finalidades, com abrangência dos dados pertinentes e proporcionais, é o princípio da:',
            options: [
              'Livre iniciativa',
              'Necessidade',
              'Neutralidade de rede',
              'Temporalidade arquivística',
              'Obsolescência programada'
            ],
            answer: 1, explain: 'O princípio da necessidade (minimização) exige coletar e tratar apenas o mínimo de dados estritamente necessário à finalidade.' }
        ] },
      { title: 'Governança Algorítmica, IA e Normas CNJ de TIC',
        pages: [
          'Governança Algorítmica e IA no Judiciário:\n• Algoritmos podem reproduzir vieses dos dados históricos e gerar decisões opacas.\n• Pilares: transparência, explicabilidade, auditabilidade, segurança e supervisão humana (human-in-the-loop).\n• A IA apoia triagem, pesquisa e minutas; a decisão jurisdicional pertence sempre ao magistrado.',
          'Normas do CNJ sobre IA:\n• Res. CNJ 332/2020: ética, transparência e governança na produção e uso de IA no Judiciário.\n• Res. CNJ 615/2025: diretrizes atualizadas de governança e gestão de riscos de IA no Judiciário.\n• Confira o texto oficial da Res. 615/2025 para classificações de risco e obrigações detalhadas.',
          'Ecossistema de Normas CNJ e TJPB:\n• Res. CNJ 370/2021: ENTIC-JUD (Estratégia Nacional de TIC).\n• Res. CNJ 396/2021: Estratégia Nacional de Segurança Cibernética.\n• Res. CNJ 468/2022: Contratações de soluções de TIC.\n• PDTI TJPB 2024–2026: desdobra essas diretrizes no tribunal (confira documento oficial do TJPB).'
        ],
        tip: '332/615 = IA · 335 = PDPJ-Br · 370 = ENTIC-JUD · 396 = Ciber · 468 = Contratações · 522 = Gestão Doc.',
        quiz: [
          { q: 'Em um sistema de IA utilizado para priorização de processos ou apoio à decisão no Judiciário, o princípio da supervisão humana significa que:',
            options: [
              'o algoritmo pode proferir sentenças definitivas sem revisão de magistrado',
              'seres humanos mantêm controle, revisão e responsabilidade final pelas decisões assistidas pela IA',
              'os usuários não podem saber quando estão interagindo com um sistema automatizado',
              'o código-fonte e os critérios de treinamento são dispensados de qualquer auditoria',
              'vieses discriminatórios são aceitos desde que reduzam o tempo de processamento'
            ],
            answer: 1, explain: 'Supervisão humana garante que a IA atue como ferramenta de apoio, mantendo controle, revisão e responsabilidade humana sobre as decisões.' },
          { q: 'Qual resolução do CNJ estabelece a Estratégia Nacional de Segurança Cibernética do Poder Judiciário?',
            options: [
              'Res. CNJ 335/2020',
              'Res. CNJ 370/2021',
              'Res. CNJ 396/2021',
              'Res. CNJ 468/2022',
              'Res. CNJ 91/2009'
            ],
            answer: 2, explain: 'Res. CNJ 396/2021 institui a Estratégia Nacional de Segurança Cibernética do Poder Judiciário (370 = ENTIC-JUD; 335 = PDPJ-Br; 468 = Contratações).' }
        ] }
    ]
  }
};

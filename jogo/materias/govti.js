window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['govti'] = {
  id: 'govti',
  name: 'Governança de TI',
  npcs: [
    { name: 'Conselheiro Cobitão', lines: [
      'Governança (EDM) avalia, dirige e monitora. Gestão (PBRM) planeja, constrói, executa e monitora no dia a dia.',
      'No COBIT 2019 são 5 domínios e 40 objetivos: EDM (5), APO (14), BAI (11), DSS (6) e MEA (4).',
      'Cascata de metas: partes interessadas → metas corporativas → metas de alinhamento → objetivos de gov/gestão.',
      'Capacidade (0 a 5) mede um processo isolado; maturidade mede uma área inteira da organização.'
    ] },
    { name: 'Dona Itilinda, do Balcão', lines: [
      'Serviço co-cria valor: utilidade é o que o serviço faz (fit for purpose); garantia é como entrega (fit for use).',
      'Incidente quer restaurar a operação rápido; Problema quer achar a causa raiz e evitar que volte.',
      'Na ITIL 4, o SVS tem 5 partes: princípios, governança, cadeia de valor (SVC), práticas e melhoria contínua.',
      'São 4 dimensões: Organizações e pessoas, Informação e tecnologia, Parceiros e fornecedores, Fluxos e processos.'
    ] },
    { name: 'Fiscal Contratino', lines: [
      'Contratação de TIC no Judiciário segue a Res. CNJ 468/2022: Planejamento → Seleção → Gestão do Contrato.',
      'A ordem no planejamento é DOD → Equipe de Planejamento → ETP → Termo de Referência (TR).',
      'Eficiência = fazer certo (menor custo); Eficácia = atingir a meta; Efetividade = impacto real na sociedade.',
      'Na dúvida sobre artigo ou prazo exato de resolução, confira sempre o texto oficial da norma!'
    ] }
  ],
  boss: {
    name: 'Prof. Governânzio',
    intro: 'Quem confunde governança com gestão ou incidente com problema não assina o Termo de Recebimento Definitivo!',
    questions: [
      { q: 'No COBIT 2019, a distinção essencial entre Governança e Gestão é que a Governança:',
        options: [
          'executa as atividades diárias de suporte aos usuários',
          'avalia necessidades, dirige prioridades e monitora o desempenho (EDM)',
          'substitui o planejamento estratégico corporativo pelo técnico',
          'restringe-se exclusivamente ao domínio MEA (Monitorar, Avaliar e Analisar)',
          'elimina a necessidade de partes interessadas na cascata de metas'
        ],
        answer: 1, explain: 'Governança atua no ciclo EDM (Avaliar, Dirigir e Monitorar) para alinhar a TI aos objetivos do negócio. Gestão atua no PBRM (Planejar, Construir, Executar e Monitorar) operacionalizando a direção dada.' },
      { q: 'Na ITIL 4, a combinação entre Utilidade e Garantia significa, respectivamente:',
        options: [
          'custo baixo e prazo curto de entrega',
          'atender ao propósito (o que faz) e atender ao uso (disponibilidade, capacidade, segurança)',
          'registro de incidentes e eliminação definitiva da causa raiz',
          'contrato com fornecedor e acordo de nível operacional (OLA)',
          'melhoria contínua e governança corporativa'
        ],
        answer: 1, explain: 'Utilidade (fit for purpose) é a funcionalidade oferecida pelo serviço. Garantia (fit for use) assegura que o serviço funciona com disponibilidade, capacidade, continuidade e segurança adequadas.' },
      { q: 'Um sistema de protocolo cai às 10h. A equipe aplica uma solução de contorno para voltar ao ar em 15 minutos e depois investiga por que o erro ocorreu. As práticas envolvidas são:',
        options: [
          'Gerenciamento de Problemas (contorno) e Mudança Padrão (investigação)',
          'Gerenciamento de Incidentes (restaurar rápido) e Gerenciamento de Problemas (causa raiz)',
          'Solicitação de Serviço e Central de Serviços apenas',
          'Gerenciamento de Nível de Serviço e Melhoria Contínua apenas',
          'Habilitação de Mudança Emergencial e Catálogo de Serviços'
        ],
        answer: 1, explain: 'Incidente busca restaurar a operação normal o mais rápido possível (inclusive via workaround). Problema investiga a causa raiz para evitar recorrência e registra erros conhecidos.' },
      { q: 'Sobre o alinhamento entre Planejamento Estratégico (PE) e PDTI no setor público e no Judiciário:',
        options: [
          'o PDTI é independente do PE e define sozinho a missão do tribunal',
          'o PDTI traduz os objetivos estratégicos do órgão em ações, metas, orçamento e projetos de TIC',
          'o PDTI substitui a Estratégia Nacional de TIC (ENTIC-JUD)',
          'contratações de TIC dispensam previsão no planejamento quando urgentes por conveniência',
          'a matriz SWOT no PDTI analisa apenas fatores internos da equipe de TI'
        ],
        answer: 1, explain: 'O PDTI operacionaliza o planejamento estratégico no âmbito de TIC, alinhado às diretrizes nacionais (ENTIC-JUD) e do tribunal. SWOT analisa ambiente interno (forças/fraquezas) e externo (oportunidades/ameaças).' },
      { q: 'Um tribunal implantou um novo portal de atendimento dentro do prazo e abaixo do orçamento, mas os cidadãos continuaram sem conseguir protocolar petições por falta de usabilidade. Houve:',
        options: [
          'alta efetividade e baixa eficiência',
          'eficiência e eficácia na entrega do projeto, mas baixa efetividade no impacto',
          'alta eficácia e alta efetividade, porém zero eficiência',
          'sucesso pleno nos três indicadores (3Es)',
          'falha exclusiva de eficiência orçamentária'
        ],
        answer: 1, explain: 'Eficiência mede uso de recursos (prazo/orçamento); eficácia mede entrega da meta prevista (portal no ar); efetividade mede o impacto real na sociedade (cidadão resolvendo sua demanda).' },
      { q: 'Na comparação entre Projetos, Processos e Serviços:',
        options: [
          'projetos são contínuos e repetitivos; processos têm fim definido',
          'portfólio agrupa apenas projetos técnicos idênticos sem relação estratégica',
          'projeto é esforço temporário para criar resultado único; processo é fluxo contínuo e repetitivo',
          'serviço exige que o cliente assuma diretamente todos os custos e riscos técnicos',
          'programa é sinônimo de tarefa operacional da Central de Serviços'
        ],
        answer: 2, explain: 'Projeto é temporário e gera produto/serviço único. Processo é contínuo e repetitivo. Serviço entrega valor sem que o cliente assuma os riscos e custos específicos da operação.' },
      { q: 'De acordo com a Res. CNJ 468/2022, a sequência lógica correta na fase de Planejamento da Contratação de Solução de TIC é:',
        options: [
          'Termo de Referência → DOD → ETP → Seleção do Fornecedor',
          'ETP → Seleção do Fornecedor → DOD → Termo de Referência',
          'DOD → instituição da Equipe de Planejamento → ETP → Termo de Referência',
          'Ordem de Serviço → DOD → ETP → Recebimento Definitivo',
          'Pagamento por posto de trabalho → ETP → DOD → Edital'
        ],
        answer: 2, explain: 'O planejamento inicia com o Documento de Oficialização da Demanda (DOD), segue com a Equipe de Planejamento, elaboração do Estudo Técnico Preliminar (ETP) e, então, o Termo de Referência (TR).' },
      { q: 'Em contratações de TIC no Poder Judiciário, a composição básica da Equipe de Planejamento da Contratação reúne os integrantes:',
        options: [
          'Desenvolvedor, DBA e Arquiteto de Software',
          'Requisitante (Demandante), Técnico e Administrativo',
          'Pregoeiro, Auditor Interno e Fornecedor',
          'Presidente do Tribunal, Secretário-Geral e Pregoeiro',
          'Analista de Riscos, Scrum Master e Product Owner'
        ],
        answer: 1, explain: 'A equipe multidisciplinar reúne o Integrante Requisitante (necessidade do negócio), o Integrante Técnico (especificação/arquitetura) e o Integrante Administrativo (conformidade licitatória).' }
    ]
  },
  match: { title: 'Ligue o conceito', pairs: [
    ['COBIT · EDM', 'Avaliar, Dirigir e Monitorar (Governança)'],
    ['ITIL · Utilidade', 'o que o serviço faz (fit for purpose)'],
    ['ITIL · Problema', 'investiga a causa raiz de incidentes'],
    ['Efetividade', 'impacto real e transformação na sociedade'],
    ['PDTI', 'traduz o estratégico em ações e metas de TIC'],
    ['ETP (Res. 468)', 'estudo de viabilidade antes do TR']
  ] },
  quick: [
    { q: 'Domínio exclusivo de Governança no COBIT 2019:', options: ['EDM', 'APO', 'BAI', 'DSS'], answer: 0, explain: 'EDM (Evaluate, Direct, Monitor) é o único domínio de Governança; os outros 4 são de Gestão.' },
    { q: 'Na ITIL 4, "fit for use" (disponibilidade e segurança) é:', options: ['Utilidade', 'Garantia', 'Incidente', 'Solução'], answer: 1, explain: 'Garantia (warranty) assegura como o serviço é entregue: disponível, capaz, contínuo e seguro.' },
    { q: 'Prática ITIL que busca restaurar o serviço o mais rápido possível:', options: ['Problema', 'Mudança', 'Incidente', 'Capacidade'], answer: 2, explain: 'Gerenciamento de Incidentes foca na restauração rápida da operação normal.' },
    { q: 'Fazer mais com menos recurso (custo/tempo) é:', options: ['Eficácia', 'Efetividade', 'Eficiência', 'Impacto'], answer: 2, explain: 'Eficiência olha para os meios e recursos usados; eficácia olha para o alcance da meta.' },
    { q: 'Primeiro documento que abre o planejamento na Res. CNJ 468/2022:', options: ['TR', 'ETP', 'DOD', 'OS'], answer: 2, explain: 'O Documento de Oficialização da Demanda (DOD) inicia o rito de contratação.' },
    { q: 'Análise SWOT avalia como fatores EXTERNOS:', options: ['Forças e Fraquezas', 'Oportunidades e Ameaças', 'Processos e Pessoas', 'Custos e Prazos'], answer: 1, explain: 'Forças e Fraquezas são internas; Oportunidades e Ameaças vêm do ambiente externo.' }
  ],
  study: {
    title: 'Biblioteca de Governança de TI',
    chapters: [
      {
        title: 'Governança × Gestão e COBIT 2019',
        pages: [
          'Governança e Gestão não são a mesma coisa!\n• Governança (quem decide o rumo): Avaliar, Dirigir e Monitorar (EDM). Alinha a TI aos objetivos do negócio.\n• Gestão (quem faz acontecer): Planejar, Construir, Executar e Monitorar (PBRM), seguindo a direção da governança.\n• No COBIT 2019, a governança tem 1 domínio (EDM, 5 objetivos) e a gestão tem 4 domínios (APO 14, BAI 11, DSS 6, MEA 4), somando 40 objetivos.',
          'Princípios do COBIT 2019:\n• 6 princípios do Sistema de Governança: prover valor às partes interessadas; abordagem holística; sistema dinâmico; governança distinta da gestão; adaptado às necessidades; fim a fim.\n• 3 princípios do Framework: baseado em modelo conceitual; aberto e flexível; alinhado a padrões.\n• Cascata de Metas: Necessidades das partes interessadas → Metas Corporativas → Metas de Alinhamento → Objetivos de Governança e Gestão.',
          'Como o sistema funciona por dentro:\n• 7 componentes: Processos; Estruturas Organizacionais; Princípios/Políticas/Frameworks; Informação; Cultura/Ética/Comportamento; Pessoas/Habilidades; Serviços/Infraestrutura/Aplicações.\n• Fatores de Desenho (Design Factors) ajustam o sistema à realidade do órgão.\n• Capacidade (níveis 0 a 5, estilo CMMI) avalia um processo; Maturidade avalia uma área de foco.'
        ],
        tip: 'EDM manda (Governança); PBRM trabalha (Gestão). 40 objetivos = 5 EDM + 14 APO + 11 BAI + 6 DSS + 4 MEA.',
        quiz: [
          { q: 'Um diretor de TI decide qual arquitetura de nuvem será adotada e gerencia o cronograma da migração. No COBIT 2019, essa atuação pertence à:',
            options: ['Governança (domínio EDM)', 'Gestão (domínios PBRM: APO/BAI/DSS/MEA)', 'Auditoria externa independente', 'Cascata de partes interessadas apenas', 'Nenhuma, pois nuvem não entra no COBIT'],
            answer: 1, explain: 'Planejar, construir, executar e monitorar projetos e tecnologias no dia a dia é papel da Gestão (PBRM), operacionalizando as diretrizes da Governança (EDM).' },
          { q: 'Na cascata de metas do COBIT 2019, o elo que conecta as Metas Corporativas aos Objetivos de Governança e Gestão são:',
            options: ['os Fatores de Desenho', 'as Metas de Alinhamento', 'os Níveis de Capacidade 0 a 5', 'as Práticas de Serviço ITIL', 'os Acordos de Nível Operacional'],
            answer: 1, explain: 'A cascata segue: Necessidades das partes interessadas → Metas Corporativas → Metas de Alinhamento → Objetivos de Governança e Gestão.' }
        ]
      },
      {
        title: 'ITIL 4 e Gerenciamento de Serviços',
        pages: [
          'Serviço é um meio de entregar valor facilitando os resultados desejados pelo cliente, sem que ele assuma custos e riscos específicos.\n• Valor é CO-CRIADO entre provedor e consumidor.\n• Utilidade (fit for purpose): o que o serviço faz (funcionalidade).\n• Garantia (fit for use): como o serviço é entregue (disponibilidade, capacidade, continuidade, segurança). Sem os dois, não há valor.',
          'Arquitetura da ITIL 4:\n• SVS (Sistema de Valor de Serviço): transforma Demanda em Valor via 5 partes — Princípios Orientadores, Governança, Cadeia de Valor (SVC), Práticas e Melhoria Contínua.\n• SVC (Cadeia de Valor): 6 atividades — Planejar, Melhorar, Engajar, Desenho e Transição, Obtenção/Construção, Entrega e Suporte.\n• 4 Dimensões: Organizações/Pessoas, Informação/Tecnologia, Parceiros/Fornecedores, Fluxos/Processos.',
          'Práticas que mais caem na FGV:\n• Central de Serviços (Service Desk): ponto único de contato.\n• Incidente: restaurar a operação normal o mais rápido possível.\n• Problema: investigar a causa raiz de um ou mais incidentes e registrar Erros Conhecidos.\n• Habilitação de Mudanças: padrão (pré-autorizada, baixo risco), normal (passa por avaliação/CAB) e emergencial (urgente).\n• Nível de Serviço (SLA/ANS): metas acordadas de desempenho.'
        ],
        tip: 'Utilidade = O QUÊ (função). Garantia = COMO (funciona bem). Incidente = apaga o fogo. Problema = acha o fósforo.',
        quiz: [
          { q: 'Na ITIL 4, uma alteração recorrente de senha ou criação de acesso padrão, de baixo risco e já pré-autorizada, é classificada como:',
            options: ['Mudança Emergencial', 'Mudança Normal', 'Mudança Padrão', 'Gerenciamento de Problema', 'Erro Conhecido'],
            answer: 2, explain: 'Mudança Padrão é pré-autorizada, de baixo risco, bem compreendida e segue procedimento documentado sem precisar de aprovação a cada ocorrência.' },
          { q: 'Qual componente da ITIL 4 descreve as 6 atividades interconectadas (Planejar, Melhorar, Engajar, Desenho/Transição, Obtenção/Construção, Entrega/Suporte)?',
            options: ['As 4 Dimensões', 'A Cadeia de Valor de Serviço (SVC)', 'Os 7 Princípios Orientadores', 'O Catálogo de Incidentes', 'A Matriz RACI'],
            answer: 1, explain: 'A Cadeia de Valor de Serviço (SVC) é o modelo operacional central do SVS, composto por essas 6 atividades.' }
        ]
      },
      {
        title: 'Planejamento Estratégico e PDTI',
        pages: [
          'Planejamento é pensar antes de agir em 3 níveis:\n• Estratégico (longo prazo, alta direção): define missão, visão, valores e grandes objetivos.\n• Tático (médio prazo, gerências/áreas): desdobra em planos setoriais — aqui entra o PDTI.\n• Operacional (curto prazo): tarefas, rotinas e projetos do dia a dia.',
          'Alinhamento no Judiciário e TJPB:\n• O PDTI (Plano Diretor de TIC) não nasce solto: ele traduz o Planejamento Estratégico do Tribunal e as diretrizes nacionais (como a ENTIC-JUD, Res. CNJ 370/2021) em metas, projetos, orçamento e riscos de TIC.\n• No TJPB, o ciclo 2024–2026 orienta investimentos e contratações de tecnologia.\n• Ferramentas clássicas: SWOT (interno: Forças/Fraquezas; externo: Oportunidades/Ameaças) e BSC (4 perspectivas).',
          'Balanced Scorecard (BSC) adaptado ao setor público:\n• 4 perspectivas: Sociedade/Clientes (valor público), Processos Internos, Aprendizado e Crescimento (pessoas/TI) e Orçamentária/Financeira.\n• Regra de ouro para prova: toda contratação ou projeto relevante de TIC deve estar alinhado ao PDTI e ao planejamento estratégico do órgão (confira detalhes do PDTI TJPB 2024–2026 no documento oficial).'
        ],
        tip: 'SWOT: Forças e Fraquezas são DENTRO de casa; Oportunidades e Ameaças vêm de FORA. PDTI = ponte do estratégico para a TI.',
        quiz: [
          { q: 'Na análise SWOT aplicada ao PDTI de um tribunal, a entrada em vigor de uma nova resolução obrigatória do CNJ e a escassez de servidores capacitados na equipe de TI são, respectivamente:',
            options: [
              'Força e Oportunidade',
              'Fator externo (Oportunidade/Ameaça conforme impacto) e Fraqueza (fator interno)',
              'Ameaça interna e Força externa',
              'Duas Fraquezas internas da equipe',
              'Duas Oportunidades externas de mercado'
            ],
            answer: 1, explain: 'Norma de órgão externo (CNJ) vem do ambiente externo (Oportunidade ou Ameaça). Escassez de capacitação na própria equipe é uma Fraqueza (fator interno).' },
          { q: 'Sobre o papel do PDTI na governança pública de TIC, é correto afirmar que ele:',
            options: [
              'dispensa alinhamento com o planejamento estratégico institucional',
              'consolida necessidades de informação, serviços, projetos, orçamento e riscos de TIC alinhados ao negócio',
              'substitui o Termo de Referência nas licitações',
              'aplica-se apenas à área de infraestrutura física',
              'tem caráter exclusivamente operacional de curto prazo (semanal)'
            ],
            answer: 1, explain: 'O PDTI é instrumento tático-estratégico que traduz a estratégia do órgão em portfólio de ações, metas, orçamento e gestão de riscos de TIC.' }
        ]
      },
      {
        title: 'Projetos, Processos, Serviços e Indicadores',
        pages: [
          'Não confunda os 3 conceitos:\n• Projeto: esforço TEMPORÁRIO com início e fim definidos para criar produto/serviço ÚNICO.\n• Processo: fluxo CONTÍNUO e repetitivo que transforma entradas em saídas (BPM: mapear AS-IS, redesenhar TO-BE).\n• Serviço: entrega valor contínuo ao usuário sem que ele gerencie a infraestrutura.',
          'Hierarquia de gestão:\n• Portfólio: "fazer os projetos certos" (alinhamento estratégico e priorização).\n• Programa: grupo de projetos relacionados gerenciados juntos para obter benefícios que não viriam isolados.\n• Projeto: "fazer certo o projeto" (escopo, prazo, custo, qualidade).\n• Ciclo clássico: Iniciação → Planejamento → Execução → Monitoramento e Controle → Encerramento.',
          'Indicadores (3Es + métricas de TI):\n• Eficiência: fazer certo com menos recurso (tempo, dinheiro).\n• Eficácia: atingir a meta/resultado esperado.\n• Efetividade: impacto real na vida do usuário/sociedade.\n• Métricas de TI: MTBF (tempo médio entre falhas — confiabilidade), MTTR (tempo médio de reparo — agilidade), SLA (acordo com cliente) × OLA (acordo interno).'
        ],
        tip: 'EficiÊNcia = mEios. EficÁcia = metA. EfetiVidade = Valor real na Vida do cidadão. MTTR baixo = conserta rápido!',
        quiz: [
          { q: 'Um tribunal agrupa 4 projetos distintos de modernização do PJe porque, juntos, reduzem o tempo total de tramitação. Esse agrupamento coordenado chama-se:',
            options: ['Processo de negócio', 'Programa', 'Central de Serviços', 'Acordo de Nível Operacional (OLA)', 'Incidente maior'],
            answer: 1, explain: 'Programa é o conjunto de projetos relacionados gerenciados de modo coordenado para alcançar benefícios estratégicos que não seriam obtidos individualmente.' },
          { q: 'Se o tempo médio entre falhas (MTBF) de um sistema é alto e o tempo médio de reparo (MTTR) é muito baixo, isso indica:',
            options: [
              'baixa confiabilidade e lentidão na recuperação',
              'alta confiabilidade (falha pouco) e rápida recuperação quando falha',
              'violação automática do SLA de atendimento',
              'que o sistema não possui processo de monitoramento',
              'confusão entre eficiência e efetividade'
            ],
            answer: 1, explain: 'MTBF alto significa intervalos longos sem falhar (alta confiabilidade). MTTR baixo significa que, quando falha, volta ao ar rapidamente.' }
        ]
      },
      {
        title: 'Contratações de TIC e Res. CNJ 468/2022',
        pages: [
          'Comprar TIC no serviço público não é igual a comprar caneta: exige planejamento técnico para evitar dependência de fornecedor e contrato pago sem entrega.\n• No Judiciário, a Res. CNJ 468/2022 define diretrizes para contratação de Soluções de TIC (em sintonia com a Lei 14.133/2021).\n• Regra-chave: alinhamento ao PDTI e ao planejamento estratégico.',
          'As 3 Fases da Contratação de Solução de TIC:\n1) Planejamento da Contratação: DOD (Documento de Oficialização da Demanda) → Equipe de Planejamento (Integrantes Requisitante, Técnico e Administrativo) → ETP (Estudo Técnico Preliminar: viabilidade, mercado, riscos, TCO) → TR (Termo de Referência).\n2) Seleção do Fornecedor: edital, julgamento e homologação.\n3) Gestão do Contrato: execução, fiscalização e pagamentos.',
          'Gestão e Fiscalização (quem faz o quê):\n• Equipe de Fiscalização: Gestor do Contrato, Fiscal Técnico, Fiscal Demandante/Requisitante e Fiscal Administrativo.\n• Execução por Ordem de Serviço (OS), recebimento provisório e definitivo.\n• Pagamento deve vincular-se a resultados / níveis de serviço (ANS/SLA), evitando mera alocação de postos sem medição. Confira prazos e artigos específicos no texto oficial da Res. CNJ 468/2022.'
        ],
        tip: 'DOD abre → ETP estuda viabilidade → TR especifica → Seleção escolhe → Fiscalização recebe por resultado!',
        quiz: [
          { q: 'Na Res. CNJ 468/2022, o artefato que analisa alternativas de mercado, viabilidade técnica/econômica e riscos antes da elaboração do Termo de Referência é o:',
            options: ['DOD (Documento de Oficialização da Demanda)', 'ETP (Estudo Técnico Preliminar)', 'Termo de Recebimento Definitivo', 'Ordem de Serviço (OS)', 'Acordo de Nível Operacional (OLA)'],
            answer: 1, explain: 'O ETP avalia a viabilidade da contratação e compara soluções de mercado antes de redigir as especificações definitivas do Termo de Referência (TR).' },
          { q: 'Em um contrato de desenvolvimento de software no Judiciário, a prática recomendada pela governança de contratações de TIC é:',
            options: [
              'pagar apenas pela presença física de programadores, sem medir entregas',
              'dispensar o DOD quando houver urgência administrativa',
              'vincular o pagamento a resultados, métricas e níveis de serviço (ANS/SLA) verificados via OS',
              'concentrar toda a fiscalização técnica e administrativa no fornecedor',
              'elaborar o ETP somente após a assinatura do contrato'
            ],
            answer: 2, explain: 'A governança de TIC veda o modelo de mera alocação de postos sem entrega e exige pagamento atrelado a resultados, métricas e níveis de serviço.' }
        ]
      }
    ]
  }
};

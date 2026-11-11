/* Dados extraídos dos editais ABDI 01/2026 e TJPB 01/2026 (+ 1ª e 2ª retificações). */

const EVENTS = [
  /* ABDI — Pós-Inscrição */
  { d: "2026-12-02", allDay: true, org: "ABDI", t: "Edital de convocação (títulos e currículo)", n: "Publicado no site da FGV." },
  { d: "2026-12-03T16:00:00-03:00", org: "ABDI", t: "Abre envio de títulos + currículo; sai comunicado do teste da plataforma", hard: true,
    n: "Teste da plataforma é OBRIGATÓRIO, no mesmo computador e internet do dia da prova." },
  { d: "2026-12-17", allDay: true, org: "ABDI", t: "Link exclusivo da prova (disponível até 3 dias antes)", n: "Ativa 30 min antes do início. Entre com 5+ min de antecedência." },
  { d: "2026-12-20T13:30:00-03:00", org: "ABDI", t: "PROVA OBJETIVA (online, em casa) 13h30–17h", hard: true,
    n: "Link abre 13h00. Não entra depois de 13h30. Ficar no mínimo 2h. Webcam + microfone ligados o tempo todo." },
  { d: "2026-12-22T16:00:00-03:00", org: "ABDI", t: "Fim do envio de títulos E currículo padrão", hard: true,
    n: "Não enviar currículo = ELIMINADO. Não enviar títulos = nota 0 nessa etapa (não elimina). Envie cedo, não no último dia." },
  { d: null, org: "ABDI", t: "Depois: gabarito → recurso (2 dias úteis) → resultado → heteroidentificação telepresencial → títulos → entrevista online → resultado final", n: "Datas divulgadas em editais seguintes. Acompanhar https://conhecimento.fgv.br/concursos/psabdi" },

  /* TJPB — Pós-Inscrição */
  { d: "2026-11-18T16:00:00-03:00", org: "TJPB", t: "Prazo final de upload de documentos pendentes no painel FGV (se aplicável)", hard: false,
    n: "Apenas caso reste anexar declaração/laudo complementar no painel da FGV." },
  { d: null, org: "TJPB", t: "Divulgação dos locais de prova (João Pessoa/PB)", n: "No site da FGV. É sua obrigação conferir." },
  { d: "2027-01-24T13:00:00-03:00", org: "TJPB", t: "PROVA OBJETIVA + DISCURSIVA, 13h–18h (João Pessoa/PB)", hard: true,
    n: "Portões fecham 12h30. Chegar 1h30 antes (11h30). Documento físico original com foto. Caneta transparente azul/preta." },
  { d: null, org: "TJPB", t: "Depois: gabarito → recurso (2 dias úteis) → resultado objetiva → discursiva corrigida (top 100 AC + todos cotistas aprovados) → heteroidentificação → resultado final", n: "Acompanhar https://conhecimento.fgv.br/concursos/tjpb26" },
];

const ABDI_VAGAS = {
  cols: ["AC", "Negro", "Indíg.", "Quilomb.", "PcD", "Total"],
  rows: [
    ["Contabilidade",            [2,0,0,0,0,2],   [6,2,0,0,0,8]],
    ["Administrativo",           [1,1,0,0,0,2],   [15,6,1,1,1,24]],
    ["Analista de Dados",        [2,0,0,0,0,2],   [10,4,1,0,1,16]],
    ["Produtividade Industrial", [3,1,1,0,1,6],   [33,12,1,1,1,48]],
    ["Desenvolvimento de TI",    [1,1,0,0,0,2],   [10,4,1,0,1,16]],
    ["Infraestrutura e Operação",[1,1,0,0,0,2],   [10,4,0,1,1,16]],
    ["Jurídico",                 [1,1,0,0,0,2],   [11,4,0,1,0,16]],
    ["Gestão de Pessoas",        [1,0,0,0,0,1],   [6,2,0,0,0,8]],
    ["Comunicação e Marketing",  [1,0,0,0,0,1],   [6,2,0,0,0,8]],
  ],
  total: [[13,5,1,0,1,20], [107,40,4,4,5,160]],
};

const TJPB_VAGAS = {
  cols: ["Vagas", "AC", "PcD", "Negro", "Indíg.", "Quilomb.", "Discursivas corrigidas"],
  rows: [
    ["Judiciária (Direito)",            [25,15,2,6,1,1], "até a 300ª"],
    ["TI – Desenvolvimento de Sistemas",[10,6,1,3,0,0],  "até a 100ª"],
    ["TI – Banco de Dados",             [1,1,0,0,0,0],   "até a 50ª"],
    ["TI – Infraestrutura de TI",       [1,1,0,0,0,0],   "até a 100ª"],
    ["TI – Gestão de Governança de TI", [2,1,0,1,0,0],   "até a 50ª"],
    ["TI – Segurança da Informação",    [2,1,0,1,0,0],   "até a 50ª"],
    ["TI – Inteligência Artificial",    [3,2,0,1,0,0],   "até a 100ª"],
    ["TI – Ciência e Análise de Dados", [1,1,0,0,0,0],   "até a 50ª"],
    ["Contabilidade",                   [5,4,0,1,0,0],   "até a 50ª"],
  ],
  total: [50,32,3,13,1,1],
};

const ABDI_PERFIS = [
  "Contabilidade", "Administrativo", "Analista de Dados", "Produtividade Industrial",
  "Desenvolvimento de TI", "Infraestrutura e Operação", "Jurídico", "Gestão de Pessoas",
  "Comunicação e Marketing",
];
const TJPB_ESPS = [
  "Judiciária (Direito)", "TI – Desenvolvimento de Sistemas", "TI – Banco de Dados",
  "TI – Infraestrutura de TI", "TI – Gestão de Governança de TI", "TI – Segurança da Informação",
  "TI – Inteligência Artificial", "TI – Ciência e Análise de Dados", "Contabilidade",
];

/* ---------- Conteúdo comum ---------- */

const PT_TOPICS = [
  "Compreensão e interpretação de textos de gêneros variados; tipos e gêneros textuais",
  "Ortografia oficial",
  "Coesão textual: referenciação, substituição, repetição, conectores, sequenciação; tempos e modos verbais",
  "Morfossintaxe do período: classes de palavras; coordenação e subordinação (orações e termos)",
  "Pontuação",
  "Concordância verbal e nominal",
  "Regência verbal e nominal",
  "Crase",
  "Colocação dos pronomes átonos",
  "Reescrita de frases e parágrafos: significação, substituição, reorganização, níveis de formalidade",
];

const RL_LOGICA = [
  "Estruturas lógicas",
  "Lógica de argumentação: analogias, inferências, deduções e conclusões",
  "Lógica proposicional: proposições simples e compostas, tabelas-verdade, equivalências, diagramas lógicos",
  "Lógica de primeira ordem",
  "Problemas aritméticos, geométricos e matriciais",
];

const RLM_TI = [
  "Conjuntos numéricos; razões e proporções; regra de três simples e composta; porcentagem",
  "Juros simples e compostos",
  "Equações, inequações e sistemas; funções; sequências",
  "Matrizes e determinantes",
  "Probabilidade; análise combinatória; estatística descritiva",
  "Proposições lógicas, conectivos, tabelas-verdade, equivalências e negações",
  "Argumentação lógica; diagramas lógicos",
  "Resolução de problemas de raciocínio lógico-matemático",
];

const INFO_ABDI = [
  "Hardware, software, periféricos, entrada/saída/armazenamento, arquivos, pastas e extensões",
  "Windows 10 e 11 (pt-BR): área de trabalho, arquivos, configurações, pesquisa, impressão, compartilhamento",
  "Microsoft 365: Word, Excel, PowerPoint, Outlook",
  "LibreOffice 7.x: Writer, Calc, Impress",
  "Internet/Intranet, navegadores (Chrome, Firefox, Edge), buscadores, webmail",
  "Correio eletrônico: envio, organização, anexos, contatos, calendário",
  "Segurança: vírus, malware, phishing, golpes, antivírus, firewall, backup, autenticação",
  "Computação em nuvem: armazenamento, sincronização, colaboração",
  "Inteligência Artificial: conceitos, IA generativa, uso responsável, limitações",
  "Digitalização, impressão, atalhos, acessibilidade e produtividade",
  "Legislação: Lei 12.527/2011 (LAI), Lei 12.737/2012 (delitos informáticos), Lei 12.965/2014 (Marco Civil), Lei 13.709/2018 (LGPD)",
];

const INFO_TJPB = [
  "Fundamentos: hardware e software, sistemas operacionais e aplicativos, redes e internet",
  "Segurança da informação: princípios, ameaças, boas práticas",
  "Proteção de dados: conceitos e princípios; direitos do titular e bases legais; agentes de tratamento; segurança no tratamento",
  "Proteção de dados no Judiciário: políticas de privacidade, dados em atividades judiciais e administrativas, segurança, governança e conformidade",
  "Lei 13.709/2018 (LGPD)",
];

const ETICA_TJPB = [
  "Princípios constitucionais da Administração; moralidade e interesse público; probidade; conflito de interesses",
  "Deveres e vedações do servidor; responsabilização administrativa, civil e penal; PAD e sanções",
  "Improbidade administrativa (Lei 8.429/1992 e alterações)",
  "Responsabilização de pessoas jurídicas (Lei 12.846/2013): responsabilidade objetiva, atos lesivos, acordo de leniência, programas de integridade",
  "Gestão de pessoas e comportamento organizacional: motivação, liderança, equipe, comunicação, cultura e clima, conflitos",
  "Integridade no Judiciário: conduta ética, transparência, prevenção de fraudes e corrupção",
  "Resolução TJPB 20/2025 (Programa de Integridade) e 21/2025 (Código de Conduta Ética)",
  "Resoluções CNJ 230/2021, 351/2020 e 400/2021",
];

/* ---------- ABDI ---------- */

const ABDI_GERAIS = [
  { n: "Língua Portuguesa", q: 8, t: PT_TOPICS },
  { n: "Raciocínio Lógico", q: 6, t: RL_LOGICA },
  { n: "Noções de Informática", q: 6, t: INFO_ABDI },
];

const ABDI_INST = [
  { n: "Serviços Sociais Autônomos", q: 4, t: [
    "Conceito, natureza jurídica e finalidade (Lei 11.080/2004 art. 1º, com Lei 14.440/2022; Decreto 5.352/2005 arts. 1º e 2º)",
    "Direito privado, sem fins lucrativos, interesse coletivo e utilidade pública",
    "Autonomia administrativa e gestão de pessoal (Lei 11.080 art. 11 §§ 1º a 4º)",
    "Regime jurídico e relação com o Poder Público: contrato de gestão (Lei 11.080 arts. 8º a 12; Decreto 5.352 art. 10)",
    "Supervisão, fiscalização, controle e prestação de contas (Lei 11.080 arts. 8º, 9º, 14; Decreto 5.352 arts. 4º, 6º, 10)",
  ]},
  { n: "Lei e decreto de criação da ABDI; Estatuto", q: 4, t: [
    "Lei 11.080/2004 e alterações (Lei 14.440/2022)",
    "Decreto 5.352/2005 e alterações",
    "Estatuto Social: natureza, finalidade, princípios, competências",
    "Organização administrativa e governança",
    "Conselho Deliberativo, Conselho Fiscal e Diretoria-Executiva: composição e competências",
    "Patrimônio, receitas, contrato de gestão e prestação de contas",
  ]},
  { n: "Regulamentos de Licitações e Contratos e de Convênios", q: 8, t: [
    "Reg. de Licitações e Contratos: princípios e disposições gerais",
    "Modalidades, procedimentos, critérios de julgamento e habilitação",
    "Contratação direta: dispensa e inexigibilidade",
    "Formalização, execução, fiscalização, alteração e extinção dos contratos",
    "Sanções e responsabilidades contratuais",
    "Reg. de Convênios: disposições gerais, conceitos e modalidades",
    "Celebração: plano de trabalho, habilitação, contrapartidas",
    "Execução, acompanhamento, fiscalização e alterações",
    "Prestação de contas, responsabilidades e disposições finais",
  ]},
  { n: "Ética e conduta; Missão e atuação institucional", q: 4, t: [
    "Regulamento de Ética e Conduta (Res. CD 004/2022): objetivo, aplicabilidade, valores e princípios (arts. 1º a 3º)",
    "Direitos, deveres e vedações (arts. 4º a 6º)",
    "Conduta profissional: mídias sociais, confidencialidade, propriedade intelectual, recursos, doações e patrocínios (arts. 7º a 11)",
    "Conflito de interesses: atividades paralelas/políticas/sindicais/religiosas, relacionamentos, brindes, eventos, informação privilegiada (arts. 12 a 17)",
    "Descumprimento, medidas disciplinares, denúncias e gestão do regulamento (arts. 18 a 25)",
    "Missão, visão, valores e objetivos: Planejamento Estratégico 2024–2029 (Res. CD 008/2023)",
    "Atuação: desenvolvimento industrial, inovação, transformação digital, difusão tecnológica, competitividade, sustentabilidade (art. 1º Lei 11.080; art. 2º Decreto 5.352)",
  ]},
];

const ABDI_ESP = {
  "Administrativo": [
    { n: "Teoria e planejamento", t: [
      "Teorias da Administração e evolução do pensamento administrativo",
      "Funções administrativas: planejamento, organização, direção, controle",
      "Planejamento estratégico, tático e operacional",
      "Gestão estratégica: missão, visão, valores, análise de ambientes, indicadores, Balanced Scorecard",
    ]},
    { n: "Estrutura e pessoas", t: [
      "Estruturas organizacionais, departamentalização, centralização/descentralização",
      "Processo decisório; cultura e clima organizacional",
      "Gestão de pessoas: recrutamento, T&D, competências, desempenho, remuneração, QVT",
      "Comportamento organizacional: motivação, liderança, comunicação, equipes, conflitos",
    ]},
    { n: "Processos, qualidade e projetos", t: [
      "Gestão de processos: modelagem, análise, redesenho, indicadores",
      "Gestão da qualidade e melhoria contínua",
      "Gestão de projetos: ciclo de vida, metodologias tradicionais e ágeis",
    ]},
    { n: "Governança, riscos, materiais e finanças", t: [
      "Gestão de riscos e controles internos; governança, compliance, integridade, ética",
      "Administração de materiais, patrimônio, estoques, compras, cadeia de suprimentos",
      "Gestão de contratos",
      "Administração financeira: fluxo de caixa, capital de giro, investimentos, indicadores; orçamento empresarial",
      "Sustentabilidade e responsabilidade socioambiental; gestão do conhecimento, inovação e mudança",
      "Governança de estatais; Lei 13.303/2016",
      "TI: conceitos de sistemas, análise de sistemas, entrada/saída de dados, arquivos e controle",
    ]},
  ],
  "Comunicação e Marketing": [
    { n: "Fundamentos e planejamento", t: [
      "Teorias da comunicação; processos, elementos, modelos e funções",
      "Comunicação social, institucional, organizacional e pública",
      "Planejamento estratégico de comunicação; comunicação integrada",
      "Identidade, imagem, marca e reputação institucional",
    ]},
    { n: "Imprensa e redação", t: [
      "Assessoria de comunicação e de imprensa; relacionamento com imprensa e fontes",
      "Gêneros jornalísticos; redação: notícia, reportagem, entrevista, nota, release, artigo, texto institucional",
      "Edição e revisão de conteúdos",
    ]},
    { n: "Digital, conteúdo e produção", t: [
      "Comunicação interna e relacionamento com públicos internos",
      "Comunicação digital e produção de conteúdo; redes sociais: planejamento, publicação, monitoramento, métricas",
      "Conteúdo multimídia; audiovisual (foto, vídeo, áudio); comunicação visual (design, identidade visual, gráfica)",
      "Planejamento e organização de eventos",
    ]},
    { n: "Pesquisa, crise, ética e acessibilidade", t: [
      "Pesquisa de opinião e avaliação de resultados",
      "Gestão de crises e comunicação de risco",
      "Relacionamento com públicos de interesse e comunidades; comunicação científica, tecnológica e ambiental",
      "Ética e legislação; direito à informação, transparência e acesso à informação",
      "Proteção de dados aplicada à comunicação",
      "Acessibilidade, inclusão e linguagem simples",
    ]},
  ],
  "Contabilidade": [
    { n: "Contabilidade geral e demonstrações", t: [
      "Patrimônio, fatos contábeis, contas, escrituração, regime de competência, balancete, apuração do resultado",
      "Estrutura Conceitual para Relatório Financeiro",
      "Demonstrações: BP, DRE, DRA, DMPL, DFC, DVA, notas explicativas; apresentação e análise",
    ]},
    { n: "Ativos, passivos e normas", t: [
      "Disponibilidades, contas a receber, estoques; imobilizado e intangível; depreciação, amortização, exaustão",
      "Redução ao valor recuperável; provisões, passivos e ativos contingentes; arrendamentos",
      "Receitas: reconhecimento e mensuração; instrumentos financeiros (conceitos)",
      "Lei 6.404/1976; pronunciamentos do CPC",
    ]},
    { n: "Custos, análise e matemática financeira", t: [
      "Contabilidade de custos: terminologia, classificação, comportamento, métodos de custeio, decisão",
      "Análise das demonstrações: liquidez, estrutura de capital, rentabilidade, atividade; econômico-financeira",
      "Matemática financeira aplicada à Contabilidade",
    ]},
    { n: "Orçamento empresarial", t: [
      "Planejamento integrado; orçamento econômico e financeiro; revisões; cenários macroeconômicos",
      "Projeções de lucro e fluxo de caixa; operacional e de investimento",
      "Controle orçamentário, variações, orçamento base zero",
    ]},
    { n: "Tributária e SPED", t: [
      "IRPJ e CSLL; IRRF; ICMS; ISS; PIS/PASEP; COFINS; CIDE; participações governamentais; contribuição previdenciária",
      "EC 132/2023 e LC 214/2025 (reforma tributária)",
      "SPED contábil e fiscal: objetivos, obrigados, livros, plano de contas referencial, prazos, ECD",
    ]},
    { n: "Auditoria e ética", t: [
      "Auditoria contábil e controles internos",
      "Ética e legislação profissional",
    ]},
  ],
  "Desenvolvimento de TI": [
    { n: "Engenharia de software", t: [
      "Ciclo de vida e processos de desenvolvimento",
      "Engenharia de requisitos e UML",
      "Arquitetura, padrões de projeto e microsserviços",
      "Documentação, manutenção e evolução",
    ]},
    { n: "Programação e web", t: [
      "Lógica, algoritmos e estruturas de dados; programação orientada a objetos",
      "Java, PHP, JavaScript e Node.js",
      "HTML5, CSS3 e aplicações web responsivas",
    ]},
    { n: "Banco de dados", t: [
      "Modelo relacional, normalização, integridade referencial",
      "SQL: consultas, junções, subconsultas, manipulação",
      "Transações, índices e otimização",
    ]},
    { n: "Integração e APIs", t: [
      "Serviços web e REST; HTTP/HTTPS; JSON e XML",
      "Desenvolvimento, consumo, autenticação e segurança de APIs",
    ]},
    { n: "Ágil, DevOps, qualidade e segurança", t: [
      "Scrum e Kanban; histórias de usuário, backlog, critérios de aceitação",
      "Git/GitHub/GitLab; CI/CD; automação e implantação",
      "Testes unitários, funcionais, integração, regressão; depuração e revisão de código",
      "Desenvolvimento seguro, OWASP Top 10; autenticação, autorização, controle de acesso",
      "LGPD (Lei 13.709/2018)",
    ]},
    { n: "Sustentação e gestão de soluções", t: [
      "Manutenção, monitoramento e suporte; incidentes, problemas e mudanças; SLA",
      "Especificação técnica e homologação; acompanhamento de contratos, fornecedores e entregas",
    ]},
  ],
  "Gestão de Pessoas": [
    { n: "Gestão estratégica e T&D", t: [
      "Fundamentos, modelos e processos; planejamento estratégico e dimensionamento da força de trabalho",
      "Gestão por competências; indicadores e análise de dados em GP",
      "Recrutamento e seleção; integração; levantamento de necessidades de treinamento; educação corporativa; avaliação de capacitação",
    ]},
    { n: "Desempenho, carreira e remuneração", t: [
      "Avaliação de desempenho; gestão por resultados, metas e competências; feedback",
      "Planos de carreira, cargos e salários; remuneração, benefícios e reconhecimento",
    ]},
    { n: "Administração de pessoal e CLT", t: [
      "CLT: contrato, jornada, remuneração, férias, rescisão",
      "Admissão, movimentação e desligamento; folha, encargos trabalhistas e previdenciários",
      "Controle de frequência, banco de horas, benefícios; eSocial; acordos coletivos",
    ]},
    { n: "Cultura, QVT e processos", t: [
      "Cultura e clima; comunicação interna; motivação, liderança, conflitos",
      "Saúde, segurança e QVT; diversidade, inclusão, prevenção ao assédio e à discriminação",
      "Mapeamento e melhoria de processos de RH; indicadores (absenteísmo, rotatividade); sistemas; riscos e conformidade; LGPD",
    ]},
    { n: "Normas e políticas da ABDI", t: [
      "Plano de Carreira, Cargos e Salários da ABDI (2026)",
      "Acordo Coletivo de Trabalho da ABDI (2026–2028)",
      "Gestão de competências, desempenho e desenvolvimento; procedimentos de administração de pessoal e benefícios",
    ]},
  ],
  "Infraestrutura e Operação": [
    { n: "Infraestrutura de TI", t: [
      "Arquitetura e componentes; servidores, armazenamento, processamento",
      "Virtualização e contêineres; nuvem IaaS/PaaS/SaaS",
      "Planejamento de capacidade, disponibilidade e desempenho",
    ]},
    { n: "Sistemas operacionais e servidores", t: [
      "Windows Server e Linux: instalação, configuração, atualização",
      "Usuários, permissões e serviços; Active Directory, DNS, DHCP",
      "Automação: PowerShell e Shell",
    ]},
    { n: "Redes", t: [
      "Arquiteturas, topologias, protocolos; modelos OSI e TCP/IP",
      "IPv4/IPv6, roteamento, VLANs; LAN, WAN, VPN",
      "Switches, roteadores, firewalls, Wi-Fi; monitoramento e diagnóstico",
    ]},
    { n: "Segurança da informação", t: [
      "Princípios e políticas; controle de acesso e identidades",
      "Segurança de redes, servidores e nuvem",
      "Vulnerabilidades, atualizações e incidentes; criptografia, certificados, backup e recuperação",
      "LGPD (Lei 13.709/2018)",
    ]},
    { n: "Operação, monitoramento e continuidade", t: [
      "Monitoramento de disponibilidade, desempenho e capacidade",
      "Incidentes, problemas e mudanças; backup, restauração, recuperação de desastres",
      "Continuidade e planos de contingência; SLA",
    ]},
    { n: "Governança e gestão de serviços", t: [
      "Governança de TI; ITIL 4; COBIT 2019",
      "Ativos, configurações e licenciamento; riscos e indicadores",
      "Planejamento e acompanhamento de contratos e fornecedores",
    ]},
    { n: "Suporte e automação", t: [
      "Atendimento e suporte a usuários; diagnóstico e resolução de falhas",
      "Gerenciamento remoto, central de serviços; automação e gerenciamento de configurações",
      "DevOps e IaC; documentação técnica e melhoria contínua",
    ]},
  ],
  "Jurídico": [
    { n: "Direito Constitucional", t: [
      "CF/88: princípios fundamentais, direitos e garantias fundamentais",
      "Organização do Estado e repartição de competências",
      "Administração Pública: princípios e regime jurídico",
      "Ordem econômica e financeira; atuação do Estado na economia",
      "Controle de constitucionalidade",
    ]},
    { n: "Direito Administrativo", t: [
      "Administração direta e indireta, paraestatais e Serviços Sociais Autônomos",
      "Atos e poderes administrativos",
      "Controle da Administração e Tribunais de Contas; responsabilidade civil do Estado",
      "Lei 9.784/1999 (processo administrativo); Lei 8.429/1992 (improbidade); Lei 12.527/2011 (LAI)",
      "Lei 12.846/2013 e Decreto 11.129/2022 (responsabilização de pessoas jurídicas)",
    ]},
    { n: "Licitações, contratos e convênios", t: [
      "Princípios e procedimentos; Regulamento de Licitações e Contratos da ABDI",
      "Contratação direta: dispensa e inexigibilidade",
      "Formalização, execução, fiscalização, alteração e extinção",
      "Regulamento de Convênios da ABDI; acordos de cooperação técnica e parcerias",
    ]},
    { n: "Civil e contratual", t: [
      "LINDB (Decreto-Lei 4.657/1942)",
      "Pessoas jurídicas; fatos e negócios jurídicos; prescrição e decadência",
      "Obrigações; contratos (formação a extinção); responsabilidade civil",
    ]},
    { n: "Processual civil e contencioso", t: [
      "CPC (Lei 13.105/2015): princípios, jurisdição, ação, competência",
      "Sujeitos e atos processuais; conhecimento, provas, tutelas provisórias",
      "Sentença, coisa julgada, cumprimento e execução; recursos e ações autônomas",
      "Conciliação, mediação e arbitragem (Lei 9.307/1996)",
    ]},
    { n: "Direito do Trabalho", t: [
      "CLT: contrato individual, jornada, remuneração, férias, rescisão",
      "Direitos e deveres; negociação coletiva e acordos coletivos",
      "Responsabilidade trabalhista e relações de trabalho nos SSA",
    ]},
    { n: "LGPD", t: [
      "Fundamentos, princípios e âmbito de aplicação",
      "Requisitos, bases legais e direitos dos titulares",
      "Agentes de tratamento, responsabilidades e segurança",
      "ANPD: competências, fiscalização e sanções",
    ]},
    { n: "Direito Ambiental", t: [
      "CF/88 arts. 170 VI e 225; princípios (prevenção, precaução, poluidor-pagador)",
      "Lei 6.938/1981 (PNMA, SISNAMA); licenciamento ambiental (LC 140/2011)",
      "Responsabilidade ambiental: Lei 9.605/1998 e Decreto 6.514/2008",
      "Resíduos sólidos (Lei 12.305/2010); economia circular, descarbonização, transição energética",
    ]},
  ],
  "Produtividade Industrial": [
    { n: "Fundamentos de produtividade", t: [
      "Produtividade, eficiência, eficácia, competitividade; produtividade do trabalho e total dos fatores",
      "Indicadores de desempenho industrial; diagnóstico de processos produtivos",
    ]},
    { n: "Processos produtivos", t: [
      "Planejamento e controle da produção (PCP); mapeamento e otimização de processos",
      "Manufatura enxuta (Lean): princípios, ferramentas, desperdícios",
      "Estoques, capacidade e fluxos; melhoria contínua: Kaizen, PDCA, 5S",
    ]},
    { n: "Qualidade e eficiência operacional", t: [
      "Gestão da qualidade e ISO 9001; ferramentas da qualidade e CEP",
      "Indicadores de qualidade, custos, produtividade; manutenção e OEE",
      "Redução de perdas, retrabalho e custos",
    ]},
    { n: "Transformação digital e Indústria 4.0", t: [
      "Tecnologias habilitadoras; automação, IIoT, sistemas ciberfísicos",
      "IA, análise de dados e Big Data na produção; ERP, MES, sensores",
      "Maturidade digital e adoção de tecnologias",
    ]},
    { n: "Inovação e competitividade", t: [
      "Gestão da inovação; difusão e transferência de tecnologia",
      "Projetos de modernização produtiva; cadeias produtivas e APLs",
      "Avaliação técnica e econômica de investimentos em produtividade",
    ]},
    { n: "Sustentabilidade", t: [
      "Produção mais limpa e ecoeficiência; eficiência energética",
      "Economia circular e resíduos industriais; indicadores ambientais; descarbonização",
    ]},
    { n: "Políticas e programas (muito provável de cair: é o negócio da ABDI)", t: [
      "Política industrial brasileira e Nova Indústria Brasil (NIB)",
      "Programa Brasil Mais Produtivo: objetivos, metodologia, instrumentos",
      "Atuação da ABDI em produtividade, inovação e transformação digital",
      "Diagnóstico de maturidade produtiva e digital; monitoramento e indicadores de impacto",
    ]},
  ],
  "Analista de Dados": [
    { n: "Fundamentos de análise de dados", t: [
      "Análise de dados, ciência de dados e BI; tipos, fontes e estruturas",
      "Coleta, tratamento, limpeza, transformação; análise exploratória; indicadores",
    ]},
    { n: "Estatística computacional", t: [
      "Estatística descritiva e exploratória",
      "Distribuições, amostragem, outliers, dados ausentes",
      "Correlação, regressão, séries temporais",
    ]},
    { n: "Banco de dados e modelagem", t: [
      "Relacionais e NoSQL; modelagem conceitual, lógica e física; normalização e qualidade",
      "SQL: consultas, junções, subconsultas, agregações",
      "Data Warehouse, Data Mart e modelagem dimensional",
    ]},
    { n: "BI e visualização", t: [
      "Fundamentos de BI",
      "Power BI: modelagem, Power Query, DAX, dashboards",
      "Relatórios, gráficos, indicadores; visualização e comunicação de resultados",
    ]},
    { n: "Programação e engenharia de dados", t: [
      "Python para dados: Pandas, NumPy, arquivos",
      "ETL/ELT; integração de sistemas e consumo de APIs",
      "Big Data: Hadoop e Spark; pipelines com Apache Airflow",
    ]},
    { n: "IA e análise preditiva", t: [
      "Fundamentos de IA e Machine Learning; supervisionado e não supervisionado",
      "Classificação, regressão e agrupamento; treino, validação e avaliação de modelos",
      "Aplicações de IA à tomada de decisão",
    ]},
    { n: "Governança, qualidade e segurança de dados", t: [
      "Governança: princípios, políticas, papéis; qualidade, integridade, rastreabilidade",
      "Metadados, catalogação e integração de fontes; segurança e controle de acesso",
      "LGPD (Lei 13.709/2018)",
    ]},
  ],
};

/* ---------- TJPB ---------- */

const TJPB_GERAIS = {
  jud: [
    { n: "Língua Portuguesa (inclui Redação Oficial)", q: 10, t: PT_TOPICS.concat(["Redação Oficial"]) },
    { n: "Ética e Gestão no Serviço Público", q: 5, t: ETICA_TJPB },
    { n: "Noções de Informática e Proteção de Dados", q: 5, t: INFO_TJPB },
  ],
  cont: [
    { n: "Língua Portuguesa (inclui Redação Oficial)", q: 10, t: PT_TOPICS.concat(["Redação Oficial"]) },
    { n: "Raciocínio Lógico", q: 5, t: RL_LOGICA },
    { n: "Noções de Informática e Proteção de Dados", q: 5, t: INFO_TJPB },
  ],
  ti: [
    { n: "Língua Portuguesa (inclui Redação Oficial)", q: 10, t: PT_TOPICS.concat(["Redação Oficial"]) },
    { n: "Raciocínio Lógico-Matemático", q: 10, t: RLM_TI },
  ],
};

const TI_COMUM = { n: "Fundamentos de TI (comum a TODAS as especialidades de TI)", t: [
  "Arquitetura de computadores; sistemas operacionais; redes e TCP/IP; bancos de dados; computação em nuvem",
  "Engenharia de software: ciclo de vida, requisitos, arquitetura e integração, Scrum e Kanban, qualidade e testes",
  "Segurança: CID, controle de acesso, riscos e incidentes, continuidade, LGPD, ISO 27001/27002/27005",
  "Governança e gestão: COBIT 2019, ITIL 4, planejamento estratégico, projetos/processos/serviços, indicadores, contratações de TIC",
  "Dados e IA: modelagem e governança de dados, SQL, BI, fundamentos de IA, ML e IA generativa",
  "Transformação digital no Judiciário: governo digital, automação, interoperabilidade, PJe, PDPJ-Br, acessibilidade digital",
  "Normas de TIC: Res. CNJ 370/2021, 396/2021, 468/2022, 615/2025 (com alterações)",
  "MoReq-Jus; gestão documental arquivística digital (metadados, ciclo de vida, preservação, RDC-Arq); Res. CNJ 522/2023",
  "PDTI do TJPB 2024–2026",
]};

const TJPB_ESP = {
  "Judiciária (Direito)": [
    { n: "Direito Constitucional", t: [
      "Constituição: conceito e classificações; princípios fundamentais",
      "Direitos e garantias: individuais e coletivos, sociais, nacionalidade, direitos políticos",
      "Organização do Estado: federação e repartição de competências",
      "Poder Legislativo (processo legislativo e fiscalização) e Executivo",
      "Poder Judiciário: organização, competências, controle administrativo (CNJ), garantias da magistratura",
      "Funções essenciais: Ministério Público, Advocacia Pública, Defensoria",
    ]},
    { n: "Direito Administrativo", t: [
      "Administração Pública: organização e princípios; direta, indireta, paraestatais, terceiro setor",
      "Atos administrativos (requisitos, atributos, invalidação); poderes; discricionariedade",
      "Agentes públicos: regime, direitos, deveres, responsabilidade, processo disciplinar",
      "Licitações, contratos e parcerias (Lei 14.133/2021)",
      "Serviços públicos, regulação, intervenção na propriedade e desapropriação",
      "Controle da Administração; MS, ação civil pública e ação popular",
      "Responsabilidade civil do Estado; improbidade (Lei 8.429/1992); bens públicos",
      "Lei 9.784/1999 (processo administrativo federal)",
    ]},
    { n: "Direito Civil e do Consumidor", t: [
      "LINDB",
      "Código Civil – Parte Geral: pessoas, bens, negócios jurídicos, ilícitos, prescrição e decadência",
      "Obrigações; contratos (inclui locação); responsabilidade civil",
      "Direitos reais; família; sucessões",
      "Temas contemporâneos: dados e contratos eletrônicos, função social, regularização fundiária",
      "CDC (Lei 8.078/1990): direitos básicos, fato e vício, práticas comerciais, cláusulas abusivas, superendividamento, defesa em juízo",
      "Leis 8.245/1991 (Inquilinato), 8.009/1990 (bem de família), 12.965/2014 (Marco Civil), 13.709/2018 (LGPD)",
    ]},
    { n: "Direito Processual Civil", t: [
      "CPC/2015: princípios, normas processuais, cooperação; jurisdição, ação e competência",
      "Processo de conhecimento: petição inicial, resposta do réu, saneamento, audiências e autocomposição",
      "Provas: teoria geral, ônus, standards, provas em espécie, prova ilícita e tecnológica",
      "Tutelas provisórias (urgência e evidência); sentença e coisa julgada; preclusão",
      "Cumprimento de sentença e execução (inclui Fazenda Pública e alimentos)",
      "Recursos e processos nos tribunais; ação rescisória; precedentes (IRDR, IAC, repetitivos)",
      "Processo coletivo; MS; processo estrutural; sujeitos do processo; litisconsórcio e terceiros",
      "Procedimentos especiais; juizados; arbitragem",
      "Leis 7.347/1985 (ACP), 8.078/1990 (CDC), 4.717/1965 (Ação Popular)",
    ]},
    { n: "Direito Penal", t: [
      "Parte Geral: princípios, lei penal, teoria do crime, dolo/culpa/erro, iter criminis, concurso de pessoas",
      "Penas: espécies, dosimetria, regimes, restritivas, multa, medidas de segurança, concurso de crimes",
      "Suspensão condicional, livramento, efeitos da condenação, extinção da punibilidade",
      "Parte Especial: pessoa, patrimônio, dignidade sexual, fé pública, Administração Pública, etc.",
      "Atuação do Judiciário na lei penal e execução penal; garantias; grupos vulneráveis",
      "Legislação especial extensa: LEP, Drogas, Maria da Penha, ECA, Idoso, Pessoa com Deficiência, Hediondos, Tortura, Abuso de Autoridade, Org. Criminosas, Lavagem, Interceptação, Desarmamento, Ambientais, CTB, Crimes Informáticos, Henry Borel, Pacote Anticrime…",
    ]},
    { n: "Direito Processual Penal", t: [
      "CPP: fundamentos, princípios, sistemas processuais, lei processual no tempo e espaço",
      "Investigação: inquérito, TCO, MP investigador, ANPP, direitos do investigado",
      "Ação penal; denúncia e queixa; absolvição sumária; emendatio e mutatio libelli; competência e foro",
      "Procedimentos (comum, sumário, sumaríssimo, júri); resposta à acusação; atos e comunicação; revelia",
      "Prova: teoria geral, cadeia de custódia, provas digitais, prova ilícita, interceptação",
      "Prisões e cautelares; liberdade provisória e fiança; audiência de custódia; medidas reais",
      "Nulidades; recursos e ações autônomas (HC, revisão criminal, MS, reclamação)",
      "Execução penal; justiça restaurativa; violência doméstica; vítimas e grupos vulneráveis",
      "Leis 9.099/1995, 10.259/2001, 11.343/2006, 11.340/2006, 12.850/2013, 9.613/1998, 13.431/2017, 13.964/2019, 14.245/2021, 14.344/2022, 9.807/1999",
    ]},
    { n: "Direitos Humanos e Tutela Coletiva", t: [
      "Teoria geral: fontes, princípios, dimensões, obrigações estatais; solução de conflitos entre direitos",
      "Proteção internacional: sistemas ONU e interamericano; responsabilidade internacional; jurisprudência",
      "Ordenamento brasileiro: incorporação e hierarquia dos tratados; controle de convencionalidade",
      "Dever de investigar e punir; acesso à justiça; proteção de vítimas e testemunhas (Lei 9.807/1999)",
      "Igualdade e não discriminação: racismo (Lei 14.532/2023), ECA, Estatuto do Idoso",
      "Contextos específicos: sistema prisional (LEP), socioambientais (Lei 6.938/1981, Decreto 6.040/2007), violência de gênero, pessoa com deficiência",
      "Tutela coletiva: ação civil pública (Lei 7.347/1985), políticas públicas, mínimo existencial",
    ]},
  ],
  "Contabilidade": [
    { n: "Contabilidade Geral", t: [
      "Governança e estrutura das sociedades; princípios e práticas de contabilidade societária",
      "Estrutura Conceitual (CPC 00 R2)",
      "Demonstrações: BP, DRE, DRA, DMPL, DLPAc, DVA, DFC (direto e indireto), notas explicativas",
      "Ativos: caixa, contas a receber, estoques, despesas antecipadas, ARLP e AVP, imobilizado, depreciação",
      "Passivos: obrigações, empréstimos e debêntures, provisões e contingências (CPC 25)",
      "Patrimônio líquido: capital, reservas, AAP, tesouraria, dividendos, JCP",
      "Partes relacionadas; consolidação; correção integral; análise (endividamento, estrutura, vertical e horizontal)",
      "Lei 6.404/1976; CPC 46 (valor justo)",
    ]},
    { n: "Contabilidade Pública", t: [
      "Conceito, objeto, campo de aplicação; Lei 10.180/2001; regime contábil",
      "Patrimônio público; variações patrimoniais (qualitativas e quantitativas); resultado patrimonial",
      "Mensuração de ativos (imobilizado, intangível, reavaliação, impairment) e passivos (provisões, contingentes)",
      "Sistema de custos no setor público; plano de contas aplicado",
      "Demonstrações: BO, BF, BP, DVP, DFC, DMPL, notas; consolidação",
      "NBC TSP, MCASP, MDF, LRF (LC 101/2000)",
      "SIAFIC, Sadipem, SisPreq",
    ]},
    { n: "Administração Financeira e Orçamentária", t: [
      "Orçamento público: conceito, princípios, técnicas, ciclo e processo",
      "PPA, LDO, LOA; orçamento na CF/88; fiscalização",
      "Classificações orçamentárias; créditos adicionais",
      "Execução orçamentária e financeira; programação; descentralização; alterações",
      "Receita pública: estágios, fontes, dívida ativa; despesa pública: estágios, restos a pagar, DEA, dívida flutuante e fundada, suprimento de fundos",
      "Responsabilidade fiscal; Lei 4.320/1964; LC 101/2000",
    ]},
    { n: "Economia", t: [
      "Microeconomia: oferta e demanda, elasticidade, estruturas de mercado",
      "Macroeconomia: PIB, inflação, desemprego, política fiscal e monetária",
      "Economia do setor público: papel do Estado, equilíbrio fiscal, dívida pública",
    ]},
    { n: "Matemática Financeira e Estatística", t: [
      "Juros simples e compostos; descontos; VP e VF; séries de pagamentos",
      "Estatística descritiva: média, mediana, moda, variância, desvio padrão; interpretação de dados",
    ]},
    { n: "Controle, Auditoria e Governança", t: [
      "Controle interno: princípios, estrutura, COSO, avaliação",
      "Auditoria governamental: conformidade e operacional; planejamento, riscos, testes, amostragem, evidências, papéis de trabalho, relatórios",
      "Instrumentos de fiscalização: auditoria, inspeção, monitoramento, acompanhamento",
      "Governança pública; gestão de riscos; Normas Globais de Auditoria Interna (IIA)",
      "Lei 4.320/1964; LC 101/2000",
    ]},
  ],
  "TI – Gestão de Governança de TI": [
    TI_COMUM,
    { n: "Planejamento estratégico de TIC", t: [
      "PDTIC: elaboração, revisão, acompanhamento e desdobramento",
      "Plano de Contratações Anual (PCA) de TI; alinhamento estratégico",
      "ENTIC-JUD/CNJ e indicadores nacionais",
    ]},
    { n: "Contratações públicas de soluções de TIC", t: [
      "Lei 14.133/2021 aplicada a TIC; Res. CNJ 347/2020 (governança das contratações)",
      "Res. CNJ 468/2022: fluxo de compras; DOD/DFD, ETP, TR, matriz de riscos",
      "Res. CNJ 616/2025 e LC 182/2021 (startups): soluções inovadoras e testes",
    ]},
    { n: "Fornecedores e contratos de TIC", t: [
      "SLA, SLO e OLA: definição e monitoramento",
      "Métricas de qualidade e indicadores de desempenho de fornecedores",
    ]},
    { n: "Governança e gerenciamento de serviços", t: [
      "COBIT 2019: guia de implementação, fatores de design, cascata de metas, objetivos de controle",
      "ITIL 4: portfólio e catálogo, nível de serviço, ITAM, CMDB",
      "Melhoria contínua e conformidade normativa no setor público",
    ]},
    { n: "Infra, redes e segurança aplicadas à gestão", t: [
      "Data centers: servidores, SAN/NAS/Object Storage/NVMe-oF, virtualização",
      "TCP/IP, IPv4/IPv6, LAN/WAN/SD-WAN, VLAN, OSPF e BGP",
      "ISO 27005, 27001/27002; controle de acesso (RBAC, MFA, SSO); criptografia (AES, RSA, curvas elípticas); BIA e continuidade",
    ]},
    { n: "Sistemas, arquitetura, nuvem e inovação", t: [
      "SDLC, Scrum/Kanban na fiscalização de fábrica de software; SOA, REST/SOAP, microsserviços",
      "Métricas de qualidade e dimensionamento (APF/IFPUG, estimativa ágil)",
      "IaaS/PaaS/SaaS; multi-cloud; CSPM; transformação digital; IA e dados na decisão",
    ]},
  ],
  "TI – Segurança da Informação": [
    TI_COMUM,
    { n: "Governança, normas e conformidade", t: [
      "CIA + autenticidade, irretratabilidade, privacidade; políticas e normas; classificação da informação",
      "ISO 27005, 27001, 27002, 27701; auditoria e indicadores; NIST CSF e CIS Controls",
      "ENSEC-PJ (Res. CNJ 396/2021), Portaria CNJ 162/2021; PDPJ-Br (Res. CNJ 335/2020)",
    ]},
    { n: "Privacidade e legislação", t: [
      "LGPD: princípios, dados sensíveis, bases legais, direitos, controles técnicos",
      "Anonimização, pseudonimização, minimização, retenção e descarte",
      "Marco Civil da Internet; LAI (Lei 12.527/2011)",
    ]},
    { n: "Identidades e acesso", t: [
      "Ciclo de vida de usuários; revisão de acessos; menor privilégio, segregação, RBAC",
      "IAM e PAM; MFA, SSO, federação",
      "SAML 2.0, OAuth 2.0, OpenID Connect, JWT",
    ]},
    { n: "Redes e infraestrutura", t: [
      "Segmentação, DMZ, defesa em profundidade; NAC (802.1X); Zero Trust (ZTNA, microssegmentação)",
      "NGFW, IDS/IPS, WAF, VPN (IPSec/SSL), DNS/DNSSEC, anti-DoS/DDoS",
      "Hardening, CMDB, patches; segurança Linux/Windows (SELinux/AppArmor, GPO); malware, ransomware, APT",
    ]},
    { n: "Aplicações e desenvolvimento seguro", t: [
      "OWASP Top 10; segurança de web/APIs; injeção, XSS, CSRF, controle de acesso",
      "Modelagem de ameaças; SAST/DAST/IAST; DevSecOps; Git, CI/CD",
      "Segurança de contêineres e arquiteturas modernas (RBAC, network policies, admission controllers)",
    ]},
    { n: "Vulnerabilidades, SecOps e incidentes", t: [
      "Gestão de vulnerabilidades, CVE/CVSS, pentest, reteste, bug bounty",
      "Observabilidade (Zabbix, Prometheus, Grafana); SRE (SLI/SLO); logs (ELK/OpenSearch); SIEM/SOC; EDR/NDR/XDR; MITRE ATT&CK; SOAR; MTTD/MTTR",
      "Ciclo de resposta a incidentes; ransomware (backup imutável, air gap); evidências, cadeia de custódia, forense",
    ]},
    { n: "Criptografia, nuvem, backup e conscientização", t: [
      "Simétrica/assimétrica; hash SHA-2/3 e HMAC; PKI, ICP-Brasil, assinatura digital; TLS; gestão de chaves; DLP",
      "Responsabilidade compartilhada, CSPM; backup e DRP; BIA, RTO e RPO",
      "Engenharia social; segurança de IA: prompt injection, jailbreak, ataques adversariais; governança algorítmica",
    ]},
  ],
  "TI – Ciência e Análise de Dados": [
    TI_COMUM,
    { n: "Engenharia de dados", t: [
      "Data Warehouse, Data Lake e Lakehouse",
      "ETL e ELT; orquestração de pipelines; feature engineering",
    ]},
    { n: "SQL e manipulação de dados", t: [
      "PostgreSQL, Oracle, MySQL/MariaDB, SQL Server",
      "Subconsultas, GROUP BY/HAVING, window functions (ROW_NUMBER, RANK, LAG/LEAD, OVER/PARTITION BY)",
      "Query tuning: planos, índices, estatísticas, particionamento",
      "Python (Pandas, NumPy); noções de R; NoSQL (chave-valor, documentos, colunar, grafos)",
    ]},
    { n: "Estatística e modelos analíticos", t: [
      "Descritiva: tendência central e dispersão; probabilidade e distribuições (binomial, Poisson, normal)",
      "Inferência: intervalos de confiança, testes de hipóteses (valor-p, erros tipo I e II); correlação",
      "ML supervisionado: regressão, árvores, SVM, Random Forest; modelos preditivos no Judiciário",
    ]},
    { n: "BI e jurimetria", t: [
      "Dashboards e relatórios: Power BI, Tableau; storytelling com dados",
      "Estudos jurimétricos; métricas judiciais: Taxa de Congestionamento, IPC-Jus, Metas Estratégicas",
    ]},
    { n: "Qualidade, governança e DataJud", t: [
      "Qualidade de dados: saneamento, higienização, validação, cruzamento",
      "Governança de dados: DAMA-DMBOK, metadados, ciclo de vida",
      "DataJud (Res. CNJ 331/2020): regras, payloads, remessa contínua",
    ]},
    { n: "Inteligência Artificial", t: [
      "ML não supervisionado: K-Means e hierárquico",
      "PLN: tokenização, stemming, lematização, stop words; TF-IDF e embeddings",
      "Governança algorítmica; normas do CNJ sobre IA: vedações e limites em atos decisórios",
    ]},
  ],
  "TI – Inteligência Artificial": [
    TI_COMUM,
    { n: "Engenharia de dados e SQL", t: [
      "Data Warehouse/Lake/Lakehouse; ETL/ELT; orquestração; feature engineering",
      "SQL avançado (window functions, tuning); Pandas/NumPy; R; NoSQL",
    ]},
    { n: "Algoritmos e programação", t: [
      "Big-O; listas, pilhas, filas, árvores, hash; busca e ordenação",
      "POO; SOLID; Java (Collections, Streams, records, sealed, virtual threads); Jakarta EE, Spring, JPA",
      "JavaScript/TypeScript, Node.js; Angular e React",
    ]},
    { n: "Estatística e ML supervisionado", t: [
      "Descritiva, probabilidade, distribuições; inferência e testes de hipóteses; correlação",
      "Regressão, árvores, SVM, Random Forest; modelos preditivos no Judiciário",
    ]},
    { n: "BI, jurimetria, qualidade e DataJud", t: [
      "Storytelling, jurimetria, Taxa de Congestionamento, IPC-Jus, Metas",
      "Qualidade e governança de dados (DAMA-DMBOK); DataJud (Res. CNJ 331/2020)",
    ]},
    { n: "IA, NLP e LLMs", t: [
      "K-Means e hierárquico; pré-processamento de texto; TF-IDF e embeddings",
      "Transformer e LLMs; engenharia de prompt; APIs (OpenAI, Hugging Face); LangChain",
      "RAG; busca vetorial: embeddings, similaridade, índice vetorial",
      "Governança algorítmica; normas do CNJ sobre IA",
    ]},
    { n: "Segurança de aplicações de IA", t: [
      "Prompt injection, jailbreak, ataques adversariais",
      "Validação e sanitização da saída de LLM; vazamento de dados e contexto; retenção zero",
    ]},
    { n: "Ciclo de ML e avaliação", t: [
      "Treino/validação/teste; validação cruzada; overfitting/underfitting; regularização; hiperparâmetros",
      "Matriz de confusão, acurácia, precisão, recall, F1, ROC/AUC; MAE, RMSE, R²",
    ]},
    { n: "Deep learning, MLOps e equidade", t: [
      "MLP, funções de ativação, backpropagation, CNN, RNN e LSTM",
      "MLOps: versionamento, deploy, monitoramento, data drift e concept drift",
      "Viés e fairness; explicabilidade (SHAP, LIME)",
    ]},
  ],
  "TI – Desenvolvimento de Sistemas": [
    TI_COMUM,
    { n: "Engenharia de software e ágil", t: [
      "SDLC; Scrum, Kanban, Lean; SAFe",
      "Requisitos: elicitação, funcionais/não funcionais, histórias de usuário, backlog; APF/IFPUG; estimativa ágil",
      "Desenvolvimento orientado a especificações (SDD) e engenharia assistida por IA",
    ]},
    { n: "System design", t: [
      "Trade-offs: latência vs throughput; CAP, PACELC; BASE vs ACID",
      "Comunicação síncrona (REST, gRPC) e assíncrona (mensageria, WebSockets)",
      "Escalabilidade; alta disponibilidade (failover, clustering, balanceamento, replicação, sharding)",
      "Cache em camadas (CDN, Redis); circuit breaker, graceful degradation; NGINX e HAProxy",
    ]},
    { n: "Arquitetura e padrões", t: [
      "Padrões GoF; IoC e injeção de dependência",
      "SOA, REST/SOAP; microsserviços, API gateway, service mesh, serverless",
      "Arquitetura orientada a eventos (Kafka, RabbitMQ); Clean Architecture; DDD",
      "Métricas de qualidade: cobertura, defeitos, MTTR, frequência de liberação",
    ]},
    { n: "Algoritmos e programação", t: [
      "Big-O; estruturas de dados; busca e ordenação; POO; SOLID",
      "Java moderno e frameworks (Jakarta EE, Spring Boot, JPA); JS/TS, Node.js; Angular e React",
      "Python (FastAPI, Django); Dart e Flutter (widgets, estado: Provider/BLoC/Riverpod, layout, navegação)",
    ]},
    { n: "Mobile", t: [
      "Ciclo de vida Android/iOS; persistência local (SQLite, Room, Hive/Isar, SharedPreferences)",
      "Segurança: armazenamento seguro, SSL pinning, engenharia reversa; TLS; consumo de APIs REST/JSON; push (FCM)",
    ]},
    { n: "Banco de dados e persistência", t: [
      "Modelo e álgebra relacional; normalização 1FN–3FN; SQL (DML, DDL, DCL, TCL)",
      "Subconsultas, agregações, views, triggers, stored procedures; query tuning",
      "SGBDs; NoSQL; bancos vetoriais e busca vetorial",
    ]},
    { n: "DevOps, IaC e nuvem", t: [
      "CI/CD (Jenkins, GitLab CI, GitHub Actions); Git (Gitflow, Trunk-Based, GitOps)",
      "Docker (imagens, Dockerfile, Compose, volumes, redes); Kubernetes (Pods, Deployments, Services, Ingress, ConfigMaps, Secrets)",
      "IaaS/PaaS/SaaS; Terraform (providers, módulos, state); observabilidade (Zabbix, Prometheus, Grafana, ELK); tracing e APM",
    ]},
    { n: "IA e segurança de software", t: [
      "PLN, TF-IDF, embeddings, Transformer/LLMs, engenharia de prompt, APIs de IA, LangChain, RAG",
      "Codificação segura, DevSecOps, OWASP Top 10; criptografia, PKI, ICP-Brasil; SAML/OAuth/OIDC/JWT; rate limiting",
      "Segurança de IA (prompt injection, jailbreak, saída de LLM, vazamento, retenção zero)",
      "Tipos de testes; TDD; SAST/DAST/IAST; SonarQube; contract e mutation testing",
    ]},
    { n: "Regulação do Judiciário, UI/UX e acessibilidade", t: [
      "PDPJ-Br (Res. CNJ 335/2020); MNI (Res. CNJ 91/2009) e MInG; LGPD; Marco Civil; governança algorítmica; normas do CNJ sobre IA",
      "Princípios de UI; user flows, wireframes, protótipos; design systems; responsivo e mobile-first",
      "eMAG; WCAG 2.1/2.2 (POUR; A, AA, AAA); HTML5 semântico, ARIA, leitores de tela",
    ]},
  ],
  "TI – Infraestrutura de TI": [
    TI_COMUM,
    { n: "Sistemas operacionais e automação", t: [
      "Linux (Red Hat, CentOS, Ubuntu Server): instalação, configuração, administração",
      "Windows Server: Admin Center, AD DS, DNS integrado, GPO, DFS, WSUS, Failover Cluster",
      "PowerShell (e Remoting); Shell Script (Bash); segurança de SO (SELinux/AppArmor, GPO, logs)",
    ]},
    { n: "Virtualização, contêineres e alta disponibilidade", t: [
      "VMware vSphere/vCenter: vMotion, Storage vMotion, DRS, HA, FT, vDS; Hyper-V (Failover Cluster, Live Migration)",
      "Hiperconvergência; Kubernetes (Pods, Deployments, Services, Ingress, ConfigMaps, Secrets); Rancher, OpenShift",
      "Microsserviços, API gateway, service mesh, serverless; segurança de contêineres e virtualização",
      "Alta disponibilidade: failover, clustering, balanceamento, replicação, sharding",
    ]},
    { n: "IaC e DevOps", t: [
      "Terraform: providers, módulos, state; Ansible: inventários, playbooks, roles",
      "Git e GitOps; CI/CD (Jenkins, GitLab CI, GitHub Actions); DevOps e SRE (SLI/SLO/error budget)",
    ]},
    { n: "Redes", t: [
      "TCP/IP, IPv4 e IPv6 (SLAAC, DHCPv6, NDP, ICMPv6, extension headers, RA Guard, SEND, Dual Stack, NAT64/DNS64)",
      "OSPF e BGP; LAN/WAN/SD-WAN; VLANs; balanceadores e proxies (NGINX, HAProxy)",
      "VPN IPSec/SSL; DHCP, HTTP/HTTPS, NTP; DNS e DNSSEC; segmentação, DMZ, defesa em profundidade",
    ]},
    { n: "Armazenamento, backup e nuvem", t: [
      "SAN, NAS, Object Storage, NVMe-oF; tolerância a falhas e replicação; backup/restore",
      "DRP; RPO e RTO; ransomware (backup imutável, air gap, testes de restauração)",
      "Nuvem pública (AWS e Azure): redes virtuais, instâncias, armazenamento; multi-cloud",
    ]},
    { n: "Observabilidade e banco de dados", t: [
      "Zabbix, Prometheus, Grafana; logs com ELK/OpenSearch",
      "Modelagem; SGBDs; administração; views, triggers, procedures, índices; SQL (joins, CTEs, views materializadas)",
      "ACID, isolamento, deadlocks; backup lógico/físico, PITR; replicação e HA; tuning; NoSQL, Redis, Elasticsearch; segurança e governança de dados (DAMA-DMBOK)",
    ]},
    { n: "Segurança da informação e conformidade", t: [
      "ISO 27005, 27001/27002, 27701; NIST CSF; CIS Controls; OWASP Top 10; ENSEC-PJ e Portaria CNJ 162/2021",
      "Vulnerabilidades (CVE, CVSS, CWE, CPE, SBOM); patches; CMDB; NGFW, IDS/IPS, WAF, WAAP, Anti-DDoS; NAC; Zero Trust; hardening",
      "Nuvem (CSPM, roles, policies); IAM: LDAP, AD, Kerberos, PAM, MFA, SSO, SAML/OAuth/OIDC/JWT",
      "Criptografia, hash, HMAC, TLS, PKI, ICP-Brasil, assinatura digital, chaves e secrets",
      "SIEM/SOC, EDR/NDR/XDR, IoCs, MITRE ATT&CK, SOAR; resposta a incidentes; LGPD (RIPD)",
    ]},
  ],
  "TI – Banco de Dados": [
    TI_COMUM,
    { n: "Arquitetura e conceitos de SGBD", t: [
      "Arquitetura de SGBD; modelo e álgebra relacional; modelos não relacionais",
      "OLTP x OLAP; PostgreSQL, Oracle, MySQL/MariaDB, SQL Server; Redis e cache distribuído",
    ]},
    { n: "Modelagem de dados", t: [
      "Conceitual, lógica e física; DER/MER; cardinalidade e mapeamento",
      "Normalização 1FN–3FN e FNBC; desnormalização",
      "Modelagem dimensional: fato e dimensão; Star, Snowflake, Galaxy",
    ]},
    { n: "Linguagem SQL", t: [
      "DDL, DML, DCL, TCL (ANSI)",
      "Joins (INNER, LEFT, RIGHT, FULL, CROSS); subconsultas correlacionadas; GROUP BY/HAVING",
      "Window functions: ROW_NUMBER, RANK, LAG/LEAD, OVER/PARTITION BY; views, triggers, procedures; CTEs",
    ]},
    { n: "Administração, desempenho e segurança", t: [
      "ACID; concorrência, isolamento, locks e deadlocks",
      "Backup lógico/físico, completo/incremental/diferencial; PITR; DRP; incidentes aplicados a BD",
      "Query tuning: planos, índices, estatísticas, particionamento",
      "Criptografia e mascaramento; menor privilégio, segregação, RBAC; LGPD; DAMA-DMBOK",
    ]},
    { n: "Data Warehouse e Big Data", t: [
      "ETL/ELT; operações OLAP (drill-down, roll-up, slice, dice, pivot)",
      "DW, Data Lake e Lakehouse; Hadoop (HDFS, MapReduce); Apache Spark",
    ]},
    { n: "NoSQL e ciência de dados", t: [
      "Chave-valor, documentos (MongoDB), colunares, grafos; CAP, PACELC, BASE vs ACID",
      "Estatística descritiva e inferencial; ML supervisionado e não supervisionado; Python (Pandas, NumPy); noções de R",
    ]},
  ],
};

/* ---------- Flashcards ---------- */

const CARDS = [
  /* ABDI */
  ["ABDI", "Estrutura da prova objetiva da ABDI?", "60 questões, 5 alternativas: 20 Gerais (PT 8, RL 6, Info 6) + 20 Institucionais + 20 Específicas do perfil."],
  ["ABDI", "Valor por questão na ABDI?", "0,3 (Gerais e Institucionais) e 0,65 (Específicas). Total 25 pontos. Uma Específica vale ~2 questões das outras."],
  ["ABDI", "Como se é aprovado na objetiva da ABDI?", "Acertar pelo menos 50% (30 de 60) E não zerar nenhuma das 3 áreas."],
  ["ABDI", "Pontuação máxima total da ABDI?", "50 pontos: objetiva 25 + títulos/experiência 10 + entrevista 15."],
  ["ABDI", "Data e hora da prova da ABDI?", "20/12/2026, 13h30–17h, ONLINE, de casa. Link abre às 13h00; não entra depois das 13h30."],
  ["ABDI", "Equipamento exigido na prova da ABDI?", "Computador (desktop/notebook) com webcam, microfone e internet estável. Teste da plataforma obrigatório (comunicado em 03/12)."],
  ["ABDI", "Tempo mínimo de permanência na prova ABDI?", "2 horas. Sair antes = desistente/eliminado. Sair da visão da câmera = eliminado."],
  ["ABDI", "Tabela de títulos da ABDI?", "Especialização (≥360h) 1,0 (máx 2,0); Mestrado 1,5; Doutorado 2,5; Certificação por exame 0,5 (máx 2,0); Experiência 0,5/ano, até 4 anos (máx 2,0). Teto: 10."],
  ["ABDI", "Prazo de envio de títulos e currículo ABDI?", "03/12 16h até 22/12 16h. Currículo não enviado = ELIMINADO. Títulos não enviados = nota 0 (não elimina)."],
  ["ABDI", "Como é a entrevista da ABDI?", "Online, filmada, estruturada por competências, banca de 3. 15 pontos: Comunicação, Visão Sistêmica, Criatividade/Adaptabilidade, Foco em Resultados, Competências Técnicas (3 critérios de 1,0 cada)."],
  ["ABDI", "Quem é convocado para a entrevista ABDI em Desenvolvimento de TI?", "Soma de vagas imediatas (2) + cadastro reserva (16) = até 18 candidatos (11 AC, 5 Negros, 1 Indígena, 1 PcD)."],
  ["ABDI", "Desempate na ABDI?", "60+ anos → maior nota na entrevista → títulos → Específicos → Gerais → mais velho → sorteio."],
  ["ABDI", "Salário e regime da ABDI?", "R$ 16.034,70, 40h/semana, Brasília/DF, CLT (não é estatutário)."],
  ["ABDI", "Vagas de Desenvolvimento de TI na ABDI?", "2 imediatas (1 AC + 1 Negro) + 16 cadastro reserva (10 AC + 4 Negros + 1 Indígena + 1 PcD)."],
  ["ABDI", "Exigência de experiência na ABDI para Desenvolvimento de TI?", "Mínimo 6 meses em atividade compatível com o perfil (comprovada na contratação)."],
  ["ABDI", "Validade da seleção ABDI?", "2 anos a partir da homologação, prorrogável por mais 2."],
  /* TJPB */
  ["TJPB", "Data, horário e local da prova do TJPB?", "24/01/2027, 13h–18h, João Pessoa/PB. Portões fecham 12h30; chegue 1h30 antes."],
  ["TJPB", "Estrutura da prova do TJPB?", "60 objetivas de 1 ponto (20 Gerais + 40 Específicas) + 1 discursiva de 40 pontos (estudo de caso, 30 linhas). Total 100."],
  ["TJPB", "Qual a nota mínima na objetiva do TJPB?", "Ampla: 60% = 36 pontos. Cotistas (PcD, negros, indígenas, quilombolas): 20% a menos = 28,8 pontos."],
  ["TJPB", "Nota mínima na discursiva do TJPB?", "Ampla: 60% de 40 = 24 pontos. Cotistas: 20% a menos = 19,2 pontos."],
  ["TJPB", "Quantas discursivas o TJPB corrige em TI – Desenvolvimento de Sistemas?", "Ampla concorrência: até a 100ª posição (incluindo empatados). Cotistas aprovados na objetiva (≥ 28,8 pts): TODOS têm a discursiva corrigida."],
  ["TJPB", "Quando a discursiva do TJPB leva nota ZERO?", "Sem texto; tema diverso; fora do padrão estudo de caso; ilegível ou idioma errado; caneta que não seja azul/preta; plágio; qualquer marca de identificação; resposta técnica plenamente incorreta."],
  ["TJPB", "Quanto valem os Conhecimentos Específicos no TJPB?", "80 de 100 pontos (40 da objetiva + 40 da discursiva). Gerais valem só 20."],
  ["TJPB", "Remuneração e jornada TJPB?", "Vencimento R$ 7.526,14 + auxílio-alimentação R$ 2.200 + auxílio-saúde R$ 1.800 (indenizatórios). 30h semanais (corrigido de 40h pela 1ª retificação)."],
  ["TJPB", "Vagas TJPB para TI – Desenvolvimento de Sistemas?", "10 imediatas (6 AC + 1 PcD + 3 Negros) + cadastro reserva."],
  ["TJPB", "Desempate no TJPB?", "60+ anos → maior nota nos Específicos da objetiva → ter atuado como jurado → mais velho."],
  ["TJPB", "O que é proibido na prova TJPB?", "Celular, relógio de qualquer tipo, boné/chapéu, óculos escuros, lápis, lapiseira, borracha, corretivo, calculadora. Só caneta transparente azul/preta."],
  ["TJPB", "Quando posso sair e levar o caderno no TJPB?", "Fica no mínimo 2h. Só leva o caderno se sair nos últimos 30 min."],
  ["TJPB", "Documento aceito na prova do TJPB?", "Original, físico, com foto (RG, CNH, passaporte, CTPS, carteira de conselho…). Digital e cópia autenticada NÃO valem."],
  ["TJPB", "Mudou a experiência exigida para TI no TJPB?", "Sim. A 2ª retificação REMOVEU os 2 anos de experiência em todas as especialidades de TI: basta graduação ou pós em TI."],
  ["TJPB", "Validade do concurso TJPB?", "2 anos a partir da homologação, prorrogável por mais 2."],
];

/* ---------- Roteiros de áudio ---------- */

const AUDIO = [
  { id: "abdi", t: "ABDI – resumo em 1 minuto", s:
    "ABDI. Cargo: Analista de Produtividade e Inovação, perfil Desenvolvimento de T I, em Brasília, regime CLT, quarenta horas por semana, salário de dezesseis mil e trinta e quatro reais. " +
    "Para Desenvolvimento de T I são duas vagas imediatas e dezesseis de cadastro de reserva. " +
    "A prova objetiva é online, de casa, em vinte de dezembro, das treze e trinta às dezessete horas. Computador com webcam e microfone, e ficar no mínimo duas horas. " +
    "São sessenta questões: vinte gerais, vinte institucionais e vinte específicas do perfil. Para passar, acertar pelo menos trinta e não zerar nenhuma das três áreas. " +
    "Depois vêm a avaliação de títulos, até dez pontos, e a entrevista por competências, até quinze pontos. A nota total vai a cinquenta. " +
    "Envio de títulos e currículo de três a vinte e dois de dezembro, às dezesseis horas. Sem currículo, você é eliminado." },
  { id: "tjpb", t: "TJPB – resumo em 1 minuto", s:
    "TJPB. Concurso para Analista Judiciário, especialidade Desenvolvimento de Sistemas, dez vagas imediatas mais cadastro de reserva, banca FGV, provas em João Pessoa. Vencimento de sete mil quinhentos e vinte e seis reais, mais dois mil e duzentos de alimentação e mil e oitocentos de saúde. Trinta horas semanais. " +
    "Prova no dia vinte e quatro de janeiro de dois mil e vinte e sete, das treze às dezoito horas. Portões fecham às doze e trinta. " +
    "São sessenta questões objetivas de um ponto, sendo vinte gerais e quarenta específicas, mais uma discursiva de quarenta pontos, um estudo de caso de trinta linhas. " +
    "Para passar na objetiva na ampla concorrência, trinta e seis pontos; nas cotas, vinte e oito vírgula oito pontos. " +
    "Atenção: oitenta por cento da nota vem dos conhecimentos específicos. Na ampla, corrigem até a centésima posição; nas cotas, todos os aprovados na objetiva têm a discursiva corrigida." },
  { id: "regras", t: "Regras do dia da prova", s:
    "Regras do dia da prova. ABDI: computador, webcam e microfone ligados, documento original com foto na mão, ambiente silencioso, sem relógio, sem óculos escuros, sem lápis, sem borracha, sem protetor auricular. Não saia do campo da câmera. Fique pelo menos duas horas. " +
    "TJPB: documento físico original com foto, caneta transparente azul ou preta, chegue às onze e trinta, portões fecham às doze e trinta. Sem celular, sem relógio, sem boné, sem lápis, sem borracha. Fique no mínimo duas horas. O caderno só sai nos últimos trinta minutos. Rasura anula a questão. " +
    "Nas duas provas, nunca deixe questão em branco: o edital não prevê desconto por erro, só zero para marcação dupla ou ausente." },
];

window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['lgpd'] = {
  id: 'lgpd',
  name: 'LGPD na Prática e na Prova',
  npcs: [
    {
      name: 'Titular Atento',
      lines: [
        'Dado pessoal identifica ou torna identificável pessoa natural. CNPJ de empresa sem sócio identificado não é dado pessoal.',
        'Dado sensível (art. 5º, II): saúde, biometria, genética, religião, política, sindicato, raça ou vida sexual.',
        'Dado anonimizado sai da LGPD (art. 12), salvo se a reversão for possível com esforço razoável!',
        'Pseudoanonimizado (token/hash com chave) CONTINUA dentro da LGPD porque dá para reidentificar.'
      ]
    },
    {
      name: 'DPO Clara',
      lines: [
        'Controlador decide sobre o tratamento; Operador só executa em nome do controlador (art. 5º, VI e VII).',
        'Encarregado (DPO, art. 41) faz a ponte entre controlador, titulares e ANPD — e deve ter contato público no site!',
        'Consentimento é só UMA das 10 bases legais (art. 7º). Tribunal julgando processo usa exercício de direito e obrigação legal.',
        'No Poder Público (art. 26), transferir base pessoal a ente privado é vedado por regra, salvo exceções legais.'
      ]
    },
    {
      name: 'Auditoria Segura',
      lines: [
        'Privacy by Design (art. 46, §2º): segurança e privacidade nascem na arquitetura do sistema, não no remendo.',
        'RIPD (art. 38) descreve dados coletados, metodologia de segurança e mitigação de risco — exigível pela ANPD.',
        'Incidente com risco ou dano relevante exige comunicação à ANPD e ao titular em prazo razoável (art. 48).',
        'Sanções (art. 52, §3º): órgão público NÃO sofre multa simples nem diária da ANPD, mas sofre bloqueio e publicização!'
      ]
    }
  ],
  boss: {
    name: 'Des. Guardião da Privacidade',
    intro: 'Na LGPD, cada inciso derruba quem confunde regra do setor privado com Poder Público. Vamos testar!',
    questions: [
      {
        q: 'Um tribunal armazena logs com CPF usando criptografia simétrica reversível guardada no servidor de chaves da própria instituição. Segundo a LGPD (Lei nº 13.709/2018), esses dados são:',
        options: [
          'Anonimizados, ficando totalmente excluídos da aplicação da LGPD.',
          'Pseudoanonimizados, continuando sujeitos à LGPD por permitirem associação ao titular com informação adicional.',
          'Dados públicos irrestritos, pois possuem controle de acesso interno.',
          'Dados sensíveis por natureza, exigindo consentimento específico e destacado.',
          'Excluídos da LGPD se o servidor estiver hospedado em nuvem privada nacional.'
        ],
        answer: 1,
        explain: 'Art. 13, §4º e Art. 12: dado pseudoanonimizado mantém possibilidade de associação usando chave separada e continua sob a LGPD. Anonimizado é quando não permite reidentificação com meios técnicos razoáveis.'
      },
      {
        q: 'Sobre o Encarregado pelo Tratamento de Dados Pessoais (DPO) na LGPD, assinale a afirmativa correta:',
        options: [
          'Sua identidade e informações de contato devem ser divulgadas publicamente, de forma clara e objetiva.',
          'É o agente responsável por tomar as decisões estratégicas sobre a finalidade do tratamento.',
          'Só é obrigatório em empresas privadas com mais de 500 funcionários.',
          'Substitui o operador nos contratos de terceirização em nuvem.',
          'Pode aplicar multas administrativas diretamente aos servidores públicos.'
        ],
        answer: 0,
        explain: 'Art. 41, §1º: identidade e contato do encarregado devem ser divulgados publicamente (preferencialmente no site). Decidir finalidade é papel do controlador (B); órgão público também deve indicar encarregado (art. 23, III).'
      },
      {
        q: 'Uma pessoa jurídica de direito público comete infração grave à LGPD. Conforme o art. 52, §3º da Lei nº 13.709/2018, a ANPD NÃO poderá aplicar ao órgão público:',
        options: [
          'Advertência com prazo para adoção de medidas corretivas.',
          'Publicização da infração após devidamente apurada e confirmada.',
          'Bloqueio ou eliminação dos dados pessoais a que se refere a infração.',
          'Multa simples de até 2% do orçamento anual ou multa diária.',
          'Suspensão parcial do funcionamento do banco de dados por até 6 meses.'
        ],
        answer: 3,
        explain: 'Art. 52, §3º: entidades e órgãos públicos podem receber os incisos I, IV, V, VI, X, XI e XII, ficando FORA os incisos II (multa simples) e III (multa diária).'
      },
      {
        q: 'De acordo com o art. 20 da LGPD, quando uma decisão é tomada unicamente com base em tratamento automatizado de dados pessoais afetando interesses do titular, este tem direito a:',
        options: [
          'Receber indenização automática antes mesmo de comprovar dano.',
          'Solicitar revisão da decisão automatizada e informações claras sobre os critérios e procedimentos usados.',
          'Exigir a publicação integral do código-fonte proprietário do algoritmo em diário oficial.',
          'Impedir qualquer processamento eletrônico em órgãos judiciais.',
          'Transferir seus dados diretamente para outro tribunal.'
        ],
        answer: 1,
        explain: 'Art. 20, caput e §1º: garante o direito à revisão de decisões tomadas unicamente por tratamento automatizado e à explicação de critérios, observados os segredos comercial e industrial.'
      },
      {
        q: 'Assinale a alternativa que apresenta APENAS dados pessoais sensíveis conforme o rol taxativo do art. 5º, inciso II da LGPD:',
        options: [
          'CPF, endereço residencial e renda mensal.',
          'Filiação sindical, dado biométrico e convicção religiosa.',
          'Placa de veículo, dado genético e estado civil.',
          'E-mail funcional, origem racial e histórico escolar.',
          'Dado referente à saúde, CNPJ da empresa empregadora e telefone.'
        ],
        answer: 1,
        explain: 'Art. 5º, II: origem racial/étnica, convicção religiosa, opinião política, filiação a sindicato ou organização religiosa/filosófica/política, saúde, vida sexual, dado genético ou biométrico. CPF, renda e e-mail são dados pessoais comuns.'
      },
      {
        q: 'Um sistema judicial precisa integrar dados pessoais com uma empresa privada parceira. Segundo o art. 26, §1º da LGPD, a transferência pelo Poder Público a entidades privadas:',
        options: [
          'É livre, bastando termo de confidencialidade assinado entre os diretores.',
          'É vedada em regra, admitida em exceções como execução descentralizada de atividade pública ou previsão legal com comunicação à ANPD.',
          'Depende exclusivamente de pagamento de taxa administrativa ao titular.',
          'Só é permitida se os dados forem convertidos em arquivos CSV sem senha.',
          'É obrigatória sempre que houver solicitação comercial de startup.'
        ],
        answer: 1,
        explain: 'Art. 26, §1º e art. 27: é vedado ao Poder Público transferir dados a entidades privadas, salvo exceções legais (execução descentralizada, dados acessíveis publicamente, previsão legal ou prevenção à fraude/segurança), com regra de comunicação à ANPD.'
      },
      {
        q: 'Qual princípio do art. 6º da LGPD exige limitar o tratamento ao mínimo necessário para a realização de suas finalidades, sem coletar campos excessivos no formulário?',
        options: [
          'Livre acesso.',
          'Qualidade dos dados.',
          'Necessidade.',
          'Não discriminação.',
          'Adequação.'
        ],
        answer: 2,
        explain: 'Art. 6º, III (Necessidade): limitação do tratamento ao mínimo necessário, com dados pertinentes, proporcionais e não excessivos. Adequação (II) é compatibilidade com o contexto informado.'
      },
      {
        q: 'Em caso de incidente de segurança com vazamento de dados que possa acarretar risco ou dano relevante aos titulares, o art. 48 da LGPD determina que:',
        options: [
          'Apenas o operador comunique à polícia civil, dispensando aviso ao titular.',
          'O controlador comunique à ANPD e ao titular em prazo razoável.',
          'O encarregado apague imediatamente os logs de auditoria para evitar exposição.',
          'A comunicação ocorra somente se o sistema usar banco NoSQL.',
          'A notificação à ANPD seja feita apenas 180 dias após o encerramento do processo judicial.'
        ],
        answer: 1,
        explain: 'Art. 48: cabe ao CONTROLADOR comunicar à ANPD e ao titular a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante, em prazo razoável definido pela ANPD.'
      }
    ]
  },
  match: {
    title: 'Papéis, Dados e Princípios na LGPD',
    pairs: [
      ['Controlador (Art. 5º, VI)', 'Pessoa natural ou jurídica a quem competem as decisões sobre o tratamento'],
      ['Operador (Art. 5º, VII)', 'Realiza o tratamento em nome do controlador, seguindo suas instruções'],
      ['Encarregado / DPO (Art. 41)', 'Canal de comunicação entre controlador, titulares e a ANPD'],
      ['Necessidade (Art. 6º, III)', 'Limitar a coleta e o uso ao mínimo estritamente necessário à finalidade'],
      ['Pseudoanonimização (Art. 13, §4º)', 'Exige chave adicional mantida separada; continua sujeita à LGPD'],
      ['RIPD (Art. 38)', 'Relatório de Impacto com descrição de dados, salvaguardas e mitigação']
    ]
  },
  quick: [
    { q: 'Quem decide as finalidades do tratamento na LGPD?', options: ['Controlador', 'Operador', 'Encarregado', 'Titular'], answer: 0, explain: 'Art. 5º, VI: o controlador toma as decisões referentes ao tratamento.' },
    { q: 'Dado biométrico usado para autenticação é classificado como:', options: ['Público', 'Sensível', 'Anonimizado', 'Corporativo'], answer: 1, explain: 'Art. 5º, II: dado biométrico vinculado a pessoa natural é dado pessoal sensível.' },
    { q: 'Qual sanção da ANPD NÃO se aplica a órgãos públicos?', options: ['Advertência', 'Publicização', 'Multa simples', 'Bloqueio'], answer: 2, explain: 'Art. 52, §3º exclui multas simples (II) e diária (III) para o Poder Público.' },
    { q: 'Princípio de coletar apenas os campos estritamente úteis:', options: ['Livre acesso', 'Necessidade', 'Transparência', 'Prevenção'], answer: 1, explain: 'Art. 6º, III: princípio da necessidade (minimização de dados).' },
    { q: 'Em incidente com risco relevante, quem notifica a ANPD?', options: ['Controlador', 'Operador', 'Titular', 'Provedor DNS'], answer: 0, explain: 'Art. 48: o controlador comunica à ANPD e ao titular.' },
    { q: 'Regra de consentimento para criança (até 12 anos incompletos):', options: ['Dispensado sempre', 'Pelo menos um pai/resp.', 'Só por SMS', 'Só após 18 anos'], answer: 1, explain: 'Art. 14, §1º: consentimento específico e em destaque por pelo menos um dos pais ou responsável.' }
  ],
  study: {
    title: 'Biblioteca da LGPD',
    chapters: [
      {
        title: 'Fundamentos, Papéis e os 10 Princípios (Arts. 1º–6º)',
        pages: [
          'A LGPD (Lei 13.709/2018) protege liberdades e privacidade de PESSOA NATURAL.\n• Territorialidade (art. 3º): vale se a operação ocorrer no Brasil, se ofertar bens/serviços aqui OU se os dados forem coletados no Brasil (salvo exceções do art. 4º: fins particulares não econômicos, jornalísticos/artísticos/acadêmicos, segurança pública/defesa nacional/repressão penal).\n• Mesmo dados de quem já está no sistema público seguem a lei.',
          'Diferença clássica de prova:\n• Dado pessoal (art. 5º, I): identifica ou torna identificável pessoa física (CPF, e-mail nome@..., IP ligado a alguém).\n• Dado sensível (art. 5º, II): origem racial/étnica, religião, opinião política, filiação sindical, saúde, vida sexual, genética ou BIOMETRIA.\n• Anonimizado (art. 12): fora da LGPD se irreversível por meios razoáveis.\n• Pseudoanonimizado (art. 13, §4º): continua DENTRO da LGPD!',
          'Agentes e Princípios:\n• Controlador decide; Operador executa em nome do controlador; Encarregado/DPO (art. 41) faz a ponte com titulares e ANPD.\n• Art. 6º (Boa-fé + 10 princípios): Finalidade, Adequação, Necessidade (minimização), Livre acesso, Qualidade, Transparência, Segurança, Prevenção, Não discriminação e Responsabilização/prestação de contas.'
        ],
        tip: 'Pseudoanonimizado COM chave guardada = CONTINUA na LGPD. Anonimizado irreversível = fora da LGPD.',
        quiz: [
          { q: 'Qual exceção NÃO retira totalmente o tratamento da incidência básica de princípios ou está explicitamente fora da LGPD no art. 4º?', options: ['Fins exclusivamente particulares e não econômicos por pessoa natural.', 'Fins exclusivamente jornalísticos e artísticos.', 'Tratamento por tribunal administrativo ou judicial para cadastro funcional de servidores.', 'Segurança pública e defesa nacional.', 'Atividades de investigação e repressão de infrações penais.'], answer: 2, explain: 'Art. 4º lista I (particular não econômico), II (jornalístico/artístico/acadêmico), III (segurança pública/defesa/penal) e IV (trânsito sem contato BR). Cadastro de servidores é regido normalmente pela LGPD (Capítulo IV).' },
          { q: 'Um formulário de agendamento coleta CPF, nome e religião do cidadão, embora a religião não tenha utilidade para o atendimento. Violaram-se diretamente os princípios de:', options: ['Necessidade e finalidade.', 'Livre acesso e portabilidade.', 'Anonimização e transferência internacional.', 'Publicização e responsabilidade objetiva.', 'Segredo comercial e livre iniciativa.'], answer: 0, explain: 'Art. 6º, I e III: coletar dado sem propósito legítimo para aquele atendimento e além do mínimo necessário fere finalidade e necessidade.' }
        ]
      },
      {
        title: 'As 10 Bases Legais, Dados Sensíveis e Crianças (Arts. 7º–14)',
        pages: [
          'MITO PERIGOSO: achar que tudo exige consentimento!\nO art. 7º traz 10 hipóteses para dados pessoais comuns:\n1. Consentimento (livre, informado e inequívoco)\n2. Obrigação legal ou regulatória\n3. Políticas públicas pela Adm. Pública\n4. Estudos por órgão de pesquisa\n5. Execução de contrato / preliminares\n6. Exercício regular de direitos (processo judicial, adm. ou arbitral)\n7. Proteção da vida\n8. Tutela da saúde\n9. Legítimo interesse\n10. Proteção do crédito.',
          'Dados Sensíveis (Art. 11) são MAIS rígidos:\n• Consentimento precisa ser ESPECÍFICO e DESTACADO para finalidades específicas.\n• Sem consentimento (inciso II): obrigação legal, políticas públicas, pesquisa, exercício regular de direitos, proteção da vida, tutela da saúde e garantia de prevenção à fraude/segurança do titular.\n• ATENÇÃO: "Legítimo interesse" (art. 7º, IX) e "proteção do crédito" (X) NÃO existem como base legal para dado sensível!',
          'Crianças e Adolescentes (Art. 14):\n• Sempre no melhor interesse.\n• Dados de CRIANÇA exigem consentimento específico e em destaque dado por PELO MENOS UM dos pais ou responsável legal.\n• Exceção (§3º): coleta sem consentimento só para contatar os pais/responsável (uma única vez, sem armazenar nem repassar a terceiros).\n• Dados manifestamente públicos (art. 7º, §4º): dispensam consentimento, mas continuam respeitando os princípios!'
        ],
        tip: 'Legítimo interesse e proteção ao crédito NÃO servem para dados sensíveis (art. 11)!',
        quiz: [
          { q: 'Para autenticar usuários com biometria facial, uma empresa quer usar a base legal do "legítimo interesse". Segundo a LGPD:', options: ['É válido se houver aviso no rodapé do site.', 'É inválido, pois biometria é dado sensível e o art. 11 não prevê legítimo interesse.', 'É válido apenas para maiores de 60 anos.', 'Dispensa medidas de segurança se o servidor for local.', 'Exige autorização judicial prévia em qualquer caso.'], answer: 1, explain: 'Biometria é dado sensível (art. 5º, II). O art. 11 não contempla legítimo interesse; para autenticação antifraude sem consentimento há a alínea g (prevenção à fraude e segurança nos processos de identificação).' },
          { q: 'Quando o Poder Público coleta dados estritamente para cumprir sentença ou obrigação prevista em lei:', options: ['Deve obter consentimento assinado em cartório do réu.', 'Dispensa o consentimento por se enquadrar em obrigação legal/exercício regular de direitos/política pública.', 'Não precisa observar o princípio da segurança.', 'Pode vender a base para birôs de crédito.', 'Está dispensado de informar quem é o encarregado.'], answer: 1, explain: 'O consentimento é apenas uma das bases legais (art. 7º, I). Obrigação legal (II), execução de políticas públicas (III) e processo judicial (VI) dispensam consentimento.' }
        ]
      },
      {
        title: 'Direitos do Titular e Vida Real (Arts. 15–22)',
        pages: [
          'Para a prova E para a sua vida como cidadão (Art. 18):\nVocê pode pedir ao controlador a qualquer momento, gratuitamente:\n• Confirmação da existência de tratamento e acesso aos dados (art. 19: formato simplificado imediato ou declaração completa em até 15 dias!)\n• Correção de dados incompletos/inexatos\n• Anonimização, bloqueio ou eliminação de dados excessivos/ilegais\n• Portabilidade\n• Revogação do consentimento e informação sobre compartilhamentos.',
          'Revisão de Decisão Automatizada (Art. 20):\n• Muito quente para TI e Judiciário!\n• O titular tem direito de pedir revisão de decisão tomada UNICAMENTE por algoritmo (ex.: crédito negado, triagem automática, score) e explicação clara dos critérios.\n• Cuidado com pegadinha FGV: após a MP 869/Lei 13.853, a lei não exige revisão "por pessoa natural" obrigatoriamente na letra final do art. 20 — garante o direito de solicitar revisão!',
          'Término do Tratamento (Arts. 15 e 16):\n• Fim da finalidade, fim do período, revogação do consentimento ou determinação da ANPD -> os dados devem ser ELIMINADOS.\n• Exceções de retenção (art. 16): cumprimento de obrigação legal/regulatória (ex.: prazo fiscal/trabalhista/Marco Civil), estudo por órgão de pesquisa, transferência a terceiro ou uso exclusivo do controlador (vedado acesso por terceiro, desde que anonimizados).'
        ],
        tip: 'Prazo clássico: declaração completa de acesso aos dados = até 15 dias da requisição (art. 19, II).',
        quiz: [
          { q: 'Ao receber requisição de acesso na forma de declaração clara e completa dos dados tratados (art. 19, II), o controlador deve fornecê-la no prazo de até:', options: ['24 horas.', '5 dias úteis.', '15 dias, contado da data do requerimento do titular.', '30 dias corridos prorrogáveis por mais 60.', '90 dias para órgãos públicos.'], answer: 2, explain: 'Art. 19: inciso I prevê formato simplificado imediato; inciso II prevê declaração clara e completa no prazo de até 15 dias a contar do requerimento.' },
          { q: 'Mesmo após um cidadão pedir a exclusão da conta (revogação de consentimento), uma loja mantém a nota fiscal armazenada por obrigação tributária. Isso é:', options: ['Ilegal, pois a revogação apaga tudo imediatamente.', 'Legal, amparada pelo art. 16, I (conservação para cumprimento de obrigação legal ou regulatória).', 'Crime previsto no Código Penal.', 'Permitido apenas se a empresa pagar taxa ao cliente.', 'Possível somente com anonimização do valor da nota.'], answer: 1, explain: 'Art. 16, I autoriza expressamente conservar dados após o término do tratamento para cumprimento de obrigação legal ou regulatória pelo controlador.' }
        ]
      },
      {
        title: 'LGPD no Poder Público e Judiciário (Arts. 23–36)',
        pages: [
          'Capítulo IV (Arts. 23–30) é OURO para concurso do TJPB:\n• Órgãos públicos (incluindo o Judiciário) tratam dados para finalidade pública e competência legal, devendo:\n  1. Informar em site de fácil acesso previsão legal, finalidade, procedimentos e práticas (art. 23, I)\n  2. Indicar encarregado / DPO (art. 23, III).\n• Os dados devem ficar em formato interoperável e estruturado (art. 25)!',
          'Uso Compartilhado pelo Poder Público (Arts. 26–27):\n• Entre órgãos públicos: permitido para finalidade específica e atribuição legal.\n• Para ENTIDADES PRIVADAS (art. 26, §1º): É VEDADO, salvo exceções como execução descentralizada de atividade pública (LAI), dados já acessíveis publicamente, previsão legal ou contratos/convênios.\n• E quando transferido a ente privado nessas exceções, exige comunicação à ANPD (art. 27, salvo hipóteses legais dispensadas).',
          'Transferência Internacional (Arts. 33–36):\n• Só ocorre quando o país/organismo tiver nível adequado de proteção avaliado pela ANPD, OU mediante cláusulas-padrão contratuais, normas corporativas globais, selos/certificações, cooperação jurídica internacional entre órgãos públicos ou consentimento específico e em destaque.\n• Empresas públicas e sociedades de economia mista (art. 24) que atuam em regime de concorrência seguem o regime privado!'
        ],
        tip: 'Art. 25: dados no Poder Público devem ser mantidos em formato interoperável e estruturado!',
        quiz: [
          { q: 'Uma empresa pública estatal que atua em regime de ampla concorrência no mercado (ex.: banco comercial estatal), segundo o art. 24 da LGPD, recebe tratamento equivalente ao de:', options: ['Órgão da administração direta, isento de multas.', 'Pessoa jurídica de direito privado.', 'Organismo internacional imune à lei.', 'Entidade filantrópica.', 'Autoridade judiciária.'], answer: 1, explain: 'Art. 24: empresas públicas e sociedades de economia mista que atuam em regime de concorrência ficam sujeitas ao mesmo regime das pessoas jurídicas de direito privado.' },
          { q: 'Sobre o formato dos dados tratados pelo Poder Público (art. 25) e o uso compartilhado (art. 26), é correto afirmar que:', options: ['Os dados devem ser armazenados exclusivamente em PDF digitalizado.', 'Os dados devem ser mantidos em formato interoperável e estruturado para uso compartilhado.', 'É livre transferir toda a base de servidores para empresas privadas de marketing.', 'O Poder Público é dispensado de indicar encarregado de dados.', 'A ANPD não tem competência para editar orientações ao setor público.'], answer: 1, explain: 'Art. 25 exige formato interoperável e estruturado; art. 26, §1º veda transferência indiscriminada a entes privados; art. 23, III exige encarregado.' }
        ]
      },
      {
        title: 'Segurança, Privacy by Design, RIPD e Incidentes (Arts. 37–51)',
        pages: [
          'Governança técnica que o dev precisa saber (Arts. 37–41 & 46–51):\n• Registro das operações de tratamento (ROPA — art. 37): obrigatório para controlador E operador, especialmente quando há legítimo interesse.\n• Privacy by Design (art. 46, §2º): medidas técnicas e organizacionais adotadas DESDE A CONCEPÇÃO do produto/serviço e durante toda a execução.\n• Minimização no código: não logar CPF/token em plaintext; RBAC/ABAC; criptografia em repouso e trânsito (TLS).',
          'RIPD — Relatório de Impacto à Proteção de Dados (Art. 38):\n• Pode ser determinado pela ANPD (especialmente em dados sensíveis, alto risco ou Poder Público — art. 32).\n• Conteúdo mínimo obrigatório (art. 38, parágrafo único):\n  1. Descrição dos tipos de dados coletados\n  2. Metodologia de coleta e garantia de segurança\n  3. Análise de medidas, salvaguardas e mitigação de risco.',
          'Incidentes de Segurança (Art. 48):\n• Quando houver risco ou dano relevante aos titulares, o CONTROLADOR comunica à ANPD e ao titular em prazo razoável (hoje regulamentado pela Res. CD/ANPD nº 15/2024: 3 dias úteis, mas na letra da LGPD: "prazo razoável").\n• Deve informar natureza dos dados, titulares envolvidos, medidas técnicas prévias, riscos, motivo de eventual demora e medidas de mitigação.'
        ],
        tip: 'No código: Privacy by Design (art. 46, §2º) = desde a concepção! Não logar PII/CPF e minimizar campos no payload.',
        quiz: [
          { q: 'Consoante o art. 38, parágrafo único da LGPD, o Relatório de Impacto à Proteção de Dados Pessoais (RIPD) deve conter, no mínimo:', options: ['O salário de todos os desenvolvedores do projeto.', 'Descrição dos tipos de dados coletados, metodologia de coleta/segurança e análise de salvaguardas e mitigação de riscos.', 'Apenas a lista de fornecedores de hardware do datacenter.', 'Assinatura de todos os titulares envolvidos no banco de dados.', 'Cópia integral dos backups de produção.'], answer: 1, explain: 'Art. 38, parágrafo único lista exatamente esses três blocos mínimos para o RIPD, observados os segredos comercial e industrial.' },
          { q: 'A adoção de controles de privacidade, criptografia e minimização desde a fase de arquitetura de um novo sistema do TJPB materializa:', options: ['O conceito de Privacy by Design previsto no art. 46, §2º da LGPD.', 'A isenção total da necessidade de ROPA.', 'A transferência automática de responsabilidade ao titular.', 'O bloqueio definitivo de dados abertos.', 'A revogação tácita do Marco Civil da Internet.'], answer: 0, explain: 'Art. 46, §2º prevê expressamente que medidas técnicas de segurança devem ser observadas desde a fase de concepção do produto ou serviço até a sua execução.' }
        ]
      },
      {
        title: 'Responsabilidade, Sanções da ANPD e Pegadinhas (Arts. 42–45, 52–59)',
        pages: [
          'Responsabilidade Civil (Arts. 42–45):\n• Controlador ou operador que causar dano patrimonial, moral, individual ou coletivo é obrigado a repará-lo.\n• SOLIDARIEDADE do operador: quando descumpriu obrigações da LGPD OU não seguiu instruções lícitas do controlador (equiparando-se a controlador).\n• Excludentes de responsabilidade (art. 43): NÃO realizou o tratamento; NÃO houve violação à LGPD; ou dano por culpa EXCLUSIVA do titular ou de terceiro.',
          'Sanções Administrativas da ANPD (Art. 52):\n• Gradativas, isoladas ou cumulativas, após ampla defesa:\n  I. Advertência com prazo\n  II. Multa simples: até 2% do faturamento no Brasil (excluídos tributos), limite R$ 50 milhões por infração\n  III. Multa diária (mesmo teto de R$ 50M)\n  IV. Publicização da infração\n  V. Bloqueio dos dados\n  VI. Eliminação dos dados\n  X/XI/XII. Suspensão parcial do BD / suspensão da atividade (até 6m + 6m) / proibição total ou parcial.',
          'A PEGADINHA CAMPEÃ NA FGV (Art. 52, §3º + §1º):\n• Órgãos e entidades PÚBLICAS NÃO recebem multa simples (II) nem multa diária (III)!\n• Recebem advertência, publicização, bloqueio, eliminação, suspensão e proibição — além de sanções aos servidores na Lei 8.112, Improbidade e LAI.\n• Boas práticas e governança (art. 50) ATENUAM sanções (art. 52, §1º, IX)!'
        ],
        tip: 'Operador só responde SOLIDARIAMENTE se descumprir a lei ou ignorar instruções lícitas do controlador (art. 42, §1º, I)!',
        quiz: [
          { q: 'Em relação às excludentes de responsabilidade civil dos agentes de tratamento (art. 43 da LGPD), NÃO afasta a responsabilidade do controlador:', options: ['Provar que não realizou o tratamento de dados atribuído a ele.', 'Provar que, embora tenha feito o tratamento, não houve violação à LGPD.', 'Provar que o dano decorreu de culpa exclusiva do titular.', 'Provar que o dano decorreu de culpa exclusiva de terceiro.', 'Provar apenas que os dados ficaram armazenados em nuvem terceirizada sem violação de terceiro externo.'], answer: 4, explain: 'Art. 43 lista apenas três excludentes: não realizou o tratamento (I), não houve violação à LGPD (II) e culpa exclusiva do titular ou de terceiro (III). Terceirizar em nuvem (operador) não exime o controlador.' },
          { q: 'Em caso de dano causado por incidente na operação realizada por um operador contratado, o operador responde SOLIDARIAMENTE com o controlador quando:', options: ['Sempre, em qualquer circunstância, mesmo seguindo estritamente instruções lícitas e a LGPD.', 'Descumprir as obrigações da LGPD ou não tiver seguido as instruções lícitas do controlador.', 'Apenas se faturar mais de R$ 50 milhões no exercício anterior.', 'Somente quando o controlador for órgão do Poder Judiciário.', 'Nunca, pois apenas o controlador tem responsabilidade perante o titular.'], answer: 1, explain: 'Art. 42, §1º, I: o operador responde solidariamente quando descumprir obrigações da legislação de proteção de dados ou quando não tiver seguido as instruções lícitas do controlador.' }
        ]
      }
    ]
  }
};


/* Dados dos minigames (TJPB) - scripts classicos, sem imports. */
window.MINIDATA = {

  /* ---------- CACA-ERROS ---------- */
  errorhunt: [
    { text: "Fui à uma reunião ontem.",
      parts: ["Fui", "à", "uma", "reunião", "ontem."], wrongIndex: 1, fix: "a",
      why: "Não ocorre crase antes de artigo indefinido (uma). Ocorre crase quando há preposição 'a' + artigo definido 'a' (ou 'aquele/aquela'). Exceção: horas (à uma hora)." },
    { text: "Os candidatos aprovados receberá a convocação.",
      parts: ["Os", "candidatos", "aprovados", "receberá", "a", "convocação."], wrongIndex: 3, fix: "receberão",
      why: "O verbo concorda com o sujeito 'Os candidatos aprovados' (plural): receberão." },
    { text: "Haviam muitos processos pendentes na vara.",
      parts: ["Haviam", "muitos", "processos", "pendentes", "na", "vara."], wrongIndex: 0, fix: "Havia",
      why: "Haver no sentido de existir é impessoal: fica na 3ª pessoa do singular (Havia)." },
    { text: "O juiz assistiu o julgamento.",
      parts: ["O", "juiz", "assistiu", "o", "julgamento."], wrongIndex: 3, fix: "ao",
      why: "Assistir no sentido de presenciar é transitivo indireto e exige preposição 'a': assistiu ao julgamento." },
    { text: "A lei exige que o servidor obedeça as normas.",
      parts: ["A", "lei", "exige", "que", "o", "servidor", "obedeça", "as", "normas."], wrongIndex: 7, fix: "às",
      why: "Obedecer é transitivo indireto (obedecer a algo/alguém): preposição 'a' + artigo 'as' = às (crase)." },
    { text: "Não houve nenhuma excessão à regra.",
      parts: ["Não", "houve", "nenhuma", "excessão", "à", "regra."], wrongIndex: 3, fix: "exceção",
      why: "Grafia correta: exceção (com 'ç')." },
    { text: "O servidor, cumpriu o prazo.",
      parts: ["O", "servidor,", "cumpriu", "o", "prazo."], wrongIndex: 1, fix: "servidor",
      why: "Não se separa o sujeito do verbo com vírgula isolada (sem termo intercalado)." },
    { text: "Seguem anexo os documentos solicitados.",
      parts: ["Seguem", "anexo", "os", "documentos", "solicitados."], wrongIndex: 1, fix: "anexos",
      why: "'Anexo' é adjetivo e concorda com o substantivo a que se refere: documentos -> anexos." },
    { text: "Fazem dois anos que ele é servidor.",
      parts: ["Fazem", "dois", "anos", "que", "ele", "é", "servidor."], wrongIndex: 0, fix: "Faz",
      why: "Fazer indicando tempo decorrido é impessoal: fica no singular (Faz dois anos)." },
    { text: "O servidor aspira o cargo de analista.",
      parts: ["O", "servidor", "aspira", "o", "cargo", "de", "analista."], wrongIndex: 3, fix: "ao",
      why: "Aspirar no sentido de almejar é transitivo indireto: aspira ao cargo." },
    { text: "Ele é um mal funcionário.",
      parts: ["Ele", "é", "um", "mal", "funcionário."], wrongIndex: 3, fix: "mau",
      why: "'Mau' (oposto de bom) qualifica substantivo; 'mal' (oposto de bem) é advérbio, substantivo ou conjunção (mal chegou, saiu)." },
    { text: "Entregou o documento à ele.",
      parts: ["Entregou", "o", "documento", "à", "ele."], wrongIndex: 3, fix: "a",
      why: "Não ocorre crase antes de pronome pessoal (ele): apenas a preposição 'a'." },
    { text: "Informo à Vossa Excelência o resultado.",
      parts: ["Informo", "à", "Vossa", "Excelência", "o", "resultado."], wrongIndex: 1, fix: "a",
      why: "Não ocorre crase antes de pronomes de tratamento como Vossa Excelência." }
  ],

  /* ---------- FLASHCARDS (LIGAR) ---------- */
  match: [
    { title: "Princípios da Administração Pública",
      pairs: [
        ["Legalidade", "O administrador só pode fazer o que a lei autoriza"],
        ["Impessoalidade", "Atuação sem favoritismos nem perseguições, voltada ao interesse público"],
        ["Moralidade", "Ética, probidade e boa-fé na atuação administrativa"],
        ["Publicidade", "Transparência: divulgação oficial dos atos"],
        ["Eficiência", "Bons resultados, qualidade e celeridade com uso adequado dos recursos"],
        ["Autotutela", "A Administração pode anular seus atos ilegais e revogar os inconvenientes"]
      ] },
    { title: "Remédios constitucionais",
      pairs: [
        ["Habeas corpus", "Protege a liberdade de locomoção"],
        ["Habeas data", "Conhecer ou retificar informações pessoais em registros ou bancos de dados de caráter público"],
        ["Mandado de segurança", "Protege direito líquido e certo não amparado por HC ou HD"],
        ["Mandado de injunção", "Falta de norma regulamentadora que inviabiliza direitos e liberdades constitucionais"],
        ["Ação popular", "O cidadão anula ato lesivo ao patrimônio público, à moralidade, ao meio ambiente..."],
        ["Mandado de segurança coletivo", "Pode ser impetrado por partido com representação no Congresso, sindicato, entidade de classe ou associação"]
      ] },
    { title: "Poderes da Administração",
      pairs: [
        ["Poder hierárquico", "Ordenar, coordenar, controlar e rever a atuação dos subordinados"],
        ["Poder disciplinar", "Punir infrações funcionais de servidores e de particulares com vínculo específico"],
        ["Poder regulamentar", "Editar normas complementares para a fiel execução da lei"],
        ["Poder de polícia", "Limitar direitos e liberdades individuais em favor do interesse coletivo"],
        ["Poder vinculado", "A lei define todos os elementos: não há margem de escolha"],
        ["Poder discricionário", "Há margem de liberdade quanto à conveniência e oportunidade"]
      ] },
    { title: "Lógica proposicional",
      pairs: [
        ["p ∧ q (conjunção)", "Verdadeira somente quando p e q são verdadeiras"],
        ["p ∨ q (disjunção)", "Falsa somente quando p e q são falsas"],
        ["p → q (condicional)", "Falsa somente quando p é V e q é F"],
        ["p ↔ q (bicondicional)", "Verdadeira quando p e q têm o mesmo valor lógico"],
        ["¬(p ∧ q)", "¬p ∨ ¬q (Lei de De Morgan)"],
        ["Negação de p → q", "p ∧ ¬q"]
      ] },
    { title: "Atalhos e termos de Informática",
      pairs: [
        ["Ctrl + C", "Copiar"],
        ["Ctrl + X", "Recortar"],
        ["Ctrl + Z", "Desfazer a última ação"],
        ["Ctrl + A", "Selecionar tudo"],
        ["Alt + Tab", "Alternar entre janelas abertas"],
        ["F5", "Atualizar a página no navegador"]
      ] },
    { title: "Tipos de malware",
      pairs: [
        ["Vírus", "Anexa-se a arquivos ou programas e precisa ser executado para se propagar"],
        ["Worm", "Autorreplica-se e se propaga pela rede sem precisar de hospedeiro"],
        ["Cavalo de Troia", "Aparenta ser programa legítimo, mas executa ações maliciosas"],
        ["Ransomware", "Sequestra dados (criptografando-os) e exige resgate"],
        ["Spyware", "Monitora atividades e coleta informações do usuário"],
        ["Keylogger", "Registra as teclas digitadas"]
      ] },
    { title: "Segurança da informação",
      pairs: [
        ["Phishing", "Golpe que induz a vítima a fornecer dados por mensagens falsas"],
        ["Firewall", "Filtra o tráfego de rede conforme regras de segurança"],
        ["Criptografia", "Codifica os dados para garantir o sigilo"],
        ["Backup", "Cópia de segurança para recuperação dos dados"],
        ["Backdoor", "Acesso remoto oculto que permite retornar ao sistema invadido"],
        ["Botnet", "Rede de computadores infectados controlados remotamente"]
      ] }
  ],

  /* ---------- PUZZLE LOGICO ---------- */
  truth: [
    { level: 1, expr: "p ∧ q", vars: ["p", "q"], goal: true,
      hint: "A conjunção só é verdadeira quando as duas proposições são verdadeiras." },
    { level: 1, expr: "p ∨ q", vars: ["p", "q"], goal: false,
      hint: "A disjunção só é falsa quando as duas proposições são falsas." },
    { level: 1, expr: "p → q", vars: ["p", "q"], goal: false,
      hint: "O condicional só é falso quando o antecedente é V e o consequente é F." },
    { level: 1, expr: "¬p ∨ q", vars: ["p", "q"], goal: false,
      hint: "Para a disjunção ser falsa, ¬p e q devem ser ambos falsos." },
    { level: 2, expr: "(p ∧ ¬q) → r", vars: ["p", "q", "r"], goal: false,
      hint: "Para o condicional ser falso: antecedente V (p V e q F) e consequente F (r F)." },
    { level: 2, expr: "(p ↔ q) ∧ ¬r", vars: ["p", "q", "r"], goal: true,
      hint: "Precisa de p e q com o mesmo valor, e r falsa." },
    { level: 2, expr: "(p → q) ∧ (q → r)", vars: ["p", "q", "r"], goal: false,
      hint: "Basta um dos condicionais ser falso. Ex.: p V e q F." },
    { level: 2, expr: "¬(p ∨ q) ↔ r", vars: ["p", "q", "r"], goal: true,
      hint: "O bicondicional é verdadeiro quando os dois lados têm o mesmo valor." },
    { level: 3, expr: "(p ∨ q) → (r ∧ s)", vars: ["p", "q", "r", "s"], goal: false,
      hint: "Antecedente V (p ou q verdadeira) e consequente F (r ou s falsa)." },
    { level: 3, expr: "((p ∧ q) ∨ r) ↔ s", vars: ["p", "q", "r", "s"], goal: true,
      hint: "Os dois lados do bicondicional devem ter o mesmo valor lógico." },
    { level: 3, expr: "¬(p → q) ∨ (r ↔ s)", vars: ["p", "q", "r", "s"], goal: false,
      hint: "Os dois lados da disjunção devem ser falsos: p → q verdadeiro e r ↔ s falso." }
  ],

  /* ---------- QUIZ RELAMPAGO ---------- */
  quick: [
    // ----- Constitucional -----
    { topic: "Constitucional", q: "Mandato do Presidente da República dura quantos anos?", options: ["quatro", "cinco", "seis", "oito"], answer: 0, explain: "Quatro anos, com possibilidade de uma reeleição." },
    { topic: "Constitucional", q: "Remédio que protege a liberdade de locomoção:", options: ["Habeas corpus", "Habeas data", "Mandado de segurança", "Ação popular"], answer: 0, explain: "O habeas corpus protege o direito de ir e vir." },
    { topic: "Constitucional", q: "Remédio para conhecer ou retificar informações pessoais:", options: ["Habeas data", "Habeas corpus", "Mandado de injunção", "Ação popular"], answer: 0, explain: "Habeas data: acesso e retificação de dados do próprio impetrante." },
    { topic: "Constitucional", q: "Idade mínima para ser Presidente da República:", options: ["trinta e cinco", "trinta", "vinte e um", "quarenta"], answer: 0, explain: "A CF exige no mínimo 35 anos." },
    { topic: "Constitucional", q: "Quantos Ministros compõem o STF?", options: ["onze", "nove", "treze", "quinze"], answer: 0, explain: "O STF tem 11 Ministros." },
    { topic: "Constitucional", q: "Pena de morte só é permitida em caso de:", options: ["guerra declarada", "tráfico", "terrorismo", "crime hediondo"], answer: 0, explain: "Só em caso de guerra declarada (CF, art. 5º, XLVII, a)." },
    { topic: "Constitucional", q: "O mandado de segurança protege direito:", options: ["líquido e certo", "difuso", "eventual", "futuro"], answer: 0, explain: "Direito líquido e certo, não amparado por HC nem HD." },
    { topic: "Constitucional", q: "O Poder Legislativo federal é exercido pelo:", options: ["Congresso Nacional", "Senado", "Câmara", "Supremo"], answer: 0, explain: "Congresso Nacional = Câmara dos Deputados + Senado Federal." },
    { topic: "Constitucional", q: "Mandato de Senador dura quantos anos?", options: ["oito", "quatro", "seis", "dez"], answer: 0, explain: "Oito anos (duas legislaturas)." },
    { topic: "Constitucional", q: "O voto é facultativo para maiores de:", options: ["setenta", "sessenta", "sessenta e cinco", "oitenta"], answer: 0, explain: "Facultativo: analfabetos, maiores de 70 e entre 16 e 18 anos." },
    // ----- Administrativo -----
    { topic: "Administrativo", q: "Princípio que diz: o administrador só faz o que a lei permite.", options: ["Legalidade", "Moralidade", "Publicidade", "Eficiência"], answer: 0, explain: "Legalidade: na Administração, só é permitido o que a lei autoriza." },
    { topic: "Administrativo", q: "Princípio que exige transparência dos atos públicos:", options: ["Publicidade", "Impessoalidade", "Legalidade", "Eficiência"], answer: 0, explain: "Publicidade: dar conhecimento e transparência aos atos." },
    { topic: "Administrativo", q: "Acumular cargos públicos é, em regra:", options: ["proibido", "livre", "obrigatório", "anual"], answer: 0, explain: "Regra: proibido, ressalvados casos previstos na CF (art. 37, XVI)." },
    { topic: "Administrativo", q: "Atributo que permite à Administração executar o ato sem ir ao Judiciário:", options: ["Autoexecutoriedade", "Tipicidade", "Presunção", "Competência"], answer: 0, explain: "Autoexecutoriedade: executar diretamente, sem ordem judicial." },
    { topic: "Administrativo", q: "Cargo efetivo exige:", options: ["concurso", "indicação", "sorteio", "eleição"], answer: 0, explain: "Cargo efetivo exige concurso público (art. 37, II)." },
    { topic: "Administrativo", q: "Modalidade da Lei 14.133 para bens e serviços comuns:", options: ["Pregão", "Convite", "Tomada", "Leilão"], answer: 0, explain: "Pregão é para bens e serviços comuns. Convite e tomada de preços foram extintos." },
    { topic: "Administrativo", q: "Ato ilegal pode ser anulado pela:", options: ["Administração", "Cartório", "Senado", "Ninguém"], answer: 0, explain: "Autotutela (Súmula 473 do STF): a Administração anula seus atos ilegais." },
    { topic: "Administrativo", q: "Servidor nomeado por concurso adquire estabilidade após quantos anos?", options: ["três", "dois", "cinco", "quatro"], answer: 0, explain: "Três anos de efetivo exercício (art. 41 da CF)." },
    // ----- Lógica e matemática -----
    { topic: "Lógica", q: "Se p é Verdadeiro e q é Falso, então p ∧ q é:", options: ["Falso", "Verdadeiro", "Nulo", "Incerto"], answer: 0, explain: "O “e” (∧) só é verdadeiro se os dois forem verdadeiros." },
    { topic: "Lógica", q: "Se p é Verdadeiro e q é Falso, então p ∨ q é:", options: ["Verdadeiro", "Falso", "Nulo", "Incerto"], answer: 0, explain: "O “ou” (∨) é verdadeiro se pelo menos um for verdadeiro." },
    { topic: "Lógica", q: "A condicional p → q só é falsa quando p e q são, nessa ordem:", options: ["V e F", "F e V", "V e V", "F e F"], answer: 0, explain: "Verdadeiro implicando falso é o único caso falso." },
    { topic: "Lógica", q: "Contrapositiva de p → q:", options: ["¬q → ¬p", "q → p", "¬p → ¬q", "p ∧ q"], answer: 0, explain: "A contrapositiva ¬q → ¬p é equivalente à original." },
    { topic: "Matemática", q: "20% de 50 é:", options: ["10", "20", "5", "15"], answer: 0, explain: "20% = 0,2 → 0,2 × 50 = 10." },
    { topic: "Matemática", q: "3 canetas custam 6 reais. 5 canetas custam:", options: ["10", "12", "8", "15"], answer: 0, explain: "Cada caneta custa 2. Cinco custam 10." },
    { topic: "Matemática", q: "Probabilidade de sair cara numa moeda justa:", options: ["50%", "25%", "75%", "100%"], answer: 0, explain: "Dois resultados igualmente prováveis: 1/2 = 50%." },
    { topic: "Matemática", q: "Média de 4, 6 e 8:", options: ["6", "5", "7", "8"], answer: 0, explain: "(4 + 6 + 8) ÷ 3 = 6." },
    // ----- Informática -----
    { topic: "Informática", q: "Atalho para copiar:", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], answer: 0, explain: "Ctrl+C copia." },
    { topic: "Informática", q: "Atalho para colar:", options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+Z"], answer: 0, explain: "Ctrl+V cola." },
    { topic: "Informática", q: "Atalho para recortar:", options: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+A"], answer: 0, explain: "Ctrl+X recorta (move)." },
    { topic: "Informática", q: "Atalho para desfazer:", options: ["Ctrl+Z", "Ctrl+Y", "Ctrl+X", "Ctrl+S"], answer: 0, explain: "Ctrl+Z desfaz a última ação." },
    { topic: "Informática", q: "Malware que sequestra arquivos e pede resgate:", options: ["Ransomware", "Spyware", "Adware", "Worm"], answer: 0, explain: "Ransomware criptografa os dados e exige resgate." },
    { topic: "Informática", q: "Programa que se replica sozinho pela rede:", options: ["Worm", "Trojan", "Backdoor", "Adware"], answer: 0, explain: "Worm (verme) se propaga sem precisar de hospedeiro." },
    { topic: "Informática", q: "Golpe de e-mail falso para roubar dados:", options: ["Phishing", "Sniffing", "Cookie", "Backup"], answer: 0, explain: "Phishing: mensagens falsas para obter dados do usuário." },
    { topic: "Informática", q: "Cópia de segurança dos arquivos:", options: ["Backup", "Cache", "Cookie", "Buffer"], answer: 0, explain: "Backup = cópia de segurança." },
    { topic: "Informática", q: "Protocolo de navegação segura:", options: ["HTTPS", "HTTP", "FTP", "SMTP"], answer: 0, explain: "HTTPS usa criptografia (TLS)." },
    { topic: "Informática", q: "Protocolo usado para ENVIAR e-mail:", options: ["SMTP", "POP3", "IMAP", "HTTP"], answer: 0, explain: "SMTP envia. POP3 e IMAP recebem." },
    { topic: "Informática", q: "Extensão padrão de planilha do Excel:", options: [".xlsx", ".docx", ".pptx", ".pdf"], answer: 0, explain: ".xlsx = planilha. .docx = texto, .pptx = slides." },
    { topic: "Informática", q: "Tecla que atualiza a página no navegador:", options: ["F5", "F1", "F2", "F12"], answer: 0, explain: "F5 atualiza a página." },
    // ----- Processo / Judiciária -----
    { topic: "Processo", q: "Prazo processual no CPC conta-se em dias:", options: ["úteis", "corridos", "seguidos", "semanais"], answer: 0, explain: "Prazos processuais contam-se em dias úteis (CPC, art. 219)." },
    { topic: "Processo", q: "Quem decide o processo em primeiro grau?", options: ["Juiz", "Desembargador", "Ministro", "Promotor"], answer: 0, explain: "Em 1º grau, o juiz de direito julga. Desembargadores atuam no 2º grau." },
    { topic: "Processo", q: "Quem atua como fiscal da ordem jurídica (custos legis)?", options: ["Ministério Público", "Juiz", "Advogado", "Escrivão"], answer: 0, explain: "O Ministério Público fiscaliza a ordem jurídica." },
    { topic: "Processo", q: "Recurso típico contra sentença no CPC:", options: ["Apelação", "Agravo", "Reclamação", "Revista"], answer: 0, explain: "Contra sentença cabe apelação." },
    { topic: "Processo", q: "Juizados Especiais Cíveis: causas até quantos salários mínimos?", options: ["quarenta", "vinte", "sessenta", "cem"], answer: 0, explain: "Até 40 salários mínimos (Lei 9.099/95)." },
    { topic: "Processo", q: "A citação serve para chamar ao processo o:", options: ["réu", "autor", "juiz", "perito"], answer: 0, explain: "Citação = chamar o réu para se defender." },
    { topic: "Processo", q: "A Defensoria Pública atende principalmente:", options: ["necessitados", "empresas", "servidores", "magistrados"], answer: 0, explain: "A Defensoria presta assistência jurídica a quem não pode pagar." }
  ]
};

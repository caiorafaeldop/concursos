window.TOPICS = window.TOPICS || [];
window.TOPICS.push({ id:"logica", name:"Casa da Lógica", color:"#5a8fe8", npcs:[
  {name:"Seu Silogismo", lines:[
    "Proposição é frase declarativa com valor V ou F. 'Que horas são?' não é proposição.",
    "Conectivos: e (∧), ou (∨), se...então (→), se e somente se (↔), não (~).",
    "Negação de 'e'/'ou' (De Morgan): ~(p∧q) = ~p∨~q e ~(p∨q) = ~p∧~q.",
    "Negação de 'Todo A é B' é 'Algum A não é B'. Negação de 'Algum' é 'Nenhum'."
  ]},
  {name:"Dona Tabela", lines:[
    "Com n proposições simples, a tabela-verdade tem 2^n linhas. Com 3, são 8.",
    "'p e q' só é V se ambas V. 'p ou q' só é F se ambas F.",
    "Condicional p→q só é F quando p é V e q é F. Nos demais casos é V.",
    "Bicondicional p↔q é V quando p e q têm o mesmo valor. Tautologia: sempre V."
  ]},
  {name:"Fiscal Regra de Três", lines:[
    "Porcentagem: aumento de 20% multiplica por 1,20. Desconto de 20% multiplica por 0,80.",
    "Regra de três direta: grandezas crescem juntas. Inversa: uma sobe, a outra cai.",
    "Inversa: 6 técnicos fazem em 4 dias. Com 12, o tempo cai: 6x4/12 = 2 dias.",
    "Probabilidade = casos favoráveis / casos possíveis. Evento complementar: 1 - P."
  ]}
], boss:{name:"Prof. Raciocínio", intro:"Pense antes de responder! Quem cai em pegadinha de lógica não passa na minha banca.", questions:[
  {q:"A negação da proposição 'Todo servidor do tribunal é pontual' é:", options:["Nenhum servidor do tribunal é pontual","Todo servidor do tribunal não é pontual","Algum servidor do tribunal não é pontual","Algum servidor do tribunal é pontual"], answer:2, explain:"A negação de 'Todo A é B' é 'Algum A não é B'. A letra A é contrária (forte demais), não negação. A B repete a ideia de 'nenhum'. A D é compatível com a original, logo não a nega."},
  {q:"A proposição 'Se o processo é distribuído, então o juiz o analisa' é FALSA quando:", options:["o processo não é distribuído e o juiz o analisa","o processo é distribuído e o juiz não o analisa","o processo não é distribuído e o juiz não o analisa","o processo é distribuído e o juiz o analisa"], answer:1, explain:"A condicional p→q só é falsa com antecedente verdadeiro e consequente falso: distribuído (V) e juiz não analisa (F). Nas outras três combinações a condicional é verdadeira."},
  {q:"Um técnico recebe salário de R$ 2.500,00 e tem aumento de 12%. O novo salário é:", options:["R$ 2.800,00","R$ 2.750,00","R$ 2.900,00","R$ 2.600,00"], answer:0, explain:"12% de 2.500 = 0,12 x 2.500 = 300. Novo salário: 2.500 + 300 = 2.800 (ou 2.500 x 1,12). As demais correspondem a aumentos de 10%, 16% e 4%, respectivamente."},
  {q:"Seis servidores concluem uma tarefa em 4 dias, com o mesmo ritmo. Em quantos dias 8 servidores a concluiriam?", options:["2 dias","4 dias","5 dias","3 dias"], answer:3, explain:"Grandezas inversamente proporcionais: mais servidores, menos dias. 6 x 4 = 24 servidores-dia; 24 / 8 = 3 dias. Resposta 2 ou 5 ignora a proporção; 4 dias seria manter o mesmo número de servidores."},
  {q:"Uma urna tem 5 bolas vermelhas, 3 azuis e 2 verdes. Sorteando uma bola ao acaso, a probabilidade de NÃO ser azul é:", options:["3/10","1/2","7/10","4/5"], answer:2, explain:"Total = 10 bolas. Não azuis = 5 + 2 = 7, logo 7/10. Também: 1 - 3/10 = 7/10. A letra A (3/10) é a probabilidade de ser azul; 1/2 e 4/5 não correspondem a nenhuma contagem."},
  {q:"A negação de 'Ana é juíza ou Beto é técnico' é:", options:["Ana não é juíza ou Beto não é técnico","Ana não é juíza e Beto não é técnico","Ana é juíza e Beto é técnico","Ana é juíza e Beto não é técnico"], answer:1, explain:"Pela Lei de De Morgan, ~(p∨q) = ~p∧~q: nega-se cada parte e troca 'ou' por 'e'. A letra A mantém o 'ou' (erro comum). C e D não negam as duas partes."}
]} });

window.TOPICS.push({ id:"informatica", name:"Laboratório de Informática", color:"#46b3a5", npcs:[
  {name:"Técnica Janela", lines:[
    "Windows: Ctrl+C copia, Ctrl+X recorta, Ctrl+V cola, Ctrl+Z desfaz, Alt+Tab troca de janela.",
    "Ctrl+Shift+Esc abre o Gerenciador de Tarefas. Win+D mostra a área de trabalho.",
    "Writer (.odt), Calc (.ods), Impress (.odp) são do LibreOffice. Word (.docx), Excel (.xlsx).",
    "Excel/Calc: =SOMA(A1:A3), =MÉDIA(A1:A3), =SE(A1>5;\"ok\";\"não\"). Toda fórmula começa com =."
  ]},
  {name:"Mestre da Rede", lines:[
    "Navegadores: Chrome, Edge, Firefox. Modo anônimo não esconde sua navegação do provedor.",
    "HTTP usa a porta 80 e não protege os dados. HTTPS usa TLS (porta 443) e cifra a conexão.",
    "E-mail: SMTP envia, POP3 baixa as mensagens, IMAP mantém sincronizado no servidor.",
    "Cc envia cópia visível a todos. Cco (cópia oculta) esconde os destinatários entre si."
  ]},
  {name:"Guardião do Backup", lines:[
    "Tríade da segurança: confidencialidade, integridade e disponibilidade (CID); com autenticidade, CIDA.",
    "Phishing é a fraude que engana o usuário por e-mail ou site falso para roubar dados.",
    "Malware: vírus precisa de hospedeiro; worm se replica sozinho; ransomware sequestra arquivos.",
    "Backup completo copia tudo. Diferencial: o que mudou desde o completo. Incremental: desde o último de qualquer tipo."
  ]}
], boss:{name:"Eng. Bit Byte", intro:"Seu computador está em risco! Responda ou vou formatar sua aprovação.", questions:[
  {q:"No Windows, o atalho de teclado que abre diretamente o Gerenciador de Tarefas é:", options:["Ctrl + Shift + Esc","Ctrl + Alt + Tab","Alt + F4","Win + L"], answer:0, explain:"Ctrl+Shift+Esc abre o Gerenciador de Tarefas. Alt+F4 fecha a janela ativa, Win+L bloqueia a sessão e Ctrl+Alt+Tab mantém visível o seletor de janelas aberto."},
  {q:"Em uma planilha, as células A1, A2 e A3 contêm 10, 20 e 60. O resultado de =MÉDIA(A1:A3) é:", options:["90","20","60","30"], answer:3, explain:"Média = (10 + 20 + 60) / 3 = 90 / 3 = 30. O valor 90 é o resultado de =SOMA(A1:A3). 20 e 60 são apenas valores de células, não a média aritmética."},
  {q:"A fraude que usa mensagens ou páginas falsas para induzir o usuário a fornecer senhas e dados pessoais é chamada de:", options:["Ransomware","Phishing","Sniffing","Backdoor"], answer:1, explain:"Phishing é engenharia social por e-mail/site falso. Ransomware cifra arquivos e exige resgate; sniffing captura tráfego de rede; backdoor é uma porta dos fundos para acesso remoto."},
  {q:"O tipo de backup que copia apenas os arquivos alterados desde o último backup, seja ele completo ou incremental, é o:", options:["Completo (full)","Diferencial","Espelhamento","Incremental"], answer:3, explain:"O incremental copia o que mudou desde o último backup de qualquer tipo. O diferencial copia o que mudou desde o último completo. O completo copia tudo."},
  {q:"O protocolo HTTPS se diferencia do HTTP principalmente porque:", options:["usa criptografia (TLS) na comunicação, em geral na porta 443","é exclusivo para envio de e-mails","usa a porta 80 e é mais rápido","só funciona em redes internas"], answer:0, explain:"HTTPS é HTTP sobre TLS: cifra a conexão e autentica o servidor, usando a porta 443. O HTTP usa a porta 80 sem cifra. E-mail usa SMTP/POP3/IMAP, e HTTPS funciona na internet."},
  {q:"A extensão padrão de arquivos do editor de textos Writer, do LibreOffice, é:", options:[".docx",".ods",".odt",".odp"], answer:2, explain:".odt (OpenDocument Text) é o formato padrão do Writer. .docx é do Word, .ods é planilha do Calc e .odp é apresentação do Impress."}
]} });

window.TOPICS.push({ id:"judiciaria", name:"Fórum da Paraíba", color:"#c9a14a", npcs:[
  {name:"Desembargadora Estrutura", lines:[
    "O TJPB é o órgão de 2º grau da Justiça estadual: Tribunal Pleno, Câmaras, Presidência e Corregedoria.",
    "Desembargadores julgam em 2º grau. Juízes de direito atuam nas comarcas, o 1º grau.",
    "A Corregedoria-Geral da Justiça fiscaliza e orienta os serviços judiciais de 1º grau.",
    "Juizados Especiais julgam causas de menor complexidade, com oralidade e informalidade."
  ]},
  {name:"Doutor Competência", lines:[
    "Competência é a medida da jurisdição: define qual juízo pode julgar cada causa.",
    "Absoluta: matéria, pessoa e função. Não prorroga e o juiz a conhece de ofício.",
    "Relativa: território e valor da causa. Se o réu não alegar na contestação, prorroga.",
    "Foro comum do réu: o domicílio dele. Conexão e continência permitem reunir ações."
  ]},
  {name:"Escrivão Prazo", lines:[
    "Partes: autor e réu. Terceiros podem intervir (assistente, denunciado, amicus curiae).",
    "Citação chama o réu ao processo. Intimação dá ciência de ato ou decisão a partes e outros.",
    "No CPC, prazos em dias contam apenas dias úteis. Exclui-se o dia do começo e inclui-se o do fim.",
    "Contestação: 15 dias úteis. Fazenda Pública, MP e Defensoria têm prazo em dobro, em regra."
  ]}
], boss:{name:"Juiz Prazo Final", intro:"Silêncio no tribunal! Prove que conhece a ordem do processo.", questions:[
  {q:"A respeito da competência no CPC, é correto afirmar que a incompetência absoluta:", options:["só pode ser alegada na contestação, sob pena de preclusão","pode ser alegada em qualquer tempo e grau de jurisdição e conhecida de ofício","é prorrogada se as partes nada disserem","trata apenas do território e do valor da causa"], answer:1, explain:"A competência absoluta (matéria, pessoa, função) é de interesse público: pode ser reconhecida de ofício e alegada a qualquer tempo. A relativa é que se prorroga e depende de alegação do réu."},
  {q:"Em regra, o prazo para o réu apresentar contestação no procedimento comum é de:", options:["5 dias corridos","10 dias úteis","15 dias úteis","30 dias corridos"], answer:2, explain:"No CPC, a contestação é oferecida em 15 dias úteis (art. 335), contados em regra da audiência de conciliação ou, sem ela, da forma do art. 231. Prazos em dias contam só dias úteis."},
  {q:"O ato pelo qual o réu é chamado a integrar a relação processual e se defender denomina-se:", options:["citação","intimação","notificação extrajudicial","sentença"], answer:0, explain:"Citação convoca o réu, o executado ou o interessado para se defender. Intimação dá ciência de atos e decisões no curso do processo. Sentença é o pronunciamento que põe fim à fase cognitiva."},
  {q:"É exemplo de competência RELATIVA, que se prorroga se o réu não a alegar em preliminar de contestação:", options:["matéria da causa","função do juízo","pessoa envolvida na causa","território"], answer:3, explain:"Território (e valor da causa) são critérios de competência relativa. Matéria, pessoa e função geram competência absoluta, improrrogável e conhecida de ofício."},
  {q:"A parte foi intimada na segunda-feira, dia 10, para se manifestar em 5 dias úteis, sem feriados. A contagem começa no dia útil seguinte. O prazo termina em:", options:["sexta-feira, dia 14","segunda-feira, dia 17","terça-feira, dia 18","sábado, dia 15"], answer:1, explain:"Exclui-se o dia 10. Dias úteis contados: ter 11, qua 12, qui 13, sex 14, seg 17. O prazo vence na segunda, dia 17. Sábado não é útil, e a terça 18 conta um dia a mais."},
  {q:"Em termos gerais, a Corregedoria-Geral da Justiça do TJPB tem a função de:", options:["julgar recursos de apelação em 2º grau","elaborar as leis estaduais sobre o Judiciário","fiscalizar, orientar e disciplinar os serviços judiciais e extrajudiciais","representar a Fazenda Pública em juízo"], answer:2, explain:"A Corregedoria faz correição, fiscalização e orientação dos serviços de 1º grau e das serventias extrajudiciais. Apelações cabem às Câmaras; leis, à Assembleia; representar a Fazenda, à Procuradoria."}
]} });

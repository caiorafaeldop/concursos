window.TOPICS = window.TOPICS || [];
window.TOPICS.push({ id:"portugues", name:"Casa do Português", color:"#e8645a", npcs:[
  {name:"Dona Crase", lines:[
    "Crase = preposição A + artigo A. Fui à praia (ir a + a praia). Teste: troque por voltar: 'voltei DA praia' pede crase.",
    "Sem crase antes de verbo, pronome pessoal ou palavra masculina: 'Começou a chover', 'Falei a ela', 'Andou a pé'.",
    "Casa sem adjunto: sem crase (voltei a casa). Com adjunto: crase (voltei à casa dos pais).",
    "Locuções femininas levam crase: à noite, às vezes, às pressas. Expressões com palavras repetidas não: frente a frente."
  ]},
  {name:"Mestre Concordância", lines:[
    "Haver com sentido de existir é impessoal: 'Houve problemas', 'Deve haver dúvidas'. Nunca 'Houveram'.",
    "Fazer e haver indicando tempo passado também: 'Faz dois anos', 'Há dez anos'. Jamais 'Fazem dois anos'.",
    "Sujeito posposto manda no verbo: 'Chegaram os documentos'. Pergunte ao verbo 'quem?' para achar o sujeito.",
    "Concordância nominal: anexo, obrigado, mesmo e próprio concordam com o nome: 'seguem anexas as cópias', 'ela mesma'."
  ]},
  {name:"Vovó Vírgula", lines:[
    "Não separe sujeito do verbo nem verbo do complemento: 'Os servidores chegaram cedo' não tem vírgula após 'servidores'.",
    "Use vírgula em aposto, vocativo, adjunto adverbial deslocado e oração explicativa: 'O juiz, que é justo, decidiu.'",
    "Oração restritiva não leva vírgula: 'Os servidores que faltaram serão punidos' (só alguns). Com vírgula, seriam todos.",
    "Interpretação: atenção a 'embora' (concessão), 'porém' (oposição), 'logo' (conclusão) e a 'sempre', 'nunca', 'apenas' nas opções."
  ]}
], boss:{name:"Prof. Gramático", intro:"Então você quer ser servidor do TJPB? Prove que domina o idioma de Camões! Seis questões, sem vírgula fora do lugar!", questions:[
  {q:"Assinale a alternativa em que o sinal indicativo de crase está empregado corretamente.", options:["Refiro-me à pessoas que trabalham aqui.","Ele começou a estudar à partir de segunda.","Fui à Paraíba visitar meus parentes.","Entregou o documento à ele."], answer:2, explain:"'Ir a' + 'a Paraíba' (o nome admite artigo) gera crase. Não há crase antes de palavra no plural sem artigo (A), de 'partir' (B, verbo) nem de pronome pessoal (D)."},
  {q:"Assinale a alternativa que apresenta concordância verbal correta, conforme a norma-padrão.", options:["Deve haver soluções para o problema.","Fazem dois anos que o servidor se aposentou.","Houveram muitas reclamações.","Existe muitos candidatos inscritos."], answer:0, explain:"'Haver' (existir) é impessoal, e o auxiliar 'deve' fica no singular. 'Fazem' (tempo) e 'Houveram' devem ficar no singular; 'Existe' deve concordar com 'candidatos': 'Existem'."},
  {q:"Em qual das frases a vírgula está empregada de modo INCORRETO?", options:["O juiz, que presidia a sessão, suspendeu o julgamento.","Os servidores, chegaram cedo ao fórum.","Amanhã, os prazos serão contados em dias úteis.","Chegando ao tribunal, o réu aguardou."], answer:1, explain:"Não se separa o sujeito ('Os servidores') do verbo ('chegaram') com vírgula. As demais usam vírgula para oração explicativa, adjunto adverbial deslocado e oração reduzida anteposta."},
  {q:"Leia: 'A morosidade da Justiça, embora criticada, decorre também do excesso de recursos previstos em lei.' Depreende-se do trecho que:", options:["A lentidão da Justiça decorre exclusivamente da falta de juízes.","Ninguém critica a morosidade da Justiça.","Os recursos previstos em lei não têm relação com a demora.","A demora tem mais de uma causa, entre elas a quantidade de recursos."], answer:3, explain:"'Também' indica que o excesso de recursos é uma causa entre outras. 'Embora criticada' mostra que a morosidade é criticada, o que torna B falsa. A e C contradizem o texto."},
  {q:"Assinale a alternativa em que a concordância nominal está correta.", options:["Ela mesmo resolveu o caso.","Seguem anexo as cópias do processo.","Seguem anexas as cópias do processo.","Obrigado, disse a servidora."], answer:2, explain:"'Anexo' é adjetivo e concorda com 'cópias': 'anexas'. Corrigindo as demais: 'Ela mesma' (A), 'Seguem anexas' (B) e 'Obrigada', dito por mulher (D)."},
  {q:"Em qual das frases o uso do acento indicativo de crase é OBRIGATÓRIO?", options:["Voltou a casa depois do expediente.","O processo foi enviado à Secretaria de Administração.","Refiro-me a Vossa Excelência.","Os réus ficaram frente a frente."], answer:1, explain:"'Enviado a' + 'a Secretaria' (feminino com artigo) gera crase. Em A, 'casa' sem adjunto não admite artigo; em C, pronome de tratamento não leva artigo; em D, expressão com palavras repetidas."}
]} });

window.TOPICS.push({ id:"constitucional", name:"Fórum Constitucional", color:"#4a90d9", npcs:[
  {name:"Guardião dos Direitos", lines:[
    "Art. 5º, caput: todos são iguais perante a lei; inviolável o direito à vida, liberdade, igualdade, segurança e propriedade.",
    "Casa é asilo inviolável (XI): só se entra sem consentimento em flagrante, desastre, para socorro ou, de dia, com ordem judicial.",
    "Inocência (LVII): ninguém é culpado antes do trânsito em julgado. Prisão só em flagrante ou por ordem escrita e fundamentada (LXI).",
    "HC: locomoção. HD: dados pessoais. MS: direito líquido e certo. MI: falta de norma. Ação popular: ato lesivo ao patrimônio público."
  ]},
  {name:"Sr. Federação", lines:[
    "Art. 1º, fundamentos: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e livre iniciativa, pluralismo político.",
    "Art. 18: União, Estados, DF e Municípios, todos autônomos. Territórios integram a União. A capital federal é Brasília.",
    "Art. 2º: Legislativo, Executivo e Judiciário, independentes e harmônicos entre si. Art. 60, §4º: cláusulas pétreas, como a forma federativa.",
    "Competências: art. 21 (material da União), 22 (legislativa privativa da União), 23 (comum) e 24 (legislativa concorrente)."
  ]},
  {name:"Juíza Magistra", lines:[
    "Art. 92 lista os órgãos: STF, CNJ, STJ, TST, TRFs e juízes federais, Justiças do Trabalho, Eleitoral, Militar e dos Estados e do DF.",
    "Art. 95, garantias dos juízes: vitaliciedade, inamovibilidade e irredutibilidade de subsídio. É vedada a atividade político-partidária.",
    "Art. 93, IX: julgamentos públicos e decisões fundamentadas, sob pena de nulidade. Art. 94: quinto constitucional (MP e advogados com mais de 10 anos).",
    "Art. 125: os Estados organizam sua Justiça; o TJ propõe a lei de organização judiciária. Art. 98: juizados especiais."
  ]}
], boss:{name:"Ministro Constituinte", intro:"A Constituição não perdoa quem a conhece pela metade. Responda à altura, candidato!", questions:[
  {q:"Nos termos do art. 5º da CF, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:", options:["por ordem de delegado de polícia, durante o dia.","em caso de flagrante delito ou desastre, para prestar socorro, ou, durante o dia, por determinação judicial.","por determinação judicial, a qualquer hora do dia ou da noite.","por requisição do Ministério Público, durante o dia."], answer:1, explain:"Art. 5º, XI: exceções são flagrante, desastre, socorro ou, durante o dia, ordem judicial. Delegado e MP não podem determinar o ingresso, e a ordem judicial só vale de dia."},
  {q:"Segundo o art. 5º, LVII, da CF, ninguém será considerado culpado até:", options:["a condenação em segunda instância.","o recebimento da denúncia.","o trânsito em julgado de sentença penal condenatória.","a decisão do tribunal do júri."], answer:2, explain:"É o princípio da presunção de inocência: a culpa só pode ser declarada com o trânsito em julgado de sentença penal condenatória. As demais fases não encerram o processo."},
  {q:"A ação constitucional cabível para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros de entidades governamentais ou de caráter público, é o:", options:["habeas data.","mandado de segurança.","mandado de injunção.","habeas corpus."], answer:0, explain:"Art. 5º, LXXII: habeas data. O MS protege direito líquido e certo, o MI supre falta de norma regulamentadora e o HC protege a liberdade de locomoção."},
  {q:"A organização político-administrativa da República Federativa do Brasil, conforme o art. 18 da CF, compreende:", options:["a União e os Estados, apenas.","a União, os Estados, os Municípios e os Territórios.","a União, os Estados e os Municípios, estando o DF subordinado à União.","a União, os Estados, o Distrito Federal e os Municípios, todos autônomos."], answer:3, explain:"Art. 18: União, Estados, DF e Municípios, todos autônomos. Os Territórios Federais, quando criados, integram a União (art. 18, §2º) e não são entes federativos."},
  {q:"De acordo com o art. 95, parágrafo único, da CF, aos juízes é vedado:", options:["exercer uma função de magistério.","dedicar-se à atividade político-partidária.","gozar de vitaliciedade após o estágio probatório.","ter subsídio irredutível."], answer:1, explain:"É vedada a atividade político-partidária. O exercício de um cargo ou função de magistério é permitido; vitaliciedade e irredutibilidade de subsídio são garantias (art. 95, I a III), não vedações."},
  {q:"O Supremo Tribunal Federal compõe-se de onze Ministros, que são escolhidos:", options:["entre cidadãos com mais de 35 e menos de 70 anos, de notável saber jurídico e reputação ilibada, nomeados pelo Presidente após aprovação por maioria absoluta do Senado.","entre magistrados de carreira com mais de 30 anos, eleitos pela Câmara dos Deputados por maioria simples.","entre cidadãos com mais de 30 e menos de 65 anos, nomeados pelo Presidente sem aprovação do Senado.","entre membros do STJ, por indicação do CNJ."], answer:0, explain:"Art. 101: mais de 35 e menos de 70 anos, notável saber jurídico e reputação ilibada, nomeação pelo Presidente após aprovação por maioria absoluta do Senado Federal. As demais fogem do texto."}
]} });

window.TOPICS.push({ id:"administrativo", name:"Repartição Administrativa", color:"#4caf7a", npcs:[
  {name:"Sr. Princípio", lines:[
    "LIMPE (art. 37, caput): Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Todos expressos na Constituição.",
    "Legalidade: o particular faz o que a lei não proíbe; o administrador só o que a lei permite. Impessoalidade: sem favoritismo.",
    "Art. 37, §6º: responsabilidade civil objetiva do Estado; o regresso contra o agente exige dolo ou culpa.",
    "Cargo efetivo exige concurso (art. 37, II). Estabilidade: 3 anos de efetivo exercício e avaliação especial de desempenho (art. 41)."
  ]},
  {name:"Escrivã Ato", lines:[
    "Requisitos do ato: Competência, Finalidade, Forma, Motivo e Objeto. Vícios de competência e forma, em regra, podem ser convalidados.",
    "Atributos: presunção de legitimidade, imperatividade, autoexecutoriedade (nem sempre presente) e tipicidade.",
    "Anulação: ilegalidade, ex tunc, Administração ou Judiciário. Revogação: conveniência e oportunidade, ex nunc, só a Administração.",
    "Súmula 473 do STF: a Administração anula seus atos ilegais e revoga os inoportunos. Lei 9.784/99, art. 54: decadência em 5 anos."
  ]},
  {name:"Pregoeiro Licitão", lines:[
    "Lei 14.133/21, art. 28, modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. Convite e tomada de preços saíram.",
    "Pregão: bens e serviços comuns, julgados por menor preço ou maior desconto. Não serve para serviços técnicos intelectuais.",
    "Contratação direta: dispensa (art. 75, hipóteses taxativas) e inexigibilidade (art. 74, quando a competição é inviável).",
    "Princípios do art. 5º incluem planejamento, transparência, segregação de funções, julgamento objetivo e vinculação ao edital."
  ]}
], boss:{name:"Doutor Administrador", intro:"Na administração pública, tudo precisa de fundamento legal. Mostre que você também precisa, candidato!", questions:[
  {q:"Segundo o art. 37, caput, da CF, a administração pública obedecerá aos princípios de:", options:["legalidade, finalidade, motivação, publicidade e eficiência.","legalidade, razoabilidade, moralidade, publicidade e economicidade.","legitimidade, impessoalidade, moralidade, transparência e eficiência.","legalidade, impessoalidade, moralidade, publicidade e eficiência."], answer:3, explain:"Os cinco princípios expressos no art. 37, caput (LIMPE) são legalidade, impessoalidade, moralidade, publicidade e eficiência. Razoabilidade, finalidade e motivação são princípios implícitos."},
  {q:"A respeito da revogação do ato administrativo, é correto afirmar que ela:", options:["se baseia em conveniência e oportunidade, produz efeitos ex nunc e é feita pela própria Administração.","decorre de ilegalidade, produz efeitos ex tunc e pode ser feita pelo Judiciário.","incide sobre atos vinculados, desde que o Judiciário a determine.","produz efeitos retroativos e atinge direitos adquiridos."], answer:0, explain:"Revogação é juízo de conveniência e oportunidade sobre ato válido, efeitos ex nunc, só pela Administração. A anulação decorre de ilegalidade, tem efeitos ex tunc e pode ser feita também pelo Judiciário."},
  {q:"O atributo do ato administrativo que permite à Administração executar suas decisões diretamente, sem prévia autorização judicial, é a:", options:["presunção de legitimidade.","imperatividade.","autoexecutoriedade.","tipicidade."], answer:2, explain:"Autoexecutoriedade é a execução direta pela Administração. Imperatividade é impor obrigações unilateralmente; presunção de legitimidade presume a conformidade com a lei; tipicidade exige previsão legal do ato."},
  {q:"Conforme o art. 37, §6º, da CF, as pessoas jurídicas de direito público respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros. Nesse caso:", options:["a responsabilidade é subjetiva e o regresso cabe só em caso de dolo.","a responsabilidade é objetiva, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.","a responsabilidade é objetiva e o agente não responde em nenhuma hipótese.","a responsabilidade depende sempre da prova de culpa do Estado."], answer:1, explain:"O art. 37, §6º, adota a responsabilidade objetiva do Estado, com direito de regresso contra o agente em caso de dolo ou culpa. A vítima não precisa provar culpa do Estado."},
  {q:"Nos termos da Lei nº 14.133/2021, são modalidades de licitação:", options:["pregão, concorrência, convite, concurso e leilão.","concorrência, tomada de preços, pregão e leilão.","pregão, concorrência, concurso, leilão e diálogo competitivo.","pregão, concorrência, concurso, convite e diálogo competitivo."], answer:2, explain:"O art. 28 da Lei 14.133/21 prevê pregão, concorrência, concurso, leilão e diálogo competitivo. Convite e tomada de preços constavam da Lei 8.666/93 e não foram mantidos."},
  {q:"De acordo com o art. 41 da CF, o servidor nomeado para cargo de provimento efetivo em virtude de concurso público adquire estabilidade:", options:["após 2 anos de efetivo exercício.","após 5 anos de efetivo exercício.","após 3 anos de efetivo exercício, mediante avaliação especial de desempenho.","após 3 anos, automaticamente, sem necessidade de avaliação."], answer:2, explain:"Art. 41, caput e §4º: são exigidos três anos de efetivo exercício e, como condição para a estabilidade, avaliação especial de desempenho por comissão instituída para essa finalidade."}
]} });

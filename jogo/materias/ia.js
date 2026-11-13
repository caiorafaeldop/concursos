window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['ia'] = {
  id: 'ia',
  name: 'Inteligência Artificial',
  npcs: [
    {
      name: 'Ada, a Tokenizadora',
      lines: [
        'IA não lê frases como gente: ela fatia o texto em tokens antes de fazer qualquer conta.',
        'Stop words saem na busca clássica, mas em LLMs palavras como "não" mudam tudo!',
        'Stemming corta o radical na marra; lematização acha a palavra real no dicionário.'
      ]
    },
    {
      name: 'Vetor, o Bibliotecário',
      lines: [
        'TF-IDF mede quanto uma palavra é frequente no texto e rara na coleção inteira.',
        'Embeddings transformam significado em coordenadas: ideias parecidas moram perto.',
        'No espaço vetorial, similaridade de cosseno perto de 1 indica textos muito próximos.'
      ]
    },
    {
      name: 'Turing do Tribunal',
      lines: [
        'Transformer usa autoatenção para processar todos os tokens em paralelo, não em fila.',
        'RAG injeta trechos recuperados no prompt sem alterar os pesos da rede neural.',
        'Temperatura 0 deixa o LLM mais determinístico; temperatura alta aumenta a criatividade.'
      ]
    }
  ],
  boss: {
    name: 'Prof. Vaswani (FGV)',
    intro: 'Aqui não basta decorar sigla de IA. Quero ver se você domina do token ao RAG!',
    questions: [
      {
        q: 'Um tribunal quer classificar petições por assunto usando TF-IDF. Sobre o componente IDF (Inverse Document Frequency), é correto afirmar que ele:',
        options: [
          'atribui peso maior a palavras que aparecem em quase todos os documentos da coleção.',
          'penaliza termos muito comuns em toda a coleção e valoriza termos mais raros e discriminantes.',
          'gera vetores densos capazes de identificar automaticamente sinônimos como "juiz" e "magistrado".',
          'substitui a etapa de tokenização ao converter frases inteiras em gráficos de atenção.',
          'mede a distância angular entre dois embeddings pré-treinados de mesma dimensão.'
        ],
        answer: 1,
        explain: 'IDF = log(N/df): quanto mais documentos têm o termo, menor o IDF. A(erro): comum ganha peso menor; C/E: são de embeddings/cosseno; D: tokenização vem antes.'
      },
      {
        q: 'No pré-processamento de PLN, um analista comparou stemming e lematização sobre a palavra "melhores". A diferença correta entre as técnicas é que:',
        options: [
          'o stemming sempre retorna uma palavra válida do dicionário, enquanto a lematização gera raízes truncadas.',
          'a lematização remove apenas pontuação e stop words, sem alterar flexões verbais ou nominais.',
          'o stemming aplica regras heurísticas de corte de sufixos, podendo gerar radicais não dicionarizados, enquanto a lematização busca a forma canônica (lema).',
          'ambas produzem exatamente a mesma saída em português, mudando apenas o consumo de memória RAM.',
          'a lematização é mais rápida porque ignora classe gramatical e contexto morfológico.'
        ],
        answer: 2,
        explain: 'Stemming corta sufixos na força (ex.: "melhor" ou raiz truncada); lematização reduz ao lema válido ("bom") usando morfologia/dicionário, sendo mais custosa.'
      },
      {
        q: 'Ao treinar um modelo de Machine Learning supervisionado para prever se um processo será deferido, observou-se acurácia de 99% no treino e 58% na validação. Esse comportamento caracteriza:',
        options: [
          'underfitting, pois o modelo tem viés alto e não aprendeu nem os padrões do treino.',
          'overfitting, pois o modelo memorizou ruídos do conjunto de treino e perdeu capacidade de generalização.',
          'aprendizado por reforço, pois o modelo maximizou a recompensa imediata na base histórica.',
          'alucinação generativa, típica de modelos de regressão linear sem camada de atenção.',
          'regularização excessiva, que impediu os pesos de se ajustarem aos dados de treinamento.'
        ],
        answer: 1,
        explain: 'Desempenho ótimo no treino e ruim na validação = overfitting (alta variância, decorou o treino). Underfitting erra nos dois; reforço usa agente/ambiente.'
      },
      {
        q: 'Na arquitetura Transformer, o mecanismo de autoatenção (Self-Attention) trouxe um avanço decisivo em relação às redes recorrentes (RNNs) porque permite:',
        options: [
          'processar os tokens de entrada sequencialmente, um após o outro, eliminando o uso de GPU.',
          'dispensar completamente a representação vetorial (embeddings) das palavras de entrada.',
          'relacionar cada token a todos os outros da sequência em paralelo, capturando dependências de longo alcance.',
          'garantir que a saída do modelo nunca contenha alucinações factuais sem necessidade de contexto.',
          'reduzir automaticamente o tamanho do modelo para caber em tabelas relacionais SQL.'
        ],
        answer: 2,
        explain: 'Self-Attention calcula pesos entre todos os pares de tokens simultaneamente (paralelismo + contexto longo). RNN é sequencial; embeddings continuam essenciais.'
      },
      {
        q: 'Um desenvolvedor usa a API de Chat Completions da OpenAI para criar um assistente jurídico multi-turno. Para que o modelo lembre do que o usuário disse na mensagem anterior, a aplicação precisa:',
        options: [
          'ativar o parâmetro fine_tune=true em cada requisição HTTP enviada ao endpoint.',
          'enviar novamente o histórico relevante de mensagens na lista messages da requisição, pois a API é stateless por padrão.',
          'configurar temperature=1.0, já que temperaturas altas armazenam automaticamente a sessão no servidor.',
          'substituir o prompt de sistema por stop words para liberar a janela de contexto.',
          'converter a chave de API em vetor de embedding antes de cada chamada REST.'
        ],
        answer: 1,
        explain: 'A API Chat Completions é stateless: o cliente reenvia o histórico (ou resumo) em messages. Temperatura controla aleatoriedade; fine-tune não é parâmetro de chat.'
      },
      {
        q: 'Em uma arquitetura RAG (Retrieval-Augmented Generation) aplicada a normas internas do TJPB, qual é a sequência correta na etapa de consulta do usuário?',
        options: [
          'Treinar os pesos do LLM com os PDFs -> gerar resposta -> calcular TF-IDF -> salvar no banco vetorial.',
          'Converter a pergunta em embedding -> buscar trechos similares no banco vetorial -> injetar os trechos no prompt -> LLM gera a resposta.',
          'Aplicar stemming na pergunta -> executar fine-tuning em tempo real -> descartar o contexto -> responder.',
          'Enviar todos os PDFs do tribunal inteiros no system prompt sem chunking nem busca prévia.',
          'Usar um modelo apenas encoder para gerar texto livre e depois indexar a resposta como novo documento.'
        ],
        answer: 1,
        explain: 'RAG em consulta: embedding da query -> busca top-k no vector DB -> prompt aumentado com contexto -> geração pelo LLM. Não altera pesos (não há fine-tuning).'
      },
      {
        q: 'Sobre técnicas de Engenharia de Prompt em LLMs, assinale a associação correta:',
        options: [
          'Zero-shot: fornecer dezenas de exemplos rotulados dentro do prompt antes da pergunta.',
          'Few-shot: pedir ao modelo que responda sem nenhum exemplo, confiando apenas no pré-treino.',
          'Chain-of-Thought (CoT): induzir o modelo a explicitar etapas intermediárias de raciocínio antes da resposta final.',
          'System prompt: parâmetro numérico que define o máximo de tokens da resposta gerada.',
          'Top-p = 0: força o modelo a escolher sempre o token menos provável do vocabulário.'
        ],
        answer: 2,
        explain: 'CoT estimula raciocínio passo a passo. Zero-shot = 0 exemplos; Few-shot = alguns exemplos; System prompt = instrução de papel/regras; max_tokens limita tamanho.'
      },
      {
        q: 'O time de TI precisa escolher entre RAG e Fine-Tuning para um chatbot que responde com base em portarias publicadas toda semana. A melhor justificativa técnica para priorizar RAG é que ele:',
        options: [
          'elimina a necessidade de qualquer LLM, respondendo apenas com busca exata por palavras-chave.',
          'permite atualizar o conhecimento via reindexação de documentos e citar fontes, sem retreinar o modelo.',
          'modifica permanentemente os parâmetros internos da rede neural a cada consulta do usuário.',
          'funciona exclusivamente com modelos locais da Hugging Face, sendo incompatível com APIs comerciais.',
          'garante custo zero de tokens porque dispensa o envio de contexto na janela do modelo.'
        ],
        answer: 1,
        explain: 'RAG atualiza conhecimento trocando/indexando documentos no banco vetorial e traz fontes no prompt, sem retreinar pesos. Ele envia chunks no prompt (consome tokens).'
      }
    ]
  },
  match: {
    title: 'Ligue o conceito de IA',
    pairs: [
      ['Tokenização', 'Fatia o texto em unidades menores antes do modelo processar'],
      ['Lematização', 'Reduz a palavra à sua forma canônica válida no dicionário'],
      ['TF-IDF', 'Equilibra frequência local no texto com raridade na coleção'],
      ['Embedding', 'Vetor numérico denso que representa significado semântico'],
      ['Self-Attention', 'Calcula relação entre todos os tokens da frase em paralelo'],
      ['RAG', 'Busca trechos externos e injeta no prompt sem retreinar pesos']
    ]
  },
  quick: [
    {
      q: 'Aprendizado com dados rotulados (entrada + gabarito) chama-se:',
      options: ['Supervisionado', 'Não supervisionado', 'Por reforço', 'Autoassociativo'],
      answer: 0,
      explain: 'Supervisionado treina com pares (X, y) rotulados, para classificação ou regressão.'
    },
    {
      q: 'Prever um valor numérico contínuo (ex.: valor da causa) é tarefa de:',
      options: ['Classificação', 'Regressão', 'Clustering', 'Tokenização'],
      answer: 1,
      explain: 'Regressão prevê número contínuo; classificação prevê categorias discretas.'
    },
    {
      q: 'Técnica que corta sufixos por regra e pode gerar palavra inexistente:',
      options: ['Lematização', 'Stemming', 'Chunking', 'Embedding'],
      answer: 1,
      explain: 'Stemming trunca o radical por heurística; lematização devolve o lema válido.'
    },
    {
      q: 'Métrica comum para comparar a direção de dois vetores de embedding:',
      options: ['Cosseno', 'F1-Score', 'Perplexidade', 'Entropia'],
      answer: 0,
      explain: 'Similaridade de cosseno mede o ângulo entre vetores (1 = mesma direção).'
    },
    {
      q: 'Parâmetro de LLM próximo de 0 torna a geração mais:',
      options: ['Aleatória', 'Determinística', 'Longa', 'Multilíngue'],
      answer: 1,
      explain: 'Temperatura baixa concentra probabilidade nos tokens mais prováveis.'
    },
    {
      q: 'Framework popular para encadear prompts, LLMs, ferramentas e RAG:',
      options: ['LangChain', 'Hibernate', 'Terraform', 'Flyway'],
      answer: 0,
      explain: 'LangChain orquestra chains, retrievers, parsers, memória e agentes.'
    }
  ],
  study: {
    title: 'Biblioteca de Inteligência Artificial',
    chapters: [
      {
        title: 'Fundamentos de IA e Machine Learning',
        pages: [
          '• IA é o guarda-chuva geral: sistemas que simulam capacidades humanas.\n• Machine Learning (ML): em vez de programar regras fixas (if/else), o sistema aprende padrões a partir de dados.\n• Deep Learning (DL): subcampo de ML com redes neurais profundas de várias camadas.\n• IA Generativa: modelos (como LLMs) que criam texto, imagem ou código novo, em vez de só classificar.',
          '• Supervisionado: dados com gabarito (rótulo). Classificação prevê categoria (deferido/indeferido); Regressão prevê número contínuo (valor, prazo).\n• Não supervisionado: sem rótulos; agrupa por semelhança (clustering) ou reduz dimensões.\n• Por reforço: agente age no ambiente e aprende por tentativa, erro e recompensa.',
          '• Overfitting: decorou o treino (acerta muito no treino, erra na validação/prova).\n• Underfitting: modelo simples demais; erra no treino e no teste.\n• Boa generalização: acerta bem em dados inéditos.\n• Discriminativa (decide fronteira/classe) × Generativa (aprende distribuição e gera novos exemplos).'
        ],
        tip: 'Decorou treino e falhou no teste = Overfitting. Errou já no treino = Underfitting.',
        quiz: [
          {
            q: 'Um sistema bancário agrupa clientes sem rótulos prévios para descobrir perfis de consumo semelhantes. Essa tarefa é um exemplo de:',
            options: [
              'aprendizado supervisionado de regressão linear.',
              'aprendizado não supervisionado de agrupamento (clustering).',
              'aprendizado por reforço com recompensa tardia.',
              'engenharia de prompt few-shot com delimitadores.',
              'lematização morfológica baseada em dicionário.'
            ],
            answer: 1,
            explain: 'Sem rótulos + agrupar por semelhança = aprendizado não supervisionado (clustering). Regressão é supervisionada.'
          },
          {
            q: 'Sobre a relação hierárquica entre os conceitos de IA, a alternativa correta é:',
            options: [
              'Machine Learning é um subcampo da IA Generativa, que contém a IA simbólica.',
              'Deep Learning dispensa redes neurais e antecede historicamente o Machine Learning.',
              'IA Generativa usa modelos de Deep Learning (subcampo de ML, que é subcampo de IA) para criar novos conteúdos.',
              'IA discriminativa e IA generativa são sinônimos perfeitos para regressão logística.',
              'Overfitting ocorre apenas quando o conjunto de treinamento possui 100% de acurácia no teste.'
            ],
            answer: 2,
            explain: 'Hierarquia: IA > Machine Learning > Deep Learning > IA Generativa (LLMs). Discriminativa classifica; generativa cria.'
          }
        ]
      },
      {
        title: 'PLN: Tokenização, Stemming, Lematização e Stop Words',
        pages: [
          '• Computador não lê texto bruto: antes de tudo, o PLN fatia a frase em unidades menores chamadas tokens.\n• Tokenização clássica separa por palavras/pontuação.\n• Tokenização moderna (BPE, WordPiece) usada em LLMs quebra em subpalavras: lida bem com palavras raras, erros de digitação e prefixos/sufixos.',
          '• Stop words: palavras muito frequentes e de baixo valor temático isolado (ex.: "de", "a", "o", "para", "que").\n• Em buscas clássicas e TF-IDF, removê-las reduz ruído e espaço.\n• Cuidado: em análise de sentimento, negações ("não", "nunca") e em LLMs, remover stop words pode destruir o sentido da frase!',
          '• Stemming: corta prefixos/sufixos com regras fixas (algoritmo rápido). Pode gerar raiz que não existe no dicionário (ex.: "computação" -> "comput").\n• Lematização: usa vocabulário e análise morfológica para achar o lema real (ex.: "fomos" -> "ir", "melhores" -> "bom"). Mais precisa e mais lenta.'
        ],
        tip: 'Stemming = facão rápido (pode truncar); Lematização = dicionário (palavra real, mais lenta).',
        quiz: [
          {
            q: 'Em um sistema de análise de sentimentos de avaliações de usuários, a remoção indiscriminada de todas as stop words pode prejudicar o modelo principalmente porque:',
            options: [
              'aumenta o número de dimensões do vocabulário de forma exponencial.',
              'pode eliminar palavras funcionais como "não" ou "sem", invertendo a polaridade da frase.',
              'impede que o algoritmo de stemming funcione em substantivos próprios.',
              'transforma automaticamente a tarefa de classificação em regressão contínua.',
              'obriga o modelo a executar fine-tuning a cada nova frase analisada.'
            ],
            answer: 1,
            explain: 'Negadores ("não", "nunca", "sem") costumam estar em listas padrão de stop words e mudam totalmente o sentido em sentimento/PLN.'
          },
          {
            q: 'Qual técnica de tokenização é padrão nos LLMs modernos por equilibrar tamanho de vocabulário e tratamento de palavras desconhecidas?',
            options: [
              'Remoção total de vogais antes da indexação.',
              'Subword tokenization (como BPE ou WordPiece), que divide termos raros em pedaços frequentes.',
              'Conversão direta do arquivo PDF em áudio antes da leitura.',
              'Stemming agressivo aplicado apenas à última palavra do parágrafo.',
              'Substituição de todas as palavras por um único token global.'
            ],
            answer: 1,
            explain: 'Subpalavras (BPE/WordPiece) evitam vocabulário gigante e reduzem tokens desconhecidos (<UNK>), mantendo pedaços com significado.'
          }
        ]
      },
      {
        title: 'TF-IDF, Embeddings e Busca Vetorial',
        pages: [
          '• Bag of Words conta quantas vezes cada palavra aparece, mas palavras comuns ("processo") dominam.\n• TF-IDF corrige isso: TF (Term Frequency) mede frequência no documento; IDF (Inverse Document Frequency) dá peso alto a termos raros na coleção e baixo a termos que aparecem em todo lugar.',
          '• Limitação do TF-IDF: gera vetores esparsos (enormes e cheios de zeros) e não entende sinônimos ("contrato" e "acordo" têm distância máxima).\n• Embeddings resolvem isso: são vetores densos (ex.: 768 ou 1536 números) treinados para que textos de significado parecido fiquem próximos no espaço.',
          '• Similaridade de cosseno mede o ângulo entre dois vetores: 1 = mesma direção (muito parecidos), 0 = independentes, -1 = opostos.\n• Bancos vetoriais (ex.: pgvector, Qdrant, Milvus) indexam embeddings (ex.: HNSW) para busca semântica rápida por vizinhos mais próximos.'
        ],
        tip: 'TF-IDF = contagem esparsa (palavra exata). Embedding = vetor denso (significado/sinônimos).',
        quiz: [
          {
            q: 'Um sistema de busca jurídica precisa encontrar "decisão liminar" mesmo quando o usuário digita "tutela de urgência". A abordagem mais adequada é:',
            options: [
              'busca exata com LIKE no SQL, pois captura sinônimos semântica e contextualmente.',
              'TF-IDF puro sem expansão de consulta, por ser denso e sensível à ordem das palavras.',
              'busca semântica com embeddings e similaridade de cosseno em banco vetorial.',
              'stemming isolado, pois reduz "liminar" e "urgência" ao mesmo radical.',
              'remoção de stop words seguida de ordenação alfabética simples.'
            ],
            answer: 2,
            explain: 'Sinônimos e paráfrases exigem embeddings (representação semântica densa) + similaridade de cosseno. LIKE e TF-IDF dependem de coincidência lexical.'
          },
          {
            q: 'Sobre a diferença estrutural entre vetores TF-IDF e embeddings densos, é correto afirmar que:',
            options: [
              'vetores TF-IDF têm dimensão igual ao tamanho do vocabulário e são esparsos; embeddings têm dimensão fixa menor e valores densos.',
              'embeddings possuem um componente para cada palavra do dicionário, quase todos iguais a zero.',
              'TF-IDF sempre preserva a ordem exata das palavras na sentença original.',
              'a similaridade de cosseno só pode ser calculada em vetores esparsos de inteiros.',
              'embeddings não podem ser armazenados em bancos de dados que suportam índices vetoriais.'
            ],
            answer: 0,
            explain: 'TF-IDF tem dimensão = |vocabulário| (muitos zeros = esparso). Embeddings têm dimensão fixa compacta (ex.: 384, 1536) com valores contínuos (densos).'
          }
        ]
      },
      {
        title: 'Transformer, LLMs e Engenharia de Prompt',
        pages: [
          '• Antes do Transformer, RNNs liam uma palavra por vez (lento e esquecia o início de textos longos).\n• O Transformer usa Self-Attention (autoatenção): cada token olha para todos os outros em paralelo e calcula pesos de relevância + Positional Encoding para saber a ordem.',
          '• Tipos: Encoder-only (BERT: ótimo para classificar/extrair); Decoder-only (GPT/Llama: gera texto token a token); Encoder-Decoder (T5: tradução/resumo).\n• Parâmetros: Temperatura (0 = determinístico, alto = criativo), Top-p (nucleus sampling), Janela de contexto (limite de entrada+saída). Alucinação = inventar fato com confiança.',
          '• Engenharia de Prompt: System prompt define papel e regras; User prompt traz a tarefa.\n• Zero-shot (sem exemplo) × Few-shot (dá 2–5 exemplos do padrão).\n• Chain-of-Thought (CoT): pede raciocínio passo a passo.\n• Delimitadores (""", ###, XML) separam instrução de dado e reduzem risco de prompt injection.'
        ],
        tip: 'Transformer = paralelo + Self-Attention. Temperatura 0 = foco/precisão; CoT = passo a passo.',
        quiz: [
          {
            q: 'Ao usar um LLM para extrair dados estruturados (JSON) de sentenças judiciais, o engenheiro reduziu temperature para 0 e incluiu 3 exemplos de entrada e saída no prompt. Ele aplicou, respectivamente:',
            options: [
              'aumento de aleatoriedade e treinamento por reforço.',
              'geração mais determinística e técnica de prompt few-shot.',
              'redução da janela de contexto e arquitetura encoder-only.',
              'fine-tuning de pesos e técnica zero-shot.',
              'stemming de saída e busca vetorial HNSW.'
            ],
            answer: 1,
            explain: 'Temperature 0 prioriza tokens mais prováveis (determinístico); fornecer 3 exemplos no prompt é few-shot prompting.'
          },
          {
            q: 'Qual mecanismo da arquitetura Transformer permite que o modelo saiba que, na frase "O juiz leu a peça porque ela estava clara", o pronome "ela" se refere à "peça"?',
            options: [
              'Remoção de stop words antes da camada de saída.',
              'Self-Attention (autoatenção), que pondera relações entre todos os tokens da sequência.',
              'Compressão TF-IDF aplicada exclusivamente ao último token.',
              'Execução sequencial estrita sem paralelismo entre palavras.',
              'Substituição dos embeddings por chaves primárias relacionais.'
            ],
            answer: 1,
            explain: 'Self-Attention calcula afinidade entre cada par de tokens, ligando "ela" a "peça" mesmo à distância e em paralelo.'
          }
        ]
      },
      {
        title: 'APIs de IA, LangChain e RAG',
        pages: [
          '• APIs de IA: OpenAI (modelos proprietários via HTTPS, cobrança por token de entrada e saída, API stateless — você reenvia o histórico).\n• Hugging Face: ecossistema aberto (Hub de modelos/datasets, biblioteca transformers, Inference API ou execução local com pesos abertos).',
          '• LangChain: framework para orquestrar aplicações com LLMs. Liga prompts (PromptTemplate), modelos, parsers de saída, memória de conversa, retrievers e Tools/Agentes (onde o LLM decide qual ferramenta chamar).',
          '• RAG (Retrieval-Augmented Generation): 1) Ingestão: documentos -> chunks -> embeddings -> banco vetorial. 2) Consulta: pergunta -> embedding -> busca top-k -> injeta trechos no prompt -> LLM responde citando a base.\n• RAG atualiza conhecimento sem retreinar pesos; Fine-tuning ajusta estilo/comportamento nos pesos.'
        ],
        tip: 'Precisa de dado atualizado e fonte citável? RAG! Quer ensinar estilo/formato nos pesos? Fine-tuning.',
        quiz: [
          {
            q: 'Uma equipe quer que um assistente responda dúvidas sobre acórdãos publicados hoje de manhã, exibindo o trecho-fonte. A afirmação correta sobre RAG nesse cenário é que:',
            options: [
              'o RAG exige retreinar todos os pesos do LLM a cada novo acórdão publicado.',
              'o RAG indexa os acórdãos em chunks/embeddings e os injeta no contexto do prompt na hora da consulta.',
              'o RAG funciona apenas se os acórdãos forem convertidos em stop words.',
              'a API da OpenAI impede o uso de RAG por manter estado automático dos PDFs do cliente.',
              'o LangChain substitui o banco vetorial ao armazenar embeddings dentro do código-fonte Java.'
            ],
            answer: 1,
            explain: 'RAG faz ingestão em chunks + embeddings no vector DB e recupera os trechos relevantes para o prompt em tempo de consulta, sem retreinar o LLM.'
          },
          {
            q: 'Qual é uma vantagem típica do ecossistema Hugging Face em comparação ao uso exclusivo de APIs proprietárias fechadas?',
            options: [
              'Impossibilidade de executar modelos localmente em infraestrutura própria.',
              'Acesso a modelos open-weight que podem ser auditados, hospedados on-premises e integrados via biblioteca transformers.',
              'Eliminação automática da janela de contexto e do uso de tokens.',
              'Garantia contratual de que nenhum modelo precisa de GPU para treinamento.',
              'Substituição completa de bancos relacionais por tabelas TF-IDF.'
            ],
            answer: 1,
            explain: 'Hugging Face centraliza modelos open-weight/open-source, permitindo hospedagem própria (privacidade/LGPD) e customização via transformers.'
          }
        ]
      }
    ]
  }
};

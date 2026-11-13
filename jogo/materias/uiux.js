window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['uiux'] = {
  id: 'uiux',
  name: 'UI/UX e Acessibilidade',
  npcs: [
    {
      name: 'Clara Fluxo',
      lines: [
        'UI é a interface visível (botões, cores, tipografia); UX é a experiência inteira do usuário antes, durante e depois do uso.',
        'Wireframe é o esqueleto em baixa fidelidade; protótipo é clicável e simula a navegação antes de escrever código.',
        'Mobile-first começa desenhando e estilizando para telas pequenas e usa min-width para crescer em telas maiores.',
        'Design System reúne tokens (cores, fontes, espaçamentos), componentes reutilizáveis e regras de uso num só lugar.'
      ]
    },
    {
      name: 'Mestre POUR',
      lines: [
        'WCAG se apoia em 4 princípios (POUR): Perceptível, Operável, Compreensível e Robusto.',
        'Nível A é o básico; AA é o padrão de referência em leis e portais públicos; AAA é o nível máximo.',
        'No nível AA da WCAG, o contraste mínimo é 4,5:1 para texto normal e 3:1 para texto grande.',
        'O eMAG é o modelo brasileiro de acessibilidade em governo eletrônico, alinhado à WCAG para portais públicos.'
      ]
    },
    {
      name: 'Dona Semântica',
      lines: [
        'Primeira regra da ARIA: se existe tag HTML5 nativa (como <button> ou <nav>), use-a em vez de <div> com role.',
        'ARIA muda o que o leitor de tela anuncia na árvore de acessibilidade, mas não cria comportamento de teclado sozinha.',
        'Use tabindex="0" para incluir na ordem natural do Tab e tabindex="-1" apenas para foco via script.',
        'Validador automático não basta: teste com teclado (Tab/Enter/Esc) e leitor de tela para achar barreiras reais.'
      ]
    }
  ],
  boss: {
    name: 'Prof.ª Valéria WCAG',
    intro: 'Interface bonita que barra usuário reprova na prova e na vida! Encare 8 questões no estilo FGV.',
    questions: [
      {
        q: 'Durante a fase inicial de concepção de um sistema do tribunal, a equipe precisa validar rapidamente a hierarquia de informação e o posicionamento dos blocos na tela, sem distrair os avaliadores com paleta de cores, tipografia final ou interações clicáveis. O artefato mais indicado é o:',
        options: [
          'Protótipo de alta fidelidade',
          'Wireframe de baixa fidelidade',
          'Design Token compilado',
          'Guia de estilo tipográfico',
          'Teste A/B em produção'
        ],
        answer: 1,
        explain: 'Wireframe é o esqueleto estrutural (baixa fidelidade), focado em layout e hierarquia sem cores finais ou interatividade. Protótipo simula cliques/fluxos; tokens e guia de estilo tratam de aparência.'
      },
      {
        q: 'Uma equipe adota a estratégia Mobile-First no CSS de um portal responsivo. Ao escrever media queries para adaptar um layout de 1 coluna (celular) para 3 colunas (desktop), a abordagem coerente com Mobile-First utiliza:',
        options: [
          'Estilos base para desktop e media queries com max-width decrescentes',
          'Estilos base para telas pequenas e media queries com min-width crescentes',
          'Largura fixa em pixels (960px) com zoom automático no celular',
          'Redirecionamento obrigatório para subdomínio m.site.gov.br',
          'Ocultação de conteúdo via display: none para caber no celular'
        ],
        answer: 1,
        explain: 'Mobile-First aplica estilos base ao menor viewport e usa min-width (progressive enhancement) para expandir em telas maiores. max-width decrescente caracteriza Desktop-First.'
      },
      {
        q: 'Ao inspecionar um aplicativo, um analista nota que um botão crítico não possui texto alternativo nem rótulo programático, impedindo que usuários cegos percebam sua função pelo leitor de tela. Segundo os princípios POUR da WCAG, essa falha viola diretamente o princípio:',
        options: [
          'Operável, pois trata apenas do tempo de sessão',
          'Robusto, pois impede a troca de servidor HTTP',
          'Perceptível, pois a informação não é apresentada de forma que o usuário possa percebê-la',
          'Compreensível, pois altera o idioma da página sem aviso',
          'Portável, pois exige sistema operacional específico'
        ],
        answer: 2,
        explain: 'Perceptível (POUR) exige que informações e componentes da UI sejam apresentáveis aos usuários de modos que eles possam perceber (ex.: texto alternativo para imagens/ícones). Portável não é princípio POUR.'
      },
      {
        q: 'Em relação aos níveis de conformidade da WCAG (A, AA e AAA) e ao contraste visual de textos, assinale a afirmativa correta:',
        options: [
          'O nível A é o mais rigoroso e exige contraste mínimo de 7:1 para todo texto',
          'O nível AA é amplamente adotado como referência regulatória e exige contraste mínimo de 4,5:1 para texto normal',
          'O nível AAA é obrigatório em 100% das páginas governamentais segundo o W3C',
          'Os níveis A, AA e AAA são independentes: cumprir AA não exige cumprir A',
          'Texto grande no nível AA exige contraste mínimo de 10:1'
        ],
        answer: 1,
        explain: 'Os níveis são cumulativos (AA inclui A; AAA inclui A e AA). No nível AA, o contraste mínimo é 4,5:1 para texto normal e 3:1 para texto grande (7:1 é exigido no AAA para texto normal).'
      },
      {
        q: 'A WCAG 2.2 ampliou a versão 2.1 com novos critérios voltados principalmente a usuários com deficiência cognitiva, baixa visão e limitações motoras. Entre as preocupações introduzidas na WCAG 2.2 está:',
        options: [
          'Exigir uso exclusivo de tabelas HTML para diagramação de formulários',
          'Proibir qualquer animação CSS mesmo com prefers-reduced-motion',
          'Garantir que o elemento focado pelo teclado não fique totalmente oculto por barras fixas e oferecer tamanho mínimo adequado de alvo de toque',
          'Substituir os princípios POUR por três pilares: Rapidez, Estética e SEO',
          'Tornar opcional o suporte à navegação por teclado no nível A'
        ],
        answer: 2,
        explain: 'A WCAG 2.2 manteve POUR e trouxe critérios como foco não obscurecido (Focus Not Obscured), tamanho mínimo de alvo (Target Size), entrada redundante e autenticação acessível.'
      },
      {
        q: 'Sobre o eMAG (Modelo de Acessibilidade em Governo Eletrônico) e o processo de avaliação de acessibilidade, é correto afirmar que:',
        options: [
          'Substitui o HTML5 por formato proprietário do governo federal',
          'Adapta as recomendações internacionais da WCAG à realidade dos portais públicos brasileiros e combina verificação automática com avaliação humana',
          'Garante 100% de acessibilidade apenas rodando um validador automático de código',
          'Proíbe o uso de atalhos de teclado e links para pular direto ao conteúdo principal',
          'Aplica-se exclusivamente a aplicativos nativos iOS e Android, ignorando a web'
        ],
        answer: 1,
        explain: 'O eMAG é o padrão brasileiro para portais públicos web alinhado à WCAG. Validadores automáticos (como ASES/axe) ajudam, mas não avaliam clareza semântica nem fluxo real — exigem teste humano.'
      },
      {
        q: 'Um desenvolvedor substituiu um <button type="button"> por <div class="btn" onclick="salvar()">Salvar</div>. Ao testar apenas com o teclado, o usuário não consegue alcançar nem acionar o controle com Tab e Enter. A causa técnica e a melhor correção são, respectivamente:',
        options: [
          'Falta de aria-live; adicionar role="alert" na div',
          'Div não é focável nem possui semântica/eventos nativos de botão; substituir por <button type="button"> nativo',
          'Falta de CSS grid; trocar onclick por onhover',
          'Uso de HTML5 semântico em excesso; adicionar tabindex="5"',
          'Erro no leitor de tela; ocultar a div com aria-hidden="true"'
        ],
        answer: 1,
        explain: 'Pela Primeira Regra da ARIA, prefira HTML nativo: <button> já entra na ordem do Tab, expõe role="button" e responde a Enter/Espaço automaticamente. <div> não tem foco nem ação de teclado nativa.'
      },
      {
        q: 'Em um modal acessível, um aviso dinâmico de "Dados salvos com sucesso" aparece na tela sem recarregar a página e precisa ser anunciado pelo leitor de tela quando este terminar a leitura atual, sem interromper abruptamente o usuário. O atributo ARIA adequado é:',
        options: [
          'aria-hidden="true"',
          'aria-live="polite"',
          'tabindex="-1"',
          'role="presentation"',
          'aria-disabled="true"'
        ],
        answer: 1,
        explain: 'aria-live="polite" anuncia atualizações dinâmicas assim que o leitor de tela fica ocioso (sem cortar a fala atual; assertive interrompe). aria-hidden e role="presentation" escondem da árvore de acessibilidade.'
      }
    ]
  },
  match: {
    title: 'Ligue o conceito de UI/UX e Acessibilidade',
    pairs: [
      ['Wireframe', 'Esqueleto em baixa fidelidade sem cor final'],
      ['Design Token', 'Variável nomeada de cor, fonte ou espaço'],
      ['Mobile-First', 'CSS base para celular e min-width crescente'],
      ['POUR (WCAG)', 'Perceptível, Operável, Compreensível, Robusto'],
      ['eMAG', 'Padrão brasileiro de acessibilidade em gov web'],
      ['aria-live="polite"', 'Anuncia mudança dinâmica sem cortar a fala']
    ]
  },
  quick: [
    {
      q: 'Qual media query caracteriza a abordagem Mobile-First?',
      options: ['min-width', 'max-width', 'max-height', 'orientation'],
      answer: 0,
      explain: 'Mobile-First parte da tela menor e usa min-width para adicionar regras em telas maiores.'
    },
    {
      q: 'Qual nível da WCAG é o padrão usual exigido em portais públicos?',
      options: ['Nível A', 'Nível AA', 'Nível AAA', 'Nível B'],
      answer: 1,
      explain: 'O nível AA equilibra rigor e viabilidade, sendo o padrão regulatório de referência.'
    },
    {
      q: 'Qual o contraste mínimo na WCAG AA para texto normal?',
      options: ['2:1', '3:1', '4,5:1', '7:1'],
      answer: 2,
      explain: 'No nível AA: 4,5:1 para texto normal e 3:1 para texto grande (7:1 é AAA).'
    },
    {
      q: 'Qual atributo inclui um elemento customizado na ordem natural do Tab?',
      options: ['tabindex="-1"', 'tabindex="0"', 'tabindex="99"', 'aria-hidden'],
      answer: 1,
      explain: 'tabindex="0" segue a ordem do DOM; -1 só recebe foco via JavaScript.'
    },
    {
      q: 'Qual princípio POUR garante que o conteúdo funcione com leitores de tela?',
      options: ['Estético', 'Robusto', 'Fluido', 'Responsivo'],
      answer: 1,
      explain: 'Robusto garante compatibilidade com agentes de usuário e tecnologias assistivas.'
    },
    {
      q: 'Qual tag HTML5 semântica envolve o conteúdo principal único da página?',
      options: ['<div>', '<main>', '<aside>', '<span>'],
      answer: 1,
      explain: '<main> identifica o conteúdo dominante e único da página para navegadores e leitores.'
    }
  ],
  study: {
    title: 'Biblioteca de UI/UX e Acessibilidade',
    chapters: [
      {
        title: 'Princípios de UI, UX, User Flows e Prototipagem',
        pages: [
          'UI × UX e Princípios de Interface:\n• UI (User Interface): camada visual e interativa — botões, cores, tipografia, ícones, espaçamento.\n• UX (User Experience): jornada completa, utilidade, facilidade e satisfação ao usar o produto.\n• Heurísticas de Nielsen: visibilidade do status, consistência, prevenção de erros, reconhecimento > memorização, controle e liberdade do usuário.',
          'User Flows e Wireframes:\n• User Flow: mapa passo a passo do caminho do usuário para cumprir uma tarefa (entrada → telas → decisões → sucesso ou erro).\n• Wireframe: esqueleto de baixa fidelidade (caixas e linhas, sem paleta final) para validar layout, hierarquia e fluxo rápido e barato.',
          'Mockup × Protótipo:\n• Mockup: representação visual estática (média/alta fidelidade) com cores, fontes e imagens, mas sem interação.\n• Protótipo: modelo interativo/clicável que simula transições e fluxos reais para testar com usuários antes de codificar.'
        ],
        tip: 'Wireframe = esqueleto sem cor; Mockup = visual parado; Protótipo = clicável pra testar fluxo.',
        quiz: [
          {
            q: 'Um sistema exibe barra de progresso durante o upload de um processo judicial grande e permite cancelar a operação a qualquer momento. Essas escolhas atendem, respectivamente, às heurísticas de Nielsen de:',
            options: [
              'Estética minimalista e Ajuda e documentação',
              'Visibilidade do status do sistema e Controle e liberdade do usuário',
              'Prevenção de erros e Flexibilidade de uso',
              'Correspondência com o mundo real e Reconhecimento em vez de memorização',
              'Consistência e padrões e Diagnóstico de erros'
            ],
            answer: 1,
            explain: 'Barra de progresso informa o que está acontecendo (visibilidade do status); botão de cancelar dá saída clara (controle e liberdade do usuário).'
          },
          {
            q: 'Qual sequência representa corretamente a evolução típica de artefatos do menor para o maior grau de fidelidade e interatividade?',
            options: [
              'Protótipo de alta fidelidade → Wireframe → User Flow',
              'Design Token → Código em produção → Sketch em papel',
              'User Flow / Sketch → Wireframe → Mockup → Protótipo interativo',
              'Mockup → Sketch → Wireframe → Mapa de empatia',
              'Código CSS → Wireframe → Protótipo de baixa fidelidade'
            ],
            answer: 2,
            explain: 'Começa-se pelo fluxo/rabisco (baixo custo), estrutura-se em wireframe, aplica-se visual no mockup e valida-se interação no protótipo.'
          }
        ]
      },
      {
        title: 'Design Systems e Design Responsivo (Mobile-First)',
        pages: [
          'Design System e Atomic Design:\n• Design System é a fonte única de verdade: Design Tokens (variáveis de cor, fonte, espaçamento), biblioteca de componentes, padrões e documentação.\n• Atomic Design (Brad Frost): Átomos (botão, input) → Moléculas (campo + label) → Organismos (cabeçalho) → Templates → Páginas.',
          'Design Responsivo:\n• Adapta o mesmo HTML/CSS a qualquer tela usando: grid fluido (% / fr), imagens flexíveis (max-width: 100%) e CSS Media Queries (@media).\n• Responsivo reorganiza continuamente via CSS; Adaptativo costuma servir layouts fixos distintos por faixa de dispositivo.',
          'Mobile-First vs Desktop-First:\n• Mobile-First (progressive enhancement): CSS base para tela pequena; cresce com @media (min-width: ...).\n• Desktop-First (graceful degradation): CSS base para tela grande; encolhe com @media (max-width: ...).\n• No mobile, priorize conteúdo essencial e alvos de toque confortáveis.'
        ],
        tip: 'Mobile-First = base pequena + min-width crescente. Design System = tokens + componentes + regras.',
        quiz: [
          {
            q: 'Em um Design System corporativo, a decisão de armazenar "#1F4E79" em uma variável semântica como "--color-brand-primary" para uso compartilhado entre Figma, Web e Mobile exemplifica o conceito de:',
            options: [
              'Media Query adaptativa',
              'Design Token',
              'Graceful Degradation',
              'User Flow condicional',
              'Árvore de acessibilidade'
            ],
            answer: 1,
            explain: 'Design Tokens são decisões de estilo nomeadas de forma agnóstica (cor, tipografia, espaçamento) que mantêm consistência entre design e código.'
          },
          {
            q: 'No Atomic Design, a combinação de um rótulo (<label>), um campo de texto (<input>) e um botão (<button>) formando uma barra de busca reutilizável corresponde ao nível de:',
            options: [
              'Átomo',
              'Molécula',
              'Página',
              'Token primitivo',
              'Viewport'
            ],
            answer: 1,
            explain: 'Átomos são elementos indivisíveis (label, input, button); juntos formando uma unidade funcional simples constituem uma Molécula.'
          }
        ]
      },
      {
        title: 'WCAG 2.1 e 2.2: Princípios POUR e Níveis A, AA, AAA',
        pages: [
          'Os 4 Princípios POUR da WCAG:\n• Perceptível: usuário consegue perceber a informação (alt em imagens, legendas, contraste).\n• Operável: usuário consegue interagir (100% teclado, tempo suficiente, sem armadilha de foco).\n• Compreensível: texto e UI previsíveis (idioma lang, mensagens de erro claras).\n• Robusto: código válido compatível com leitores de tela.',
          'Níveis de Conformidade (Cumulativos):\n• Nível A: requisitos mínimos essenciais (sem eles, há barreiras severas).\n• Nível AA: padrão adotado por leis e governos; exige contraste 4,5:1 (texto normal) e 3:1 (texto grande).\n• Nível AAA: nível máximo (ex.: 7:1 texto normal), nem sempre viável em todo conteúdo.',
          'O que a WCAG 2.2 trouxe além da 2.1:\n• Foco em mobilidade, baixa visão e cognição.\n• Destaques: foco não totalmente encoberto por barras fixas, tamanho mínimo de alvo de toque, evitar redigitar dados (entrada redundante) e autenticação sem exigir memória/quebra-cabeça cognitivo. (Confira o texto oficial W3C para os códigos exatos.)'
        ],
        tip: 'POUR = Perceptível, Operável, Compreensível, Robusto. AA = padrão legal (contraste 4,5:1 normal / 3:1 grande).',
        quiz: [
          {
            q: 'Um formulário exibe "Erro no campo" em vermelho, sem indicar qual campo falhou nem como corrigir. Qual princípio POUR da WCAG foi violado prioritariamente?',
            options: [
              'Compreensível',
              'Robusto',
              'Operável',
              'Perceptível apenas por áudio',
              'Responsivo'
            ],
            answer: 0,
            explain: 'Ajudar o usuário a evitar e corrigir erros com mensagens claras faz parte do princípio Compreensível (Operável é interação/teclado; Perceptível é visão/audição; Robusto é tecnologia assistiva).'
          },
          {
            q: 'Sobre a relação entre os níveis A, AA e AAA da WCAG, é correto afirmar que:',
            options: [
              'Um site em conformidade AA atende simultaneamente aos critérios dos níveis A e AA',
              'O nível AAA dispensa o cumprimento dos critérios do nível A',
              'O contraste de 3:1 para texto normal já satisfaz o nível AAA',
              'A WCAG 2.2 removeu o princípio Robusto da especificação',
              'Apenas sites de comércio eletrônico podem pleitear o nível AA'
            ],
            answer: 0,
            explain: 'A conformidade é cumulativa: AA exige cumprir todos os critérios A e AA; AAA exige A, AA e AAA. Texto normal no AA pede 4,5:1 e no AAA pede 7:1.'
          }
        ]
      },
      {
        title: 'eMAG e Acessibilidade Digital no Governo',
        pages: [
          'O que é o eMAG:\n• Modelo de Acessibilidade em Governo Eletrônico: padrão brasileiro que adapta a WCAG às necessidades dos portais públicos.\n• Organizado em 6 seções: Marcação, Comportamento, Conteúdo/Informação, Apresentação/Design, Multimídia e Formulários.',
          'Recursos práticos do eMAG:\n• Skip links ("Ir para o conteúdo", "Ir para o menu") e atalhos de teclado padronizados facilitam a navegação sem mouse.\n• Estrutura clara de cabeçalhos (h1→h2→h3 sem pular níveis por estética), ordem lógica de Tab e associação explícita de <label> aos campos.',
          'Avaliação: Automática × Humana:\n• Ferramentas automáticas (ex.: ASES, axe, Lighthouse) detectam erros sintáticos (falta de alt, contraste, id duplicado).\n• Porém NÃO julgam se o alt descreve a imagem ou se o fluxo faz sentido — por isso avaliação humana com teclado e leitor de tela é indispensável. (Confira o texto oficial do eMAG.)'
        ],
        tip: 'eMAG = WCAG no gov brasileiro (6 seções). Validador automático (ASES/axe) não substitui teste humano!',
        quiz: [
          {
            q: 'Ao auditar um portal público brasileiro com um validador automático (como o ASES) e obter 100% de aprovação automática, a equipe pode concluir que:',
            options: [
              'O portal está garantidamente 100% acessível a qualquer cidadão com deficiência',
              'Não há mais necessidade de testar navegação por teclado ou leitores de tela',
              'Erros sintáticos verificáveis por máquina passaram, mas ainda é obrigatória validação humana para semântica, qualidade de textos alternativos e fluxos reais',
              'O portal atingiu automaticamente o nível AAA da WCAG 2.2',
              'O eMAG dispensa rótulos em formulários quando o validador automático aprova'
            ],
            answer: 2,
            explain: 'Validadores automáticos detectam apenas parte dos critérios (sintaxe, contraste, ausência de atributo), não avaliam se um texto alternativo é útil ou se a ordem de leitura faz sentido.'
          },
          {
            q: 'No contexto de portais públicos seguindo o eMAG, oferecer no topo da página um link funcional "Ir para o conteúdo principal" beneficia diretamente:',
            options: [
              'Apenas motores de busca pagos',
              'Usuários de teclado e leitores de tela, evitando percorrer dezenas de links de menu a cada página',
              'Apenas usuários que usam mouse com alta resolução',
              'A compressão de imagens JPEG no servidor',
              'A remoção da necessidade de tags <main> e <nav>'
            ],
            answer: 1,
            explain: 'Links de salto (skip links) permitem pular blocos repetitivos de navegação diretamente ao <main>, economizando dezenas de toques na tecla Tab.'
          }
        ]
      },
      {
        title: 'HTML5 Semântico, ARIA e Leitores de Tela',
        pages: [
          'HTML5 Semântico e Árvore de Acessibilidade:\n• Tags semânticas (<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>, <button>) criam marcos (landmarks) na Árvore de Acessibilidade.\n• Leitores de tela (NVDA, JAWS, VoiceOver, TalkBack) leem essa árvore — não o CSS visual.',
          'WAI-ARIA e a Primeira Regra:\n• 1ª Regra da ARIA: se existe tag HTML nativa que resolve, NÃO use ARIA (<button> vence <div role="button">).\n• Atributos-chave: aria-label (rótulo direto), aria-labelledby (aponta para id), aria-describedby (descrição extra), aria-expanded, aria-hidden="true" (esconde decorativo).',
          'Foco, Teclado e Regiões Vivas:\n• tabindex="0" inclui na ordem do DOM; tabindex="-1" permite foco só via JS; evite tabindex > 0.\n• ARIA NÃO adiciona evento de teclado (Enter/Espaço) em <div>.\n• aria-live="polite" avisa mudanças dinâmicas sem interromper; "assertive" interrompe na hora.'
        ],
        tip: 'HTML nativo > ARIA. ARIA não cria clique de teclado! tabindex=0 (natural) vs -1 (só JS).',
        quiz: [
          {
            q: 'Um desenvolvedor colocou aria-hidden="true" em um <button> visível que ainda pode ser alcançado pela tecla Tab. O efeito problemático desse erro é:',
            options: [
              'O botão desaparece visualmente da tela para todos os usuários',
              'O usuário de teclado foca um elemento que o leitor de tela ignora e não anuncia',
              'O navegador bloqueia a execução de JavaScript na página inteira',
              'O contraste do botão sobe automaticamente para 7:1',
              'O botão passa a funcionar apenas em dispositivos móveis'
            ],
            answer: 1,
            explain: 'aria-hidden="true" remove o elemento da árvore de acessibilidade, mas não o tira da tela nem da ordem do Tab — criando um "foco fantasma" mudo para quem usa leitor de tela.'
          },
          {
            q: 'De acordo com a Primeira Regra da WAI-ARIA, diante da necessidade de criar um link que navega para outra URL da intranet, a melhor prática é:',
            options: [
              'Usar <span role="link" onclick="..."> sem href',
              'Usar <a href="..."> nativo, que já possui semântica e suporte a teclado',
              'Usar <div tabindex="5" aria-label="Link">',
              'Usar <button role="link"> dentro de uma tag <p>',
              'Usar <img onclick="..."> sem atributo alt'
            ],
            answer: 1,
            explain: 'Sempre prefira a semântica nativa do HTML (<a href> para navegação, <button> para ação) antes de recorrer a roles ARIA em elementos genéricos.'
          }
        ]
      }
    ]
  }
};

window.MATERIAS = window.MATERIAS || {};
window.MATERIAS['interfaces'] = {
  id: 'interfaces',
  name: 'Mobile, UI/UX e Acessibilidade',
  npcs: [
    {
      name: 'Eng. Marina Mobile',
      lines: [
        'Android: onCreate -> onStart -> onResume -> onPause -> onStop -> onDestroy. Token nunca vai em SharedPreferences puro — use EncryptedSharedPreferences/Keystore!',
        'iOS: Keychain Services guarda credenciais; NSUserDefaults não é cifrado. E SSL Pinning fixa o certificado ou a chave pública (SPKI) contra ataques MITM.',
        'Mobile e UI/UX têm peso pequeno sozinhos (~2 questões), mas eMAG 3.1 + WCAG 2.2 + ARIA caem junto com Frontend e Governo Digital!'
      ]
    },
    {
      name: 'Designer Bento UX',
      lines: [
        'Wireframe = esqueleto de baixa fidelidade; Protótipo = fluxo navegável clicável; Design System = tokens + componentes + diretrizes de uso.',
        'Mobile-First começa estilizando a tela menor e cresce com media queries @media (min-width: ...).',
        'Human Interface Guidelines (HIG) é da Apple/iOS; Material Design 3 é do Google/Android — respeite navegação e padrões nativos de cada plataforma.'
      ]
    },
    {
      name: 'Auditora Acessível',
      lines: [
        'WCAG usa 4 princípios (POUR): Perceptível, Operável, Compreensível e Robusto. Nível AA exige contraste 4,5:1 (normal) e 3:1 (texto grande).',
        'Na WCAG 2.2 entraram Focus Not Obscured (2.4.11 AA), Target Size >= 24x24 CSS px (2.5.8 AA), Redundant Entry (3.3.7 A) e Accessible Authentication (3.3.8 AA) — e 4.1.1 Parsing saiu!',
        'eMAG 3.1 (Brasil): 6 seções (Marcação, Comportamento/DOM, Conteúdo, Apresentação, Multimídia, Formulários), atalhos 1-Conteúdo / 2-Menu / 3-Busca e alto contraste >= 7:1.'
      ]
    }
  ],
  boss: {
    name: 'Mestre Interface Acessível',
    intro: 'Mobile, UX, eMAG 3.1 e WCAG 2.2 numa tacada certeira. Vamos validar o essencial sem enrolação!',
    questions: [
      {
        q: 'Um aplicativo móvel corporativo precisa armazenar localmente o refresh token OAuth 2.0 do usuário no Android e no iOS. A escolha segura compatível com boas práticas de desenvolvimento mobile é:',
        options: [
          'SharedPreferences em modo texto no Android e NSUserDefaults no iOS.',
          'Arquivo JSON na pasta pública de Downloads para facilitar backup.',
          'EncryptedSharedPreferences / Android Keystore no Android e Keychain Services no iOS.',
          'Variável estática compilada dentro do código-fonte do app.',
          'Banco SQLite sem criptografia nem proteção de arquivo.'
        ],
        answer: 2,
        explain: 'SharedPreferences comum e NSUserDefaults gravam preferências em texto plano/plist sem proteção criptográfica forte de hardware. Tokens devem ir para Keystore/EncryptedSharedPreferences (Android) e Keychain Services (iOS).'
      },
      {
        q: 'Ao implementar SSL/TLS Pinning em um cliente mobile que consome a API do tribunal, fixa-se preferencialmente o hash da chave pública (SPKI) no app com uma chave de backup porque:',
        options: [
          'Impede que proxies com certificado instalado no dispositivo interceptem o tráfego HTTPS e facilita a rotação planejada do certificado.',
          'Dispensa completamente o uso de HTTPS/TLS no servidor de aplicação.',
          'Permite trafegar senhas em texto claro dentro do cabeçalho HTTP sem risco.',
          'Substitui a necessidade de tokens JWT ou autenticação do usuário no backend.',
          'Impede que a API responda em formato JSON, forçando XML.'
        ],
        answer: 0,
        explain: 'Certificate/Public-Key Pinning protege contra interceptação MITM mesmo quando há CA customizada confiável no aparelho; fixar SPKI + pino reserva evita quebrar o app na renovação do certificado.'
      },
      {
        q: 'Uma Activity Android está visível ao usuário em primeiro plano e passa a ficar parcialmente coberta por um diálogo modal sem perder totalmente a visibilidade. Nessa transição imediata, o callback acionado pelo ciclo de vida é:',
        options: [
          'onDestroy()',
          'onPause()',
          'onCreate()',
          'onRestart()',
          'onDetachedFromWindow()'
        ],
        answer: 1,
        explain: 'Quando outra janela cobre parcialmente a Activity (ou ao sair do foco ativo), o Android chama onPause(). onStop() só dispara quando ela deixa de ficar totalmente visível.'
      },
      {
        q: 'Sobre prototipação, Design Systems e CSS Mobile-First, assinale a afirmativa correta:',
        options: [
          'Wireframe é a versão clicável final com paleta definitiva e tokens compilados em produção.',
          'Design System reúne exclusivamente imagens rasterizadas para impressão de relatórios.',
          'Na abordagem Mobile-First, as regras base atendem telas pequenas e os breakpoints crescentes usam @media (min-width: ...).',
          'Human Interface Guidelines (HIG) é o padrão visual oficial exclusivo do Android Jetpack Compose.',
          'Prototipação de alta fidelidade deve ocorrer sempre após o deploy em produção.'
        ],
        answer: 2,
        explain: 'Mobile-First parte do menor viewport e expande progressivamente com min-width. Wireframe é baixa fidelidade; Design System centraliza tokens, componentes e regras; HIG é da Apple (Android = Material Design).'
      },
      {
        q: 'No Modelo de Acessibilidade em Governo Eletrônico (eMAG 3.1), a folha de alto contraste e os atalhos de teclado padronizados para portais públicos estabelecem:',
        options: [
          'Atalho 1 para busca, 2 para rodapé e 3 para contraste, com contraste mínimo de 2:1.',
          'Atalho 1 para ir ao conteúdo, 2 para menu principal e 3 para caixa de pesquisa, além de alto contraste mínimo de 7:1.',
          'Uso obrigatório de tabelas HTML para diagramação de formulários.',
          'Abertura automática de pop-ups sem ação prévia do usuário.',
          'Remoção do atributo alt em imagens informativas.'
        ],
        answer: 1,
        explain: 'O eMAG 3.1 (Seção 4) padroniza atalho 1 = conteúdo, 2 = menu principal, 3 = busca, além de folha de alto contraste mínimo 7:1 (#000000 fundo, #FFFFFF texto, #FFF333 links).'
      },
      {
        q: 'Na WCAG 2.1/2.2, o princípio POUR que exige que a interface e a navegação possam ser operadas via teclado sem armadilhas de foco e sem limite rígido de tempo é:',
        options: [
          'Perceptível',
          'Operável',
          'Compreensível',
          'Robusto',
          'Escalável'
        ],
        answer: 1,
        explain: 'Operável (POUR) trata de acessibilidade por teclado, foco visível, tempo suficiente, prevenção de convulsões e navegabilidade. Escalável não faz parte do mnemônico POUR.'
      },
      {
        q: 'Em relação às novidades introduzidas especificamente na WCAG 2.2 (níveis A e AA) e mudanças em relação à 2.1, é correto afirmar que:',
        options: [
          'Foram adicionados Focus Not Obscured (2.4.11 AA), Target Size Minimum de 24x24 CSS px (2.5.8 AA), Redundant Entry (3.3.7 A) e Accessible Authentication (3.3.8 AA), e 4.1.1 Parsing foi tornado obsoleto.',
          'O contraste mínimo do nível AA para texto normal caiu de 4,5:1 para 2:1.',
          'Os princípios POUR foram substituídos por três categorias ligadas apenas a SEO.',
          'Passou a ser proibido o uso de ARIA em componentes customizados.',
          'O critério 4.1.1 Parsing passou a exigir compilação em WebAssembly.'
        ],
        answer: 0,
        explain: 'WCAG 2.2 adicionou foco não obscurecido (2.4.11/2.4.12), Dragging Movements (2.5.7), Target Size Minimum 24x24 px (2.5.8), Consistent Help (3.2.6), Redundant Entry (3.3.7) e Accessible Authentication (3.3.8/3.3.9), removendo 4.1.1 Parsing.'
      },
      {
        q: 'De acordo com a Primeira Regra do WAI-ARIA e as boas práticas de HTML5 semântico, ao construir um botão acionável na interface web:',
        options: [
          'Prefira <div role="button" onclick="..."> a <button> por ser sempre mais rápido para o leitor de tela.',
          'Use o elemento nativo <button type="button"> sempre que possível; só recorra a role/ARIA quando não houver semântica nativa equivalente.',
          'Aplique tabindex="5" em todos os parágrafos de texto da página.',
          'Defina aria-hidden="true" no <main> para acelerar o carregamento.',
          'Adicione role="presentation" para impedir o clique com mouse.'
        ],
        answer: 1,
        explain: 'A 1ª Regra da ARIA diz: se um elemento HTML nativo (<button>, <nav>, <main>, <label>) já entrega a semântica e o comportamento de teclado/foco, use-o no lugar de reimplementar tudo em <div> com ARIA.'
      }
    ]
  },
  match: {
    title: 'Conecte Interface & Acessibilidade',
    pairs: [
      ['Keychain / Keystore', 'Armazenamento seguro de credenciais e chaves no dispositivo'],
      ['SSL Pinning (SPKI)', 'Fixa chave pública no app contra interceptação MITM'],
      ['Mobile-First', 'CSS base para tela pequena crescendo com min-width'],
      ['eMAG 3.1', 'Padrão brasileiro de acessibilidade em governo digital'],
      ['WCAG 2.2 — 2.5.8 (AA)', 'Tamanho mínimo de alvo de toque/ponteiro de 24×24 CSS px'],
      ['tabindex="-1"', 'Permite foco programático (.focus()) sem entrar na ordem do Tab']
    ]
  },
  quick: [
    { q: 'Contraste mínimo no nível AA (WCAG) para texto normal:', options: ['2:1', '3:1', '4,5:1', '10:1'], answer: 2, explain: 'Nível AA exige 4,5:1 para texto normal e 3:1 para texto grande.' },
    { q: 'Onde guardar JWT/refresh token com segurança no iOS?', options: ['NSUserDefaults', 'Keychain Services', 'Info.plist', 'Console.log'], answer: 1, explain: 'Keychain Services cifra e protege credenciais no iOS.' },
    { q: 'No eMAG, o atalho padronizado "1" leva o usuário para:', options: ['Rodapé', 'Busca', 'Conteúdo principal', 'Menu lateral'], answer: 2, explain: 'Padrão eMAG: 1 = Conteúdo, 2 = Menu, 3 = Busca.' },
    { q: 'Qual critério WCAG 2.0/2.1 foi removido (obsoleto) na WCAG 2.2?', options: ['1.1.1 Non-text', '2.1.1 Keyboard', '4.1.1 Parsing', '3.1.1 Language'], answer: 2, explain: 'Navegadores atuais corrigem erros sintáticos de DOM; 4.1.1 Parsing foi obsoletado na 2.2.' },
    { q: 'Tamanho mínimo de alvo (Target Size Minimum) na WCAG 2.2 (AA):', options: ['12×12 CSS px', '24×24 CSS px', '64×64 CSS px', '100×100 CSS px'], answer: 1, explain: 'Critério 2.5.8 Target Size (Minimum) nível AA: pelo menos 24×24 CSS pixels.' },
    { q: 'Melhor prática entre <button> nativo e <div role="button">:', options: ['<div role="button">', '<button> nativo', '<span onclick>', '<marquee>'], answer: 1, explain: '1ª regra da ARIA: elemento HTML nativo semântico antes de ARIA.' }
  ],
  study: {
    title: 'Biblioteca de Interfaces, Mobile e Acessibilidade',
    chapters: [
      {
        title: 'Ciclo Mobile Android/iOS e Persistência Local',
        pages: [
          'Ciclo de Vida em Prova (Android vs iOS):\n• Android Activity: onCreate() -> onStart() -> onResume() [em foco] -> onPause() [parcialmente coberta/perde foco] -> onStop() [invisível] -> onDestroy(). Rotação de tela recria a Activity; ViewModel + SavedState preservam estado.\n• iOS UIViewController / AppDelegate: viewDidLoad -> viewWillAppear -> viewDidAppear -> viewWillDisappear -> viewDidDisappear (UIKit), ou Active / Inactive / Background / Suspended (app state).',
          'Persistência Local no Celular:\n• Preferências simples não sensíveis: SharedPreferences / DataStore (Android) e UserDefaults (iOS).\n• Dados estruturados e relacionais offline: SQLite / Room (Android), Core Data / SwiftData (iOS), sqflite / Drift (Flutter).\n• Cache de respostas HTTP com ETag/Cache-Control evita consumo desnecessário de rede móvel.',
          'REGRA DE OURO DE SEGURANÇA LOCAL:\n• NUNCA grave tokens JWT, senhas ou chaves privadas em SharedPreferences puro, UserDefaults ou SQLite sem criptografia!\n• Use Android Keystore + EncryptedSharedPreferences / Jetpack Security ou iOS Keychain Services.'
        ],
        tip: 'Activity parcialmente coberta por diálogo dispara onPause(); só chama onStop() quando fica totalmente invisível.',
        quiz: [
          { q: 'Ao girar o celular e ocorrer mudança de configuração na UI Android sem override manual, o componente padrão recomendado para reter dados da tela sem vazar Context é:', options: ['BroadcastReceiver estático', 'ViewModel (Android Architecture Components)', 'SharedPreferences em disco a cada caractere', 'Thread.sleep no onCreate', 'Singleton global guardando referência forte à Activity'], answer: 1, explain: 'ViewModel sobrevive a mudanças de configuração (como rotação) e nunca deve manter referência direta à Activity destruída (evita memory leak).' },
          { q: 'Para armazenar dados estruturados offline com consultas relacionais complexas e suporte reativo no Android moderno, o recomendado no ecossistema nativo é:', options: ['Room sobre SQLite', 'Arquivo CSS externo', 'LocalStorage do Internet Explorer', 'DNS TXT local', 'Tag meta do HTML'], answer: 0, explain: 'Room é a camada de abstração oficial sobre SQLite no Android Jetpack, oferecendo checagem de SQL em compilação e suporte a Flow/Coroutines.' }
        ]
      },
      {
        title: 'Segurança Mobile, SSL Pinning, REST/JSON e Push',
        pages: [
          'Ameaças Mobile (OWASP MASVS) e Engenharia Reversa:\n• APK/IPA pode ser descompilado no aparelho! Nunca embuta segredos de API, chaves secretas de assinatura ou regras exclusivas de autorização no código do app.\n• Ofuscação (R8/ProGuard) dificulta leitura, mas NÃO substitui validação real no backend.',
          'Rede Segura & SSL/TLS Pinning:\n• Todo tráfego de API usa HTTPS/TLS 1.2+ com verificação estrita de hostname/CA.\n• SSL Pinning fixa o certificado X.509 ou, preferencialmente, o hash da chave pública (SPKI) + pino de backup no aplicativo, mitigando MITM mesmo quando há certificado de proxy instalado pelo usuário.\n• Atenção ao ciclo de vida: sempre leve chave reserva antes de rotacionar certificados!',
          'Consumo REST/JSON e Notificações Push (FCM / APNs):\n• Use paginação, timeouts explícitos, retry com backoff exponencial (só em operações idempotentes) e serialização segura (Moshi/Kotlinx/Codable).\n• Push via FCM (Android/cross) ou APNs (iOS): NUNCA envie dado sensível/sigiloso inteiro no payload da notificação visível na tela bloqueada — envie apenas o identificador e busque os detalhes após autenticar.'
        ],
        tip: 'Pinning de chave pública (SPKI) + chave backup evita quebrar o app quando o certificado TLS é renovado!',
        quiz: [
          { q: 'Sobre notificações Push (FCM/APNs) em aplicativos com requisitos de privacidade e LGPD:', options: ['Dados médicos e sigilosos devem ir completos no payload visível na tela de bloqueio.', 'A mensagem push deve evitar conteúdo sensível no payload, atuando como sinal para o app buscar os dados autenticadamente via TLS.', 'FCM substitui totalmente qualquer banco de dados no servidor.', 'Push funciona apenas se o usuário estiver conectado via cabo USB.', 'Payload de push é criptografado ponta a ponta pelo protocolo SMTP.'], answer: 1, explain: 'Notificações atravessam servidores de plataforma (Google/Apple) e podem aparecer na tela bloqueada; por minimização e segurança, evite expor dados sensíveis no payload.' },
          { q: 'Um teste de segurança identifica que um app Android aceita proxy interceptador com certificado de usuário instalado sem bloquear a conexão bancária. A contramedida específica no cliente para barrar essa interceptação é:', options: ['Desabilitar UTF-8 no JSON', 'Implementar SSL/TLS Pinning (certificado ou SPKI) associado à configuração de segurança de rede', 'Trocar JSON por XML sem HTTPS', 'Guardar a senha no cache HTTP', 'Usar HTTP porta 80 para reduzir latência'], answer: 1, explain: 'Network Security Config + SSL Pinning impede que certificados de terceiros/proxies instalados no aparelho passem pela verificação do app.' }
        ]
      },
      {
        title: 'UI/UX, User Flows, Design Systems e Responsividade',
        pages: [
          'UI vs UX & Artefatos de Concepção:\n• UX (Experiência do Usuário): engloba utilidade, fluxos, arquitetura da informação, redução de atrito e acessibilidade ponta a ponta.\n• UI (Interface): parte visual e interativa (botões, tipografia, ícones, microinterações).\n• Evolução prática: Mapa de Empatia / Jornada -> User Flow -> Wireframe (baixa fidelidade, foco estrutural) -> Protótipo (navegável/clicável) -> Design System.',
          'Design System & Plataformas Nativas:\n• Design System = Design Tokens (cores, espaçamentos, raios, tipografia) + Biblioteca de Componentes reutilizáveis + Regras de uso e acessibilidade.\n• Material Design 3 (Google/Android) x Human Interface Guidelines (Apple/iOS): navegação inferior, tipografia nativa, feedbacks táteis e respeito às áreas seguras (notch/gestos).',
          'Design Responsivo & Mobile-First:\n• Mobile-First projeta e escreve CSS primeiro para telas pequenas e usa progressive enhancement com @media (min-width: ...) para tablet e desktop.\n• Unidades relativas (rem, %, vw/vh, clamp) e CSS Grid/Flexbox evitam overflow horizontal e respeitam zoom do usuário.'
        ],
        tip: 'Wireframe = baixa fidelidade sem cor final; Protótipo = fluxo clicável; Mobile-First = min-width crescente.',
        quiz: [
          { q: 'Em um projeto com Design System maduro, o papel dos Design Tokens é:', options: ['Substituir o banco de dados relacional do sistema.', 'Armazenar decisões visuais atômicas (cores, tipografia, espaçamentos) de forma agnóstica à plataforma para manter consistência entre código e design.', 'Impedir responsividade em telas abaixo de 1080p.', 'Compactar imagens PNG em ZIP automaticamente no browser.', 'Desativar navegação por teclado em modais.'], answer: 1, explain: 'Design tokens abstraem valores visuais (ex.: --color-surface, --space-md) para consumo consistente entre Figma, Web, Android e iOS.' },
          { q: 'Ao comparar Material Design (Android) e Human Interface Guidelines (iOS), uma equipe multiplataforma deve:', options: ['Aplicar exatamente os mesmos controles proprietários do iOS no Android ignorando botão voltar e densidade.', 'Respeitar os padrões de navegação, gestos, tipografia e componentes idiomáticos de cada plataforma.', 'Eliminar contrastes visuais para deixar os botões invisíveis.', 'Obrigar uso de mouse em celulares touch.', 'Remover estados de foco e erro nos formulários.'], answer: 1, explain: 'Boas interfaces mobile respeitam convenções nativas de cada ecossistema (HIG na Apple, Material 3 no Google) para reduzir curva de aprendizado.' }
        ]
      },
      {
        title: 'eMAG 3.1 na Prática (Governo Digital BR)',
        pages: [
          'O que é o eMAG 3.1?\n• Modelo de Acessibilidade em Governo Eletrônico do Brasil, alinhado à WCAG e ao Decreto nº 5.296/2004.\n• Organizado em 6 seções técnicas de recomendações:\n  1. Marcação (HTML lógico/semântico, h1-h6, âncoras, sem tabela para layout)\n  2. Comportamento / DOM (tudo via teclado, sem refresh/redirect automático, controle de tempo)\n  3. Conteúdo/Informação (lang="pt-BR", title descritivo, alt em imagens, th/scope em tabelas)\n  4. Apresentação/Design (contraste, redimensionamento, foco visível)\n  5. Multimídia (legendas, audiodescrição, transcrição)\n  6. Formulários (label associado, instruções claras, confirmação antes de enviar).',
          'Elementos Padronizados (Seção 4 do eMAG 3.1):\n• Atalhos de teclado obrigatórios: [1] Ir para o conteúdo · [2] Ir para o menu principal · [3] Ir para a busca.\n• Barra de acessibilidade no topo com links de âncora, alto contraste e página de acessibilidade.\n• Folha de Alto Contraste: razão de contraste >= 7:1 (#000000 fundo, #FFFFFF texto, #FFF333 links sublinhados)!',
          'Avaliação de Acessibilidade pelo eMAG:\n• Validadores automáticos NÃO garantem acessibilidade sozinhos (~30% dos problemas são detectáveis por máquina).\n• Exige inspeção com leitores de tela (NVDA, VoiceOver, TalkBack), navegação 100% por teclado e validação humana.'
        ],
        tip: 'No eMAG: 6 seções (Marcação, DOM, Conteúdo, Apresentação, Multimídia, Formulários) + Atalhos 1/2/3 + Alto Contraste >= 7:1!',
        quiz: [
          { q: 'No eMAG 3.1, sobre o uso de tabelas HTML e cabeçalhos (h1 a h6), recomenda-se:', options: ['Usar tabelas HTML como principal técnica de diagramação do layout da página.', 'Usar níveis de cabeçalho de forma hierárquica e reservar tabelas apenas para dados tabulares, associando cabeçalhos (th/scope).', 'Pular de <h1> direto para <h5> por motivo estético.', 'Evitar o atributo lang no elemento <html>.', 'Abrir nova janela/aba automaticamente ao focar qualquer link.'], answer: 1, explain: 'eMAG Recomendações 1.3, 1.6, 3.9 e 3.10: hierarquia lógica de headings, nada de tabela para layout, e associação semântica em tabelas de dados.' },
          { q: 'Segundo o processo de avaliação do eMAG, depender exclusivamente de validadores automáticos HTML/WCAG:', options: ['Garante 100% de conformidade sem necessidade de testes manuais.', 'É insuficiente, pois validadores automáticos não avaliam clareza semântica, ordem lógica e experiência real com teclado/leitor de tela.', 'Substitui a criação de textos alternativos em gráficos.', 'É exigido apenas em intranets estaduais.', 'Torna o atributo alt obsoleto.'], answer: 1, explain: 'Ferramentas automáticas detectam violações sintáticas/de contraste, mas não substituem testes manuais por teclado e avaliação humana.' }
        ]
      },
      {
        title: 'WCAG 2.1/2.2, ARIA e HTML5 Semântico',
        pages: [
          'POUR e Níveis da WCAG (Cumulativos: AA inclui A; AAA inclui A+AA):\n• Perceptível: alternativas em texto (1.1.1), legendas, contraste (AA: 4,5:1 texto normal e 3:1 texto grande; AAA: 7:1), redimensionar texto até 200%.\n• Operável: tudo via teclado (2.1.1), sem armadilha de foco (2.1.2), skip links, foco visível.\n• Compreensível: idioma da página (3.1.1 lang), previsibilidade, identificação/prevenção de erros.\n• Robusto: compatibilidade com navegadores e tecnologias assistivas.',
          'Novidades da WCAG 2.2 (Conferido na fonte oficial W3C!):\n• 2.4.11 Focus Not Obscured (Minimum — AA): foco do teclado nunca fica totalmente escondido atrás de header/banner sticky.\n• 2.5.7 Dragging Movements (AA): alternativa sem arrastar (ex.: clique único).\n• 2.5.8 Target Size Minimum (AA): alvo de toque/ponteiro >= 24×24 CSS px.\n• 3.2.6 Consistent Help (A): ajuda na mesma ordem relativa.\n• 3.3.7 Redundant Entry (A): não obrigar redigitar dado já fornecido no fluxo.\n• 3.3.8 Accessible Authentication (AA): não depender de teste cognitivo (ex.: quebra-cabeça/memória) sem alternativa como gerenciador de senhas/passkey/copiar-colar.\n• 4.1.1 Parsing foi REMOVIDO/OBSOLETO na 2.2!',
          'HTML5 Semântico & Regras WAI-ARIA:\n• Regra 1: Prefira HTML nativo (<header>, <nav>, <main>, <button>, <label for>) a <div role="...">.\n• ARIA não cria teclado! Um <div role="button"> sem tabindex="0" nem Enter/Space não funciona no teclado.\n• tabindex="0" entra na ordem natural do Tab; tabindex="-1" foca só via JS; evite tabindex positivo (>0).'
        ],
        tip: 'WCAG 2.2 AA: 2.5.8 alvo >= 24×24 CSS px; 2.4.11 foco não encoberto; 3.3.8 login acessível; 4.1.1 Parsing saiu!',
        quiz: [
          { q: 'Ao auditar um sistema web conforme a WCAG 2.2 nível AA, um botão de ação rápida tem tamanho clicável de 16×16 CSS px colado a outro botão sem espaçamento de exceção. Esse achado viola o critério:', options: ['2.5.8 Target Size (Minimum) — tamanho mínimo de 24×24 CSS px.', '4.1.1 Parsing — fechado na versão 2.2.', '3.1.1 Language of Page.', '1.4.2 Audio Control.', '2.2.1 Timing Adjustable.'], answer: 0, explain: 'O novo critério 2.5.8 (nível AA) da WCAG 2.2 exige alvos de ponteiro com pelo menos 24×24 CSS pixels (salvo exceções específicas de espaçamento/equivalência/inline).' },
          { q: 'Um desenvolvedor adiciona apenas aria-label e role="button" em uma tag <span> sem implementar eventos de teclado ou tabindex. O impacto real em acessibilidade é:', options: ['O navegador passa a permitir o envio automático de formulários via Enter.', 'O leitor de tela anuncia o papel de botão na árvore de acessibilidade, mas o usuário de teclado não consegue focar nem acionar o componente.', 'A tag <span> converte-se automaticamente em elemento <button> nativo no DOM.', 'Garante contraste 7:1 automaticamente no CSS.', 'Remove a necessidade de texto visível em toda a aplicação.'], answer: 1, explain: 'ARIA altera exclusivamente a árvore de acessibilidade exposta a leitores de tela; ela NÃO adiciona foco por Tab nem handlers de Enter/Espaço.' }
        ]
      }
    ]
  }
};


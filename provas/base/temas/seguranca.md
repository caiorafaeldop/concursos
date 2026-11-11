# Segurança da informação (criptografia, ataques, LGPD, normas ISO 27k)

`seguranca` · 38 questões FGV (sem anuladas/incompletas). Gabarito ao final de cada uma.

## alego26-sis-q61 · ALEGO 2026

A Criptografia de chave simétrica (ou, criptografia de chave privada, ou criptografia de chave secreta ou Symmetric Key Encryption ou Symmetric-key cryptography) usa apenas uma chave no processo de criptografia e descriptografia.  Existem dois tipos de algoritmos de chave simétrica: Cifra de bloco e Cifra de fluxo. Exemplos de criptografia simétrica correspondem aos algoritmos

- (A) Advanced Encryption Standard, RSA e Triplo DES.
- (B) RSA, Triplo DES e Blowfish.
- (C) Triplo DES, Data Encryption Standard e ECC.
- (D) Advanced Encryption Standard, RSA e Blowfish.
- (E) Data Encryption Standard, Triplo DES e Blowfish.

**Gabarito:** E

## alego26-sis-q62 · ALEGO 2026

A criptografia de dados é controlada por algoritmos e fórmulas matemáticas (razoavelmente) complicadas. Considere que um parlamentar da ALEGO recebeu um texto cifrado, levou a você (profissional de T I) e o informou que o algoritmo Caeser Cipher foi utilizado para codificar o texto. O parlamentar solicitou sua colaboração para apresentar outras alternativas de criptografia simples, empregando apenas cifras de substituição. Como alternativas que garantem a segurança real, podem ser sugeridas as seguintes cifras, exceto uma. Assinale-a.

- (A) Cifras de Substituição Simples com Alfabeto Embaralhado, Cifras de Transposição e Cifra de Atbash.
- (B) Cifras de Substituição Simples com Alfabeto Embaralhado, Cifra de Villegagnon e ROT13.
- (C) Cifra de Atbash, Cifras de Substituição Simples com Alfabeto Embaralhado e Cifra de Villegagnon.
- (D) Cifra de RSA, Cifras de Substituição Simples com Alfabeto Embaralhado e Cifra de Atbash
- (E) Cifra de Vigenère, Cifra de Atbash e ROT13.

**Gabarito:** E

## alego26-sis-q63 · ALEGO 2026

Um servidor da ALEGO foi solicitado a colocar a assinatura digital em um documento. Ele procurou o setor de TI para responder a algumas dúvidas sobre o adequado manejo de documentos com assinatura digital. Com relação ao uso de assinaturas digitais, analise os itens a seguir:

I. Em um documento PDF uma assinatura digital colocada em local diferente do local esperado não é válida, pois o selo deveria aparecer adequadamente no local da assinatura esperado.

II. A boa prática aponta que documentos assinados digitalmente quando impressos diretamente perdem a(s) assinatura(s), no entanto, sua validade impressa pode ser mantida quando enviados digitalmente ao cartório oficial onde o documento será validado digitalmente, depois impresso e será reconhecido o documento como válido.

III. A data que aparece no “selo” (representação visual) das assinaturas em um documento PDF corresponde a prova final e tem valor legal.

Está correto o que se afirma em

- (A) II, apenas.
- (B) I e II, apenas.
- (C) II e III, apenas.
- (D) I e III, apenas.
- (E) I, II e III.

**Gabarito:** A

## alego26-sis-q64 · ALEGO 2026

Considerando os três tipos de assinatura eletrônica (Simples, Avançada e Qualificada), conforme a Lei nº 14.063/2020, identifique adequadamente o tipo de assinatura digital com sua característica:

- (A) Na assinatura eletrônica simples os dados do usuário podem ser obtidos a partir do preenchimento de um formulário eletrônico, sendo que para que seja válida ela precisa ter sido feita usando um certificado digital emitido por uma autoridade certificadora credenciada pelo Instituto Nacional de Tecnologia da Informação - ITI.
- (B) A assinatura eletrônica avançada confirma a identidade do usuário utilizando algum meio mais seguro, como dados biométricos ou um PIN (Personal Identification Number), sendo que para que seja válida a assinatura eletrônica, onde o documento seja admitido pelas partes como válido ou aceito pela pessoa a quem for oposto o documento, como estando relacionada aos dados a ela associados de tal modo que qualquer modificação posterior seja indetectável.
- (C) A Assinatura eletrônica qualificada comprova a identidade do usuário e a integridade do documento assinado por meio de tecnologia que utiliza chaves criptográficas praticamente invioláveis, sendo que para que seja válida apenas  o sistema eletrônico onde ela será usada precisa confirmar a identidade do usuário e demonstrar claramente que ele queria fazer a transação em questão.
- (D) Na assinatura eletrônica qualificada equivale à assinatura feita de próprio punho com reconhecimento de firma em cartório, sendo que para que seja válida, ela precisa ter sido feita usando um certificado digital emitido por uma autoridade certificadora credenciada pelo Instituto Nacional de Tecnologia da Informação - ITI.
- (E) Na assinatura eletrônica simples os dados do usuário podem ser obtidos a partir do preenchimento de um formulário eletrônico e ter também as informações associadas ao IP do dispositivo ou da rede usada para acessar a internet para fazer o cadastro e à localização geográfica do usuário no momento, sendo que para que seja válida ela também precisa ter mecanismo que possibilite detectar se o documento foi alterado depois de ser assinado.

**Gabarito:** D

## alego26-sis-q65 · ALEGO 2026

O certificado digital é um documento eletrônico que identifica uma pessoa, uma empresa, um site ou um servidor. Este documento é emitido por uma Autoridade Certificadora, que é a entidade responsável por emitir, distribuir, renovar, revogar e gerenciar os certificados digitais. Com relação ao uso de certificados digitais, analise os itens a seguir:

I. No Brasil o modelo adotado é o de certificação com raiz única, sendo que o Instituto Nacional de Tecnologia da Informação (ITI), além de desempenhar o papel de Autoridade Certificadora Raiz (AC-Raiz) também tem a função de credenciar e descredenciar os demais participantes da cadeia, supervisionar e auditar os processos.

II. A Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil) é uma cadeia hierárquica de confiança que viabiliza a emissão de certificados digitais para a identificação virtual, sendo que um certificado emitido por qualquer autoridade certificadora ICP- Brasil deva funcionar em qualquer sistema, inclusive nos sites e serviços de entidades de organização profissional.

III. No âmbito da ICP-Brasil é necessário um certificado digital, dos tipos diferentes A1 ou A3, emitido por uma autoridade certificadora credenciada junto à ICP-Brasil, com prazo indeterminado de validade após iniciar seu prazo de criação do certificado digital, para que determinado documento digital seja validado.

Está correto o que se afirma em

- (A) I, apenas.
- (B) II, apenas.
- (C) III, apenas.
- (D) I e II, apenas.
- (E) II e III, apenas.

**Gabarito:** D

## alego26-sis-q66 · ALEGO 2026

A organização internacional OWASP (Open Web Application Security Project) é focada em segurança de aplicações para web. Dentre os OWASP Top 10 Riscos de Segurança de Aplicações Web apresentados no ranking provisório de 2025, destacam-se: A01:2025 - Broken Access Control; A02:2025 - Security Misconfiguration; A03:2025 - Software Supply Chain Failures; e, A04:2025 - Cryptographic Failures. Destaca-se que a versão vigente é o OWASP Top Ten 2021, na qual verificamos dentre as primeiras posições os riscos de A01 Broken Access Control e A05 Security Misconfiguration. Como demonstrado, o Broken Access Control figura com um importante risco de segurança de aplicações para web e significa que deve ser estabelecida uma política de

- (A) monitoramento que ajudem a detectar, escalar e responder a violações ativa de registro.
- (B) controle de acesso que imponha restrições aos usuários para inviabilizar ações fora das permissões pretendidas, o que busca minimizar o risco de falhas que levem à divulgação não autorizada, modificação ou destruição de todos os dados.
- (C) confirmação da identidade do usuário, por meio de autenticação e gerenciamento de sessões para proteção contra ataques
- (D) configuração de segurança de aplicação repetível, os sistemas correm maior risco.
- (E) integridade de software e dados que estão relacionadas a código e infraestrutura que não protegem contra violações de integridade.

**Gabarito:** B

## alego26-sis-q67 · ALEGO 2026

Os principais riscos no desenvolvimento software são decorrentes de vulnerabilidades existentes na aplicação. Segundo OWASP Top Ten 2021 e OWASP Top Ten 2025, uma preocupante questão se refere ao risco de configuração Insegura, que decorre de

- (A) ameaça provocada pela inserção de dados maliciosos em comandos ou consultas pelo atacante decorrente da falta de filtragem do que o usuário digita, levando à execução de código não intencional ou alteração de dados.
- (B) alterações ou corrupções do sistema, de maneira não autorizada, que foca em atualizações de código sem assinatura digital ou processos de CI/CD inseguros.
- (C) riscos por conta de equívocos na configuração do ambiente em que a aplicação está instalada, que podem resultar em graves falhas de segurança não ser necessariamente pelo erro de lógica no código, mas sim pela deficiência na forma como foi estabelecido o provisionamento da infraestrutura e na ausência de processos de hardening (endurecimento) do software e do servidor.
- (D) problemas ausência de logs ou alertas, que possibilitem identificar incidentes, instabilidades e erros na aplicação
- (E) falhas na proteção de dados confidenciais, incluindo CPF, senhas e outras informações pessoais, por meio de criptografia inadequada (como MD5 ou SHA-1) ou má implementação da matemática da criptografia.

**Gabarito:** C

## alego26-dev-q45 · ALEGO 2026

A Assembleia Legislativa precisa compartilhar informações de forma segura com parceiros externos e, ao avaliar a implementação ou melhoria de seu ambiente corporativo, deve compreender claramente suas características para garantir acesso controlado, integração adequada e proteção dos dados. Algumas características são:

• Deve permitir acesso apenas a usuários autorizados, utilizando autenticação e permissões de acesso para proteger informações sensíveis.

• Integrado a sistemas internos da empresa, como ERP ou CRM, para fornecer dados em tempo real.

• Medidas de segurança, incluindo criptografia e firewalls, são implementadas para proteger as informações transmitidas e armazenadas.

• Proporciona um ambiente onde as partes externas podem acessar documentos, compartilhar informações e realizar atividades colaborativas, como gestão de projetos.

• Pode ser ajustada e expandida conforme necessário para atender às necessidades de diferentes parceiras ou modificar o acesso.

• Interfaces amigáveis são comuns, permitindo que usuários não técnicos acessem informações sem dificuldades, o que é importante para a adoção desse ambiente. Estas características descrevem um ambiente:

- (A) Internet.
- (B) Redes sem Fio (Wireless).
- (C) Extranet.
- (D) Intranet.
- (E) Redes Locais (LAN).

**Gabarito:** C

## alego26-dev-q60 · ALEGO 2026

No contexto das tecnologias de registro distribuído, a blockchain destaca-se como uma solução inovadora para garantir segurança, transparência e confiabilidade no armazenamento e compartilhamento de dados.

Considerando suas principais características e fundamentos técnicos, associe os conceitos do JUnit às suas descrições corretas e assinale a alternativa correspondente. 1 - Descentralização 2 - Imutabilidade 3 – Segurança 4 – Mecanismos de Consenso

(   ) Uma vez que uma transação é registrada na blockchain, ela não pode ser alterada ou deletada, garantindo a integridade dos dados.

(   ) Utiliza criptografia para proteger os dados e verificar a autenticidade das transações. Isso reduz o risco de fraudes.

(   ) Para validar novas transações, a blockchain utiliza mecanismos que garantem que todos os nodes concordem com a validade das transações.

(   ) A blockchain é distribuída entre diversos computadores (nodes) em uma rede, eliminando a necessidade de uma autoridade central. A sequência correta é:

- (A) 2 – 4 – 3 – 2.
- (B) 2 – 3 – 4 – 1.
- (C) 1 – 3 – 2 – 4.
- (D) 3 – 2 – 4 – 1.
- (E) 1 – 2 – 3 – 4.

**Gabarito:** B

## alego26-dev-q64 · ALEGO 2026

No contexto da inovação tecnológica e da transformação digital, a blockchain vem sendo adotada por diferentes setores como uma tecnologia habilitadora para aumentar a transparência, a segurança e a eficiência de processos.

Diante de seu impacto em áreas como finanças, saúde, logística, setor público e cadeias produtivas, assinale a alternativa verdadeira sobre o uso da tecnologia blockchain, considerando seu impacto em diversos setores.

- (A) A blockchain é totalmente imune a fraudes e nunca pode ser hackeada.
- (B) A utilização de blockchain elimina a necessidade de qualquer forma de regulação governamental.
- (C) A blockchain pode melhorar a rastreabilidade e a transparência nos processos de supply chain, permitindo o controle em tempo real dos produtos.
- (D) O uso da blockchain é sempre mais caro que os sistemas tradicionais de gerenciamento de dados.
- (E) A tecnologia blockchain pública restringe o acesso e a participação a uma seleção limitada de usuários, dificultando a mobilização de fontes diversas.

**Gabarito:** C

## alego26-dev-q66 · ALEGO 2026

O departamento financeiro da ALEGO avalia a implementação de blockchain para rastrear transações interbancárias, garantindo integridade e transparência. A equipe de TI analisa o protocolo de confiança, considerando segurança, descentralização, validação de transações e confiança entre participantes sem autoridade central, visando escolher a abordagem mais confiável. Pode-se afirmar que, conforme discutido no contexto de blockchains, o Protocolo de Confiança

- (A) é exclusivamente uma tecnologia centralizada que depende de uma entidade governamental para validar todas as atividades transacionais.
- (B) permite que indivíduos realizem transações diretas entre si sem a necessidade de intermediários, utilizando um sistema de confiança descentralizado baseado em código inteligente.
- (C) opera com base em um modelo que ignora a segurança dos dados, levando a fraudes frequentes e à perda de informações pessoais dos usuários.
- (D) foi projetado para aumentar o controle centralizado das informações financeiras, substituindo todos os sistemas de blockchain existentes com uma única rede.
- (E) é uma abordagem que promove uma confiança irrestrita nos intermediários, como bancos e empresas de tecnologia, em vez de garantir a autenticidade e segurança das transações.

**Gabarito:** B

## alego26-dev-q68 · ALEGO 2026

Um Departamento de Tecnologia da Informação da Assembleia Legislativa do Estado de Goiás (ALEGO) está revisando sua arquitetura de segurança para garantir comunicações seguras entre os sistemas institucionais e as plataformas digitais utilizadas no âmbito do Poder Legislativo. Nesse processo, a equipe de TI avalia como o SSL/TLS realiza a geração e a troca de material de chave durante o handshake, visando assegurar confidencialidade, integridade e conformidade com padrões de segurança.

Assinale qual das afirmativas abaixo sobre o processo de geração de material de chave no protocolo SSL/TLS é verdadeira.

- (A) O processo de geração de material de chave é realizado exclusivamente pelo cliente, e o servidor apenas aceita o resultado.
- (B) O Material de chave gerado no SSL é utilizado apenas uma vez e não é mais necessário em futuras comunicações entre o mesmo cliente e servidor.
- (C) O processo de geração de material de chave envolve o uso de uma Função Pseudorrandom (PRF), que combina várias entradas para produzir a chave.
- (D) O material de chave gerado no SSL não pode ser usado no handshake, pois é gerado após a troca inicial de chaves.
- (E) O SSL/TLS utiliza apenas algoritmos simétricos na geração de material de chave, excluindo qualquer método assimétrico.

**Gabarito:** C

## amazul26-q25 · AMAZUL 2026

No contexto de segurança da informação, mais especificamente sobre malwares, associe corretamente o cada item numerado no primeiro bloco (variando de 1 a 4) às lacunas do segundo bloco. 1. Cavalo de troia (trojan horse) 2. Verme (worm) 3. Bomba lógica (logic bomb) 4. Zumbi (zombie, bot)

(   ) Execução autônoma com capacidade de replicação automática e propagação entre sistemas conectados.

(   ) Malware ativado por condição predefinida após período hibernado.

(   ) Ataque a outras máquinas executado por software malicioso instalado em host comprometido.

(   ) Software aparentemente útil que possui desvio oculto e malicioso de finalidade.

Assinale a opção que corretamente associa o nome do malware no primeiro bloco e a característica apresentada no segundo bloco.

- (A) 1-2-4-3
- (B) 4-1-3-2
- (C) 2-3-4-1
- (D) 1-3-2-4
- (E) 3-4-2-1 Língua Inglesa READ THE TEXT AND ANSWER THE FOLLOWING QUESTIONS Social Dimensions of Climate Change Extreme weather events are deeply intertwined with global patterns of inequality. The poorest and most vulnerable people bear the brunt of climate change impacts yet contribute the least to the crisis. As the impacts of climate change mount, millions of vulnerable people face disproportionate challenges in terms of loss of jobs; physical harm; disease; mental health effects; food insecurity; access to water; migration and forced displacement; loss of shelter, assets, and community ties, and other related risks. Some people are more vulnerable to climate change than others. For example, workers in sectors such as agriculture, fishing, and tourism rely on natural resources that are particularly sensitive to increasingly unpredictable weather and seasonal patterns. Female-headed households, children, persons with disabilities, Indigenous Peoples and ethnic minorities, landless tenants, migrant workers, displaced persons, older people, and other socially marginalized groups often have fewer financial and other resources to cope with and recover from shocks which might threaten their wellbeing and the wellbeing of their families. The root causes of their vulnerability lie in a combination of their geographical locations; their financial, socio-economic, cultural, and social status; and their access to resources, services, and decision-making power. The poor are often not just among the most vulnerable to climate change, but also disproportionately impacted by measures to address it. These impacts can include increased costs of living, loss of livelihoods, and limited access to resources and support systems, which exacerbate existing inequalities and poverty trends. In the absence of well-designed and citizen-centered policies, efforts to tackle climate change can have unintended consequences for the livelihoods of certain groups, including placing a higher financial burden on poor households […]. While much progress has been made on the science and the types of policies needed to support a transition to low carbon, climate- resilient development, a challenge facing many countries is engaging citizens who are concerned that they will be unfairly impacted by climate policies. Citizen-centered programs play a vital role in ensuring that resources are used efficiently. Engaging people in shaping climate action is equally critical for achieving lasting impact. This means ensuring transparency, access to information, and active citizen engagement on climate risks and green growth. Such involvement can help build public support to reduce climate impacts, overcome behavioral and political barriers to decarbonization, as well as foster both new ideas and a sense of ownership over solutions. Moreover, communities bring unique perspectives, skills, and a wealth of knowledge to the challenge of strengthening resilience and addressing climate change. They should be engaged as partners in resilience-building rather than being regarded merely as beneficiaries. Research and experience show that community leaders can successfully set priorities, influence ownership, as well as design and implement investment programs that are responsive to their community’s own needs. A 2022 report by the Intergovernmental Panel on Climate Change (IPCC) recognizes the value of diverse forms of knowledge — such as scientific, Indigenous, and local knowledge — in building climate resilience. Innovations in the architecture of climate finance can connect communities and marginalized groups to the policy, technical, and financial assistance that they need for locally relevant and effective development outcomes. From: https://www.worldbank.org/en/topic/social-dimensions-of-climate-change

**Gabarito:** C

## amazul26-q38 · AMAZUL 2026

Para combater o spam e, principalmente, o phishing (fraude de identidade em e-mail), foram desenvolvidos métodos de autenticação que verificam a legitimidade do remetente. Assinale a opção que descreve corretamente o papel do DMARC (Domain- based Message Authentication, Reporting and Conformance) nesse processo.

- (A) O DMARC é um registro DNS que lista os endereços IP autorizados a enviar e-mails em nome de um domínio específico. Se o IP do remetente não estiver na lista, a mensagem é imediatamente rejeitada.
- (B) O DMARC adiciona uma assinatura criptográfica ao cabeçalho do e-mail, que é validada pelo servidor destinatário, usando uma chave pública publicada no DNS do domínio remetente, garantindo a integridade da mensagem.
- (C) O DMARC atua como uma política de validação que utiliza os resultados das verificações de SPF e DKIM para instruir o servidor destinatário sobre qual ação tomar (nenhuma, quarentena ou rejeição) em caso de falha na autenticação, além de gerar relatórios para o administrador do domínio.
- (D) O DMARC é um tipo de filtro de conteúdo que atribui uma pontuação à mensagem com base em palavras-chave suspeitas, e-mails falsificados ou links maliciosos, bloqueando- a, se a pontuação ultrapassar um limite predefinido.
- (E) O DMARC é uma técnica que se baseia no princípio de que servidores de spam geralmente não tentam reenviar mensagens, após um erro temporário, ao contrário de servidores legítimos.

**Gabarito:** C

## amazul26-q39 · AMAZUL 2026

Os princípios fundamentais da segurança da informação, frequentemente referidos pela sigla CID, expandiram-se para incluir outros pilares essenciais em abordagens modernas, como a autenticidade e o não repúdio. A integridade é um desses pilares cruciais. Assinale a opção que descreve corretamente o conceito de integridade na segurança da informação.

- (A) Garantir que a informação esteja acessível e utilizável para indivíduos autorizados sempre que necessário.
- (B) Assegurar que os dados sejam acessados apenas por pessoas, entidades ou processos autorizados, prevenindo a divulgação não autorizada.
- (C) Garantir que uma parte envolvida em uma comunicação ou transação não possa negar posteriormente o seu envolvimento.
- (D) Confirmar a identidade de um usuário ou a origem de uma informação para prevenir fraudes de identidade.
- (E) Proteger a precisão e a completude da informação e dos métodos de processamento, garantindo que os dados não sejam alterados ou destruídos de forma não autorizada.

**Gabarito:** E

## amazul26-q40 · AMAZUL 2026

Uma empresa de médio porte sofreu um ataque cibernético devastador. Os invasores criptografaram todos os arquivos críticos da rede e exigiram um pagamento em criptomoedas para fornecer a chave de descriptografia, sob a ameaça de perda permanente dos dados. A empresa ficou com seus serviços indisponíveis por vários dias e sofreu grandes prejuízos financeiros.

Assinale a opção que apresenta corretamente o ataque cibernético que foi utilizado nesse cenário descrito.

- (A) Phishing
- (B) DDoS (Distributed Denial of Service)
- (C) Cavalo de Troia (Trojan)
- (D) Ransomware
- (E) Spyware

**Gabarito:** D

## amazul26-q41 · AMAZUL 2026

Em um ambiente de rede corporativa, um administrador de segurança implementou um Sistema de Detecção de Intrusão (IDS), baseado em anomalias para identificar ameaças internas e ataques de dia zero.

Assinale a opção que apresenta a principal desvantagem que esse administrador, provavelmente enfrentará em comparação com um IDS baseado em assinaturas, e o motivo.

- (A) Alta taxa de falsos positivos (alarmes que não são ameaças reais), devido à natureza de aprendizado de máquina e modelagem do tráfego de referência.
- (B) Dificuldade em detectar ataques conhecidos, uma vez que se concentra em desvios do tráfego normal.
- (C) Maior custo de implementação, pois exige hardware especializado para processamento intensivo.
- (D) Incapacidade de gerar alertas em tempo real, resultando em atrasos na resposta a incidentes.
- (E) Requer atualizações diárias e constantes do banco de dados de assinaturas, similar aos sistemas antivírus tradicionais.

**Gabarito:** A

## amazul26-q51 · AMAZUL 2026

Uma empresa implementou uma política de backup semanal que consiste em um backup completo (Full) todo domingo e backups incrementais (Incremental) de segunda a sábado. Ocorreu uma falha catastrófica no servidor na quinta-feira, às 15h. Para restaurar o sistema ao estado mais recente possível, o procedimento que o administrador de sistemas deverá seguir e a principal desvantagem desse método são

- (A) o administrador deve restaurar apenas o último backup incremental (de quinta-feira). A desvantagem é a perda de dados entre o último backup e a falha.
- (B) o administrador deve restaurar o backup completo de domingo e, em seguida, o backup diferencial de quarta-feira. A desvantagem é que backups diferenciais armazenam mais dados a cada dia.
- (C) o administrador deve restaurar o backup completo de domingo e, em seguida, um novo backup completo. A desvantagem é o alto consumo de espaço de armazenamento diário
- (D) o administrador deve restaurar o backup completo de domingo e, em seguida, apenas o backup incremental de quinta-feira. A desvantagem é a complexidade do processo de restauração.
- (E) o administrador deve restaurar o backup completo de domingo e, sequencialmente, todos os backups incrementais de segunda até quinta-feira. A desvantagem é o tempo de restauração mais longo, devido à necessidade de aplicar múltiplas cópias.

**Gabarito:** E

## amazul26-q52 · AMAZUL 2026

Durante a definição da Política de Continuidade de Negócios de uma organização, a equipe de TI estabeleceu que o RPO (Recovery Point Objective) para um sistema crítico de gestão financeira deve ser de, no máximo, 1 hora.

Assinale a opção que apresenta a implicação técnica direta dessa definição para a estratégia de backup desse sistema.

- (A) O tempo máximo necessário para restaurar o sistema (RTO) após uma falha deve ser de 1 hora.
- (B) As cópias de segurança do sistema devem ser armazenadas em, no mínimo, 3 locais diferentes, com 2 tipos de mídia distintos.
- (C) A frequência de execução do backup deve ser de, no máximo, 1 hora, para garantir que a perda máxima de dados não ultrapasse esse intervalo de tempo.
- (D) O processo de backup deve utilizar, obrigatoriamente, a tecnologia de backup incremental para otimizar o espaço de armazenamento.
- (E) O sistema deve ter uma cópia de segurança completa (Full) realizada diariamente para garantir a integridade dos dados.

**Gabarito:** C

## amazul26-q55 · AMAZUL 2026

A assinatura digital é um mecanismo crucial na segurança da informação que utiliza a criptografia assimétrica para garantir determinados princípios.

Assinale a opção que descreve incorretamente um dos princípios fundamentais da segurança da informação, garantidos tecnicamente pelo uso de uma assinatura digital válida, atrelada a um certificado digital emitido por uma Autoridade Certificadora (AC).

- (A) Autenticidade: Garante a identidade do signatário, confirmando quem assinou o documento.
- (B) Integridade: Assegura que o conteúdo do documento não foi alterado após a assinatura.
- (C) Não repúdio: Impede que o signatário negue ter assinado o documento, pois a assinatura é única e pessoal.
- (D) Confidencialidade: Garante que a informação contida no documento só possa ser acessada por usuários autorizados.
- (E) Validade jurídica: No Brasil, a assinatura digital possui validade legal e reconhecimento jurídico, amparada por legislação específica.

**Gabarito:** D

## amazul26-q56 · AMAZUL 2026

Os certificados digitais no padrão ICP-Brasil são classificados em diferentes tipos, sendo os mais comuns o A1 e o A3. Cada tipo possui características específicas quanto ao seu armazenamento e nível de segurança. A principal diferença prática entre um certificado tipo A1 e um tipo A3 reside no local onde a chave privada é gerada e armazenada.

Assinale a opção que descreve corretamente o armazenamento e a validade típicos do certificado digital tipo A3.

- (A) É armazenado diretamente no navegador web do computador ou em um arquivo no disco rígido, com validade máxima de 12 meses.
- (B) É armazenado em um dispositivo físico seguro e inviolável, como um smart card (cartão inteligente) ou token USB, com validade de 12 ou 36 meses.
- (C) É um certificado de software que oferece o menor nível de segurança, sendo ideal para transações de baixo risco e com validade de até 5 anos.
- (D) É um certificado exclusivo para servidores web (SSL/TLS), garantindo a segurança de sites, e não pode ser usado para assinar documentos pessoais.
- (E) É um tipo de certificado em nuvem (cloud), que dispensa o uso de hardware específico e possui validade indeterminada.

**Gabarito:** B

## mpes26-q28 · MP/ES 2026 · gabarito preliminar

Uma instituição pública passou a expor parte de seus serviços por meio de APIs usadas na comunicação entre sistemas internos e aplicações externas. Em uma revisão de segurança, a equipe técnica avaliou diferentes medidas de proteção dos recursos expostos, considerando aspectos ligados a controle de acesso, proteção das comunicações, tratamento das requisições recebidas e limitação do uso dos serviços. Para esse contexto, assinale a opção que apresenta uma medida tecnicamente adequada.

- (A) Adotar a utilização de certificados digitais no servidor nas requisições entre clientes e serviços, de modo a garantir que apenas clientes autorizados tenham acesso aos endpoints disponíveis.
- (B) Adotar tokens de longa duração como medida de segurança, a fim de reduzir a frequência de renovação e, com isso, diminuir a exposição da API a falhas associadas ao processo de reautenticação.
- (C) Dispensar mecanismos específicos de autorização quando a API utilizar OAuth 2.0 ou JWT emitido por servidor confiável, pois a validade do token já é suficiente para legitimar o acesso aos recursos expostos.
- (D) Implementar validação e saneamento dos dados de entrada recebidos pelas APIs, com verificação dos parâmetros e do payload da requisição, a fim de mitigar ataques de injeção e outros efeitos decorrentes do processamento de entradas maliciosas.
- (E) Dispensar o uso de rate limiting nos servidores de recursos de APIs que adotam OAuth 2.0, uma vez que o controle de consumo por contador exige manutenção de estado entre requisições, contrariando o princípio de comunicação sem estado do protocolo OAuth.

**Gabarito:** D

## mpes26-q32 · MP/ES 2026 · gabarito preliminar

Um estudante de segurança da informação realizou uma avaliação de segurança de uma aplicação web em ambiente de testes, e acessou a aplicação por meio de um navegador, inserindo o seguinte código em um campo de entrada de dados: <script>alert('teste')</script> Ao submeter a requisição, a aplicação retornou uma resposta que resultou na exibição de um alerta no navegador, evidenciando a execução do script inserido. A técnica empregada caracteriza um tipo de análise de software conhecido como

- (A) análise estática de código, pois o comportamento da aplicação foi avaliado sem a necessidade de execução.
- (B) revisão de código manual, com foco na identificação de vulnerabilidades diretamente no código-fonte.
- (C) análise dinâmica de software, baseada na interação com a aplicação em execução e a avaliação de seu comportamento em tempo de execução.
- (D) uso de linters, para identificação de falhas sintáticas e más práticas de programação.
- (E) teste unitário, voltado à validação de componentes isolados do sistema.

**Gabarito:** C

## mpes26-q41 · MP/ES 2026 · gabarito preliminar

O OWASP Top 10:2025 apresenta as principais categorias de riscos de segurança em aplicações web, incluindo falhas relacionadas à manipulação inadequada de entradas fornecidas pelo usuário. Uma aplicação web, hospedada no endereço http://www.eth0123.com, permite acesso a informações jornalísticas por meio do seguinte endereço: http://www.eth0123.com/acesso.php?arq=jornal Durante uma análise de segurança, verificou-se que o parâmetro “arq” é utilizado pela aplicação para carregar conteúdos armazenados no servidor. Em razão de falha na validação de entradas fornecidas pelo usuário, foi possível manipular o endereço de acesso conforme apresentado a seguir, permitindo visualizar o conteúdo de um arquivo sensível do sistema: http://www.eth0123.com/acesso.php?arq=../../etc/passwd

Assinale a opção que apresenta a técnica de exploração utilizada nesse cenário.

- (A) SQL Injection
- (B) LFI – Local File Inclusion
- (C) XSS – Cross-Site Scripting
- (D) RFI – Remote File Inclusion
- (E) FPD – Full Path Disclosure

**Gabarito:** B

## nav26-q44 · NAV Brasil 2026 · gabarito preliminar

Durante o ciclo de auditoria de segurança de um Sistema de Processamento de Planos de Voo (FPL), identificou-se uma inconsistência lógica na validação de mensagens de atualização compulsórias enviadas pelas companhias aéreas. O Gerente de Engenharia de Software determinou que a equipe demonstrasse matematicamente quais linhas específicas do código-fonte do módulo de parsing foram geradas a partir de qual requisito técnico de segurança original, e quais casos de testes homologados cobrem esse escopo para subsidiar a homologação regulatória civil. A atividade de Engenharia de Requisitos voltada a estabelecer links lógicos bidirecionais contínuos entre os requisitos de origem, os artefatos de arquitetura, os componentes de código-fonte e as suítes de testes de validação finais é classificada como rastreabilidade do tipo

- (A) Backward-from-traceability.
- (B) Horizontal-traceability.
- (C) Vertical-traceability.
- (D) Forward-from-traceability.
- (E) Bi-directional Traceability.

**Gabarito:** E

## nav26-q55 · NAV Brasil 2026 · gabarito preliminar

Após um incidente de segurança em um software de controle de tráfego de superfície de aeródromo, a diretoria exigiu saber quais módulos de código-fonte e quais casos de teste homologados estavam associados ao requisito de segurança original, catalogado como “REQ-042 – Autenticação Multifator”. A rastreabilidade de requisitos garante a capacidade de seguir a vida de um requisito em uma direção para frente e para trás, desde sua origem até a implementação e testes. O principal artefato utilizado na engenharia de requisitos para consolidar essas ligações multidirecionais é o(a)

- (A) Diagrama de Implantação da UML.
- (B) Matriz de Rastreabilidade de Requisitos.
- (C) Gráfico de Gantt do Cronograma de TI.
- (D) Plano de Contas de Custos de Desenvolvimento.
- (E) Modelo Conceitual do Banco de Dados Relacional.

**Gabarito:** B

## nav26-q61 · NAV Brasil 2026 · gabarito preliminar

Um ataque cibernético do tipo negação de serviço distribuída (DDoS) inundou os servidores web públicos do Serviço de Navegação Aérea, impedindo que pilotos civis conseguissem acessar o sistema externo para enviar ou consultar as notificações de planos de voo por mais de quatro horas. A segurança da informação assenta-se sobre três pilares fundamentais clássicos conhecidos como a Tríade CID. O princípio básico de segurança da informação que foi diretamente violado no incidente operacional descrito foi a(o)

- (A) Confidencialidade, pois os dados sigilosos dos planos de voo foram visualizados por pessoas não autorizadas na internet.
- (B) Integridade, uma vez que as tabelas de dados de coordenadas de voo foram corrompidas e apagadas definitivamente do storage.
- (C) Disponibilidade, dado que o sistema e seus recursos associados ficaram inacessíveis para os usuários legítimos quando necessários.
- (D) Autenticidade, posto que crackers utilizaram identidades falsas e fraudadas de pilotos para assinar digitalmente os relatórios.
- (E) Não repúdio, visto que o sistema perdeu a capacidade de auditar e comprovar legalmente a autoria das requisições web externas.

**Gabarito:** C

## tjsc26-q21 · TJ/SC 2026

A navegação segura na internet via protocolo HTTPS (Hypertext Transfer Protocol Secure) exige uma interação complexa entre hardware, software e protocolos de rede.

Considerando o fluxo de processamento de uma requisição HTTPS em um sistema computacional moderno, é correto afirmar que

- (A) o protocolo HTTPS opera exclusivamente na camada de transporte do modelo OSI, substituindo o TCP para garantir que a criptografia seja processada diretamente pelo hardware da placa de rede (NIC).
- (B) durante o handshake do TLS, o sistema operacional utiliza chamadas de sistema para acessar funções criptográficas e gerenciar sockets de rede, permitindo que o navegador estabeleça um canal seguro sobre a pilha TCP/IP.
- (C) a criptografia assimétrica utilizada no HTTPS é uma função nativa do firmware do roteador, o que desonera a CPU do computador cliente de realizar cálculos matemáticos complexos.
- (D) o endereçamento IP (camada de rede do modelo OSI) é o responsável por garantir a integridade dos certificados digitais, enquanto o protocolo HTTPS gerencia o endereçamento físico (MAC Address).
- (E) ao utilizar HTTPS, o sistema operacional desativa a memória virtual para impedir que chaves criptográficas sejam gravadas em disco (swap), priorizando o processamento na Unidade de Controle.

**Gabarito:** B

## tjsc26-q22 · TJ/SC 2026

Um Analista de Tecnologia da Informação do Tribunal de Justiça de Santa Catarina foi encarregado de adequar os sistemas corporativos às exigências da Lei Geral de Proteção de Dados Pessoais (LGPD). Para reduzir os riscos decorrentes de eventual incidente de segurança envolvendo dados processuais e administrativos, ele adotou duas ações distintas: 1. aplicou um algoritmo para transformar o campo "Informação Sigilosa" em um código cifrado, de modo que o conteúdo original somente possa ser acessado mediante o uso da chave apropriada; e 2. no campo "Nome da Parte", substituiu as identidades reais por códigos alfanuméricos aleatórios, mantendo a tabela de correspondência entre os códigos e as identidades em ambiente segregado e seguro, permitindo que equipes de estatística e inteligência de dados realizem análises sem identificar diretamente os indivíduos, embora a associação possa ser restabelecida pelo Tribunal quando necessário. As técnicas aplicadas pelo analista nas ações 1 e 2 são, respectivamente,

- (A) Hash Robusto e Pseudonimização.
- (B) Criptografia Assimétrica e Pseudonimização.
- (C) Criptografia Simétrica e Anonimização Irreversível.
- (D) Esteganografia e Tokenização de Sessão.
- (E) Codificação de Base64 e Criptografia de Chave Única.

**Gabarito:** B

## tjsc26-q23 · TJ/SC 2026

No que diz respeito às políticas institucionais de privacidade e ao tratamento de dados pessoais no âmbito do Poder Judiciário, analise as afirmativas a seguir.

I. O tratamento de dados pessoais realizado para fins de atividades jurisdicionais é isento de medidas de segurança e conformidade, as quais devem ser aplicadas exclusivamente às atividades administrativas dos tribunais.

II. Os tribunais devem designar um Encarregado pelo Tratamento de Dados Pessoais (DPO) para atuar como canal de comunicação entre o órgão, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).

III. No Poder Judiciário, a responsabilidade pela segurança da informação e pela preservação da confidencialidade dos dados é atribuída exclusivamente aos servidores das unidades de Tecnologia da Informação (TI).

Está correto o que se afirma, apenas, em

- (A) I.
- (B) II.
- (C) III.
- (D) I e II.
- (E) II e III.

**Gabarito:** B

## tjsc26-q24 · TJ/SC 2026

O Tribunal de Justiça de Santa Catarina implementou um sistema eletrônico para gestão processual e atendimento ao cidadão, com o objetivo de aprimorar a prestação jurisdicional e assegurar a conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais – LGPD). Na solução adotada: i) dados de partes, advogados e demais usuários são coletados e utilizados para identificação, comunicação processual e tramitação dos feitos; ii) informações relativas à saúde, biometria e outros dados protegidos pela LGPD recebem tratamento diferenciado e maior nível de proteção; iii) os cidadãos podem solicitar informações sobre o tratamento de seus dados pessoais, nos termos da legislação aplicável; iv) o Tribunal define as finalidades e os meios de tratamento dos dados pessoais utilizados em suas atividades; e v) empresa contratada é responsável pelo armazenamento e processamento de dados em ambiente computacional disponibilizado ao Tribunal.

Com base nesse cenário, associe corretamente os conceitos da LGPD (Coluna I) às descrições (Coluna II): Coluna I Coluna II

(   )  Informações como nome, CPF, endereço eletrônico e telefone, utilizadas para identificar usuários dos serviços judiciais.

(   )  Empresa contratada que realiza o 1.  Dado pessoal 2.  Dado pessoal sensível 3.  Titular dos dados 4.  Controlador 5.  Operador armazenamento e o processamento de dados em nome do Tribunal.

(   )  Pessoa física a quem os dados pessoais se referem, podendo exercer os direitos previstos na LGPD.

(   )  Informações sobre saúde, dados biométricos ou outros dados submetidos à proteção especial pela legislação.

(   )  Órgão responsável por definir as finalidades e os meios de tratamento dos dados pessoais utilizados no sistema.

Assinale a opção que indica a relação correta, na ordem apresentada.

- (A) 1 – 5 – 3 – 2 – 4.
- (B) 1 – 4 – 3 – 2 – 5.
- (C) 2 – 5 – 3 – 1 – 4.
- (D) 1 – 5 – 4 – 2 – 3.
- (E) 1 – 3 – 5 – 2 – 4.

**Gabarito:** A

## tjsc26-q25 · TJ/SC 2026

No âmbito da Resolução TJ nº 3/2021 do Tribunal de Justiça de Santa Catarina, o tratamento de dados pessoais deve ser pautado pela observância estrita das bases legais e dos princípios de proteção ao titular. Imagine que uma unidade administrativa do TJSC deseja implementar um novo sistema para o processamento de dados de magistrados e servidores, visando especificamente ao cumprimento de determinações contidas em leis federais e normas do Conselho Nacional de Justiça (CNJ).

Considerando as diretrizes sobre o ciclo de vida dos dados e as hipóteses de tratamento previstas na referida Resolução e na LGPD, assinale a afirmativa que descreve corretamente a base legal e a conduta correta para esse cenário.

- (A) O tratamento deve ser baseado exclusivamente no consentimento do titular, devendo o sistema ser interrompido caso algum servidor se recuse a autorizar a coleta dos dados.
- (B) O tratamento poderá ser realizado com base no cumprimento de obrigação legal ou regulatória, o que dispensa a coleta de consentimento específico, desde que respeitados os princípios da finalidade e da necessidade.
- (C) Os dados coletados para essa finalidade legal podem ser utilizados posteriormente para qualquer outro fim administrativo, uma vez que o dado já reside nos servidores do Controlador (PJSC).
- (D) O dado pessoal sensível, por sua natureza, não pode ser tratado pelo Tribunal sob a justificativa de obrigação legal, exigindo sempre a anonimização irreversível imediata após a coleta.
- (E) A fase de descarte do ciclo de vida do dado é facultativa para o Judiciário, sendo permitida a manutenção perpétua de dados pessoais em texto claro para fins de registro histórico, sem necessidade de avaliação de descarte. Direitos Humanos e acesso à justiça

**Gabarito:** B

## tjsc26-q67 · TJ/SC 2026

Relacione os conceitos de Segurança da Informação às respectivas definições, quando houver.

(   )  Propriedade de proteger a exatidão da informação.

(   )  Processo de concessão de permissões.

(   )  Propriedade em que a informação 1.  Confidencialidade 2.  Integridade 3.  Disponibilidade 4.  Autenticação 5.  Autorização não é disponibilizada ou divulgada para pessoas, entidades ou processos não autorizados.

(   )  Propriedade de ser acessível e utilizável sob demanda por uma entidade autorizada.

Assinale a opção que indica a relação correta, na ordem apresentada

- (A) 1 – 4 – 5 – 2.
- (B) 2 – 4 – 1 – 3.
- (C) 4 – 5 – 3 – 1.
- (D) 2 – 5 – 1 – 3.
- (E) 4 – 2 – 3 – 1.

**Gabarito:** D

## tjsc26-q68 · TJ/SC 2026

Analise as seguintes afirmativas relacionadas à proteção de dados pessoais e Gestão de Identidade:

I. Para implementar a proteção dos dados pessoais em repouso, deve-se manter os dados criptografados e liberar sua decifração apenas mediante autenticação e validação do direito ao acesso.

II. O conceito de Multi-factor Authentication - MFA (preferencialmente solicitando algo que o usuário sabe, algo que possui e algo que é), serve para reforçar o processo de autenticação.

III. Para o correto funcionamento do Controle de Acesso baseado em papéis – RBAC, é importante que apenas permissões necessárias sejam associadas a cada usuário, e que cada papel seja associado a um usuário distinto.

Está correto o que se afirma em

- (A) I, apenas.
- (B) I e II, apenas.
- (C) II e III, apenas.
- (D) I e III, apenas.
- (E) I, II e III.

**Gabarito:** B

## tjsc26-q69 · TJ/SC 2026

No complexo e conectado ambiente de serviços disponíveis na rede mundial, garantir a autenticidade de um usuário para que possa acessar apenas os conteúdos a ele disponíveis é um processo fundamental. Com a proliferação da necessidade de se autenticar a cada interação, surgiu a tecnologia de Single-Sign on (SSO). Assim sendo, o SSO é

- (A) uma solução integradora, que permite que um servidor autentique diversos usuários para acessá-lo simultaneamente.
- (B) uma instanciação do Keycloak, protocolo de autenticação remota padronizada pela RFC 6749.
- (C) um serviço que reduz o número de autenticações em múltiplos sistemas.
- (D) um processo que garante autenticação segura com apenas um fator.
- (E) uma tecnologia que deve ser instalada em um servidor singular da rede, para acesso remoto de vários sistemas a esse servidor.

**Gabarito:** C

## tjsc26-q71 · TJ/SC 2026

Uma aplicação em produção foi comprometida por meio da exploração de uma biblioteca com CVE conhecido, que permite execução remota de código. O pipeline da aplicação possui SAST durante a fase de desenvolvimento, DAST em ambiente de homologação e, ainda, possui monitoramento em produção. Após investigação, verificou- se que a vulnerabilidade estava em uma dependência indireta, não houve alerta durante o pipeline e a exploração ocorreu imediatamente após o deploy.

Com base nesse contexto, assinale a afirmativa que explica corretamente a falha de detecção.

- (A) Ausência de análise de composição de software (SCA) no pipeline para identificação de vulnerabilidades em dependências transitivas.
- (B) Limitação do SAST na análise de fluxos dinâmicos de execução da aplicação.
- (C) Dependência do DAST de cobertura de testes para identificação de vulnerabilidades exploráveis.
- (D) Natureza reativa do monitoramento em produção, voltada à detecção pós-exploração.
- (E) Ausência de testes funcionais capazes de exercitar cenários de falha na aplicação.

**Gabarito:** A

## tjsc26-q72 · TJ/SC 2026

Uma organização mantém um sistema legado crítico, mas com forte dependência de tecnologia obsoleta. Foi identificado um risco relacionado tanto ao comprometimento da segurança quanto à futura indisponibilidade do sistema. Para tratar esse risco, foram propostas as seguintes ações: P1: migrar as funcionalidades para uma plataforma SaaS moderna, desativando o servidor antigo; P2: terceirizar a gestão do legado para um parceiro especializado, com foco em cláusulas de responsabilidade civil em contrato, sem alteração dos controles técnicos ou operacionais do sistema; P3: isolar o sistema em uma VLAN sem acesso à internet e exigir VPN com MFA para qualquer acesso; e P4: manter a operação do sistema legado, estabelecendo um fundo de reserva financeira para cobrir eventuais multas e definindo um plano de resposta a incidentes para recuperação manual, em caso de falha catastrófica.

Assinale a opção que associa corretamente cada proposta a uma estratégia de tratamento de risco.

- (A) P1: evitar; P2: transferir; P3: mitigar; P4: aceitar.
- (B) P1: evitar; P2: mitigar; P3: mitigar; P4: aceitar.
- (C) P1: mitigar; P2: transferir; P3: mitigar; P4: transferir.
- (D) P1: evitar; P2: transferir; P3: mitigar; P4: transferir.
- (E) P1: mitigar; P2: mitigar; P3: mitigar; P4: aceitar.

**Gabarito:** A

## tjsc26-q74 · TJ/SC 2026

No contexto da Lei nº 13.709/2018 (LGPD), um Tribunal de Justiça utiliza um sistema informatizado para registrar e dar andamento a processos, realizando o tratamento de dados pessoais das partes, advogados e demais envolvidos.

Considerando essa situação, assinale a opção que identifica corretamente a base legal em que se fundamenta o tratamento de dados pessoais realizado pelo Tribunal.

- (A) Consentimento do titular, em razão da necessidade de autorização prévia para o uso de dados em sistemas informatizados.
- (B) Legítimo interesse do controlador, visando ao apoio e à promoção de atividades que beneficiem a sociedade.
- (C) Cumprimento de obrigação legal ou regulatória pelo controlador.
- (D) Proteção da vida ou da incolumidade física do titular ou de terceiro, dada a natureza da atividade jurisdicional.
- (E) Proteção do crédito, em razão da natureza econômica e patrimonial das demandas judiciais. Governança Projetos e TI no Setor Público

**Gabarito:** C

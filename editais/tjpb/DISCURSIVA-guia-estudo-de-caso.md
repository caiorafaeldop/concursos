# Discursiva TJPB — estudo de caso (40 pontos)

> **[edital]** = está no edital/retificação. **[sugestão]** = minha recomendação (a FGV não publicou critério de correção para esta prova).

## 1. O que é (e o que NÃO é)
**Não é redação** (nada de introdução-desenvolvimento-conclusão sobre um tema social). É um **parecer técnico curto**: a banca descreve uma situação-problema do Judiciário e você resolve como analista de TI.

**[edital 10.7 e 10.7.1/10.7.2, 2ª retificação]**
- 1 questão · modalidade **estudo de caso** · **30 linhas** · **40 pontos** · à mão, caneta azul ou preta.
- Assunto: **Conhecimentos Específicos** do cargo (Anexo I, Cargo 5 + Fundamentos comuns de TI).
- O caso é uma **situação-problema hipotética ou real**, dentro das atribuições do cargo.
- Você precisa: **(1) analisar criticamente o contexto → (2) identificar os problemas → (3) aplicar conhecimento teórico e normativo → (4) propor soluções/encaminhamentos**. Tudo de forma **objetiva e tecnicamente fundamentada**.

## 2. Como será corrigido (o que se sabe e o que não)
- **Sabe-se [edital]:** nota mínima 24/40 (ampla) e 19,2/40 (cotas); nota ZERO nos casos da seção 5.
- **Não se sabe:** a tabela de pontos por item. O edital não a publica. A FGV costuma corrigir por **padrão de resposta**: lista de itens/conceitos esperados, cada um valendo uma fração dos pontos, mais algum peso para a clareza e a estrutura do texto. Isso é o jeito usual da banca, **não está confirmado para esta prova**.
- **Consequência prática [sugestão]:** cada "comando" do enunciado (identifique, justifique, proponha, cite a norma) vale ponto. **Responder tudo que foi pedido, nomeando os conceitos certos, é o que pontua.**

## 3. Resposta perfeita = 5 qualidades [sugestão]
1. **Responde exatamente o que foi perguntado**, na ordem do enunciado, sem tangente.
2. **Usa o termo técnico exato**: "teorema CAP", "circuit breaker", "Res. CNJ 335/2020", "OAuth 2.0", e não "uma forma segura de logar".
3. **Cita a base normativa quando o caso for do Judiciário**: PDPJ-Br, MNI, LGPD, Marco Civil, normas do CNJ sobre IA.
4. **Propõe solução concreta e ordenada** (o que fazer primeiro), com **trade-off** reconhecido (o que se ganha e o que se paga).
5. **Cabe em 30 linhas, é legível e não tem nenhuma marca de identificação.**

## 4. Esqueleto de 30 linhas [sugestão]
| Parte | Linhas | Conteúdo |
|---|---:|---|
| 1. Diagnóstico | 3–4 | resumo do contexto + os **problemas numerados** (1 a 4) |
| 2. Fundamentação | 8–10 | para cada problema: conceito técnico + norma aplicável |
| 3. Proposta | 10–12 | solução em ordem: arquitetura, tecnologia, processo, segurança |
| 4. Riscos e trade-offs | 3–4 | o que pode dar errado e como mitigar |
| 5. Fecho | 1–2 | o resultado esperado em 1 frase |

Tempo [sugestão]: reserve **60 a 75 minutos** da prova (5h no total, 13h às 18h) para planejar em 3–5 tópicos soltos e depois escrever limpo. Confira no caderno de prova se haverá espaço de rascunho.

## 5. Nota ZERO — evitar [edital 10.7.3]
(a) sem texto · (b) tema diferente do pedido · (c) fora do formato de estudo de caso · (d) ilegível, desenhos, números, versos, espaçamento excessivo, **"códigos alheios à língua portuguesa escrita"** ou idioma diferente · (e) caneta que não seja azul ou preta · (f) cópia ou plágio · (g) **qualquer marca que identifique você** (nome, assinatura, rubrica, desenho) · (h) **resposta técnica plenamente incorreta**.

**Cuidado com (d) [sugestão]:** como a regra proíbe "códigos alheios à língua portuguesa", **não escreva trechos de código/SQL/YAML**. Descreva em português e use só os nomes técnicos (ex.: "índice composto", "chave estrangeira"). Siglas e nomes de tecnologia são normais.

## 6. Exemplo completo (caso + resposta ≈ 30 linhas)
**Caso:** um tribunal estadual opera o sistema de tramitação processual como **monólito em servidor único**. Nos prazos finais, o sistema fica lento e fora do ar; as consultas travam o banco de dados; os **logs guardam CPF e nome das partes sem controle**. A direção quer **integrar o sistema à PDPJ-Br** e **testar IA generativa** para sugerir minutas. Como analista de desenvolvimento, elabore parecer que identifique os problemas, fundamente tecnicamente e proponha solução.

**Resposta-modelo:**

> O cenário apresenta quatro problemas: (1) ponto único de falha e baixa escalabilidade do monólito em servidor único, sem alta disponibilidade; (2) contenção no banco relacional, em que consultas de leitura concorrem com gravações transacionais; (3) tratamento inadequado de dados pessoais em logs, em descumprimento à LGPD (Lei 13.709/2018); (4) ausência de interoperabilidade e de governança para o uso de IA.
>
> Quanto à disponibilidade e à escala, recomenda-se escalabilidade horizontal atrás de balanceador de carga (NGINX ou HAProxy), com instâncias sem estado e sessão externalizada, além de replicação do banco, réplicas de leitura e failover automático. Pelo teorema CAP, na partição de rede é preciso escolher entre consistência e disponibilidade; para atos processuais, mantém-se consistência forte (ACID) nas gravações e admite-se consistência eventual nas consultas às réplicas. Para absorver picos, aplicam-se cache distribuído (Redis) com política de expiração, mensageria (Kafka ou RabbitMQ) para tarefas assíncronas, circuit breaker e degradação graciosa, evitando falha em cascata.
>
> Na arquitetura, propõe-se migração gradual do monólito para microsserviços por domínio (DDD), expostos por API gateway, alinhada à PDPJ-Br (Res. CNJ 335/2020) e à interoperabilidade pelo MNI (Res. CNJ 91/2009), publicando serviços no marketplace do CNJ. A entrega deve usar CI/CD com contêineres (Docker e Kubernetes), testes automatizados e SAST/DAST (DevSecOps), seguindo o OWASP Top 10, com autenticação por OAuth 2.0, OpenID Connect e JWT.
>
> Em relação à LGPD, devem-se mascarar dados pessoais nos logs, aplicar minimização, criptografia em trânsito (TLS) e em repouso, controle de acesso por perfil e trilha de auditoria, adotando privacidade por padrão.
>
> Sobre a IA generativa, o uso deve respeitar as normas do CNJ: o modelo apenas apoia e não decide, com supervisão humana, transparência, auditabilidade e avaliação de impacto algorítmico. Recomendam-se RAG sobre base institucional, sanitização das saídas, proteção contra prompt injection e retenção zero de dados.
>
> Conclui-se que a solução reduz o risco de indisponibilidade, atende à LGPD e prepara o tribunal para a integração nacional, com migração incremental que limita riscos e custos.

**Por que essa resposta pontuaria** [sugestão]: tem os 4 problemas numerados (diagnóstico), cada um recebe conceito + norma (fundamentação), a proposta vem em ordem e com trade-off (CAP), usa só termos que estão no edital e fecha em uma frase.

## 7. Casos prováveis (treine estes) [sugestão]
Escolhi cenários que combinam vários blocos do Anexo I para que um único caso exija conhecimentos diferentes:
1. Monólito lento e indisponível → **escalabilidade, cache, mensageria, resiliência** (o exemplo acima).
2. Integração com outros sistemas do Judiciário → **PDPJ-Br, MNI/MInG, API gateway, microsserviços**.
3. Vazamento ou tratamento indevido de dados → **LGPD, OWASP, criptografia, PKI, controle de acesso**.
4. Uso de IA em minutas ou triagem → **LLM, RAG, prompt injection, governança algorítmica, normas do CNJ sobre IA**.
5. Entregas lentas e com muitos bugs → **CI/CD, Git, testes (TDD, SAST/DAST), métricas (MTTR, frequência de liberação), DevSecOps**.
6. Portal inacessível → **eMAG, WCAG 2.1/2.2, HTML semântico, ARIA, mobile-first**.
7. Estimativa/contratação de software → **APF/IFPUG, Scrum/SAFe, requisitos, contratações de TIC (Res. CNJ 468/2022)**.
8. Aplicativo móvel de consulta processual → **Flutter/Android/iOS, SSL pinning, armazenamento seguro, FCM, REST/JSON**.

## 8. Rotina de treino [sugestão]
- **1 estudo de caso por semana**, cronometrado (60–75 min), à mão, com caneta azul ou preta, em **30 linhas**.
- Autocorreção, usando **esta régua minha** (não é a da banca): Diagnóstico **8** · Fundamentação técnica e normativa **12** · Proposta concreta **14** · Clareza e estrutura **6** = 40.
- Marque cada comando do enunciado com um visto: algum sem resposta = ponto perdido.
- Guarde as respostas boas num caderno de **conceitos prontos** (CAP, circuit breaker, RAG…) para reusar o vocabulário.
- Uma vez por mês, escreva o caso **sem consultar nada**, como na prova.

## 9. Meta
Objetivo de 1º lugar: **34 a 37 de 40** (ver seção 0 de `TJPB-prova-conteudo-e-metas.md`). Isso significa, na régua acima, errar no máximo 3 a 6 pontos: não pode faltar nenhum problema do caso, nenhuma norma citada e nenhum comando respondido.

# ADS - Análise e Desenvolvimento de Sistemas

# 3ESII - Engenharia de Software II

## Especificação de Requisitos de Software

## Cidade Inteligente

## Projeto: MuniTour

## Grupo:

    Gabriel Danilo
    Kaique Carvalho
    Rogério Rodrigues

---

# 1. Introdução

## 1.1. Objetivo do Documento

    O objetivo deste documento é fornecer uma visão detalhada dos requisitos do sistema MuniTour, um aplicativo interativo de turismo inteligente. O MuniTour tem como objetivo facilitar a exploração de pontos turísticos, culturais e históricos da cidade, integrando funcionalidades de geolocalização, visualização 360°, realidade aumentada, e interatividade com a população local. Este documento descreve os requisitos funcionais, não funcionais e as representações visuais do sistema, incluindo o planejamento inicial do projeto.

## 1.2. Cidade Inteligente

    Uma Cidade Inteligente é uma cidade que utiliza a tecnologia e a inovação para melhorar a qualidade de vida de seus habitantes e otimizar os recursos urbanos. Através do uso de sensores, big data e soluções tecnológicas, as cidades inteligentes visam melhorar áreas como mobilidade, segurança, sustentabilidade e governança.
    No caso do projeto MuniTour, a solução proposta se alinha ao conceito de Cidade Inteligente ao integrar tecnologias como geolocalização, realidade aumentada e conectividade digital para oferecer uma experiência turística mais rica, acessível e eficiente, ao mesmo tempo que promove a economia local e a preservação cultural.

---

# 2. Visão Geral do Sistema

## 2.1. Visão do Produto

    Para turistas e moradores locais que desejam explorar e conhecer melhor os pontos turísticos, história e cultura da cidade, o MuniTour é uma plataforma interativa de turismo inteligente que apresenta visualizações em 360° de locais turísticos, informações históricas com linha do tempo evolutiva, mapa interativo dos bairros e recomendações gastronômicas culturais. Diferente de guias turísticos tradicionais e aplicativos convencionais de turismo, o MuniTour oferece uma experiência imersiva pré-visita, conteúdo histórico-cultural verificado, acesso através de totens espalhados pela cidade e integração oficial com estabelecimentos locais validados pela prefeitura municipal.

## 2.2. Justificativa

    O desenvolvimento do MuniTour é justificado pela crescente demanda por experiências turísticas mais ricas, interativas e informativas. A proposta visa transformar a maneira como os turistas interagem com a cidade, proporcionando uma forma de exploração mais eficiente e educativa. Além disso, contribui para o fortalecimento da economia local ao promover comércios e estabelecimentos culturais integrados ao sistema.

## 2.3 Objetivos e Benefícios

    • **Objetivo:** Desenvolver uma plataforma digital que melhore a experiência turística, ofereça informações culturais de qualidade e promova o turismo sustentável e a economia criativa.

    • **Benefícios Esperados:**
    o Melhoria da experiência de turistas e moradores.
    o Valorização do patrimônio cultural da cidade.
    o Integração digital entre turistas, comércios e pontos turísticos.
    o Incentivo ao turismo local e fortalecimento da economia criativa.

## 2.4 Planejamento do Projeto

    O planejamento preliminar do projeto será gerido com a metodologia PMCanvas, que define as principais entregas, marcos e responsabilidades para garantir a implementação bem-sucedida do MuniTour.

---

# 3. Requisitos do Sistema

    Requisitos são as especificações que descrevem as funcionalidades e restrições de um sistema de software. Eles são fundamentais para guiar o desenvolvimento, garantir que o produto atenda às expectativas dos usuários e manter o projeto dentro dos limites de prazo e orçamento.

## 3.1 Requisitos Funcionais

    Os requisitos funcionais são as funcionalidades que o sistema deve oferecer para atender às necessidades dos usuários. Para o MuniTour, os requisitos funcionais incluem funcionalidades como visualização 360° de pontos turísticos, interatividade com estabelecimentos locais e personalização de rotas de turismo.

### 3.1.1. Fichas de Requisitos

## ID: RF01

Título: Visualização 360° de Locais Turísticos

Tipo: Funcional

Descrição: O sistema deve permitir a visualização em 360° dos locais turísticos selecionados pelo usuário. O sistema deve exibir controles de navegação (rotação, zoom, fullscreen), informações sobre qualidade da imagem (resolução disponível), e permitir compartilhamento da visualização. Deve suportar dispositivos móveis e desktop com interface adaptativa.

Justificativa: Proporcionar uma experiência imersiva e antecipada aos turistas.

Origem: Usuário final (Turista)

Dependências: Conteúdo 360° e cadastro de pontos turísticos.

Critério de Aceitação: O usuário consegue acessar a visualização em 360° sem falhas, navegar pela imagem com controles intuitivos, e visualizar em modo fullscreen.

Prioridade: Alta

Observações: O conteúdo deve ser otimizado para diferentes larguras de banda.

Campos Preenchimento

## ID: RF02

Título: Recomendações de Estabelecimentos Locais

Tipo: Funcional

Descrição: O sistema deve permitir que o usuário visualize recomendações de estabelecimentos locais (restaurantes, comércios). O sistema deve apresentar: nome, tipo de estabelecimento, endereço, horário de funcionamento, telefone, foto principal, distância do usuário, e status de validação municipal. Deve permitir filtros por: tipo de estabelecimento, distância (500m, 1km, 2km, 5km), horário de funcionamento, e avaliação. A busca deve ser possível por nome ou categoria.

Justificativa: Facilitar a exploração da gastronomia e cultura local, promovendo o comércio da cidade.

Origem: Usuário final (Turista)

Dependências: Cadastro de estabelecimentos locais, sistema de geolocalização.

Critério de Aceitação: O usuário consegue visualizar uma lista de estabelecimentos próximos com informações relevantes, aplicar filtros de busca, e acessar detalhes completos de cada estabelecimento.

Prioridade: Média

Observações: As recomendações podem ser baseadas na proximidade e/ou avaliações.

Campos Preenchimento

## ID: RF03

Título: Informações Históricas

Tipo: Funcional

Descrição: O sistema deve exibir informações históricas e culturais detalhadas sobre os pontos turísticos selecionados. As informações devem incluir: período histórico, descrição detalhada, importância cultural, eventos históricos marcantes, galeria de fotos antigas e atuais, linha do tempo interativa, e referências bibliográficas. Deve permitir busca por período histórico ou tema.

Justificativa: Enriquecer a experiência do turista com conhecimento sobre o patrimônio local.

Origem: Usuário final (Turista)

Dependências: Cadastro de pontos turísticos com conteúdo histórico validado.

Critério de Aceitação: O usuário consegue ler ou ouvir as informações históricas associadas a um ponto turístico, navegar pela linha do tempo, e visualizar fotos históricas.

Prioridade: Alta

Observações: O conteúdo deve ser validado por especialistas.

Campos Preenchimento

## ID: RF04

Título: Visualizar Mapa Interativo

Tipo: Funcional

Descrição: O sistema deve apresentar um mapa interativo da cidade mostrando pontos turísticos, estabelecimentos locais, e rotas. O mapa deve permitir: zoom, navegação, filtros por categoria, visualização em camadas (pontos turísticos, estabelecimentos, rotas), e integração com GPS. Deve exibir informações resumidas ao clicar em marcadores.

Justificativa: Facilitar a navegação e orientação do turista pela cidade.

Origem: Usuário final (Turista)

Dependências: Sistema de geolocalização, cadastro de pontos e estabelecimentos.

Critério de Aceitação: O usuário consegue navegar pelo mapa, filtrar pontos de interesse, e acessar informações básicas através dos marcadores.

Prioridade: Alta

Observações: Deve funcionar offline com dados essenciais pré-carregados.

Campos Preenchimento

## ID: RF05

Título: Visualizar Rota Personalizada

Tipo: Funcional

Descrição: O sistema deve permitir ao usuário criar e visualizar rotas personalizadas conectando múltiplos pontos turísticos. Deve calcular: tempo estimado de percurso, distância total, meio de transporte (a pé, transporte público, carro), e pontos de interesse no trajeto. Deve permitir reordenação de pontos e otimização automática da rota.

Justificativa: Otimizar o tempo do turista e criar experiências personalizadas.

Origem: Usuário final (Turista)

Dependências: Sistema de mapas, cadastro de pontos turísticos, dados de transporte.

Critério de Aceitação: O usuário consegue selecionar múltiplos pontos, gerar rota otimizada, escolher meio de transporte, e visualizar informações detalhadas do percurso.

Prioridade: Média

Observações: Deve integrar com APIs de transporte público quando disponível.

Campos Preenchimento

## ID: RF06

Título: Gerenciar Conteúdo Turístico

Tipo Funcional

Descrição O sistema deve permitir que administradores municipais gerenciem o conteúdo turístico. Funcionalidades incluem: adicionar/editar/remover pontos turísticos, fazer upload de conteúdo 360°, gerenciar informações históricas, aprovar alterações, e controlar visibilidade do conteúdo. Deve manter histórico de alterações e permitir rollback.

Justificativa Manter o conteúdo atualizado e de qualidade através de gestão oficial.

Origem: Administrador Municipal

Dependências: Sistema de autenticação, controle de acesso, armazenamento de mídia.

Critério de Aceitação: O administrador consegue realizar operações CRUD em pontos turísticos, gerenciar mídia associada, e controlar publicação de conteúdo.

Prioridade: Alta

Observações: Deve ter fluxo de aprovação para mudanças sensíveis.

## ID RF07

Título Validar Estabelecimentos

Tipo: Funcional

Descrição: O sistema deve permitir que administradores municipais validem estabelecimentos locais cadastrados. O processo deve incluir: análise de documentação, verificação de informações, aprovação/rejeição com justificativa, e comunicação automática com o estabelecimento. Deve manter status de validação e histórico do processo.

Justificativa Garantir a qualidade e veracidade das informações dos estabelecimentos.

Origem Administrador Municipal

Dependências: Sistema de autenticação, cadastro de estabelecimentos, sistema de notificações.

Critério de Aceitação: O administrador consegue revisar estabelecimentos pendentes, aprovar/rejeitar com justificativa, e acompanhar o status de validação.

Prioridade: Alta

Observações: Deve enviar notificações automáticas para os estabelecimentos.

Campos Preenchimento

## ID: RF08

Título: Cadastrar Estabelecimento

Tipo: Funcional

Descrição: O sistema deve permitir que proprietários de estabelecimentos se cadastrem na plataforma. O formulário deve incluir: dados básicos (nome, endereço, telefone), tipo de estabelecimento, horário de funcionamento, fotos, descrição, e documentação comprobatória.
Deve validar informações obrigatórias e enviar para aprovação municipal.

Justificativa: Permitir que estabelecimentos locais participem da plataforma turística.

Origem: Estabelecimento Local

Dependências: Sistema de upload de arquivos, validação de dados, sistema de notificações.

Critério de Aceitação: O estabelecimento consegue preencher formulário completo, fazer upload de documentos, e receber confirmação de envio para análise.

Prioridade: Média

Observações: Deve ter validação de campos obrigatórios e formato de arquivos.

Campos Preenchimento

## ID: RF09

Título: Atualizar Informações do Estabelecimento

Tipo: Funcional

Descrição: O sistema deve permitir que estabelecimentos já cadastrados atualizem suas informações. Deve permitir edição de: dados de contato, horários, fotos, descrições, e cardápio/serviços. Alterações significativas devem passar por nova validação municipal.

Justificativa: Manter informações dos estabelecimentos sempre atualizadas.

Origem: Estabelecimento Local

Dependências: Sistema de autenticação, controle de versões, sistema de validação.

Critério de Aceitação: O estabelecimento consegue editar suas informações, submeter alterações, e acompanhar status de aprovação quando necessário.

Prioridade: Baixa

Observações: Alterações simples podem ser automáticas, outras precisam aprovação.

## 3.2. Requisitos Não Funcionais

    Os requisitos não funcionais definem as qualidades e restrições que o sistema deve ter, como desempenho, usabilidade e segurança.

## RNF01: Disponibilidade

    -   O sistema deve estar disponível 24 horas por dia, 7 dias por semana, com tempo de inatividade máximo de 1% ao mês (99% de uptime).

## RNF02: Responsividade e Compatibilidade

    -   O sistema deve ser responsivo, funcionando adequadamente em dispositivos móveis (smartphones e tablets), navegadores web desktop, e totens urbanos com telas de toque.
    -   Deve ser compatível com os principais navegadores: Chrome, Firefox, Safari, Edge (versões atuais e uma anterior).

## RNF03: Performance

    -   O tempo de resposta das funcionalidades não deve ultrapassar 2 segundos para operações básicas.
    -   O carregamento inicial da aplicação não deve exceder 5 segundos em conexões 3G.
    -   A visualização 360° deve iniciar em até 3 segundos após a seleção.

## RNF04: Usabilidade

    -   A interface deve seguir princípios de acessibilidade WCAG 2.1 nível AA.
    -   O sistema deve ser intuitivo, permitindo que usuários sem experiência técnica naveguem facilmente.
    -   Deve suportar múltiplos idiomas (português, inglês, espanhol).

## RNF05: Segurança

    -   Todas as comunicações devem utilizar protocolo HTTPS.
    -   Dados pessoais devem estar em conformidade com a LGPD.
    -   Sistema de autenticação deve utilizar criptografia robusta.
    -   Backup automático dos dados críticos a cada 24 horas.

## RNF06: Escalabilidade

    -   O sistema deve suportar até 1000 usuários simultâneos sem degradação de performance.
    -   A arquitetura deve permitir escalabilidade horizontal para crescimento futuro.

## RNF07: Offline

    -   Funcionalidades básicas (mapa, informações essenciais) devem funcionar offline nos totens.
    -   Aplicativo móvel deve cachear dados essenciais para uso com conectividade limitada.

# 4. Modelagem

    A modelagem em Engenharia de Software é o processo de criar representações abstratas (modelos) de um sistema de software. Esses modelos ajudam a entender, analisar, documentar e comunicar diferentes aspectos do sistema antes que ele seja construído. A modelagem utiliza notações gráficas padronizadas, como a UML (Unified Modeling Language), para descrever a estrutura, o comportamento e as interações do software. Ela facilita a identificação de requisitos, a detecção de possíveis problemas de design em estágios iniciais e serve como um guia para a equipe de desenvolvimento durante a implementação.

## 4.1. Diagrama de Casos de Uso (UML)

    O diagrama de casos de uso mostra como o sistema interage com os usuários (atores). O MuniTour possui três atores principais: Turista/Usuário, Administrador Municipal, e Estabelecimento Local. Os principais casos de uso incluem:

## **Para Turistas:**

    •**Visualizar Ponto Turístico:** Turista acessa informações sobre pontos turísticos.
    •**Consultar Estabelecimentos Locais:** Turista consulta recomendações de comércios próximos.
    •**Explorar Conteúdo Histórico:** Turista aprende sobre a história de locais específicos.
    •**Visualizar Rota Personalizada:** Turista visualiza uma rota sugerida com base em seus interesses.
    • Visualizar Mapa Interativo: Turista navega pelo mapa da cidade.
    • Acessar Visualização 360°: Turista experimenta visualização imersiva.

## **Para Administradores Municipais:**

    • Gerenciar Conteúdo Turístico: Administrador mantém informações dos pontos turísticos.
    • Validar Estabelecimentos: Administrador aprova cadastros de estabelecimentos.
    • Atualizar Informações Históricas: Administrador gerencia conteúdo histórico.

## **Para Estabelecimentos Locais:**

    • Cadastrar Estabelecimento: Proprietário registra seu estabelecimento.
    • Atualizar Informações do Estabelecimento: Proprietário mantém dados atualizados.

## 4.2. Especificação dos Casos de Uso

    Esta seção detalha as especificações dos casos de uso mais relevantes do sistema MuniTour, seguindo os padrões UML com fluxos principais e alternativos bem definidos.

## UC01 - Visualizar Ponto Turístico

    **Ator Primário:** Turista
    **Atores Secundários:** Sistema de Geolocalização, Banco de Dados
    **Descrição:** Permite ao turista acessar informações detalhadas, visualizações 360° e conteúdo de realidade aumentada sobre um ponto turístico específico.

### **Pré-condições:**

    -   O ponto turístico deve estar cadastrado no sistema
    -   O dispositivo deve ter acesso à internet
    -   O turista deve ter o aplicativo instalado

### **Fluxo Principal:**

    1. O turista seleciona um ponto turístico através do mapa interativo ou lista de pontos turísticos
    2. O sistema recupera e exibe as informações básicas do ponto turístico (nome, localização, descrição resumida)
    3. O sistema apresenta as opções de visualização disponíveis:
    - Informações detalhadas e conteúdo histórico
    - Galeria de fotos e vídeos
    - Visualização 360°
    - Realidade Aumentada (se disponível)
    4. O turista seleciona uma opção de visualização
    5. O sistema carrega e apresenta o conteúdo solicitado
    6. O caso de uso se encerra

### **Fluxos Alternativos:**

### **FA01 - Conteúdo 360° indisponível:**

    -   No passo 4, se o turista selecionar "Visualização 360°" e o conteúdo não estiver disponível:
        -   4.1. O sistema exibe mensagem informando a indisponibilidade
        -   4.2. O sistema retorna ao passo 3 oferecendo outras opções

### **FA02 - Realidade Aumentada incompatível:**

    -   No passo 4, se o turista selecionar "Realidade Aumentada" e o dispositivo não for compatível:
        -   4.1. O sistema verifica compatibilidade do dispositivo
        -   4.2. O sistema informa sobre incompatibilidade e requisitos mínimos
        -   4.3. O sistema retorna ao passo 3 oferecendo outras opções

### **FA03 - Falha no carregamento:**

    -   No passo 5, se houver falha ao carregar o conteúdo:
        -   5.1. O sistema exibe mensagem de erro específica
        -   5.2. O sistema oferece opção "Tentar Novamente"
        -   5.3. Se o turista escolher tentar novamente, retorna ao passo 5
        -   5.4. Se o turista cancelar, retorna ao passo 3

### **Pós-condições:**

    -   O turista visualizou com sucesso o conteúdo do ponto turístico
    -   O sistema registra a interação para fins estatísticos

---

## UC02 - Consultar Estabelecimentos Locais

    **Ator Primário:** Turista
    **Atores Secundários:** Sistema de Geolocalização, Proprietário de Estabelecimento
    **Descrição:** Permite ao turista encontrar e visualizar informações sobre estabelecimentos locais próximos a um ponto turístico ou à sua localização atual.

### **Pré-condições:**

    -   Os estabelecimentos devem estar cadastrados no sistema
    -   O dispositivo deve ter acesso à internet
    -   O turista deve ter o aplicativo instalado

### **Fluxo Principal:**

    1. O turista acessa a funcionalidade "Estabelecimentos Locais"
    2. O sistema solicita permissão para acessar a geolocalização
    3. O turista concede permissão de localização
    4. O sistema apresenta opções de busca:
        - Estabelecimentos próximos à localização atual
        - Busca por categoria (restaurantes, hotéis, lojas, etc.)
        - Busca por nome do estabelecimento
    5. O turista seleciona uma opção de busca e define critérios
    6. O sistema processa a busca e apresenta resultados em lista e no mapa
    7. O turista seleciona um estabelecimento específico
    8. O sistema exibe informações detalhadas do estabelecimento (nome, endereço, horário, contato, avaliações)
    9. O caso de uso se encerra

## **Fluxos Alternativos:**

### **FA01 - Geolocalização negada:**

    -   No passo 3, se o turista negar permissão de localização:
        -   3.1. O sistema informa sobre limitações da busca sem localização
        -   3.2. O sistema oferece busca manual por região ou endereço
        -   3.3. Continua no passo 4 com opções limitadas

### **FA02 - Nenhum resultado encontrado:**

    -   No passo 6, se não houver estabelecimentos que atendam aos critérios:
        -   6.1. O sistema informa que nenhum resultado foi encontrado
        -   6.2. O sistema sugere ampliar critérios de busca
        -   6.3. Retorna ao passo 4 para nova busca

### **FA03 - Informações incompletas:**

    -   No passo 8, se algumas informações não estiverem disponíveis:
        -   8.1. O sistema exibe as informações disponíveis
        -   8.2. O sistema indica claramente quais campos estão em falta
        -   8.3. O sistema oferece opção de contatar estabelecimento diretamente

## **Pós-condições:**

    -   O turista obteve informações sobre estabelecimentos de interesse
    -   O sistema registra a consulta para análise de preferências

---

## UC03 - Cadastrar Estabelecimento

    **Ator Primário:** Proprietário de Estabelecimento
    **Atores Secundários:** Administrador do Sistema
    **Descrição:** Permite ao proprietário cadastrar seu estabelecimento no sistema para ser visualizado pelos turistas.

## **Pré-condições:**

    -   O proprietário deve ter conta no sistema
    -   O proprietário deve possuir documentação válida do estabelecimento
    -   O estabelecimento deve estar localizado na área de cobertura do sistema

## **Fluxo Principal:**

    1. O proprietário acessa o sistema e faz login
    2. O proprietário seleciona a opção "Cadastrar Estabelecimento"
    3. O sistema apresenta formulário de cadastro
    4. O proprietário preenche as informações obrigatórias:
        - Nome do estabelecimento
        - Endereço completo
        - Categoria (restaurante, hotel, loja, etc.)
        - Horário de funcionamento
        - Informações de contato
    5. O proprietário adiciona informações opcionais (fotos, cardápio, descrição detalhada)
    6. O proprietário submete o cadastro
    7. O sistema valida as informações fornecidas
    8. O sistema confirma o cadastro e informa sobre processo de aprovação
    9. O caso de uso se encerra

## **Fluxos Alternativos:**

### **FA01 - Informações obrigatórias em falta:**

    -   No passo 7, se informações obrigatórias estiverem ausentes:
        -   7.1. O sistema identifica campos obrigatórios não preenchidos
        -   7.2. O sistema destaca os campos e exibe mensagens de erro
        -   7.3. Retorna ao passo 4 para correção

### **FA02 - Estabelecimento já cadastrado:**

    -   No passo 7, se o estabelecimento já existir no sistema:
        -   7.1. O sistema identifica duplicata por endereço/nome
        -   7.2. O sistema informa sobre estabelecimento existente
        -   7.3. O sistema oferece opção de reivindicar propriedade ou alterar dados

### **FA03 - Localização fora da área de cobertura:**

    -   No passo 7, se o endereço estiver fora da área de cobertura:
        -   7.1. O sistema valida o endereço contra área de cobertura
        -   7.2. O sistema informa sobre limitação geográfica
        -   7.3. O sistema registra interesse para expansão futura

## **Pós-condições:**

    -   O estabelecimento está registrado no sistema aguardando aprovação
    -   O proprietário recebe confirmação e instruções sobre próximos passos
    -   O administrador é notificado sobre novo cadastro para análise

## 4.3. Diagrama de Atividades

    O diagrama de atividades descreve os fluxos e decisões tomadas dentro dos casos de uso.

    1. Visualizar Ponto Turístico (Diagrama)
    2. Consultar Estabelecimentos (Diagrama)
    3. Cadastrar Estabelecimentos (Diagrama)

## 4.4. Modelagem de Classes

    O diagrama de classes descreve as entidades principais do sistema, como:
    • PontoTuristico: com atributos como nome, localização, descrição.
    • EstabelecimentoLocal: com atributos como nome, categoria, avaliação.
    • Turista: com atributos como nome, histórico de visitas, preferências.

# 5. Protótipos das Telas

Apresentar imagens que representam as principais telas do sistema. Nesse projeto, os protótipos representam a atividade de construção da Engenharia de Software.

# 6. Considerações Finais

Descrever aprendizados da equipe, limitações ou decisões tomadas durante a especificação e próximos passos necessários para transformar a proposta do sistema em um produto de software.

# 7. Anexos (se necessário)

Documentos complementares, glossário ou referências utilizadas.

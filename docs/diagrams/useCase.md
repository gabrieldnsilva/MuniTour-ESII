# Diagramas de Caso de Uso - MuniTour

## Diagrama de Caso de Uso Principal (PlantUML)

```plantuml
@startuml
!theme plain
skinparam backgroundColor white
skinparam actor {
  BackgroundColor lightBlue
  BorderColor darkBlue
}
skinparam usecase {
  BackgroundColor lightGreen
  BorderColor darkGreen
}
skinparam rectangle {
  BackgroundColor lightYellow
  BorderColor darkOrange
}

left to right direction

actor "Turista/Usuário" as T
actor "Administrador Municipal" as A
actor "Estabelecimento Local" as E

rectangle "Sistema MuniTour" {
  usecase "Visualizar Ponto Turístico" as UC1
  usecase "Consultar Estabelecimentos Locais" as UC2
  usecase "Explorar Conteúdo Histórico" as UC3
  usecase "Visualizar Rota Personalizada" as UC4
  usecase "Visualizar Mapa Interativo" as UC5
  usecase "Acessar Visualização 360°" as UC6
  usecase "Gerenciar Conteúdo Turístico" as UC7
  usecase "Validar Estabelecimentos" as UC8
  usecase "Atualizar Informações Históricas" as UC9
  usecase "Cadastrar Estabelecimento" as UC10
  usecase "Atualizar Informações do Estabelecimento" as UC11
}

' Conexões do Turista
T --> UC1
T --> UC2
T --> UC3
T --> UC4
T --> UC5

' Conexões do Administrador
A --> UC7
A --> UC8
A --> UC9

' Conexões do Estabelecimento
E --> UC10
E --> UC11

' Relacionamentos Include e Extend
UC1 ..> UC6 : <<include>>
UC1 ..> UC3 : <<include>>
UC4 ..> UC5 : <<include>>
UC2 ..> UC4 : <<extend>>

@enduml
```

## Diagrama de Atividade: Consultar Estabelecimentos (PlantUML)

```plantuml
@startuml
!theme plain
start

:Turista acessa seção de estabelecimentos;

if (Permissão de localização?) then (concedida)
  :Obter localização atual;
else (negada)
  :Permitir busca manual;
endif

:Definir critérios de busca;

switch (Tipo de busca?)
case (Por proximidade)
  :Listar estabelecimentos próximos;
case (Por categoria)
  :Filtrar por tipo;
case (Por nome)
  :Buscar por texto;
endswitch

if (Resultados encontrados?) then (sim)
  :Exibir lista/mapa de resultados;
  :Turista seleciona estabelecimento;
  :Exibir informações detalhadas;

  if (Informações completas?) then (sim)
    :Mostrar todos os dados;
  else (não)
    :Mostrar dados disponíveis + aviso;
  endif
else (não)
  :Exibir mensagem de nenhum resultado;
endif

stop
@enduml
```

## Diagrama de Atividade: Visualizar Ponto Turístico (PlantUML)

```plantuml
@startuml
!theme plain
start

:Turista seleciona ponto turístico;

:Sistema carrega informações básicas;

if (Informações carregadas?) then (sim)
  :Exibir dados básicos do ponto;

  switch (Ação do usuário?)
  case (Visualizar informações gerais)
    :Mostrar descrição completa;
    :Exibir horários e localização;
  case (Explorar conteúdo histórico)
    :Carregar linha do tempo;
    if (Conteúdo histórico disponível?) then (sim)
      :Exibir timeline interativa;
    else (não)
      :Mostrar mensagem de desenvolvimento;
    endif
  case (Acessar visualização 360°)
    if (Conteúdo 360° disponível?) then (sim)
      :Carregar visualização 360°;
      if (Carregamento bem-sucedido?) then (sim)
        :Ativar modo imersivo;
        :Permitir navegação 360°;
      else (não)
        :Exibir erro de carregamento;
        :Oferecer fotos normais;
      endif
    else (não)
      :Informar indisponibilidade;
      :Sugerir outros pontos com 360°;
    endif
  case (Ver no mapa)
    :Abrir visualização do mapa;
    :Centralizar no ponto turístico;
  endswitch

else (não)
  :Exibir erro de carregamento;
  :Oferecer tentar novamente;
endif

stop
@enduml
```

## Diagrama de Atividade: Explorar Conteúdo Histórico (PlantUML)

```plantuml
@startuml
!theme plain
start

:Turista acessa conteúdo histórico;

:Sistema verifica disponibilidade;

if (Conteúdo histórico existe?) then (sim)
  :Carregar linha do tempo;
  :Exibir períodos históricos;

  :Turista navega pela timeline;

  switch (Período selecionado?)
  case (Período específico)
    :Carregar detalhes do período;

    if (Mídia histórica disponível?) then (sim)
      :Exibir fotos/documentos da época;

      switch (Tipo de mídia?)
      case (Fotos antigas)
        :Mostrar galeria de imagens;
        :Permitir comparação antes/depois;
      case (Documentos históricos)
        :Exibir documentos digitalizados;
        :Mostrar transcrições quando disponível;
      case (Vídeos históricos)
        :Reproduzir vídeos da época;
      endswitch

    else (não)
      :Exibir apenas texto descritivo;
      :Mostrar marcos históricos importantes;
    endif

  case (Visão geral completa)
    :Mostrar resumo de todos os períodos;
    :Destacar principais transformações;
  endswitch

  if (Usuário logado?) then (sim)
    :Oferecer salvar como favorito;
    :Permitir adicionar notas pessoais;
  endif

else (não)
  :Informar que conteúdo está em desenvolvimento;
  :Sugerir outros pontos com história disponível;
endif

stop
@enduml
```

## Diagrama de Atividade: Validar Estabelecimentos (Admin) (PlantUML)

```plantuml
@startuml
!theme plain
start

:Administrador acessa painel;

:Sistema autentica credenciais;

if (Autenticação válida?) then (sim)
  :Carregar estabelecimentos pendentes;

  if (Existem pendências?) then (sim)
    :Exibir lista de estabelecimentos;

    :Administrador seleciona estabelecimento;

    :Carregar informações completas;
    :Exibir formulário de dados;
    :Mostrar documentos enviados;

    switch (Decisão do administrador?)
    case (Aprovar)
      :Validar informações obrigatórias;

      if (Informações completas?) then (sim)
        :Marcar como aprovado;
        :Enviar notificação de aprovação;
        :Publicar estabelecimento;
      else (não)
        :Solicitar informações faltantes;
        :Manter como pendente;
      endif

    case (Rejeitar)
      :Solicitar motivo da rejeição;
      :Marcar como rejeitado;
      :Enviar notificação com justificativa;

    case (Solicitar correções)
      :Especificar correções necessárias;
      :Manter como pendente;
      :Enviar lista de pendências;
    endswitch

  else (não)
    :Informar que não há pendências;
    :Exibir estatísticas de validação;
  endif

else (não)
  :Exibir erro de autenticação;
  :Redirecionar para login;
endif

stop
@enduml
```

## Diagrama de Atividade: Cadastrar Estabelecimento (PlantUML)

```plantuml
@startuml
!theme plain
start

:Proprietário acessa formulário;

:Sistema exibe campos obrigatórios;

:Proprietário preenche informações básicas;

switch (Tipo de estabelecimento?)
case (Restaurante/Bar)
  :Adicionar informações gastronômicas;
  :Especificar tipo de culinária;
  :Incluir cardápio (opcional);
case (Hotel/Pousada)
  :Adicionar informações de hospedagem;
  :Especificar comodidades;
  :Incluir fotos dos quartos;
case (Atração turística)
  :Adicionar informações culturais;
  :Especificar horários de funcionamento;
  :Incluir preços de entrada;
endswitch

:Adicionar localização no mapa;

if (Localização precisa?) then (sim)
  :Confirmar endereço;

  :Upload de documentos comprobatórios;

  if (Documentos válidos?) then (sim)
    :Adicionar fotos do estabelecimento;

    if (Estabelecimento histórico?) then (sim)
      :Incluir informações históricas;
      :Upload de fotos antigas (opcional);
    endif

    :Revisar informações preenchidas;

    if (Informações corretas?) then (sim)
      :Submeter para validação;
      :Enviar confirmação por email;
      :Informar prazo de análise;
    else (não)
      :Retornar para edição;
    endif

  else (não)
    :Informar problemas nos documentos;
    :Solicitar reenvio;
  endif

else (não)
  :Solicitar ajuste na localização;
  :Oferecer busca por endereço;
endif

stop
@enduml
```

## Diagrama de Atividade: Visualizar Rota Personalizada (PlantUML)

```plantuml
@startuml
!theme plain
start

:Turista acessa criador de rotas;

if (Usuário logado?) then (sim)
  :Carregar pontos favoritos salvos;
else (não)
  :Permitir criação de rota temporária;
endif

:Exibir mapa interativo da cidade;

switch (Método de seleção?)
case (Selecionar pontos manualmente)
  :Turista clica nos pontos de interesse;
  :Adicionar à lista de rota;
case (Usar rota pré-definida)
  :Exibir rotas temáticas disponíveis;
  :Turista seleciona rota base;
case (Pontos próximos)
  if (Localização disponível?) then (sim)
    :Sugerir pontos próximos;
    :Permitir seleção múltipla;
  else (não)
    :Solicitar localização manual;
  endif
endswitch

if (Pontos selecionados?) then (sim)
  :Calcular rota otimizada;

  switch (Meio de transporte?)
  case (A pé)
    :Calcular rota para pedestres;
    :Estimar tempo de caminhada;
  case (Transporte público)
    :Integrar com sistema de transporte;
    :Mostrar paradas e horários;
  case (Carro)
    :Calcular rota veicular;
    :Mostrar locais de estacionamento;
  endswitch

  :Exibir rota no mapa;
  :Mostrar informações de cada ponto;
  :Calcular tempo total estimado;

  if (Usuário satisfeito com a rota?) then (sim)
    if (Usuário logado?) then (sim)
      :Oferecer salvar rota;
      :Permitir compartilhamento;
    endif
    :Iniciar navegação;
  else (não)
    :Permitir ajustes na rota;
  endif

else (não)
  :Informar necessidade de seleção;
  :Sugerir pontos populares;
endif

stop
@enduml
```

## Diagrama de Classes: Modelo de Domínio (PlantUML)

```plantuml
@startuml
!theme plain

class PontoTuristico {
  -id: Integer
  -nome: String
  -descricao: Text
  -latitude: Decimal
  -longitude: Decimal
  -categoria: Categoria
  -ativo: Boolean
  -createdAt: DateTime
  +visualizar360(): ConteudoMidia
  +obterHistorico(): List<ConteudoHistorico>
}

class Estabelecimento {
  -id: Integer
  -nome: String
  -tipo: TipoEstabelecimento
  -endereco: String
  -telefone: String
  -status: StatusValidacao
  -validadoEm: DateTime
  +soliciarValidacao(): void
  +atualizarInformacoes(): void
}

class ConteudoHistorico {
  -id: Integer
  -periodo: String
  -anoInicio: Integer
  -anoFim: Integer
  -descricao: Text
  -ordemTimeline: Integer
  +exibirNaTimeline(): void
}

class ConteudoMidia {
  -id: Integer
  -tipo: TipoMidia
  -url: String
  -urlCDN: String
  -tamanho: Long
  -formato: String
  +processar(): void
  +otimizar(): void
}

class Usuario {
  -id: Integer
  -nome: String
  -email: String
  -tipo: TipoUsuario
  -createdAt: DateTime
  +autenticar(): Boolean
  +salvarFavorito(ponto: PontoTuristico): void
}

class Categoria {
  -id: Integer
  -nome: String
  -descricao: String
  -icone: String
}

enum TipoEstabelecimento {
  RESTAURANTE
  LANCHONETE
  BAR
  HOTEL
  POUSADA
}

enum StatusValidacao {
  PENDENTE
  APROVADO
  REJEITADO
}

enum TipoMidia {
  FOTO_360
  VIDEO_360
  FOTO_NORMAL
  VIDEO_NORMAL
}

enum TipoUsuario {
  TURISTA
  ADMINISTRADOR
  ESTABELECIMENTO
}

PontoTuristico ||--o{ ConteudoHistorico
PontoTuristico ||--o{ ConteudoMidia
PontoTuristico }o--|| Categoria
Estabelecimento ||--o{ ConteudoMidia
Usuario ||--o{ PontoTuristico : favoritos

@enduml
```

## Diagrama de Componentes: Arquitetura do Sistema (PlantUML)

```plantuml
@startuml
!theme plain

package "Camada de Apresentação" {
  component [App Mobile\niOS/Android] as Mobile
  component [Portal Web\nDesktop] as Web
  component [Interface Totens\nTouch] as Totem
}

package "Camada de Serviços" {
  component [API Gateway] as Gateway
  component [Serviço de\nAutenticação] as Auth
  component [Serviço de\nConteúdo] as Content
  component [Serviço de\nGeolocalização] as Geo
  component [Serviço de\nMídia 360°] as Media
}

package "Camada de Dados" {
  database "PostgreSQL\nDados Principais" as DB
  database "Redis\nCache" as Cache
  component [CDN\nConteúdo Estático] as CDN
  component [Object Storage\nMídia] as Storage
}

package "Serviços Externos" {
  component [Mapbox/Google Maps] as Maps
  component [Firebase\nNotificações] as Firebase
  component [Cloudinary\nProcessamento] as Cloud
}

' Conexões Apresentação -> Gateway
Mobile --> Gateway : HTTPS/REST
Web --> Gateway : HTTPS/REST
Totem --> Gateway : HTTPS/REST

' Conexões Gateway -> Serviços
Gateway --> Auth
Gateway --> Content
Gateway --> Geo
Gateway --> Media

' Conexões Serviços -> Dados
Auth --> DB
Content --> DB
Geo --> DB
Media --> Storage

' Cache
Content --> Cache
Geo --> Cache

' CDN
Media --> CDN

' Serviços Externos
Geo --> Maps
Mobile --> Firebase
Media --> Cloud

@enduml
```

## Diagrama de Implantação (PlantUML)

```plantuml
@startuml
!theme plain

node "Dispositivos Móveis" {
  component [App MuniTour\niOS/Android] as MobileApp
}

node "Totens Públicos" {
  component [Interface Touch\nReact.js] as TotemApp
}

node "Navegadores Web" {
  component [Portal Web\nReact.js] as WebApp
}

cloud "Internet" as Internet

node "Load Balancer" {
  component [NGINX\nProxy Reverso] as LB
}

node "Servidor de Aplicação 1" {
  component [API Gateway\nNode.js] as API1
  component [Microserviços] as Services1
}

node "Servidor de Aplicação 2" {
  component [API Gateway\nNode.js] as API2
  component [Microserviços] as Services2
}

node "Servidor de Banco" {
  database [PostgreSQL\nCluster] as DB
  database [Redis\nCache] as Redis
}

cloud "AWS S3" {
  component [Object Storage\nMídia 360°] as S3
}

cloud "CloudFront CDN" {
  component [CDN\nConteúdo Global] as CDN
}

' Conexões
MobileApp --> Internet
TotemApp --> Internet
WebApp --> Internet

Internet --> LB

LB --> API1
LB --> API2

API1 --> Services1
API2 --> Services2

Services1 --> DB
Services1 --> Redis
Services2 --> DB
Services2 --> Redis

Services1 --> S3
Services2 --> S3

S3 --> CDN
CDN --> Internet

@enduml
```

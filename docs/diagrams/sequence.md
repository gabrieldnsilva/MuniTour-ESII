# Diagramas de Sequência - MuniTour

## Fluxo de Autenticação de Usuário

```plantuml
@startuml
!theme plain
actor "Usuário" as U
participant "App/Web" as APP
participant "API Gateway" as API
participant "Serviço Auth" as AUTH
database "PostgreSQL" as DB
participant "Firebase" as FB

U -> APP: Clica em "Login"
APP -> APP: Exibe opções de login

alt Login com Google/Facebook
    APP -> FB: Inicia OAuth2
    FB --> APP: Token OAuth2
    APP -> API: POST /auth/oauth {token}
    API -> AUTH: Validar token OAuth2
    AUTH -> FB: Verificar token
    FB --> AUTH: Dados do usuário
    AUTH -> DB: Buscar/Criar usuário
    DB --> AUTH: Dados do usuário
    AUTH --> API: JWT + Refresh Token
    API --> APP: Tokens + Dados usuário
else Login tradicional
    APP -> API: POST /auth/login {email, password}
    API -> AUTH: Validar credenciais
    AUTH -> DB: SELECT user WHERE email
    DB --> AUTH: Hash da senha
    AUTH -> AUTH: Verificar senha
    AUTH --> API: JWT + Refresh Token
    API --> APP: Tokens + Dados usuário
end

APP -> APP: Armazenar tokens
APP --> U: Login realizado com sucesso

@enduml
```

## Fluxo de Carregamento de Conteúdo 360°

```plantuml
@startuml
!theme plain
actor "Turista" as T
participant "App Mobile" as APP
participant "API Gateway" as API
participant "Serviço Mídia" as SM
participant "Object Storage" as S3
participant "CDN" as CDN
database "PostgreSQL" as DB

T -> APP: Solicita visualização 360°
APP -> API: GET /pontos/{id}/midia-360
API -> SM: Buscar mídia 360°

SM -> DB: SELECT midia WHERE ponto_id = {id} AND tipo = '360'
DB --> SM: Lista de arquivos 360°

alt Conteúdo disponível
    SM -> S3: Verificar disponibilidade dos arquivos
    S3 --> SM: Status dos arquivos
    SM -> SM: Gerar URLs do CDN
    SM --> API: URLs otimizadas para dispositivo
    API --> APP: Lista de URLs 360°

    loop Para cada arquivo de mídia
        APP -> CDN: Solicitar arquivo otimizado
        CDN --> APP: Stream de mídia
    end

    APP -> APP: Renderizar visualização 360°
    APP --> T: Experiência 360° carregada

else Conteúdo indisponível
    SM --> API: Status: não disponível
    API --> APP: Erro: conteúdo indisponível
    APP --> T: Mensagem de indisponibilidade
end

@enduml
```

## Fluxo de Validação de Estabelecimento

```plantuml
@startuml
!theme plain
actor "Estabelecimento" as E
actor "Administrador" as A
participant "Portal Web" as WEB
participant "API Gateway" as API
participant "Serviço Conteúdo" as SC
participant "Sistema Email" as EMAIL
database "PostgreSQL" as DB

== Cadastro do Estabelecimento ==
E -> WEB: Acessa formulário de cadastro
WEB -> API: POST /estabelecimentos/cadastrar
API -> SC: Criar novo estabelecimento
SC -> DB: INSERT estabelecimento (status='pendente')
DB --> SC: ID do estabelecimento
SC -> EMAIL: Enviar confirmação para estabelecimento
SC -> EMAIL: Notificar administrador municipal
SC --> API: Estabelecimento cadastrado
API --> WEB: Confirmação de cadastro
WEB --> E: Cadastro realizado - aguardando validação

== Processo de Validação ==
A -> WEB: Acessa painel administrativo
WEB -> API: GET /admin/estabelecimentos/pendentes
API -> SC: Listar estabelecimentos pendentes
SC -> DB: SELECT * WHERE status='pendente'
DB --> SC: Lista de estabelecimentos
SC --> API: Dados dos estabelecimentos
API --> WEB: Lista para validação
WEB --> A: Exibe estabelecimentos pendentes

A -> WEB: Seleciona estabelecimento para validar
WEB -> API: GET /admin/estabelecimentos/{id}
API -> SC: Buscar detalhes completos
SC -> DB: SELECT detalhes completos
DB --> SC: Dados completos
SC --> API: Informações detalhadas
API --> WEB: Dados para validação
WEB --> A: Formulário de validação

alt Aprovação
    A -> WEB: Aprova estabelecimento
    WEB -> API: PUT /admin/estabelecimentos/{id}/aprovar
    API -> SC: Aprovar estabelecimento
    SC -> DB: UPDATE status='aprovado', validado_em=NOW()
    DB --> SC: Confirmação
    SC -> EMAIL: Notificar estabelecimento (aprovado)
    SC --> API: Estabelecimento aprovado
    API --> WEB: Confirmação de aprovação
    WEB --> A: Aprovação realizada
else Rejeição
    A -> WEB: Rejeita com justificativa
    WEB -> API: PUT /admin/estabelecimentos/{id}/rejeitar {motivo}
    API -> SC: Rejeitar estabelecimento
    SC -> DB: UPDATE status='rejeitado'
    DB --> SC: Confirmação
    SC -> EMAIL: Notificar estabelecimento (rejeitado + motivo)
    SC --> API: Estabelecimento rejeitado
    API --> WEB: Confirmação de rejeição
    WEB --> A: Rejeição realizada
end

@enduml
```

## Fluxo de Sincronização dos Totens

```plantuml
@startuml
!theme plain
participant "Totem" as T
participant "API Gateway" as API
participant "Serviço Conteúdo" as SC
participant "CDN" as CDN
database "PostgreSQL" as DB
participant "Scheduler" as SCHED

== Sincronização Automática (Noturna) ==
SCHED -> SCHED: 02:00 AM - Iniciar sincronização
SCHED -> API: POST /totens/sincronizar

loop Para cada totem ativo
    API -> T: GET /status
    T --> API: Status e versão do conteúdo

    API -> SC: Verificar atualizações para totem
    SC -> DB: SELECT conteudo WHERE updated_at > {ultima_sync}

    alt Há atualizações
        DB --> SC: Lista de conteúdo atualizado
        SC -> CDN: Preparar pacote de sincronização
        CDN --> SC: URLs dos arquivos
        SC --> API: Pacote de atualização

        API -> T: POST /sincronizar {pacote}
        T -> T: Baixar e instalar atualizações
        T -> T: Validar integridade dos arquivos
        T --> API: Status da sincronização

        alt Sincronização bem-sucedida
            API -> SC: Confirmar sincronização do totem
            SC -> DB: UPDATE ultima_sincronizacao = NOW()
        else Erro na sincronização
            API -> SC: Registrar erro de sincronização
            SC -> DB: INSERT log_erro_sincronizacao
        end

    else Sem atualizações
        DB --> SC: Nenhuma atualização
        SC --> API: Totem atualizado
    end
end

== Sincronização Manual ==
T -> T: Detecta problemas de conectividade
T -> API: GET /conteudo/essencial
API -> SC: Buscar conteúdo essencial offline
SC -> DB: SELECT conteudo WHERE essencial = true
DB --> SC: Conteúdo mínimo necessário
SC --> API: Pacote essencial
API --> T: Conteúdo offline
T -> T: Armazenar localmente
T -> T: Ativar modo offline

@enduml
```

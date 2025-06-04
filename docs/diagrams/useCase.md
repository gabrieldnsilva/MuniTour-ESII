# Diagramas de Caso de Uso - MuniTour

## Diagrama de Caso de Uso Principal (Mermaid)

```mermaid
graph TB
    %% Atores
    T[Turista/Usuário]
    A[Administrador Municipal]
    E[Estabelecimento Local]

    %% Sistema
    subgraph "Sistema MuniTour"
        %% Casos de Uso Principais
        UC1[Visualizar Ponto Turístico]
        UC2[Consultar Estabelecimentos Locais]
        UC3[Explorar Conteúdo Histórico]
        UC4[Visualizar Rota Personalizada]
        UC5[Visualizar Mapa Interativo]
        UC6[Acessar Visualização 360°]

        %% Casos de Uso de Administração
        UC7[Gerenciar Conteúdo Turístico]
        UC8[Validar Estabelecimentos]
        UC9[Atualizar Informações Históricas]

        %% Casos de Uso de Estabelecimento
        UC10[Cadastrar Estabelecimento]
        UC11[Atualizar Informações do Estabelecimento]
    end

    %% Conexões do Turista
    T --> UC1
    T --> UC2
    T --> UC3
    T --> UC4
    T --> UC5

    %% Conexões do Administrador
    A --> UC7
    A --> UC8
    A --> UC9

    %% Conexões do Estabelecimento
    E --> UC10
    E --> UC11

    %% Relacionamentos Include
    UC1 -.->|include| UC6
    UC1 -.->|include| UC3
    UC4 -.->|include| UC5
    UC2 -.->|extend| UC4

    %% Estilos
    classDef actor fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef usecase fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef system fill:#e8f5e8,stroke:#2e7d32,stroke-width:3px

    class T,A,E actor
    class UC1,UC2,UC3,UC4,UC5,UC6,UC7,UC8,UC9,UC10,UC11 usecase
```

## Fluxo de Atividade: Visualizar Ponto Turístico

```mermaid
graph TD
    A[Início] --> B[Turista acessa lista de pontos turísticos]
    B --> C{Selecionar ponto turístico}
    C --> D[Sistema carrega informações básicas]
    D --> E{Escolher tipo de visualização}

    E -->|Informações Gerais| F[Exibir descrição e dados básicos]
    E -->|História| G[Exibir linha do tempo histórica]
    E -->|Galeria| H[Exibir fotos e vídeos]
    E -->|360°| I{Conteúdo 360° disponível?}
    E -->|Realidade Aumentada| J{Dispositivo compatível com AR?}

    I -->|Sim| K[Carregar visualização 360°]
    I -->|Não| L[Exibir mensagem de indisponibilidade]

    J -->|Sim| M[Ativar modo AR]
    J -->|Não| N[Sugerir alternativas]

    F --> O{Usuário satisfeito?}
    G --> O
    H --> O
    K --> O
    M --> O
    L --> O
    N --> O

    O -->|Não| E
    O -->|Sim| P[Fim]
```

## Fluxo de Atividade: Consultar Estabelecimentos Locais

```mermaid
graph TD
    A[Início] --> B[Turista acessa seção de estabelecimentos]
    B --> C{Solicitar permissão de localização}

    C -->|Permitida| D[Obter localização atual]
    C -->|Negada| E[Permitir busca manual]

    D --> F[Definir critérios de busca]
    E --> F

    F --> G{Tipo de busca}
    G -->|Por proximidade| H[Listar estabelecimentos próximos]
    G -->|Por categoria| I[Filtrar por tipo de estabelecimento]
    G -->|Por nome| J[Buscar por texto]

    H --> K{Resultados encontrados?}
    I --> K
    J --> K

    K -->|Sim| L[Exibir lista/mapa de resultados]
    K -->|Não| M[Exibir mensagem de nenhum resultado]

    L --> N[Turista seleciona estabelecimento]
    N --> O[Exibir informações detalhadas]
    O --> P{Informações completas?}

    P -->|Sim| Q[Mostrar todos os dados]
    P -->|Não| R[Mostrar dados disponíveis + aviso]

    Q --> S[Fim]
    R --> S
    M --> S
```

## Fluxo de Atividade: Explorar Conteúdo Histórico

```mermaid
graph TD
    A[Início] --> B[Turista seleciona local histórico]
    B --> C[Sistema carrega dados históricos]
    C --> D{Conteúdo disponível?}

    D -->|Sim| E[Exibir linha do tempo]
    D -->|Não| F[Exibir mensagem de conteúdo em desenvolvimento]

    E --> G[Usuário navega pela timeline]
    G --> H{Selecionar período específico}

    H --> I[Exibir detalhes do período]
    I --> J{Mídia disponível?}

    J -->|Sim| K[Exibir fotos/documentos históricos]
    J -->|Não| L[Exibir apenas texto descritivo]

    K --> M{Explorar mais períodos?}
    L --> M

    M -->|Sim| H
    M -->|Não| N[Fim]

    F --> N
```

## Fluxo de Atividade: Administração de Conteúdo

```mermaid
graph TD
    A[Início] --> B[Administrador faz login]
    B --> C{Credenciais válidas?}

    C -->|Não| D[Exibir erro de autenticação]
    C -->|Sim| E[Acessar painel administrativo]

    E --> F{Escolher ação}
    F -->|Gerenciar pontos turísticos| G[Listar pontos cadastrados]
    F -->|Validar estabelecimentos| H[Listar estabelecimentos pendentes]
    F -->|Atualizar conteúdo histórico| I[Acessar editor de conteúdo]

    G --> J{Ação no ponto turístico}
    J -->|Editar| K[Modificar informações]
    J -->|Adicionar mídia| L[Upload de fotos/vídeos 360°]
    J -->|Remover| M[Confirmar remoção]

    H --> N{Ação no estabelecimento}
    N -->|Aprovar| O[Publicar estabelecimento]
    N -->|Rejeitar| P[Enviar feedback de rejeição]
    N -->|Solicitar correções| Q[Enviar solicitação de ajustes]

    I --> R[Editar conteúdo histórico]
    R --> S[Salvar alterações]

    K --> T[Salvar mudanças]
    L --> T
    M --> T
    O --> T
    P --> T
    Q --> T
    S --> T

    T --> U{Continuar editando?}
    U -->|Sim| F
    U -->|Não| V[Logout]

    D --> W[Fim]
    V --> W
```

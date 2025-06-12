# MuniTour

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Development](https://img.shields.io/badge/Status-Development-orange.svg)]()

## Sobre o Projeto

MuniTour é uma plataforma interativa de turismo inteligente para cidades, desenvolvida como parte do curso de Análise e Desenvolvimento de Sistemas na disciplina de Engenharia de Software II.

A plataforma oferece uma experiência imersiva e educativa para turistas e moradores locais, combinando tecnologias modernas com informações culturais verificadas pela administração municipal.

## Visão do Produto

Para **turistas e moradores locais** que **desejam explorar e conhecer melhor os pontos turísticos, história e cultura da cidade**, o **MuniTour** é uma **plataforma interativa de turismo inteligente** que apresenta **visualizações em 360° de locais turísticos, informações históricas com linha do tempo evolutiva, mapa interativo dos bairros e recomendações gastronômicas culturais**. Diferente de **guias turísticos tradicionais e aplicativos convencionais de turismo**, o **MuniTour** oferece **uma experiência imersiva pré-visita, conteúdo histórico-cultural verificado, acesso através de totens espalhados pela cidade e integração oficial com estabelecimentos locais validados pela prefeitura municipal**.

## Funcionalidades Principais

-   🏛️ **Visualização 360°** de locais turísticos
-   📚 **Informações histórico-culturais** dos pontos de interesse
-   ⏰ **Linha do tempo** com evolução histórica dos locais
-   🗺️ **Mapa interativo** dos bairros
-   🍽️ **Informações sobre estabelecimentos**
-   🏛️ **Integração oficial** com a prefeitura municipal
-   📱 **Realidade Aumentada** para exploração imersiva
-   📍 **Geolocalização** e busca baseada em localização
-   🛣️ **Planejamento de rotas** personalizadas
-   👤 **Perfil de usuário** com histórico e favoritos

## Status do Desenvolvimento

✅ **Protótipo Funcional Completo** - Todas as 9 funcionalidades principais (RF01-RF09) foram implementadas e testadas.

### Funcionalidades Implementadas:

-   ✅ RF01: Visualização 360°
-   ✅ RF02: Consulta de Estabelecimentos
-   ✅ RF03: Conteúdo Histórico
-   ✅ RF04: Mapa Interativo (com Google Maps)
-   ✅ RF05: Rotas Personalizadas
-   ✅ RF06: Cadastro de Estabelecimentos
-   ✅ RF07: Validação Municipal
-   ✅ RF08: Realidade Aumentada
-   ✅ RF09: Geolocalização

## Como Executar o Protótipo

1. **Obter chave da API do Google Maps**:

    - Acesse [Google Cloud Console](https://console.cloud.google.com/)
    - Ative a "Maps JavaScript API"
    - Crie uma chave de API

2. **Configurar o projeto**:
    - Substitua `YOUR_API_KEY` no arquivo `src/MuniTourProt.html` pela sua chave real
3. **Executar**:
    - Abra `src/MuniTourProt.html` em um navegador web moderno
    - A aplicação funcionará offline (exceto mapas que requerem internet)

## Estrutura do Projeto

```
MuniTour/
├── src/
│   └── MuniTourProt.html    # Protótipo completo da aplicação
├── docs/                    # Documentação do projeto
├── README.md               # Este arquivo
└── LICENSE                 # Licença do projeto
```

## Documentação

Para mais detalhes, consulte:

-   [Visão do Produto](./docs/VISION.md)
-   [Funcionalidades](./docs/FEATURES.md)
-   [Diagramas de Caso de Uso](./docs/diagrams/useCase.md)

## Equipe

-   **Gabriel Danilo**
-   **Kaique Carvalho**
-   **Rogério Rodrigues**

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Projeto Acadêmico** - Análise e Desenvolvimento de Sistemas  
_Engenharia de Software II_

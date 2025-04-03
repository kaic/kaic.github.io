# Technical Debts

Este documento lista as pendências técnicas que foram identificadas durante o desenvolvimento e que devem ser resolvidas em futuras iterações para melhorar a qualidade e manutenibilidade do código.

## Pendências de UI/UX

- **Responsividade dos Cards de Artigos**: A implementação atual dos cards de artigos foi ajustada para funcionar em dispositivos móveis, mas poderia ser refatorada para usar um sistema de grid mais consistente.

- **Sistema de Cores das Plataformas**: O sistema atual de cores para diferentes plataformas (Substack, Dev.to) está hard-coded no componente. Seria melhor movê-lo para um arquivo de configuração ou contexto de tema.

- **Formatação de Data**: A formatação de data nos artigos está implementada diretamente no componente. Poderia ser extraída para um utilitário de formatação de datas reutilizável.

## Melhorias Estruturais

- **Estrutura de Componentes**: Alguns componentes como `ArticleLink` poderiam ser divididos em subcomponentes menores (como `ArticleHeader`, `ArticleFooter`, etc.) para melhorar a manutenibilidade.

- **Sistema de Tradução**: O sistema atual de tradução funciona, mas as chaves estão espalhadas pelo código. Uma abordagem com namespaces mais estruturados facilitaria a manutenção.

- **Tipagem de Dados**: Interfaces como `IArticle` e `IReadSource` poderiam ser movidas para um arquivo de tipos centralizado em vez de estarem no componente de artigos.

## Otimizações de Performance

- **Lazy Loading de Imagens**: Implementar lazy loading para imagens e conteúdo abaixo da dobra da tela.

- **Carregamento de Fontes**: Otimizar o carregamento de fontes para evitar "layout shifts" durante o carregamento da página.

- **Estratégia de Cache**: Implementar uma estratégia de cache mais robusta para conteúdo estático.

## Acessibilidade

- **Melhorar Contrastes**: Alguns textos em cores mais claras podem não ter contraste suficiente para usuários com deficiência visual.

- **Navegação por Teclado**: Garantir que todos os elementos interativos são acessíveis via teclado com foco visível adequado.

- **Texto Alternativo**: Garantir que todas as imagens têm texto alternativo apropriado.

## Integrações

- **Busca**: Implementar uma funcionalidade de busca para filtrar artigos.

- **Automação de Artigos**: Criar um sistema para automaticamente extrair e exibir os últimos artigos do Substack/Dev.to via API, em vez de atualizar manualmente.

- **Analytics**: Integrar uma solução de analytics para acompanhar métricas de engajamento.
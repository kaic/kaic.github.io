# Technical Debts

Este documento lista as pendências técnicas que foram identificadas durante o desenvolvimento e que devem ser resolvidas em futuras iterações para melhorar a qualidade e manutenibilidade do código.

## Pendências de UI/UX

- **Responsividade dos Cards de Artigos**: A implementação atual dos cards de artigos foi ajustada para funcionar em dispositivos móveis, mas poderia ser refatorada para usar um sistema de grid mais consistente.

- **Sistema de Cores das Plataformas**: O sistema atual de cores foi movido para a função `getPlatformStyle` em utils.ts, mas idealmente deveria ser integrado com um sistema de tema centralizado.

- **Formatação de Data**: A formatação de data nos artigos foi movida para uma função utilitária, mas ainda está hardcoded para inglês. Deveria respeitar o idioma atual da UI.

- **Ícones de Plataforma**: Os SVGs para ícones de plataforma devem ser extraídos para um arquivo de componentes de ícones reutilizáveis.

## Melhorias Estruturais

- **Estrutura de Componentes**: Alguns componentes como `ArticleLink` poderiam ser divididos em subcomponentes menores (como `ArticleHeader`, `ArticleFooter`, etc.) para melhorar a manutenibilidade.

- **Sistema de Tradução**: O sistema atual de tradução funciona, mas as chaves estão espalhadas pelo código. Uma abordagem com namespaces mais estruturados facilitaria a manutenção.

- **Armazenamento de Dados**: Os dados dos artigos estão hard-coded no componente Articles. Idealmente deveriam ser extraídos para um arquivo de dados separado ou um CMS.

- **Componente Badge Multilíngue**: O badge multilíngue atual usa códigos de linguagem hardcoded (EN/PT). Deveria pegar as linguagens dinamicamente do artigo.

## Otimizações de Performance

- **Lazy Loading de Imagens**: Implementar lazy loading para imagens e conteúdo abaixo da dobra da tela.

- **Carregamento de Fontes**: Otimizar o carregamento de fontes para evitar "layout shifts" durante o carregamento da página.

- **Estratégia de Cache**: Implementar uma estratégia de cache mais robusta para conteúdo estático.

## Acessibilidade

- **Melhorar Contrastes**: Alguns textos em cores mais claras podem não ter contraste suficiente para usuários com deficiência visual.

- **Navegação por Teclado**: Garantir que todos os elementos interativos são acessíveis via teclado com foco visível adequado.

- **Texto Alternativo**: Garantir que todas as imagens têm texto alternativo apropriado.

- **Badges e Filtros de Idioma**: Melhorar a acessibilidade dos badges e filtros de idioma, garantindo que são legíveis por leitores de tela.

## Integrações

- **Busca**: Implementar uma funcionalidade de busca para filtrar artigos.

- **Automação de Artigos**: Criar um sistema para automaticamente extrair e exibir os últimos artigos do Substack/Dev.to via API, em vez de atualizar manualmente.

- **Analytics**: Integrar uma solução de analytics para acompanhar métricas de engajamento.

- **Integração Substack**: Implementar uma integração mais robusta com o Substack para mostrar estatísticas reais e atualizadas da newsletter.

## Melhorias da Newsletter

- **Preview Dinâmico**: O preview da newsletter está atualmente hardcoded. Idealmente, deveria buscar dinamicamente o último artigo publicado no Substack.

- **Formulário de Inscrição Embutido**: Implementar um formulário de inscrição diretamente no site, sem redirecionar para o Substack.

- **Estatísticas Reais**: Mostrar estatísticas reais e dinâmicas da newsletter, conectando-se à API do Substack.
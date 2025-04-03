# Technical Debts (Atualizados)

Este documento lista as pendências técnicas que foram identificadas durante o desenvolvimento e que devem ser resolvidas em futuras iterações para melhorar a qualidade e manutenibilidade do código.

## Pendências de UI/UX

- ✅ **Responsividade dos Cards de Artigos**: Implementado ajustes para melhorar o comportamento em dispositivos móveis, incluindo espaçamento, tamanho de componentes e layout flexível.

- ✅ **Sistema de Cores das Plataformas**: O sistema de cores foi movido para a função `getPlatformStyle` em utils.ts, melhorando a consistência e manutenção. Ícones agora têm cores adequadas.

- ✅ **Formatação de Data**: A formatação de data nos artigos agora respeita o idioma atual da UI através do `useLocale()` e `formatArticleDate()`.

- ⚠️ **Ícones de Plataforma**: Os SVGs para ícones de plataforma ainda precisam ser extraídos para um arquivo de componentes de ícones reutilizáveis.

## Melhorias Estruturais

- ⚠️ **Estrutura de Componentes**: Alguns componentes ainda podem ser divididos em subcomponentes menores para melhorar a manutenibilidade.

- ✅ **Sistema de Tradução**: Melhorias na implementação do sistema de tradução para contatos e outros componentes, garantindo suporte completo a múltiplos idiomas.

- ✅ **Armazenamento de Dados**: Os dados dos artigos foram extraídos para um arquivo separado (`articles-data.ts`), melhorando a organização e manutenibilidade.

- ✅ **Componente Badge Multilíngue**: O badge multilíngue agora gera dinamicamente os idiomas disponíveis com base nos dados do artigo.

## Otimizações de Performance

- ⚠️ **Lazy Loading de Imagens**: Implementar lazy loading para imagens e conteúdo abaixo da dobra da tela.

- ⚠️ **Carregamento de Fontes**: Otimizar o carregamento de fontes para evitar "layout shifts" durante o carregamento da página.

- ⚠️ **Estratégia de Cache**: Implementar uma estratégia de cache mais robusta para conteúdo estático.

## Acessibilidade

- ✅ **Navegação por Teclado**: Melhorias na navegação e foco de elementos interativos, com adição de atributos `aria-label`.

- ⚠️ **Melhorar Contrastes**: Alguns textos em cores mais claras podem não ter contraste suficiente para usuários com deficiência visual.

- ⚠️ **Texto Alternativo**: Garantir que todas as imagens têm texto alternativo apropriado.

- ✅ **Badges e Filtros de Idioma**: Implementado melhorias na acessibilidade e responsividade dos badges e filtros de idioma.

## Integrações

- ⚠️ **Busca**: Implementar uma funcionalidade de busca para filtrar artigos.

- ⚠️ **Automação de Artigos**: Criar um sistema para automaticamente extrair e exibir os últimos artigos do Substack/Dev.to via API, em vez de atualizar manualmente.

- ⚠️ **Analytics**: Integrar uma solução de analytics para acompanhar métricas de engajamento.

- ⚠️ **Integração Substack**: Implementar uma integração mais robusta com o Substack para mostrar estatísticas reais e atualizadas da newsletter.

## Melhorias da Newsletter

- ⚠️ **Preview Dinâmico**: O preview da newsletter está atualmente hardcoded. Idealmente, deveria buscar dinamicamente o último artigo publicado no Substack.

- ⚠️ **Formulário de Inscrição Embutido**: Implementar um formulário de inscrição diretamente no site, sem redirecionar para o Substack.

- ⚠️ **Estatísticas Reais**: Mostrar estatísticas reais e dinâmicas da newsletter, conectando-se à API do Substack.

## Melhorias Realizadas

1. **Responsividade Aprimorada**: 
   - Ajustes nos espaçamentos e tamanhos para dispositivos móveis
   - Melhorias na navegação e no layout de artigos
   - Solução para problemas de hidratação no componente de troca de idioma

2. **Internacionalização**:
   - Formatação de datas localizada conforme o idioma selecionado
   - Tradução completa de elementos da UI incluindo na seção de contatos
   - Suporte dinâmico para múltiplos idiomas nos badges de artigos

3. **Organização do Código**:
   - Extração dos dados de artigos para um arquivo separado
   - Implementação de componentes mais flexíveis e reutilizáveis
   - Melhor uso do Tailwind para responsividade com breakpoints apropriados
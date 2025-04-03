export const sanitizeString = (str: string) =>
  str.replace(/https:\/\//g, '').replace(/mailto:/g, '');

// Types for articles and sources
export interface IReadSource {
  url: string;
  language: string;
  platform: string;
}

export interface IArticle {
  title: string;
  description?: string;
  date: string;
  sources: IReadSource[];
}

export type LanguageFilter = 'all' | 'en' | 'pt-br';

// Utility functions for articles
export const filterArticlesByLanguage = (
  articles: IArticle[],
  languageFilter: LanguageFilter
): IArticle[] => {
  if (languageFilter === 'all') return articles;
  
  return articles.filter(article => 
    article.sources.some(source => source.language === languageFilter)
  );
};

export const isMultilingualArticle = (article: IArticle): boolean => {
  const hasEnglish = article.sources.some(source => source.language === 'en');
  const hasPortuguese = article.sources.some(source => source.language === 'pt-br');
  return hasEnglish && hasPortuguese;
};

export const formatArticleDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
};

// Platform-specific styling for consistency
export const getPlatformStyle = (platform: string): string => {
  switch (platform) {
    case 'substack':
      return 'bg-orange-500 bg-opacity-20 text-orange-300 border-orange-500 hover:bg-opacity-30';
    case 'dev.to':
      return 'bg-indigo-500 bg-opacity-20 text-indigo-300 border-indigo-500 hover:bg-opacity-30';
    default:
      return 'bg-red-500 bg-opacity-20 text-red-300 border-red-500 hover:bg-opacity-30';
  }
};

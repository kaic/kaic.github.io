export const sanitizeString = (str: string) =>
  str.replace(/https:\/\//g, '').replace(/mailto:/g, '');

// Types for articles and sources
export interface IReadSource {
  url: string;
  platform: string;
}

export interface IArticle {
  title: string;
  description?: string;
  date: string;
  sources: IReadSource[];
}

export const formatArticleDate = (dateString: string, locale: string = 'en'): string => {
  // Adding T12:00:00 to ensure the date is interpreted at noon in local timezone
  // This prevents timezone issues where dates can appear as the previous day
  const date = new Date(`${dateString}T12:00:00`);
  // Map the locale to the correct format for Intl.DateTimeFormat
  const dateLocale = locale === 'pt-br' ? 'pt-BR' : 'en-US';
  
  return new Intl.DateTimeFormat(dateLocale, { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
};

// Platform-specific styling for consistency
export const getPlatformStyle = (platform: string): string => {
  switch (platform) {
    case 'substack':
      return 'bg-orange-500 bg-opacity-20 text-orange-400 border-orange-500 hover:bg-opacity-30';
    case 'dev.to':
      return 'bg-indigo-500 bg-opacity-20 text-indigo-300 border-indigo-500 hover:bg-opacity-30';
    default:
      return 'bg-red-500 bg-opacity-20 text-red-300 border-red-500 hover:bg-opacity-30';
  }
};

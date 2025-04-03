import { useTranslations } from 'next-intl';
import { 
  IArticle, 
  IReadSource, 
  formatArticleDate, 
  isMultilingualArticle,
  getPlatformStyle
} from '@src/utils';

interface ArticleLinkProps {
  article: IArticle;
}

// Plataform icons component - could be moved to a separate icons file
const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'substack':
      return (
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
        </svg>
      );
    case 'dev.to':
      return (
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
        </svg>
      );
    default:
      return null;
  }
};

// Source button component
const SourceButton = ({ source, label }: { source: IReadSource, label: string }) => {
  return (
    <a
      href={source.url}
      target='_blank'
      rel='noopener'
      className={`hover:opacity-90 transition-all active:scale-95 mr-2 mb-2 inline-flex items-center px-4 py-2 rounded-md text-sm border border-opacity-30 ${getPlatformStyle(source.platform)}`}
    >
      <PlatformIcon platform={source.platform} />
      {label} {source.language.toUpperCase()}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-2">
        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
      </svg>
    </a>
  );
};

// Language badge component
const LanguageBadge = ({ article }: { article: IArticle }) => {
  const t = useTranslations('Home.Articles');
  
  if (!isMultilingualArticle(article)) return null;
  
  return (
    <div className="flex items-center px-2 py-1 mb-3 bg-gray-800 border border-red-400 border-opacity-30 rounded-md shadow-sm">
      <span className="text-xs text-gray-200 font-medium flex items-center">
        <span className="text-red-400 mr-1">{t('available_in')}</span>
        <div className="flex space-x-1 ml-1">
          <span className="px-1.5 py-0.5 bg-gray-700 rounded text-[10px] uppercase font-bold">EN</span>
          <span className="px-1.5 py-0.5 bg-gray-700 rounded text-[10px] uppercase font-bold">PT</span>
        </div>
      </span>
    </div>
  );
};

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  const t = useTranslations('Home.Articles');

  return (
    <div className='p-5 text-left block rounded-lg border border-gray-800 shadow-md'>
      <div className="flex justify-between items-start">
        <h3 className='text-xl font-bold text-white mb-3'>
          {article.title}
        </h3>
        <LanguageBadge article={article} />
      </div>
      
      {article.description && (
        <p className='text-gray-200 text-base mb-4'>{article.description}</p>
      )}
      <div className='flex justify-between items-center mb-4'>
        <div className='px-2 py-1 rounded-md bg-gray-800 bg-opacity-50'>
          <p className='text-gray-300 text-sm'>{formatArticleDate(article.date)}</p>
        </div>
      </div>
      <div className='flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700 border-opacity-50'>
        {article.sources.map((source, index) => (
          <SourceButton key={index} source={source} label={t('link')} />
        ))}
      </div>
    </div>
  );
};

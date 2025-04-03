import { useTranslations } from 'next-intl';
import { ArticleLink } from './components/ArticleLinks';
import { useState } from 'react';
import { IArticle, LanguageFilter, filterArticlesByLanguage } from '@src/utils';
import articlesData from './articles-data';

/**
 * Articles component that displays a list of articles with language filtering
 */
function Articles() {
  const t = useTranslations('Home.Articles');
  // State for language filter
  const [languageFilter, setLanguageFilter] = useState<LanguageFilter>('all');
  const articlesList: IArticle[] = articlesData;

  // Filter articles based on language selection using the utility function
  const filteredArticles = filterArticlesByLanguage(articlesList, languageFilter);

  return (
    <article id='articles'>
      <div className='max-w-4xl mx-auto grid grid-rows-[auto_1fr_auto] p-4 pb-0 gap-5 sm:gap-6 md:gap-8 md:p-10 lg:p-20'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-8'>
          <h2 className='text-2xl font-bold text-red-300 mb-4 sm:mb-0'>{t('section-name')}</h2>
          
          {/* Language filter buttons */}
          <div className='flex flex-wrap gap-2 items-center'>
            <button 
              onClick={() => setLanguageFilter('all')}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                languageFilter === 'all' 
                  ? 'bg-red-400 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {t('all_languages')}
            </button>
            <button 
              onClick={() => setLanguageFilter('en')}
              className={`px-3 py-1.5 rounded-md flex items-center text-sm transition-colors ${
                languageFilter === 'en' 
                  ? 'bg-red-400 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="mr-1.5">🇺🇸</span> English
            </button>
            <button 
              onClick={() => setLanguageFilter('pt-br')}
              className={`px-3 py-1.5 rounded-md flex items-center text-sm transition-colors ${
                languageFilter === 'pt-br' 
                  ? 'bg-red-400 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="mr-1.5">🇧🇷</span> Português
            </button>
          </div>
        </div>
        <ul className='grid gap-6 sm:gap-8 mb-6 sm:mb-8'>
          {filteredArticles.map((article, index) => (
            <li key={index}>
              <ArticleLink article={article} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Articles;

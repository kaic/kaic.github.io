import { useTranslations } from 'next-intl';
import { ArticleLink } from './components/ArticleLinks';
import { useState } from 'react';
import { IArticle, LanguageFilter, filterArticlesByLanguage } from '@src/utils';

/**
 * Articles component that displays a list of articles with language filtering
 */
function Articles() {
  const t = useTranslations('Home.Articles');
  // State for language filter
  const [languageFilter, setLanguageFilter] = useState<LanguageFilter>('all');
  const articlesList: IArticle[] = [
    {
      title: "You're not coding alone anymore: Coding in the age of agents",
      date: '2025-03-29',
      description: 'How LLMs, code agents, MCPs, and "vibe coding" are reshaping the way we build and think about software.',
      sources: [
        {
          url: 'https://open.substack.com/pub/kaicbento/p/youre-not-coding-alone-anymore-coding',
          language: 'en',
          platform: 'substack'
        },
        {
          url: 'https://dev.to/kaic/youre-not-coding-alone-anymore-coding-in-the-age-of-agents-1i1e',
          language: 'en',
          platform: 'dev.to'
        },
        {
          url: 'https://dev.to/kaic/voce-nao-esta-mais-codificando-sozinhoa-o-desenvolvimento-na-era-dos-code-agents-11o9',
          language: 'pt-br',
          platform: 'dev.to'
        }
      ]
    },
    {
      title:
        'Why did I rewrite my website from scratch to make it (almost) identical?',
      date: '2025-03-11',
      description: 'This is not a text (only) about Next.js or React, but about the hidden complexities of software engineering decisions.',
      sources: [
        {
          url: 'https://open.substack.com/pub/kaicbento/p/why-did-i-rewrite-my-website-from?r=5vxpr&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
          language: 'en',
          platform: 'substack'
        }
      ]
    },
    {
      title: "Be your tool's best friend, not its enemy",
      description: "i.e. don't spend the day fighting against your computer.",
      date: '2024-12-22',
      sources: [
        {
          url: 'https://kaicbento.substack.com/p/be-your-tools-best-friend-not-its?r=5vxpr',
          language: 'en',
          platform: 'substack'
        }
      ]
    },
  ];

  // Filter articles based on language selection using the utility function
  const filteredArticles = filterArticlesByLanguage(articlesList, languageFilter);

  return (
    <article id='articles'>
      <div className='max-w-4xl mx-auto grid grid-rows-[auto_1fr_auto] p-4 pb-0 gap-6 sm:p-6 md:p-10 lg:p-20'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-8'>
          <h2 className='text-2xl font-bold mb-4 sm:mb-0'>{t('section-name')}</h2>
          
          {/* Language filter buttons */}
          <div className='flex space-x-2 items-center'>
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

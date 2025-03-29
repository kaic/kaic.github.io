import { useTranslations } from 'next-intl';
import { ArticleLink } from './components/ArticleLinks';

/**
 *
 * @interface IReadSource
 * @property {string} url - The URL of the article source.
 * @property {string} language - The language of the article source (e.g., 'en', 'pt-br').
 * @property {string} platform - The platform where the article is published (e.g., 'substack', 'dev.to').
 */
export interface IReadSource {
  url: string;
  language: string;
  platform: string;
}

/**
 *
 * @interface IArticle
 * @property {string} title - The title of the article.
 * @property {string} description - A short description of the article.
 * @property {string} date - The publication date of the article.
 * @property {IReadSource[]} sources - Sources where the article can be read.
 */
export interface IArticle {
  title: string;
  description?: string;
  date: string;
  sources: IReadSource[];
}
function Articles() {
  const t = useTranslations('Home.Articles');
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
          url: 'https://dev.to/kaic/voce-nao-esta-mais-codificando-sozinho-programando-na-era-dos-agentes-4h8k',
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

  return (
    <article id='articles'>
      <div className='grid grid-rows-[20px_1fr_20px] p-8 pb-0 gap-12 sm:p-20'>
        <h2 className='row text-2xl font-bold'>{t('section-name')}</h2>
        <ul className='row list-inside text-sm text-center sm:text-left'>
          <div className='mb-4 text-left p-4'>
            <a
              href="https://kaicbento.substack.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:opacity-80 transition-opacity flex items-center justify-center sm:justify-start gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span className="font-medium">
                {t(`subscribe-link`)}
              </span>
            </a>
          </div>
          {articlesList.map((article, index) => (
            <li key={index} className='mb-4'>
              <ArticleLink article={article}></ArticleLink>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Articles;

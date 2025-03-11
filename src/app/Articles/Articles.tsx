import { useTranslations } from 'next-intl';
import { ArticleLink } from './components/ArticleLinks';

/**
 *
 * @interface IArticle
 * @property {string} title - The title of the article.
 * @property {string} description - A short description of the article.
 * @property {string} url - The URL of the article.
 */
export interface IArticle {
  title: string;
  description?: string;
  date: string;
  url: string;
}
function Articles() {
  const t = useTranslations('Home.Articles');
  const articlesList: IArticle[] = [
    {
      title:
        'Why did I rewrite my website from scratch to make it (almost) identical?',
      date: '2025-03-11',
      description: 'This is not a text about (only) frontend, React or CSS, but about the hidden complexities of software engineering decisions.',
      url: 'https://open.substack.com/pub/kaicbento/p/why-did-i-rewrite-my-website-from?r=5vxpr&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    },
    {
      title: "Be your tool's best friend, not its enemy",
      description: "i.e. don't spend the day fighting against your computer.",
      date: '2024-12-22',
      url: 'https://kaicbento.substack.com/p/be-your-tools-best-friend-not-its?r=5vxpr',
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

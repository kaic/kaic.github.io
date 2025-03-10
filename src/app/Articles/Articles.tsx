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
      description: 'The story of how I rewrote my website from scratch.',
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
        <h2 className='text-2xl font-bold'>{t('section-name')}</h2>
        <ul className='list-inside text-sm text-center sm:text-left'>
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

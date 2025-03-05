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
  url: string;
}
function Articles() {
  const articlesList: IArticle[] = [
    {
      title: "🛠️ Be your tool's best friend, not its enemy",
      description: 'How to make the most out of your tools.',
      url: 'https://kaicbento.substack.com/p/be-your-tools-best-friend-not-its?r=5vxpr',
    },
    {
      title: "Be your tool's best friend, not its enemy",
      url: 'https://kaicbento.substack.com/p/be-your-tools-best-friend-not-its?r=5vxpr',
    },
    {
      title: "Be your tool's best friend, not its enemy",
      url: 'https://kaicbento.substack.com/p/be-your-tools-best-friend-not-its?r=5vxpr',
    },
  ];

  return (
    <article id='articles'>
      <div className='grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 sm:p-20'>
        <h2 className='text-2xl font-bold'>My articles</h2>
        <ul className='list-inside text-sm text-center sm:text-left'>
          {articlesList.map((article, index) => (
            <li key={index} className='mb-2'>
              <ArticleLink article={article}>{article.title}</ArticleLink>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Articles;

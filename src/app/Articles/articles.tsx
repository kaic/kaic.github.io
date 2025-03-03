import { ArticleLink } from './components/ArticleLinks';

/**
 * Interface representing an article.
 *
 * @interface IArticle
 * @property {string} title - The title of the article.
 * @property {string} url - The URL of the article.
 */
interface IArticle {
  title: string;
  url: string;
}
export default function Articles() {
  // Lista de artigos com seus URLs
  const articlesList: IArticle[] = [
    {
      title: "Be your tool's best friend, not its enemy",
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
        <ul className='list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          {articlesList.map((article, index) => (
            <li key={index} className='mb-2'>
              <ArticleLink href={article.url}>{article.title}</ArticleLink>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

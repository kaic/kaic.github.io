import { IArticle } from '../Articles';

interface ArticleLinkProps {
  article: IArticle;
}

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  return (
    <div className='p-4 text-left block border-l-2 border-l-red-400'>
      <h3 className='text-lg font-bold text-white mb-2'>
        {article.title}
      </h3>
      {article.description && (
        <p className='text-gray-200 text-sm mb-3'>{article.description}</p>
      )}
      <div className='flex text-red-400 text-sm font-medium'>
        <a
          href={article.url}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-red-300 active:text-red-900'
        >
          Read
        </a>
        </div>
    </div>
  );
};

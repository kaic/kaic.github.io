import { IArticle } from '../Articles';

interface ArticleLinkProps {
  article: IArticle;
}

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  return (
    <div className='p-4 text-left block'>
      <h3 className='text-lg font-bold text-white mb-2'>{article.title}</h3>
      {article.description && (
        <p className='text-gray-200 text-base mb-2'>{article.description}</p>
      )}
      <p className='text-gray-200 text-sm mb-2'>{article.date}</p>
      <div className='flex text-red-400 text-lg font-medium'>
        <a
          href={article.url}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-80 transition-opacity active:text-red-900'
        >
          Read
        </a>
      </div>
    </div>
  );
};

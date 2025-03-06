import { IArticle } from '../Articles';

interface ArticleLinkProps {
  article: IArticle;
}

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  return (
    <a
      href={article.url}
      target='_blank'
      rel='noopener noreferrer'
      className='text-left block bg-gray-800 rounded-lg'
    >
      <div className='p-4'>
        <h3 className='text-lg font-bold text-white mb-2'>
          {article.title}
        </h3>
        {article.description && (
          <p className='text-pink-400 text-sm mb-3'>{article.description}</p>
        )}
        <div className='flex text-pink-700 text-sm font-medium'>
          👉 Read article
        </div>
      </div>
    </a>
  );
};

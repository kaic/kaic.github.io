import { IArticle, IReadSource } from '../Articles';
import { useTranslations } from 'next-intl';

interface ArticleLinkProps {
  article: IArticle;
}

const SourceLink = ({ source, label }: { source: IReadSource, label: string }) => {
  return (
    <a
      href={source.url}
      target='_blank'
      rel='noopener'
      className='hover:opacity-80 transition-opacity active:text-red-900 mr-3 flex items-center text-sm'
    >
      {label} ({source.language.toUpperCase()})
      <span className='text-xs ml-1 opacity-70'>[{source.platform}]</span>
    </a>
  );
};

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  const t = useTranslations('Home.Articles');
  
  // Find Substack source (or default to first source)
  const substackSource = article.sources.find(source => source.platform === 'substack') || article.sources[0];

  return (
    <div className='p-4 text-left block hover:bg-gray-800 hover:bg-opacity-20 rounded-lg transition-colors'>
      <a 
        href={substackSource.url}
        target='_blank'
        rel='noopener'
        className='block group'
      >
        <h3 className='text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors'>
          {article.title}
        </h3>
      </a>
      {article.description && (
        <p className='text-gray-200 text-base mb-3'>{article.description}</p>
      )}
      <div className='flex justify-between items-center mb-3'>
        <p className='text-gray-300 text-sm'>{article.date}</p>
      </div>
      <div className='flex flex-wrap text-red-400 font-medium mt-2 pt-2 border-t border-gray-700 border-opacity-50'>
        {article.sources.map((source, index) => (
          <SourceLink key={index} source={source} label={t('link')} />
        ))}
      </div>
    </div>
  );
};

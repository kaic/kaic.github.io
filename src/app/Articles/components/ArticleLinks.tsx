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
      className='hover:opacity-80 transition-opacity active:text-red-900 mr-4 flex items-center'
    >
      {label} ({source.language.toUpperCase()})
      <span className='text-xs ml-1 opacity-70'>[{source.platform}]</span>
    </a>
  );
};

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  const t = useTranslations('Home.Articles');

  return (
    <div className='p-4 text-left block'>
      <h3 className='text-lg font-bold text-white mb-2'>{article.title}</h3>
      {article.description && (
        <p className='text-gray-200 text-base mb-2'>{article.description}</p>
      )}
      <p className='text-gray-200 text-sm mb-2'>{article.date}</p>
      <div className='flex flex-wrap text-red-400 text-lg font-medium'>
        {article.sources.map((source, index) => (
          <SourceLink key={index} source={source} label={t('link')} />
        ))}
      </div>
    </div>
  );
};

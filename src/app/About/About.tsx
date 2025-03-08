import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('Home.About');

  return (
    <article id='about'>
      <div className='grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 sm:p-20'>
        <h2 className='text-2xl font-bold text-left'>{t('section-name')}</h2>
        <p
          className='text-base leading-loose'
          style={{ whiteSpace: 'pre-line' }}
        >
          {t('paragraph')}
        </p>
      </div>
    </article>
  );
};

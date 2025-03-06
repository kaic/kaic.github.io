import { useTranslations } from 'next-intl';

export const Contact = () => {
  const t = useTranslations('Home.Contact');

  return (
    <article id='contact'>
      <div className='grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 sm:p-20'>
        <h2 className='text-2xl font-bold text-left'>Contact me</h2>
        <p className='text-base' style={{ whiteSpace: 'pre-line' }}>
          {t('paragraph')}
        </p>
      </div>
    </article>
  );
};

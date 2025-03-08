import { useTranslations } from 'next-intl';

export const Intro = () => {
  const t = useTranslations('Home.Main');
  return (
    <ul className='list-inside sm:text-left font-[family-name:var(--font-geist-mono)] xs:max-w-[40vw]'>
      <li className='text-2xl font-bold'>
        <p>{t('header.title')}</p>
      </li>
      <li className='mb-2 text-base leading-loose'>
        <p>{t('header.subtitle')}</p>
      </li>
      <li className='mb-2 text-base leading-loose'>
        <p>{t('header.description')}</p>
      </li>
      <li className='mb-2 text-sm'>
        <p className='text-red-400'>
          💼 {t('header.job.role')} <span className='text-white'>@</span> {t('header.job.company')}
        </p>
      </li>
      <li className='text-sm'>
        <p className='text-red-400'>
          🌎 {t('header.location')}
        </p>
      </li>
    </ul>
  );
};

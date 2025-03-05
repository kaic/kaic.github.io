import { useTranslations } from 'next-intl';
import { config } from '@src/config';

export const Intro = () => {
  const t = useTranslations('Home.Main');
  return (
    <ul className='list-inside sm:text-left font-[family-name:var(--font-geist-mono)] xs:max-w-[40vw]'>
      <li className='mb-2 text-2xl font-bold'>
        <p>{t('header.title')}</p>
      </li>
      <li className='mb-2 text-sm'>
        <p>{t('header.subtitle')}</p>
      </li>
      <li className='mb-2 text-sm'>
        <p>{t('header.description')}</p>
      </li>
      <li className='mb-2 text-sm'>
        <p>
          💼 {config.job.role} @ {config.job.company}
        </p>
      </li>
      <li className='mb-2 text-sm'>
        <p>🌎 {t('header.location')}</p>
      </li>
    </ul>
  );
};

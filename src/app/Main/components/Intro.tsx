import { useTranslations } from 'next-intl';
import { config } from '../../../config';

export const Intro = () => {
  const t = useTranslations('Home.Main');
    return (
        <ul className='list-inside sm:text-left font-[family-name:var(--font-geist-mono)]'>
        <li className='mb-2 text-lg font-bold'>
          <h1>{t('header.title')}</h1>
        </li>
        <li className='mb-2 text-sm'>
          <h1>{t('header.subtitle')}</h1>
        </li>
        <li className='mb-2 text-sm'>
          <h1>
            💼 {config.job.role} @ {config.job.company}
          </h1>
        </li>
        <li className='mb-2 text-sm'>
          <h1>🌎 {t('header.location')}</h1>
        </li>
      </ul>
    );
}
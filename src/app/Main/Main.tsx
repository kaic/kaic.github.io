import Image from 'next/image';
import { Nav } from './components/Nav';
import { useTranslations } from 'next-intl';
import { config } from '../../config';

//TODO: [] Fix Imports
//TODO: [] Create the nav component

export const Main = () => {
  const t = useTranslations('Home.Main');
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100vh] p-8 pb-20 gap-16 sm:p-20'>
      <header className='w-full p-4'>
        <Nav />
      </header>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Image
          src='/avatar.jpg'
          alt='My photo'
          width={280}
          height={138}
          priority
          className='rounded-full border-2 border-red-500 sm:self-center'
        />
        <ul className='list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          <li className='mb-2'>
            <h1>{t('header.title')}</h1>
          </li>
          <li className='mb-2'>
            <h1>{t('header.subtitle')}</h1>
          </li>
          <li className='mb-2'>
            <h1>
              💼 {config.job.role} @ {config.job.company}
            </h1>
          </li>
          <li className='mb-2'>
            <h1>🌎 {t('header.location')}</h1>
          </li>
        </ul>
      </main>
    </div>
  );
}
//TODO: [] Fix Imports
import Image from 'next/image';
import { Nav } from './components/Nav';
import { Intro } from './components/Intro';
import { useTranslations } from 'next-intl';

export const Main = () => {
  const t = useTranslations('Home.Main');
  
  return (
    <div className='grid grid-rows-[2px_1fr_2px] items-center justify-items-center p-8 pb-4 gap-10 sm:p-20'>
      <main className='w-full max-w-4xl flex flex-col gap-2 row-start-2 items-center sm:items-start'>
        <div className='w-full flex flex-col sm:flex-row sm:justify-between items-center mb-6'>
          <div className='flex items-center mb-4 sm:mb-0'>
            <Image
              src='/avatar.jpg'
              alt='My photo'
              width={120}
              height={120}
              priority
              className='rounded-full border-2 border-red-400 mr-4'
            />
            <div className='sm:block'>
              <h1 className='text-2xl font-bold text-white'>
                {t('header.title')}
              </h1>
            </div>
          </div>
          <Nav />
        </div>
        <Intro />
      </main>
    </div>
  );
};

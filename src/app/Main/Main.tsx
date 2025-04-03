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
        
        {/* Newsletter Section - Simple with Conversion Optimized */}
        <div className="w-full mt-12 bg-gray-900 py-7 px-6 rounded-lg border border-gray-800 relative overflow-hidden">
          {/* Subtle accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400 opacity-80"></div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
            <div className="text-left md:w-2/3">
              <div className="flex items-center mb-1.5">
                <span className="text-xs text-red-400 tracking-wide font-medium">{t('newsletter.exclusive')}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{t('newsletter.title')}</h2>
              <p className="text-gray-300 text-sm mb-4">{t('newsletter.description')}</p>
              
              <div className="flex items-center space-x-3 mb-2">
                <div className="flex items-center text-xs text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {t('newsletter.frequency')}
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  {t('newsletter.value_prop')}
                </div>
              </div>
              
              <div className="text-xs text-gray-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 mr-1.5 text-red-400">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                {t('newsletter.join_others')}
              </div>
            </div>
            
            <div className="flex flex-col items-center md:w-1/3">
              <a 
                href="https://kaicbento.substack.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-5 rounded flex items-center justify-center transition-all duration-200 border border-red-600"
              >
                {t('newsletter.cta_button')}
                <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
              </a>
              
              <span className="text-xs text-gray-500 mt-2 opacity-80">{t('newsletter.guarantee')}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

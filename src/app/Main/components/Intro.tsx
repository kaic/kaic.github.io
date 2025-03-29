import { useTranslations } from 'next-intl';

export const Intro = () => {
  const t = useTranslations('Home.Main');
  
  // No longer using dynamic calculation for years of experience
  
  return (
    <div className='sm:text-left font-[family-name:var(--font-geist-mono)] xs:max-w-[40vw]'>
      {/* Title moved to Main component */}
      <p className='mb-4 text-base leading-loose'>
        {t('header.description')}
      </p>
      
      <div className='mb-4 p-3 border-l-2 border-red-400'>
        <div className='flex flex-col space-y-3'>
          <div className='flex items-center'>
            <div className='w-5 h-5 flex items-center justify-center mr-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-400">
                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </svg>
            </div>
            <div>
              <span className='text-red-400 font-medium'>{t('header.job.role')}</span>
              <span className='text-white mx-1'>@</span>
              <span className='text-white'>{t('header.job.company')}</span>
            </div>
          </div>
          
          <div className='flex items-center'>
            <div className='w-5 h-5 flex items-center justify-center mr-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-400">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <span className='text-white'>{t('header.location')}</span>
            </div>
          </div>
          
          <div className='flex items-center'>
            <div className='w-5 h-5 flex items-center justify-center mr-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-400">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <span className='text-white'>{t('header.experience')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

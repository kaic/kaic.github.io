import { useTranslations } from 'next-intl';

const SocialLinks = [
  {
    name: 'Email',
    label: 'Send me an email',
    description: 'For job opportunities or project collaborations',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-8 h-8 text-red-400'
      >
        <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
        <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
      </svg>
    ),
    url: 'mailto:kaicbento@outlook.com',
    display: 'kaicbento@outlook.com'
  },
  {
    name: 'GitHub',
    label: 'Check my code',
    description: 'View my projects and contributions',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-8 h-8 text-red-400'
      >
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        />
      </svg>
    ),
    url: 'https://github.com/kaic',
    display: 'github.com/kaic'
  },
  {
    name: 'LinkedIn',
    label: 'Connect with me',
    description: 'For professional networking',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-8 h-8 text-red-400'
      >
        <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' />
      </svg>
    ),
    url: 'https://linkedin.com/in/kaicbento',
    display: 'linkedin.com/in/kaicbento'
  },
];

export const Contact = () => {
  const t = useTranslations('Home.Contact');

  return (
    <article id='contact'>
      <div className='max-w-4xl mx-auto p-8 pb-20 sm:p-20'>
        <h2 className='text-2xl font-bold text-left mb-8'>{t('section-name')}</h2>
        
        <p className='text-lg mb-10 max-w-2xl'>{t('paragraph')}</p>
        
        <div className='grid gap-6 md:grid-cols-1 lg:gap-8'>
          {SocialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex flex-col sm:flex-row items-start sm:items-center p-5 rounded-lg bg-gray-800 bg-opacity-30 hover:bg-opacity-50 border border-gray-700 hover:border-red-400 transition-all duration-300'
            >
              <div className='p-3 rounded-full bg-gray-900 bg-opacity-70 mb-4 sm:mb-0 sm:mr-6 group-hover:bg-red-400 group-hover:bg-opacity-10 transition-all duration-300'>
                {link.icon}
              </div>
              
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-white mb-1 group-hover:text-red-400 transition-colors'>
                  {link.label}
                </h3>
                <p className='text-gray-300 text-sm mb-2'>{link.description}</p>
                <div className='text-red-400 text-sm font-medium flex items-center'>
                  <span>{link.display}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

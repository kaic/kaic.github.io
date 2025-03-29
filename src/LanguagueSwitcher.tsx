import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

export async function getStaticProps(context?: { locale?: string }) {
  try {
    const locale = context?.locale;

    const messages = await import(`../locales/${locale}.json`);

    return {
      props: {
        messages: messages.default,
      },
    };
  } catch (error) {
    console.error('Error loading translations:', error);
    return {
      props: {
        messages: {},
      },
    };
  }
}

export const LanguageSwitcher = () => {
  const currentLocale = useLocale();
  const [mounted, setMounted] = useState(false);

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const switchLocale = (newLocale: string) => {
    window.changeLanguage(newLocale);
  };

  return (
    <div className='flex items-center space-x-3 text-center p-1 rounded-full bg-gray-800 bg-opacity-30'>
      <button
        onClick={() => switchLocale('en')}
        className={`text-xs font-medium px-2 py-1 rounded-full transition-all duration-200 ${
          currentLocale === 'en' 
            ? 'text-red-400' 
            : 'text-gray-300 hover:text-gray-100'
        }`}
      >
        EN
      </button>
      <span className='text-gray-500'>|</span>
      <button
        onClick={() => switchLocale('pt-br')}
        className={`text-xs font-medium px-2 py-1 rounded-full transition-all duration-200 ${
          currentLocale === 'pt-br' 
            ? 'text-red-400' 
            : 'text-gray-300 hover:text-gray-100'
        }`}
      >
        PT-BR
      </button>
    </div>
  );
};

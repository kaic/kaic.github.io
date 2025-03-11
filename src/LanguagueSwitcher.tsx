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
    <div className="flex-row items-center space-x-2 text-center" >
      < button
        onClick={() => switchLocale('pt-br')}
        className={`text-sm ${currentLocale === 'pt-br' ? 'text-red-400 font-bold' : 'text-gray-400'}`}
      >
        PT-BR
      </button>
      < span className="text-gray-500" >| </span>
      <button
        onClick={() => switchLocale('en')}
        className={`text-sm ${currentLocale === 'en' ? 'text-red-400 font-bold' : 'text-gray-400'}`
        }
      >
        EN
      </button>
    </div>
  );
};
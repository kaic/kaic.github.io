import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

// Função getStaticProps foi movida para o arquivo onde o componente é utilizado

export const LanguageSwitcher = () => {
  const currentLocale = useLocale();
  const [mounted, setMounted] = useState(false);

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  // Renderiza um placeholder com a mesma estrutura durante SSR
  if (!mounted) {
    return (
      <div className='flex items-center space-x-3 text-center p-1 rounded-full bg-gray-800 bg-opacity-30'>
        <span className='text-xs font-medium px-2 py-1 rounded-full text-gray-300'>EN</span>
        <span className='text-gray-500'>|</span>
        <span className='text-xs font-medium px-2 py-1 rounded-full text-gray-300'>PT-BR</span>
      </div>
    );
  }

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
        aria-label="Switch to English"
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
        aria-label="Mudar para Português"
      >
        PT-BR
      </button>
    </div>
  );
};

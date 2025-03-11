import type { AppProps } from 'next/app';

declare global {
  interface Window {
    changeLanguage: (newLocale: string) => void;
  }
}
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-source-code-pro',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(pageProps.messages || {});

  useEffect(() => {
    const savedLocale = localStorage.getItem('preferred-locale');

    if (!savedLocale) {
      const browserLocale = navigator.language.toLowerCase().startsWith('pt')
        ? 'pt-br'
        : 'en';

      localStorage.setItem('preferred-locale', browserLocale);
      setLocale(browserLocale);
    } else {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const newMessages = await import(`../locales/${locale}.json`);
        setMessages(newMessages.default);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    if (locale) {
      loadMessages();
    }
  }, [locale]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.changeLanguage = (newLocale: string) => {
        localStorage.setItem('preferred-locale', newLocale);
        setLocale(newLocale);
      };
    }
  }, []);

  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone='America/Sao_Paulo'
      messages={messages}
    >
      <div className={`scroll-smooth ${sourceCodePro.className} antialiased`}>
        <Component {...pageProps} />
      </div>
    </NextIntlClientProvider>
  );
}

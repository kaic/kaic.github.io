import type { AppProps } from 'next/app';
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kaic',
  description: 'I develop software for the 21st century',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [browserLocale, setBrowserLocale] = useState<string>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userLanguage = navigator.language;
      const simplifiedLocale = userLanguage.startsWith('en') ? 'pt-br' : 'en';
      setBrowserLocale(simplifiedLocale);
    }
  }, []);
  return (
    <NextIntlClientProvider
      locale={router.locale || browserLocale}
      timeZone='America/Sao_Paulo'
      messages={pageProps.messages}
    >
      <div
        className={`${geistMono.variable} antialiased font-[family-name:var(--font-geist-mono)]`}
      >
        <Component {...pageProps} />
      </div>
    </NextIntlClientProvider>
  );
}

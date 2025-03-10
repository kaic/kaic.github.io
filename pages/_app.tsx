import type { AppProps } from 'next/app';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'; 


const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Escolha os pesos que você precisa
  display: 'swap',
  variable: '--font-source-code-pro',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [browserLocale, setBrowserLocale] = useState<string>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userLanguage = navigator.language;
      const simplifiedLocale = userLanguage.startsWith('en') ? 'en' : 'pt-br';
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
        className={`scroll-smooth ${sourceCodePro.className} antialiased`}
      >
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-HPDY1JZJ7G" />
      </div>
    </NextIntlClientProvider>
  );
}

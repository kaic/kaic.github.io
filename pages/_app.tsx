import type { AppProps } from 'next/app';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';

const GA_TRACKING_ID = 'G-HPDY1JZJ7G';

declare global {
  interface Window {
    gtag: (command: string, trackingId: string, config: object) => void;
  }
}

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Escolha os pesos que você precisa
  display: 'swap',
  variable: '--font-source-code-pro',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    <NextIntlClientProvider
        locale={router.locale || 'en'}
      timeZone='America/Sao_Paulo'
      messages={pageProps.messages}
    >
      <div
        className={`scroll-smooth ${sourceCodePro.className} antialiased`}
      >
        <Component {...pageProps} />
      </div>
    </NextIntlClientProvider>
    </>
  );
}

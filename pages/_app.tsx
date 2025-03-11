import type { AppProps } from 'next/app';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Escolha os pesos que você precisa
  display: 'swap',
  variable: '--font-source-code-pro',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale || 'en'}
      timeZone='America/Sao_Paulo'
      messages={pageProps.messages}
    >
      <div className={`scroll-smooth ${sourceCodePro.className} antialiased`}>
        <Component {...pageProps} />
      </div>
    </NextIntlClientProvider>
  );
}

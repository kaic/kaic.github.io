import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-HPDY1JZJ7G`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HPDY1JZJ7G');
            `,
          }}
        />
      </body>
    </Html>
  );
}

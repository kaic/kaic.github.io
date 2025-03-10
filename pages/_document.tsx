import { Html, Head, Main, NextScript } from 'next/document';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Kaic Bento | Software Developer', // Use 'absolute' para garantir que não haja mudanças
  },
  description: 'Portfólio de Kaic Bento, desenvolvedor de software',
  authors: { name: 'Kaic Bento' },
  keywords: 'software, developer',
  themeColor: '#f87171',

}

const GA_TRACKING_ID = 'G-HPDY1JZJ7G';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <title>Kaic Bento | Software Developer</title>
      </Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

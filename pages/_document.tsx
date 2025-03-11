import { Html, Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = 'G-HPDY1JZJ7G';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        {/* Umami */}
        <script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='0b493e9f-c3e3-4eb8-a119-4bf453dcec5b'
        />

        {/* Google Analytics */}
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

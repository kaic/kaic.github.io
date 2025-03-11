import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const WEBSITE_ID = '0b493e9f-c3e3-4eb8-a119-4bf453dcec5b';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head />
      <Script
        async
        defer
        data-website-id={WEBSITE_ID}
        src={`https://${WEBSITE_ID}-umami.com/umami.js`}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
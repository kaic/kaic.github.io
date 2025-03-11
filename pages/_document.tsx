import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head >
        <script defer src="https://cloud.umami.is/script.js" data-website-id="0b493e9f-c3e3-4eb8-a119-4bf453dcec5b"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

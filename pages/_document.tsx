import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet="utf-8" />
        <title>Kaic Bento | Developing to XXI Century</title>

        <meta name="description" content="Software from Brazil, São Paulo" />

        <link rel="icon" href="/public/favicon.svg" sizes="any" />
        <link rel="icon" href="/public/favicon.svg" type="image/svg+xml" />

        <meta name="author" content="Kaic Bento" />
        <meta name="keywords" content="software, developer" />

        <link rel="canonical" href="https://kaic.me/" />

        <meta property="og:title" content="Kaic Bento | Developing to XXI Century" />
        <meta property="og:description" content="Software from Brazil, São Paulo" />
        <meta property="og:url" content="https://kaic.me/" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://kaic.me/og-image.jpg" /> */}
        <meta property="og:site_name" content="Kaic Bento" />

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaic Bento | Software Developer" />
        <meta name="twitter:description" content="Portfólio de Kaic Bento, desenvolvedor de software especializado em aplicações web modernas." />
        <meta name="twitter:image" content="https://kaic.me/twitter-image.jpg" /> */}

        <meta name="theme-color" content="#f87171" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

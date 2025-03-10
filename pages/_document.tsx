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

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <title>Kaic Bento | Software Developer</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

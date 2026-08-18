import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

const GA_TRACKING_ID = 'G-HPDY1JZJ7G';

interface MyDocumentProps extends DocumentInitialProps {
  lang: string;
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const lang =
      ctx.pathname === '/sites' || ctx.pathname.startsWith('/sites/')
        ? 'pt-BR'
        : 'en';
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <link rel='icon' href='/favicon.ico' />

          {/* Umami */}
          <script
            defer
            src='https://cloud.umami.is/script.js'
            data-website-id='0b493e9f-c3e3-4eb8-a119-4bf453dcec5b'
            data-path-exclusions='/cyberpunk-red-nsp-dash/*'
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
}

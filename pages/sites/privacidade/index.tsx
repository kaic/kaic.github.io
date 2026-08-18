import Head from 'next/head';
import { PrivacyContent } from '@app/sites/Privacidade/PrivacyContent';
import { PrivacyFooter } from '@app/sites/Privacidade/PrivacyFooter';
import { PrivacyHeader } from '@app/sites/Privacidade/PrivacyHeader';
import { karla } from '@app/sites/fonts';

const TITLE = 'Política de Privacidade | Kaic Systems';
const DESCRIPTION =
  'Política de privacidade da Kaic Systems: quais dados são coletados pelo formulário de contato, para que servem e como você pode solicitar acesso ou remoção.';
const CANONICAL = 'https://kaic.me/sites/privacidade';

export default function PrivacidadePage() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name='description' content={DESCRIPTION} />
        <link rel='canonical' href={CANONICAL} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:url' content={CANONICAL} />
        <meta property='og:locale' content='pt_BR' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
      </Head>

      <div className={`${karla.className} bg-white text-[#0B1F33] antialiased`}>
        <PrivacyHeader />
        <PrivacyContent />
        <PrivacyFooter />
      </div>
    </>
  );
}

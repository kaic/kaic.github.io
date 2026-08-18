import { useState } from 'react';
import Head from 'next/head';
import { About } from '@app/sites/About/About';
import { BeforeAfter } from '@app/sites/BeforeAfter/BeforeAfter';
import {
  CNPJ,
  CONTACT_EMAIL,
  SITE_URL,
  SITES_URL,
  WHATSAPP_NUMBER,
} from '@app/sites/constants';
import { ContactForm } from '@app/sites/ContactForm/ContactForm';
import { Diagnostic } from '@app/sites/Diagnostic/Diagnostic';
import { Faq } from '@app/sites/Faq/Faq';
import { FinalCta } from '@app/sites/FinalCta/FinalCta';
import { FloatingWhatsApp } from '@app/sites/FloatingWhatsApp/FloatingWhatsApp';
import { Footer } from '@app/sites/Footer/Footer';
import { karla } from '@app/sites/fonts';
import { Header } from '@app/sites/Header/Header';
import { Hero } from '@app/sites/Hero/Hero';
import { Included } from '@app/sites/Included/Included';
import { Potential } from '@app/sites/Potential/Potential';
import { Pricing } from '@app/sites/Pricing/Pricing';
import { Problem } from '@app/sites/Problem/Problem';
import { Process } from '@app/sites/Process/Process';
import { Segments } from '@app/sites/Segments/Segments';
import { Services } from '@app/sites/Services/Services';
import { ValueProp } from '@app/sites/ValueProp/ValueProp';

const TITLE = 'Criação de Sites Profissionais | Kaic Systems';
const DESCRIPTION =
  'Sites, landing pages e soluções digitais profissionais para empresas. Estratégia, design, desenvolvimento e integração com WhatsApp. Fale com Kaic Bento.';

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kaic Systems',
  founder: {
    '@type': 'Person',
    name: 'Kaic Bento',
    jobTitle: 'Engenheiro de Software',
  },
  url: SITES_URL,
  email: CONTACT_EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  taxID: CNPJ,
  areaServed: ['Zona Leste de São Paulo', 'São Paulo', 'Brasil'],
  sameAs: ['https://www.linkedin.com/in/kaicbento', SITE_URL],
  serviceType: [
    'Criação de sites',
    'Landing pages',
    'Desenvolvimento web',
    'SEO técnico',
    'Reformulação de sites',
  ],
};

export default function SitesPage() {
  const [diagnosticPrefill, setDiagnosticPrefill] = useState<string | null>(
    null
  );

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name='description' content={DESCRIPTION} />
        <link rel='canonical' href={SITES_URL} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:url' content={SITES_URL} />
        <meta property='og:locale' content='pt_BR' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
      </Head>

      <div className={`${karla.className} bg-white text-[#0B1F33] antialiased`}>
        <Header />
        <main id='conteudo'>
          <Hero />
          <Problem />
          <Diagnostic onPrefill={setDiagnosticPrefill} />
          <ValueProp />
          <Services />
          <Segments />
          <Potential />
          <Included />
          <Process />
          <About />
          <Pricing />
          <BeforeAfter />
          <Faq />
          <FinalCta />
          <ContactForm prefillMessage={diagnosticPrefill} />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

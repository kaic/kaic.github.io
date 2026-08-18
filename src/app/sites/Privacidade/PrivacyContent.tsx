import Link from 'next/link';
import { CNPJ, CONTACT_EMAIL, waLink } from '@app/sites/constants';
import { instrumentSans, karla } from '@app/sites/fonts';

const linkClass = 'text-[#2563EB] hover:text-[#1D4ED8]';

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Quais dados são coletados',
    body: (
      <>
        <p
          className={`${karla.className} mb-3 text-[16px] leading-[1.7] text-[#4B5A6E]`}
        >
          O site coleta dados apenas quando você preenche o formulário de
          contato, de forma voluntária:
        </p>
        <ul className='mb-3.5 flex flex-col gap-2 pl-5'>
          {[
            'Nome',
            'Empresa (quando informado)',
            'Objetivo principal do projeto (quando selecionado)',
            'Conteúdo da mensagem enviada',
          ].map(item => (
            <li
              key={item}
              className={`${karla.className} text-[16px] leading-[1.6] text-[#4B5A6E]`}
            >
              {item}
            </li>
          ))}
        </ul>
        <p
          className={`${karla.className} text-[16px] leading-[1.7] text-[#4B5A6E]`}
        >
          O diagnóstico interativo funciona inteiramente no seu navegador: as
          respostas não são enviadas nem armazenadas, a não ser que você decida
          incluí-las manualmente em uma mensagem.
        </p>
      </>
    ),
  },
  {
    title: 'Para que esses dados são usados',
    body: (
      <p
        className={`${karla.className} text-[16px] leading-[1.7] text-[#4B5A6E]`}
      >
        Os dados do formulário são usados exclusivamente para entender seu
        projeto e responder ao seu contato — por e-mail ou WhatsApp, conforme
        sua preferência. Eles não são usados para nenhuma outra finalidade e não
        são vendidos, alugados ou compartilhados com terceiros.
      </p>
    ),
  },
  {
    title: 'Base legal e consentimento',
    body: (
      <p
        className={`${karla.className} text-[16px] leading-[1.7] text-[#4B5A6E]`}
      >
        O formulário é claramente identificado e o envio é uma ação voluntária:
        ao preencher os campos e clicar em enviar, você está consentindo com o
        uso desses dados para responder ao seu contato, conforme a Lei Geral de
        Proteção de Dados (LGPD). Nenhum dado é coletado silenciosamente ou sem
        uma ação explícita sua.
      </p>
    ),
  },
  {
    title: 'Por quanto tempo os dados ficam guardados',
    body: (
      <p
        className={`${karla.className} text-[16px] leading-[1.7] text-[#4B5A6E]`}
      >
        As mensagens recebidas ficam guardadas apenas pelo tempo necessário para
        conduzir a conversa e, quando aplicável, o projeto contratado. Você pode
        pedir a remoção a qualquer momento, conforme abaixo.
      </p>
    ),
  },
  {
    title: 'Cookies e analytics',
    body: (
      <p
        className={`${karla.className} text-[16px] leading-[1.7] text-[#4B5A6E]`}
      >
        O site utiliza Google Analytics e Umami para entender, de forma
        agregada, quais páginas são mais acessadas — sem coletar dados que
        identifiquem você pessoalmente. Nenhuma informação do formulário de
        contato é enviada a essas ferramentas.
      </p>
    ),
  },
  {
    title: 'Seus direitos',
    body: (
      <>
        <p
          className={`${karla.className} mb-3 text-[16px] leading-[1.7] text-[#4B5A6E]`}
        >
          Você pode, a qualquer momento, solicitar:
        </p>
        <ul className='mb-3.5 flex flex-col gap-2 pl-5'>
          {[
            'Confirmação de quais dados seus estão guardados',
            'Correção de dados incompletos ou desatualizados',
            'Exclusão dos seus dados de contato',
          ].map(item => (
            <li
              key={item}
              className={`${karla.className} text-[16px] leading-[1.6] text-[#4B5A6E]`}
            >
              {item}
            </li>
          ))}
        </ul>
        <p
          className={`${karla.className} text-[16px] leading-[1.7] text-[#4B5A6E]`}
        >
          Basta enviar um e-mail para{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: 'Dúvidas',
    body: (
      <p
        className={`${karla.className} text-[16px] leading-[1.7] text-[#4B5A6E]`}
      >
        Qualquer dúvida sobre esta política pode ser enviada diretamente para{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
          {CONTACT_EMAIL}
        </a>{' '}
        ou pelo{' '}
        <a
          href={waLink()}
          target='_blank'
          rel='noopener noreferrer'
          className={linkClass}
        >
          WhatsApp
        </a>
        .
      </p>
    ),
  },
];

export const PrivacyContent = () => (
  <main id='conteudo' className='mx-auto max-w-[760px] px-6 py-16 pb-24'>
    <span
      className={`${instrumentSans.className} mb-5 inline-block rounded-md bg-[#EAF1FB] px-3.5 py-[7px] font-semibold text-[13px] uppercase tracking-[0.04em] text-[#2563EB]`}
    >
      Kaic Systems
    </span>
    <h1
      className={`${instrumentSans.className} mb-4 font-bold text-[clamp(2rem,3vw+1rem,2.75rem)] tracking-[-0.01em] text-[#0B1F33]`}
    >
      Política de Privacidade
    </h1>
    <p className={`${karla.className} mb-12 text-[16px] text-[#8592A3]`}>
      Última atualização: agosto de 2026
    </p>

    <div className='flex flex-col gap-9'>
      <p
        className={`${karla.className} text-[17px] leading-[1.7] text-[#33445A]`}
      >
        Esta página explica, de forma direta, quais dados a Kaic Systems coleta
        através do site{' '}
        <Link href='/sites' className={linkClass}>
          kaic.me/sites
        </Link>
        , para que servem e como você pode falar comigo sobre eles. O
        responsável pelo tratamento dos dados é Kaic Bento, CNPJ {CNPJ}, contato{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      {SECTIONS.map(section => (
        <section key={section.title}>
          <h2
            className={`${instrumentSans.className} mb-3.5 font-bold text-[21px] text-[#0B1F33]`}
          >
            {section.title}
          </h2>
          {section.body}
        </section>
      ))}
    </div>
  </main>
);

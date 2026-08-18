import Link from 'next/link';
import { KaicSystemsLogo } from '@app/sites/Components/KaicSystemsLogo';
import { CNPJ, CONTACT_EMAIL, SITE_URL, waLink } from '@app/sites/constants';
import { instrumentSans, karla } from '@app/sites/fonts';

const NAV_ITEMS = [
  { href: '#', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#contato', label: 'Contato' },
];

export const Footer = () => (
  <footer id='rodape' className='bg-[#0B1F33] px-6 py-16'>
    <div className='mx-auto max-w-[1200px]'>
      <div className='mb-12 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10'>
        <div>
          <div className='mb-4 flex items-center gap-2.5'>
            <KaicSystemsLogo />
            <span
              className={`${instrumentSans.className} font-bold text-[18px] text-white`}
            >
              Kaic Systems
            </span>
          </div>
          <div
            className={`${karla.className} flex flex-col gap-1.5 text-[14px] text-[#AEBCCF]`}
          >
            <span>Kaic Bento — Engenheiro de Software</span>
            <span>CNPJ {CNPJ}</span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className='text-[#AEBCCF] hover:text-white'
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={waLink()}
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#AEBCCF] hover:text-white'
            >
              (11) 98020-5003
            </a>
            <a href={SITE_URL} className='text-[#AEBCCF] hover:text-white'>
              kaic.me
            </a>
            <a
              href='https://www.linkedin.com/in/kaicbento'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#AEBCCF] hover:text-white'
            >
              linkedin.com/in/kaicbento
            </a>
          </div>
        </div>

        <div>
          <p
            className={`${instrumentSans.className} mb-4 font-semibold text-[13px] uppercase tracking-[0.04em] text-white`}
          >
            Navegação
          </p>
          <div className={`${karla.className} flex flex-col gap-2 text-[14px]`}>
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                className='text-[#AEBCCF] hover:text-white'
              >
                {item.label}
              </a>
            ))}
            <Link
              href='/sites/privacidade'
              className='text-[#AEBCCF] hover:text-white'
            >
              Política de Privacidade
            </Link>
            <a href={SITE_URL} className='text-[#AEBCCF] hover:text-white'>
              Site principal
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-3 border-t border-[#1E3A56] pt-8'>
        <p className={`${karla.className} text-[13px] text-[#7C8CA3]`}>
          © {new Date().getFullYear()} Kaic Systems
        </p>
        <p className={`${karla.className} text-[13px] italic text-[#7C8CA3]`}>
          Tecnologia bem construída para negócios que querem ser bem
          apresentados.
        </p>
      </div>
    </div>
  </footer>
);

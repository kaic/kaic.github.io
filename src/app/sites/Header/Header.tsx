'use client';

import { useEffect, useState } from 'react';
import { KaicSystemsLogo } from '@app/sites/Components/KaicSystemsLogo';
import { waLink } from '@app/sites/constants';
import { instrumentSans } from '@app/sites/fonts';

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#sobre', label: 'Sobre' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <a
        href='#conteudo'
        className={`${instrumentSans.className} fixed left-3 top-[-60px] z-[100] rounded-md bg-[#0B1F33] px-[18px] py-[10px] font-semibold text-sm text-white no-underline transition-[top] duration-150 focus:top-3`}
      >
        Pular para o conteúdo
      </a>

      <header
        className='sticky top-0 z-50 transition-colors duration-200'
        style={{
          background: scrolled ? '#F7F4EEee' : '#F7F4EE',
          borderBottom: scrolled
            ? '1px solid #E4E0D6'
            : '1px solid transparent',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div className='mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-4 px-6'>
          <a
            href='#'
            aria-label='Kaic Systems — início'
            className='flex flex-shrink-0 items-center gap-2.5 no-underline'
          >
            <KaicSystemsLogo />
            <span
              className={`${instrumentSans.className} font-bold text-[18px] text-[#0B1F33] tracking-[-0.01em]`}
            >
              Kaic Systems
            </span>
          </a>

          <nav
            aria-label='Navegação principal'
            className='hidden items-center gap-1 md:flex'
          >
            {NAV_LINKS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`${instrumentSans.className} rounded-md px-3.5 py-2.5 font-semibold text-[14.5px] text-[#0B1F33] no-underline transition-colors hover:bg-[#EFEAE0]`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink()}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Falar sobre meu projeto pelo WhatsApp'
              className={`${instrumentSans.className} ml-2 inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-[#2563EB] px-5 py-[11px] font-semibold text-[14.5px] text-white no-underline transition-colors hover:bg-[#1D4ED8]`}
            >
              Falar sobre meu projeto
            </a>
          </nav>

          <button
            type='button'
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border-[1.5px] border-[#0B1F33] bg-transparent md:hidden'
          >
            {menuOpen ? (
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#0B1F33'
                strokeWidth='2'
                strokeLinecap='round'
              >
                <line x1='6' y1='6' x2='18' y2='18' />
                <line x1='6' y1='18' x2='18' y2='6' />
              </svg>
            ) : (
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#0B1F33'
                strokeWidth='2'
                strokeLinecap='round'
              >
                <line x1='3' y1='6' x2='21' y2='6' />
                <line x1='3' y1='12' x2='21' y2='12' />
                <line x1='3' y1='18' x2='21' y2='18' />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            role='dialog'
            aria-modal='true'
            aria-label='Menu'
            className='fixed inset-0 top-[76px] z-[55] flex flex-col gap-1 overflow-y-auto bg-[#F7F4EE] p-6 md:hidden'
          >
            {NAV_LINKS.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`${instrumentSans.className} border-b border-[#E4E0D6] px-1 py-3.5 font-semibold text-[20px] text-[#0B1F33] no-underline`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink()}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setMenuOpen(false)}
              className={`${instrumentSans.className} mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-[#2563EB] px-6 py-[15px] font-semibold text-[16px] text-white no-underline`}
            >
              Falar sobre meu projeto
            </a>
            <p className='mt-3.5 font-[Karla,sans-serif] text-[13px] text-[#8592A3] leading-relaxed'>
              Atendimento direto com o responsável pelo projeto • CNPJ •
              Processo profissional
            </p>
          </div>
        )}
      </header>
    </>
  );
};

import Link from 'next/link';
import { KaicSystemsLogo } from '@app/sites/Components/KaicSystemsLogo';
import { instrumentSans } from '@app/sites/fonts';

export const PrivacyHeader = () => (
  <header className='border-b border-[#E4E0D6] bg-white'>
    <div className='mx-auto flex h-[76px] max-w-[800px] items-center justify-between gap-4 px-6'>
      <Link
        href='/sites'
        aria-label='Kaic Systems — início'
        className='flex flex-shrink-0 items-center gap-2.5 no-underline'
      >
        <KaicSystemsLogo />
        <span
          className={`${instrumentSans.className} font-bold text-[18px] text-[#0B1F33] tracking-[-0.01em]`}
        >
          Kaic Systems
        </span>
      </Link>
      <Link
        href='/sites'
        className={`${instrumentSans.className} font-semibold text-[14.5px] text-[#0B1F33] no-underline`}
      >
        ← Voltar ao site
      </Link>
    </div>
  </header>
);

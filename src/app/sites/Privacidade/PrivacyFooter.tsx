import Link from 'next/link';
import { CNPJ } from '@app/sites/constants';
import { karla } from '@app/sites/fonts';

export const PrivacyFooter = () => (
  <footer className='bg-[#0B1F33] px-6 py-10'>
    <div className='mx-auto flex max-w-[760px] flex-wrap items-center justify-between gap-4'>
      <p className={`${karla.className} text-[13px] text-[#7C8CA3]`}>
        © 2026 Kaic Systems — Kaic Bento. CNPJ {CNPJ}
      </p>
      <Link
        href='/sites'
        className={`${karla.className} text-[13px] text-[#C3CEDC] no-underline`}
      >
        Voltar ao site
      </Link>
    </div>
  </footer>
);

'use client';

import { useEffect, useState } from 'react';
import { WhatsAppIcon } from '@app/sites/Components/WhatsAppIcon';
import { waLink } from '@app/sites/constants';

export const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 560) setVisible(true);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={waLink()}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Falar no WhatsApp'
      className='fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#0F9D78] shadow-[0_8px_24px_rgba(11,31,51,0.25)] transition-transform hover:scale-105'
    >
      <WhatsAppIcon size={24} />
    </a>
  );
};

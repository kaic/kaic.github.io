import { useTranslations } from 'next-intl';

import { sanitizeString } from '@src/utils';

const SOURCE_CODE_LINK = {
  name: 'GitHub',
  url: 'https://github.com/kaic/kaic.github.io',
};

export const Footer = () => {
  const t = useTranslations('Home.Footer');

  return (
    <footer className='text-white mb-4 py-4 text-center'>
      <div className='grid grid-rows-[20px] p-4 gap-12 xs:gap-10 sm:gap-10 md-gap-10 lg:gap-2 xl:gap-2'>
        <p className='text-sm mb-2'>📜 {t('paragraph')}</p>
        <a
          href={SOURCE_CODE_LINK.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:opacity-80 transition-opacity'
        >
          <p className='font-mono text-base text-red-400'>{`${sanitizeString(SOURCE_CODE_LINK.url)}`}</p>
        </a>
      </div>
      <div className='mt-3'>
        <p className='text-sm'>© Kaic Bento - Software Developer.</p>
      </div>
    </footer>
  );
};

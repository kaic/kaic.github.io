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
      <div className='flex flex-col items-center p-4 space-y-4'>
        <p className='text-sm mb-2'>📜 {t('paragraph')}</p>
        <a
          href={SOURCE_CODE_LINK.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:opacity-80 transition-opacity'
        >
          <p className=' text-base text-red-400'>{`${sanitizeString(SOURCE_CODE_LINK.url)}`}</p>
        </a>
      </div>
      <div className='mt-3'>
        <p className='text-sm'>© Kaic Bento - Software Developer.</p>
      </div>
    </footer>
  );
};

import { useTranslations } from 'next-intl';

import { sanitizeString } from '@src/utils';

const SOURCE_CODE_LINK = {
  name: 'GitHub',
  url: 'https://github.com/kaic/kaic.github.io',
};

export const Footer = () => {
  const t = useTranslations('Home.Footer');

  return (
    <footer className='text-white mb-2 sm:mb-4 py-2 sm:py-4 text-center'>
      <div className='flex flex-col items-center p-4 space-y-4'>
        <p className='text-sm text-gray-300 mb-2'>📜 {t('paragraph')}</p>
        <a
          href={SOURCE_CODE_LINK.url}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-80 transition-opacity'
        >
          <p className='text-base text-red-400 hover:text-red-300 transition-colors'>{`${sanitizeString(SOURCE_CODE_LINK.url)}`}</p>
        </a>
      </div>
      <div className='mt-3'>
        <p className='text-sm text-gray-400'>© Kaic Bento - Software Developer.</p>
      </div>
    </footer>
  );
};

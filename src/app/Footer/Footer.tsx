import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Home.Footer');

  return (
    <footer className='text-white mb-4 py-4 text-center'>
      <div className='container mx-auto'>
        <p className='text-sm mb-2'>Quer saber como esse site foi feito?</p>
        <a
          href='https://github.com/kaic/kaic.github.io'
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm ml-2 inline-flex items-center text-pink-700 hover:text-pink-400'
        >
          📖 Aqui está o Código Fonte
        </a>

        <div className='mt-3'>
          <p className='text-sm'>© Kaic Bento - Software Developer.</p>
        </div>
      </div>
    </footer>
  );
};

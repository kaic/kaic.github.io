import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('Home.About');
  
  // Split the paragraph into sections based on newlines
  const paragraphs = t('paragraph').split('\n\n');

  return (
    <article id='about'>
      <div className='max-w-4xl mx-auto p-6 pb-16 md:p-12 lg:p-20'>
        <h2 className='text-2xl font-bold text-red-300 text-left mb-8'>{t('section-name')}</h2>
        
        <div className='space-y-6 text-gray-100'>
          {paragraphs.map((paragraph, index) => (
            <div key={index} className={`${index === 0 ? 'text-lg' : 'text-base'} leading-relaxed`}>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

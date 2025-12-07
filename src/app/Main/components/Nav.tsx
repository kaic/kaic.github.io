import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@src/LanguagueSwitcher';

const navList = [
  { id: 1, name: 'projects', link: 'projects' },
  { id: 2, name: 'articles', link: 'articles' },
  { id: 3, name: 'about', link: 'about' },
  { id: 4, name: 'contact', link: 'contact' },
];

export const Nav = () => {
  const t = useTranslations('Home.Main');
  
  return (
    <nav className='flex flex-col items-end'>
      <div className='mb-2'>
        <LanguageSwitcher />
      </div>
      <ul className='flex items-center gap-2 sm:gap-4 md:gap-6'>
        {navList.map(nav => (
          <li key={nav.id} className="text-center min-w-[60px] sm:min-w-[80px]">
            <a
              href={`#${nav.link}`}
              className='text-red-400 hover:opacity-80 transition-opacity active:text-red-900 px-0.5 sm:px-1 py-1 text-sm sm:text-base font-medium inline-block relative after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-red-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:transition-all hover:after:w-full'
            >
              {t(`nav.${nav.name}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

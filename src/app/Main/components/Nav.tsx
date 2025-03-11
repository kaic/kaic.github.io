import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@src/LanguagueSwitcher';

const navList = [
  { id: 1, name: 'about' },
  { id: 2, name: 'articles' },
  { id: 3, name: 'contact' },
];

export const Nav = () => {
  const t = useTranslations('Home.Main');
  return (
    <nav className='container mx-auto'>
      <LanguageSwitcher />
      <ul className='text-lg flex flex-wrap justify-center gap-1 mb-4 mt-4'>
        {navList.map(nav => (
          <li key={nav.id}>
            <a
              href={`#${nav.name}`}
              className='text-red-400 hover:opacity-80 transition-opacity active:text-red-900 px-2 py-2'
            >
              {t(`nav.${nav.name}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

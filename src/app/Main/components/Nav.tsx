import { useTranslations } from 'next-intl';

const navList = [
  { id: 1, name: 'about' },
  { id: 2, name: 'articles' },
  { id: 3, name: 'contact' },
];

//TODO: Add language switch component

export const Nav = () => {
  const t = useTranslations('Home.Main');
  return (
    <nav className='container mx-auto'>
      <ul className='text-lg flex flex-wrap justify-center gap-1 mb-2'>
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

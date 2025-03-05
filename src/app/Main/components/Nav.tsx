import { useTranslations } from 'next-intl';

const navList = [
  { id: 1, name: 'about' },
  { id: 2, name: 'articles' },
  { id: 3, name: 'contact' },
];

export const Nav = () => {
  const t = useTranslations('Home.Main');
  return (
    <nav className='container mx-auto'>
      <ul className='flex flex-wrap justify-center items-centers justify-items-centerpace-x-4'>
        {navList.map(nav => (
          <li key={nav.id}>
            <a
              href={`#${nav.name}`}
              className='text-pink-700 hover:text-pink-900 active:text-pink-950 px-2 py-2'
            >
              {t(`nav.${nav.name}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

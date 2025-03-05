import { useTranslations } from 'next-intl';

const navList = [
    { id: 1, name: 'articles' },
    { id: 2, name: 'about' },
    { id: 3, name: 'contact' },
  ];

export const Nav = () => {
    const t = useTranslations('Home.Main');
    return (
        <nav className='container mx-auto'>
          <ul className='flex flex-wrap justify-center items-centers justify-items-centerpace-x-6'>
            {navList.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.name}`}
                  className='text-white hover:text-red-500 px-4 py-2'
                >
                  {t(`nav.${nav.name}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
}
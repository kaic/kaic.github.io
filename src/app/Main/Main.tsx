//TODO: [] Fix Imports
import Image from 'next/image';
import { Nav } from './components/Nav';
import { Intro } from './components/Intro';

export const Main = () => {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100vh] p-8 pb-20 gap-16 sm:p-20'>
      <header className='w-full p-2'>
        <Nav />
      </header>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Image
          src='/avatar.jpg'
          alt='My photo'
          width={280}
          height={138}
          priority
          className='rounded-full sm:self-center'
        />
        <Intro />
      </main>
    </div>
  );
};

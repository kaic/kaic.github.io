//TODO: [] Fix Imports
import Image from 'next/image';
import { Nav } from './components/Nav';
import { Intro } from './components/Intro';

export const Main = () => {
  return (
    <div className='grid grid-rows-[2px_1fr_2px] items-center justify-items-center p-8 pb-4 gap-10 sm:p-20'>
      <main className='flex flex-col gap-2 row-start-2 items-center sm:items-start'>
        <Image
          src='/avatar.jpg'
          alt='My photo'
          width={200}
          height={168}
          priority
          className='rounded-full sm:self-center border-2 border-red-400 mb-2'
        />
        <Nav />
        <Intro />
      </main>
    </div>
  );
};

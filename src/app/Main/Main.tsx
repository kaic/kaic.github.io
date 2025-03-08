//TODO: [] Fix Imports
import Image from 'next/image';
import { Nav } from './components/Nav';
import { Intro } from './components/Intro';

export const Main = () => {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-4 pt-10 gap-10 sm:p-20'>
      <Nav />
      <main className='flex flex-col gap-2 row-start-2 items-center sm:items-start'>
        <Image
          src='/avatar.jpg'
          alt='My photo'
          width={200}
          height={168}
          priority
          className='rounded-full sm:self-center border-2 border-red-400 mb-4'
        />
        <Intro />
      </main>
    </div>
  );
};

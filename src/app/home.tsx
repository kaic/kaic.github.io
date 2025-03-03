import Image from 'next/image';

import { config } from '../config';

//TODO:
//- [ ] Add a Fix imports
import Articles from './Articles/articles';
import { About } from './About/about';
import { Contant } from './Contant/contant';

import { SectionSeparator } from './components/SectionSeparator';

export default function Home() {
  return (
    <div>
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100vh] p-8 pb-20 gap-16 sm:p-20'>
        <header className='w-full p-4'>
          <nav className='container mx-auto'>
            <ul className='flex flex-wrap justify-center items-centers justify-items-centerpace-x-6'>
              <li>
                <a
                  href='#articles'
                  className='text-white hover:text-red-500 px-4 py-2'
                >
                  My articles
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white hover:text-red-500 px-4 py-2 text-m sm:text-base'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white hover:text-red-500 px-4 py-2 text-ms sm:text-base'
                >
                  Contact me
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
          <Image
            src='/avatar.jpg'
            alt='My photo'
            width={280}
            height={138}
            priority
            className='rounded-full border-2 border-red-500 sm:self-center'
          />
          <ul className='list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
            <li className='mb-2'>
              <h1>Hi! I im Kaic</h1>
            </li>
            <li className='mb-2'>
              <h1>and I develop software for the 21st century.</h1>
            </li>
            <li className='mb-2'>
              <h1>
                💼 {config.job.role} @ {config.job.company}
              </h1>
            </li>
            <li className='mb-2'>
              <h1>🌎 São Paulo, Brasil</h1>
            </li>
          </ul>
        </main>
      </div>
      <SectionSeparator />
      <Articles />
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <Contant />


      <footer className=''></footer>
    </div>
  );
}

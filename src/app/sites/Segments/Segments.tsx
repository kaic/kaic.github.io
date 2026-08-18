'use client';

import { useState } from 'react';
import { instrumentSans, karla } from '@app/sites/fonts';
import { SEGMENTS } from './segments-data';

export const Segments = () => {
  const [activeId, setActiveId] = useState(SEGMENTS[0].id);
  const active = SEGMENTS.find(s => s.id === activeId) ?? SEGMENTS[0];

  return (
    <section id='segmentos-app' className='bg-[#F7F4EE] px-6 py-24'>
      <div className='mx-auto max-w-[1000px]'>
        <h2
          className={`${instrumentSans.className} text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
          style={{ textWrap: 'pretty' }}
        >
          Uma boa experiência digital se adapta à forma como seu cliente compra
        </h2>
        <p
          className={`${karla.className} mt-2.5 mb-10 text-center text-[14px] text-[#8592A3]`}
        >
          Exemplos ilustrativos e hipotéticos
        </p>

        <div
          role='tablist'
          aria-label='Segmentos de negócio'
          className='mb-8 flex flex-wrap justify-center gap-2.5'
        >
          {SEGMENTS.map(seg => {
            const isActive = seg.id === activeId;
            return (
              <button
                key={seg.id}
                type='button'
                role='tab'
                aria-selected={isActive}
                onClick={() => setActiveId(seg.id)}
                className={`${instrumentSans.className} rounded-md px-4 py-2.5 font-semibold text-[14px] transition-colors`}
                style={{
                  background: isActive ? '#0B1F33' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#0B1F33',
                  border: isActive ? '1px solid #0B1F33' : '1px solid #E4E0D6',
                }}
              >
                {seg.label}
              </button>
            );
          })}
        </div>

        <div role='tabpanel' className='min-h-[220px] rounded-lg bg-white p-9'>
          <h3
            className={`${instrumentSans.className} mb-5 font-bold text-[20px] text-[#0B1F33]`}
          >
            {active.label}
          </h3>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5'>
            {active.bullets.map(bullet => (
              <div key={bullet} className='flex items-center gap-2.5'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#2563EB'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='flex-shrink-0'
                >
                  <polyline points='20 6 9 17 4 12' />
                </svg>
                <span
                  className={`${karla.className} text-[15px] text-[#33445A]`}
                >
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

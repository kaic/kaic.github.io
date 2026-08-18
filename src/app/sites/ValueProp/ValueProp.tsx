import { instrumentSans, karla } from '@app/sites/fonts';

const BENEFITS = [
  'Um endereço digital que pertence à empresa.',
  'Informações organizadas em um único lugar.',
  'Experiência sem distrações de outras plataformas.',
  'Melhor apresentação nos resultados de busca.',
  'Caminho claro até o contato.',
  'Mais controle sobre conteúdo, identidade e atualizações.',
  'Menor dependência de algoritmos e plataformas de terceiros.',
];

const CHIPS = ['Google', 'Instagram', 'Indicações', 'WhatsApp'];

export const ValueProp = () => (
  <section id='papel-site' className='bg-[#F7F4EE] px-6 py-24'>
    <div className='mx-auto flex max-w-[1200px] flex-wrap items-start gap-14'>
      <div className='min-w-0 flex-[1_1_420px]'>
        <h2
          className={`${instrumentSans.className} mb-5 font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
          style={{ textWrap: 'pretty' }}
        >
          Redes sociais ajudam. Seu site organiza, apresenta e converte.
        </h2>
        <p
          className={`${karla.className} mb-8 max-w-[520px] text-[17px] leading-[1.6] text-[#4B5A6E]`}
          style={{ textWrap: 'pretty' }}
        >
          O site não substitui Instagram, Google, WhatsApp ou marketplaces — ele
          conecta e organiza esses canais em um único lugar, sob o seu controle.
        </p>
        <div className='flex flex-col gap-3.5'>
          {BENEFITS.map(text => (
            <div key={text} className='flex items-start gap-3'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#0F9D78'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mt-[2px] flex-shrink-0'
              >
                <polyline points='20 6 9 17 4 12' />
              </svg>
              <span
                className={`${karla.className} text-[15.5px] leading-[1.5] text-[#33445A]`}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className='mx-auto min-w-[280px] max-w-[380px] flex-[1_1_300px]'>
        <div className='flex flex-col items-center gap-1 rounded-lg border border-[#E4E0D6] bg-white p-8 px-6'>
          <div className='mb-2 flex flex-wrap justify-center gap-2'>
            {CHIPS.map(chip => (
              <span
                key={chip}
                className={`${instrumentSans.className} rounded-md border border-[#E4E0D6] bg-[#F7F4EE] px-3 py-1.5 font-semibold text-[12.5px] text-[#4B5A6E]`}
              >
                {chip}
              </span>
            ))}
          </div>
          <svg
            width='14'
            height='24'
            viewBox='0 0 14 24'
            fill='none'
            stroke='#8592A3'
            strokeWidth='2'
            strokeLinecap='round'
          >
            <line x1='7' y1='0' x2='7' y2='18' />
            <polyline points='1,13 7,20 13,13' />
          </svg>
          <div
            className={`${instrumentSans.className} my-1 rounded-md bg-[#0B1F33] px-7 py-3.5 font-bold text-[15px] text-white`}
          >
            Seu site
          </div>
          <svg
            width='14'
            height='24'
            viewBox='0 0 14 24'
            fill='none'
            stroke='#8592A3'
            strokeWidth='2'
            strokeLinecap='round'
          >
            <line x1='7' y1='0' x2='7' y2='18' />
            <polyline points='1,13 7,20 13,13' />
          </svg>
          <div
            className={`${instrumentSans.className} rounded-md bg-[#E7F6F1] px-7 py-3.5 font-bold text-[15px] text-[#0C7C60]`}
          >
            Contato
          </div>
        </div>
      </div>
    </div>
  </section>
);

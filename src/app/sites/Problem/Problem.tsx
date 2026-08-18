import { instrumentSans, karla } from '@app/sites/fonts';

const PROBLEMS = [
  'Um Instagram que não explica todos os serviços.',
  'Informações diferentes em cada plataforma.',
  'Um site antigo ou difícil de usar no celular.',
  'Um link que leva apenas para um marketplace.',
  'Horário, localização e formas de contato difíceis de encontrar.',
  'Um WhatsApp recebendo mensagens sem contexto.',
  'Uma empresa excelente sendo apresentada de maneira improvisada.',
];

export const Problem = () => (
  <section className='bg-white px-6 py-24'>
    <div className='mx-auto max-w-[840px]'>
      <h2
        className={`${instrumentSans.className} mb-10 text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
        style={{ textWrap: 'pretty' }}
      >
        Se alguém pesquisar sua empresa agora, o que essa pessoa encontra?
      </h2>
      <div className='mb-10 flex flex-col'>
        {PROBLEMS.map(text => (
          <div
            key={text}
            className='flex items-start gap-3.5 border-b border-[#E4E0D6] px-1 py-4'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#8592A3'
              strokeWidth='2'
              strokeLinecap='round'
              className='mt-[3px] flex-shrink-0'
            >
              <circle cx='12' cy='12' r='9' />
              <line x1='12' y1='8' x2='12' y2='13' />
              <line x1='12' y1='16' x2='12.01' y2='16' />
            </svg>
            <span
              className={`${karla.className} text-[17px] leading-[1.5] text-[#33445A]`}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
      <p
        className={`${karla.className} mx-auto max-w-[640px] text-center font-semibold text-[17px] leading-[1.6] text-[#4B5A6E]`}
        style={{ textWrap: 'pretty' }}
      >
        Isso não significa que o seu negócio seja ruim. Significa apenas que a
        presença digital ainda não representa a qualidade do que você entrega.
      </p>
    </div>
  </section>
);

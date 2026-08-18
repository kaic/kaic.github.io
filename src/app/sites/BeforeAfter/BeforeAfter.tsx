import { instrumentSans, karla } from '@app/sites/fonts';

const EXAMPLES = [
  {
    before:
      'O cliente encontra o Instagram, procura informações em vários destaques e desiste antes de chamar.',
    after:
      'Uma página organiza serviços, horário, localização e leva ao WhatsApp com uma mensagem contextualizada.',
  },
  {
    before:
      'A empresa possui um site antigo que transmite menos profissionalismo do que o atendimento real.',
    after:
      'Uma nova experiência apresenta a empresa com clareza, funciona bem no celular e reforça confiança.',
  },
  {
    before:
      'Uma campanha envia pessoas para uma página genérica, sem foco na oferta.',
    after:
      'Uma landing page específica conduz o visitante por uma mensagem única e uma chamada clara para ação.',
  },
];

export const BeforeAfter = () => (
  <section className='bg-[#F7F4EE] px-6 py-24'>
    <div className='mx-auto max-w-[1100px]'>
      <h2
        className={`${instrumentSans.className} text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
        style={{ textWrap: 'pretty' }}
      >
        Como uma presença melhor pode mudar a jornada
      </h2>
      <p
        className={`${karla.className} mt-2.5 mb-12 text-center text-[14px] text-[#8592A3]`}
      >
        Exemplos hipotéticos — não são estudos de caso reais
      </p>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6'>
        {EXAMPLES.map(example => (
          <div
            key={example.before}
            className='flex flex-col gap-4 rounded-lg bg-white p-7'
          >
            <div>
              <p
                className={`${instrumentSans.className} mb-2 font-semibold text-[12px] uppercase tracking-[0.04em] text-[#8592A3]`}
              >
                Antes
              </p>
              <p
                className={`${karla.className} text-[14.5px] leading-[1.55] text-[#4B5A6E]`}
              >
                {example.before}
              </p>
            </div>
            <div>
              <p
                className={`${instrumentSans.className} mb-2 font-semibold text-[12px] uppercase tracking-[0.04em] text-[#0F9D78]`}
              >
                Depois
              </p>
              <p
                className={`${karla.className} text-[14.5px] leading-[1.55] text-[#33445A]`}
              >
                {example.after}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

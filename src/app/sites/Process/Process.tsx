import { instrumentSans, karla } from '@app/sites/fonts';

const STEPS = [
  {
    number: '1',
    title: 'Entendimento',
    desc: 'Eu conheço o negócio, o público, os serviços e o objetivo principal da presença digital.',
  },
  {
    number: '2',
    title: 'Estrutura e direção visual',
    desc: 'Organizo o conteúdo, a jornada do visitante e a identidade da página antes de avançar para a implementação.',
  },
  {
    number: '3',
    title: 'Desenvolvimento',
    desc: 'Transformo a estratégia em uma experiência rápida, responsiva, acessível e preparada para os principais dispositivos.',
  },
  {
    number: '4',
    title: 'Publicação e evolução',
    desc: 'Depois da revisão, o site é publicado e pode continuar evoluindo conforme o negócio cresce.',
  },
];

export const Process = () => (
  <section id='processo' className='bg-[#F7F4EE] px-6 py-24'>
    <div className='mx-auto max-w-[1100px]'>
      <h2
        className={`${instrumentSans.className} text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
        style={{ textWrap: 'pretty' }}
      >
        Um processo claro do início à publicação
      </h2>
      <div className='mt-12 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-7'>
        {STEPS.map(step => (
          <div key={step.number} className='flex flex-col gap-3'>
            <span
              className={`${instrumentSans.className} flex h-9 w-9 items-center justify-center rounded-md bg-[#EAF1FB] font-bold text-[15px] text-[#2563EB]`}
            >
              {step.number}
            </span>
            <h3
              className={`${instrumentSans.className} font-bold text-[17px] text-[#0B1F33]`}
            >
              {step.title}
            </h3>
            <p
              className={`${karla.className} text-[15px] leading-[1.55] text-[#4B5A6E]`}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
      <p
        className={`${karla.className} mt-10 text-center font-semibold text-[15px] text-[#4B5A6E]`}
      >
        Durante todo o projeto, você fala diretamente comigo.
      </p>
    </div>
  </section>
);

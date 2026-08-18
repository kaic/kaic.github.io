import { instrumentSans, karla } from '@app/sites/fonts';

const SERVICES = [
  {
    title: 'Landing pages',
    desc: 'Páginas focadas em uma oferta, campanha, serviço ou objetivo específico, com uma jornada curta e chamada clara para ação.',
    icon: (
      <>
        <circle cx='12' cy='12' r='8' />
        <circle cx='12' cy='12' r='4' />
        <circle cx='12' cy='12' r='0.6' fill='#2563EB' />
      </>
    ),
  },
  {
    title: 'Sites institucionais',
    desc: 'Sites completos para apresentar a empresa, os serviços, os diferenciais, a localização e as formas de contato com clareza e profissionalismo.',
    icon: (
      <>
        <path d='M4 21V9l8-6 8 6v12' />
        <path d='M9 21V13h6v8' />
      </>
    ),
  },
  {
    title: 'Reformulação de sites',
    desc: 'Modernização de sites antigos, lentos, confusos ou pouco funcionais no celular, preservando o que ainda faz sentido para a marca.',
    icon: (
      <>
        <path d='M21 12a9 9 0 1 1-3-6.7' />
        <polyline points='21 3 21 9 15 9' />
      </>
    ),
  },
  {
    title: 'Catálogos e cardápios digitais',
    desc: 'Apresentação organizada de produtos, serviços, cardápios ou coleções, com integração ao WhatsApp e aos canais de atendimento.',
    icon: (
      <>
        <line x1='8' y1='6' x2='21' y2='6' />
        <line x1='8' y1='12' x2='21' y2='12' />
        <line x1='8' y1='18' x2='21' y2='18' />
        <line x1='3' y1='6' x2='3.01' y2='6' />
        <line x1='3' y1='12' x2='3.01' y2='12' />
        <line x1='3' y1='18' x2='3.01' y2='18' />
      </>
    ),
  },
  {
    title: 'Integrações e soluções sob medida',
    desc: 'Formulários, automações, sistemas de contato, integrações e funcionalidades específicas para reduzir atrito na operação e na jornada do cliente.',
    icon: (
      <>
        <line x1='4' y1='6' x2='20' y2='6' />
        <circle cx='14' cy='6' r='2' />
        <line x1='4' y1='12' x2='20' y2='12' />
        <circle cx='8' cy='12' r='2' />
        <line x1='4' y1='18' x2='20' y2='18' />
        <circle cx='16' cy='18' r='2' />
      </>
    ),
  },
  {
    title: 'Suporte e evolução',
    desc: 'Manutenção, atualizações, monitoramento e melhorias contínuas depois da publicação.',
    icon: (
      <>
        <path d='M4 13a8 8 0 0 1 16 0' />
        <rect x='2' y='13' width='4' height='7' rx='1.5' />
        <rect x='18' y='13' width='4' height='7' rx='1.5' />
      </>
    ),
  },
];

export const Services = () => (
  <section id='servicos' className='bg-white px-6 py-24'>
    <div className='mx-auto max-w-[1200px]'>
      <h2
        className={`${instrumentSans.className} text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
        style={{ textWrap: 'pretty' }}
      >
        Soluções construídas para o momento do seu negócio
      </h2>
      <div className='mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6'>
        {SERVICES.map(service => (
          <div
            key={service.title}
            className='flex flex-col gap-3.5 rounded-lg bg-[#F7F4EE] p-7 px-[26px]'
          >
            <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF1FB]'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#2563EB'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                {service.icon}
              </svg>
            </span>
            <h3
              className={`${instrumentSans.className} font-bold text-[18px] text-[#0B1F33]`}
            >
              {service.title}
            </h3>
            <p
              className={`${karla.className} text-[15px] leading-[1.55] text-[#4B5A6E]`}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

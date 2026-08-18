import { waLink } from '@app/sites/constants';
import { instrumentSans, karla } from '@app/sites/fonts';

const TRUST_ITEMS = [
  {
    label: 'Estratégia',
    icon: (
      <>
        <circle cx='12' cy='12' r='9' />
        <circle cx='12' cy='12' r='3.2' />
      </>
    ),
  },
  {
    label: 'UX/UI',
    icon: (
      <>
        <rect x='3' y='3' width='7.5' height='7.5' rx='1.5' />
        <rect x='13.5' y='3' width='7.5' height='7.5' rx='1.5' />
        <rect x='3' y='13.5' width='7.5' height='7.5' rx='1.5' />
        <rect x='13.5' y='13.5' width='7.5' height='7.5' rx='1.5' />
      </>
    ),
  },
  {
    label: 'Desenvolvimento',
    icon: (
      <>
        <path d='M12 3 L21 8 L12 13 L3 8 Z' />
        <path d='M3 13 L12 18 L21 13' />
        <path d='M3 17.5 L12 22.5 L21 17.5' />
      </>
    ),
  },
  {
    label: 'SEO técnico',
    icon: (
      <>
        <circle cx='10.5' cy='10.5' r='6.5' />
        <line x1='20' y1='20' x2='15.3' y2='15.3' />
      </>
    ),
  },
  {
    label: 'Performance',
    icon: <path d='M13 2 L4 14 H11 L10 22 L20 10 H13 Z' />,
  },
  {
    label: 'Conversão',
    icon: (
      <>
        <line x1='4' y1='20' x2='20' y2='4' />
        <polyline points='8,4 20,4 20,16' />
      </>
    ),
  },
];

export const Hero = () => (
  <>
    <section id='hero' className='bg-[#F7F4EE] px-6 pb-24 pt-[168px]'>
      <div className='mx-auto flex max-w-[1200px] flex-wrap items-center gap-16'>
        <div className='min-w-0 flex-[1_1_480px]'>
          <span
            className={`${instrumentSans.className} mb-6 inline-block rounded-md bg-[#EAF1FB] px-3.5 py-[7px] font-semibold text-[13px] uppercase tracking-[0.04em] text-[#2563EB]`}
          >
            Desenvolvimento web profissional para empresas
          </span>
          <h1
            className={`${instrumentSans.className} mb-6 font-bold text-[clamp(2.25rem,4vw+1rem,3.5rem)] leading-[1.12] tracking-[-0.02em] text-[#0B1F33]`}
            style={{ textWrap: 'pretty' }}
          >
            Seu negócio pode ser excelente. Sua presença digital precisa deixar
            isso claro.
          </h1>
          <p
            className={`${karla.className} mb-9 max-w-[560px] text-[19px] leading-[1.6] text-[#4B5A6E]`}
            style={{ textWrap: 'pretty' }}
          >
            Na Kaic Systems, eu projeto e desenvolvo sites rápidos,
            profissionais e pensados para transformar a atenção que sua empresa
            recebe no Google, nas redes sociais e por indicação em contatos
            reais.
          </p>
          <div className='mb-5 flex flex-wrap gap-3.5'>
            <a
              href={waLink()}
              target='_blank'
              rel='noopener noreferrer'
              className={`${instrumentSans.className} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#2563EB] px-7 py-4 font-semibold text-[16px] text-white no-underline transition-colors hover:bg-[#1D4ED8]`}
            >
              Quero melhorar minha presença digital
            </a>
            <a
              href='#servicos'
              className={`${instrumentSans.className} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border-[1.5px] border-[#0B1F33] px-[26px] py-[14.5px] font-semibold text-[16px] text-[#0B1F33] no-underline transition-colors hover:bg-[#0B1F33] hover:text-white`}
            >
              Ver o que eu entrego
            </a>
          </div>
          <p className={`${karla.className} text-[13.5px] text-[#8592A3]`}>
            Atendimento direto com o responsável pelo projeto • CNPJ • Processo
            profissional
          </p>
        </div>

        <div className='mx-auto flex min-w-[280px] max-w-[380px] flex-[1_1_320px] flex-col'>
          <div className='flex flex-col gap-2.5 rounded-lg border border-[#E4E0D6] bg-white p-[18px_20px] shadow-[0_1px_2px_rgba(11,31,51,0.05)]'>
            <div className='flex items-center gap-2.5'>
              <span className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[#EAF1FB]'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#2563EB'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='11' cy='11' r='7' />
                  <line x1='21' y1='21' x2='16.65' y2='16.65' />
                </svg>
              </span>
              <span
                className={`${instrumentSans.className} font-semibold text-[14px] text-[#0B1F33]`}
              >
                Busca ou rede social
              </span>
            </div>
            <div className='flex flex-col gap-1.5 pl-[42px]'>
              <div className='h-[7px] w-4/5 rounded-[3px] bg-[#EFEAE0]' />
              <div className='h-[7px] w-3/5 rounded-[3px] bg-[#EFEAE0]' />
            </div>
          </div>

          <div className='flex justify-center py-1'>
            <svg
              width='14'
              height='26'
              viewBox='0 0 14 26'
              fill='none'
              stroke='#8592A3'
              strokeWidth='2'
              strokeLinecap='round'
            >
              <line x1='7' y1='0' x2='7' y2='19' />
              <polyline points='1,14 7,21 13,14' />
            </svg>
          </div>

          <div className='overflow-hidden rounded-lg bg-[#0B1F33] shadow-[0_8px_24px_rgba(11,31,51,0.18)]'>
            <div className='flex items-center gap-1.5 border-b border-[#1E3A56] px-3.5 py-2.5'>
              <span className='h-[7px] w-[7px] rounded-full bg-[#3E5670]' />
              <span className='h-[7px] w-[7px] rounded-full bg-[#3E5670]' />
              <span className='h-[7px] w-[7px] rounded-full bg-[#3E5670]' />
              <span
                className={`${karla.className} ml-2 rounded bg-[#122A44] px-2.5 py-[3px] text-[11px] text-[#AEBCCF]`}
              >
                suaempresa.com.br
              </span>
            </div>
            <div className='flex flex-col gap-2 p-[18px]'>
              <div className='h-2 w-1/2 rounded-[3px] bg-[#2563EB]' />
              <div className='h-1.5 w-[85%] rounded-[3px] bg-[#28405C]' />
              <div className='h-1.5 w-[70%] rounded-[3px] bg-[#28405C]' />
              <div className='mt-2 h-[22px] w-[120px] rounded-md bg-[#0F9D78]' />
            </div>
          </div>

          <div className='flex justify-center py-1'>
            <svg
              width='14'
              height='26'
              viewBox='0 0 14 26'
              fill='none'
              stroke='#8592A3'
              strokeWidth='2'
              strokeLinecap='round'
            >
              <line x1='7' y1='0' x2='7' y2='19' />
              <polyline points='1,14 7,21 13,14' />
            </svg>
          </div>

          <div className='flex items-center gap-2.5 rounded-lg border border-[#E4E0D6] bg-white p-[18px_20px] shadow-[0_1px_2px_rgba(11,31,51,0.05)]'>
            <span className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[#E7F6F1]'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#0F9D78'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' />
              </svg>
            </span>
            <span
              className={`${instrumentSans.className} font-semibold text-[14px] text-[#0B1F33]`}
            >
              Contato com contexto
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className='border-b border-[#E4E0D6] bg-white px-6 py-7'>
      <div className='mx-auto flex max-w-[1200px] flex-wrap justify-center gap-x-10 gap-y-8'>
        {TRUST_ITEMS.map(item => (
          <div key={item.label} className='flex items-center gap-[9px]'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#2563EB'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              {item.icon}
            </svg>
            <span
              className={`${instrumentSans.className} font-semibold text-[14.5px] text-[#0B1F33]`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  </>
);

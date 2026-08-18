import { instrumentSans, karla } from '@app/sites/fonts';

const INCLUDED = [
  'Diagnóstico inicial do negócio',
  'Definição do objetivo da página',
  'Arquitetura das informações',
  'UX/UI responsivo',
  'Desenvolvimento',
  'Adaptação para celular, tablet e desktop',
  'Integração com WhatsApp',
  'Formulário de contato',
  'SEO técnico essencial',
  'Metadados para compartilhamento',
  'Otimização de performance',
  'Acessibilidade',
  'Configuração de domínio e publicação, quando incluídas no escopo',
  'Orientação para atualização e continuidade',
];

export const Included = () => (
  <section className='bg-white px-6 py-24'>
    <div className='mx-auto max-w-[1000px]'>
      <h2
        className={`${instrumentSans.className} text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
      >
        Mais do que uma tela bonita
      </h2>
      <div className='mt-12 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-8 gap-y-4'>
        {INCLUDED.map(text => (
          <div key={text} className='flex items-start gap-3'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#0F9D78'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mt-[3px] flex-shrink-0'
            >
              <polyline points='20 6 9 17 4 12' />
            </svg>
            <span
              className={`${karla.className} text-[15.5px] leading-[1.4] text-[#33445A]`}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
      <p
        className={`${karla.className} mt-10 text-center text-[14.5px] text-[#8592A3]`}
      >
        O escopo final de cada entrega depende do projeto combinado.
      </p>
    </div>
  </section>
);

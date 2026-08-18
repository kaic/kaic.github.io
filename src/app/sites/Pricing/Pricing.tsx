import { instrumentSans, karla } from '@app/sites/fonts';

const PLANS = [
  {
    title: 'Landing page profissional',
    price: 'A partir de R$ 2.490',
    forLabel: 'Indicada para:',
    items: [
      'Campanhas',
      'Serviços específicos',
      'Lançamentos',
      'Captação de contatos',
      'Página institucional enxuta',
    ],
  },
  {
    title: 'Site institucional',
    price: 'A partir de R$ 4.500',
    forLabel: 'Indicado para:',
    items: [
      'Apresentação completa da empresa',
      'Múltiplos serviços',
      'Páginas institucionais',
      'Estrutura de conteúdo mais ampla',
      'Presença profissional de longo prazo',
    ],
  },
  {
    title: 'Projeto sob medida',
    price: 'A partir de R$ 7.000',
    forLabel: 'Indicado para:',
    items: [
      'Catálogos avançados',
      'Integrações',
      'Funcionalidades específicas',
      'Jornadas personalizadas',
      'Necessidades além de um site institucional tradicional',
    ],
  },
  {
    title: 'Suporte e manutenção',
    price: 'A partir de R$ 290/mês',
    forLabel: 'Pode incluir:',
    items: [
      'Atualizações',
      'Pequenas alterações',
      'Monitoramento',
      'Suporte',
      'Melhorias contínuas',
    ],
  },
];

export const Pricing = () => (
  <section id='investimento' className='bg-white px-6 py-24'>
    <div className='mx-auto max-w-[1200px]'>
      <h2
        className={`${instrumentSans.className} text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
        style={{ textWrap: 'pretty' }}
      >
        Investimento compatível com o que sua empresa precisa
      </h2>
      <p
        className={`${karla.className} mx-auto mt-4 max-w-[640px] text-center text-[16px] leading-[1.6] text-[#4B5A6E]`}
      >
        Cada projeto é dimensionado conforme o número de páginas, conteúdo,
        integrações, funcionalidades e nível de personalização. Estas
        referências ajudam a identificar o ponto de partida.
      </p>

      <div className='mt-12 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5'>
        {PLANS.map(plan => (
          <div
            key={plan.title}
            className='flex flex-col gap-4 rounded-lg border border-[#E4E0D6] bg-[#F7F4EE] p-7'
          >
            <h3
              className={`${instrumentSans.className} font-bold text-[18px] text-[#0B1F33]`}
            >
              {plan.title}
            </h3>
            <p
              className={`${instrumentSans.className} font-bold text-[22px] text-[#2563EB]`}
            >
              {plan.price}
            </p>
            <div>
              <p
                className={`${instrumentSans.className} mb-2.5 font-semibold text-[12.5px] uppercase tracking-[0.04em] text-[#8592A3]`}
              >
                {plan.forLabel}
              </p>
              <ul className='flex flex-col gap-1.5'>
                {plan.items.map(item => (
                  <li
                    key={item}
                    className={`${karla.className} text-[14.5px] leading-[1.5] text-[#4B5A6E]`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p
        className={`${karla.className} mt-10 text-center text-[14.5px] text-[#8592A3]`}
      >
        Os valores são referências iniciais. O orçamento final é apresentado
        depois do entendimento do projeto e da definição do escopo.
      </p>
      <div className='mt-6 flex justify-center'>
        <a
          href='#contato'
          className={`${instrumentSans.className} inline-flex items-center gap-2 rounded-md bg-[#2563EB] px-7 py-4 font-semibold text-[16px] text-white no-underline transition-colors hover:bg-[#1D4ED8]`}
        >
          Solicitar uma análise
        </a>
      </div>
    </div>
  </section>
);

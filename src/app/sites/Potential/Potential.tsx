import { instrumentSans, karla } from '@app/sites/fonts';

export const Potential = () => (
  <section id='potencial' className='bg-[#0B1F33] px-6 py-24'>
    <div className='mx-auto max-w-[760px] text-center'>
      <h2
        className={`${instrumentSans.className} mb-6 font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-white`}
        style={{ textWrap: 'pretty' }}
      >
        Negócios locais também precisam competir pela atenção digital
      </h2>
      <p
        className={`${karla.className} mb-5 text-[17px] leading-[1.65] text-[#C3CEDC]`}
        style={{ textWrap: 'pretty' }}
      >
        Na Zona Leste e em outras regiões com comércio forte, as pessoas
        descobrem empresas pelo Google, pelas redes sociais, por indicação e
        pelos aplicativos. Quando decidem saber mais, a experiência digital
        influencia diretamente a confiança e a próxima ação.
      </p>
      <p
        className={`${karla.className} mb-10 text-[17px] leading-[1.65] text-[#C3CEDC]`}
        style={{ textWrap: 'pretty' }}
      >
        A Kaic Systems nasceu nesse contexto e entende a realidade de empresas
        que precisam equilibrar atendimento, operação e crescimento sem
        transformar tecnologia em mais uma complicação.
      </p>
      <p
        className={`${instrumentSans.className} font-semibold text-[22px] tracking-[-0.01em] text-[#0F9D78]`}
        style={{ textWrap: 'pretty' }}
      >
        &ldquo;O site não precisa ser gigante. Precisa ser claro, rápido e
        útil.&rdquo;
      </p>
    </div>
  </section>
);

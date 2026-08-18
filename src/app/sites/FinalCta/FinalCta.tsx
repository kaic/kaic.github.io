import { WhatsAppIcon } from '@app/sites/Components/WhatsAppIcon';
import { waLink } from '@app/sites/constants';
import { instrumentSans, karla } from '@app/sites/fonts';

export const FinalCta = () => (
  <section className='bg-[#0B1F33] px-6 py-24'>
    <div className='mx-auto max-w-[760px] text-center'>
      <h2
        className={`${instrumentSans.className} mb-5 font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-white`}
        style={{ textWrap: 'pretty' }}
      >
        Sua empresa já construiu uma boa reputação no mundo real. A presença
        digital precisa acompanhar.
      </h2>
      <p
        className={`${karla.className} mx-auto mb-9 max-w-[560px] text-[17px] leading-[1.6] text-[#C3CEDC]`}
      >
        Conte brevemente como seu negócio funciona e o que você gostaria de
        melhorar. Eu analiso o contexto e retorno com o próximo passo mais
        adequado.
      </p>
      <div className='mb-5 flex flex-wrap justify-center gap-3.5'>
        <a
          href={waLink()}
          target='_blank'
          rel='noopener noreferrer'
          className={`${instrumentSans.className} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#0F9D78] px-7 py-4 font-semibold text-[16px] text-white no-underline transition-opacity hover:opacity-90`}
        >
          <WhatsAppIcon size={18} />
          Falar com Kaic pelo WhatsApp
        </a>
        <a
          href='#contato'
          className={`${instrumentSans.className} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border-[1.5px] border-white px-7 py-4 font-semibold text-[16px] text-white no-underline transition-colors hover:bg-white hover:text-[#0B1F33]`}
        >
          Enviar pelo formulário
        </a>
      </div>
      <p className={`${karla.className} text-[13.5px] text-[#8592A3]`}>
        Sem compromisso e sem respostas automáticas genéricas.
      </p>
    </div>
  </section>
);

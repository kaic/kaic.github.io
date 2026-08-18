import Image from 'next/image';
import { instrumentSans, karla } from '@app/sites/fonts';

const TAGS = [
  'Atendimento direto',
  'Comunicação clara',
  'Desenvolvimento profissional',
  'Projeto formalizado por CNPJ',
  'Decisões técnicas alinhadas ao negócio',
];

export const About = () => (
  <section id='sobre' className='bg-white px-6 py-24'>
    <div className='mx-auto flex max-w-[1000px] flex-wrap items-start gap-12'>
      <div className='mx-auto flex-[0_0_auto]'>
        <Image
          src='/avatar.jpg'
          alt='Foto de Kaic Bento'
          width={180}
          height={180}
          className='rounded-full border-2 border-[#0B1F33] object-cover'
        />
      </div>
      <div className='min-w-0 flex-[1_1_420px]'>
        <h2
          className={`${instrumentSans.className} mb-5 font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
          style={{ textWrap: 'pretty' }}
        >
          Você fala diretamente com quem constrói
        </h2>
        <p
          className={`${karla.className} mb-[18px] text-[17px] leading-[1.6] text-[#4B5A6E]`}
          style={{ textWrap: 'pretty' }}
        >
          Sou Kaic Bento, engenheiro de software e fundador da Kaic Systems. Meu
          trabalho é transformar necessidades de negócio em experiências
          digitais claras, profissionais e tecnicamente bem construídas.
        </p>
        <p
          className={`${karla.className} mb-6 text-[17px] leading-[1.6] text-[#4B5A6E]`}
          style={{ textWrap: 'pretty' }}
        >
          Em vez de entregar apenas um layout, eu analiso o caminho que o seu
          cliente percorre: como ele encontra a empresa, quais informações
          procura e o que precisa acontecer para que ele entre em contato.
        </p>
        <div className='mb-6 flex flex-wrap gap-2'>
          {TAGS.map(tag => (
            <span
              key={tag}
              className={`${instrumentSans.className} rounded-md border border-[#E4E0D6] bg-[#F7F4EE] px-3 py-1.5 font-semibold text-[13px] text-[#4B5A6E]`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
          <a
            href='https://kaic.me'
            className={`${instrumentSans.className} font-semibold text-[15px] text-[#2563EB] no-underline hover:text-[#1D4ED8]`}
          >
            Conhecer Kaic Bento →
          </a>
          <a
            href='https://www.linkedin.com/in/kaicbento'
            target='_blank'
            rel='noopener noreferrer'
            className={`${instrumentSans.className} font-semibold text-[15px] text-[#2563EB] no-underline hover:text-[#1D4ED8]`}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

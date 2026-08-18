'use client';

import { useState } from 'react';
import { instrumentSans, karla } from '@app/sites/fonts';

const FAQS = [
  {
    q: 'Quanto tempo leva para criar um site?',
    a: 'O prazo depende do escopo e da velocidade de aprovação dos conteúdos. Uma landing page costuma exigir menos tempo do que um site institucional com várias páginas e integrações. O cronograma é definido antes do início do projeto.',
  },
  {
    q: 'Preciso ter todos os textos e imagens prontos?',
    a: 'Não necessariamente. Eu ajudo a organizar as informações e indicar o que será necessário. Produções específicas, como fotografia, vídeo ou redação extensa, podem ser incluídas ou contratadas separadamente.',
  },
  {
    q: 'O site funciona no celular?',
    a: 'Sim. A experiência é planejada para celular, tablet e desktop, com atenção especial ao uso pelo smartphone.',
  },
  {
    q: 'O site pode levar o cliente ao WhatsApp?',
    a: 'Sim. Os botões podem abrir o WhatsApp com mensagens previamente preenchidas e contexto sobre o interesse do visitante.',
  },
  {
    q: 'Você também reforma sites existentes?',
    a: 'Sim. O projeto pode começar pela análise da estrutura atual para identificar o que deve ser preservado, corrigido ou reconstruído.',
  },
  {
    q: 'O site será encontrado no Google?',
    a: 'O projeto inclui fundamentos técnicos de SEO, estrutura semântica e metadados. O posicionamento depende também de concorrência, conteúdo, autoridade do domínio e trabalho contínuo, portanto não deve ser tratado como resultado garantido.',
  },
  {
    q: 'Existe suporte depois da publicação?',
    a: 'Sim. A continuidade pode ser contratada separadamente para atualizações, manutenção e evolução.',
  },
  {
    q: 'Como começo?',
    a: 'Envie uma mensagem pelo WhatsApp ou pelo formulário explicando brevemente sua empresa e o que você gostaria de melhorar.',
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id='faq' className='bg-white px-6 py-24'>
      <div className='mx-auto max-w-[800px]'>
        <h2
          className={`${instrumentSans.className} mb-10 text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
        >
          Perguntas frequentes
        </h2>
        <div className='flex flex-col'>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className='border-b border-[#E4E0D6]'>
                <button
                  type='button'
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className='flex w-full items-center justify-between gap-4 py-5 text-left'
                >
                  <span
                    className={`${instrumentSans.className} font-semibold text-[16.5px] text-[#0B1F33]`}
                  >
                    {item.q}
                  </span>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#2563EB'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='flex-shrink-0 transition-transform'
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <polyline points='6 9 12 15 18 9' />
                  </svg>
                </button>
                {isOpen && (
                  <p
                    className={`${karla.className} mb-5 text-[15px] leading-[1.6] text-[#4B5A6E]`}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

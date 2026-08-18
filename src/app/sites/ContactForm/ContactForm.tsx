'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CONTACT_EMAIL, waLink } from '@app/sites/constants';
import { instrumentSans, karla } from '@app/sites/fonts';

const OBJETIVO_OPTIONS = [
  'Criar meu primeiro site',
  'Reformular um site existente',
  'Criar uma landing page',
  'Criar um catálogo ou cardápio',
  'Melhorar a presença digital',
  'Desenvolver uma solução personalizada',
  'Ainda não sei',
];

interface ContactFormProps {
  prefillMessage?: string | null;
}

interface FormErrors {
  nome?: string;
  mensagem?: string;
}

const buildMailtoLines = (values: {
  nome: string;
  empresa: string;
  objetivo: string;
  mensagem: string;
}) => {
  const lines = [`Nome: ${values.nome}`];
  if (values.empresa) lines.push(`Empresa: ${values.empresa}`);
  if (values.objetivo) lines.push(`Objetivo principal: ${values.objetivo}`);
  lines.push('', 'Mensagem:', values.mensagem);
  return lines;
};

const buildMailto = (values: {
  nome: string;
  empresa: string;
  objetivo: string;
  mensagem: string;
}) => {
  const subject = 'Projeto de site para minha empresa';
  const body = buildMailtoLines(values).join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const ContactForm = ({ prefillMessage }: ContactFormProps) => {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const nomeRef = useRef<HTMLInputElement>(null);
  const mensagemRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!prefillMessage) return;
    setMensagem(prefillMessage);
    mensagemRef.current?.focus();
  }, [prefillMessage]);

  const values = { nome, empresa, objetivo, mensagem };
  const mailtoHref = buildMailto(values);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};
    if (!nome.trim()) nextErrors.nome = 'Informe seu nome.';
    if (!mensagem.trim())
      nextErrors.mensagem = 'Conte brevemente sobre o seu projeto.';

    if (nextErrors.nome) {
      nomeRef.current?.focus();
    } else if (nextErrors.mensagem) {
      mensagemRef.current?.focus();
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    window.location.href = mailtoHref;
    setSubmitted(true);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(buildMailtoLines(values).join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputClass = `${karla.className} w-full rounded-md border border-[#E4E0D6] bg-white px-4 py-3 text-[15px] text-[#0B1F33] outline-none focus:border-[#2563EB]`;
  const labelClass = `${instrumentSans.className} mb-1.5 block font-semibold text-[14px] text-[#0B1F33]`;

  return (
    <section id='contato' className='bg-[#F7F4EE] px-6 py-24'>
      <div className='mx-auto max-w-[640px]'>
        <h2
          className={`${instrumentSans.className} mb-3 text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-[#0B1F33]`}
        >
          Fale sobre o seu projeto
        </h2>
        <p
          className={`${karla.className} mb-10 text-center text-[16px] text-[#4B5A6E]`}
        >
          Prefere falar direto? Chame no{' '}
          <a
            href={waLink()}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#2563EB] hover:text-[#1D4ED8]'
          >
            WhatsApp
          </a>{' '}
          ou escreva para{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className='text-[#2563EB] hover:text-[#1D4ED8]'
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <div className='rounded-lg bg-white p-8'>
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className='mb-5'>
                <label htmlFor='nome' className={labelClass}>
                  Nome
                </label>
                <input
                  ref={nomeRef}
                  id='nome'
                  type='text'
                  autoComplete='name'
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  className={inputClass}
                />
                {errors.nome && (
                  <p
                    className={`${karla.className} mt-1.5 text-[13.5px] text-[#C0392B]`}
                  >
                    {errors.nome}
                  </p>
                )}
              </div>

              <div className='mb-5'>
                <label htmlFor='empresa' className={labelClass}>
                  Empresa (opcional)
                </label>
                <input
                  id='empresa'
                  type='text'
                  autoComplete='organization'
                  value={empresa}
                  onChange={e => setEmpresa(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className='mb-5'>
                <label htmlFor='objetivo' className={labelClass}>
                  Objetivo principal (opcional)
                </label>
                <select
                  id='objetivo'
                  value={objetivo}
                  onChange={e => setObjetivo(e.target.value)}
                  className={inputClass}
                >
                  <option value=''>Selecione</option>
                  {OBJETIVO_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className='mb-6'>
                <label htmlFor='mensagem' className={labelClass}>
                  Mensagem
                </label>
                <textarea
                  ref={mensagemRef}
                  id='mensagem'
                  rows={5}
                  value={mensagem}
                  onChange={e => setMensagem(e.target.value)}
                  className={inputClass}
                />
                {errors.mensagem && (
                  <p
                    className={`${karla.className} mt-1.5 text-[13.5px] text-[#C0392B]`}
                  >
                    {errors.mensagem}
                  </p>
                )}
              </div>

              <p
                className={`${karla.className} mb-6 text-[13px] leading-[1.6] text-[#8592A3]`}
              >
                Este site não tem servidor próprio: ao enviar, seu aplicativo de
                e-mail abre com esta mensagem pronta para {CONTACT_EMAIL} — nada
                é armazenado por aqui.{' '}
                <Link
                  href='/sites/privacidade'
                  className='text-[#2563EB] hover:text-[#1D4ED8]'
                >
                  Ver política de privacidade.
                </Link>
              </p>

              <button
                type='submit'
                className={`${instrumentSans.className} w-full rounded-md bg-[#2563EB] px-7 py-4 font-semibold text-[16px] text-white transition-colors hover:bg-[#1D4ED8]`}
              >
                Enviar por e-mail
              </button>
            </form>
          ) : (
            <div role='status' aria-live='polite'>
              <h3
                className={`${instrumentSans.className} mb-3 font-bold text-[20px] text-[#0B1F33]`}
              >
                Seu aplicativo de e-mail deve abrir agora
              </h3>
              <p
                className={`${karla.className} mb-6 text-[15.5px] leading-[1.6] text-[#4B5A6E]`}
              >
                A mensagem já vem preenchida para {CONTACT_EMAIL}. Se não abrir
                automaticamente, use uma das opções abaixo.
              </p>
              <div className='mb-5 flex flex-wrap gap-3'>
                <a
                  href={mailtoHref}
                  className={`${instrumentSans.className} inline-flex items-center gap-2 rounded-md bg-[#2563EB] px-5 py-3 font-semibold text-[14.5px] text-white no-underline`}
                >
                  Abrir e-mail novamente
                </a>
                <button
                  type='button'
                  onClick={handleCopy}
                  className={`${instrumentSans.className} rounded-md border-[1.5px] border-[#0B1F33] bg-transparent px-5 py-3 font-semibold text-[14.5px] text-[#0B1F33]`}
                >
                  {copied ? 'Copiado!' : 'Copiar mensagem'}
                </button>
              </div>
              <button
                type='button'
                onClick={() => setSubmitted(false)}
                className={`${karla.className} cursor-pointer border-none bg-transparent p-0 text-[13.5px] text-[#8592A3] underline`}
              >
                Editar respostas
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

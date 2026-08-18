'use client';

import { useState } from 'react';
import { waLink } from '@app/sites/constants';
import { instrumentSans, karla } from '@app/sites/fonts';
import {
  DIAG_QUESTIONS,
  DiagAnswers,
  computeResult,
  diagPrefillMessage,
  diagWaMessage,
} from './diagnostic-data';

interface DiagnosticProps {
  onPrefill: (message: string) => void;
}

export const Diagnostic = ({ onPrefill }: DiagnosticProps) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<DiagAnswers>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = DIAG_QUESTIONS[step];
  const isLastStep = step === DIAG_QUESTIONS.length - 1;
  const currentAnswer = answers[currentQuestion.id];

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (isLastStep) {
      setShowResult(true);
    } else {
      setStep(s => s + 1);
    }
  };

  const handleBack = () => setStep(s => Math.max(0, s - 1));

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setShowResult(false);
  };

  const handlePrefill = (title: string) => {
    onPrefill(diagPrefillMessage(title));
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const result = showResult ? computeResult(answers) : null;

  return (
    <section id='diagnostico' className='bg-[#0B1F33] px-6 py-24'>
      <div className='mx-auto max-w-[720px]'>
        <h2
          className={`${instrumentSans.className} mb-3 text-center font-bold text-[clamp(1.75rem,3vw+1rem,2.5rem)] tracking-[-0.01em] text-white`}
          style={{ textWrap: 'pretty' }}
        >
          Descubra qual presença digital faz sentido para o seu negócio
        </h2>
        <p
          className={`${karla.className} mb-10 text-center text-[16px] text-[#AEBCCF]`}
        >
          Quatro perguntas rápidas. Nenhuma resposta é salva sem sua
          autorização.
        </p>

        <div className='rounded-lg bg-[#F7F4EE] p-9 md:p-10'>
          {!showResult ? (
            <>
              <div className='mb-6 flex gap-1.5'>
                {DIAG_QUESTIONS.map((q, i) => (
                  <span
                    key={q.id}
                    className='h-1.5 flex-1 rounded-full transition-colors'
                    style={{ background: i <= step ? '#2563EB' : '#E4E0D6' }}
                  />
                ))}
              </div>
              <p
                className={`${instrumentSans.className} mb-2.5 font-semibold text-[13px] uppercase tracking-[0.04em] text-[#2563EB]`}
              >
                Pergunta {step + 1} de {DIAG_QUESTIONS.length}
              </p>
              <fieldset className='mb-7 border-none p-0'>
                <legend
                  className={`${instrumentSans.className} mb-[18px] font-bold text-[22px] text-[#0B1F33]`}
                  style={{ textWrap: 'pretty' }}
                >
                  {currentQuestion.question}
                </legend>
                <div role='radiogroup' className='flex flex-col gap-2.5'>
                  {currentQuestion.options.map(opt => {
                    const optId = `${currentQuestion.id}-${opt.value}`;
                    const checked = currentAnswer === opt.value;
                    return (
                      <label
                        key={opt.value}
                        htmlFor={optId}
                        className='flex cursor-pointer items-center gap-3 rounded-md border p-3.5'
                        style={{
                          borderColor: checked ? '#2563EB' : '#E4E0D6',
                          background: checked ? '#EAF1FB' : '#FFFFFF',
                        }}
                      >
                        <input
                          type='radio'
                          id={optId}
                          name={currentQuestion.id}
                          value={opt.value}
                          checked={checked}
                          onChange={() => handleAnswer(opt.value)}
                          className='m-0 h-[18px] w-[18px] flex-shrink-0 accent-[#2563EB]'
                        />
                        <span
                          className={`${karla.className} text-[15.5px] text-[#0B1F33]`}
                        >
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              <div className='flex justify-between gap-3'>
                {step > 0 ? (
                  <button
                    type='button'
                    onClick={handleBack}
                    className={`${instrumentSans.className} rounded-md border-[1.5px] border-[#0B1F33] bg-transparent px-5 py-3 font-semibold text-[14.5px] text-[#0B1F33]`}
                  >
                    Voltar
                  </button>
                ) : (
                  <span />
                )}
                <button
                  type='button'
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  className={`${instrumentSans.className} rounded-md px-5 py-3 font-semibold text-[14.5px] text-white transition-opacity`}
                  style={{
                    background: '#2563EB',
                    opacity: currentAnswer ? 1 : 0.4,
                    cursor: currentAnswer ? 'pointer' : 'not-allowed',
                  }}
                >
                  {isLastStep ? 'Ver resultado' : 'Próxima'}
                </button>
              </div>
            </>
          ) : (
            result && (
              <div role='status' aria-live='polite'>
                <p
                  className={`${instrumentSans.className} mb-2.5 font-semibold text-[13px] uppercase tracking-[0.04em] text-[#0F9D78]`}
                >
                  Recomendação
                </p>
                <h3
                  className={`${instrumentSans.className} mb-3.5 font-bold text-[26px] text-[#0B1F33]`}
                >
                  {result.title}
                </h3>
                <p
                  className={`${karla.className} mb-7 text-[16.5px] leading-[1.6] text-[#33445A]`}
                >
                  {result.text}
                </p>
                <div className='flex flex-wrap items-center gap-x-5 gap-y-2'>
                  <a
                    href={waLink(diagWaMessage(result.title))}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${instrumentSans.className} inline-flex items-center gap-2 rounded-md bg-[#2563EB] px-6 py-3.5 font-semibold text-[15px] text-white no-underline transition-colors hover:bg-[#1D4ED8]`}
                  >
                    Conversar sobre este diagnóstico
                  </a>
                  <button
                    type='button'
                    onClick={() => handlePrefill(result.title)}
                    className={`${instrumentSans.className} cursor-pointer border-none bg-transparent p-1 px-1 py-3 font-semibold text-[14.5px] text-[#2563EB] underline`}
                  >
                    Preencher formulário com este resultado
                  </button>
                </div>
                <button
                  type='button'
                  onClick={handleRestart}
                  className={`${karla.className} mt-5 block cursor-pointer border-none bg-transparent p-0 text-[13.5px] text-[#8592A3] underline`}
                >
                  Refazer diagnóstico
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

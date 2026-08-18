export type ResultId = 'LP' | 'SI' | 'RF' | 'CAT' | 'SOB';

export interface DiagOption {
  value: string;
  label: string;
}

export interface DiagQuestion {
  id: 'q1' | 'q2' | 'q3' | 'q4';
  question: string;
  options: DiagOption[];
}

export const DIAG_QUESTIONS: DiagQuestion[] = [
  {
    id: 'q1',
    question: 'Como está sua presença digital hoje?',
    options: [
      { value: 'sem_site', label: 'Ainda não tenho um site.' },
      { value: 'site_antigo', label: 'Tenho um site antigo ou desatualizado.' },
      {
        value: 'redes_sociais',
        label: 'Uso principalmente Instagram e WhatsApp.',
      },
      {
        value: 'poucos_contatos',
        label: 'Tenho um site, mas ele gera poucos contatos.',
      },
    ],
  },
  {
    id: 'q2',
    question: 'Qual é o principal objetivo da sua empresa?',
    options: [
      { value: 'apresentar', label: 'Apresentar melhor a empresa.' },
      { value: 'orcamento', label: 'Receber pedidos de orçamento.' },
      { value: 'divulgar', label: 'Divulgar produtos ou serviços.' },
      { value: 'whatsapp', label: 'Levar mais pessoas ao WhatsApp.' },
      { value: 'campanha', label: 'Criar uma campanha ou oferta específica.' },
    ],
  },
  {
    id: 'q3',
    question: 'Como os clientes normalmente encontram você?',
    options: [
      { value: 'google', label: 'Google e mapas.' },
      { value: 'instagram', label: 'Instagram ou outras redes sociais.' },
      { value: 'indicacoes', label: 'Indicações.' },
      { value: 'apps', label: 'Aplicativos ou marketplaces.' },
      { value: 'combinacao', label: 'Uma combinação desses canais.' },
    ],
  },
  {
    id: 'q4',
    question: 'O que o visitante deveria conseguir fazer?',
    options: [
      { value: 'orcamento', label: 'Pedir orçamento.' },
      { value: 'whatsapp', label: 'Falar no WhatsApp.' },
      { value: 'servicos', label: 'Conhecer os serviços.' },
      { value: 'catalogo', label: 'Ver produtos, catálogo ou cardápio.' },
      { value: 'local', label: 'Encontrar localização e horário.' },
    ],
  },
];

type ScoreMap = Record<string, Partial<Record<ResultId, number>>>;

const Q1_MAP: ScoreMap = {
  sem_site: { SI: 2, LP: 1 },
  site_antigo: { RF: 3 },
  redes_sociais: { SI: 2, CAT: 1 },
  poucos_contatos: { RF: 2, SOB: 1 },
};

const Q2_MAP: ScoreMap = {
  apresentar: { SI: 2 },
  orcamento: { LP: 2, SOB: 1 },
  divulgar: { CAT: 2 },
  whatsapp: { LP: 1, CAT: 1 },
  campanha: { LP: 3 },
};

const Q3_MAP: ScoreMap = {
  google: { SI: 1 },
  instagram: { CAT: 1, LP: 1 },
  indicacoes: { SI: 1 },
  apps: { CAT: 1 },
  combinacao: { SOB: 1 },
};

const Q4_MAP: ScoreMap = {
  orcamento: { LP: 2 },
  whatsapp: { LP: 1, CAT: 1 },
  servicos: { SI: 2 },
  catalogo: { CAT: 3 },
  local: { SI: 1 },
};

const MAPS: Record<DiagQuestion['id'], ScoreMap> = {
  q1: Q1_MAP,
  q2: Q2_MAP,
  q3: Q3_MAP,
  q4: Q4_MAP,
};

export interface DiagResult {
  id: ResultId;
  title: string;
  text: string;
}

export const RESULT_COPY: Record<ResultId, DiagResult> = {
  LP: {
    id: 'LP',
    title: 'Landing page de conversão',
    text: 'Pelo que você descreveu, o mais eficiente é uma página única, focada em uma oferta ou objetivo específico, com uma jornada curta até o contato. Uma landing page de conversão tende a trazer resultado mais rápido do que um site amplo.',
  },
  SI: {
    id: 'SI',
    title: 'Site institucional',
    text: 'Pelo que você descreveu, sua empresa precisa de uma página que organize as informações principais, transmita confiança e leve o visitante para uma conversa com contexto. Um site institucional enxuto pode ser o melhor ponto de partida.',
  },
  RF: {
    id: 'RF',
    title: 'Reformulação de site',
    text: 'Pelo que você descreveu, o site atual já existe, mas não está representando bem o seu negócio. Faz mais sentido reformular a experiência atual do que começar do zero, preservando o que já funciona.',
  },
  CAT: {
    id: 'CAT',
    title: 'Catálogo ou cardápio digital',
    text: 'Pelo que você descreveu, o mais importante é apresentar produtos, serviços ou cardápio de forma organizada, com um caminho direto até o WhatsApp. Um catálogo ou cardápio digital tende a resolver bem essa necessidade.',
  },
  SOB: {
    id: 'SOB',
    title: 'Solução personalizada',
    text: 'Pelo que você descreveu, seu contexto combina objetivos diferentes. Uma solução personalizada, combinando elementos de mais de um formato, tende a representar melhor o seu negócio.',
  },
};

export type DiagAnswers = Partial<Record<DiagQuestion['id'], string>>;

export const computeResult = (answers: DiagAnswers): DiagResult => {
  const totals: Partial<Record<ResultId, number>> = {};

  (Object.keys(answers) as DiagQuestion['id'][]).forEach(qId => {
    const answer = answers[qId];
    if (!answer) return;
    const scores = MAPS[qId][answer];
    if (!scores) return;
    (Object.keys(scores) as ResultId[]).forEach(key => {
      totals[key] = (totals[key] ?? 0) + (scores[key] ?? 0);
    });
  });

  const ranked = (Object.keys(RESULT_COPY) as ResultId[])
    .map(id => ({ id, score: totals[id] ?? 0 }))
    .sort((a, b) => b.score - a.score);

  const top = ranked[0];
  const second = ranked[1];

  if (!top || top.score === 0 || (second && top.score === second.score)) {
    return RESULT_COPY.SOB;
  }

  return RESULT_COPY[top.id];
};

export const diagWaMessage = (title: string) =>
  `Olá, Kaic! Fiz o diagnóstico no site da Kaic Systems e o resultado indicado foi "${title}". Gostaria de conversar sobre a presença digital da minha empresa.`;

export const diagPrefillMessage = (title: string) =>
  `Diagnóstico: ${title}. Gostaria de conversar sobre a presença digital da minha empresa.`;

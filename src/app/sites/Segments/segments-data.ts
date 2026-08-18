export interface Segment {
  id: string;
  label: string;
  bullets: string[];
}

export const SEGMENTS: Segment[] = [
  {
    id: 'restaurantes',
    label: 'Restaurantes e delivery',
    bullets: [
      'Cardápio organizado',
      'Localização e horário',
      'Pedidos pelo canal correto',
      'Destaque para produtos',
      'Integração com WhatsApp ou plataforma de pedidos',
    ],
  },
  {
    id: 'clinicas',
    label: 'Clínicas e consultórios',
    bullets: [
      'Apresentação de especialidades',
      'Estrutura e equipe',
      'Localização',
      'Informações claras',
      'Contato responsável',
    ],
  },
  {
    id: 'lojas',
    label: 'Lojas e comércio',
    bullets: [
      'Catálogo',
      'Produtos em destaque',
      'Localização',
      'Diferenciais',
      'Atendimento pelo WhatsApp',
    ],
  },
  {
    id: 'escolas',
    label: 'Escolas e cursos',
    bullets: [
      'Apresentação da proposta',
      'Turmas ou modalidades',
      'Infraestrutura',
      'Dúvidas frequentes',
      'Contato para matrícula',
    ],
  },
  {
    id: 'prestadores',
    label: 'Prestadores de serviços',
    bullets: [
      'Serviços organizados',
      'Área atendida',
      'Diferenciais',
      'Solicitação de orçamento',
      'Qualificação do contato',
    ],
  },
  {
    id: 'academias',
    label: 'Academias, beleza e bem-estar',
    bullets: [
      'Modalidades ou serviços',
      'Estrutura',
      'Planos ou formas de atendimento',
      'Localização',
      'Contato',
    ],
  },
];

import { IArticle } from '@src/utils';

/**
 * All articles data used in the website
 * Extracted to a separate file for better organization and maintainability
 */
const articlesData: IArticle[] = [
  {
    title: "You're not coding alone anymore: Coding in the age of agents",
    date: '2025-03-29',
    description: 'How LLMs, code agents, MCPs, and "vibe coding" are reshaping the way we build and think about software.',
    sources: [
      {
        url: 'https://open.substack.com/pub/kaicbento/p/youre-not-coding-alone-anymore-coding',
        language: 'en',
        platform: 'substack'
      },
      {
        url: 'https://dev.to/kaic/youre-not-coding-alone-anymore-coding-in-the-age-of-agents-1i1e',
        language: 'en',
        platform: 'dev.to'
      },
      {
        url: 'https://dev.to/kaic/voce-nao-esta-mais-codificando-sozinhoa-o-desenvolvimento-na-era-dos-code-agents-11o9',
        language: 'pt-br',
        platform: 'dev.to'
      }
    ]
  },
  {
    title:
      'Why did I rewrite my website from scratch to make it (almost) identical?',
    date: '2025-03-11',
    description: 'This is not a text (only) about Next.js or React, but about the hidden complexities of software engineering decisions.',
    sources: [
      {
        url: 'https://open.substack.com/pub/kaicbento/p/why-did-i-rewrite-my-website-from?r=5vxpr&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
        language: 'en',
        platform: 'substack'
      }
    ]
  },
  {
    title: "Be your tool's best friend, not its enemy",
    description: "i.e. don't spend the day fighting against your computer.",
    date: '2024-12-22',
    sources: [
      {
        url: 'https://kaicbento.substack.com/p/be-your-tools-best-friend-not-its?r=5vxpr',
        language: 'en',
        platform: 'substack'
      }
    ]
  },
];

export default articlesData;
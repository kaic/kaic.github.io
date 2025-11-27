import { IArticle } from '@src/utils';

/**
 * All articles data used in the website
 * Extracted to a separate file for better organization and maintainability
 */
const articlesData: IArticle[] = [
  {
    title: "How I hacked my own hardware monitor using a text file and some C# magic",
    date: '2025-11-27',
    description: "Why install 500MB of bloatware when 10MB of code and a text file can do the trick?",
    sources: [
      {
        url: 'https://kaicbento.substack.com/p/how-i-hacked-my-own-hardware-monitor',
        platform: 'substack'
      }
    ]
  },
  {
    title: "What does fixing a child’s lamp have to do with repairing a slow CI/CD",
    date: '2025-11-24',
    description: "Sometimes, the most impactful changes come from simple, pragmatic fixes. This story highlights observation, practicality, and the power of being an expert fixer.",
    sources: [
      {
        url: 'https://kaicbento.substack.com/p/what-does-fixing-a-childs-lamp-have',
        platform: 'substack'
      }
    ]
  },
  {
    title: "Why Your Monitoring is Failing You — and How Observability Can Fix It",
    date: '2025-05-03',
    description: "Why your dashboards aren't enough — and how to evolve from reactive monitoring to real, actionable observability",
    sources: [
      {
        url: 'https://open.substack.com/pub/kaicbento/p/why-your-monitoring-is-failing-you?r=5vxpr&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
        platform: 'substack'
      }
    ]
  },
  {
    title: "You're not coding alone anymore: Coding in the age of agents",
    date: '2025-03-29',
    description: 'How LLMs, code agents, MCPs, and "vibe coding" are reshaping the way we build and think about software.',
    sources: [
      {
        url: 'https://open.substack.com/pub/kaicbento/p/youre-not-coding-alone-anymore-coding',
        platform: 'substack'
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
        platform: 'substack'
      }
    ]
  },
];

export default articlesData;
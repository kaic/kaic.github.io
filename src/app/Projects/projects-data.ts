import { IProject } from '@src/utils';

/**
 * All projects data used in the website
 * Extracted to a separate file for better organization and maintainability
 */
const projectsData: IProject[] = [
  {
    title: 'Win-Post-Install',
    description: 'Windows Post-Install Script Generator - Create custom installation scripts that automatically install selected programs and adjust settings.',
    longDescription: 'A web-based tool to generate custom Windows post-installation scripts. Select the applications you want to install and the settings you want to configure, then download a ready-to-run script that automates everything automatically.',
    image: '/projects/win-post-install.png',
    status: 'active',
    technologies: ['Bash', 'React', 'Tailwind', 'Vite', 'Windows'],
    links: [
      {
        url: 'https://github.com/kaic/win-post-install',
        label: 'View on GitHub',
        type: 'github'
      },
      {
        url: 'https://kaic.me/win-post-install/',
        label: 'Visit Website',
        type: 'website'
      }
    ],
    featured: true
  },
  {
    title: 'HalfLife Monitoring',
    description: 'Minimal hardware monitoring Half-Life style overlay theme for Rainmeter to watch CPU, GPU, RAM, and more.',
    longDescription: 'A Half-Life inspired monitoring theme for Rainmeter featuring real-time CPU, GPU, RAM, Disk, and Network monitoring with a custom TempBridge service for accurate GPU readings.',
    image: '/projects/halflife-monitoring.png',
    status: 'active',
    technologies: ['C#', '.NET 8.0', 'Rainmeter', 'LibreHardwareMonitor', 'Windows Services'],
    links: [
      {
        url: 'https://github.com/kaic/halflife-monitoring',
        label: 'View on GitHub',
        type: 'github'
      },
      {
        url: 'https://github.com/kaic/halflife-monitoring/releases',
        label: 'Download Latest',
        type: 'download'
      }
    ],
    featured: true
  },
];

export default projectsData;

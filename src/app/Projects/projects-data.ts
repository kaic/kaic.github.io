import { IProject } from '@src/utils';

/**
 * All projects data used in the website
 * Extracted to a separate file for better organization and maintainability
 */
const projectsData: IProject[] = [
  {
    title: 'HalfLife Monitoring',
    description: 'Minimal hardware monitoring Half-Life style overlay theme for Rainmeter to watch CPU, GPU, RAM, and more.',
    longDescription: 'A Half-Life inspired monitoring theme for Rainmeter featuring real-time CPU, GPU, RAM, Disk, and Network monitoring with a custom TempBridge service for accurate GPU readings.',
    image: '/projects/halflife-monitoring.png',
    date: '2024-01-15',
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

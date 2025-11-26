import { useTranslations } from 'next-intl';
import { ProjectCard } from './components/ProjectCard';
import { IProject } from '@src/utils';
import projectsData from './projects-data';

/**
 * Projects component that displays a list of personal projects
 */
function Projects() {
  const t = useTranslations('Home.Projects');
  const projectsList: IProject[] = projectsData;

  return (
    <section id='projects'>
      <div className='max-w-4xl mx-auto grid grid-rows-[auto_1fr_auto] p-4 pb-0 gap-5 sm:gap-6 md:gap-8 md:p-10 lg:p-20'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-8'>
          <h2 className='text-2xl font-bold text-red-300 mb-4 sm:mb-0'>{t('section-name')}</h2>
        </div>
        <ul className='grid gap-6 sm:gap-8 mb-6 sm:mb-8'>
          {projectsList.map((project, index) => (
            <li key={index}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ProjectCard } from './components/ProjectCard';
import { IProject } from '@src/utils';
import projectsData from './projects-data';

const getRepoSlug = (project: IProject): string | null => {
  if (project.repo) return project.repo;

  const githubLink = project.links.find(link => link.type === 'github');
  if (!githubLink) return null;

  try {
    const url = new URL(githubLink.url);
    const [owner, repo] = url.pathname.split('/').filter(Boolean);
    return owner && repo ? `${owner}/${repo}` : null;
  } catch {
    return null;
  }
};

/**
 * Projects component that displays a list of personal projects
 */
function Projects() {
  const t = useTranslations('Home.Projects');
  const projectsList: IProject[] = projectsData;
  const [starsByRepo, setStarsByRepo] = useState<Record<string, number | null>>({});

  useEffect(() => {
    const controller = new AbortController();

    const fetchStars = async () => {
      const repos = Array.from(
        new Set(
          projectsData
            .map(getRepoSlug)
            .filter((repo): repo is string => Boolean(repo))
        )
      );

      for (const repo of repos) {
        try {
          const response = await fetch(`https://api.github.com/repos/${repo}`, {
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal,
          });

          if (!response.ok) {
            throw new Error(`GitHub request failed: ${response.status}`);
          }

          const data = await response.json();
          if (controller.signal.aborted) return;

          setStarsByRepo(prev => ({
            ...prev,
            [repo]: typeof data.stargazers_count === 'number' ? data.stargazers_count : null,
          }));
        } catch {
          if (controller.signal.aborted) return;
          setStarsByRepo(prev => ({ ...prev, [repo]: null }));
        }
      }
    };

    fetchStars();
    return () => controller.abort();
  }, [projectsData]);

  return (
    <section id='projects'>
      <div className='max-w-4xl mx-auto grid grid-rows-[auto_1fr_auto] p-4 pb-0 gap-5 sm:gap-6 md:gap-8 md:p-10 lg:p-20'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-8'>
          <h2 className='text-2xl font-bold text-red-300 mb-4 sm:mb-0'>{t('section-name')}</h2>
        </div>
        <ul className='grid gap-6 sm:gap-8 mb-6 sm:mb-8'>
          {projectsList.map((project, index) => {
            const repo = getRepoSlug(project);
            const stars = repo ? starsByRepo[repo] : undefined;

            return (
              <li key={index}>
                <ProjectCard project={project} stars={stars} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Projects;

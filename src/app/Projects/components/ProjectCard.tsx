
import { 
  IProject, 
  IProjectLink
} from '@src/utils';

interface ProjectCardProps {
  project: IProject;
  stars?: number | null;
}

// Project link icon component
const ProjectLinkIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'github':
      return (
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case 'download':
      return (
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
        </svg>
      );
    case 'demo':
      return (
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>
      );
    case 'website':
      return (
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
};

// Get style for project link type
const getProjectLinkStyle = (type: string): string => {
  switch (type) {
    case 'github':
      return 'bg-purple-500 bg-opacity-20 text-purple-300 border-purple-500 hover:bg-opacity-30';
    case 'download':
      return 'bg-green-500 bg-opacity-20 text-green-300 border-green-500 hover:bg-opacity-30';
    case 'demo':
      return 'bg-blue-500 bg-opacity-20 text-blue-300 border-blue-500 hover:bg-opacity-30';
    case 'website':
      return 'bg-orange-500 bg-opacity-20 text-orange-300 border-orange-500 hover:bg-opacity-30';
    default:
      return 'bg-red-500 bg-opacity-20 text-red-300 border-red-500 hover:bg-opacity-30';
  }
};

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyle = () => {
    switch (status) {
      case 'active':
        return 'bg-green-500 bg-opacity-20 text-green-300 border-green-500';
      case 'in-development':
        return 'bg-yellow-500 bg-opacity-20 text-yellow-300 border-yellow-500';
      case 'archived':
        return 'bg-gray-500 bg-opacity-20 text-gray-300 border-gray-500';
      default:
        return 'bg-gray-500 bg-opacity-20 text-gray-300 border-gray-500';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'in-development':
        return 'In Development';
      case 'archived':
        return 'Archived';
      default:
        return status;
    }
  };

  return (
    <span className={`px-2 py-1 rounded-md text-xs border border-opacity-30 ${getStatusStyle()}`}>
      {getStatusLabel()}
    </span>
  );
};

// Project link button component
const ProjectLinkButton = ({ link }: { link: IProjectLink }) => {
  return (
    <a
      href={link.url}
      target='_blank'
      rel='noopener noreferrer'
      className={`hover:opacity-90 transition-all active:scale-95 inline-flex items-center px-4 py-2 rounded-md text-sm border border-opacity-30 ${getProjectLinkStyle(link.type)}`}
    >
      <ProjectLinkIcon type={link.type} />
      {link.label}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-2">
        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
      </svg>
    </a>
  );
};

export const ProjectCard = ({ project, stars }: ProjectCardProps) => {
  const displayStars = typeof stars === 'number' ? stars : '—';

  return (
    <div className='p-5 sm:p-6 text-left block rounded-lg border border-gray-800 shadow-md hover:border-red-400 hover:border-opacity-50 transition-all duration-300'>
      {/* Project Image */}
      {project.image && (
        <div className='mb-4 rounded-lg overflow-hidden border border-gray-700'>
          <img 
            src={project.image} 
            alt={project.title}
            className='w-full h-48 object-cover object-top'
          />
        </div>
      )}

      {/* Header with title and status */}
      <div className='flex justify-between items-start mb-3'>
        <div>
          <h3 className='text-xl font-bold text-red-400'>
            {project.title}
          </h3>
          <div className='flex items-center gap-2 text-amber-300 text-sm mt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
            <span>{displayStars}</span>
          </div>
        </div>
        <StatusBadge status={project.status} />
      </div>
      
      {/* Description */}
      <p className='text-gray-200 text-base mb-4'>
        {project.description}
      </p>

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className='px-2 py-1 rounded-md bg-gray-800 bg-opacity-50 text-gray-300 text-xs border border-gray-700'
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Action Links */}
      <div className='flex flex-wrap gap-2 pt-4 border-t border-gray-700 border-opacity-50'>
        {project.links.map((link, index) => (
          <ProjectLinkButton key={index} link={link} />
        ))}
      </div>
    </div>
  );
};

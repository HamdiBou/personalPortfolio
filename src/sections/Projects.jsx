import { FaCodeBranch, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/useReveal';

function Projects({ repos, status, error }) {
  const { ref, visible } = useReveal();
  const showSkeleton = status === 'loading';

  return (
    <section id="projects" ref={ref} className={`section-shell ${visible ? 'is-visible' : ''}`}>
      <SectionHeader eyebrow="Portfolio" title="Recent Projects" description="Open source contributions and personal projects from GitHub." />
      {error && <p className="status state-error">{error}</p>}
      <div className="projects-grid-modern">
        {showSkeleton && Array.from({ length: 3 }).map((_, idx) => <div key={idx} className="project-card skeleton" />)}
        {!showSkeleton && !repos.length && <p className="status">No repositories yet. Try refreshing in a minute.</p>}
        {!showSkeleton &&
          repos.map((repo) => (
            <article key={repo.id} className="project-card">
              <div className="project-chip">{new Date(repo.updated).toLocaleDateString()}</div>
              <h3>{repo.title}</h3>
              <p>{repo.description}</p>
              <div className="project-meta">
                <span>
                  <FaStar /> {repo.stars}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks}
                </span>
              </div>
              <div className="project-actions">
                <a href={repo.link} target="_blank" rel="noopener noreferrer">
                  View Project <FaExternalLinkAlt />
                </a>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}

export default Projects;

import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useReveal } from '../hooks/useReveal';

function Hero({ content, resumeUrl }) {
  const { ref, visible } = useReveal({ threshold: 0.4 });

  return (
    <section id="home" ref={ref} className={`hero-modern ${visible ? 'is-visible' : ''}`}>
      <div className="hero-copy">
        <p className="eyebrow">Full stack · AI curious · Open source contributor</p>
        <h1>
          Hi, I'm <span>{content.name}</span>
        </h1>
        <p className="hero-tagline">{content.title}</p>
        {content.subtitle && <p className="hero-subtitle">{content.subtitle}</p>}
        <div className="hero-meta">
          {content.location && (
            <span>
              <FaMapMarkerAlt /> {content.location}
            </span>
          )}
          {content.phone && (
            <span>
              <FaPhone /> {content.phone}
            </span>
          )}
        </div>
        <p className="hero-body">{content.description}</p>
        <div className="hero-cta">
          {content.ctas?.map((cta) => {
            const isResume = cta.href === 'resume';
            const destination = isResume ? resumeUrl || '#' : cta.href || '#';
            return (
              <a
                key={cta.label}
                href={destination}
                className={`btn ${cta.variant === 'ghost' ? 'btn-ghost' : 'btn-primary'}`}
                target={isResume ? '_blank' : undefined}
                rel={isResume ? 'noopener noreferrer' : undefined}
              >
                {cta.label}
              </a>
            );
          })}
          {resumeUrl && (
            <a className="btn btn-outline" href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          )}
        </div>
        <div className="hero-socials">
          {content.socials?.github && (
            <a href={content.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          )}
          {content.socials?.linkedin && (
            <a href={content.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          )}
          {content.socials?.email && (
            <a href={`mailto:${content.socials.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
      <div className="hero-visual">
        {content.photo && (
          <div className="hero-portrait">
            <img src={content.photo} alt={content.name} />
          </div>
        )}
        <div className="orb orb-primary" />
        <div className="orb orb-secondary" />
      </div>
    </section>
  );
}

export default Hero;

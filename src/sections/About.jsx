import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/useReveal';

function About({ content }) {
  const { ref, visible } = useReveal();
  const paragraphs = content?.paragraphs ?? [];
  const stats = content?.stats ?? [];

  return (
    <section id="about" ref={ref} className={`section-shell ${visible ? 'is-visible' : ''}`}>
      <SectionHeader eyebrow="Background" title="About" description={content.headline} align="left" />
      <div className="about-grid">
        <div className="about-text">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="about-stats">
          {stats.map((stat) => (
            <article key={stat.label}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

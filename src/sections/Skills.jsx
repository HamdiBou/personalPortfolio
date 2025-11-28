import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/useReveal';

function Skills({ clusters }) {
  const { ref, visible } = useReveal();
  const groups = Array.isArray(clusters) ? clusters : [];

  return (
    <section id="skills" ref={ref} className={`section-shell dark ${visible ? 'is-visible' : ''}`}>
      <SectionHeader eyebrow="Expertise" title="Technical Skills" description="Modern technologies and frameworks for building scalable applications." align="left" />
      <div className="skills-grid-modern">
        {groups.map((cluster) => (
          <article key={cluster.title}>
            <div>
              <p className="eyebrow">{cluster.title}</p>
              <h3>{cluster.title}</h3>
            </div>
            <ul>
              {(cluster.items ?? []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

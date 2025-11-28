import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/useReveal';

function Contact({ content }) {
  const { ref, visible } = useReveal();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message sent!');
  };

  return (
    <section id="contact" ref={ref} className={`section-shell dark contact-shell ${visible ? 'is-visible' : ''}`}>
      <SectionHeader eyebrow="Get In Touch" title={content.title} description={content.description} align="left" />
      <div className="contact-grid">
        <ul className="contact-list">
          <li>
            <FaEnvelope />
            <a href={`mailto:${content.email}`}>{content.email}</a>
          </li>
          {content.github && (
            <li>
              <FaGithub />
              <a href={content.github} target="_blank" rel="noopener noreferrer">
                {content.github.replace(/^https?:\/\//, '')}
              </a>
            </li>
          )}
          {content.linkedin && (
            <li>
              <FaLinkedin />
              <a href={content.linkedin} target="_blank" rel="noopener noreferrer">
                {content.linkedin.replace(/^https?:\/\//, '')}
              </a>
            </li>
          )}
        </ul>
        <form className="contact-form-modern" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="4" placeholder="Project details" required />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

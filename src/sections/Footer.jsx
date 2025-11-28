import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer({ year = new Date().getFullYear(), github, linkedin }) {
  return (
    <footer className="footer-shell">
      <p>© {year} Hamdi Boussarsar · Crafted in Vite + React</p>
      <div className="footer-links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
      </div>
    </footer>
  );
}

export default Footer;

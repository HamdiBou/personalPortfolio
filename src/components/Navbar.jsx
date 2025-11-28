import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MOBILE_BREAKPOINT = 768;

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.offsetTop - 80,
    behavior: 'smooth',
  });
};

function Navbar({ links, resumeUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <a className="nav-logo" href="#home" onClick={() => handleNav('home')}>
          HB·Studio
        </a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <button key={link.id} type="button" onClick={() => handleNav(link.id)}>
              {link.label}
            </button>
          ))}
          {resumeUrl && (
            <a className="resume-chip" href={resumeUrl} target="_blank" rel="noopener noreferrer">
              CV
            </a>
          )}
        </nav>
        <button className="nav-toggle" type="button" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;

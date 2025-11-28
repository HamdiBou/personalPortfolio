import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useGithubRepos } from './hooks/useGithubRepos';
import {
  HERO_DEFAULT,
  ABOUT_DEFAULT,
  SKILLS_DEFAULT,
  CONTACT_DEFAULT,
  NAV_LINKS,
} from './constants/defaultContent';

const GITHUB_USERNAME = 'HamdiBou';
const RESUME_URL = '/resume.pdf';

function App() {
  const { repos, status, error } = useGithubRepos(GITHUB_USERNAME, 9);

  return (
    <div className="app-shell">
      <Navbar links={NAV_LINKS} resumeUrl={RESUME_URL} />
      <main className="page-shell">
        <Hero content={HERO_DEFAULT} resumeUrl={RESUME_URL} />
        <About content={ABOUT_DEFAULT} />
        <Skills clusters={SKILLS_DEFAULT} />
        <Projects repos={repos} status={status} error={error} />
        <Contact content={CONTACT_DEFAULT} />
      </main>
      <Footer github={CONTACT_DEFAULT.github} linkedin={CONTACT_DEFAULT.linkedin} />
    </div>
  );
}

export default App;

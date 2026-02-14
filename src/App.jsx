import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { projects } from './data/projects';
import autoProjects from './data/auto-projects.json';
import { experience } from './data/experience';
import { skills } from './data/skills';
import { education } from './data/education';

const SECTIONS = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

const Portfolio = () => {
  const manualGithub = new Set(projects.map(p => p.github).filter(Boolean));
  const manualTitles = new Set(projects.map(p => p.title.toLowerCase()));
  const autoDeduped = (autoProjects || []).filter(p =>
    (!p.github || !manualGithub.has(p.github)) &&
    (!p.title || !manualTitles.has(p.title.toLowerCase()))
  );
  const mergedProjects = [...projects, ...autoDeduped];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      setScrolled(window.scrollY > 50);

      const current = SECTIONS.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience experience={experience} education={education} />
      <Projects projects={mergedProjects} />
      <Skills skills={skills} />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Portfolio;

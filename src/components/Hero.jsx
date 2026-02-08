import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const TITLES = ['Data Scientist', 'ML Engineer', 'Data Analyst', 'BI Developer'];

const Hero = ({ scrollToSection }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => setIsDeleting(true), 1800);
      return;
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1">
            <img
              src="/profile_photo.png"
              alt="Subhash Pavan Chakravarthy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Subhash Pavan Chakravarthy
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-4 h-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">
            {TITLES[titleIndex].substring(0, charIndex)}
          </span>
          <span className="animate-blink text-purple-400">|</span>
        </p>

        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          2+ years building ML models that drive revenue, reduce costs, and optimize operations.
          Specialized in predictive analytics, NLP, and business intelligence.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            View Projects
          </button>
          <a
            href="/subhashsomarouthu_resume.pdf"
            download
            className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
          <a
            href="https://calendly.com/pavanchakravarthy2000/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all inline-block"
          >
            Coffee Chat
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/subhashsomarouthu" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/subhash-somarouthu" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:pavanchakravarthy2000@gmail.com" className="hover:text-purple-400 transition-colors">
            <Mail size={28} />
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

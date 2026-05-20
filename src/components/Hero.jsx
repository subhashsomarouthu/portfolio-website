import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const TITLES = ['Data Engineer', 'Azure Data Engineer'];

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
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo - Left side on desktop, top on mobile */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1.5 shadow-2xl shadow-purple-500/30">
              <img
                src="/profile_photo.png"
                alt="Subhash Pavan Chakravarthy"
                className="w-full h-full rounded-full object-cover object-[50%_22%]"
              />
            </div>
          </div>

          {/* Text - Right side on desktop, below on mobile */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm md:text-base text-purple-400 font-medium tracking-widest uppercase mb-3">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Subhash Pavan
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Chakravarthy
              </span>
            </h1>

            <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-10" aria-label={TITLES.join(' | ')}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">
                {TITLES[titleIndex].substring(0, charIndex)}
              </span>
              <span className="animate-blink text-purple-400">|</span>
              <span className="sr-only">{TITLES.join(' | ')}</span>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              5 years building scalable ETL and ELT pipelines on Azure using ADF, Databricks, and Synapse Analytics.
              Specialized in ingestion, transformation, warehousing, and production pipeline reliability.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                View Projects
              </button>
              <a
                href="/Subhash_Pavan_Chakravarthy_Resume.pdf"
                download
                className="px-6 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all inline-flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
              <a
                href="https://calendly.com/pavanchakravarthy2000/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all inline-block"
              >
                Coffee Chat
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-5">
              <a href="https://github.com/subhashsomarouthu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/subhash-somarouthu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:subhashpavan2000@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 animate-bounce text-center">
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

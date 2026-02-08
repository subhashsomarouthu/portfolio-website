import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold">
              SP
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Subhash Pavan Chakravarthy
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-4">
          Data Scientist Who Transforms Data Into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold"> Business Impact</span>
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
            href="https://calendly.com/pavanchakravarthy2000/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all inline-block"
          >
            Coffee Chat ☕
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

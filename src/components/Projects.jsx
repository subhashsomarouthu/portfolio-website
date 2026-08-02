import { useState } from 'react';
import { ExternalLink, Brain, Cpu, BarChart3, Database } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ProjectModal from './ProjectModal';

const FILTER_GROUPS = [
  { label: 'All', value: 'All', icon: null },
  { label: 'ML / AI', value: 'ML / AI', icon: Brain },
  { label: 'GenAI / NLP', value: 'GenAI / NLP', icon: Cpu },
  { label: 'Data Analysis', value: 'Data Analysis', icon: BarChart3 },
  { label: 'Data Engineering', value: 'Data Engineering', icon: Database },
];

const Projects = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-8 text-lg">
            A mix of production systems, data workflows, analytics solutions, and applied AI projects with measurable business impact
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTER_GROUPS.map(({ label, value, icon: Icon }) => (
            <button
              key={value}
              onClick={() => { setActiveFilter(value); setVisibleProjects(6); }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2 ${activeFilter === value
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-purple-500/20'
                }`}
            >
              {Icon && <Icon size={16} />}
              {label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeFilter === value ? 'bg-white/20' : 'bg-slate-700/50'
                }`}>
                {value === 'All' ? projects.length : projects.filter(p => p.category === value).length}
              </span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.slice(0, visibleProjects).map((project, index) => {
            const coverImage = project.images?.[0] || project.image;
            return (
              <ScrollReveal key={project.title} delay={index % 3 * 100}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 h-full flex flex-col cursor-pointer group"
                >
                  {/* Category placeholder icon */}
                  <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-slate-800/80 to-purple-900/30 border border-purple-500/10 flex items-center justify-center overflow-hidden">
                    {project.previewVideo ? (
                      <video
                        src={project.previewVideo}
                        className="w-full h-full object-cover rounded-xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : coverImage ? (
                      <img src={coverImage} alt={project.title} className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <div className="text-center">
                        {project.category === 'ML / AI' && <Brain size={40} className="mx-auto text-purple-400/60 mb-1" />}
                        {project.category === 'GenAI / NLP' && <Cpu size={40} className="mx-auto text-cyan-400/60 mb-1" />}
                        {project.category === 'Data Analysis' && <BarChart3 size={40} className="mx-auto text-pink-400/60 mb-1" />}
                        {project.category === 'Data Engineering' && <Database size={40} className="mx-auto text-blue-400/60 mb-1" />}
                        <p className="text-xs text-gray-500">{project.category}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-purple-400 flex-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-3 rounded-lg border border-purple-500/30 mb-4">
                    <p className="text-xs text-purple-300 mb-1 font-semibold">RESULT</p>
                    <p className="text-sm text-white font-semibold">{project.result}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded text-xs border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-purple-500/10">
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Click to expand</span>
                    <div className="flex items-center gap-3">
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Website
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={14} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {visibleProjects < filtered.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleProjects(prev => Math.min(prev + 6, filtered.length))}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              Load More Projects ({filtered.length - visibleProjects} remaining)
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;

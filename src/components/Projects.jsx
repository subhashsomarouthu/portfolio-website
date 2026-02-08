import { useState } from 'react';

const Projects = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Each project demonstrates measurable business impact using the STAR methodology
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-400 flex-1">{project.title}</h3>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs whitespace-nowrap ml-2">
                  {project.category}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">SITUATION</p>
                  <p className="text-sm text-gray-300">{project.situation}</p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">TASK</p>
                  <p className="text-sm text-gray-300">{project.task}</p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">ACTION</p>
                  <p className="text-sm text-gray-300">{project.action}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-3 rounded-lg border border-purple-500/30">
                  <p className="text-xs text-purple-300 mb-1 font-semibold">RESULT</p>
                  <p className="text-sm text-white font-semibold">{project.result}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded text-xs border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {Object.entries(project.metrics).slice(0, 3).map(([key, value], idx) => (
                  <div key={idx} className="bg-slate-800/50 p-2 rounded text-center">
                    <p className="text-lg font-bold text-cyan-400">{value}</p>
                    <p className="text-xs text-gray-400 capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleProjects(prev => Math.min(prev + 6, projects.length))}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              Load More Projects ({projects.length - visibleProjects} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

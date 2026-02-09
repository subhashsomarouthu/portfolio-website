import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-gradient-to-br from-slate-900 to-purple-950 rounded-2xl border border-purple-500/30 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-lg p-6 pb-4 border-b border-purple-500/20 rounded-t-2xl flex items-start justify-between">
          <div>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs mb-2 inline-block">
              {project.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          {project.description && (
            <div>
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
          )}

          {/* STAR Breakdown */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-xl">
              <p className="text-xs text-gray-400 font-semibold mb-1">SITUATION</p>
              <p className="text-gray-300 text-sm">{project.situation}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl">
              <p className="text-xs text-gray-400 font-semibold mb-1">TASK</p>
              <p className="text-gray-300 text-sm">{project.task}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl">
              <p className="text-xs text-gray-400 font-semibold mb-1">ACTION</p>
              <p className="text-gray-300 text-sm">{project.action}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-4 rounded-xl border border-purple-500/30">
              <p className="text-xs text-purple-300 font-semibold mb-1">RESULT</p>
              <p className="text-white text-sm font-semibold">{project.result}</p>
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Key Metrics</h3>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(project.metrics).map(([key, value], idx) => (
                <div key={idx} className="bg-slate-800/50 p-3 rounded-xl text-center">
                  <p className="text-xl font-bold text-cyan-400">{value}</p>
                  <p className="text-xs text-gray-400 capitalize">{key}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-purple-500/15 text-purple-300 rounded-lg text-sm border border-purple-500/25">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              <ExternalLink size={18} />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  const images = project.images?.length ? project.images : (project.image ? [project.image] : []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [project?.title]);

  const nextImage = () => {
    if (!images.length) return;
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!images.length) return;
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
          {/* Image Carousel */}
          {images.length > 0 && (
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-slate-900/60">
                <img
                  src={images[activeIndex]}
                  alt={`${project.title} ${activeIndex + 1}`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((src, idx) => (
                    <button
                      key={src}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-14 w-20 rounded-lg overflow-hidden border ${idx === activeIndex ? 'border-cyan-400' : 'border-transparent'} shrink-0`}
                      aria-label={`Select image ${idx + 1}`}
                    >
                      <img src={src} alt={`${project.title} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

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

          {/* Links */}
          <div className="flex flex-wrap gap-3">
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
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-purple-500/30 rounded-lg font-semibold text-purple-300 hover:text-white hover:border-purple-400 hover:bg-white/15 transition-all transform hover:scale-105"
              >
                <ExternalLink size={18} />
                Visit Website
              </a>
            )}
            {project.demoVideo && (
              <a
                href={project.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-cyan-500/30 rounded-lg font-semibold text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-white/15 transition-all transform hover:scale-105"
              >
                <ExternalLink size={18} />
                Watch Demo
              </a>
            )}
            {project.dashboard && (
              <a
                href={project.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-cyan-500/30 rounded-lg font-semibold text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-white/15 transition-all transform hover:scale-105"
              >
                <ExternalLink size={18} />
                View Dashboard
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

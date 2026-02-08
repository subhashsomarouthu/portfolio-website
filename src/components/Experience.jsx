import { GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Experience = ({ experience, education }) => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">{exp.role}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 text-right">
                    <p>{exp.period}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg">
                      <achievement.icon size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{achievement.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <ScrollReveal>
            <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">Education</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <ScrollReveal key={index} delay={index * 150} className="h-full">
                <div className="bg-gradient-to-br from-cyan-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 h-full">
                  <GraduationCap size={32} className="text-cyan-400 mb-4" />
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-gray-300 mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.location} • {edu.year}</p>

                  {edu.courses && (
                    <div className="mb-3">
                      <p className="text-xs text-cyan-400 font-semibold mb-1">COURSES</p>
                      <p className="text-gray-400 text-sm">{edu.courses}</p>
                    </div>
                  )}

                  {edu.concentration && (
                    <div className="mb-3">
                      <p className="text-xs text-purple-400 font-semibold mb-1">CONCENTRATION</p>
                      <p className="text-gray-400 text-sm">{edu.concentration}</p>
                    </div>
                  )}

                  {edu.highlights && (
                    <p className="text-gray-400 text-sm italic">{edu.highlights}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { Award, Database, Code, BarChart3, Brain } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const certifications = [
  {
    title: "IBM Data Science Specialization",
    issuer: "IBM via Coursera",
    description: "End-to-end data science workflows, Python, SQL, ML modeling",
    color: "purple",
  },
  {
    title: "Full Stack Data Science Program",
    issuer: "AlmaBetter",
    description: "Data preprocessing, ML, model evaluation & deployment",
    color: "cyan",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    description: "Core Python programming, data structures, algorithms",
    color: "green",
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    description: "Complex queries, window functions, optimization",
    color: "yellow",
  },
];

const colorMap = {
  purple: { icon: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/30' },
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-500/30' },
  green: { icon: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
  yellow: { icon: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30' },
};

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index % 3 * 80}>
              <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                  <span className="text-sm text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">{skill.category}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <ScrollReveal>
            <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">Certifications</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const colors = colorMap[cert.color];
              return (
                <ScrollReveal key={cert.title} delay={index * 100}>
                  <div className={`bg-slate-800/50 p-5 rounded-xl border ${colors.border} hover:scale-[1.02] transition-all`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`${colors.bg} p-2 rounded-lg`}>
                        <Award className={colors.icon} size={24} />
                      </div>
                      <div>
                        <span className="text-white font-semibold block">{cert.title}</span>
                        <span className="text-xs text-gray-400">{cert.issuer}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 ml-12">{cert.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-10">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-center mb-6 text-gray-300">Tools & Platforms</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <Database className="text-cyan-400" size={20} />
                  <span className="text-gray-300 text-sm">Git & GitHub</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="text-purple-400" size={20} />
                  <span className="text-gray-300 text-sm">Docker & Kubernetes</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-cyan-400" size={20} />
                  <span className="text-gray-300 text-sm">Agile/Scrum</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="text-purple-400" size={20} />
                  <span className="text-gray-300 text-sm">Azure & GCP</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;

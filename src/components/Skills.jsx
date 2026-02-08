import { Award, Database, Code, BarChart3, Brain } from 'lucide-react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-900/60 to-purple-900/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
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
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">Certifications & Tools</h3>
          <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-purple-400" size={24} />
                  <span className="text-white font-semibold">IBM Data Science Specialization</span>
                </div>
                <p className="text-sm text-gray-400 ml-9">IBM via Coursera - End-to-end data science workflows, Python, SQL, ML modeling</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-cyan-400" size={24} />
                  <span className="text-white font-semibold">Full Stack Data Science Program</span>
                </div>
                <p className="text-sm text-gray-400 ml-9">AlmaBetter - Data preprocessing, ML, model evaluation & deployment</p>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-4 gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { Briefcase, Code, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Achievements
          </span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
            <Briefcase size={48} className="text-purple-400 mb-4" />
            <h3 className="text-3xl font-bold mb-2">2+</h3>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all transform hover:scale-105">
            <Code size={48} className="text-cyan-400 mb-4" />
            <h3 className="text-3xl font-bold mb-2">15+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all transform hover:scale-105">
            <Award size={48} className="text-pink-400 mb-4" />
            <h3 className="text-3xl font-bold mb-2">4</h3>
            <p className="text-gray-400">Certifications Earned</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-all transform hover:scale-105">
            <TrendingUp size={48} className="text-indigo-400 mb-4" />
            <h3 className="text-3xl font-bold mb-2">90%</h3>
            <p className="text-gray-400">Skill Accuracy</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a <span className="text-purple-400 font-semibold">Data Analyst and Data Scientist</span> with 2+ years of experience transforming complex data into actionable insights that drive business growth. My expertise spans <span className="text-cyan-400 font-semibold">data analysis, machine learning, ETL pipelines, and business intelligence</span>, with a proven track record of delivering measurable results across finance, education, and telecommunications.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            From analyzing 20+ datasets with 15% higher accuracy at Quinte Financial Technologies to processing 100k+ records and improving campaign targeting by 20% at AlmaBetter, I specialize in creating <span className="text-purple-400 font-semibold">data-driven solutions</span> that make a real impact. With certifications from IBM and AlmaBetter, I'm seeking opportunities to leverage my skills in advanced analytics, machine learning, and cloud-based systems to solve challenging business problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

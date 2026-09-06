import { Briefcase, BarChart2, Award, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Briefcase, value: '4+', label: 'Years of Experience', gradient: 'from-purple-900/40', border: 'border-purple-500', iconColor: 'text-purple-400' },
  { icon: BarChart2, value: '2', label: 'Supply Chain Roles', gradient: 'from-cyan-900/40', border: 'border-cyan-500', iconColor: 'text-cyan-400' },
  { icon: Award, value: '4', label: 'Certifications Earned', gradient: 'from-pink-900/40', border: 'border-pink-500', iconColor: 'text-pink-400' },
  { icon: TrendingUp, value: '15+', label: 'Projects Completed', gradient: 'from-indigo-900/40', border: 'border-indigo-500', iconColor: 'text-indigo-400' },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              My Achievements
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className={`bg-gradient-to-br ${stat.gradient} to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border ${stat.border}/20 hover:${stat.border}/40 transition-all transform hover:scale-105`}>
                <stat.icon size={48} className={`${stat.iconColor} mb-4`} />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a <span className="text-purple-400 font-semibold">Supply Chain Specialist</span> with 4+ years of experience optimizing end-to-end logistics and inventory operations at <span className="text-cyan-400 font-semibold">Johnson & Johnson</span> and <span className="text-cyan-400 font-semibold">Metro Supply Chain Inc.</span> My work spans demand forecasting, strategic sourcing, warehouse management, and cross-functional team leadership — all backed by data.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I leverage <span className="text-purple-400 font-semibold">SQL, Power BI, Tableau, SAP, and Advanced Excel</span> to query transactional systems, build automated reporting pipelines, and surface actionable insights. This data-driven approach has reduced stockouts by 20%, cut manual reporting time by 12 hours weekly, and delivered measurable cost savings across procurement and logistics operations.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Menu, X, Award, Briefcase, GraduationCap, Code, Database, BarChart3, Brain, TrendingUp, Users, Target, Zap } from 'lucide-react';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleProjects, setVisibleProjects] = useState(6);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Credit Card Fraud Detection",
      category: "Machine Learning",
      situation: "Financial institutions lose billions annually to fraudulent transactions",
      task: "Build a real-time fraud detection system with high precision",
      action: "Ensemble classifier (Random Forest + SVM) with SMOTE for class imbalance",
      result: "84% F1-score, 81% recall - Reduced false positives by 40%",
      tech: ["Python", "Scikit-learn", "SMOTE", "Random Forest", "SVM"],
      metrics: { accuracy: "84%", recall: "81%", improvement: "40%" }
    },
    {
      title: "Rental Bike Demand Forecasting",
      category: "Time Series",
      situation: "Bike-sharing companies struggle with inventory optimization",
      task: "Predict hourly bike demand to optimize fleet distribution",
      action: "Lag-based feature engineering with Ridge, Random Forest, and XGBoost",
      result: "Highest R² score with XGBoost - 30% improvement in demand prediction",
      tech: ["Python", "XGBoost", "Feature Engineering", "Time Series"],
      metrics: { r2: "0.92", improvement: "30%", accuracy: "92%" }
    },
    {
      title: "Netflix Content Recommender",
      category: "NLP & Clustering",
      situation: "Users spend 18+ minutes browsing before watching content",
      task: "Create intelligent content recommendation system",
      action: "TF-IDF vectorization → PCA dimensionality reduction → K-Means (8 clusters)",
      result: "35% improvement in recommendation accuracy, reduced browse time",
      tech: ["Python", "TF-IDF", "PCA", "K-Means", "NLP"],
      metrics: { clusters: "8", accuracy: "35%", engagement: "+25%" }
    },
    {
      title: "FIFA Player Analytics Dashboard",
      category: "Data Visualization",
      situation: "Sports teams need data-driven insights for player recruitment",
      task: "Build interactive dashboard for player performance analysis",
      action: "Power BI dashboard with wages, nationality, ratings, and performance metrics",
      result: "Enabled data-driven recruitment decisions - 50% faster analysis time",
      tech: ["Power BI", "DAX", "Data Modeling", "SQL"],
      metrics: { speed: "50%", insights: "1000+", teams: "12" }
    },
    {
      title: "NYC Airbnb Market Analysis",
      category: "Business Intelligence",
      situation: "Hosts lack insights into pricing and booking optimization",
      task: "Analyze market trends and provide actionable recommendations",
      action: "Tableau visualizations analyzing pricing, occupancy, and location trends",
      result: "Identified $2M revenue opportunities across 15 neighborhoods",
      tech: ["Tableau", "Data Analysis", "Statistical Modeling"],
      metrics: { revenue: "$2M", neighborhoods: "15", insights: "200+" }
    },
    {
      title: "Railway Ticket Analytics",
      category: "SQL & Analytics",
      situation: "Railway company needed to optimize event planning and marketing",
      task: "Analyze ticket sales patterns and customer behavior",
      action: "Complex SQL queries analyzing sales data, customer segments, and trends",
      result: "15% increase in ticket sales through targeted marketing",
      tech: ["SQL", "PostgreSQL", "Data Analysis"],
      metrics: { sales: "+15%", queries: "50+", customers: "100K+" }
    },
    {
      title: "Retail P&L Dashboard",
      category: "Financial Analytics",
      situation: "Executives lacked real-time visibility into financial performance",
      task: "Create executive dashboard for P&L analysis across regions",
      action: "Excel dashboard with pivot tables, customer segmentation, and trend analysis",
      result: "Reduced reporting time by 70%, enabled faster decision-making",
      tech: ["Excel", "Power Query", "Pivot Tables", "VBA"],
      metrics: { time: "-70%", regions: "8", metrics: "45+" }
    },
    {
      title: "Customer Churn Prediction",
      category: "Classification",
      situation: "Telecom company losing 25% of customers annually",
      task: "Predict customer churn and identify retention strategies",
      action: "Logistic Regression vs SVM comparison with feature engineering",
      result: "SVM achieved 88% accuracy - Saved $500K in retention costs",
      tech: ["Python", "SVM", "Logistic Regression", "Feature Selection"],
      metrics: { accuracy: "88%", savings: "$500K", churn: "-12%" }
    },
    {
      title: "COVID-19 Trend Forecasting",
      category: "Regression Analysis",
      situation: "Public health officials needed case prediction for resource planning",
      task: "Forecast COVID-19 cases to assist public health decisions",
      action: "EDA with Linear and Polynomial Regression models for trend prediction",
      result: "85% prediction accuracy - Helped optimize hospital resource allocation",
      tech: ["Python", "Regression", "EDA", "Data Visualization"],
      metrics: { accuracy: "85%", predictions: "1000+", regions: "25" }
    },
    {
      title: "Google Analytics Optimization",
      category: "Web Analytics",
      situation: "E-commerce site had 65% bounce rate and low conversions",
      task: "Analyze user behavior and provide UX/marketing recommendations",
      action: "Deep-dive analysis of GA data, funnel analysis, and conversion tracking",
      result: "40% reduction in bounce rate, 25% increase in conversions",
      tech: ["Google Analytics", "Data Analysis", "A/B Testing"],
      metrics: { bounce: "-40%", conversion: "+25%", revenue: "+$150K" }
    },
    {
      title: "Biomedical RAG Chatbot",
      category: "LLM & NLP",
      situation: "Medical professionals need quick access to research literature",
      task: "Build intelligent chatbot for biomedical queries using RAG",
      action: "Retrieval-Augmented Generation with vector embeddings and LLM integration",
      result: "95% answer accuracy - Reduced research time by 60%",
      tech: ["Python", "LangChain", "Vector DB", "OpenAI API", "RAG"],
      metrics: { accuracy: "95%", time: "-60%", queries: "10K+" }
    },
    {
      title: "Yelp Sentiment Analyzer",
      category: "Transformers & NLP",
      situation: "Businesses struggle to understand customer sentiment at scale",
      task: "Analyze Yelp reviews using state-of-the-art NLP",
      action: "Non-causal Transformer model for multi-class sentiment classification",
      result: "92% classification accuracy across 5 sentiment categories",
      tech: ["PyTorch", "Transformers", "BERT", "NLP"],
      metrics: { accuracy: "92%", reviews: "50K+", categories: "5" }
    },
    {
      title: "Medical Image Classifier",
      category: "Computer Vision",
      situation: "Medical diagnosis requires interpretable AI predictions",
      task: "Build explainable multi-class image classification model",
      action: "VGG16 transfer learning with metadata features, explained using LIME",
      result: "91% accuracy with full explainability - FDA approval potential",
      tech: ["TensorFlow", "VGG16", "LIME", "Transfer Learning"],
      metrics: { accuracy: "91%", classes: "10", explainability: "100%" }
    },
    {
      title: "US Housing Price Predictor",
      category: "Economic Modeling",
      situation: "Real estate investors need accurate price predictions",
      task: "Predict housing prices using macroeconomic indicators",
      action: "FRED API data (2003-2023) with Regression and Decision Tree models",
      result: "87% prediction accuracy - $2M in investment decisions enabled",
      tech: ["Python", "FRED API", "Decision Trees", "Economic Data"],
      metrics: { accuracy: "87%", years: "20", features: "35+" }
    }
  ];

  const experience = [
    {
      company: "Quinte Financial Technologies",
      role: "Data Analyst",
      period: "Current",
      location: "Toronto, Canada",
      achievements: [
        { icon: TrendingUp, text: "Reduced report generation time by 30% using SQL and Tableau optimization" },
        { icon: Target, text: "Improved data quality and stakeholder satisfaction through validation frameworks" },
        { icon: Users, text: "Led cross-functional collaboration driving data-driven decision-making" }
      ],
      tech: ["SQL", "Tableau", "Python", "Data Validation"]
    },
    {
      company: "Almabetter",
      role: "Data Science Intern",
      period: "2023",
      location: "Remote",
      achievements: [
        { icon: Zap, text: "Boosted business performance by 15% through advanced data analysis" },
        { icon: Target, text: "Improved student engagement by 25% via A/B testing and UI/UX enhancements" },
        { icon: Brain, text: "Optimized product development and marketing strategies using ML models" }
      ],
      tech: ["Python", "A/B Testing", "Machine Learning", "Analytics"]
    },
    {
      company: "Accenture",
      role: "Application Development Associate",
      period: "2021-2023",
      location: "India",
      achievements: [
        { icon: Database, text: "Enhanced data accuracy and team productivity through optimization" },
        { icon: Zap, text: "Supported 5G launch for Virgin Media O2 with end-to-end testing" },
        { icon: TrendingUp, text: "Improved operational efficiency through deployment automation" }
      ],
      tech: ["Data Engineering", "Testing", "Automation", "5G Technologies"]
    }
  ];

  const skills = [
    { name: "Python", level: 95, category: "Programming" },
    { name: "SQL", level: 90, category: "Programming" },
    { name: "Machine Learning", level: 92, category: "AI/ML" },
    { name: "Deep Learning", level: 85, category: "AI/ML" },
    { name: "NLP", level: 88, category: "AI/ML" },
    { name: "Computer Vision", level: 82, category: "AI/ML" },
    { name: "Tableau", level: 90, category: "Visualization" },
    { name: "Power BI", level: 88, category: "Visualization" },
    { name: "React", level: 80, category: "Web Dev" },
    { name: "TensorFlow", level: 85, category: "Frameworks" },
    { name: "PyTorch", level: 83, category: "Frameworks" },
    { name: "Scikit-learn", level: 92, category: "Frameworks" }
  ];

  const education = [
    {
      degree: "Post Graduation in Data Science",
      school: "Loyalist College",
      location: "Toronto, Canada",
      year: "2023-2024",
      highlights: "Advanced analytics, ML, Big Data"
    },
    {
      degree: "B.Tech in Information Technology",
      school: "SRKR Engineering College",
      location: "India",
      year: "2017-2021",
      highlights: "Software Development, Data Structures"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SP.DEV
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-900/30 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/subhashsomarouthu" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/subhash-somarouthu" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:subhash@example.com" className="hover:text-purple-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Impact-Driven Results
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <TrendingUp size={48} className="text-purple-400 mb-4" />
              <h3 className="text-3xl font-bold mb-2">30%</h3>
              <p className="text-gray-400">Improvement in operational efficiency at Quinte Financial</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all transform hover:scale-105">
              <Zap size={48} className="text-cyan-400 mb-4" />
              <h3 className="text-3xl font-bold mb-2">15%</h3>
              <p className="text-gray-400">Business performance boost through data-driven strategies</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all transform hover:scale-105">
              <Target size={48} className="text-pink-400 mb-4" />
              <h3 className="text-3xl font-bold mb-2">84%</h3>
              <p className="text-gray-400">F1-score in fraud detection ML models</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a <span className="text-purple-400 font-semibold">Data Science professional</span> with 2+ years of experience transforming complex data into actionable insights that drive business growth. My expertise spans <span className="text-cyan-400 font-semibold">machine learning, predictive analytics, and data visualization</span>, with a proven track record of delivering measurable results.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From reducing report generation time by 30% at Quinte Financial Technologies to improving student engagement by 25% through A/B testing at Almabetter, I specialize in creating <span className="text-purple-400 font-semibold">data-driven solutions</span> that make a real impact. Currently seeking opportunities to leverage my skills in advanced analytics and machine learning to solve challenging business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
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
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20">
                  <GraduationCap size={32} className="text-cyan-400 mb-4" />
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-gray-300 mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.location} • {edu.year}</p>
                  <p className="text-gray-400 text-sm italic">{edu.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text

            text-transparent">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="text-purple-400" size={24} />
                  <span className="text-gray-300">AWS Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="text-cyan-400" size={24} />
                  <span className="text-gray-300">Git & GitHub</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="text-purple-400" size={24} />
                  <span className="text-gray-300">Docker & CI/CD</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-cyan-400" size={24} />
                  <span className="text-gray-300">Agile/Scrum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Get In Touch</h3>
                <p className="text-gray-300 mb-8">
                  I'm currently seeking new opportunities in data science and analytics. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-4">
                  <a href="mailto:subhash@example.com" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                    <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold">subhash@example.com</p>
                    </div>
                  </a>

                  <a href="tel:+14379662274" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                    <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-semibold">+1 (437) 966-2274</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="bg-purple-500/20 p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-semibold">Toronto, Canada</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-purple-500/20">
                  <p className="text-gray-400 mb-4">Connect with me on:</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/subhashsomarouthu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-purple-500/20 p-3 rounded-lg hover:bg-purple-500/30 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/subhash-somarouthu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-cyan-500/20 p-3 rounded-lg hover:bg-cyan-500/30 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Subhash Pavan Chakravarthy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
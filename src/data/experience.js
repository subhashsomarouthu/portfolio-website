import { TrendingUp, Target, Users, Brain, Zap, Database } from 'lucide-react';

export const experience = [
  {
    company: "Quinte Financial Technologies",
    role: "Data Analyst",
    period: "Feb 2024 - Apr 2024",
    location: "India",
    achievements: [
      { icon: TrendingUp, text: "Translated business requirements into applied analytics and ML-driven insights through SQL and ETL pipelines" },
      { icon: Target, text: "Developed 2 interactive Tableau dashboards, reducing reporting time by 30% and improving stakeholder access" },
      { icon: Users, text: "Collaborated with 2+ cross-functional stakeholders, increasing project delivery efficiency by 20%" }
    ],
    tech: ["SQL", "Tableau", "Python", "ETL Pipelines"]
  },
  {
    company: "AlmaBetter",
    role: "Data Science Intern",
    period: "Feb 2023 - Jan 2024",
    location: "India",
    achievements: [
      { icon: Brain, text: "Mentored 200+ learners by resolving technical queries, raising learner satisfaction scores by 20%" },
      { icon: Target, text: "Led 2 A/B experiments on UI/UX designs, increasing engagement by 25% and conversions by 18%" },
      { icon: Zap, text: "Built and evaluated 5+ ML models, improving prediction accuracy and business insights by 15%" }
    ],
    tech: ["Python", "SQL", "scikit-learn", "TensorFlow", "A/B Testing"]
  },
  {
    company: "Accenture",
    role: "Application Development Associate",
    period: "Oct 2021 - Feb 2023",
    location: "India",
    achievements: [
      { icon: Database, text: "Delivered 3 enterprise projects analyzing operational data using SQL and Excel" },
      { icon: Zap, text: "Executed 10+ end-to-end service validation cycles, reducing recurring defects by 25%" },
      { icon: TrendingUp, text: "Coordinated testing for Telefonica-Virgin Media O2 integration, improving issue resolution by 15%" }
    ],
    tech: ["SQL", "Excel", "Jira", "Service Testing"]
  }
];

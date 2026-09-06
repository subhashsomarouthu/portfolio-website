import { TrendingUp, Target, Users, Brain, Zap, Database } from 'lucide-react';

export const experience = [
  {
    company: "Johnson & Johnson",
    role: "Supply Chain Specialist",
    period: "Jan 2025 - Present",
    location: "Toronto, Canada",
    achievements: [
      { icon: Target, text: "Steered the planning phase of 3 strategic supply chain improvement projects, collaborating with stakeholders to guarantee seamless transitions and delivering $35,000 in cost savings per project." },
      { icon: Database, text: "Orchestrated automated Power BI reports using SQL to query transactional databases, visualizing supply chain KPIs like on-time delivery and inventory turns — cutting manual reporting time by 12 hours weekly." },
      { icon: TrendingUp, text: "Piloted a comprehensive compliance audit across the supply chain, elevating scores from 78/100 to 92/100, and negotiated vendor/carrier contracts to achieve a 10% reduction in freight expenses." }
    ],
    tech: ["SQL", "Power BI", "SAP", "Excel (Advanced)", "Stakeholder Management", "Procurement", "Logistics Management"]
  },
  {
    company: "Metro Supply Chain Inc.",
    role: "Supply Chain Specialist",
    period: "May 2021 – Mar 2024",
    location: "Toronto, Canada",
    achievements: [
      { icon: Zap, text: "Revitalized end-to-end supply chain operations from procurement to customer delivery, earning recognition from the VP of Operations for reducing delivery times by 20 hours." },
      { icon: Brain, text: "Analysed supply chain data using SQL to forecast demand and manage inventory levels, resulting in a 20% reduction in stockouts and improved customer satisfaction." },
      { icon: Users, text: "Directed cross-functional teams to build automated Tableau dashboards from real-time data, improving data accuracy for 95% of key metrics and reducing reporting time by 6 hours per person." }
    ],
    tech: ["SQL", "Tableau", "WMS", "Excel", "Demand Forecasting", "Inventory Management", "Cross-Functional Leadership"]
  }
];

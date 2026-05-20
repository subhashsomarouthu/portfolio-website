import { TrendingUp, Target, Users, Brain, Zap, Database } from 'lucide-react';

export const experience = [
  {
    company: "TELUS",
    role: "Data Engineer",
    period: "Aug 2025 - Present",
    location: "Toronto, Canada",
    achievements: [
      { icon: Database, text: "Built Azure data pipelines in ADF to ingest data from Azure SQL, ADLS, Blob Storage, and REST APIs into Data Lake Gen2 with production-grade error handling." },
      { icon: Target, text: "Developed parameterized pipeline frameworks with Key Vault-backed connections, reducing new-source onboarding time by about 30%." },
      { icon: TrendingUp, text: "Implemented SCD Type 1 and Type 2 logic in Databricks and designed incremental load patterns for Synapse dimension tables, improving pipeline scalability and failure visibility." }
    ],
    tech: ["Azure Data Factory", "Databricks", "PySpark", "Python", "Synapse Analytics", "ADLS", "PolyBase", "Azure DevOps", "Azure SQL"]
  },
  {
    company: "Moneris",
    role: "Data Engineer",
    period: "May 2023 - Aug 2025",
    location: "Toronto, Canada",
    achievements: [
      { icon: Zap, text: "Migrated data extraction workflows from Mainframe, SQL Server, and IBM DB2 into Azure, reducing downstream analytics processing time by 35%." },
      { icon: Brain, text: "Architected multi-source ELT workflows into Azure Data Lake and Synapse, supporting 10+ BI reports across 5 business units." },
      { icon: Users, text: "Optimized Azure Databricks performance, migrated warehouse objects from Teradata to Snowflake, and established Azure DevOps CI/CD pipelines to speed up deployments by 15%." }
    ],
    tech: ["Azure Data Factory", "Databricks", "PySpark", "Python", "Spark SQL", "Azure Data Lake", "Snowflake", "Teradata", "Azure SQL", "Power BI"]
  },
  {
    company: "Accenture",
    role: "Data Engineer",
    period: "Aug 2021 - Feb 2023",
    location: "India",
    achievements: [
      { icon: Database, text: "Improved Azure SQL and SQL Server query efficiency by 15% through data modeling, schema optimization, and workflow tuning." },
      { icon: TrendingUp, text: "Migrated on-prem SQL Server databases to Azure Synapse Analytics and Azure SQL DB with validated data integrity and minimal cutover downtime." },
      { icon: Users, text: "Optimized ADF V2 pipeline performance, secured critical credentials with Key Vault linked services, and led stakeholder discussions to align delivery with business requirements." }
    ],
    tech: ["SQL Server", "Python", "Azure Synapse Analytics", "Azure Data Factory", "Azure SQL", "ADLS", "Azure Analysis Services"]
  }
];

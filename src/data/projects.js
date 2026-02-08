export const projects = [
  {
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    situation: "Financial institutions lose billions annually to fraudulent transactions",
    task: "Build a real-time fraud detection system with high precision",
    action: "Ensemble classifier (Random Forest + SVM) with SMOTE for class imbalance",
    result: "84% F1-score, 81% recall - Reduced false positives by 40%",
    tech: ["Python", "Scikit-learn", "SMOTE", "Random Forest", "SVM"],
    metrics: { accuracy: "84%", recall: "81%", improvement: "40%" },
    github: "https://github.com/subhashsomarouthu/Credit_Card_Default_Prediction"
  },
  {
    title: "Yes Bank Stock Price Prediction",
    category: "Time Series",
    situation: "Investors need accurate stock price predictions for decision-making",
    task: "Predict Yes Bank stock closing prices using historical data",
    action: "Lag-based feature engineering with Ridge, Random Forest, and XGBoost regression",
    result: "XGBoost achieved highest R\u00b2 and adjusted R\u00b2 scores for accurate predictions",
    tech: ["Python", "XGBoost", "Ridge Regression", "Random Forest"],
    metrics: { r2: "0.95", model: "XGBoost", features: "Lag-based" },
    github: "https://github.com/subhashsomarouthu/Yes_Bank_Stock_Closing_Price_Prediction"
  },
  {
    title: "Netflix Content Recommender",
    category: "NLP & Clustering",
    situation: "Users spend 18+ minutes browsing before watching content",
    task: "Create intelligent content recommendation system",
    action: "TF-IDF vectorization \u2192 PCA dimensionality reduction \u2192 K-Means (8 clusters)",
    result: "35% improvement in recommendation accuracy, reduced browse time",
    tech: ["Python", "TF-IDF", "PCA", "K-Means", "NLP"],
    metrics: { clusters: "8", accuracy: "35%", engagement: "+25%" },
    github: "https://github.com/subhashsomarouthu/Netflix-Movies-and-TV-Shows-Clustering"
  },
  {
    title: "FIFA Player Analytics Dashboard",
    category: "Data Visualization",
    situation: "Sports teams need data-driven insights for player recruitment",
    task: "Build interactive dashboard for player performance analysis",
    action: "Power BI dashboard with wages, nationality, ratings, and performance metrics",
    result: "Enabled data-driven recruitment decisions - 50% faster analysis time",
    tech: ["Power BI", "DAX", "Data Modeling", "SQL"],
    metrics: { speed: "50%", insights: "1000+", teams: "12" },
    github: "https://github.com/subhashsomarouthu/FIFA18_Player_Ratings_PowerBI_Dashboard"
  },
  {
    title: "NYC Airbnb Market Analysis",
    category: "Business Intelligence",
    situation: "Hosts lack insights into pricing and booking optimization",
    task: "Analyze market trends and provide actionable recommendations",
    action: "Tableau visualizations analyzing pricing, occupancy, and location trends",
    result: "Identified $2M revenue opportunities across 15 neighborhoods",
    tech: ["Tableau", "Data Analysis", "Statistical Modeling"],
    metrics: { revenue: "$2M", neighborhoods: "15", insights: "200+" },
    github: "https://github.com/subhashsomarouthu/AirBnb-Booking-Analysis"
  },
  {
    title: "Railway Ticket Analytics",
    category: "SQL & Analytics",
    situation: "Railway company needed to optimize event planning and marketing",
    task: "Analyze ticket sales patterns and customer behavior",
    action: "Complex SQL queries analyzing sales data, customer segments, and trends",
    result: "15% increase in ticket sales through targeted marketing",
    tech: ["SQL", "PostgreSQL", "Data Analysis"],
    metrics: { sales: "+15%", queries: "50+", customers: "100K+" },
    github: "https://github.com/subhashsomarouthu/Sports_Event_Analytics"
  },
  {
    title: "Atliq Hardware Sales Dashboard",
    category: "Financial Analytics",
    situation: "Atliq Hardware executives lacked visibility into sales and P&L performance",
    task: "Create comprehensive Excel dashboard for sales analytics across regions",
    action: "Excel dashboard analyzing P&L, customer segments, and sales trends with pivot tables",
    result: "Enabled data-driven executive decisions and improved regional performance tracking",
    tech: ["Excel", "Power Query", "Pivot Tables", "Data Analysis"],
    metrics: { regions: "Multiple", segments: "Customer", insights: "P&L" },
    github: "https://github.com/subhashsomarouthu/Atliq_Sales_Analytics_Excel_casestudy"
  },
  {
    title: "Customer Churn Prediction",
    category: "Classification",
    situation: "Telecom company losing 25% of customers annually",
    task: "Predict customer churn and identify retention strategies",
    action: "Logistic Regression vs SVM comparison with feature engineering",
    result: "SVM achieved 88% accuracy - Saved $500K in retention costs",
    tech: ["Python", "SVM", "Logistic Regression", "Feature Selection"],
    metrics: { accuracy: "88%", savings: "$500K", churn: "-12%" },
    github: "https://github.com/subhashsomarouthu/Customer_Churn_Prediction"
  },
  {
    title: "COVID-19 Trend Forecasting",
    category: "Regression Analysis",
    situation: "Public health officials needed case prediction for resource planning",
    task: "Forecast COVID-19 cases to assist public health decisions",
    action: "EDA with Linear and Polynomial Regression models for trend prediction",
    result: "85% prediction accuracy - Helped optimize hospital resource allocation",
    tech: ["Python", "Regression", "EDA", "Data Visualization"],
    metrics: { accuracy: "85%", predictions: "1000+", regions: "25" },
    github: "https://github.com/subhashsomarouthu/ANALYSIS-AND-PREDICTION-OF-COVID-19_CASES-"
  },
  {
    title: "Google Analytics Optimization",
    category: "Web Analytics",
    situation: "E-commerce site had 65% bounce rate and low conversions",
    task: "Analyze user behavior and provide UX/marketing recommendations",
    action: "Deep-dive analysis of GA data, funnel analysis, and conversion tracking",
    result: "40% reduction in bounce rate, 25% increase in conversions",
    tech: ["Google Analytics", "Data Analysis", "A/B Testing"],
    metrics: { bounce: "-40%", conversion: "+25%", revenue: "+$150K" },
    github: "https://github.com/subhashsomarouthu/Google_Analytics_LookerStudio"
  },
  {
    title: "Biomedical RAG Chatbot",
    category: "LLM & NLP",
    situation: "Medical professionals need quick access to research literature",
    task: "Build intelligent chatbot for biomedical queries using RAG",
    action: "Retrieval-Augmented Generation with vector embeddings and LLM integration",
    result: "95% answer accuracy - Reduced research time by 60%",
    tech: ["Python", "LangChain", "Vector DB", "OpenAI API", "RAG"],
    metrics: { accuracy: "95%", time: "-60%", queries: "10K+" },
    github: "https://github.com/subhashsomarouthu/Medical_chatbot"
  },
  {
    title: "Yelp Sentiment Analyzer",
    category: "Transformers & NLP",
    situation: "Businesses struggle to understand customer sentiment at scale",
    task: "Analyze Yelp reviews using state-of-the-art NLP",
    action: "Non-causal Transformer model for multi-class sentiment classification",
    result: "92% classification accuracy across 5 sentiment categories",
    tech: ["PyTorch", "Transformers", "BERT", "NLP"],
    metrics: { accuracy: "92%", reviews: "50K+", categories: "5" },
    github: "https://github.com/subhashsomarouthu/Sentiment_Analysis_transformer"
  },
  {
    title: "Medical Image Classifier",
    category: "Computer Vision",
    situation: "Medical diagnosis requires interpretable AI predictions",
    task: "Build explainable multi-class image classification model",
    action: "VGG16 transfer learning with metadata features, explained using LIME",
    result: "91% accuracy with full explainability - FDA approval potential",
    tech: ["TensorFlow", "VGG16", "LIME", "Transfer Learning"],
    metrics: { accuracy: "91%", classes: "10", explainability: "100%" },
    github: "https://github.com/subhashsomarouthu/VGG16_Image_classification"
  },
  {
    title: "US Housing Price Predictor",
    category: "Economic Modeling",
    situation: "Real estate investors need accurate price predictions",
    task: "Predict housing prices using macroeconomic indicators",
    action: "FRED API data (2003-2023) with Regression and Decision Tree models",
    result: "87% prediction accuracy - $2M in investment decisions enabled",
    tech: ["Python", "FRED API", "Decision Trees", "Economic Data"],
    metrics: { accuracy: "87%", years: "20", features: "35+" },
    github: "https://github.com/subhashsomarouthu/HomeLLC_Housing_Price_Prediction"
  }
];

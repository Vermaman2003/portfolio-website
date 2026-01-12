export const profileData = {
  name: "Aman Kumar Verma",
  title: "Data Analyst | Gaming & Esports Analytics",
  tagline: "Transforming data into actionable insights with Python, SQL, and advanced analytics for gaming and tech",
  email: "vermamank03@gmail.com",
  phone: "787-529-6616",
  location: "Pune, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/aman-kumar-verma-63816a252",
  github: "https://github.com/Vermaman2003",
  summary: "Data Analyst skilled in Excel analytics, Python, SQL, and dashboarding. Hands-on experience in data cleaning, reporting automation, and building insights to support business decisions. Specialized in gaming analytics, player behavior insights, and esports data. Enjoys transforming raw datasets into clear stories to enhance team understanding of performance, identify patterns, and facilitate smarter decisions. Actively seeking Data Analyst roles in gaming, tech, and consulting with full relocation flexibility."
};

export const skills = {
  "Programming Languages": [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 }
  ],
  "Data Analysis & Visualization": [
    { name: "Excel Analytics", level: 90 },
    { name: "Tableau", level: 85 },
    { name: "Power BI", level: 85 },
    { name: "Pandas", level: 90 },
    { name: "NumPy", level: 85 }
  ],
  "Gaming & Analytics": [
    { name: "Gaming Analytics", level: 85 },
    { name: "Esports Data Analysis", level: 80 },
    { name: "KPI Development", level: 85 },
    { name: "Player Behavior Insights", level: 80 }
  ],
  "Machine Learning & AI": [
    { name: "Scikit-learn", level: 85 },
    { name: "TensorFlow", level: 80 },
    { name: "Statistical Modeling", level: 85 }
  ],
  "Data Operations": [
    { name: "Data Cleaning", level: 90 },
    { name: "ETL Processes", level: 85 },
    { name: "Reporting Automation", level: 85 },
    { name: "Dashboard Design", level: 90 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Electronic Arts Product Management Simulation",
    description: "Developed understanding of KPIs for strategy RPG mobile game, demonstrating knowledge of video game industry performance metrics.",
    longDescription: "Completed comprehensive job simulation focused on product management in gaming. Developed solid understanding of different KPIs and selected appropriate metrics for measuring business problems related to strategy RPG mobile games. Broke down tasks for creating data-driven video game presentations.",
    technologies: ["KPI Development", "Gaming Analytics", "Data Analysis", "Product Management"],
    outcomes: ["Gaming industry KPI expertise", "Data-driven presentation skills", "RPG game metrics understanding"],
    date: "Dec 2025",
    link: "#"
  },
  {
    id: 2,
    title: "ML-based Crop Recommendation System",
    description: "Engineered a machine learning system analyzing 8,768 environmental data records to predict optimal crop yields with 76% precision.",
    longDescription: "Developed a machine learning model in Python using scikit-learn that analyzes soil type, climate, and pH data. Optimized feature selection using PCA, resulting in 15% improvement in model accuracy. Integrated NLP techniques to analyze crop descriptions and environmental reports. Published research at IEEE INCET 2024 Conference.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLP", "PCA", "Bi-directional LSTM"],
    outcomes: ["76% precision in crop recommendation", "15% improvement in model accuracy", "IEEE conference publication"],
    date: "Oct 2023 - May 2024",
    link: "https://ieeexplore.ieee.org/document/10593303"
  },
  {
    id: 3,
    title: "CNN-based Handwritten Character Recognition",
    description: "Architected a custom CNN with six convolutional and three pooling layers achieving 92% character recognition accuracy.",
    longDescription: "Engineered a custom CNN with TensorFlow and Keras, improving feature extraction and boosting accuracy by 15%. Enhanced model generalization by augmenting dataset from 50,000 to 250,000 characters using image rotation and scaling.",
    technologies: ["TensorFlow", "Keras", "CNN", "Python", "Image Processing"],
    outcomes: ["92% recognition accuracy", "250,000+ augmented training samples", "20% reduction in training time"],
    date: "Mar 2023 - Aug 2023",
    link: "#"
  },
  {
    id: 4,
    title: "IPL Score Prediction Model",
    description: "Built predictive model for IPL cricket scores using historical match data and multiple regression algorithms.",
    longDescription: "Analyzed IPL seasons 1-9 data to predict team scores. Implemented Linear Regression, Decision Tree, Random Forest, and AdaBoost models. Achieved best performance with Linear Regression based on MAE, MSE, and RMSE metrics.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    outcomes: ["Accurate score predictions", "Multiple ML model comparison", "Historical data analysis (2008-2017)"],
    date: "2023",
    link: "#"
  },
  {
    id: 5,
    title: "FIFA 19 Interactive Dashboard",
    description: "Created comprehensive Tableau dashboard analyzing player performance, market value, and skill distributions.",
    longDescription: "Leveraged Tableau to build interactive visualizations analyzing player attributes, nationalities, positions, and market dynamics. Included filters for Position, Age, and Nationality for dynamic data exploration.",
    technologies: ["Tableau", "Data Visualization", "Excel", "Statistical Analysis"],
    outcomes: ["Interactive filtering system", "Multi-dimensional player analysis", "Market value insights"],
    date: "2023",
    link: "#"
  },
  {
    id: 6,
    title: "UEFA Data Analysis",
    description: "Analyzed comprehensive UEFA competition dataset to gain insights into football dynamics using SQL.",
    longDescription: "Performed extensive SQL queries on Goals, Matches, Players, Stadiums, and Teams datasets. Analyzed goal trends, player statistics, team performance, and stadium impact using PostgreSQL.",
    technologies: ["SQL", "PostgreSQL", "Data Analysis"],
    outcomes: ["Complex cross-table analysis", "Performance metrics calculation", "Comprehensive football insights"],
    date: "2023",
    link: "#"
  }
];

export const experience = [
  {
    id: 1,
    title: "Data Science Intern",
    company: "CodeClause Pvt Ltd",
    location: "Pune, Maharashtra",
    period: "Dec 2024 - Jan 2025",
    description: [
      "Developed user-friendly web application leveraging Python and ML libraries, resulting in 20% increase in user engagement",
      "Improved prediction accuracy by 30% through feature engineering and model training",
      "Processed and analyzed data from 300 patients using Pandas and NumPy, improving risk stratification accuracy by 15%"
    ]
  },
  {
    id: 2,
    title: "Product Management Simulation",
    company: "Electronic Arts (EA)",
    location: "Remote",
    period: "Dec 2025",
    description: [
      "Developed solid understanding of different KPIs for measuring business problems in strategy RPG mobile games",
      "Selected appropriate KPIs for assessing video game industry performance metrics",
      "Broke down tasks for creating data-driven video game presentations"
    ]
  },
  {
    id: 3,
    title: "Introduction to Strategy Consulting Job Simulation",
    company: "Boston Consulting Group (BCG)",
    location: "Remote",
    period: "May 2025",
    description: [
      "Learned creative thinking by challenging assumptions that guide current thinking",
      "Used effective brainstorm strategies to generate business growth ideas",
      "Developed solutions for luxury clothing company to increase sales revenue"
    ]
  },
  {
    id: 4,
    title: "Academic Research",
    company: "AISSMS Institute of Information Technology",
    location: "Pune, Maharashtra",
    period: "Oct 2023 - May 2024",
    description: [
      "Co-authored research paper on ESP32 Automation and Cloud Computing for crop recommendation using bi-directional LSTM",
      "Contributed to statistical analysis and algorithm design",
      "Published at 5th IEEE INCET 2024 Conference"
    ]
  },
  {
    id: 5,
    title: "Jr Full Stack Developer",
    company: "Oytie Learning IT Training Academy",
    location: "Pune, Maharashtra",
    period: "Jan 2023 - Apr 2023",
    description: [
      "Automated data pipelines and improved data quality for analytics workflows",
      "Designed dashboards to track performance metrics and user engagement",
      "Collaborated with engineering and product teams to deliver data-driven improvements",
      "Strengthened ability to work with large datasets similar to game telemetry and event logs"
    ]
  }
];

export const publications = [
  {
    id: 1,
    title: "Agritech Harmony: Real-time ESP32 Automation and Cloud Computing for Socially-Informed Crop Suggestions",
    conference: "5th IEEE INCET 2024 Conference",
    date: "2024",
    institution: "AISSMS IOIT, Pune",
    link: "https://ieeexplore.ieee.org/document/10593303",
    description: "Co-authored research paper on ESP32 Automation and Cloud Computing for crop recommendation using bi-directional LSTM. Contributed to statistical analysis and algorithm design."
  }
];

export const education = {
  degree: "Bachelor of Technology - BTech, Computer Engineering",
  institution: "Savitribai Phule Pune University (AISSMS IOIT)",
  location: "Pune, Maharashtra, India",
  period: "Jan 2020 - Jun 2024"
};

export const certifications = [
  {
    id: 1,
    name: "Electronic Arts - Product Management Job Simulation",
    issuer: "Electronic Arts",
    date: "Dec 2025"
  },
  {
    id: 2,
    name: "BCG - Introduction to Strategy Consulting Job Simulation",
    issuer: "Boston Consulting Group",
    date: "May 2025"
  },
  {
    id: 3,
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2024"
  },
  {
    id: 4,
    name: "Artificial Intelligence with Python",
    issuer: "Great Learning",
    date: "2024"
  },
  {
    id: 5,
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2024"
  },
  {
    id: 6,
    name: "Working in a Digital World: Professional Skills",
    issuer: "Professional Skills",
    date: "2024"
  }
];
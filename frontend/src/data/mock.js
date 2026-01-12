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
    title: "ML-based Crop Recommendation System",
    description: "Engineered a machine learning system analyzing 8,768 environmental data records to predict optimal crop yields with 76% precision.",
    longDescription: "Developed a machine learning model in Python using scikit-learn that analyzes soil type, climate, and pH data. Optimized feature selection using PCA, resulting in 15% improvement in model accuracy. Integrated NLP techniques to analyze crop descriptions and environmental reports.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLP", "PCA"],
    outcomes: ["76% precision in crop recommendation", "15% improvement in model accuracy", "8,768+ data records analyzed"],
    date: "Oct 2023 - Apr 2024",
    link: "https://ieeexplore.ieee.org/document/10593303"
  },
  {
    id: 2,
    title: "CNN-based Handwritten Character Recognition",
    description: "Architected a custom CNN with six convolutional and three pooling layers achieving 92% character recognition accuracy.",
    longDescription: "Engineered a custom CNN with TensorFlow and Keras, improving feature extraction and boosting accuracy by 15%. Enhanced model generalization by augmenting dataset from 50,000 to 250,000 characters using image rotation and scaling.",
    technologies: ["TensorFlow", "Keras", "CNN", "Python", "Image Processing"],
    outcomes: ["92% recognition accuracy", "250,000+ augmented training samples", "20% reduction in training time"],
    date: "Mar 2023 - Aug 2023",
    link: "#"
  },
  {
    id: 3,
    title: "IPL Score Prediction Model",
    description: "Built predictive model for IPL cricket scores using historical match data and multiple regression algorithms.",
    longDescription: "Analyzed IPL seasons 1-9 data to predict team scores. Implemented Linear Regression, Decision Tree, Random Forest, and AdaBoost models. Achieved best performance with Linear Regression based on MAE, MSE, and RMSE metrics.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    outcomes: ["Accurate score predictions", "Multiple ML model comparison", "Historical data analysis (2008-2017)"],
    date: "2023",
    link: "#"
  },
  {
    id: 4,
    title: "FIFA 19 Interactive Dashboard",
    description: "Created comprehensive Tableau dashboard analyzing player performance, market value, and skill distributions.",
    longDescription: "Leveraged Tableau to build interactive visualizations analyzing player attributes, nationalities, positions, and market dynamics. Included filters for Position, Age, and Nationality for dynamic data exploration.",
    technologies: ["Tableau", "Data Visualization", "Excel", "Statistical Analysis"],
    outcomes: ["Interactive filtering system", "Multi-dimensional player analysis", "Market value insights"],
    date: "2023",
    link: "#"
  },
  {
    id: 5,
    title: "UEFA Data Analysis",
    description: "Analyzed comprehensive UEFA competition dataset to gain insights into football dynamics using SQL.",
    longDescription: "Performed extensive SQL queries on Goals, Matches, Players, Stadiums, and Teams datasets. Analyzed goal trends, player statistics, team performance, and stadium impact using PostgreSQL.",
    technologies: ["SQL", "PostgreSQL", "Data Analysis"],
    outcomes: ["Complex cross-table analysis", "Performance metrics calculation", "Comprehensive football insights"],
    date: "2023",
    link: "#"
  },
  {
    id: 6,
    title: "AquaFizz Sales & Compliance Analysis",
    description: "Analyzed employee compliance and sales data for health-focused beverage startup using Excel.",
    longDescription: "Developed Excel dashboard analyzing employee working hours compliance and sales performance. Identified top customers, cities, monthly trends, and profit margins by beverage type.",
    technologies: ["MS Excel", "Data Analysis", "Dashboard Design"],
    outcomes: ["Compliance tracking system", "Sales insights dashboard", "Profit margin analysis"],
    date: "2023",
    link: "#"
  }
];

export const experience = [
  {
    id: 1,
    title: "Data Science Intern",
    company: "CodeClause Pvt Ltd",
    location: "Pune, MH",
    period: "Dec 2024 - Jan 2025",
    description: [
      "Developed user-friendly web application leveraging Python and ML libraries, resulting in 20% increase in user engagement",
      "Improved prediction accuracy by 30% through feature engineering and model training",
      "Processed and analyzed data from 300 patients using Pandas and NumPy, improving risk stratification accuracy by 15%"
    ]
  },
  {
    id: 2,
    title: "Jr Full Stack Developer",
    company: "Oyitie Learning",
    location: "Pune, MH",
    period: "Feb 2023 - May 2023",
    description: [
      "Constructed responsive Resume Builder using Bootstrap, HTML, CSS, Java, and MySQL, serving 500+ users",
      "Automated daily data processing tasks using Python scripts, reducing manual effort by 50%",
      "Collaborated with 4 engineering teams on domain design and code testing, contributing to 10% platform performance improvement"
    ]
  },
  {
    id: 3,
    title: "BCG GenAI Job Simulation",
    company: "BCGX on Forage",
    location: "Remote",
    period: "May 2025",
    description: [
      "Completed job simulation involving AI-powered financial chatbot development",
      "Gained experience in Python programming with pandas for data manipulation",
      "Integrated complex financial data from 10-K and 10-Q reports using rule-based logic"
    ]
  },
  {
    id: 4,
    title: "Strategy Consulting Job Simulation",
    company: "BCG on Forage",
    location: "Remote",
    period: "May 2025",
    description: [
      "Learned creative thinking by challenging assumptions",
      "Used effective brainstorm strategies to generate business growth ideas",
      "Developed solutions for luxury clothing company to increase sales revenue"
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
  degree: "Bachelor of Engineering in Computer Engineering",
  institution: "AISSMS IOIT (SPPU)",
  location: "Pune, Maharashtra",
  period: "Feb 2021 - Jun 2024"
};

export const certifications = [
  {
    id: 1,
    name: "Artificial Intelligence with Python",
    issuer: "Great Learning",
    date: "2024"
  },
  {
    id: 2,
    name: "AWS Academy Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "2024"
  },
  {
    id: 3,
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2024"
  },
  {
    id: 4,
    name: "Working in a Digital World",
    issuer: "Professional Skills",
    date: "2024"
  }
];
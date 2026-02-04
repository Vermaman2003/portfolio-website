export const profileData = {
  name: "Aman Kumar Verma",
  title: "Data Analyst | Gaming & Esports Analytics",
  tagline: "Transforming data into actionable insights with Python, SQL, and advanced analytics for gaming and tech",
  email: "amankumarverma1003@gmail.com",
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
    id: 10,
    title: "PUBG Telemetry Dashboard",
    description: "Interactive dashboard visualizing player landing zones and movement patterns on the Erangel map.",
    longDescription: "Built a comprehensive telemetry analysis tool for PUBG that accurately maps in-game coordinates to the Erangel map. Solved complex coordinate alignment challenges to visualize landing zones and player movements with precision. Features include dynamic zone analysis and real-time data visualization.",
    technologies: ["JavaScript", "Data Visualization", "Geometric Mapping", "Game Analytics", "Telemetry Data"],
    outcomes: ["Accurate coordinate mapping system", "Real-time telemetry visualization", "Landing zone heatmap analysis"],
    date: "Nov 2025 - Feb 2026",
    link: "https://pubg-telemetry-dashboard.vercel.app/"
  },
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
    title: "FIFA19 Player Insights Dashboard",
    description: "Designed an interactive Tableau dashboard analyzing FIFA19 player data across performance, market value, skills, and potential.",
    longDescription: "Designed an interactive Tableau dashboard analyzing FIFA19 player data across performance, market value, skills, and potential. The project highlights expertise in data visualization, storytelling, and sports analytics with dynamic filters for age, position, and nationality.",
    technologies: ["Tableau", "EDA", "Statistical Data Analysis", "Business Intelligence (BI)", "Data Visualization"],
    outcomes: ["Interactive filtering system", "Multi-dimensional player analysis", "Sports analytics storytelling"],
    date: "Dec 2025",
    link: "#"
  },
  {
    id: 3,
    title: "IPL Score Prediction",
    description: "Predicts total score of cricket team at end of innings during IPL match using historical data and machine learning algorithms.",
    longDescription: "This project aims to predict the total score of a cricket team at the end of their innings during an IPL (Indian Premier League) match. The model is built using historical data from IPL seasons 1 to 9 (2008-2016) and tested on data from season 10 (2017). The model uses various machine learning algorithms to predict the score based on input features such as the batting and bowling teams, overs, runs, wickets, and other match statistics.",
    technologies: ["Python", "Machine Learning Algorithms", "Data Analysis", "Scikit-learn", "Pandas"],
    outcomes: ["Accurate score predictions", "Multiple ML model comparison", "Historical data analysis (2008-2017)"],
    date: "Nov 2025",
    link: "#"
  },
  {
    id: 4,
    title: "UEFA Football Data Analysis using SQL",
    description: "PostgreSQL-based analysis exploring Goals, Matches, Players, Teams, and Stadiums datasets with 55+ analytical queries.",
    longDescription: "Worked on a UEFA Football Data Analysis project using PostgreSQL to explore datasets covering Goals, Matches, Players, Teams, and Stadiums. The project involved designing a relational schema, loading CSV files, and writing advanced SQL queries to answer 55+ analytical questions about football dynamics. Key outcomes: Identifying top goal scorers, assisters, and team performances; analyzing match results, attendance trends, and penalty shootouts; exploring player statistics; studying stadium capacities and distributions; performing cross-table analysis for deeper insights.",
    technologies: ["PostgreSQL", "Database Management System (DBMS)", "Data Analysis", "Sports Analytics", "Database Design", "SQL"],
    outcomes: ["55+ analytical queries", "Relational schema design", "Cross-table analysis insights"],
    date: "Oct 2025",
    link: "#"
  },
  {
    id: 5,
    title: "Crop Recommendation System using Bi-directional LSTM",
    description: "ML system that suggests optimal crops based on field conditions using bi-directional LSTM for generating recommendations.",
    longDescription: "Developed a crop recommendation system that suggests which crop to be grown in a field using bi-directional LSTM. The system analyzes environmental data and historical agricultural performance to provide optimal crop suggestions. Published research at 5th IEEE INCET 2024 Conference titled 'Agritech Harmony: Real-time ESP32 Automation and Cloud Computing for Socially-Informed Crop Suggestions'.",
    technologies: ["Bi-directional LSTM", "Machine Learning", "Data Analysis", "Data Visualization", "Regression Models", "Python"],
    outcomes: ["Published at IEEE INCET 2024", "Optimal crop recommendations", "Environmental data analysis"],
    date: "Oct 2023 - May 2024",
    link: "https://ieeexplore.ieee.org/document/10593303"
  },
  {
    id: 6,
    title: "Hand Written Character Recognition System",
    description: "Developed a system that recognizes handwritten alphabet characters using CNN algorithm.",
    longDescription: "Developed a handwritten character recognition system that identifies alphabet characters using Convolutional Neural Network (CNN) algorithm. The system processes handwritten input and generates accurate character recognition responses.",
    technologies: ["CNN", "TensorFlow", "Keras", "Machine Learning", "Artificial Intelligence", "Data Analysis"],
    outcomes: ["Accurate character recognition", "CNN-based classification", "Real-time processing"],
    date: "2023",
    link: "#"
  },
  {
    id: 7,
    title: "Hospital Management System",
    description: "Django and Python project to manage hospital activities including appointments and logistics.",
    longDescription: "Developed a comprehensive Django and Python project which is used to manage hospital activities such as appointments, logistics, patient records, and administrative tasks. The system provides an efficient interface for healthcare management.",
    technologies: ["Django", "Python", "Data Visualization", "HTML", "Databases", "MySQL"],
    outcomes: ["Complete hospital management solution", "Appointment scheduling system", "Logistics tracking"],
    date: "2023",
    link: "https://hospital-management-system-ready-fo.vercel.app/"
  },
  {
    id: 8,
    title: "Online Voting System",
    description: "Python project with Tkinter and MySQL API that facilitates remote voting with secure user interface.",
    longDescription: "A simple Python project with the help of Tkinter and MySQL - an API which facilitates remote voting. The system provides a user-friendly interface for secure online voting with database integration.",
    technologies: ["Python", "Tkinter", "MySQL", "Data Visualization", "User Interface Design", "Databases"],
    outcomes: ["Secure remote voting system", "User-friendly interface", "Database-backed voting records"],
    date: "2023",
    link: "#"
  },
  {
    id: 9,
    title: "Predict Sentiment From Movie Reviews",
    description: "Built a Multilayer Perceptron model with single hidden layer for sentiment analysis on IMDB dataset.",
    longDescription: "Built a simple Multilayer Perceptron model with a single hidden layer for sentiment analysis on IMDB dataset. The model analyzes movie reviews to predict positive or negative sentiment using neural network techniques.",
    technologies: ["Python", "Recurrent Neural Networks (RNN)", "Machine Learning", "Artificial Intelligence", "Data Analysis"],
    outcomes: ["Sentiment classification", "IMDB dataset analysis", "MLP model implementation"],
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
  period: "Feb 2021 - Jun 2024"
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

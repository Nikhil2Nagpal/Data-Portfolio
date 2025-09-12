import React, { useState } from 'react'
import { Github, ExternalLink, Eye, Calendar, Tag } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Sales Analytics with Python',
      description: 'In-depth analysis of e-commerce sales data to uncover customer behavior, sales trends, and inventory patterns using Python, Pandas, and data visualization.',
      category: "analytics",
      technologies: ["Python", "Pandas", "Plotly", "Colab"],
      image: "/images/ecommerce image.webp",
      github: "https://github.com/Nikhil2Nagpal/Ecommerce-Project.git",
      live: "https://colab.research.google.com/drive/16AcFFMyXc--5VdoByCFB9vPPOY0h8zbV?usp=sharing",
      date: "2025",
      highlights: [
        "Identified top-selling products and customer segments",
        "Analyzed monthly sales trends and peak seasons",
        "Provided actionable insights for inventory optimization"
            ]
    },
    {
      id: 2,
      title: 'Customer Segmentation using K-Means Clustering',
      description: 'A data-driven customer segmentation model that groups customers into distinct behavioral clusters using K-Means clustering, enabling personalized marketing strategies and improved customer targeting.',
      category: "ml",
      technologies: ["Python", "scikit-learn", "Pandas", "Streamlit", "Joblib"],
      image: "/images/chrun.png",
      github: "https://github.com/Nikhil2Nagpal/Customer-Segment-Project.git",
      live: "https://customer-segment-project555.streamlit.app/",
      date: "2025",
      highlights: [
        "Built and deployed an interactive web app for real-time predictions",
        "Used K-Means clustering to identify 5 key customer segments",
        "Achieved high interpretability for business stakeholders"
            ]
    },
    {
    id: 3,
    title: "Walmart Customer Purchase Analysis",
    description: "End-to-end data analysis of Walmart customer transactions including sales trends, customer behavior, product performance, and return rate insights. Visualized in an interactive dashboard with actionable business recommendations.",
    category: "analysis",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit", "Power BI"],
    image: "/images/walmart.jpg",
    github: "https://github.com/Nikhil2Nagpal/walmart-project.git",
    live: "https://colab.research.google.com/drive/1GZbZ6mlbhR9LV82bIdsYjdCe8VNN16gN?usp=sharing",
    date: "2025",
    highlights: [
      "Sales trend analysis over time",
      "Customer demographics and segmentation",
      "Top-performing products and categories",
      "Return rate and satisfaction analysis",
      "Payment method preference insights",
      "Interactive dashboard for business decision-making"
  ]
},
  {
  id: 4,
  title: "AI-Powered SQL Retail Sales Analysis",
  description: "Performed in-depth retail sales analysis using SQL and integrated AI to generate queries and insights. The project explores customer behavior, sales trends, and business patterns through advanced queries and visualizations.",
  category: "data-analysis",
  technologies: ["Python", "SQLite", "Pandas", "Matplotlib", "Colab", "AI-driven SQL"],
  image: "/images/sql-ai.png",
  github: "https://github.com/Nikhil2Nagpal/sql-ai-project.git",
  live: "https://colab.research.google.com/drive/18KPucgIsTqCMZrU_nuz_Hg5QizDc1djT?usp=sharing",
  date: "2025",
  highlights: [
    "Designed and managed retail sales database using SQLite",
    "Executed complex SQL queries to answer key business questions",
    "Integrated AI to auto-generate SQL queries and enhance insights",
    "Visualized sales trends, revenue patterns, and customer behavior using Python and Matplotlib",
    "Delivered actionable insights for business growth and decision-making"
  ]
},

{
  id: 5,
  title: "HR Analytics: Employee Attrition Analysis",
  description: "Conducted comprehensive analysis on IBM employee attrition data to identify key factors driving employee turnover. Leveraged Python, Pandas, and Seaborn for data cleaning, visualization, and actionable insights, helping organizations improve retention strategies.",
  category: "data-analysis",
  technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Google Colab", "Data Visualization", "HR Analytics"],
  image: "/images/hr-analytics.jpg",
  github: "https://github.com/Nikhil2Nagpal/HR-Analytics.git",
  live: "https://colab.research.google.com/drive/1-KoqydQXSPRm432FjPXTIxOWEsShW7hA?usp=sharing",
  date: "2025",
  highlights: [
    "Analyzed 1,470+ employee records to uncover attrition trends",
    "Visualized key factors like income, overtime, job satisfaction, and department-wise attrition",
    "Identified high-risk departments and roles using data-driven insights",
    "Explored impact of age, gender, distance from home, and tenure on employee retention",
    "Delivered board-ready visualizations and business recommendations for HR strategy"
  ]
},

{
  id: 6,
  title: "Airline Data Analysis: SQL + Python Insights",
  description: "Performed in-depth analysis of airline dataset from Kaggle using SQL and Python to uncover insights about flight delays, passenger trends, and performance metrics. Combined SQL queries with Python libraries for cleaning, analysis, and visualization, enabling better operational decision-making in the aviation sector.",
  category: "data-analysis",
  technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "SQL", "Google Colab", "Data Visualization", "Airline Analytics"],
  image: "/images/airline.jpg",
  github: "https://github.com/Nikhil2Nagpal/airline-data.git",
  live: "https://colab.research.google.com/drive/1CMex7eux4o8ALvpN-nD2ADEDJEhPOjmf?usp=sharing",
  date: "2025",
  highlights: [
    "Analyzed 5M+ flight records from Kaggle airline dataset",
    "Integrated SQL queries with Python for advanced data exploration",
    "Visualized delay patterns by airline, route, and season using Matplotlib & Seaborn",
    "Identified top factors influencing flight delays and cancellations",
    "Delivered actionable insights to improve airline efficiency and passenger satisfaction"
  ]
},

{
  id: 7,
  title: "Airbnb Data Analysis: Pricing & Demand Insights",
  description: "Analyzed Airbnb dataset using Python to uncover key factors influencing rental prices, occupancy trends, and customer preferences. Built visualizations to highlight pricing distribution, seasonal demand, and property type performance, providing actionable insights for hosts and business strategy.",
  category: "data-analysis",
  technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Google Colab", "Data Visualization", "Airbnb Analytics"],
  image: "/images/airbnb.jpg",
  github: "https://github.com/Nikhil2Nagpal/Airbnb-data.git",
  live: "https://colab.research.google.com/drive/1sj_AKak2F0imjV36dOgcUdohoIHlmPWZ?usp=sharing",
  date: "2025",
  highlights: [
    "Analyzed 40K+ Airbnb listings data with Python for actionable insights",
    "Explored impact of location, property type, and room type on pricing",
    "Visualized seasonal demand trends and customer booking behavior",
    "Identified pricing anomalies and competitive advantage zones",
    "Delivered recommendations for hosts to optimize occupancy and revenue"
  ]
},

{
  id: 8,
  title: "Personal Portfolio Website",
  description: "Developed a full-stack personal portfolio using React to showcase projects, skills, and certifications. Integrated modern UI/UX design with responsiveness across devices and included interactive project sections for better recruiter engagement.",
  category: "web-development",
  technologies: ["React", "JavaScript", "HTML", "CSS", "Netlify", "Responsive Design"],
  image: "/images/portfolio.jpg",
  github: "https://github.com/Nikhil2Nagpal/Nikhil-Portfolio.git",
  live: "https://nikhil-portfolio-000.netlify.app",
  date: "2025",
  highlights: [
    "Built a fully responsive personal portfolio website using React",
    "Showcased projects, skills, and certifications in structured sections",
    "Added dynamic project data rendering with reusable components",
    "Deployed successfully on Netlify with custom domain",
    "Designed with focus on clean UI/UX and recruiter-first approach"
  ]
},

{
  id: 9,
  title: "Google Search Data Analysis: Trends & Insights",
  description: "Performed in-depth analysis on Google Search dataset using Python to uncover search patterns, keyword popularity, and user interest over time. Built visualizations to showcase trends across categories, seasonal spikes, and long-term search behavior, helping identify emerging opportunities and audience preferences.",
  category: "data-analysis",
  technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Google Colab", "Data Visualization", "Google Search Analytics"],
  image: "/images/google.jpg",
  github: "https://github.com/Nikhil2Nagpal/google-search-data.git",
  live: "https://drive.google.com/file/d/10-63DtF4RWoJsobf8H58lxdYxGN-vi4b/view?usp=sharing",
  date: "2025",
  highlights: [
    "Analyzed Google Search dataset to uncover keyword popularity trends",
    "Identified seasonal spikes and long-term search patterns",
    "Visualized search categories and audience interests using Python libraries",
    "Highlighted emerging opportunities based on search volume insights",
    "Delivered actionable findings to support business and content strategy"
  ]
},

{
  id: 10,
  title: "Netflix Data Analysis: Content & Viewer Insights",
  description: "Explored Netflix dataset using Python to analyze movie and TV show distributions, content trends, and viewer insights. Conducted data cleaning, statistical analysis, and created visualizations to highlight genre popularity, release year patterns, and country-wise content production for business and audience understanding.",
  category: "data-analysis",
  technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Google Colab", "Data Visualization", "Netflix Analytics"],
  image: "/images/netflix.jpg",
  github: "https://github.com/Nikhil2Nagpal/netflix-data.git",
  live: "https://colab.research.google.com/drive/18mmNSwnDDBSOnLV0IT1MZorYDaG_I0y9?usp=sharing",
  date: "2025",
  highlights: [
    "Analyzed Netflix dataset with 8K+ entries covering movies and TV shows",
    "Explored genre distribution, release year trends, and global content spread",
    "Visualized top countries producing Netflix content and their contribution",
    "Identified patterns in movie vs TV show additions over time",
    "Delivered insights on audience preferences to support data-driven decisions"
  ]
}


  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'analysis', label: 'Data Analysis' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="projects-section section-dark">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of data science and analytics projects that demonstrate my expertise 
            in turning data into actionable business insights
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-tab ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" title="View Code">
                      <Github />
                    </a>
                    <a href={project.live} className="project-link" title="Live Demo">
                      <ExternalLink />
                    </a>
                    <button className="project-link" title="Quick View">
                      <Eye />
                    </button>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-date">
                    <Calendar size={14} />
                    {project.date}
                  </span>
                  <span className={`project-category category-${project.category}`}>
                    <Tag size={14} />
                    {categories.find(cat => cat.id === project.category)?.label}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="#" className="btn btn-primary">
            <Github className="btn-icon" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
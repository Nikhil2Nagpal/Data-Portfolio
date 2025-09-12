import React from 'react'
import { User, Target, Award, TrendingUp } from 'lucide-react'
import './About.css'

const About = () => {
  const highlights = [
    {
      icon: <User />,
      title: 'Who I Am',
      description: 'A passionate data professional with expertise in analytics and business intelligence'
    },
    {
      icon: <Target />,
      title: 'My Mission',
      description: 'Transform complex data into actionable insights that drive strategic business decisions'
    },
    {
      icon: <Award />,
      title: 'My Approach',
      description: 'Combining statistical rigor with business acumen to deliver impactful solutions'
    },
    {
      icon: <TrendingUp />,
      title: 'My Impact',
      description: 'Helping organizations unlock the power of their data for sustainable growth'
    }
  ]

  return (
    <section className="about-section section-light">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about data-driven solutions, AI innovation, and full-stack development
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="intro-card">
              <h3>Hello! I'm a Data Analytics & Full Stack AI Developer</h3>
              <p>
                With a strong foundation in data science, business analytics, full-stack development, and AI technologies, 
                I help organizations make sense of their data and build intelligent solutions. My journey combines 
                data analytics expertise with modern web development and artificial intelligence, creating comprehensive 
                solutions that bridge the gap between data insights and user-friendly applications.
              </p>
              
              <p>
                I specialize in building end-to-end solutions, from data collection and analysis to developing 
                full-stack applications integrated with AI capabilities. My experience spans data analytics, 
                web development, and generative AI implementation, giving me a unique perspective on how to 
                create intelligent, data-driven applications that deliver real business value.
              </p>

              <div className="key-strengths">
                <h4>Key Strengths:</h4>
                <ul>
                 <li>Advanced statistical analysis and machine learning applied in projects</li>
                 <li>Business intelligence and interactive dashboard development</li>
                 <li>Full-stack web development (Frontend & Backend)</li>
                 <li>Generative AI integration and prompt engineering</li>
                 <li>Data visualization and impactful storytelling</li>
                 <li>AI-powered application development</li>
                 <li>Cross-functional collaboration through academic & project work</li>
                 <li>Strategic thinking and problem-solving with AI-driven insights</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="personal-touch">
          <div className="personal-card">
            <h3>Beyond the Data & Code</h3>
            <p>
              When I'm not analyzing datasets, building web applications, or experimenting with AI models, 
              I enjoy staying updated with the latest trends in technology, exploring new frameworks, 
              and discovering innovative ways to integrate AI into everyday solutions. I believe that 
              the best innovations come from combining data science expertise, full-stack development skills, 
              and AI capabilities to create solutions that truly make a difference.
            </p>
            <p>
              My passion lies in building intelligent applications that not only process and visualize data 
              effectively but also leverage the power of generative AI to provide enhanced user experiences 
              and automated insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
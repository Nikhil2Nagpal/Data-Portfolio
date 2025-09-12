import React from 'react'
import { Code, BarChart3, Brain, TrendingUp, Database, Palette } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code />,
      title: 'Programming Languages',
      skills: [
        { name: 'Python with AI', level: 95, color: '#3776ab' },
        { name: 'SQL', level: 95, color: '#f29111' },
        { name: 'JavaScript', level: 80, color: '#f7df1e' },
        { name: 'HTML', level: 90, color: '#e34f26' },
        { name: 'CSS', level: 85, color: '#1572b6' }
      ]
    },
    {
      icon: <BarChart3 />,
      title: 'Data Visualization',
      skills: [
        { name: 'Tableau', level: 90, color: '#e97627' },
        { name: 'Power BI', level: 88, color: '#f2c811' },
        { name: 'Matplotlib', level: 85, color: '#11557c' },
        { name: 'Seaborn', level: 82, color: '#4c72b0' }
      ]
    },
    {
      icon: <Brain />,
      title: 'Machine Learning & Data Science',
      skills: [
        { name: 'scikit-learn (Learning)', level: 40, color: '#f7931e' },
        { name: 'Pandas', level: 92, color: '#150458' },
        { name: 'NumPy', level: 88, color: '#013243' },
        { name: 'Python with AI', level: 85, color: '#306998' }
      ]
    },
    {
      icon: <TrendingUp />,
      title: 'AI & Emerging Technologies',
      skills: [
        { name: 'Generative AI', level: 85, color: '#ff6b6b' },
        { name: 'AI Integration', level: 80, color: '#4ecdc4' },
        { name: 'Machine Learning (Learning)', level: 40, color: '#45b7d1' },
        { name: 'Data Analytics', level: 90, color: '#96ceb4' }
      ]
    },
    {
      icon: <Database />,
      title: 'Web Development & Frameworks',
      skills: [
        { name: 'React', level: 82, color: '#61dafb' },
        { name: 'JavaScript ES6+', level: 80, color: '#f7df1e' },
        { name: 'Responsive Design', level: 85, color: '#563d7c' },
        { name: 'Modern CSS', level: 85, color: '#1572b6' }
      ]
    },
    {
      icon: <Palette />,
      title: 'Business Intelligence & Analytics',
      skills: [
        { name: 'Google Analytics', level: 80, color: '#e37400' },
        { name: 'Business Intelligence', level: 88, color: '#4285f4' },
        { name: 'Data Storytelling', level: 90, color: '#ea4335' },
        { name: 'Statistical Analysis', level: 85, color: '#34a853' }
      ]
    }
  ]

  return (
    <section className="skills-section section-light">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for transforming data into actionable business insights
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                            animationDelay: `${index * 0.1 + skillIndex * 0.05}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
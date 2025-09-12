import React, { useState, useEffect } from 'react'
import { Download, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const navigate = useNavigate()
  const roles = ['Data Analytics', 'Business Analytics', 'Data Science', 'Full Stack Dev with AI']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Nikhil_Nagpal_Resume.pdf'; // public folder se directly access
    link.download = 'Nikhil_Nagpal.pdf'; // ye naam download time pe dikhega
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleViewWork = () => {
    navigate('/projects')
  }

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src="/images/profile.jpeg" 
                alt="Profile" 
                className="profile-image"
              />
              <div className="profile-ring"></div>
            </div>
          </div>

          <div className="intro-section">
            <h1 className="intro-title">
              Hi, I'm <span className="name-highlight">Nikhil Nagpal</span>
            </h1>
            
            <div className="role-container">
              <span className="role-prefix">Specialized in </span>
              <span className="animated-role">
                {roles[currentRole]}
              </span>
            </div>

            <p className="intro-description">
              Fresher skilled in Data Analytics, Business Analytics & Data Science.  
              Fullstack developer with AI integration expertise.  
              Passionate about transforming data into actionable insights and leveraging AI for smarter decision-making.
            </p>

            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <Download className="btn-icon" />
                Download CV
              </button>
              <button className="btn btn-secondary" onClick={handleViewWork}>
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background animations */}
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
    </section>
  )
}

export default Home
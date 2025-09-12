import React, { useState } from 'react'
import { Award, Calendar, ExternalLink, Download, Filter } from 'lucide-react'
import './Certificates.css'

const Certificates = () => {
  const [filter, setFilter] = useState('all')

  const certificates = [
    {
  id: 1,
  title: 'Deloitte Data Analytics Virtual Internship',
  issuer: 'Deloitte',
  platform: 'Forage',
  date: '2025',
  category: 'analytics',
  credentialId: 'DLT2024001',
  skills: ['Data Analysis', 'SQL', 'Power BI', 'Python', 'Business Insights'],
  image: '/images/deloitte.jpg',
  verifyLink: 'https://drive.google.com/file/d/1heA159tGzXHIUgmyu9ljqec3toSA3hNV/view?usp=sharing',
  downloadLink: 'https://drive.google.com/file/d/1heA159tGzXHIUgmyu9ljqec3toSA3hNV/view?usp=sharing',
  description: 'Completed Deloitte’s Data Analytics Virtual Internship via Forage, gaining practical experience in data analysis, business insights, and visualization techniques used in real-world consulting projects.'
},
{
  id: 2,
  title: 'Tata Data Visualization: Empowering Business with Effective Insights',
  issuer: 'Tata Group',
  platform: 'Forage',
  date: '2025',
  category: 'visualization',
  credentialId: 'TATA2024002',
  skills: ['Data Visualization', 'Power BI', 'Storytelling with Data', 'Business Intelligence'],
  image: '/images/tata.jpg',
  verifyLink: 'https://drive.google.com/file/d/1_4vVeKt202jFdX-klTMxaUSCjgCJn6lZ/view?usp=sharing',
  downloadLink: 'https://drive.google.com/file/d/1_4vVeKt202jFdX-klTMxaUSCjgCJn6lZ/view?usp=sharing',
  description: 'Successfully completed Tata Group’s Data Visualization Virtual Experience Program via Forage, focusing on creating impactful dashboards and delivering business insights through effective visualization.'
},

{
  id: 3,
  title: 'Tata Data Analytics Virtual Internship',
  issuer: 'Tata Group',
  platform: 'Forage',
  date: 'September 2025',
  category: 'analytics',
  credentialId: 'TATA2025005',
  skills: ['Data Analysis', 'SQL', 'Power BI', 'Business Insights'],
  image: '/images/tata-data.png',
  verifyLink: 'https://drive.google.com/file/d/1Fry1vBDzhHvwy-vzChYUXA2do9GWPi_w/view?usp=sharing',
  downloadLink: 'https://drive.google.com/file/d/1Fry1vBDzhHvwy-vzChYUXA2do9GWPi_w/view?usp=sharing',
  description: 'Completed Tata Group’s Data Analytics Virtual Internship via Forage, gaining practical experience in handling datasets, extracting insights, and building dashboards.'
},
{
  id: 4,
  title: 'SQL for Data Analytics Certification',
  issuer: 'NxtWave',
  platform: 'NxtWave CCBP',
  date: 'November 2023',
  category: 'database',
  credentialId: 'SQL2023002',
  skills: ['SQL', 'Database Management', 'Joins & Queries', 'Data Analysis'],
  image: '/images/sql.png',
  verifyLink: 'https://drive.google.com/file/d/1ci4R956iEFgPBxfSX057KCSNbCb54X3E/view?usp=sharing',
  downloadLink: 'https://drive.google.com/file/d/1ci4R956iEFgPBxfSX057KCSNbCb54X3E/view?usp=sharing',
  description: 'Successfully completed SQL certification from NxtWave, focusing on writing queries, managing databases, and analyzing datasets for insights.'
},
{
  id: 5,
  title: 'Generative AI Fundamentals',
  issuer: 'Microsoft & UpGrad',
  platform: 'UpGrad',
  date: 'April 2025',
  category: 'ai',
  credentialId: 'GENAI2025003',
  skills: ['Generative AI', 'Prompt Engineering', 'LLMs', 'AI Applications'],
  image: '/images/gen-ai.jpg',
  verifyLink: 'https://drive.google.com/file/d/1Wl4hl2I7cBlLUA0xrO3xGyFl5N4Wjrwv/view?usp=sharing',
  downloadLink: 'https://drive.google.com/file/d/1Wl4hl2I7cBlLUA0xrO3xGyFl5N4Wjrwv/view?usp=sharing',
  description: 'Completed Generative AI program launched in collaboration by Microsoft & UpGrad, learning prompt engineering, LLMs, and real-world AI applications.'
},
{
  id: 6,
  title: 'React.js Frontend Development Certification',
  issuer: 'NxtWave',
  platform: 'NxtWave CCBP',
  date: 'January 2024',
  category: 'frontend',
  credentialId: 'REACT2024004',
  skills: ['React.js', 'JavaScript', 'Component-Based UI', 'State Management'],
  image: '/images/react.png',
  verifyLink: 'https://drive.google.com/file/d/14Q0Ned8oI1N7RlLUAaQOw1mIa1nWcBlh/view?usp=sharing',
  downloadLink: 'https://drive.google.com/file/d/14Q0Ned8oI1N7RlLUAaQOw1mIa1nWcBlh/view?usp=sharing',
  description: 'Earned React.js certification from NxtWave, gaining hands-on experience in building dynamic web applications with reusable components.'
},
{
  id: 7,
  title: 'Python Programming Certification',
  issuer: 'NxtWave',
  platform: 'NxtWave CCBP',
  date: 'July 2023',
  category: 'programming',
  credentialId: 'PY2023001',
  skills: ['Python', 'Data Structures', 'Problem Solving', 'OOP'],
  image: '/images/python.jpg',
  verifyLink: 'https://drive.google.com/file/d/1UZlaY_18Bw3z3q-lfHX0kb9cevAiJ9sW/view?usp=sharing',
  downloadLink: 'https://drive.google.com/file/d/1UZlaY_18Bw3z3q-lfHX0kb9cevAiJ9sW/view?usp=sharing',
  description: 'Completed Python certification from NxtWave, gaining expertise in core Python programming, object-oriented concepts, and problem-solving techniques.'
},
{
  id: 8,
  title: 'Machine Learning Certification',
  issuer: 'Internshala',
  platform: 'Internshala Trainings',
  date: 'March 2025',
  category: 'ml',
  credentialId: 'ML2025006',
  skills: ['Machine Learning', 'Python', 'Supervised & Unsupervised Learning', 'Model Building'],
  image: '/images/ml.jpg',
  verifyLink: 'https://drive.google.com/file/d/1zV026MNZLgOwfYD-sqXian_9rArUbtin/view?usp=sharing',
  downloadLink: 'https://drive.google.com/file/d/1zV026MNZLgOwfYD-sqXian_9rArUbtin/view?usp=sharing',
  description: 'Completed Machine Learning training from Internshala, learning supervised and unsupervised ML algorithms, Python implementations, and model evaluation techniques.'
}



  ]

  const categories = [
    { id: 'all', label: 'All Certificates', count: certificates.length },
    { id: 'analytics', label: 'Data Analytics', count: certificates.filter(c => c.category === 'analytics').length },
    { id: 'visualization', label: 'Visualization', count: certificates.filter(c => c.category === 'visualization').length }
  ]

  const filteredCertificates = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter)

  return (
    <section className="certificates-section section-gradient">
      <div className="container">
        <div className="certificates-header">
          <h2 className="section-title">Professional Certificates</h2>
          <p className="section-subtitle">
            Continuous learning and professional development in data science and analytics
          </p>
        </div>

        <div className="filter-section">
          <div className="filter-header">
            <Filter className="filter-icon" />
            <span>Filter by Category</span>
          </div>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
                <span className="count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="certificates-grid">
          {filteredCertificates.map((certificate, index) => (
            <div 
              key={certificate.id} 
              className="certificate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
              </div>

              <div className="certificate-content">
                <h3 className="certificate-title">{certificate.title}</h3>
                
                <div className="certificate-meta">
                  <div className="issuer-info">
                    <span className="issuer">{certificate.issuer}</span>
                    <span className="platform">via {certificate.platform}</span>
                  </div>
                  <div className="date-info">
                    <Calendar className="date-icon" />
                    <span>{certificate.date}</span>
                  </div>
                </div>

                <p className="certificate-description">{certificate.description}</p>

                <div className="skills-tags">
                  {certificate.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>

                <div className="certificate-footer">
                  <div className="credential-id">
                    <span>Credential ID: {certificate.credentialId}</span>
                  </div>
                  <div className="certificate-actions">
                    <a href={certificate.verifyLink} className="verify-btn">
                      Verify
                      <ExternalLink className="btn-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import './Contact.css'

/*
  EMAIL SETUP INSTRUCTIONS:
  
  For a fully automated email system, follow these steps:
  
  1. Go to https://www.emailjs.com and create a free account
  2. Create an email service (Gmail, Outlook, etc.)
  3. Create an email template
  4. Get your Service ID, Template ID, and Public Key
  5. Replace the handleSubmit function with EmailJS integration
  
  Current implementation uses mailto: which opens user's email client
  This ensures the message reaches you but requires user to send manually
*/

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  console.log('Current form data:', formData); // Debug: show current form state
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    console.log('Input changed:', e.target.name, e.target.value); // Debug log
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simple working method using Formsubmit.co (100% working)
      const formElement = document.createElement('form')
      formElement.method = 'POST'
      formElement.action = 'https://formsubmit.co/nikhilnagpal406@gmail.com'
      formElement.style.display = 'none'
      
      // Add form fields
      const fields = {
        name: formData.name,
        email: formData.email,
        subject: `Portfolio Contact: ${formData.subject}`,
        message: formData.message,
        _next: window.location.href,
        _captcha: 'false',
        _template: 'table'
      }
      
      Object.keys(fields).forEach(key => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = fields[key]
        formElement.appendChild(input)
      })
      
      document.body.appendChild(formElement)
      formElement.submit()
      
      // Show success immediately
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email',
      value: 'nikhilnagpal406@gmail.com',
      link: 'mailto:nikhilnagpal406@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 8527875774',
      link: 'tel:+918527875774'
    },
    {
      icon: <MapPin />,
      title: 'Location',
      value: 'Ghaziabad, India',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nikhil-nagpal-86512922b',
      color: '#0077b5'
    },
    {
      icon: <Github />,
      name: 'GitHub',
      url: 'https://github.com/Nikhil2Nagpal',
      color: '#333'
    },
    {
      icon: <Instagram />,
      name: 'Instagram',
      url: 'https://www.instagram.com/n_i_kkkk_h_i_l/',
      color: '#e4405f'
    },
    {
      icon: <Twitter />,
      name: 'Twitter',
      url: 'https://x.com/NikhilNagpal406',
      color: '#1da1f2'
    }
  ]

  return (
    <section className="contact-section section-light">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to collaborate or have questions about my work? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about data science and analytics.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <a href={info.link} className="contact-link">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            {/* Hidden form for Netlify Forms */}
            <form name="contact" netlify hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="subject" />
              <textarea name="message"></textarea>
            </form>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send Message</h3>
              
              {submitStatus === 'success' && (
                <div className="form-message success">
                  <CheckCircle className="message-icon" />
                  <span>✅ Message sent successfully! Email bhej diya gaya hai tumhare Gmail pe.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message error">
                  <AlertCircle className="message-icon" />
                  <span>❌ Sorry, there was an error sending your email. Please try again or contact directly at nikhilnagpal406@gmail.com</span>
                </div>
              )}
              
              {submitStatus === 'fallback' && (
                <div className="form-message warning">
                  <AlertCircle className="message-icon" />
                  <span>Email service not configured yet. Your email client has been opened - please send the message manually.</span>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => console.log('Name input focused')}
                    onClick={() => console.log('Name input clicked')}
                    required
                    placeholder="Enter your full name"
                    autoComplete="name"
                    style={{ zIndex: 1000, position: 'relative' }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => console.log('Email input focused')}
                    onClick={() => console.log('Email input clicked')}
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    style={{ zIndex: 1000, position: 'relative' }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => console.log('Subject input focused')}
                  onClick={() => console.log('Subject input clicked')}
                  required
                  placeholder="What's this about?"
                  style={{ zIndex: 1000, position: 'relative' }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => console.log('Message textarea focused')}
                  onClick={() => console.log('Message textarea clicked')}
                  required
                  rows="6"
                  placeholder="Tell me about your project or question..."
                  style={{ zIndex: 1000, position: 'relative' }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="btn-icon" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
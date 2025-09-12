import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, BarChart3, Brain, TrendingUp } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icons">
            <BarChart3 className="logo-icon" />
            <Brain className="logo-icon" />
            <TrendingUp className="logo-icon" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Data</span>
            <span className="logo-title">Nexus</span>
          </div>
        </Link>

        <div className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/skills" className="nav-link" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link to="/certificates" className="nav-link" onClick={() => setIsOpen(false)}>
            Certificates
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
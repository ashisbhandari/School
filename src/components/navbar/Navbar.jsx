// Update your Navbar component with these changes:

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileNavOpen && !event.target.closest('.mobile-header') && !event.target.closest('.mobile-nav')) {
        setMobileNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileNavOpen]);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  // NEW: Handle mobile nav link clicks with smooth scrolling
  const handleMobileNavClick = (e, targetId) => {
    // Don't prevent default for external links or home
    if (targetId === '/' || targetId === '/#') {
      closeMobileNav();
      return;
    }

    // For hash links, handle the scrolling manually
    e.preventDefault();
    
    // Close the mobile nav first
    setMobileNavOpen(false);
    
    // Wait a bit for the nav to close, then scroll
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300); // Adjust timing if needed
  };

  return (
    <>
      {/* Desktop Navigation - keep as is */}
      <nav className={`navbar-desktop ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/" className="brand-link">
              <img src={Logo} alt="School Logo" className="brand-logo" />
              <span className="brand-name">School</span>
            </Link>
          </div>

          <div className="navbar-menu">
            <a href="/#" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="/#news" className='nav-link'>News</a>
            <a href="/#contact" className='nav-link'>Contact</a>
            <a href="/#gallery" className='nav-link'>Gallery</a>
          </div>

          <div className="navbar-actions">
            <div className="contact-info">
              <a href="tel:+9779800000000" className="contact-item">
                +977-9800000000
              </a>
              <a href="mailto:info@excellenceschool.edu.np" className="contact-item">
                info@school.edu.np
              </a>
            </div>
            <Link to="/#" className="login-btn">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="navbar-mobile">
        <div className={`mobile-header ${isScrolled ? 'scrolled' : ''}`}>
          <Link to="/" className="mobile-brand" onClick={closeMobileNav}>
            <img src={Logo} alt="School Logo" className="mobile-logo" />
            <span className="mobile-brand-name">School</span>
          </Link>
          
          <button
            className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
            onClick={toggleMobileNav}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileNavOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {mobileNavOpen && (
          <div className="mobile-overlay" onClick={closeMobileNav}></div>
        )}

        {/* UPDATED: Mobile Menu with fixed navigation */}
        <div className={`mobile-menu ${mobileNavOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <h3>School</h3>
            <button className="close-btn" onClick={closeMobileNav} aria-label="Close menu">
              ✕
            </button>
          </div>

          <div className="mobile-nav-links">
            {/* Updated mobile navigation links */}
            <a 
              href="/#" 
              className="mobile-nav-link" 
              onClick={(e) => handleMobileNavClick(e, '/#')}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="mobile-nav-link" 
              onClick={(e) => handleMobileNavClick(e, '#about')}
            >
              About Us
            </a>
            <a 
              href="/#news" 
              className='mobile-nav-link' 
              onClick={(e) => handleMobileNavClick(e, '#news')}
            >
              News
            </a>
            <a 
              href="/#contact" 
              className='mobile-nav-link' 
              onClick={(e) => handleMobileNavClick(e, '#contact')}
            >
              Contact
            </a>
            <a 
              href="/#gallery" 
              className='mobile-nav-link' 
              onClick={(e) => handleMobileNavClick(e, '#gallery')}
            >
              Gallery
            </a>
          </div>

          <div className="mobile-contact-section">
            <h4>Contact Information</h4>
            <div className="mobile-contact-links">
              <a href="tel:+9779800000000" className="mobile-contact-link">
                <span className="mobile-contact-icon">📱</span>
                +977-9800000000
              </a>
              <a href="mailto:info@excellenceschool.edu.np" className="mobile-contact-link">
                <span className="mobile-contact-icon">✉️</span>
                info@school.edu.np
              </a>
            </div>
          </div>

          <div className="mobile-login-section">
            <Link to="/#" className="mobile-login-btn" onClick={closeMobileNav}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
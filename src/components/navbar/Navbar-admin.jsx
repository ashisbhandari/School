// Navbar_admin.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from "../../assets/logo.png";
import { FaUser } from 'react-icons/fa';

const Navbar_admin = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close menu if clicked outside
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

  const handleMobileNavClick = (e, targetId) => {
    if (targetId === '/' || targetId === '/#') {
      closeMobileNav();
      return;
    }

    e.preventDefault();
    setMobileNavOpen(false);
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  // logout confirmation alert
  const showAlert = (e) => {
    e.preventDefault(); // Prevent Link from navigating
    const userChoice = window.confirm("Are you sure you want to log out?");
    if (userChoice) {
      console.log("Logging out user...");
      window.location.href = '/'; // redirect to homepage
    } else {
      console.log("Logout cancelled by user.");
      // Do nothing - stay on current page
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`navbar-desktop ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/" className="brand-link">
              <img src={Logo} alt="School Logo" className="brand-logo" />
              <span className="brand-name">School</span>
            </Link>
          </div>

          <div className="navbar-menu">
            <a href="/admin" className="nav-link">Home</a>
            {/* <a href="#about" className="nav-link">About Us</a> */}
            <a href="/admin#add_news" className='nav-link'>News</a>
            <a href="#contact" className='nav-link'>Contact</a>
            <a href="#gallery" className='nav-link'>Gallery</a>
          </div>

          <div className="navbar-actions">
            <button className="login-btn" onClick={showAlert}>
              <FaUser /> Log out
            </button>
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

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileNavOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <h3>School</h3>
            <button className="close-btn" onClick={closeMobileNav} aria-label="Close menu">
              ✕
            </button>
          </div>

          <div className="mobile-nav-links">
            <a 
              href="/admin" 
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
            <a href="/admin#add_news" className='mobile-nav-link'>News</a>
            <a 
              href="#contact" 
              className='mobile-nav-link' 
              onClick={(e) => handleMobileNavClick(e, '#contact')}
            >
              Contact
            </a>
            <a 
              href="#gallery" 
              className='mobile-nav-link' 
              onClick={(e) => handleMobileNavClick(e, '#gallery')}
            >
              Gallery
            </a>
          </div>

          <div className="mobile-login-section">
            <button className="mobile-login-btn" onClick={showAlert}>
              <FaUser /> Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar_admin;

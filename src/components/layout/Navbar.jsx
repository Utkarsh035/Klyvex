import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/staticData';
import Logo from '../ui/Logo';
import '../../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={link.href === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <Link to="/contact" className="navbar-cta">
            Get Started
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`mobile-menu-btn ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            id="mobile-menu-btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div 
        className={`mobile-nav-backdrop ${mobileOpen ? 'open' : ''}`} 
        onClick={() => setMobileOpen(false)} 
      />

      {/* Mobile Card */}
      <div className={`mobile-nav-card ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-card-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={link.href === '/'}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="mobile-nav-card-footer">
          <Link to="/contact" className="mobile-cta-btn" onClick={() => setMobileOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

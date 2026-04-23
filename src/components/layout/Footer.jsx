import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import ScrollReveal from '../ui/ScrollReveal';
import Logo from '../ui/Logo';
import Magnetic from '../ui/Magnetic';
import { companyInfo, footerLinks } from '../../data/staticData';
import '../../styles/footer.css';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    // Future: call newsletter API
    console.info('[Vynzro] Newsletter subscription:', newsletterEmail);
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Newsletter Banner */}
        <ScrollReveal>
          <div className="footer-newsletter">
            <div>
              <h3>Stay in the Loop</h3>
              <p>Get the latest updates on our products, services, and tech insights.</p>
            </div>
            <form className="footer-newsletter-form" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                id="newsletter-email"
              />
              <Magnetic>
                <button type="submit" className="footer-newsletter-btn" id="newsletter-submit-btn">
                  {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </Magnetic>
            </form>
          </div>
        </ScrollReveal>

        {/* Footer Columns */}
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo inverse />
            <p>
              A next-generation IT company building premium digital products and delivering
              world-class technology services. Founded with a vision to innovate.
            </p>
            <div className="footer-social">
              <Magnetic>
                <a href={companyInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={companyInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={companyInfo.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={companyInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vynzro. All rights reserved. Built with ❤ and ambition.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

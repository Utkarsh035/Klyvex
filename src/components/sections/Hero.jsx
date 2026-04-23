import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Magnetic from '../ui/Magnetic';
import '../../styles/hero.css';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const orb1X = useSpring(useMotionValue(0), springConfig);
  const orb1Y = useSpring(useMotionValue(0), springConfig);
  const orb2X = useSpring(useMotionValue(0), springConfig);
  const orb2Y = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 25;
      const moveY = (clientY - window.innerHeight / 2) / 25;
      
      orb1X.set(moveX);
      orb1Y.set(moveY);
      orb2X.set(-moveX);
      orb2Y.set(-moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Blurred background orbs */}
      <motion.div 
        className="hero-blur-orb-1" 
        style={{ x: orb1X, y: orb1Y }}
      />
      <motion.div 
        className="hero-blur-orb-2" 
        style={{ x: orb2X, y: orb2Y }}
      />
      <div className="hero-blur-orb-3" />

      {/* Subtle grid */}
      <div className="hero-grid-bg" />

      {/* Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="hero-badge-dot" />
          Innovation-Driven IT Company
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Building Tomorrow's{' '}
          <span className="gradient-text">Technology</span>, Today
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          We craft premium digital products and deliver world-class IT services
          that empower businesses to innovate, scale, and lead.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Magnetic>
            <Link to="/services" className="hero-btn-primary" id="hero-explore-btn">
              Explore Services <HiOutlineArrowRight />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="/contact" className="hero-btn-secondary" id="hero-contact-btn">
              <HiOutlineChatBubbleLeftRight /> Contact Us
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-mouse" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

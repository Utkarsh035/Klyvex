import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import TechStrip from '../components/sections/TechStrip';
import ServicesOverview from '../components/sections/Services'; // Using the existing Services component as an overview
import Testimonials from '../components/sections/Testimonials'; // CTA
import ContactForm from '../components/sections/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <TechStrip />
      <ServicesOverview />
      <Testimonials />
      <ContactForm />
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import AboutSection from '../components/sections/About';
import HowWeWork from '../components/sections/HowWeWork';

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

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PageHeader 
        label="ABOUT US"
        title="We are Vynzro"
        subtitle="A hungry, innovative team dedicated to building the future of digital products and engineering."
      />
      <AboutSection />
      <HowWeWork />
    </motion.div>
  );
}

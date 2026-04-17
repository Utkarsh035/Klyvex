import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import ServicesSection from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';

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

export default function Services() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PageHeader 
        label="OUR EXPERTISE"
        title="Services & Capabilities"
        subtitle="End-to-end digital engineering and design services to elevate your business."
      />
      <ServicesSection />
      <WhyChooseUs />
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
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

export default function Contact() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PageHeader 
        label="GET IN TOUCH"
        title="Let's Build Something"
        subtitle="Ready to take your digital presence to the next level? Reach out to us."
      />
      <ContactForm />
    </motion.div>
  );
}

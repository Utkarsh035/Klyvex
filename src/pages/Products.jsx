import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import ProductsSection from '../components/sections/Products';

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

export default function Products() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PageHeader 
        label="OWNERSHIP"
        title="Our Products"
        subtitle="In addition to client engineering, we build our own digital products."
      />
      <ProductsSection />
    </motion.div>
  );
}

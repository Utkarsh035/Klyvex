import { motion } from 'framer-motion';

/**
 * ScrollReveal — Framer Motion wrapper for scroll-triggered reveal animations.
 */
const variants = {
  hidden: (direction) => ({
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    scale: direction === 'scale' ? 0.92 : 1,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      custom={direction}
      variants={{
        hidden: variants.hidden(direction),
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

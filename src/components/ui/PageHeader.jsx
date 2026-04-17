import { motion } from 'framer-motion';

/**
 * Premium PageHeader for inner pages
 */
export default function PageHeader({ title, subtitle, label }) {
  return (
    <section className="page-header" style={{
      position: 'relative',
      padding: 'var(--space-5xl) var(--space-xl) var(--space-3xl)',
      background: 'var(--bg-primary)',
      overflow: 'hidden',
      textAlign: 'center',
      borderBottom: '1px solid var(--divider)'
    }}>
      {/* Blurred background orbs for inner page header */}
      <div style={{
        position: 'absolute', top: '-50%', left: '10%', width: '300px', height: '300px',
        background: 'rgba(79, 70, 229, 0.12)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-50%', right: '10%', width: '300px', height: '300px',
        background: 'rgba(124, 58, 237, 0.08)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent-indigo)',
            marginBottom: 'var(--space-md)'
          }}
        >
          {label}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-lg)',
            letterSpacing: '-0.03em'
          }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

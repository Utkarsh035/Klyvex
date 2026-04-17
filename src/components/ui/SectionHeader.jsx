import ScrollReveal from './ScrollReveal';

/**
 * SectionHeader — Consistent section heading with label, title, subtitle.
 * Supports dark background mode for contrast sections.
 */
export default function SectionHeader({ label, title, subtitle, align = 'center', dark = false }) {
  return (
    <ScrollReveal>
      <div style={{ textAlign: align, marginBottom: '0.5rem' }}>
        {label && (
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: dark ? 'rgba(255,255,255,0.4)' : 'var(--accent-indigo)',
              marginBottom: 'var(--space-sm)',
              display: 'block',
            }}
          >
            {label}
          </span>
        )}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.875rem, 4.5vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            color: dark ? '#ffffff' : 'var(--text-primary)',
            marginBottom: subtitle ? 'var(--space-md)' : 0,
            letterSpacing: '-0.03em',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: dark ? 'rgba(255,255,255,0.55)' : 'var(--text-secondary)',
              maxWidth: align === 'center' ? '560px' : 'none',
              margin: align === 'center' ? '0 auto' : 0,
              lineHeight: 1.75,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}

import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import '../styles/legal.css';

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

export default function TermsOfService() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PageHeader
        label="LEGAL"
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
      />

      <section className="legal-page">
        <div className="legal-inner">
          <div className="legal-meta">
            <span><strong>Effective Date:</strong> April 22, 2026</span>
            <span>|</span>
            <span><strong>Last Updated:</strong> April 22, 2026</span>
          </div>

          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services provided by Vynzro ("we," "our," or "us"),
              you agree to be bound by these Terms of Service. If you do not agree to all
              of these terms, do not use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Services Provided</h2>
            <p>
              Vynzro provides IT consulting, web development, app development, and design
              services. The specific scope of work for any engagement will be outlined in
              a separate service agreement or proposal.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information as requested.</li>
              <li>Maintain the confidentiality of any account credentials.</li>
              <li>Use our services only for lawful purposes.</li>
              <li>Not interfere with or disrupt the integrity or performance of our services.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all materials created by Vynzro during
              the provision of services, including code, designs, and documentation,
              remain the property of Vynzro until full payment is received. Upon full
              payment, ownership or usage rights will be transferred as specified in the
              individual service agreement.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Payment Terms</h2>
            <p>
              Payment terms, including deposit requirements and milestone payments, will
              be defined in the specific project proposal or agreement. Late payments may
              result in suspension of services or additional fees.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Vynzro shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any
              loss of profits or revenues, whether incurred directly or indirectly.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Termination</h2>
            <p>
              Either party may terminate a service agreement in accordance with the terms
              specified in that agreement. Upon termination, the client remains
              responsible for payment of all services rendered up to the date of
              termination.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you
              Services shall be governed by and construed in accordance with the laws of
              India.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will
              notify you of any changes by posting the new terms on this site. Your
              continued use of the services after such changes constitutes your
              acceptance of the new terms.
            </p>
          </div>

          <div className="legal-contact-card">
            <h3>Questions About Our Terms?</h3>
            <p>
              If you have any questions regarding these Terms of Service, please reach out to us.
            </p>
            <a href="mailto:hello@vynzro.com">hello@vynzro.com</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

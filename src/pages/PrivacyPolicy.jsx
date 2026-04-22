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

export default function PrivacyPolicy() {
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
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Here's how we handle your information."
      />

      <section className="legal-page">
        <div className="legal-inner">
          <div className="legal-meta">
            <span><strong>Effective Date:</strong> April 22, 2026</span>
            <span>|</span>
            <span><strong>Last Updated:</strong> April 22, 2026</span>
          </div>

          <div className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Vynzro ("we," "our," or "us"). We are committed to protecting
              your personal information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when
              you visit our website or engage our services.
            </p>
            <p>
              By accessing or using our services, you agree to the collection and use of
              information in accordance with this policy. If you do not agree with the
              terms of this policy, please do not access or use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number,
                and other contact details you provide voluntarily through our contact
                forms or when engaging our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our
                website, including pages visited, time spent, browser type, device
                information, and IP address.
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> We use cookies and similar
                technologies to enhance your browsing experience, analyze site traffic,
                and understand user behavior.
              </li>
              <li>
                <strong>Communications:</strong> Records of correspondence when you
                contact us via email, phone, or through our website forms.
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide, operate, and maintain our services</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send you project updates, newsletters, and marketing communications (with your consent)</li>
              <li>To improve and personalize your experience on our website</li>
              <li>To analyze usage patterns and optimize our services</li>
              <li>To detect, prevent, and address technical issues or security threats</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Information Sharing & Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share your information in the following limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share data with trusted
                third-party vendors who assist us in operating our website and delivering
                services (e.g., hosting, analytics, email delivery).
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if
                required by law, regulation, or legal process.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be transferred as
                part of the transaction.
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer retention
              period is required or permitted by law. When data is no longer needed, we
              will securely delete or anonymize it.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Withdraw consent at any time where processing is based on consent</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details
              provided below.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are
              not operated by us. We have no control over and assume no responsibility
              for the content, privacy policies, or practices of any third-party sites.
              We encourage you to review the privacy policy of every site you visit.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 16. We do
              not knowingly collect personal information from children. If we become
              aware that we have collected data from a child, we will take steps to
              delete it promptly.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any material changes by posting the new policy on this page with an updated
              "Last Updated" date. Your continued use of our services after any changes
              constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="legal-contact-card">
            <h3>Questions About This Policy?</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy, please
              contact us.
            </p>
            <a href="mailto:hello@vynzro.com">hello@vynzro.com</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

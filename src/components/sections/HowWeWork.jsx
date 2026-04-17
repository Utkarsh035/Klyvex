import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import '../../styles/howwework.css';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your business, goals, and technical requirements in depth.',
  },
  {
    number: '02',
    title: 'Design & Plan',
    description: 'We craft the architecture, UI/UX, and a detailed roadmap for your project.',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'Agile development with weekly demos. You see progress every step of the way.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Deployment, monitoring, and ongoing support to ensure your success.',
  },
];

export default function HowWeWork() {
  return (
    <section className="how-we-work" id="process">
      <div className="how-inner">
        <SectionHeader
          label="Our Process"
          title="How We Work"
          subtitle="A proven, transparent process that keeps you in control from discovery to deployment."
        />

        <div className="process-timeline">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <div className="process-step">
                <div className="process-step-number">
                  <div className="process-step-number-inner">
                    {step.number}
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

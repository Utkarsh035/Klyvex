import {
  HiOutlineRocketLaunch,
  HiOutlineCheckBadge,
  HiOutlineBolt,
  HiOutlineLifebuoy,
} from 'react-icons/hi2';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { whyChooseUs } from '../../data/staticData';
import '../../styles/whychooseus.css';

const iconMap = {
  HiOutlineRocketLaunch: <HiOutlineRocketLaunch />,
  HiOutlineCheckBadge: <HiOutlineCheckBadge />,
  HiOutlineBolt: <HiOutlineBolt />,
  HiOutlineLifebuoy: <HiOutlineLifebuoy />,
};

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="why-us">
      <div className="why-inner">
        <SectionHeader
          label="Why Vynzro"
          title="Why Work With Us"
          subtitle="We're new, hungry, and committed to over-delivering for every single client."
          dark
        />

        <div className="why-features-grid">
          {whyChooseUs.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="why-feature-card">
                <div className="why-feature-icon">
                  {iconMap[feature.icon]}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

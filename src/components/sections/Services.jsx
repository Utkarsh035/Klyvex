import {
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineLightBulb,
  HiOutlineVideoCamera,
} from 'react-icons/hi2';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { services } from '../../data/staticData';
import '../../styles/services.css';

const iconMap = {
  HiOutlineGlobeAlt: <HiOutlineGlobeAlt />,
  HiOutlineDevicePhoneMobile: <HiOutlineDevicePhoneMobile />,
  HiOutlinePaintBrush: <HiOutlinePaintBrush />,
  HiOutlineLightBulb: <HiOutlineLightBulb />,
  HiOutlineVideoCamera: <HiOutlineVideoCamera />,
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <SectionHeader
          label="What We Do"
          title="Services That Drive Results"
          subtitle="End-to-end IT services designed to accelerate your digital transformation journey."
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.08}>
              <div className="service-card">
                <div className="service-icon">
                  {iconMap[service.icon]}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card-tags">
                  {service.tags.map((tag) => (
                    <span className="service-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

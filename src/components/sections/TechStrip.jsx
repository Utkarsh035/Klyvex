import { FaReact, FaJava, FaAws, FaDocker, FaPython, FaFigma, FaNodeJs } from 'react-icons/fa6';
import { SiSpringboot, SiKubernetes, SiFlutter, SiTensorflow, SiNextdotjs } from 'react-icons/si';
import ScrollReveal from '../ui/ScrollReveal';
import '../../styles/techstrip.css';

const techs = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'Figma', icon: <FaFigma /> },
];

export default function TechStrip() {
  return (
    <section className="tech-strip">
      <div className="tech-strip-inner">
        <ScrollReveal>
          <p className="tech-strip-label">Technologies We Work With</p>
          <div className="tech-strip-logos">
            {techs.map((tech) => (
              <div className="tech-strip-item" key={tech.name}>
                <span className="tech-strip-item-icon">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

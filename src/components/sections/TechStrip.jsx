import { FaReact, FaJava, FaFigma, FaBootstrap } from 'react-icons/fa6';
import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiTailwindcss,
  SiKotlin,
} from 'react-icons/si';
import { HiOutlinePaintBrush, HiOutlineFilm } from 'react-icons/hi2';
import '../../styles/techstrip.css';

const techs = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'Hibernate', icon: <SiHibernate /> },
  { name: 'JPA', icon: <FaJava /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Photoshop', icon: <HiOutlinePaintBrush /> },
  { name: 'Premiere Pro', icon: <HiOutlineFilm /> },
  { name: 'Kotlin', icon: <SiKotlin /> },
];

export default function TechStrip() {
  // Duplicate the list for seamless infinite scroll
  const marqueeItems = [...techs, ...techs];

  return (
    <section className="tech-strip">
      <div className="tech-strip-inner">
        <p className="tech-strip-label">Technologies We Work With</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeItems.map((tech, i) => (
              <div className="tech-strip-item" key={`${tech.name}-${i}`}>
                <span className="tech-strip-item-icon">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import '../../styles/logo.css';

export default function Logo({ inverse = false, className = '' }) {
  // We only have one logo image right now, so we use it everywhere. 
  // If the user uploads a white logo later, they can name it logo-white.png
  const imageSrc = "/Vynzro/logo.svg";

  return (
    <Link
      to="/"
      className={`vynzro-brand-logo-img ${inverse ? 'inverse' : ''} ${className}`}
      aria-label="Vynzro Home"
    >
      <img
        src={imageSrc}
        alt="Vynzro Logo"
        className="logo-img"
      />
    </Link>
  );
}

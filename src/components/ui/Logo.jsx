import { Link } from 'react-router-dom';
import '../../styles/logo.css';

export default function Logo({ inverse = false, className = '' }) {
  // We only have one logo image right now, so we use it everywhere. 
  // If the user uploads a white logo later, they can name it logo-white.png
  const imageSrc = "/Klyvex/logo.png";

  return (
    <Link
      to="/"
      className={`klyvex-brand-logo-img ${inverse ? 'inverse' : ''} ${className}`}
      aria-label="Klyvex Home"
    >
      <img
        src={imageSrc}
        alt="Klyvex Logo"
        className="logo-img"
      />
    </Link>
  );
}

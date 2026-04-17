/* Static data for Klyvex website — used as fallback when Spring Boot backend is unavailable */

export const companyInfo = {
  name: 'Klyvex',
  tagline: 'Building Tomorrow\'s Technology, Today',
  description: 'We are a next-generation IT company delivering premium products and services that empower businesses to innovate, scale, and lead in the digital era.',
  founded: 2026,
  email: 'hello@klyvex.com',
  phone: '+91 98XXX XXXXX',
  address: 'India',
  social: {
    linkedin: 'https://linkedin.com/company/klyvex',
    twitter: 'https://twitter.com/klyvex',
    github: 'https://github.com/klyvex',
    instagram: 'https://instagram.com/klyvex',
  },
};

export const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom, high-performance web applications built with modern frameworks. From single-page apps to enterprise solutions.',
    icon: 'HiOutlineGlobeAlt',
    tags: ['React', 'Next.js', 'Spring Boot', 'Node.js'],
  },
  {
    id: 2,
    title: 'App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android.',
    icon: 'HiOutlineDevicePhoneMobile',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    id: 3,
    title: 'Web Design',
    description: 'Human-centered design that transforms complex problems into intuitive, beautiful digital experiences.',
    icon: 'HiOutlinePaintBrush',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'UI/UX'],
  },
  {
    id: 4,
    title: 'IT Consultation',
    description: 'Strategic technology consulting to align your IT roadmap with business objectives and market trends.',
    icon: 'HiOutlineLightBulb',
    tags: ['Strategy', 'Architecture', 'Audit', 'Digital Transformation'],
  },
  {
    id: 5,
    title: 'Graphic Design & Video Editing',
    description: 'Available as an add-on option contextually matched to your projects for cohesive branding, engaging marketing materials, and professional media.',
    icon: 'HiOutlineVideoCamera',
    tags: ['Branding', 'Motion Graphics', 'Post-production'],
  },
];

export const products = [
  {
    id: 1,
    name: 'GeoVendor',
    description: 'Our debut product is currently under active development. A powerful platform designed to solve a real-world problem with elegance and cutting-edge technology.',
    status: 'in-development',
    launchDate: 'Q4 2026',
    techStack: ['React', 'Spring Boot', 'MySQL'],
    icon: 'HiOutlineRocketLaunch',
  },
];

export const whyChooseUs = [
  {
    title: 'Fresh Perspective',
    description: 'As a young company, we bring bold ideas and modern approaches without legacy baggage holding us back.',
    icon: 'HiOutlineRocketLaunch',
  },
  {
    title: 'Quality First',
    description: 'We don\'t cut corners. Every line of code is crafted with care, tested rigorously, and built to last.',
    icon: 'HiOutlineCheckBadge',
  },
  {
    title: 'Agile & Fast',
    description: 'Small team, fast decisions. We move quickly and adapt to your needs without bureaucratic delays.',
    icon: 'HiOutlineBolt',
  },
  {
    title: 'Dedicated Support',
    description: 'We treat every client like our first. Expect responsive, personal communication every step of the way.',
    icon: 'HiOutlineLifebuoy',
  },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  services: [
    { label: 'Web Development', href: '/services' },
    { label: 'App Development', href: '/services' },
    { label: 'Web Design', href: '/services' },
    { label: 'IT Consultation', href: '/services' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

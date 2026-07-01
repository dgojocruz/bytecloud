import { useEffect, useState } from 'react';
import heroBgImage from '../../assets/images/about-hero-bg.jpg';

// Same proven full-bleed pattern as the homepage video hero.
const heroImages = [
  {
    src: heroBgImage,
    alt: 'Abstract blue and cyan geometric gradient',
  },
];

function AboutHero({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="about-intro-hero">
      {heroImages.map((img, index) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`about-intro-bg-image ${index === activeIndex ? 'active' : ''}`}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <div className="about-intro-overlay" />
      <div className="about-intro-inner">
        <div className="about-intro-content">{children}</div>
      </div>
    </section>
  );
}

export default AboutHero;

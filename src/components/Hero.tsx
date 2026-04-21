import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-accent" />
      <div className="hero-accent-2" />
      <div className="container hero-inner">
        <p className="hero-eyebrow">Cybersecurity Student</p>
        <h1 className="hero-name">
          Building<br /><em>secure</em><br />software.
        </h1>
        <p className="hero-tagline">
          I'm a cybersecurity student focused on networking and secure software
          development — building systems that are robust, resilient, and hard to
          break.
        </p>
        <a href="#projects" className="btn-primary">
          View my work
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}

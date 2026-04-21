import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              Recent projects.
            </h2>
          </div>
          <a href="#contact" className="projects-cta">
            Work together
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="projects-grid">
          <article className="project-card reveal">
            <div className="project-thumb">
              <div className="thumb-color" style={{ background: 'var(--blue)' }} />
              <div className="project-thumb-label">app screenshot</div>
              <div className="project-view-overlay">
                <span className="view-link">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  View project
                </span>
              </div>
            </div>
            <div className="project-body">
              <div className="project-tags">
                <span className="tag">Cryptography</span>
                <span className="tag blue">Python</span>
                <span className="tag terra">End-to-end</span>
              </div>
              <h3 className="project-title">Encrypted Chat App</h3>
              <p className="project-desc">
                A peer-to-peer messaging app using AES-256 and RSA key exchange
                — built from scratch to explore applied cryptography and secure
                transport protocols.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

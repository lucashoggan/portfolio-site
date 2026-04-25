import "./Projects.css";

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
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="projects-grid">
          <article className="project-card reveal">
            <div className="project-thumb">
              <img src="/stonemire-full.jpg" />
              <div className="project-view-overlay">
                <a
                  href="https://stonemire.lucashoggan.co.uk"
                  target="_blank"
                  className="view-link"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  View project
                </a>
              </div>
            </div>
            <div className="project-body">
              <div className="project-tags">
                <span className="tag">Cryptography</span>
                <span className="tag">WebSockets</span>
                <span className="tag">Express</span>
              </div>
              <h3 className="project-title">Encrypted Chat App</h3>
              <p className="project-desc">
                A end to end encrypted messaging app using asymmetric encryption
                and websockets to make a quick, secure communication platform
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

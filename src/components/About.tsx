import './About.css';

const skills = [
  'Network security',
  'Cryptography',
  'Digital forensics',
  'Python / C',
  'Secure software dev',
  'Linux / Bash',
  'Wireshark / nmap',
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label reveal">About me</p>
        <div className="about-grid">
          <div className="about-content reveal">
            <h2 className="section-heading">
              Building software that's secure from the ground up.
            </h2>
            <p>
              I'm Lucas Hoggan, a <strong>Cybersecurity and Forensics</strong>{' '}
              student with a focus on network security and building resilient
              software. I'm drawn to understanding how systems are designed,
              where they're vulnerable, and how to make them stronger.
            </p>
            <p>
              I'm currently applying what I learn in the classroom to hands-on
              projects — from encrypted messaging tools to network monitoring
              utilities — bridging the gap between security theory and real-world
              practice.
            </p>
            <p>
              Outside of coursework, I'm deepening my knowledge of{' '}
              <strong>secure software development and digital forensics</strong>,
              and exploring how security principles shape the tools and
              infrastructure we rely on every day.
            </p>

            <p className="skills-heading">Focus areas</p>
            <div className="skills-list">
              {skills.map((s) => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

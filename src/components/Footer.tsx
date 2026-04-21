import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <span>&copy; 2026 Lucas Hoggan. All rights reserved.</span>
      <a href="#hero" className="footer-back">
        Back to top
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </footer>
  );
}

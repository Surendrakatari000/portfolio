import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import '../styles/footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {year} <span>Surendra Katari</span>. Built with React & passion.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/Surendrakatari000"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/surendra-katari/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:surendrakatari353@gmail.com"
            className="footer-link"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

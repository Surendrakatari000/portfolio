import { Github, Linkedin, Mail, ArrowDown, ChevronDown } from 'lucide-react'
import '../styles/hero.css'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 8}s`,
  size: `${2 + Math.random() * 3}px`,
}))

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <div className="hero-particles">
          {particles.map((p) => (
            <span
              key={p.id}
              className="particle"
              style={{
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.duration,
                width: p.size,
                height: p.size,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          Open to opportunities
        </div>

        <h1 className="hero-name">
          Surendra <span className="gradient-text">Katari</span>
        </h1>

        <p className="hero-title">Full Stack Developer & AI Enthusiast</p>

        <p className="hero-tagline">
          Building scalable web applications and intelligent AI solutions that
          transform ideas into impactful digital experiences.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
            <ArrowDown size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Surendrakatari000"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/surendra-katari/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:surendrakatari353@gmail.com"
            className="hero-social-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

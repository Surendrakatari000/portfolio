import { useState } from 'react'
import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/contact.css'

export default function Contact() {
  const sectionRef = useScrollReveal()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:surendrakatari353@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.open(mailtoLink)
  }

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal reveal-delay-1">
            <h3>Get in Touch</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something great.
            </p>

            <div className="contact-methods">
              <a
                href="mailto:surendrakatari353@gmail.com"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">
                    surendrakatari353@gmail.com
                  </span>
                </div>
              </a>

              <a href="tel:+919392226199" className="contact-method">
                <div className="contact-method-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Phone</span>
                  <span className="contact-method-value">+91 9392226199</span>
                </div>
              </a>

              <a
                href="https://github.com/Surendrakatari000"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <Github size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">GitHub</span>
                  <span className="contact-method-value">Surendrakatari000</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/surendra-katari/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <Linkedin size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">LinkedIn</span>
                  <span className="contact-method-value">surendra-katari</span>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

import { GraduationCap, Calendar } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/education.css'

export default function Education() {
  const sectionRef = useScrollReveal()

  return (
    <section className="section" id="education" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            Where I'm building my foundation in computer science
          </p>
        </div>

        <div className="education-card reveal reveal-delay-1">
          <div className="education-icon">
            <GraduationCap size={32} />
          </div>
          <h3 className="education-institution">BITS Pilani</h3>
          <p className="education-degree">B.Sc. Computer Science</p>
          <span className="education-years">
            <Calendar size={14} />
            2024 — 2027
          </span>
        </div>
      </div>
    </section>
  )
}

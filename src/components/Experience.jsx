import { MapPin, FileText, Award } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/experience.css'

export default function Experience() {
  const sectionRef = useScrollReveal()

  return (
    <section className="section experience" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey so far
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-role">Full Stack Web Developer</h3>
                <span className="timeline-date">Internship</span>
              </div>
              <p className="timeline-company">Alpha Studioz</p>
              <p className="timeline-location">
                <MapPin size={14} />
                Mumbai, India · Startup
              </p>

              <div className="timeline-tasks">
                <span className="timeline-task-tag">Full Stack Development</span>
                <span className="timeline-task-tag">Gen AI Chatbots</span>
                <span className="timeline-task-tag">Content Creation</span>
                <span className="timeline-task-tag">REST APIs</span>
              </div>

              <div className="timeline-docs">
                <a
                  href="https://drive.google.com/file/d/16AIXXw3i1m8zfxqOCYwUm29OJhI31MG5/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-doc-link"
                >
                  <Award size={14} />
                  Experience Letter
                </a>
                <a
                  href="https://drive.google.com/file/d/1xOl-nJx8KpKrzeZy04d4BBNbZcEuzTVR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-doc-link"
                >
                  <FileText size={14} />
                  Offer Letter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

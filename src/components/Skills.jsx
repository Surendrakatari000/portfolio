import { Monitor, Server, Database, Brain, Wrench } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/skills.css'

const skillCategories = [
  {
    name: 'Frontend',
    icon: Monitor,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML/CSS', 'JavaScript'],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Python'],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
  },
  {
    name: 'AI / ML',
    icon: Brain,
    skills: ['RAG', 'FAISS', 'Whisper', 'LLMs', 'LangChain'],
  },
  {
    name: 'Tools & DevOps',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Hostinger', 'VS Code'],
  },
]

export default function Skills() {
  const sectionRef = useScrollReveal()

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.name}
                className={`skill-category reveal reveal-delay-${i + 1}`}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon size={22} />
                  </div>
                  <span className="skill-category-name">{cat.name}</span>
                </div>
                <div className="skill-list">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-item">
                      <span className="skill-dot" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

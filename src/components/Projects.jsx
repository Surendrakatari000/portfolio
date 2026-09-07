import {
  ExternalLink,
  Github,
  Utensils,
  BookOpen,
  AudioLines,
  Bot,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/projects.css'

const projects = [
  {
    name: 'FudX',
    type: 'Internship Project',
    icon: Utensils,
    description:
      'A full-featured food platform where users can browse restaurants and order food with delivery, dine-in, and takeaway options. Features three roles: users, restaurant owners, and super admin.',
    tech: ['TypeScript', 'Tailwind', 'Redux', 'Node.js', 'Express', 'MySQL'],
    live: 'https://restaurant.thefudx.com/',
    github: 'https://github.com/coder-pratik-1998/nodebackend',
  },
  {
    name: 'BookHub',
    type: 'Full Stack App',
    icon: BookOpen,
    description:
      'A book browsing platform where users can explore books, read content, and add favorites. Admin panel with full CRUD operations for book management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://book-hub-liard.vercel.app/',
    github: 'https://github.com/Surendrakatari000/bookHub',
  },
  {
    name: 'AI Summary',
    type: 'AI Agent',
    icon: AudioLines,
    description:
      'An intelligent agent that extracts text from audio files using Whisper, summarizes content with LLMs, and delivers the summary directly to your email.',
    tech: ['Python', 'Whisper', 'LLM', 'Mail'],
    github: 'https://github.com/Surendrakatari000/wav_summary',
  },
  {
    name: 'RAG Chatbot',
    type: 'AI Project',
    icon: Bot,
    description:
      'A question-answering chatbot that uses Retrieval Augmented Generation to fetch relevant data from given resources and generate accurate answers.',
    tech: ['RAG', 'Python', 'FAISS', 'LLM'],
    github: 'https://github.com/Surendrakatari000/rag_llm_project',
  },
]

export default function Projects() {
  const sectionRef = useScrollReveal()

  return (
    <section className="section projects" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Some of the projects I've built and contributed to
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <div
                key={project.name}
                className={`project-card reveal reveal-delay-${i + 1}`}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <Icon size={26} />
                  </div>
                  <div className="project-links">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`${project.name} live site`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`${project.name} GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-type">{project.type}</span>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

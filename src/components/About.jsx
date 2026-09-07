import { useEffect, useState, useRef } from 'react'
import { Briefcase, Code2, Trophy } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/about.css'

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          animate()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate About Building & Learning</h2>
          <p className="section-subtitle">
            A glimpse into who I am and what drives me
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <h3>Hey, I'm Surendra 👋</h3>
            <p>
              I'm a <span className="about-highlight">Full Stack Developer</span> and{' '}
              <span className="about-highlight">AI Enthusiast</span> currently pursuing
              B.Sc. Computer Science at{' '}
              <span className="about-highlight">BITS Pilani</span>. I love turning complex
              problems into clean, user-friendly solutions.
            </p>
            <p>
              From building full-stack web platforms like food delivery systems and book
              hubs, to exploring the world of AI with RAG chatbots and audio summarization
              agents — I'm always pushing myself to learn and create something meaningful.
            </p>
            <p>
              When I'm not coding, you'll find me grinding problems on LeetCode and
              Codeforces, constantly sharpening my algorithmic thinking.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card reveal reveal-delay-1">
              <div className="stat-icon">
                <Code2 size={24} />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={4} suffix="+" />
              </div>
              <div className="stat-label">Projects Built</div>
            </div>

            <div className="stat-card reveal reveal-delay-2">
              <div className="stat-icon">
                <Trophy size={24} />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="stat-label">DSA Problems</div>
            </div>

            <div className="stat-card reveal reveal-delay-3">
              <div className="stat-icon">
                <Briefcase size={24} />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={1} />
              </div>
              <div className="stat-label">Internship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

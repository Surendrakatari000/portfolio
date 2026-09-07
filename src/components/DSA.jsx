import { ExternalLink } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect, useState, useRef } from 'react'
import '../styles/dsa.css'

function AnimatedCount({ end, duration = 2000 }) {
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

  return <span ref={ref}>{count}+</span>
}

export default function DSA() {
  const sectionRef = useScrollReveal()

  return (
    <section className="section" id="dsa" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Competitive Programming</span>
          <h2 className="section-title">DSA & Problem Solving</h2>
          <p className="section-subtitle">
            Consistently solving problems to sharpen algorithmic thinking
          </p>
        </div>

        <div className="dsa-grid">
          <div className="dsa-card leetcode reveal reveal-delay-1">
            <div className="dsa-platform-logo">LC</div>
            <h3 className="dsa-platform-name">LeetCode</h3>
            <div className="dsa-count">
              <AnimatedCount end={100} />
            </div>
            <p className="dsa-label">Problems Solved</p>
            <a
              href="https://leetcode.com/u/surendra_katari/"
              target="_blank"
              rel="noopener noreferrer"
              className="dsa-link"
            >
              View Profile
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="dsa-card codeforces reveal reveal-delay-2">
            <div className="dsa-platform-logo">CF</div>
            <h3 className="dsa-platform-name">Codeforces</h3>
            <div className="dsa-count">
              <AnimatedCount end={100} />
            </div>
            <p className="dsa-label">Problems Solved</p>
            <a
              href="https://codeforces.com/profile/surendrakatari353"
              target="_blank"
              rel="noopener noreferrer"
              className="dsa-link"
            >
              View Profile
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

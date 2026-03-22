import React from 'react'
import RevealOnScroll from './RevealOnScroll.jsx'

const languages = [
  {
    name: 'HTML',
    color: '#f97316',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M10 13h4"/><path d="M10 17h4"/><path d="M10 9h1"/>
      </svg>
    ),
  },
  {
    name: 'CSS',
    color: '#3b82f6',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#eab308',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/>
        <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/>
      </svg>
    ),
  },
  {
    name: 'React JS',
    color: '#06b6d4',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/>
        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/>
        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>
      </svg>
    ),
  },
  {
    name: 'PHP',
    color: '#818cf8',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="8" rx="4"/><path d="M6 12h.01"/><path d="M10 12h.01"/><path d="M14 12h.01"/>
      </svg>
    ),
  },
  {
    name: 'SQL',
    color: '#a855f7',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
        <path d="M3 12A9 3 0 0 0 21 12"/>
      </svg>
    ),
  },
  {
    name: 'C / C++',
    color: '#64748b',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="6" height="6" x="9" y="9"/>
        <path d="M5 9H3v6h2"/><path d="M5 12H3"/><path d="M19 9h-2v6h2"/><path d="M19 12h-2"/>
        <path d="M9 6V3L6 6V3"/><path d="M15 3v3l3-3v3"/>
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#f59e0b',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
        <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
        <path d="M6 18a4 4 0 0 1-1.967-.516"/>
        <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
      </svg>
    ),
  },
  {
    name: 'Node JS',
    color: '#22c55e',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="4" rx="2"/>
        <rect width="6" height="6" x="9" y="9" rx="1"/>
        <path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
      </svg>
    ),
  },
]

const tools = [
  {
    name: 'Git',
    color: '#f97316',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    color: '#94a3b8',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    color: '#f59e0b',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    color: '#f97316',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
  },
]

function SkillCard({ skill }) {
  return (
    <div
      className="skill-card glass rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default group"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Glow layer */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
        style={{ background: skill.color, pointerEvents: 'none' }}
      />
      {/* Icon */}
      <div
        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>
      {/* Name */}
      <span className="relative z-10 text-white/80 text-sm font-outfit font-medium">{skill.name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Languages Section ── */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-4">
              Technical{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Proficiency
              </span>
            </h2>
            <p className="text-gray-500 text-lg font-outfit">Technologies I use to build advanced web applications.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
            {languages.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </RevealOnScroll>

        {/* ── Tools Section ── */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-4">
              Development{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Tools
              </span>
            </h2>
            <p className="text-gray-500 text-lg font-outfit">Software and platforms I use to streamline development.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <SkillCard key={tool.name} skill={tool} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

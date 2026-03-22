import React from 'react'
import RevealOnScroll from './RevealOnScroll.jsx'

const items = [
  {
    year: '2021 – 2022',
    title: 'Class 10th (Secondary)',
    institution: "St. Anthony's School, Barabanki",
    description: 'Completed secondary education with distinction.',
    iconPath: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
    side: 'right',
  },
  {
    year: '2022 – 2023',
    title: 'Class 12th (Higher Secondary)',
    institution: "St. Anthony's School, Barabanki",
    description: 'Completed higher secondary education with a focus on Science and Mathematics.',
    iconPath: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
    side: 'left',
  },
  {
    year: '2024 – 2028',
    title: 'B.Tech in Computer Science',
    institution: 'Pimpri Chinchwad University',
    description: 'Currently pursuing Bachelor of Technology. Focusing on Full Stack Development and advanced computing concepts.',
    iconPath: 'M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5',
    side: 'right',
  },
]

function TimelineItem({ item, index }) {
  const isLeft = item.side === 'left'

  return (
    <RevealOnScroll delay={index * 120} variant={isLeft ? 'left' : 'right'}>
      <div className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} mb-12 md:mb-16`}>
        {/* Desktop layout */}
        <div className={`hidden md:block w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left ml-auto'}`}>
          <div
            className="edu-card glass rounded-2xl p-6 relative group"
            style={{ borderColor: 'rgba(168,85,247,0.2)' }}
          >
            {/* Year badge */}
            <div className="flex items-center gap-2 mb-3" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.iconPath}/>
              </svg>
              <span className="text-purple-400 text-sm font-outfit font-semibold">{item.year}</span>
            </div>
            <h3 className="text-white font-space font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-blue-400 text-sm font-outfit mb-3">{item.institution}</p>
            <p className="text-gray-400 text-sm font-outfit leading-relaxed">{item.description}</p>
          </div>
        </div>

        {/* Center dot */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10"
          style={{
            background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
            boxShadow: '0 0 16px rgba(168,85,247,0.5)',
          }}
        />

        {/* Mobile layout */}
        <div className="md:hidden w-full pl-10">
          <div
            className="edu-card glass rounded-2xl p-5 relative"
            style={{ borderColor: 'rgba(168,85,247,0.2)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.iconPath}/>
              </svg>
              <span className="text-purple-400 text-xs font-outfit font-semibold">{item.year}</span>
            </div>
            <h3 className="text-white font-space font-bold text-base mb-1">{item.title}</h3>
            <p className="text-blue-400 text-xs font-outfit mb-2">{item.institution}</p>
            <p className="text-gray-400 text-xs font-outfit leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  )
}


export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-4">
              Education{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Timeline
              </span>
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
          </div>
        </RevealOnScroll>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="timeline-line hidden md:block" />
          {/* Vertical line (mobile) */}
          <div className="absolute left-4 top-0 bottom-0 w-px hidden-md block md:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent, #a855f7, #3b82f6, transparent)' }}
          />
          {/* Mobile dot line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, transparent, #a855f7, #3b82f6, transparent)' }}
          />

          {items.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import RevealOnScroll from './RevealOnScroll.jsx'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-4">
              Work{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Experience
              </span>
            </h2>
            <p className="text-gray-500 text-lg font-outfit">My professional journey and internships.</p>
          </div>
        </RevealOnScroll>

        {/* Experience Card */}
        <RevealOnScroll delay={150}>
          <div 
            className="glass rounded-3xl p-8 md:p-10 relative group hover:border-purple-500/40 transition-all duration-500 overflow-hidden"
            style={{ borderColor: 'rgba(168,85,247,0.2)' }}
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-space font-bold text-white mb-2">Front End Intern • Internship</h3>
                  <div className="flex items-center gap-2 text-purple-400 font-outfit font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    VaultOfCodes, Virtual
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-outfit font-medium glass" style={{ borderColor: 'rgba(168,85,247,0.3)', color: '#a855f7' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Jun 2025 - Jul 2025
                </div>
              </div>

              <p className="text-gray-400 font-outfit leading-relaxed mb-6">
                During my internship at Vault of Codes, I worked on multiple frontend projects that significantly sharpened my HTML, CSS, and JavaScript skills. I applied core web development concepts to create responsive, interactive, and user-friendly applications. The internship gave me practical experience in transforming ideas into real, working web apps.
              </p>

              <div className="mb-4">
                <h4 className="text-white font-space font-semibold text-lg mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Key Responsibilities:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Built a personalized portfolio website to showcase my projects and technical skills.",
                    "Developed an interactive recipe book using JavaScript with toggling steps, animations, and clean UI.",
                    "Created a classic Snake Game using HTML, CSS & JS as part of the final internship project.",
                    "Polished frontend development skills by applying real-world web design principles and best practices across multiple projects."
                  ].map((task, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 font-outfit">
                      <span className="text-blue-500 mt-1.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Animated bottom bar */}
            <div 
              className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700" 
              style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }}
            />
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}

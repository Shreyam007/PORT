import React, { useState, useEffect } from 'react'
import RevealOnScroll from './RevealOnScroll.jsx'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const [scrollIndicator, setScrollIndicator] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrollIndicator(window.scrollY < 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">

          {/* ── Left: Text Content ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Available badge */}
            <RevealOnScroll delay={0}>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/80 text-sm font-outfit font-medium tracking-wider uppercase">
                  Available for work
                </span>
              </div>
            </RevealOnScroll>

            {/* Heading */}
            <RevealOnScroll delay={100}>
              <h1 className="font-space font-bold leading-tight mb-4">
                <span className="text-white text-3xl sm:text-4xl md:text-5xl block mb-1">I'm</span>
                <span
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Shreyam Pandey
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-gray-300 text-xl sm:text-2xl font-outfit font-medium mb-4">
                Full Stack Developer
              </p>
              <p className="text-gray-500 text-base font-outfit leading-relaxed mb-8 max-w-md">
                Crafting digital experiences with advanced technologies.
                Passionate about building responsive, accessible, and
                performant web applications.
              </p>
            </RevealOnScroll>

            {/* CTA Buttons */}
            <RevealOnScroll delay={300}>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary px-7 py-3.5 rounded-full text-white font-semibold font-outfit flex items-center gap-2"
                >
                  View Projects
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </button>
                <a
                  href="https://drive.google.com/file/d/15tUUklwsBsblvU8A02bEqjybP2m-EjsE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold font-outfit border border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                  View Resume
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className="flex items-center justify-center order-1 lg:order-2 relative">
            <RevealOnScroll delay={200}>
              <div className="relative">
                {/* Floating icon - Atom (blue) */}
                <div
                  className="absolute -top-4 -right-4 z-10 glass rounded-xl p-3 animate-bounce-float"
                  style={{ boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>
                  </svg>
                </div>

                {/* Floating icon - Database (purple) */}
                <div
                  className="absolute -bottom-4 -left-4 z-10 glass rounded-xl p-3 animate-bounce-float-delay"
                  style={{ boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>
                  </svg>
                </div>

                {/* Profile image with gradient border */}
                <div
                  className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                    boxShadow: '0 0 50px rgba(168,85,247,0.4), 0 0 100px rgba(59,130,246,0.2)',
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <img
                      src="/profile.jpg"
                      alt="Shreyam Pandey - Full Stack Developer"
                      fetchpriority="high"
                      decoding="async"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)'
                        e.target.parentElement.innerHTML = `
                          <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-family:'Space Grotesk',sans-serif;font-size:5rem;font-weight:700;background:linear-gradient(135deg,#a855f7,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">SP</div>
                        `
                      }}
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
        style={{ opacity: scrollIndicator ? 1 : 0 }}
      >
        {/* Mouse pill */}
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2.5 rounded-full bg-white/60"
            style={{ animation: 'scroll-dot 1.5s ease-in-out infinite' }}
          />
        </div>
        <span className="text-white/40 text-xs font-outfit tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  )
}

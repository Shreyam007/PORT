import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'HOME', id: 'home' },
  { label: 'SKILLS', id: 'skills' },
  { label: 'EDUCATION', id: 'education' },
  { label: 'PROJECTS', id: 'projects' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-space font-bold text-2xl text-white hover:opacity-80 transition-opacity"
          >
            SP<span className="text-purple-500">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-link text-gray-300 hover:text-white text-sm font-outfit font-medium tracking-wider transition-colors pb-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-5 py-2 rounded-full text-white text-sm font-semibold font-outfit"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-dark px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollToSection(link.id); setMenuOpen(false) }}
              className="text-gray-300 hover:text-white text-sm font-outfit font-medium tracking-wider text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { scrollToSection('contact'); setMenuOpen(false) }}
            className="btn-primary px-5 py-2.5 rounded-full text-white text-sm font-semibold font-outfit w-full"
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  )
}

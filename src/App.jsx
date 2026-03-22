import React, { Component, useState, useEffect, Suspense } from 'react'
import SplineBackground from './components/SplineBackground.jsx'
import Preloader from './components/Preloader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

// Lazy load below-the-fold components for massive performance/SEO boost
const Skills = React.lazy(() => import('./components/Skills.jsx'))
const Education = React.lazy(() => import('./components/Education.jsx'))
const Experience = React.lazy(() => import('./components/Experience.jsx'))
const Projects = React.lazy(() => import('./components/Projects.jsx'))
const Contact = React.lazy(() => import('./components/Contact.jsx'))

// ── Error Boundary ──────────────────────────────────────────
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio Error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-purple-500 text-6xl mb-4">⚠</div>
            <h1 className="text-white text-2xl font-space font-bold mb-2">Something went wrong</h1>
            <p className="text-gray-400 mb-6">An unexpected error occurred. Please refresh the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary px-6 py-3 rounded-full text-white font-semibold"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

// ── App Component ────────────────────────────────────────────
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Increased preloader time to 2000ms so the new Black Hole animation is fully visible
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ErrorBoundary>
      {loading && <Preloader />}
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* 3D Background */}
        <SplineBackground />

        {/* Overlay for readability */}
        <div className="fixed inset-0 z-[1] bg-black/40 backdrop-blur-[2px] pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div className="min-h-[200px]" />}>
              <Skills />
              <Education />
              <Experience />
              <Projects />
              <Contact />
            </Suspense>
          </main>
          {/* Footer */}
          <footer className="relative z-10 py-6 text-center">
            <p className="text-gray-600 text-sm font-outfit">
              © 2025 Shreyam Pandey. Crafted with{' '}
              <span className="gradient-text font-semibold">passion</span> &amp; code.
            </p>
          </footer>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App

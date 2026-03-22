import React, { useEffect, useRef, useState } from 'react'

/**
 * Bidirectional scroll reveal:
 * - Scrolling DOWN → elements fade/slide IN
 * - Scrolling UP   → elements fade/slide OUT (back to invisible)
 *
 * @param {'up'|'left'|'right'|'scale'} variant
 * @param {number} delay ms
 */
export default function RevealOnScroll({ children, delay = 0, className = '', variant = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)

  const baseClass =
    variant === 'left'
      ? 'reveal-left'
      : variant === 'right'
      ? 'reveal-right'
      : variant === 'scale'
      ? 'reveal-scale'
      : 'reveal'

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Coming into view — fade IN after delay
          timerRef.current = setTimeout(() => setVisible(true), delay)
        } else {
          // Leaving viewport — fade OUT immediately
          clearTimeout(timerRef.current)
          setVisible(false)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timerRef.current)
    }
  }, [delay])

  return (
    <div ref={ref} className={`${baseClass} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

import React, { useState } from 'react'
import RevealOnScroll from './RevealOnScroll.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/p.shreyambbk@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `New Portfolio Message: ${form.subject || 'Inquiry'}`,
          _template: 'box', 
          _captcha: 'false'
        })
      })

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        alert("Oops! Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("An error occurred while sending the message.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-purple-600 -left-24 top-0" />
      <div className="blob w-80 h-80 bg-blue-600 right-0 bottom-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-4">
              Get In{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Touch
              </span>
            </h2>
            <p className="text-gray-500 text-lg font-outfit">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>
        </RevealOnScroll>

        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── Direct Contact ── */}
            <RevealOnScroll delay={0} className="lg:col-span-2">
              <div className="h-full flex flex-col justify-center gap-6">
                <div>
                  <h3 className="font-space font-bold text-2xl text-white mb-2">Let's Connect</h3>
                  <p className="text-gray-400 font-outfit text-sm leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
                  </p>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919651058174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-green-500/40 transition-colors group"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: 'rgba(34,197,94,0.15)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-outfit font-semibold text-sm">WhatsApp</p>
                    <p className="text-gray-500 font-outfit text-xs">+91 9651058174</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:p.shreyambbk@gmail.com"
                  className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-purple-500/40 transition-colors group"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: 'rgba(168,85,247,0.15)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-outfit font-semibold text-sm">Email</p>
                    <p className="text-gray-500 font-outfit text-xs truncate max-w-[200px] sm:max-w-[250px]">p.shreyambbk@gmail.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 glass rounded-2xl p-4"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(59,130,246,0.15)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-outfit font-semibold text-sm">Location</p>
                    <p className="text-gray-500 font-outfit text-xs">India</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* ── Contact Form ── */}
            <RevealOnScroll delay={150} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs font-outfit mb-1.5 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl font-outfit text-sm text-white placeholder-gray-600 border border-white/8 focus:border-purple-500/60 transition-colors"
                      style={{ background: 'rgba(0,0,0,0.4)' }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-outfit mb-1.5 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl font-outfit text-sm text-white placeholder-gray-600 border border-white/8 focus:border-purple-500/60 transition-colors"
                      style={{ background: 'rgba(0,0,0,0.4)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-outfit mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry..."
                    className="w-full px-4 py-3 rounded-xl font-outfit text-sm text-white placeholder-gray-600 border border-white/8 focus:border-purple-500/60 transition-colors"
                    style={{ background: 'rgba(0,0,0,0.4)' }}
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-outfit mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl font-outfit text-sm text-white placeholder-gray-600 border border-white/8 focus:border-purple-500/60 transition-colors resize-none"
                    style={{ background: 'rgba(0,0,0,0.4)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary px-8 py-3.5 rounded-full text-white font-semibold font-outfit flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z"/>
                        <path d="M22 2 11 13"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

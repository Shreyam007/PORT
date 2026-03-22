import React from 'react'

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020005] flex-col overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Event Horizon */}
        <div className="absolute w-28 h-28 bg-black rounded-full z-10 shadow-[inset_0_0_30px_rgba(168,85,247,0.9)]" />
        
        {/* Accretion Disk (Rotating gradients) */}
        <div className="absolute w-40 h-40 rounded-full animate-[spin_1.5s_linear_infinite]" 
             style={{ background: 'conic-gradient(from 0deg, transparent 0%, #a855f7 40%, transparent 100%)', filter: 'blur(8px)' }} />
        <div className="absolute w-48 h-48 rounded-full animate-[spin_3s_linear_infinite_reverse]" 
             style={{ background: 'conic-gradient(from 180deg, transparent 0%, #ec4899 40%, transparent 100%)', filter: 'blur(12px)', opacity: 0.8 }} />
             
        {/* Core Singularity */}
        <div className="w-2.5 h-2.5 bg-white rounded-full z-20 shadow-[0_0_20px_3px_#fff]" />
      </div>
      <div className="mt-20 text-purple-300 font-space font-medium tracking-[0.3em] text-sm animate-pulse">
        ENTERING SINGULARITY
      </div>
    </div>
  )
}

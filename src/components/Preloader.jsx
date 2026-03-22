import React from 'react'

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      {/* Outer spinning ring */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Ring 1 */}
        <div
          className="absolute w-24 h-24 rounded-full border-2 border-transparent animate-loader-spin"
          style={{
            borderTopColor: '#a855f7',
            borderRightColor: '#3b82f6',
          }}
        />
        {/* Ring 2 - reverse */}
        <div
          className="absolute w-16 h-16 rounded-full border-2 border-transparent"
          style={{
            borderBottomColor: '#ec4899',
            borderLeftColor: '#a855f7',
            animation: 'loader-spin 1.5s linear reverse infinite',
          }}
        />
        {/* Pulse core */}
        <div
          className="w-8 h-8 rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, #a855f7, #3b82f6)',
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)',
          }}
        />
      </div>

      {/* LOADING text */}
      <div className="text-center">
        <p
          className="text-white font-space font-bold text-xl tracking-[0.4em] uppercase animate-pulse mb-2"
        >
          LOADING
        </p>
        <p className="text-gray-500 text-xs font-mono tracking-widest">
          Initializing Environment...
        </p>
      </div>

      {/* Progress bar */}
      <div className="mt-8 w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(to right, #a855f7, #3b82f6)',
            animation: 'shimmer-bar 2.5s ease-in-out forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes shimmer-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}

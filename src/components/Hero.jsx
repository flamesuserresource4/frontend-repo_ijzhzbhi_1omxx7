import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 via-pink-500/30 to-orange-400/30 mix-blend-soft-light pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="backdrop-blur-[2px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Vítej v naší smečce!
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl drop-shadow">
            Tréninky psů v Českých Budějovicích
          </p>
        </div>
      </div>

      {/* playful wave bottom */}
      <svg className="absolute bottom-[-1px] left-0 w-full" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 120C240 200 480 40 720 80C960 120 1200 200 1440 120V180H0V120Z" fill="url(#grad1)"/>
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F472B6"/>
            <stop offset="50%" stopColor="#60A5FA"/>
            <stop offset="100%" stopColor="#F59E0B"/>
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}

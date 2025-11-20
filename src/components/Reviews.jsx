const reviews = [
  {
    name: 'Anna & Max',
    text: 'Skvělý přístup a spousta zábavy! Max se naučil spoustu nových triků.',
  },
  {
    name: 'Petr & Bára',
    text: 'Profesionální vedení a trpělivost. Doporučuji všem začátečníkům.',
  },
  {
    name: 'Lucie & Rony',
    text: 'Skvělé kurzy i sportovní příprava. Rony miluje Dog Gym!',
  },
]

export default function Reviews() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-pink-50 via-sky-50 to-amber-50">
      <svg className="absolute -top-16 left-0 w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 80C160 120 320 40 480 60C640 80 800 140 960 120C1120 100 1280 40 1440 60V120H0V80Z" fill="url(#g2)"/>
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F472B6"/>
            <stop offset="50%" stopColor="#60A5FA"/>
            <stop offset="100%" stopColor="#F59E0B"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Hodnocení</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow border border-slate-200">
              <p className="text-slate-700">“{r.text}”</p>
              <div className="mt-4 text-sm font-semibold text-slate-900">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

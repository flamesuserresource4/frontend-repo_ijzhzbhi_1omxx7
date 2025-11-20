import { Link } from 'react-router-dom'
import { PawPrint, BookOpenCheck, Medal, Dumbbell } from 'lucide-react'

const services = [
  {
    title: 'Courses',
    desc: 'Skupinové i individuální tréninky',
    icon: BookOpenCheck,
    to: '/courses',
    color: 'from-pink-500 to-red-400'
  },
  {
    title: 'Sports',
    desc: 'Dogfrisbee, nosework a další',
    icon: Medal,
    to: '/courses',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Dog Gym',
    desc: 'Posilovna a balanční cviky',
    icon: Dumbbell,
    to: '/dog-gym',
    color: 'from-amber-400 to-orange-500'
  }
]

function ServiceCircle({ item }) {
  const Icon = item.icon
  return (
    <Link to={item.to} className="group">
      <div className={`w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br ${item.color} shadow-xl flex items-center justify-center relative transition-transform group-hover:scale-105`}>
        <div className="absolute inset-4 rounded-full bg-white/20 blur-2xl"></div>
        <Icon className="w-14 h-14 text-white drop-shadow" />
      </div>
      <h3 className="text-center mt-3 text-xl font-extrabold text-slate-800">{item.title}</h3>
      <p className="text-center text-slate-600 text-sm">{item.desc}</p>
    </Link>
  )
}

export default function Services() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-0">
        <svg className="w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80C160 120 320 40 480 60C640 80 800 140 960 120C1120 100 1280 40 1440 60V120H0V80Z" fill="url(#wave)" opacity="0.15"/>
          <defs>
            <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F472B6"/>
              <stop offset="50%" stopColor="#60A5FA"/>
              <stop offset="100%" stopColor="#F59E0B"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-center">
          {services.map((s) => (
            <ServiceCircle key={s.title} item={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

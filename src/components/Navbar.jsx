import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, PawPrint, Book, Trophy, Dumbbell, Home, Users, NotebookPen } from 'lucide-react'

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded-full text-sm font-semibold transition-colors hover:bg-white/20 ${
          isActive ? 'bg-white/30 text-white' : 'text-white/90'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center shadow-lg">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <div className="font-extrabold tracking-tight text-white text-lg">
              Smečka
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
            <NavItem to="/"><Home className="inline w-4 h-4 mr-1"/>Home</NavItem>
            <NavItem to="/courses"><Book className="inline w-4 h-4 mr-1"/>Courses & Training</NavItem>
            <NavItem to="/kids"><NotebookPen className="inline w-4 h-4 mr-1"/>Kids Programs</NavItem>
            <NavItem to="/booking"><Trophy className="inline w-4 h-4 mr-1"/>Booking</NavItem>
            <NavItem to="/dog-gym"><Dumbbell className="inline w-4 h-4 mr-1"/>Dog Gym</NavItem>
            <NavItem to="/trainers"><Users className="inline w-4 h-4 mr-1"/>Trainers</NavItem>
            <NavItem to="/blog">More / Blog / News</NavItem>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 text-white">
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            <NavItem to="/" onClick={() => setOpen(false)}>Home</NavItem>
            <NavItem to="/courses" onClick={() => setOpen(false)}>Courses & Training</NavItem>
            <NavItem to="/kids" onClick={() => setOpen(false)}>Kids Programs</NavItem>
            <NavItem to="/booking" onClick={() => setOpen(false)}>Booking</NavItem>
            <NavItem to="/dog-gym" onClick={() => setOpen(false)}>Dog Gym</NavItem>
            <NavItem to="/trainers" onClick={() => setOpen(false)}>Trainers</NavItem>
            <NavItem to="/blog" onClick={() => setOpen(false)}>More / Blog / News</NavItem>
          </div>
        </div>
      )}
    </header>
  )
}

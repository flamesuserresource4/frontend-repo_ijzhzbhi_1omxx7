import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-pink-50 to-amber-50">
      <div className="relative bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-amber-500">
        <Navbar />
        <Hero />
      </div>

      <main>
        <Services />
        <Reviews />
      </main>

      <Footer />
    </div>
  )
}

export default App

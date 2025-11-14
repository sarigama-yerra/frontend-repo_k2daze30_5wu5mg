import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#05030B]">
      <Navbar />
      <Hero />
      <Sections />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Cosmic Dev. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App

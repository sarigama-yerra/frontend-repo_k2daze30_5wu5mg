import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
            >
              Full‑Stack Developer crafting seamless web experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg leading-7 text-gray-200"
            >
              I build fast, scalable apps with modern stacks, bringing ideas to life with code, design, and a bit of cosmic energy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#projects" className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm font-medium backdrop-blur border border-white/20 transition-colors">View Projects</a>
              <a href="#contact" className="rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-5 py-3 text-sm font-medium transition-colors">Contact Me</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

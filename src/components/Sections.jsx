import { Code2, Server, Database, Rocket, Github, Link as LinkIcon, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Server, title: 'Backend', items: ['FastAPI', 'Node.js', 'Express', 'GraphQL', 'REST'] },
  { icon: Database, title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Prisma', 'Mongoose'] },
]

const projects = [
  {
    title: 'Cosmic Commerce',
    description: 'A headless e-commerce platform with blazing-fast product browsing and secure checkout.',
    tags: ['Next.js', 'FastAPI', 'MongoDB'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'Nebula Notes',
    description: 'Collaborative note-taking app with real-time sync and offline support.',
    tags: ['Vite', 'Express', 'PostgreSQL'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'Orbit Ops',
    description: 'Dashboard for ops metrics with streaming charts and alerting.',
    tags: ['React', 'FastAPI', 'WebSockets'],
    links: { github: '#', live: '#' },
  },
]

export default function Sections() {
  return (
    <>
      <section id="about" className="relative py-24">
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-white">About</motion.h2>
          <p className="mt-6 max-w-3xl text-gray-300 leading-7">
            I’m a full‑stack developer specializing in building robust, delightful web apps. From backend APIs to pixel‑perfect UIs, I ship end‑to‑end features with performance and accessibility in mind.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <Icon className="h-6 w-6 text-purple-400" />
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <ul className="mt-3 space-y-1">
                  {items.map((i) => (
                    <li key={i} className="text-sm text-gray-300">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-24">
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent to-purple-900/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-white">Projects</motion.h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-purple-600/20 text-purple-300 px-2 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a href={p.links.github} className="text-sm text-gray-300 hover:text-white inline-flex items-center gap-2"><Github className="h-4 w-4" /> Code</a>
                  <a href={p.links.live} className="text-sm text-gray-300 hover:text-white inline-flex items-center gap-2"><LinkIcon className="h-4 w-4" /> Live</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-white">Contact</motion.h2>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-white font-semibold">Let’s build something stellar</h3>
              <p className="mt-2 text-sm text-gray-300">Open to freelance, full‑time and collabs. Drop a line!</p>
              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-purple-400" /> you@cosmic.dev</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-purple-400" /> Remote • Planet Earth</div>
              </div>
            </div>
            <form className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-300">Name</label>
                  <input type="text" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Ada Lovelace" />
                </div>
                <div>
                  <label className="block text-xs text-gray-300">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="you@domain.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-gray-300">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Tell me about your project..." />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button type="button" className="rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 text-sm font-medium">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

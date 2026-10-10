
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const roles = [
  'Frontend Developer',
  'React Developer',
  'SEO Specialist',
]

function useTypingEffect() {
  const shouldReduceMotion = useReducedMotion()

  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (shouldReduceMotion) return

    const currentRole = roles[roleIndex]

    const delay = deleting
      ? 50
      : text.length === currentRole.length
        ? 1200
        : 100

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1))
        } else {
          setDeleting(true)
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1))
        } else {
          setDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex, shouldReduceMotion])

  return shouldReduceMotion ? roles[0] : text
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const typedRole = useTypingEffect()

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] scroll-mt-24 items-center px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Left content */}
        <motion.div
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 30,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            <Sparkles size={16} className="text-violet-300" />
            Frontend Developer &amp; SEO Specialist
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
            Hi, I'm
            <span className="mt-2 block bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
              Shivangi Gupta.
            </span>
          </h1>

          <h2 className="mt-5 min-h-16 text-xl font-semibold text-gray-200 sm:text-2xl">
            <span className="text-violet-300">{typedRole}</span>
            {!shouldReduceMotion && (
              <span className="ml-1 inline-block animate-pulse text-violet-400">
                |
              </span>
            )}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I work on responsive websites, frontend development, WordPress,
            and technical and on-page SEO. I enjoy creating user-friendly
            web experiences and continuously improving my React skills.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-900/30 transition duration-300 hover:-translate-y-1 hover:bg-violet-500"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-400/25 bg-[#171324] px-6 py-3.5 font-semibold text-violet-200 transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Connect with me
            </span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-violet-400/15 bg-[#171324] p-3 text-gray-300 transition hover:border-violet-400/50 hover:text-violet-300"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-violet-400/15 bg-[#171324] p-3 text-gray-300 transition hover:border-violet-400/50 hover:text-violet-300"
            >
              <FaLinkedinIn size={19} />
            </a>
          </div>
        </motion.div>

        {/* Developer code card */}
        <motion.div
          className="relative mx-auto w-full max-w-lg"
          animate={
            shouldReduceMotion ? { y: 0 } : { y: [0, -8, 0] }
          }
          transition={{
            duration: 4,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Subtle violet glow */}
          <motion.div
            className="absolute -inset-5 rounded-[2rem] bg-violet-600/10 blur-3xl"
            animate={
              shouldReduceMotion
                ? { opacity: 0.6, scale: 1 }
                : {
                    opacity: [0.45, 0.7, 0.45],
                    scale: [1, 1.015, 1],
                  }
            }
            transition={{
              duration: 6,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-[#171324]/95 shadow-2xl shadow-violet-950/30">

            {/* Card header */}
            <div className="flex items-center justify-between border-b border-violet-400/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>

              <span className="font-mono text-xs text-violet-200/70">
                developer.jsx
              </span>
            </div>

            {/* Code content */}
            <div className="overflow-x-auto p-5 font-mono text-sm leading-8 sm:p-7 sm:text-base">
              <p className="text-gray-500">
                // A little about me
              </p>

              <p>
                <span className="text-fuchsia-300">const</span>{' '}
                <span className="text-violet-200">developer</span>{' '}
                <span className="text-gray-400">= {'{'}</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">name</span>
                <span className="text-gray-400">:</span>{' '}
                <span className="text-emerald-300">
                  'Shivangi Gupta'
                </span>
                <span className="text-gray-400">,</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">role</span>
                <span className="text-gray-400">:</span>{' '}
                <span className="text-emerald-300">
                  'Frontend Developer'
                </span>
                <span className="text-gray-400">,</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">focus</span>
                <span className="text-gray-400">:</span>{' '}
                <span className="text-emerald-300">
                  'React & Web Development'
                </span>
                <span className="text-gray-400">,</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">alsoWorksOn</span>
                <span className="text-gray-400">:</span>{' '}
                <span className="text-emerald-300">
                  'Technical SEO'
                </span>
                <span className="text-gray-400">,</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">learning</span>
                <span className="text-gray-400">:</span>{' '}
                <span className="text-emerald-300">
                  'Next.js'
                </span>
              </p>

              <p className="text-gray-400">{'}'}</p>

              <p className="mt-4 text-gray-500">
                // Always learning, always building.
              </p>

              <p>
                <span className="text-fuchsia-300">
                  export default
                </span>{' '}
                <span className="text-violet-200">developer</span>
                <span className="text-gray-400">;</span>
              </p>
            </div>

            {/* Card footer */}
            <div className="flex items-center justify-between border-t border-violet-400/10 px-5 py-4">
              <span className="text-xs text-gray-400">
                Open to opportunities
              </span>

              <span className="flex items-center gap-2 text-xs text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available to connect
              </span>
            </div>
          </div>

          <a
            href="#about"
            aria-label="Scroll to About section"
            className="mx-auto mt-8 flex w-fit items-center gap-2 text-sm text-violet-300/70 transition hover:text-violet-200"
          >
            Scroll to explore
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

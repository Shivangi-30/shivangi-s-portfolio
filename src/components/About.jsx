
import { Code2, Search, Layers3, ArrowUpRight } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Building responsive, user-friendly websites with HTML, CSS, JavaScript, React, and modern UI practices.',
  },
  {
    icon: Search,
    title: 'Technical & On-Page SEO',
    description:
      'Improving website structure, metadata, internal linking, and page-level optimization for search visibility.',
  },
  {
    icon: Layers3,
    title: 'Dynamic Websites',
    description:
      'Working with WordPress, reusable page templates, PHP, and MySQL-powered website content.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Turning ideas into
            <span className="text-violet-400"> web experiences.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            I am a web developer with a background in Mathematics and a
            professional focus on frontend development, website implementation,
            and search engine optimization.
          </p>
        </div>

        {/* About content and highlights */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Introduction card */}
          <div className="rounded-2xl border border-violet-400/15 bg-[#171324] p-7 sm:p-9">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <Code2 size={28} />
            </div>

            <h3 className="text-2xl font-semibold">
              Hi, I&apos;m Shivangi!
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              My work combines website development with SEO-focused
              improvements. I contribute to responsive interfaces, website
              maintenance, dynamic pages, and on-page and technical SEO.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I am also strengthening my React.js and Next.js skills through
              hands-on projects, with the goal of building modern and scalable
              web applications.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-violet-300 transition hover:text-violet-200"
            >
              Let&apos;s connect
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-5">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="group flex gap-5 rounded-2xl border border-violet-400/15 bg-[#171324] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-lg hover:shadow-violet-950/20 sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/20">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
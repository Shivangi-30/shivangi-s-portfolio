
import { Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'

const contactItems = [
  {
    title: 'Email',
    description: 'Get in touch by email',
    detail: 'shivangigupta2755@gmail.com',
    href: 'mailto:shivangigupta2755@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    title: 'LinkedIn',
    description: 'Connect professionally',
    detail: 'Visit my LinkedIn profile',
    href: 'https://www.linkedin.com/',
    icon: ArrowUpRight,
    external: true,
  },
  {
    title: 'Location',
    description: 'Based in',
    detail: 'Varanasi, Uttar Pradesh, India',
    icon: MapPin,
    external: false,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s work together
            <span className="text-violet-400">.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            I am open to frontend development opportunities and projects
            where I can contribute my web development, React, and SEO skills.
            Feel free to reach out.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon

            const content = (
              <>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/20">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="break-words text-sm text-violet-200">
                    {item.detail}
                  </span>

                  {item.href && (
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-violet-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  )}
                </div>
              </>
            )

            const cardClass =
              'group block h-full rounded-2xl border border-violet-400/15 bg-[#171324] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20 sm:p-7'

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className={cardClass}
              >
                {content}
              </a>
            ) : (
              <div key={item.title} className={cardClass}>
                {content}
              </div>
            )
          })}
        </div>

        {/* Closing call to action */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-violet-400/15 bg-gradient-to-r from-violet-500/10 via-[#171324] to-fuchsia-500/[0.06] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Have a project in mind?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Let&apos;s discuss how we can work together.
            </p>
          </div>

          <a
            href="mailto:shivangigupta2755@gmail.com"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            <MessageCircle size={18} />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
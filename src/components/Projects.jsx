
import {
  ArrowUpRight,
  Code2,
  Database,
  Globe,
  Layers3,
  Server,
  PanelsTopLeft,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'TaxiYatri',
    domain: 'taxiyatri.com',
    category: 'Taxi Booking Platform',
    description:
      'A dynamic taxi booking website built with PHP and MySQL, using database-driven functionality to manage website content and support cab booking services.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    icon: Database,
    accent: 'from-violet-500/20 to-indigo-500/5',
    link: 'https://www.taxiyatri.com/',
  },
  {
    number: '02',
    title: 'Hire Permanent Driver',
    domain: 'hirepermanentdriver.com',
    category: 'Driver Hiring Platform',
    description:
      'A WordPress-based driver hiring website designed to present permanent driver services through a responsive layout and clear navigation.',
    technologies: ['WordPress', 'Responsive Design', 'SEO'],
    icon: Globe,
    accent: 'from-fuchsia-500/20 to-violet-500/5',
    link: 'https://hirepermanentdriver.com/',
  },
  {
    number: '03',
    title: 'Chiku Cab',
    domain: 'chikucab.com',
    category: 'Cab Booking Website',
    description:
      'A cab booking website developed using HTML, CSS, and JavaScript, with service information for local, airport, and outstation travel.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    icon: Code2,
    accent: 'from-purple-500/20 to-pink-500/5',
    link: 'https://chikucab.com/',
  },
  {
    number: '04',
    title: 'Tempo Traveller in Lucknow',
    domain: 'tempotravellerinlucknow.com',
    category: 'Travel Booking Website',
    description:
      'A WordPress-based travel website for Tempo Traveller services, with an emphasis on mobile-friendly layouts and easy-to-navigate service information.',
    technologies: ['WordPress', 'Elementor', 'Responsive Design'],
    icon: PanelsTopLeft,
    accent: 'from-indigo-500/20 to-violet-500/5',
    link: 'https://tempotravellerinlucknow.com/',
  },
  {
    number: '05',
    title: 'Chiku Cabs',
    domain: 'chikucabs.com',
    category: 'Modern Web Application',
    description:
      'A cab and travel booking website built with React.js and Next.js, using a component-based approach to create a modern user interface.',
    technologies: ['React.js', 'Next.js', 'JavaScript'],
    icon: Layers3,
    accent: 'from-violet-500/20 to-fuchsia-500/5',
    link: 'https://chikucabs.com/',
  },
  {
    number: '06',
    title: 'GeoGo Infotech',
    domain: 'geogoinfotech.com',
    category: 'Company Website',
    description:
      'A company website developed using HTML, CSS, and JavaScript, focused on presenting business information in a clean and responsive layout.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    icon: Server,
    accent: 'from-purple-500/20 to-blue-500/5',
    link: 'https://geogoinfotech.com/',
  },
]

function ProjectCard({ project }) {
  const Icon = project.icon

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-violet-400/15 bg-[#171324] transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20">
      {/* Decorative gradient */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${project.accent} opacity-70`}
      />

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        {/* Number and icon */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm tracking-widest text-violet-300/70">
            PROJECT / {project.number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/20 bg-[#0B0914]/70 text-violet-300 transition duration-300 group-hover:border-violet-300/40 group-hover:bg-violet-500/10">
            <Icon size={23} strokeWidth={1.7} />
          </div>
        </div>

        {/* Project details */}
        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
            {project.category}
          </p>

          <h3 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-2 break-words text-sm text-gray-500">
            {project.domain}
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            {project.description}
          </p>
        </div>

        {/* Technology stack */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Technology Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-violet-400/15 bg-violet-400/[0.06] px-2.5 py-1.5 text-xs font-medium text-violet-100/80"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Website link */}
        <div className="mt-auto pt-7">
          <div className="mb-5 border-t border-violet-400/10" />

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-white"
          >
            Visit Live Website
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Selected Work
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Projects &amp; Experience
              <span className="text-violet-400">.</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-gray-400">
              A selection of websites I have worked on across travel,
              cab booking, and driver hiring. Each project reflects
              different technologies and practical web development experience.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-xl border border-violet-400/15 bg-[#171324] px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
              <Code2 size={19} />
            </div>

            <div>
              <p className="text-xl font-bold text-white">06</p>
              <p className="text-xs text-gray-400">Featured Projects</p>
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Code2, Palette, Database, Search, Wrench } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    title: 'UI & Website Development',
    icon: Palette,
    skills: [
      'Responsive Design',
      'WordPress',
      'Elementor Pro',
      'Reusable Components',
    ],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['PHP Basics', 'MySQL', 'REST API Fundamentals'],
  },
  {
    title: 'SEO',
    icon: Search,
    skills: [
      'On-Page SEO',
      'Technical SEO',
      'Meta Tags',
      'Internal Linking',
      'Website Optimization',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Skills & Technologies
            <span className="text-violet-400">.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            The technologies and tools I use to build responsive websites,
            improve user experience, and support website performance and SEO.
          </p>
        </div>

        {/* Skill cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <article
                key={group.title}
                className="group rounded-2xl border border-violet-400/15 bg-[#171324] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-950/20 sm:p-7"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300 transition duration-300 group-hover:bg-violet-500/20">
                  <Icon size={25} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                {/* Skill tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-violet-400/10 bg-violet-400/[0.06] px-3 py-2 text-sm text-gray-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
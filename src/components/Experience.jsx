
const experiences = [
  {
    role: 'Web Developer',
    company: 'Geo Go Infotech',
    period: 'Sep 2023 – Present',
    description:
      'Working on frontend development, responsive website interfaces, WordPress, and technical and on-page SEO. Building and maintaining dynamic PHP and MySQL website pages using reusable templates and database-driven content.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'WordPress',
      'PHP',
      'MySQL',
      'React js',
      'Next js',
      'Technical SEO',
      'On-Page SEO',
    ],
  },
  {
    role: 'UI Designer / Web Development Intern',
    company: 'Oceonic IT Solution Pvt. Ltd.',
    period: 'Internship',
    description:
      'Gained practical experience in website design, UI implementation, and frontend development fundamentals.',
    skills: ['HTML', 'CSS', 'Bootstrap', 'UI Design'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Career Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Work Experience
            <span className="text-violet-400">.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            My professional journey in web development, frontend technologies,
            and search engine optimization.
          </p>
        </div>

        {/* Experience cards */}
        <div className="mt-12 space-y-6">
          {experiences.map((item, index) => (
            <article
              key={item.company}
              className="group relative overflow-hidden rounded-2xl border border-violet-400/15 bg-[#171324] p-6 transition duration-300 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20 sm:p-8"
            >
              {/* Subtle accent */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-400 to-fuchsia-400 opacity-70 transition group-hover:opacity-100" />

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <span className="mb-3 inline-flex rounded-full border border-violet-400/15 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                    Experience {index + 1}
                  </span>

                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {item.role}
                  </h3>

                  <p className="mt-2 font-medium text-violet-300">
                    {item.company}
                  </p>
                </div>

                <span className="w-fit rounded-lg border border-violet-400/15 bg-violet-500/[0.06] px-3 py-2 text-sm text-gray-300">
                  {item.period}
                </span>
              </div>

              <p className="mt-6 max-w-4xl leading-8 text-gray-400">
                {item.description}
              </p>

              {/* Technology tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-violet-400/10 bg-violet-400/[0.06] px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-violet-400/30 hover:text-violet-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
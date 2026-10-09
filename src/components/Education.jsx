
import {
  GraduationCap,
  CalendarDays,
  BookOpen,
} from 'lucide-react'

const education = [
  {
    degree: 'M.Sc.',
    field: 'Mathematics',
    institute: 'Mahatma Gandhi Kashi Vidyapith',
    year: '',
  },
  {
    degree: 'B.Sc.',
    field: 'Mathematics, Physics, Chemistry',
    institute: 'Mahatma Gandhi Kashi Vidyapith',
    year: '',
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Academic Background
            <span className="text-violet-400">.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            My academic journey has helped me develop analytical thinking,
            problem-solving, and technical knowledge.
          </p>
        </div>

        <div className="relative mt-12 space-y-5">
          {education.map((item, index) => (
            <article
              key={item.degree}
              className="group relative overflow-hidden rounded-2xl border border-violet-400/15 bg-[#171324] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20 sm:p-8"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-400 to-fuchsia-400 opacity-70" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  {index === 1 ? (
                    <BookOpen size={27} />
                  ) : (
                    <GraduationCap size={29} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <p className="text-sm font-medium text-violet-300">
                        {item.degree}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {item.field}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
                        {item.institute}
                      </p>
                    </div>

                    {item.year && (
                      <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-violet-400/15 bg-violet-500/[0.06] px-3 py-2 text-sm text-gray-300">
                        <CalendarDays
                          size={16}
                          className="text-violet-300"
                        />
                        {item.year}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
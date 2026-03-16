import CardSwap, { Card } from './CardSwap/CardSwap'

const projects = [
  {
    title: 'Bay Canteen backend',
    description: 'A backend for a meal voting system used by students to choose daily canteen menus.',
    repo: 'https://github.com/seangDarong/meal-voting-system-backend.git',
    tech: ['Node.js', 'Express', 'MySQL', 'REST API']
  },
  {
    title: 'LockedIn frontend',
    description: 'A productivity mobile app frontend focused on task flow, routines, and clean user experience.',
    repo: 'https://github.com/rscbpch/lockedin_frontend.git',
    tech: ['Flutter', 'Dart', 'Provider', 'Firebase']
  },
  {
    title: 'CVDSim Flutter App',
    description: 'A simulation app that helps users understand how people with color vision deficiency perceive interfaces.',
    repo: 'https://github.com/seangDarong/FlutterProject-CVDSim.git',
    tech: ['Flutter', 'Dart', 'Accessibility', 'UI Design']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f7f7ef] px-6 py-18 sm:px-10 lg:px-14">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 className="mb-4 font-fraunces text-[clamp(2.4rem,7vw,4.2rem)] font-bold leading-[0.92] text-[#EC4C4E]">
            Projects
          </h2>
          <p className="mb-8 text-base text-black/85 sm:text-lg">
            Here are a few of my recent projects. Click any card link to view the repository on GitHub.
          </p>
          <a
            href="https://github.com/seangDarong"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-2xl border border-[#EC4C4E] bg-[#EC4C4E] px-6 py-2.5 text-base text-white transition hover:bg-[#d63d3f]"
          >
            View my Github
          </a>
        </div>

        <div className="relative mx-auto h-97.5 w-full max-w-130 sm:h-115 lg:mx-0">
          <CardSwap
            width="min(88vw, 420px)"
            height="290px"
            cardDistance={48}
            verticalDistance={54}
            delay={5000}
            pauseOnHover={false}
          >
            {projects.map((project) => (
              <Card key={project.title}>
                <div className="flex h-full flex-col p-6">
                  <h3 className="mb-2 text-center text-xl font-semibold text-black">{project.title}</h3>
                  <p className="mb-4 text-center text-sm text-black/80">{project.description}</p>

                  <div className="mb-5 flex flex-wrap justify-center gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#EC4C4E]/30 bg-[#EC4C4E]/10 px-2.5 py-1 text-xs font-medium text-[#B63B3D]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-center text-sm font-medium text-[#EC4C4E] underline underline-offset-4 hover:text-[#c73c3e]"
                  >
                    View Repo
                  </a>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  )
}
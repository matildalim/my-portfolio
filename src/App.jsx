import ProjectCard from './components/ProjectCard'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Writing', href: '#writing' },
  { label: 'About', href: '#about' },
]

const projects = [
  {
    title: 'CaseConnect / ComLink+',
    subtitle:
      'Designing policy-sensitive workflow tools for coordination, access, and case participation across agencies.',
    meta: 'GovTech Singapore',
    tags: ['Workflow Design', 'Service Ops', 'Permissions'],
  },
  {
    title: 'Transformation Dashboard',
    subtitle:
      'Designing a progress dashboard that helps stakeholders track workstreams, milestones, and risks more clearly.',
    meta: 'Dashboard / Information Design',
    tags: ['Dashboards', 'Systems Thinking', 'Decision Support'],
  },
  {
    title: 'SBS Transit Hackathon',
    subtitle:
      'Rapidly prototyping an operational concept under time pressure using systems thinking and iterative experimentation.',
    meta: 'Hackathon Prototype',
    tags: ['Rapid Prototyping', 'Mobility', 'Concept Design'],
  },
]

export default function App() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#24364b]">
      <div className="mx-auto w-full max-w-[920px] px-10 pb-24 pt-12">
        <header className="mb-20 grid grid-cols-[320px_1fr] items-start gap-12">
          <section>
            <div className="mb-6 h-24 w-24 overflow-hidden rounded-full bg-[#d9d9d4] shadow-sm" />

            <h1 className="text-[3rem] leading-[1.02] font-semibold tracking-[-0.04em]">
              Mat
            </h1>

            <p className="mt-3 text-[1.15rem] text-[#5f6f7f]">
              UX Designer / Product Thinker / Systems Builder
            </p>

            <p className="mt-6 max-w-[300px] text-[1.02rem] leading-8 text-[#536272]">
              I design for complex workflows, service systems, and operational
              clarity — especially where ambiguity, constraints, and real-world
              mess shape the experience.
            </p>

            <div className="mt-8 flex items-center gap-4 text-sm text-[#536272]">
              <a href="#">LinkedIn</a>
              <a href="#">Resume</a>
              <a href="#">Email</a>
            </div>
          </section>

          <nav className="flex items-center justify-end gap-10 pt-4 text-[1rem] text-[#596979]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#24364b]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section id="work" className="mb-16">
          <h2 className="mb-4 text-[2rem] font-semibold tracking-[-0.03em]">
            Selected Work
          </h2>
          <p className="max-w-[660px] text-[1rem] leading-8 text-[#5d6c7b]">
            A small selection of projects across public sector workflows,
            dashboards, and rapid prototyping. The emphasis here is on how I
            structure complex problems, not just how I polish screens.
          </p>
        </section>

        <section className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>

        <section id="experiments" className="mt-20 border-t border-[#e5e2db] pt-10">
          <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em]">
            Experiments
          </h3>
          <p className="mt-4 max-w-[700px] text-[1rem] leading-8 text-[#5d6c7b]">
            A future section for smaller prototypes, product assessments, and
            explorations that show how I think through problems under tighter
            constraints.
          </p>
        </section>

        <section id="writing" className="mt-20 border-t border-[#e5e2db] pt-10">
          <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em]">
            Writing
          </h3>
          <p className="mt-4 max-w-[700px] text-[1rem] leading-8 text-[#5d6c7b]">
            Notes on ambiguity, product thinking, service systems, dashboards,
            and designing in policy-sensitive contexts.
          </p>
        </section>

        <section id="about" className="mt-20 border-t border-[#e5e2db] pt-10">
          <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em]">
            About
          </h3>
          <p className="mt-4 max-w-[700px] text-[1rem] leading-8 text-[#5d6c7b]">
            This portfolio is intentionally quiet: desktop-first, narrow, and
            reading-oriented. It is meant to feel like a curated dossier rather
            than a gallery of glossy rectangles trying to win a startup beauty
            pageant.
          </p>
        </section>
      </div>
    </main>
  )
}
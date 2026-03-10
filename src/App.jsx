import { Routes, Route } from 'react-router-dom'
import ProjectCard from './components/ProjectCard'
import CustomCursor from './components/CustomCursor'
import ProtectedCaseStudy from './pages/ProtectedCaseStudy'
import ProtectedPMCaseStudy from './pages/ProtectedPMCaseStudy'

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
      'Designing policy-sensitive case management workflow tools for coordination, access, and case participation across agencies.',
    meta: 'GovTech Singapore | Protected Case Study',
    tags: ['UX Design', 'State Handling', 'Permissions Logic'],
    emoji: '🧩',
    href: '/work/caseconnect',
    protectedLabel: true,
  },
  {
    title: 'PermitsSG Modernisation',
    subtitle:
      'A product manager take-home assignment focused on de-risking the modernisation of a legacy government permits platform through structured discovery, phased delivery, and clear execution logic.',
    meta: 'GovTech Consulting PM Take-Home | Protected Mock Case Study',
    tags: ['Systems Thinking', 'Phasing Strategy', 'Product Requirements'],
    emoji: '🏛️',
    href: '/work/permits-sg',
    protectedLabel: true,
  },
  {
    title: 'Project Bus',
    subtitle:
      'Designed and built a load-adaptive acceleration system in a 1-week hackathon, delivering a web MVP that provides real-time driver guidance and fleet analytics using passenger-load data.',
    meta: 'SBS Transit Hackathon 2025 | 3rd Place',
    tags: ['Problem Thinking', 'Design Strategy', 'Rapid Prototyping'],
    emoji: '🚌',
    href: 'https://drive.google.com/file/d/1m8_gdOhBFChNBCtUZ5MDOf9cqt9XEsBd/view?usp=sharing',
  },
  {
    title: 'FoundIt',
    subtitle:
      'Framing lost-and-found as a trust and recovery problem, then prototyping a QR-enabled mobile experience that reduces friction, stress, and uncertainty for both owners and finders.',
    meta: 'UX Prototyping Project',
    tags: ['Problem Framing', 'Trust & Safety', 'UX Strategy'],
    emoji: '🔎',
    href: 'https://matildalim.framer.website/case-study/foundit',
  },
]

function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#001666]">
      <div className="mx-auto w-full max-w-[860px] px-4 pb-20 pt-10">
        <header className="mb-16 grid grid-cols-[270px_1fr] items-start gap-10">
          <section>
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#d9d9d4] text-[1.8rem] shadow-sm">
              🧭
            </div>

            <h1 className="text-[2.2rem] leading-[1.02] font-semibold tracking-[-0.04em]">
              Matilda Lim
            </h1>

            <p className="mt-2 text-[0.95rem] text-[#5f6f7f]">
              UX Design Intern @ GovTech Singapore
            </p>

            <p className="mt-4 max-w-[285px] text-[0.95rem] leading-[1.65] text-[#536272]">
              Passionate about solving problems with design and code (✿◠ᴗ◠)
            </p>

            <div className="mt-6 flex items-center gap-5 text-[0.95rem] text-[#536272]">
              <a
                href="https://www.linkedin.com/in/matildalim/"
                target="_blank"
                rel="noreferrer"
                className="inline-block transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.02] hover:text-[#24364b]"
              >
                LinkedIn
              </a>

              <a
                href="https://drive.google.com/file/d/1jK2i61bUSs0Z50-drqDOB2HW_x9i_rlo/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-block transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.02] hover:text-[#24364b]"
              >
                Resume
              </a>

              <a
                href="mailto:matildalimyingxin@gmail.com"
                className="inline-block transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.02] hover:text-[#24364b]"
              >
                Email
              </a>
            </div>
          </section>

          <nav className="flex items-center justify-end gap-8 pt-2 text-[0.95rem] text-[#596979]">
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

        <section id="work" className="mb-10">
          <h2 className="mb-3 text-[1.5rem] font-semibold tracking-[-0.03em]">
            Selected Work
          </h2>
          <p className="max-w-[620px] text-[0.95rem] leading-[1.8] text-[#5d6c7b]">
            A small selection of projects across public sector workflows,
            product thinking, and rapid prototyping. The emphasis here is on how
            I frame complex problems, define scope, and design for real-world
            constraints.
          </p>
        </section>

        <section className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>

        <section
          id="experiments"
          className="mt-20 border-t border-[#e5e2db] pt-10"
        >
          <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em]">
            Experiments
          </h3>
          <p className="mt-4 max-w-[700px] text-[1rem] leading-8 text-[#5d6c7b]">
            A future section for smaller prototypes, product assessments, and
            explorations that show how I think through problems under tighter
            constraints.
          </p>
        </section>

        <section
          id="writing"
          className="mt-20 border-t border-[#e5e2db] pt-10"
        >
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

export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/caseconnect" element={<ProtectedCaseStudy />} />
        <Route path="/work/permits-sg" element={<ProtectedPMCaseStudy />} />
      </Routes>
    </>
  )
}
import { Routes, Route } from 'react-router-dom'
import ProjectCard from './components/ProjectCard'
import CustomCursor from './components/CustomCursor'
import ProtectedCaseStudy from './pages/ProtectedCaseStudy'
import ProtectedPMCaseStudy from './pages/ProtectedPMCaseStudy'
import BoundTogetherCaseStudy from './pages/BoundTogetherCaseStudy'

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Tater Tots', href: '#Tater Tots' },
  { label: 'About', href: '#about' },
]

const experienceItems = [
  {
    year: '2026',
    org: 'GovTech Singapore',
    role: 'UX Design Intern',
  },
  {
    year: '2025',
    org: 'TechFin Global',
    role: 'Digital Marketing Intern',
  },
  {
    year: '2025',
    org: "People's Association",
    role: 'Digital Transformation Intern',
  },
  {
    year: '2021',
    org: "Kopi Date",
    role: 'Experience Design Intern',
  },
  {
    year: '2020',
    org: "Ministry of Social and Family Development (Singapore Girls' Home)",
    role: 'Social Work Intern',
  },
    {
    year: '2020',
    org: "Montfort Care (Marine Parade Family Service Centre)",
    role: 'Social Work Intern',
  },
]

const productUXProjects = [
  // {
  //   title: 'GatherSG Social Track: CaseConnect / ComLink+',
  //   label: 'Protected case study',
  //   subtitle:
  //     'Designing policy-sensitive case management workflow tools for coordination, access, and case participation across agencies.',
  //   meta: 'GovTech Singapore',
  //   tags: ['UX Design', 'State Handling', 'Permissions Logic'],
  //   href: '/work/caseconnect',
  //   protectedLabel: true,
  // },
  {
    title: 'PermitsSG Modernisation',
    label: '✍🏼 PM take-home',
    subtitle:
      'A product manager take-home assignment focused on de-risking the modernisation of a legacy government permits platform through structured discovery, phased delivery, and clear execution logic.',
    meta: 'GovTech Consulting | Protected mock case study',
    tags: ['Systems Thinking', 'Phasing Strategy', 'Product Requirements'],
    href: '/work/permits-sg',
    protectedLabel: true,
  },
  {
    title: 'Project Bus',
    label: '💡 Hackathon',
    subtitle:
      'Designed and built a load-adaptive acceleration system in a 1-week hackathon, delivering a web MVP that provides real-time driver guidance and fleet analytics using passenger-load data.',
    meta: 'SBS Transit Hackathon 2025 | 3rd Place',
    tags: ['Problem Thinking', 'Design Strategy', 'Rapid Prototyping'],
    href: 'https://drive.google.com/file/d/1m8_gdOhBFChNBCtUZ5MDOf9cqt9XEsBd/view?usp=sharing',
  },
  {
    title: 'FoundIt',
    label: '🧩 Original UX project',
    subtitle:
      'Framing lost-and-found as a trust and recovery problem, then prototyping a QR-enabled mobile experience that reduces friction, stress, and uncertainty for both owners and finders.',
    meta: 'Independent concept | UX prototype',
    tags: ['Problem Framing', 'Trust & Safety', 'UX Strategy'],
    href: 'https://matildalim.framer.website/case-study/foundit',
  },
]

const interactiveMotionProjects = [
  {
    title: 'Bound Together',
    label: '🕹️ Co-op game',
    subtitle:
      'A solo-designed two-player interactive experience exploring emotional connection through motion, proximity, and environmental feedback.',
    meta: '12-week solo build',
    tags: ['Interaction Design', 'Motion Design', 'Game UX'],
    href: '/work/bound-together',
  },
]

function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#001666]">
      <div className="mx-auto w-full max-w-[860px] px-5 pb-16 pt-8 sm:px-6 md:px-8 md:pb-20 md:pt-10">
        <header className="mb-14 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-[270px_1fr] md:items-start md:gap-10">
          <section>
            <div className="mb-3 text-[1.2rem] leading-none text-[#f258fd]">
              (✿◠ᴗ◠)
            </div>

            <h1 className="text-[2.2rem] leading-[1.02] font-semibold tracking-[-0.04em]">
              Matilda Lim
            </h1>

            <p className="mt-2 text-[0.95rem] text-[#1d3348]">
              UX Design Intern @ GovTech Singapore
            </p>

            <p className="mt-4 max-w-[340px] text-[0.95rem] leading-[1.7] text-[#1d3348] md:max-w-[285px]">
              Passionate about solving problems with design and code 🐰
            </p>

            <div className="mt-6 flex items-center gap-5 text-[0.95rem] text-[#1d3348]">
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

          <nav className="flex flex-wrap items-center gap-5 pt-1 text-[0.92rem] text-[#596979] md:justify-end md:gap-8 md:pt-2 md:text-[0.95rem]">
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

        <section id="experience" className="mb-10 border-t border-[#e5e2db] pt-10">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr] md:gap-10">
    <div>
      <h2 className="text-[1.5rem] font-semibold tracking-[-0.03em]">
        Experience
      </h2>
    </div>

    <div className="space-y-5">
      {experienceItems.map((item) => (
        <div
          key={`${item.year}-${item.org}`}
          className="border-b border-[#eee9e2] pb-5 last:border-b-0 last:pb-0"
        >
          {/* Mobile */}
          <div className="space-y-1 md:hidden">
            <p className="text-[0.92rem] text-[#8d97a2]">{item.year}</p>
            <p className="text-[1rem] font-medium text-[#24364b]">{item.org}</p>
            <p className="text-[0.95rem] leading-[1.7] text-[#8d97a2]">
              {item.role}
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-[72px_1.2fr_1fr] md:gap-x-4 md:text-[0.95rem] md:leading-[1.7]">
            <span className="text-[#8d97a2]">{item.year}</span>
            <span className="text-[#24364b]">{item.org}</span>
            <span className="text-[#8d97a2] md:text-right">{item.role}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        <div className="mb-12 border-t border-[#e5e2db]" />

        <section id="work" className="mb-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
            <div>
              <h2 className="mb-3 text-[1.5rem] font-semibold tracking-[-0.03em]">
                Selected Work
              </h2>
              <p className="max-w-[620px] text-[0.93rem] leading-[1.75] text-[#1d3348] md:text-[0.95rem] md:leading-[1.8]">
                A small selection of projects. The emphasis here is on how I
                frame complex problems, define scope, and design for real-world
                constraints.
              </p>
            </div>

            <a
              href="https://matildalim.framer.website/"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 border-b border-transparent pb-[2px] text-[0.92rem] text-[#5f6e7d] transition duration-150 ease-out hover:border-[#b8c0c8] hover:-translate-y-[1px] hover:text-[#24364b]"
            >
              View all works ↗
            </a>
          </div>
        </section>

        <section className="space-y-12">
          <div>
            <div className="mb-5">
              <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[#001666]">
                Product / UX
              </h3>
              <p className="mt-1 text-[0.92rem] leading-[1.7] text-[#5f6e7d]">
                Product, UX, and systems-focused projects.
              </p>
            </div>

            <div className="space-y-6">
              {productUXProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5">
              <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[#001666]">
                Interactive / Motion / Games
              </h3>
              <p className="mt-1 text-[0.92rem] leading-[1.7] text-[#5f6e7d]">
                Experiments in interaction, motion, and emotionally legible
                systems.
              </p>
            </div>

            <div className="space-y-6">
              {interactiveMotionProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* <section
          id="experiments"
          className="mt-20 border-t border-[#e5e2db] pt-10"
        >
          <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em]">
            Experiments
          </h3>
          <p className="mt-4 max-w-[700px] text-[1rem] leading-8 text-[#1d3348]">
            A future section for smaller prototypes, product assessments, and
            explorations that show how I think through problems under tighter
            constraints.
          </p>
        </section> */}

        <section
          id="Tater Tots"
          className="mt-20 border-t border-[#e5e2db] pt-10"
        >
          <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em]">
            AI’s little theory of me
          </h3>
          <p className="mt-4 max-w-[700px] text-[1rem] leading-8 text-[#1d3348]">
            I like strawberry matcha, but not matcha. This is apparently a valid
            personality type.

            I enjoy things that are matcha-adjacent, but not matcha itself. A
            fraud, but a consistent one.

            I like interfaces that feel polite.

            I trust quiet apps more than loud ones.

            I notice when a button feels emotionally incorrect.

            I like cute things, but only if they are a little restrained and not
            begging for attention.

            I think color can either calm a person down or make them feel
            slightly lied to.

            I have strong feelings about softness, spacing, and whether
            something feels too eager.

            I like tiny details that make people feel safer, even if they never
            consciously notice them.

            I think some products should feel like a helpful librarian, not an
            overfriendly intern.

            I enjoy systems that make people feel less embarrassed for being
            human.

            I am drawn to things that are gentle, orderly, and a little strange.

            I think being observant is underrated and often mistaken for being
            quiet.

            I like when something is cute but still composed.

            I probably care too much about whether a digital experience feels
            emotionally tidy.
          </p>
        </section>

        <section id="about" className="mt-20 border-t border-[#e5e2db] pt-10">
          <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em]">
            About
          </h3>
          <p className="mt-4 max-w-[700px] text-[1rem] leading-8 text-[#1d3348]">
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
        <Route
          path="/work/bound-together"
          element={<BoundTogetherCaseStudy />}
        />
      </Routes>
    </>
  )
}
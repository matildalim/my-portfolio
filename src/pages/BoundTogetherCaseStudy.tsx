import poster from '../assets/bound-together/poster.jpg'
import zone1 from '../assets/bound-together/zone-1.jpg'
import zone2 from '../assets/bound-together/zone-2.jpg'
import zone3 from '../assets/bound-together/zone-3.jpg'
import zone4 from '../assets/bound-together/zone-4.jpg'
import zone5 from '../assets/bound-together/zone-5.jpg'
import zone6 from '../assets/bound-together/zone-6.jpg'

function CaseStudyImage({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <div className="mb-10 space-y-3">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-2xl border border-[#e5e2db] bg-black"
      />
      <p className="max-w-[720px] text-[0.92rem] leading-[1.7] text-[#5f6e7d]">
        {caption}
      </p>
    </div>
  )
}

function PhaseBlock({
  phase,
  title,
  items,
}: {
  phase: string
  title: string
  items: string[]
}) {
  return (
    <div className="grid gap-4 border-t border-[#e5e2db] py-8 md:grid-cols-[220px_1fr] md:gap-8">
      <div>
        <p className="text-[0.92rem] font-semibold text-[#001666]">{phase}</p>
        <h3 className="mt-1 text-[1rem] leading-[1.5] font-semibold text-[#1d3348]">
          {title}
        </h3>
      </div>

      <ul className="space-y-3 text-[0.98rem] leading-[1.8] text-[#1d3348]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f258fd]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function BoundTogetherCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#001666]">
      <div className="mx-auto w-full max-w-[860px] px-5 pb-16 pt-8 sm:px-6 md:px-8 md:pb-20 md:pt-10">
        <a
          href="/"
          className="mb-8 inline-block text-[0.95rem] text-[#5f6e7d] transition hover:text-[#24364b]"
        >
          ← Back home
        </a>

        <header className="mb-12">
          <p className="mb-3 text-[0.95rem] text-[#f258fd]">
            🔗 Interaction Design / Motion / Game UX
          </p>

          <h1 className="text-[2.2rem] leading-[1.05] font-semibold tracking-[-0.04em]">
            Bound Together
          </h1>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-[1.8] text-[#1d3348]">
            A two-player, non-verbal game exploring emotional connection through
            motion, proximity, and environmental response.
          </p>
           <div className="mt-6 flex items-center gap-5 text-[0.95rem] text-[#1d3348]">
            <a
            href="https://drive.google.com/file/d/1rUCkMMGdMWNtnSEBPZvoER-hyLlHa04G/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-block transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.02] hover:text-[#24364b]"
            >
            Visit Report
            </a>

            <a
            href="https://www.youtube.com/watch?v=D2S9dAH1THI&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
            className="inline-block transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.02] hover:text-[#24364b]"
            >
            View Video
            </a>
        </div>
        </header>

        <section className="mb-12 grid gap-6 border-t border-[#e5e2db] pt-8 md:grid-cols-3">
          <div>
            <p className="text-[0.85rem] uppercase tracking-[0.08em] text-[#5f6e7d]">
              Role
            </p>
            <p className="mt-2 text-[0.98rem] leading-[1.7] text-[#1d3348]">
              Solo Game Designer / UX Designer / Developer
            </p>
          </div>

          <div>
            <p className="text-[0.85rem] uppercase tracking-[0.08em] text-[#5f6e7d]">
              Duration
            </p>
            <p className="mt-2 text-[0.98rem] leading-[1.7] text-[#1d3348]">
              12 weeks
            </p>
          </div>

          <div>
            <p className="text-[0.85rem] uppercase tracking-[0.08em] text-[#5f6e7d]">
              Tools
            </p>
            <p className="mt-2 text-[0.98rem] leading-[1.7] text-[#1d3348]">
              Unity, C#, GitHub
            </p>
          </div>
        </section>

        <CaseStudyImage
          src={poster}
          alt="Bound Together poster"
          caption="Poster for Bound Together, a two-player non-verbal game exploring closeness, distance, and emotional permanence through motion and shared environmental feedback."
        />

        <section className="mb-10 border-t border-[#e5e2db] pt-10">
          <h2 className="text-[1.45rem] font-semibold tracking-[-0.03em]">
            Overview
          </h2>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            Bound Together is a two-player, non-verbal game about closeness,
            distance, and the quiet effort of staying connected. Players control
            a cube and a sphere moving through an abstract void, with the
            experience unfolding through movement, proximity, and environmental
            feedback rather than dialogue or explicit narrative.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            The project began with a simple design question: how can connection
            be felt through interaction rather than explained through text?
            Instead of relying on plot, objectives, or exposition, I designed a
            progression of visual and mechanical states where movement, tethering,
            trails, pulses, and particles gradually made the relationship between
            two entities legible through play.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            As a solo 12-week build, the project required me to define the
            concept, structure the gameplay progression, implement the mechanics,
            shape the motion language, and iterate the experience into something
            cohesive and emotionally readable.
          </p>
        </section>

        <section className="mb-10 border-t border-[#e5e2db] pt-10">
          <h2 className="text-[1.45rem] font-semibold tracking-[-0.03em]">
            Design intention
          </h2>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            The central theme of the project was emotional connection. I wanted
            to translate abstract relational ideas such as longing, unity,
            distance, dependence, and quiet permanence into mechanics that
            players could feel moment to moment.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            The cube and sphere were designed as contrasting entities. The cube
            represented structure, stability, and calm. The sphere represented
            fluidity, warmth, and adaptability. Their differences were
            intentional: the goal was not to make them identical, but to show
            how contrast could still produce connection.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            Rather than telling players what the relationship meant, I wanted the
            meaning to emerge through interaction. The void, tether, trails,
            pulses, and environmental reactions all served as non-verbal signals
            that gradually transformed the emotional state of the experience.
          </p>
        </section>

        <section className="mb-10 border-t border-[#e5e2db] pt-10">
          <h2 className="text-[1.45rem] font-semibold tracking-[-0.03em]">
            What I designed
          </h2>

          <ul className="mt-4 space-y-3 text-[1rem] leading-8 text-[#1d3348]">
            <li>Defined the core emotional and interaction concept</li>
            <li>Planned the six-zone progression of mechanics and feedback</li>
            <li>Designed proximity-based movement and tether behaviour</li>
            <li>Built layered motion feedback through trails, pulses, and particles</li>
            <li>Shaped how the environment responded to relationship state</li>
            <li>Iterated the gameplay flow, clarity, and progression over 12 weeks</li>
            <li>Created the supporting GDD, visual direction, and poster design</li>
          </ul>
        </section>

        <section className="mb-10 border-t border-[#e5e2db] pt-10">
          <h2 className="text-[1.45rem] font-semibold tracking-[-0.03em]">
            Core interaction model
          </h2>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            At the heart of Bound Together is a proximity-based cooperative
            system. The players control separate entities using minimal inputs.
            When left alone, the cube and sphere drift apart. This passive drift
            was important because it made cooperation necessary without relying
            on combat, scoring, or traditional fail states.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            The experience was designed as an endless journey with no explicit
            destination. That choice shifted the game away from objective
            completion and toward relational maintenance. The central question
            was not how to beat a level, but what happens when two entities stay
            connected long enough for the world to respond.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            Because the game is sparse and non-verbal, feedback design carried
            most of the emotional and functional weight. The tether established a
            baseline bond. Trails introduced identity. Pulses made proximity
            active. Background particles externalized the impact of connection.
            The final zone made that connection feel internalized and lasting.
          </p>
        </section>

        <section className="mb-10 border-t border-[#e5e2db] pt-10">
          <h2 className="mb-6 text-[1.45rem] font-semibold tracking-[-0.03em]">
            Zone progression
          </h2>

          <h3 className="text-[1.1rem] font-semibold text-[#001666]">
            Zone 1 — The Void
          </h3>
          <p className="mt-3 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            The game begins in complete darkness. The cube and sphere occupy the
            same space, but there is no visible relationship between them and no
            feedback from the world around them. There are no trails, no
            particles, and no response to proximity. This emptiness was
            intentional. By stripping everything back at the start, later
            changes in connection and environmental response could feel earned
            rather than decorative.
          </p>

          <div className="mt-6">
            <CaseStudyImage
              src={zone1}
              alt="Zone 1 showing the cube and sphere in a dark empty void"
              caption="Zone 1 establishes isolation by removing all signs of connection, feedback, or environmental response."
            />
          </div>

          <h3 className="text-[1.1rem] font-semibold text-[#001666]">
            Zone 2 — The Tether
          </h3>
          <p className="mt-3 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            In Zone 2, the first undeniable sign of connection appears: a
            glowing tether linking the cube and sphere. The tether is stable and
            unbreakable, but not yet fully understandable. It shifts in colour
            and pulses like a heartbeat, signalling that the bond exists before
            the player fully understands how it behaves. This zone introduces
            connection as a fact of the system before it becomes something more
            actively expressed.
          </p>

          <div className="mt-6">
            <CaseStudyImage
              src={zone2}
              alt="Zone 2 showing the glowing tether between the cube and sphere"
              caption="Zone 2 introduces a stable bond through the tether, making connection visible before it becomes more reactive."
            />
          </div>

          <h3 className="text-[1.1rem] font-semibold text-[#001666]">
            Zone 3 — Traces of Identity
          </h3>
          <p className="mt-3 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            Zone 3 introduces individualized motion traces. The sphere leaves a
            shorter, softer trail, while the cube leaves a longer, more rigid
            one. At this point, the relationship stops feeling like a purely
            abstract link between generic objects and starts to feel like a bond
            between distinct identities. Their differences become visible
            without weakening the connection between them.
          </p>

          <div className="mt-6">
            <CaseStudyImage
              src={zone3}
              alt="Zone 3 showing distinct trails behind the cube and sphere"
              caption="Zone 3 layers identity into motion by giving each entity a distinct movement signature and trail."
            />
          </div>

          <h3 className="text-[1.1rem] font-semibold text-[#001666]">
            Zone 4 — The Energy Between Us
          </h3>
          <p className="mt-3 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            Zone 4 introduces the first strongly reactive system: a proximity
            bubble and outward energy pulses triggered by closeness. When the
            players move toward each other, green pulses radiate outward and a
            shared field forms around them. This was the first moment where
            connection becomes actively visible through motion rather than
            simply implied by a static link. The feedback is not just visual
            garnish; it is the system communicating that closeness now has
            consequences.
          </p>

          <div className="mt-6">
            <CaseStudyImage
              src={zone4}
              alt="Zone 4 showing proximity bubble and energy pulse effects"
              caption="Zone 4 introduces reactive motion feedback, making closeness legible through expanding pulses and a shared proximity field."
            />
          </div>

          <h3 className="text-[1.1rem] font-semibold text-[#001666]">
            Zone 5 — The Space Between Becomes Alive
          </h3>
          <p className="mt-3 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            In Zone 5, the surrounding environment begins responding to the
            players’ bond. Red particles appear in the background and move
            toward the two entities. When the players remain close, those
            particles collide, multiply, and animate the space around them. If
            they drift apart, the particles disperse and the world becomes empty
            again. This turns connection from a local interaction into a
            world-shaping system.
          </p>

          <div className="mt-6">
            <CaseStudyImage
              src={zone5}
              alt="Zone 5 showing background particles reacting to the entities"
              caption="Zone 5 extends the feedback system into the environment, showing that connection can transform the surrounding space."
            />
          </div>

          <h3 className="text-[1.1rem] font-semibold text-[#001666]">
            Zone 6 — The Connection Becomes Tangible
          </h3>
          <p className="mt-3 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            In the final zone, connection becomes self-sustaining. Each entity
            now carries a floating form of the other: the cube carries a sphere,
            and the sphere carries a cube. Earlier zones required movement and
            proximity to reveal connection. In this final state, connection has
            become internalized. The design shifts from reactive validation to a
            quieter sense of permanence.
          </p>

          <div className="mt-6">
            <CaseStudyImage
              src={zone6}
              alt="Zone 6 showing each entity carrying a floating form of the other"
              caption="Zone 6 represents connection as internalized and lasting, using object-follow behaviour to show permanence."
            />
          </div>
        </section>

        <section className="mb-10 border-t border-[#e5e2db] pt-10">
          <h2 className="text-[1.45rem] font-semibold tracking-[-0.03em]">
            Motion and feedback design
          </h2>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            One of the key lessons from this project was that motion can carry
            narrative and system meaning when it is treated as communication
            rather than decoration. In Bound Together, motion was used to show
            whether connection was absent, emerging, active, environmental, or
            permanent.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            Each new zone introduced a stronger layer of response: first a
            tether, then distinct trails, then pulses, then background
            reactivity, and finally a state where each object visibly carries a
            part of the other. That progression allowed the emotional concept to
            be expressed through increasingly responsive motion systems rather
            than explanation.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            As a design exercise, this taught me how to use animation,
            environmental state, and simple interaction rules to communicate
            something abstract in a way that still feels readable and intentional.
          </p>
        </section>

        <section className="mb-10 border-t border-[#e5e2db] pt-10">
          <h2 className="mb-2 text-[1.45rem] font-semibold tracking-[-0.03em]">
            12-week solo development process
          </h2>
          <p className="max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            I built Bound Together independently over 12 weeks, moving from
            concept and gameplay framing into implementation, feedback design,
            polish, and final submission. The structure below shows how the
            project evolved phase by phase.
          </p>

          <div className="mt-6">
            <PhaseBlock
              phase="Phase 1"
              title="Conceptualization & Planning"
              items={[
                'Finalized the core gameplay mechanic around proximity-based cooperative movement.',
                'Established the six-zone structure to create emotional and mechanical progression.',
                'Defined the thematic direction: connection and movement as communication.',
                'Identified visual and experiential inspirations such as Journey, Entwined, and Interstellar.',
                'Created an early game design document covering the basic structure and initial gameplay flow.',
              ]}
            />

            <PhaseBlock
              phase="Phase 2"
              title="Core Gameplay Implementation"
              items={[
                'Implemented player movement and the tether mechanic that kept both entities bound together.',
                'Built Zone 1 and Zone 2 as the foundation of the progression system.',
                'Added the trail system for Zone 3, with distinct visual behaviour for the cube and sphere.',
                'Ran early tests on proximity-based interactions and basic movement clarity.',
                'Prototyped background particle behaviours as early visual feedback from movement.',
              ]}
            />

            <PhaseBlock
              phase="Phase 3"
              title="Advanced Mechanics & Visual Feedback"
              items={[
                'Developed Zone 4 and Zone 5 mechanics, including the proximity bubble, energy pulse, and red particle system.',
                'Implemented environmental reactions tied to player movement and closeness.',
                'Introduced background effects and gradual world evolution across zones.',
                'Created a melodic instrumental BGM system to support the tone of the experience.',
                'Integrated supporting interface systems such as the menu, start flow, and pause state.',
                'Conducted early playtests to improve movement feel and interaction clarity.',
                'Designed and iterated the poster to align with the emotional direction of the project.',
              ]}
            />

            <PhaseBlock
              phase="Phase 4"
              title="Final Zone & Polish"
              items={[
                'Finalized Zone 6, where floating forms of each object dynamically attach to the other.',
                'Tweaked the visual and mechanical progression across all zones for smoother continuity.',
                'Improved player feedback clarity and responsiveness.',
                'Addressed bugs and stability issues across the build.',
                'Ran final playtests and refined the interaction flow.',
                'Completed the game design documentation covering zones, UI, and environmental storytelling.',
              ]}
            />

            <PhaseBlock
              phase="Phase 5"
              title="Submission Prep & Finalization"
              items={[
                'Polished the README and supporting documentation, including controls and menu behaviour.',
                'Completed final adjustments and bug fixes.',
                'Compiled the visual work schedule and development breakdown.',
                'Ensured smoother transitions and launch instructions for the final build.',
                'Prepared all deliverables for final submission.',
              ]}
            />
          </div>
        </section>

        <section className="border-t border-[#e5e2db] pt-10">
          <h2 className="text-[1.45rem] font-semibold tracking-[-0.03em]">
            Reflection
          </h2>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            Bound Together taught me how to think about interaction as an
            emotional system. Rather than treating gameplay, motion, visuals,
            and environmental feedback as separate layers, I had to make them
            reinforce one another consistently.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            It also deepened my understanding of feedback design. In a sparse
            interface, every visual response becomes meaningful. A tether, trail,
            pulse, or particle effect is not just aesthetic. It becomes part of
            the player’s understanding of state, relationship, and consequence.
          </p>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-8 text-[#1d3348]">
            As a designer, this project strengthened my ability to translate
            abstract concepts into concrete interaction systems, design motion
            progression across multiple states, and shape experiences where the
            interface remains minimal but the feedback remains emotionally and
            functionally clear.
          </p>
        </section>
      </div>
    </main>
  )
}
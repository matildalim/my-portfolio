export default function ProjectCard({ title, subtitle, meta, tags }) {
  return (
    <article className="rounded-[22px] border border-[#e6e4de] bg-[#fafaf8] px-7 py-7 shadow-[0_1px_2px_rgba(25,25,25,0.03)] transition hover:-translate-y-[1px] hover:shadow-[0_10px_25px_rgba(36,54,75,0.05)]">
      <div className="grid grid-cols-[96px_1fr] gap-5">
        <div className="h-24 w-24 rounded-2xl border border-[#ece9e2] bg-[#f0efea]" />

        <div>
          <h3 className="mb-2 text-[1.55rem] font-semibold tracking-[-0.03em] text-[#24364b]">
            {title}
          </h3>

          <p className="max-w-[620px] text-[1.02rem] leading-8 text-[#516171]">
            {subtitle}
          </p>

          <p className="mt-3 text-[0.95rem] italic text-[#7a8794]">
            {meta}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-xl border border-[#dfddd7] bg-white px-3 py-2 text-sm text-[#415366]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
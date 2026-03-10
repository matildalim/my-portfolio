export default function ProjectCard({
  title,
  subtitle,
  meta,
  tags,
  emoji,
  href,
  protectedLabel = false,
}) {
    const isExternal = href?.startsWith('http')

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <article className="rounded-[16px] border border-[#e6e4de] bg-[#fafaf8] px-5 py-5 shadow-[0_1px_2px_rgba(25,25,25,0.03)] transition duration-150 hover:-translate-y-[1px] hover:bg-[#FFD6E0] hover:shadow-[0_10px_25px_rgba(36,54,75,0.05)]">
        <div className="grid grid-cols-[76px_1fr] gap-4">
          <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[12px] border border-[#ece9e2] bg-[#f0efea] text-[2rem]">
            {emoji}
          </div>

          <div>
            <h3 className="mb-1 text-[1.05rem] font-semibold tracking-[-0.02em] text-[#24364b] transition group-hover:text-[#1d2c3d]">
              {title}
            </h3>

            <p className="max-w-[560px] text-[0.95rem] leading-[1.7] text-[#516171]">
              {subtitle}
            </p>

            <p className="mt-2 text-[0.85rem] italic text-[#7a8794]">
              {meta}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[10px] border border-[#dfddd7] bg-white px-2.5 py-1.5 text-[0.8rem] text-[#415366]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 text-[0.88rem] text-[#4f6275] transition group-hover:text-[#24364b]">
              {protectedLabel ? 'Protected work ↗' : 'View work ↗'}
            </div>
          </div>
        </div>
      </article>
    </a>
  )
}
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
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group block"
    >
      <article className="rounded-[16px] border border-[#e6e4de] bg-[#fafaf8] px-4 py-4 shadow-[0_1px_2px_rgba(25,25,25,0.03)] transition duration-150 hover:-translate-y-[1px] hover:bg-[#f9eef3] hover:shadow-[0_10px_25px_rgba(36,54,75,0.05)] md:px-5 md:py-5">
        <div className="grid grid-cols-[64px_1fr] gap-4 md:grid-cols-[76px_1fr_auto] md:items-start">
          <div className="flex h-16 w-16 items-center justify-center rounded-[12px] border border-[#ece9e2] bg-[#f0efea] text-[1.6rem] md:h-[76px] md:w-[76px] md:text-[2rem]">
            {emoji}
          </div>

          <div>
            <div className="flex flex-col gap-2 md:block">
              <h3 className="mb-0 text-[1rem] font-semibold tracking-[-0.02em] text-[#24364b] transition group-hover:text-[#1d2c3d] md:mb-1 md:text-[1.05rem]">
                {title}
              </h3>

              <p className="max-w-full text-[0.92rem] leading-[1.65] text-[#516171] md:max-w-[560px] md:text-[0.95rem] md:leading-[1.7]">
                {subtitle}
              </p>

              <p className="mt-1 text-[0.82rem] italic text-[#7a8794] md:mt-2 md:text-[0.85rem]">
                {meta}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[10px] border border-[#dfddd7] bg-white px-2.5 py-1.5 text-[0.76rem] text-[#415366] md:text-[0.8rem]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3 text-[0.86rem] text-[#4f6275] transition group-hover:text-[#24364b] md:hidden">
                {protectedLabel ? 'Protected work →' : 'View work ↗'}
              </div>
            </div>
          </div>

          <div className="hidden min-h-full items-start justify-end pl-4 md:flex">
            <div className="pt-1 text-right whitespace-nowrap text-[0.88rem] text-[#4f6275] transition group-hover:text-[#24364b]">
              {protectedLabel ? 'Protected work →' : 'View work ↗'}
            </div>
          </div>
        </div>
      </article>
    </a>
  )
}
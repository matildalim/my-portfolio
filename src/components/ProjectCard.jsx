import { Link } from 'react-router-dom'

export default function ProjectCard({
  title,
  label,
  subtitle,
  meta,
  tags,
  href,
  protectedLabel,
}) {
  const isExternal = href.startsWith('http')

  const content = (
    <article className="group rounded-[24px] border border-[#e6e0d8] bg-[#fbfaf7] p-5 transition duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(36,54,75,0.05)] sm:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1">
          {label ? (
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f8edf3] px-3 py-[8px] text-[0.78rem] font-medium leading-none text-[#7a6273]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f2bfd6]" />
                {label}
              </span>
            </div>
          ) : null}

          <h3 className="text-[1.15rem] font-semibold leading-[1.35] tracking-[-0.025em] text-[#24364b]">
            {title}
          </h3>

          <p className="mt-3 max-w-[700px] text-[1rem] leading-[1.9] text-[#586879]">
            {subtitle}
          </p>

          <p className="mt-4 text-[0.9rem] leading-[1.7] text-[#97a1ac]">
            {meta}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f3f0eb] px-3 py-[7px] text-[0.76rem] font-medium leading-none text-[#6e7883]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 text-[0.92rem] text-[#7a8794] transition group-hover:text-[#5f6e7d] md:pl-6">
          {protectedLabel ? 'Protected work →' : 'View work ↗'}
        </div>
      </div>
    </article>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    )
  }

  return (
    <Link to={href} className="block">
      {content}
    </Link>
  )
}
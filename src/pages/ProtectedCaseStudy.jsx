import { useState } from 'react'

const CASE_STUDY_PASSWORD = 'mat@case'

const FIGMA_FILE_URL =
  'https://www.figma.com/design/xWDJmz1ea2QgFBFe65OvR0/%F0%9F%94%97-Matilda-s-Archive--CCRC-?node-id=1-41824&t=j3YXTtZIViFqb8Pi-1'

const FIGJAM_URL =
  'https://www.figma.com/board/r1OFdOaKzFK8XTu855u0Tm/%F0%9F%94%97-Matilda-s-FigJam--CCRC-?node-id=0-1&t=qS5WXGX7zB1zP0UR-1'

export default function ProtectedCaseStudy() {
  const [password, setPassword] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password === CASE_STUDY_PASSWORD) {
      setUnlocked(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f5f3] px-4 py-16 text-[#24364b]">
      <div className="mx-auto max-w-[860px]">
        <a
          href="/"
          className="inline-block text-[0.9rem] text-[#667688] transition hover:-translate-y-[1px] hover:text-[#24364b]"
        >
          ← Back to portfolio
        </a>

        <section className="mt-10 rounded-[20px] border border-[#e6e4de] bg-[#fafaf8] px-7 py-8 shadow-[0_1px_2px_rgba(25,25,25,0.03)]">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[14px] border border-[#ece9e2] bg-[#f0efea] text-[1.6rem]">
            🧩
          </div>

          <h1 className="text-[1.8rem] font-semibold tracking-[-0.03em]">
            GatherSG: Case Connect (Referral and Coordination)
          </h1>

          <p className="mt-3 max-w-[640px] text-[0.98rem] leading-[1.75] text-[#5d6c7b]">
            This project contains workflow details from a policy-sensitive
            environment. A public summary is shown on the portfolio, while the
            full design materials are shared more selectively.
          </p>

          {!unlocked ? (
            <form onSubmit={handleSubmit} className="mt-6 max-w-[360px]">
              <label className="mb-2 block text-[0.9rem] text-[#5e6d7d]">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                className="w-full rounded-[12px] border border-[#ddd9d2] bg-white px-4 py-3 text-[0.95rem] text-[#24364b] outline-none transition focus:border-[#d8a7b7]"
                placeholder="Enter password"
              />

              {error ? (
                <p className="mt-3 text-[0.88rem] text-[#b35b72]">{error}</p>
              ) : null}

              <button
                type="submit"
                className="mt-5 rounded-[12px] border border-[#e3d4da] bg-[#f7e8ee] px-4 py-2.5 text-[0.92rem] text-[#24364b] transition hover:-translate-y-[1px] hover:bg-[#f3dde6]"
              >
                Unlock case study
              </button>
            </form>
          ) : (
            <div className="mt-8 space-y-6">
              <div className="rounded-[16px] border border-[#e6e4de] bg-white p-5">
                <h2 className="text-[1.1rem] font-semibold">
                  Design Workflow
                </h2>

                <p className="mt-2 max-w-[680px] text-[0.95rem] leading-[1.75] text-[#5d6c7b]">
                  A protected design archive covering policy-sensitive case
                  management workflows, role-based access, state handling, and
                  coordination flows across agencies.
                </p>

                <p className="mt-3 text-[0.88rem] text-[#7a8794]">
                  Shared in read-only mode.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={FIGMA_FILE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-[12px] border border-[#e3d4da] bg-[#f7e8ee] px-4 py-2.5 text-[0.92rem] text-[#24364b] transition hover:-translate-y-[1px] hover:bg-[#f3dde6]"
                  >
                    Open Figma file ↗
                  </a>

                  <a
                    href={FIGJAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-[12px] border border-[#e6e4de] bg-white px-4 py-2.5 text-[0.92rem] text-[#4f6275] transition hover:-translate-y-[1px] hover:bg-[#fbf7f9] hover:text-[#24364b]"
                  >
                    Open FigJam board ↗
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
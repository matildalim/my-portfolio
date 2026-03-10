import { useState } from 'react'

const CASE_STUDY_PASSWORD = 'matcase'
const FRAMER_URL = 'https://your-protected-framer-link-here'

export default function ProtectedCaseStudy() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password === CASE_STUDY_PASSWORD) {
      window.location.href = FRAMER_URL
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f5f3] px-4 py-16 text-[#24364b]">
      <div className="mx-auto max-w-[620px]">
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
            Protected case study
          </h1>

          <p className="mt-3 max-w-[540px] text-[0.98rem] leading-[1.75] text-[#5d6c7b]">
            This project contains workflow details from a policy-sensitive environment.
            A public summary is shown on the portfolio, while the full case study is
            shared more selectively.
          </p>

          <p className="mt-3 max-w-[540px] text-[0.95rem] leading-[1.75] text-[#6d7884]">
            Enter the password to continue.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
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
        </section>
      </div>
    </main>
  )
}
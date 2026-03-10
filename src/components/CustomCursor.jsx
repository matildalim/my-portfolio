import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const root = document.documentElement

    if (!cursor) return

    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) return

    root.style.cursor = 'none'

    const move = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
      root.style.cursor = ''
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      aria-hidden="true"
    >
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          marginLeft: -10,
          marginTop: -10,
          borderRadius: '50%',
          background: '#f7cfdc',
          opacity: 0.9,
          pointerEvents: 'none',
          transition: 'transform 0.05s ease-out',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
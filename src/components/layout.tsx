import * as React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageTitle, children }: { pageTitle?: string; children: React.ReactNode }) => {
  return (
    <div className="container py-8 flex flex-col min-h-screen max-sm:py-2" dir="rtl">
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-multiply left-0 top-0"
        width="100%"
        height="100%"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>

      <Header />

      <main className="py-16 max-sm:py-8">
        {pageTitle && <h1 className="font-bold mb-10 text-xl">{pageTitle}</h1>}
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout

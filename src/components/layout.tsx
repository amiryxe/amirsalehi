import * as React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageTitle, children }: { pageTitle?: string; children: React.ReactNode }) => {
  return (
    <div className="container py-8 flex flex-col min-h-screen max-sm:py-2" dir="rtl">
      <Header />

      <main className="py-16 max-sm:py-8">
        <h1>{pageTitle}</h1>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout

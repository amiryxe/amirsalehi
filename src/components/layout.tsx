import * as React from 'react'
import Header from './Header'

const Layout = ({ pageTitle, children }: { pageTitle: string; children: React.ReactNode }) => {
  return (
    <div className="container mx-auto py-8" dir="rtl">
      <Header />

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout

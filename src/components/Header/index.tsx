import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link to="/" title="صفحه اصلی">
          <StaticImage alt="Amir Salehi logo" src="../../images/logo.svg" />
        </Link>

        <div className="flex gap-8">
          <Link to="/about">درباره من</Link>

          <Link to="/articles">مقاله‌ها</Link>

          <Link to="/cv">رزومه</Link>

          <Link to="/projects">پروژه‌ها</Link>

          <Link to="/learning">آموزش</Link>
        </div>
      </div>

      <div>
        <Link to="/contact" className="btn-primary">
          تماس با من
        </Link>
      </div>
    </nav>
  )
}

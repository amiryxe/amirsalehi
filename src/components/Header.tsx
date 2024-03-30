import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link to="/" title="صفحه اصلی">
          <StaticImage alt="Amir Salehi logo" src="../images/logo.svg" />
        </Link>

        <div className="flex gap-4">
          <Link to="/about" className="btn-link">
            درباره من
          </Link>

          <Link to="/articles" className="btn-link">
            مقاله‌ها
          </Link>

          <Link to="/cv" className="btn-link">
            رزومه
          </Link>

          <Link to="/projects" className="btn-link">
            پروژه‌ها
          </Link>

          <Link to="/learning" className="btn-link">
            آموزش
          </Link>
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

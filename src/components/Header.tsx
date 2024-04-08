import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/svg/logo.svg'

export default function Header() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link to="/" title="صفحه اصلی">
          <Logo className="dark:fill-white" />
        </Link>

        <div className="flex gap-4">
          <Link to="/about" className="btn-link">
            درباره من
          </Link>

          <Link to="/blog" className="btn-link">
            بلاگ
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

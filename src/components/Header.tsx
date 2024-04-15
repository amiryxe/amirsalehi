import * as React from 'react'
import { Link } from 'gatsby'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

import Logo from '../images/svg/logo.svg'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>()

  React.useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  })

  const toggleTheme = () => {
    const current = localStorage.getItem('theme')

    if (current === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDarkMode(true)
    }
  }

  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-10">
        <Link to="/" title="صفحه اصلی">
          <Logo className="dark:fill-white hover:fill-lime-500 transition-all duration-100 max-sm:w-24" />
        </Link>

        <div className="flex gap-3 items-center">
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

          <Link to="/about" className="btn-link">
            درباره من
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button type="button" className="p-3" onClick={toggleTheme}>
          {isDarkMode ? <SunIcon className="h-5" /> : <MoonIcon className="h-5" />}
        </button>

        <Link to="/contact" className="btn-primary">
          تماس با من
        </Link>
      </div>
    </nav>
  )
}

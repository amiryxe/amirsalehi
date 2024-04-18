import * as React from 'react'
import { Link } from 'gatsby'
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Logo from '../images/svg/logo.svg'

const menuItems = [
  {
    title: 'بلاگ',
    path: '/blog',
  },
  {
    title: 'رزومه',
    path: '/cv',
  },
  {
    title: 'پروژه‌ها',
    path: '/projects',
  },
  {
    title: 'ویدئوها',
    path: '/videos',
  },
  {
    title: 'درباره من',
    path: '/about',
  },
]

export default function Header() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>()
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)

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
          <Logo className="dark:fill-white hover:fill-lime-500 transition-all duration-100 max-lg:w-20" />
        </Link>

        <div className="flex gap-3 items-center max-md:hidden max-lg:gap-2">
          {menuItems.map((item) => (
            <Link key={item.title} to={item.path} className="btn-link">
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 max-md:gap-3">
        <button type="button" className="p-3 max-md:p-2" onClick={toggleTheme}>
          {isDarkMode ? <SunIcon className="h-5" /> : <MoonIcon className="h-5" />}
        </button>

        <Link to="/contact" className="btn-primary max-md:text-sm max-md:px-2">
          تماس با من
        </Link>

        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Bars3Icon className="h-6 pr-1 hidden max-md:block" />
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 w-full h-screen bg-slate-900/50 z-10 backdrop-blur-[2px]`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 h-screen bg-slate-900/90 z-10 duration-300 w-3/4 text-white`}
      >
        <button type="button" className="text-white p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <XMarkIcon className="h-6" />
        </button>

        <div className="flex flex-col gap-4 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="btn-link text-center text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

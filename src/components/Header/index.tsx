import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <nav className="flex justify-between">
      <div className="flex items-center gap-8">
        <StaticImage alt="Amir Salehi logo" src="../../images/logo.svg" />

        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div>
        <Link to="/contact" className="btn-primary">
          Contact
        </Link>
      </div>
    </nav>
  )
}

import * as React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/svg/logo.svg'

export default function Footer() {
  return (
    <div className="mt-auto pt-8 border-t flex justify-between items-center">
      <p className="font-light text-sm">© 2024. تمامی حقوق محفوظ است</p>

      <div className="group">
        <Link to="/" title="صفحه اصلی" className="flex flex-col items-end ">
          <Logo
            width={64}
            height={24}
            className="group-hover:fill-lime-500 transition-all duration-100 dark:fill-white"
          />

          <span className="font-bold font-mono text-xs group-hover:text-lime-500 transition-all duration-100">
            AmirSalehi.ir
          </span>
        </Link>
      </div>
    </div>
  )
}

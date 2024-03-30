import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
  return (
    <div className="mt-auto pt-8 border-t flex justify-between items-center">
      <p className="font-light text-sm">© 2024. تمامی حقوق محفوظ است</p>

      <div>
        <Link to="/" title="صفحه اصلی" className="flex flex-col items-end">
          <StaticImage alt="Amir Salehi logo" src="../images/logo.svg" height={24} />
          <span className="font-bold font-mono text-xs">AmirSalehi.ir</span>
        </Link>
      </div>
    </div>
  )
}

import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Skills } from './Skills'

export default function MainBanner() {
  return (
    <div
      className="relative isolate sm:px-12 px-4 flex max-sm:flex-col justify-between items-center max-sm:my-8"
    >
      <div className="flex flex-col sm:gap-5 gap-3 sm:w-[28rem] max-sm:text-center">
        <h1 className="sm:text-3xl text-xl">
          سلام! من <strong className="font-extrabold">امیر</strong> هستم 👋
        </h1>

        <p className="sm:text-2xl text-gray-700 dark:text-gray-300">
          یک{' '}
          <strong className="font-extrabold text-lime-900 dark:text-lime-500">
            توسعه‌دهنده نرم‌افزار
          </strong>{' '}
          علاقه‌مند به دنیای جاوااسکریپت که بیشتر تجربه‌ام در زمینه‌ی توسعه و طراحی پروژه‌های تحت وب
          بوده
        </p>
      </div>

      <div className="relative max-sm:mt-6">
        {/* Very soft, edge-less glow behind the portrait */}
        <div
          aria-hidden="true"
          className="absolute -z-10 left-1/2 bottom-0 -translate-x-1/2 w-[110%] h-2/3 rounded-full bg-lime-200/50 blur-[90px] dark:bg-lime-400/10"
        />
        <StaticImage src="../images/amir.png" alt="امیر صالحی" quality={85} width={420} />
      </div>
    </div>
  )
}

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
        {/* Soft glow + circle behind the portrait */}
        <div
          aria-hidden="true"
          className="absolute -z-10 left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full bg-lime-300/40 blur-3xl dark:bg-lime-400/15"
        />
        <div
          aria-hidden="true"
          className="absolute -z-10 left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-square rounded-full bg-gradient-to-tr from-lime-200 via-lime-100 to-emerald-100 ring-1 ring-lime-300/60 dark:from-lime-500/25 dark:via-lime-400/10 dark:to-emerald-400/10 dark:ring-lime-400/20"
        />
        <StaticImage src="../images/amir.png" alt="امیر صالحی" quality={85} width={420} />
      </div>
    </div>
  )
}

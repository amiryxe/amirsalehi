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
        {/* Dot grid pattern behind the portrait, fading out at the edges */}
        <div
          aria-hidden="true"
          className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[110%] text-lime-700/45 dark:text-lime-400/30"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1.6px, transparent 1.6px)',
            backgroundSize: '18px 18px',
            maskImage: 'radial-gradient(ellipse at center, #000 35%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, #000 35%, transparent 70%)',
          }}
        />
        <StaticImage src="../images/amir.png" alt="امیر صالحی" quality={85} width={420} />
      </div>
    </div>
  )
}

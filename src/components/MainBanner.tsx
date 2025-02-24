import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Skills } from './Skills'

export default function MainBanner() {
  return (
    <div
      className="relative sm:px-12 px-4 flex max-sm:flex-col justify-between items-center 
    before:-z-10 before:bg-main before:w-3/4 before:rounded-sm 
    before:h-[200px] before:absolute before:top-[50%] before:left-0 before:-translate-y-1/2 max-md:before:hidden max-sm:my-8"
    >
      <div className="flex flex-col sm:gap-5 gap-3 sm:w-[28rem] max-sm:text-center">
        <h1 className="sm:text-3xl text-xl">
          سلام! من <strong className="font-extrabold">امیر</strong> هستم 👋
        </h1>

        <h3 className="sm:text-2xl text-gray-700 dark:text-gray-300">
          یک{' '}
          <strong className="font-extrabold text-lime-900 dark:text-lime-500">
            توسعه‌دهنده نرم‌افزار
          </strong>{' '}
          علاقه‌مند به دنیای جاوااسکریپت که بیشتر تجربه‌ام در زمینه‌ی توسعه و طراحی پروژه‌های تحت وب
          بوده
        </h3>
      </div>

      <StaticImage
        src="../images/amir.png"
        alt="amir pic"
        quality={100}
        width={420}
        className="max-sm:mt-6"
      />
    </div>
  )
}

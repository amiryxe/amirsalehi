import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export default function MainBanner() {
  return (
    <div className="relative px-12 flex justify-between items-center before:-z-10 before:bg-main before:w-3/4 before:h-[200px] before:absolute before:top-[50%] before:left-0 before:-translate-y-1/2">
      <div className="flex flex-col gap-5 w-[28rem]">
        <h2 className="text-3xl">
          سلام! من <strong className="font-extrabold">امیر</strong> هستم
        </h2>

        <h3 className="text-2xl font-normal text-gray-600 dark:text-gray-300">
          یک{' '}
          <strong className="font-extrabold text-lime-900 dark:text-lime-500">
            توسعه‌دهنده نرم‌افزار
          </strong>{' '}
          علاقه‌مند به دنیای جاوااسکریپت که بیشتر تجربه‌ام در زمینه‌ی توسعه و طراحی پروژه‌های تحت وب
          بوده
        </h3>
      </div>

      <StaticImage src="../images/amir.png" alt="amir pic" quality={100} />
    </div>
  )
}

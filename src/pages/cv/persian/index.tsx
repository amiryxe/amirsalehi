import * as React from 'react'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

export default function PersianCV() {
  return (
    <Layout>
      <div className="bg-white text-black p-6">
        <header className="flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <StaticImage src="../../../images/amir-circle.png" alt="amir pic" quality={100} />

            <div>
              <h1 className="font-black text-2xl">امیر صالحی</h1>
              <h2>توسعه‌دهنده نرم‌افزارهای تحت وب</h2>
            </div>
          </div>

          <div className="text-left text-sm font-normal">
            <h4 className="after:content-['-'] after:mr-1">متولد ۱۳۷۳</h4>
            <h4 className="after:content-['-'] after:mr-1">ساکن اصفهان</h4>
            <h4 className="after:content-['-'] after:mr-1">متاهل</h4>
            <h4 className="after:content-['-'] after:mr-1">معافیت کفالت</h4>
          </div>
        </header>

        <ul className="flex justify-between px-2 py-4 font-mono max-lg:flex-wrap" dir="ltr">
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <a href="tel:+989390483748">09390483748</a>
          </li>

          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <a href="mailto:amiryxe@gmail.com">amiryxe@gmail.com</a>
          </li>

          <li className="flex items-center gap-2">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <rect
                width="132"
                height="132"
                x="30"
                y="30"
                stroke="#000000"
                stroke-width="12"
                rx="16"
              />
              <path
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="M66 86v44"
              />
              <circle cx="66" cy="64" r="8" fill="#000000" />
              <path
                stroke="#000000"
                stroke-linecap="round"
                stroke-width="12"
                d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
              />
            </svg>
            <a href="https://linkedin.com/in/amiryxe" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/amiryxe
            </a>
          </li>

          <li className="flex items-center gap-2">
            <svg
              width="22px"
              height="22px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
              />
            </svg>
            <a href="https://github.com/amiryxe" target="_blank" rel="noopener noreferrer">
              github.com/amiryxe
            </a>
          </li>

          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <a href="https://amirsalehi.ir" target="_blank" rel="noopener noreferrer">
              AmirSalehi.ir
            </a>
          </li>
        </ul>

        <section className="bg-gray-200 rounded-lg p-4 text-justify font-normal">
          توسعه‌دهنده نرم‌افزار با بیش از ۷ سال تجربه در زمینه توسعه نرم افزارهای تحت وب مانند انواع
          داشبوردهای مدیریتی و همچنین وب‌سایت‌های مختلف. به دنیای جاوااسکریپت و البته یادگیری
          تکنولوژی‌های کاربردی و جدید علاقه‌مند هستم. بیشتر تمرکز من پیرامون توسعه Front End بوده
          است.
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="رزومه فارسی امیر صالحی" />

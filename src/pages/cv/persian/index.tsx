import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import Logo from '../../../images/svg/logo.svg'
import El1 from './el1.svg'
import El2 from './el2.svg'
import El3 from './el3.svg'
import El4 from './el4.svg'
import El5 from './el5.svg'

export default function PersianCV() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="bg-white text-black p-4 w-[768px]">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="flex gap-6 items-center">
              <div className="relative">
                <StaticImage
                  src="../../../images/amir-circle.png"
                  alt="amir pic"
                  quality={100}
                  style={{ width: 100 }}
                  // className="relative z-[1]"
                />
                <El4 className="absolute left-0 -bottom-1 z-2" />
              </div>

              {/* <El1 className="absolute left-4 top-2 z-0 opacity-30" /> */}

              <div>
                <Logo className="w-28" />
                <h2 className="leading-3">توسعه‌دهنده نرم‌افزارهای تحت وب</h2>
              </div>
            </div>

            <div className="text-left text-xs font-normal relative z-[2]">
              <h4 className="after:content-['-'] after:mr-1">متولد ۱۳۷۳</h4>
              <h4 className="after:content-['-'] after:mr-1">ساکن اصفهان</h4>
              <h4 className="after:content-['-'] after:mr-1">متاهل</h4>
              <h4 className="after:content-['-'] after:mr-1">معافیت کفالت</h4>
            </div>
          </header>

          {/* Contact info */}
          <ul className="px-2 py-4 font-mono text-sm grid grid-cols-3" dir="ltr">
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
                fill="#000000"
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z" />
              </svg>
              <a href="https://t.me/amiryxe" target="_blank" rel="noopener noreferrer">
                t.me/amiryxe
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

          {/* Summary */}
          <section className="bg-gray-200 relative p-4 text-justify font-normal leading-6 border border-dashed border-black">
            <span className="w-2 h-2 bg-black block absolute -top-1 -left-1"></span>
            <span className="w-2 h-2 bg-black block absolute -top-1 -right-1"></span>
            <span className="w-2 h-2 bg-black block absolute -bottom-1 -left-1"></span>
            <span className="w-2 h-2 bg-black block absolute -bottom-1 -right-1"></span>
            توسعه‌دهنده نرم‌افزار با بیش از ۷ سال تجربه در زمینه توسعه نرم افزارهای تحت وب مانند
            انواع داشبوردهای مدیریتی و همچنین وب‌سایت‌های مختلف. به دنیای جاوااسکریپت و البته
            یادگیری تکنولوژی‌های کاربردی و جدید علاقه‌مند هستم. بیشتر تمرکز من پیرامون توسعه Front
            End بوده است.
          </section>

          {/* Experiences */}
          <section className="mt-4">
            <div className="flex items-center gap-1">
              <h2 className="font-bold">سوابق کاری</h2>
              <El5 className="" width="90" height="20" />
            </div>

            <div className="text-sm">
              <div className="flex justify-between">
                <h3 className="font-semibold">توسعه‌دهنده فول‌استک در گروه صنعتی انتخاب (اسنوا)</h3>

                <span className="border-b border-black border-dashed italic">
                  خرداد ۱۴۰۰ - تاکنون
                </span>
              </div>

              <p className="text-justify mt-1 font-normal">
                در اسنوا به عنوان <strong>لید تیم فرانت</strong> فعالیت می‌کنم. پروژه‌هایی که در تیم
                توسعه انجام می‌دهیم مربوط به نیازهای این سازمان و برندهای آن یعنی{' '}
                <strong>اسنوا، دوو، بست و آردزیا</strong> است. خلاصه‌ای از فعالیت‌های عمده‌ای که
                برای انتخاب انجام داده‌ام:
              </p>

              <ul className="text-justify mt-1 pr-4 text-[13px]">
                <li className="before:content-['-'] before:ml-1 mb-1">
                  <strong>پروژه باشگاه مشتریان:</strong> این پروژه شامل دو بخش اصلی داشبورد مدیریت و
                  داشبورد کاربران به همراه سایت بود که هر دو مورد با استفاده از فریم‌ورک{' '}
                  <strong>Next</strong> پیاده‌سازی شد. این باشگاه در آدرس{' '}
                  <a href="https://club.snowa.ir" target="_blank" rel="noopener noreferrer">
                    club.snowa.ir
                  </a>{' '}
                  قابل مشاهده است.
                </li>

                <li className="before:content-['-'] before:ml-1 mb-1">
                  <strong>مکان‌نمای فروشگاه‌های اسنوا:</strong> یک Locator پیشرفته با امکان جستجو و
                  مسیریابی جهت لیست کردن تمام فروشگاه‌های اسنوا و شعبه‌های آن در سراسر ایران که با
                  <strong> React و SCSS</strong> پیاده‌سازی شد و در آدرس{' '}
                  <a href="https://snowa.ir/chains" target="_blank" rel="noopener noreferrer">
                    snowa.ir/chains
                  </a>{' '}
                  قابل مشاهده است.
                </li>

                <li className="before:content-['-'] before:ml-1 mb-1">
                  <strong>سامانه نظارتی GTM: </strong> یک سامانه مانیتورینگ برای بازرسان فروشگاه‌های
                  اسنوا بود که به صورت فرم‌های مختلف همراه با المان‌های متنوع به ناظر این امکان را
                  میداد که با ورودی‌های مختلفی مانند تصویر، متن، ویدئو، امتیازدهی و ... فروشگاه‌ها
                  را بررسی و فرم مربوطه را ثبت کند.
                </li>

                <li className="before:content-['-'] before:ml-1 mb-1">
                  <strong>قرعه‌کشی زنده: </strong> اسنوا به صورت دوره‌ای برای خریداران قرعه‌کشی
                  برگزار می‌کند، نرم‌افزاری بر پایه <strong>socket</strong> پیاده‌ شد که در لحظه
                  اپراتور آن بتواند قرعه‌کشی را انجام داده و در نمایی دیگر مخاطبان فرایند قرعه‌کشی
                  را مشاهده کنند. در نهایت لیست برندگان نمایش داده می‌شد.
                </li>

                <li className="before:content-['-'] before:ml-1 mb-1">
                  <strong>سامانه چت آنلاین: </strong> یک سامانه چت آنلاین بر پایه Chatwoot ایجاد شد
                  که فرایند اضافه کردن پشتیانی تاریخ شمسی و همچنین فونت فارسی و راست به چپ سازی آن
                  انجام شد و هم‌اکنون در سایت اسنوا و دیگر برندها از آن استفاده می‌شود.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="رزومه فارسی امیر صالحی" />

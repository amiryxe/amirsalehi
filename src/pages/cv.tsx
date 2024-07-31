import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

export default function CV() {
  return (
    <Layout>
      <a
        href="/cv/AmirSalehi-EN-CV-2024-04-23.pdf"
        target="_blank"
        className="inline-block bg-lime-950 rounded-sm px-3 text-white mb-6"
      >
        دانلود نسخه PDF رزومه
      </a>

      <main className="hyphens-manual font-sans" dir="ltr">
        <section className="p-3 my-auto mx-auto rounded-2xl border-4 border-gray-700 sm:p-9 lg:p-16 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter">
          <header className="inline-flex justify-between items-start mb-2 w-full align-top border-b-4 border-gray-300">
            <section className="block">
              <h1 className="mb-0 text-5xl max-sm:text-xl font-bold text-gray-700 dark:text-gray-50">
                Amir Salehi
              </h1>
              <h2 className="m-0 ml-2 max-sm:m-0 text-2xl max-sm:text-sm font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                Front End Developer
              </h2>
              <h3 className="m-0 mt-2 ml-2 max-sm:m-0 max-sm:text-sm text-xl font-semibold text-gray-500 dark:text-gray-100 leading-snugish">
                Isfahan, Iran
              </h3>
            </section>

            <section>
              <StaticImage
                src="../images/amir.png"
                alt="amir pic"
                quality={100}
                className="max-sm:mt-6 w-32 mb-6 max-sm:w-24"
              />
            </section>
          </header>

          <section className="col-gap-8 print:col-count-2 print:h-letter-col-full columns-2 max-sm:columns-1">
            <section className="flex-col">
              <section className="pb-2 mt-4 mb-0 first:mt-0">
                <section className="break-inside-avoid">
                  <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                    <ul className="pr-7 list-inside">
                      <li className="mt-1 leading-normal text-gray-500 dark:text-gray-50 transition duration-100 ease-in hover:text-gray-700 dark:text-gray-50 text-md">
                        <a href="tel:+989390483748">
                          <span className="mr-5 text-lg max-sm:text-sm font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                            Phone:
                          </span>
                          +98<strong>9390483748</strong>
                        </a>
                      </li>

                      <li className="mt-1 leading-normal text-gray-500 dark:text-gray-50 transition duration-100 ease-in hover:text-gray-700 dark:text-gray-50 text-md print:">
                        <a href="https://linkedin.com/in/amiryxe" className="group" target="_blank">
                          <span className="mr-2 text-lg max-sm:text-sm font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                            Linkedin:
                          </span>
                          linkedin.com/in/amiryxe
                          <span className="print:hidden inline-block font-normal text-gray-500 dark:text-gray-50 transition duration-100 ease-in group-hover:text-gray-700 dark:text-gray-50 print:text-black print:">
                            ↗
                          </span>
                        </a>
                      </li>
                      <li className="mt-1 leading-normal text-gray-500 dark:text-gray-50 transition duration-100 ease-in hover:text-gray-700 dark:text-gray-50 text-md">
                        <a href="https://github.com/amiryxe" className="group" target="_blank">
                          <span className="mr-5 text-lg max-sm:text-sm font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                            Github:
                          </span>
                          amiryxe
                          <span className="print:hidden inline-block font-normal text-gray-500 dark:text-gray-50 transition duration-100 ease-in group-hover:text-gray-700 dark:text-gray-50 print:text-black print:">
                            ↗
                          </span>
                        </a>
                      </li>
                      <li className="mt-1 leading-normal text-gray-500 dark:text-gray-50 transition duration-100 ease-in hover:text-gray-700 dark:text-gray-50 text-md">
                        <a href="mailto:amiryxe@gmail.com" className="group">
                          <span className="mr-8 text-lg max-sm:text-sm font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                            Email:
                          </span>
                          amiryxe@gmail.com
                          <span className="print:hidden inline-block font-normal text-gray-500 dark:text-gray-50 transition duration-100 ease-in group-hover:text-gray-700 dark:text-gray-50 print:text-black">
                            ↗
                          </span>
                        </a>
                      </li>

                      <li className="mt-1 leading-normal text-gray-500 dark:text-gray-50 transition duration-100 ease-in hover:text-gray-700 dark:text-gray-50 text-md print:">
                        <a href="https://amirsalehi.ir" className="group" target="_blank">
                          <span className="mr-2 text-lg max-sm:text-sm font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                            Website:
                          </span>
                          AmirSalehi.ir
                          <span className="print:hidden inline-block font-normal text-gray-500 dark:text-gray-50 transition duration-100 ease-in group-hover:text-gray-700 dark:text-gray-50 print:text-black print:">
                            ↗
                          </span>
                        </a>
                      </li>
                    </ul>
                  </section>
                </section>
              </section>

              <section className="pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700 dark:text-gray-50 print:font-normal">
                    SUMMARY
                  </h2>
                  <section className="mb-2 break-inside-avoid">
                    <p className="mt-2 leading-normal text-gray-700 dark:text-gray-50 text-md">
                      Experienced web developer, most of my focus has been on front end development,
                      user interfaces and management dashboards for enterprise projects.
                    </p>
                  </section>
                </section>
              </section>

              <section className="pb-6 mt-2 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 dark:text-gray-50 print:font-normal">
                    SKILLS
                  </h2>
                  <section className="mb-0 break-inside-avoid">
                    <section className="mt-1 last:pb-1">
                      <ul className="flex flex-wrap font-bold leading-relaxed gap-1">
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          JavaScript
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          TypeScript
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          HTML5
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          CSS3 & SCSS
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          React.js
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Node.js
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Next.js
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Gatsby
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Tailwind CSS
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Socket.io
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Linux
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Git & Git Flow
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Restful
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Web Design
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          UI/UX
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          Docker
                        </li>
                        <li className="p-1.5 leading-relaxed text-white print:text-black bg-gray-800 mr-1.6 print:bg-white print:border">
                          GraphQL
                        </li>
                      </ul>
                    </section>
                  </section>
                </section>
              </section>

              <section className="pb-0 mt-0 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 dark:text-gray-50 print:font-normal">
                    PROJECTS
                  </h2>
                  <section className="pb-4 mt-2 border-b-2 break-inside-avoid">
                    <header>
                      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                        Snowa Loyalty Club
                      </h3>
                      <p className="leading-normal text-gray-500 dark:text-gray-50 text-md">
                        <a href="https://club.snowa.ir" target="_blank">
                          club.snowa.ir
                        </a>
                      </p>
                    </header>
                  </section>

                  <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                    <header>
                      <h3 className="flex-grow text-lg font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                        YaniChe - Slang reference website
                      </h3>
                      <p className="leading-normal text-gray-500 dark:text-gray-50 text-md">
                        <a href="https://yaniche.ir" target="_blank">
                          yaniche.ir
                        </a>
                      </p>
                    </header>
                  </section>

                  <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                    <header>
                      <h3 className="flex-grow text-lg font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                        Iran Handball federation
                      </h3>
                      <p className="leading-normal text-gray-500 dark:text-gray-50 text-md">
                        <a href="https://irihf.ir/" target="_blank">
                          irihf.ir
                        </a>
                      </p>
                    </header>
                  </section>

                  <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                    <header>
                      <h3 className="flex-grow text-lg font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                        Leltajmil
                      </h3>
                      <p className="leading-normal text-gray-500 dark:text-gray-50 text-md">
                        <a href="https://leltajmil.com" target="_blank">
                          leltajmil.com
                        </a>
                      </p>
                    </header>
                  </section>
                </section>
              </section>

              <section className="pb-0 mt-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 dark:text-gray-50 print:font-normal">
                    EDUCATION
                  </h2>
                  <section className="mt-2 border-b-2 break-inside-avoid">
                    <header>
                      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                        Ashrafi Esfahani University
                      </h3>
                      <p className="leading-normal text-gray-500 dark:text-gray-50 text-md">
                        2016 – 2018 | Bachelor of Software Engineering
                      </p>
                    </header>
                  </section>

                  <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                    <header>
                      <h3 className="flex-grow text-lg font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                        Mohajer University
                      </h3>
                      <p className="leading-normal text-gray-500 dark:text-gray-50 text-md">
                        2013 – 2015 | Computer software associate
                      </p>
                    </header>
                  </section>

                  <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                    <header>
                      <h3 className="flex-grow text-lg font-semibold text-gray-700 dark:text-gray-50 leading-snugish">
                        HackerRank
                      </h3>
                      <p className="leading-normal text-gray-500 dark:text-gray-50 text-md">
                        2022 | Certificate
                      </p>
                    </header>
                    <ul className="mt-2 list-disc list-inside text-gray-800 dark:text-gray-50 text-md">
                      <li>
                        <span className="font-semibold text-md mr-2">Subject:</span>
                        Front End Development
                      </li>
                      <li>
                        <span className="font-semibold text-md mr-2">Skills:</span>
                        CSS, JavaScript, React
                      </li>
                    </ul>
                  </section>
                </section>
              </section>

              <section className="pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 dark:text-gray-50 print:font-normal">
                    EXPERIENCE
                  </h2>

                  <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
                    <header>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-50 text-md leading-snugish">
                        Snowa / Full Stack Web Developer
                      </h3>
                      <p className="text-sm leading-normal text-gray-500 dark:text-gray-50">
                        June 2021 – Present | Full Time
                      </p>
                    </header>
                    <ul className="pl-3 mt-2 font-normal text-gray-700 dark:text-gray-50 text-md leading-snugish">
                      <li>
                        I was mostly involved in the organizational projects required by the
                        <b> Entekhab Group</b>, as well as the development of the websites of its
                        brands, i.e. <b>Snowa, Daewoo and Bost</b>.
                      </li>

                      <li className="mt-2">
                        One of the biggest projects that I did here was the development of the
                        customer panel of <b>Snowa customer club</b> as well as its management
                        panel.
                      </li>

                      <li className="mt-2 mb-4">
                        I did various other projects such as <b>GTM monitoring system</b>,{' '}
                        <b>live lottery system</b> and also <b>online chat system</b> for this
                        company.
                      </li>
                    </ul>
                  </section>

                  <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
                    <header>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-50 text-md leading-snugish">
                        Alma Card / Front End Developer
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-50 leading-snugish">
                        Jan 2018 - Feb 2020 | Full Time in Esfahan and Tehran
                      </p>
                    </header>
                    <ul className="pl-3 mt-2 mb-2 font-normal text-gray-700 dark:text-gray-50 text-md leading-snugish">
                      <li>
                        The most important project that I did for Alma company was the front-end
                        development of the <b>Shokolat Loyalty software</b>, which was done using{' '}
                        <b>Laravel</b>.
                      </li>
                    </ul>
                  </section>
                  {/* job 3 */}
                  <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
                    <header>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-50 text-md leading-snugish">
                        Remote working / Front End Developer
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-50 leading-snugish">
                        July 2020 – Apr 2021 | Remote and Full Time
                      </p>
                    </header>
                    <ul className="pl-3 mt-2 mb-4 font-normal text-gray-700 dark:text-gray-50 text-md leading-snugish">
                      <li>
                        In cooperation with a software team, I was involved in the front end
                        development of web projects needed by the country of <b>Qatar</b>. These
                        projects were usually developed with the <b>Django framework</b>. I also did
                        a relatively large project with them, which was a <b>Virtual university</b>.
                      </li>
                    </ul>
                  </section>

                  <section className="mb-2 border-b-0 border-gray-300 break-inside-avoid">
                    <header>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-50 text-md leading-snugish">
                        Jumbula / Website Designer
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-50 leading-snugish">
                        January 2014 - April 2014 | Part Time
                      </p>
                    </header>
                    <ul className="pl-3 mt-2 font-normal text-gray-700 dark:text-gray-50 text-md leading-snugish">
                      <li>
                        This was my first experience working in person for a company. My activity
                        revolved around the development of websites by <b>Wordpress</b> for various
                        businesses in the <b>United States</b>
                      </li>
                    </ul>
                  </section>
                </section>
              </section>
              {/* end Column */}
            </section>
          </section>
        </section>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="رزومه امیر صالحی" />

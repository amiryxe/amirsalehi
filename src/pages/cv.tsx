import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function CV() {
  return (
    <Layout>
      <a
        href="/cv/AmirSalehi-EN-CV-2024-08-25.pdf"
        target="_blank"
        className="inline-block bg-lime-950 rounded-sm px-3 text-white mb-6"
      >
        دانلود نسخه PDF رزومه
      </a>

      <main className="hyphens-manual font-sans" dir="ltr">
        <div className="mx-auto p-4 rounded-lg mt-4 print:rounded-none print:p-2 print:max-h-[12in] print:max-w-[10.2in] print:text-sm print:leading-tight">
          {/* Header */}
          <header className="flex flex-col items-center mb-6">
            <h1 className="text-3xl font-extrabold print:text-black">Amir Salehi</h1>
            <p className="text-lg print:text-black">Front End Developer</p>
            <p className="mt-1 print:text-black">
              Isfahan, Iran | Phone: +989390483748 | Email:{' '}
              <a href="mailto:amiryxe@gmail.com">amiryxe@gmail.com</a>
            </p>
            <p className="print:text-black">
              LinkedIn:{' '}
              <a href="https://linkedin.com/in/amiryxe" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/amiryxe
              </a>{' '}
              | GitHub:{' '}
              <a href="https://github.com/amiryxe" target="_blank" rel="noopener noreferrer">
                github.com/amiryxe
              </a>{' '}
              | Website: <a href="https://amirsalehi.ir">AmirSalehi.ir</a>
            </p>
          </header>

          {/* Professional Summary */}
          <section className="mb-6 p-2 rounded-lg border border-gray-200 print:bg-transparent print:border-none print:p-0">
            <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 print:border-b print:border-gray-200 print:text-black">
              Professional Summary
            </h2>
            <p className="mt-2 print:text-black">
              Experienced web developer specializing in front-end development and user interface
              design. Proficient in creating responsive, high-performance websites and enterprise
              dashboards. Expertise in Web development, JavaScript, and modern frameworks. Focused
              on user-centered design and innovative solutions that drive digital success.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 print:border-b print:border-gray-200 print:text-black">
              Skills
            </h2>
            <ul className="mt-2 grid grid-cols-4 gap-y-1 print:text-black">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3 & SCSS</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>Gatsby</li>
              <li>Tailwind CSS</li>
              <li>Socket.io</li>
              <li>Linux</li>
              <li>Git & Git Flow</li>
              <li>Restful Web Design</li>
              <li>UI/UX</li>
              <li>Docker</li>
              <li>GraphQL</li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 print:border-b print:border-gray-200 print:text-black">
              Work Experience
            </h2>
            <div className="mt-4">
              <h3 className="text-lg font-semibold print:text-black">
                Full Stack Web Developer | Snowa
              </h3>
              <p className=" print:text-black">June 2021 – Present</p>
              <ul className="list-disc list-inside mt-2 print:text-black">
                <li>
                  Developed organizational projects for Entekhab Group, including websites for
                  brands like Snowa, Daewoo, and Bost.
                </li>
                <li>
                  Led the development of the Snowa customer club’s user panel and management
                  dashboard.
                </li>
                <li>
                  Worked on various other projects such as GTM monitoring system, live lottery
                  system, and online chat system.
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold print:text-black">
                Front End Developer | Alma Card
              </h3>
              <p className=" print:text-black">Jan 2018 - Feb 2020</p>
              <ul className="list-disc list-inside mt-2 print:text-black">
                <li>Front-end development for Shokolat Loyalty software using Laravel.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold print:text-black">
                Front End Developer | Remote Working
              </h3>
              <p className=" print:text-black">July 2020 – Apr 2021</p>
              <ul className="list-disc list-inside mt-2 print:text-black">
                <li>
                  Contributed to the front-end development of web projects in Qatar using the Django
                  framework.
                </li>
                <li>Worked on a Virtual University project as a major contribution.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold print:text-black">Website Designer | Jumbula</h3>
              <p className=" print:text-black">January 2014 - April 2014</p>
              <ul className="list-disc list-inside mt-2 print:text-black">
                <li>Developed websites using WordPress for various U.S.-based businesses.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6 p-2 rounded-lg border border-gray-200 print:bg-transparent print:border-none print:p-0">
            <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 print:border-b print:border-gray-200 print:text-black">
              Projects
            </h2>
            <ul className="list-disc list-inside mt-2 print:text-black">
              <li>
                <strong>Snowa Loyalty Club:</strong>{' '}
                <a href="https://club.snowa.ir" className="hover:underline print:text-black">
                  club.snowa.ir
                </a>
              </li>
              <li>
                <strong>YaniChe - Slang reference website:</strong>{' '}
                <a href="https://yaniche.ir" className="hover:underline print:text-black">
                  yaniche.ir
                </a>
              </li>
              <li>
                <strong>Iran Handball Federation:</strong>{' '}
                <a href="https://irihf.ir" className="hover:underline print:text-black">
                  irihf.ir
                </a>
              </li>
              <li>
                <strong>Leltajmil:</strong>{' '}
                <a href="https://leltajmil.com" className="hover:underline print:text-black">
                  leltajmil.com
                </a>
              </li>
            </ul>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 print:border-b print:border-gray-200 print:text-black">
              Education
            </h2>
            <div className="mt-4">
              <h3 className="text-lg font-semibold print:text-black">
                Bachelor of Software Engineering | Ashrafi Esfahani University
              </h3>
              <p className=" print:text-black">2016 – 2018</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold print:text-black">
                Associate of Computer Software | Mohajer University
              </h3>
              <p className=" print:text-black">2013 – 2015</p>
            </div>
          </section>

          {/* Certificates */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 print:border-b print:border-gray-200 print:text-black">
              Certificates
            </h2>
            <div className="mt-4">
              <h3 className="text-lg font-semibold print:text-black">
                Certificate in Front End Development | HackerRank
              </h3>
              <p className=" print:text-black">January 2022</p>
              <p className=" print:text-black">Skills: CSS, JavaScript, React</p>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 print:border-b print:border-gray-200 print:text-black">
              Languages
            </h2>
            <ul className="mt-2 grid grid-cols-2 gap-y-1 print:text-black">
              <li>Persian - Native</li>
              <li>English - Medium proficiency</li>
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="رزومه امیر صالحی" />

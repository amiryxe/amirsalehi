import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import MainBanner from '../components/MainBanner'
import { Skills } from '../components/Skills'

const IndexPage = () => {
  return (
    <Layout>
      <MainBanner />

      <div className="grid grid-cols-2">
        <div className="mt-6 flex flex-col">
          آی‌دی من در شبکه‌های اجتماعی مختلف:
          <b
            dir="ltr"
            className="font-mono font-black text-4xl dark:text-lime-100 text-lime-800 text-right"
          >
            @amiryxe
          </b>
        </div>

        <div className="mt-6">
          <Skills />
        </div>
      </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="امیر صالحی - توسعه‌دهنده نرم‌افزار" />

export default IndexPage

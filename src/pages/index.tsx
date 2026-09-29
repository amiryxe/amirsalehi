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

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'امیر صالحی',
  alternateName: 'Amir Salehi',
  url: 'https://amirsalehi.ir/',
  image: 'https://amirsalehi.ir/og-default.jpg',
  jobTitle: 'توسعه‌دهنده نرم‌افزار',
  sameAs: [
    'https://github.com/amiryxe',
    'https://linkedin.com/in/amiryxe',
    'https://t.me/amiryxe',
  ],
}

export const Head = () => (
  <Seo title="امیر صالحی - توسعه‌دهنده نرم‌افزار" pathname="/">
    <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
  </Seo>
)

export default IndexPage

import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import MainBanner from '../components/MainBanner'

const IndexPage = () => {
  return (
    <Layout>
      <MainBanner />

      <p>this is my homepage</p>
      <p>متن فارسی جدید</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="درباره من" />

export default IndexPage

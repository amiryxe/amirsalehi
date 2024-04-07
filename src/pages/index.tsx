import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>this is my homepage</p>
      <p>متن فارسی در اینجا</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="درباره من" />

export default IndexPage

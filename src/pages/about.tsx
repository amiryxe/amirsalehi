import * as React from 'react'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="درباره من">
      <p>من امیر صالحی هستم و به زودی یه چیزایی در مورد خودم اینجا می‌نویسم</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage

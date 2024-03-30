import * as React from 'react'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>this is my about page</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage

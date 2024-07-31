import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import MainBanner from '../components/MainBanner'

const IndexPage = () => {
  return (
    <Layout>
      <MainBanner />

      <p>
        معمولا در شبکه‌های اجتماعی مختلف با آی‌دی{' '}
        <code className="font-mono text-lg px-1 text-lime-900 dark:text-lime-500">amiryxe</code>
        حضور دارم
      </p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="امیر صالحی - توسعه‌دهنده نرم‌افزار" />

export default IndexPage

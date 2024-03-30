import * as React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="404">
      <p className="mb-12">متاسفانه صفحه مورد نظر یافت نشد</p>

      <Link to="/" className="btn-primary">
        بازگشت به صفحه اصلی
      </Link>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>چیزی پیدا نشد</title>

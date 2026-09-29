import * as React from 'react'
import { Link } from 'gatsby'

const siteUrl = 'https://amirsalehi.ir'

const Redirect = ({ pageContext }: any) => {
  React.useEffect(() => {
    window.location.replace(pageContext.to)
  }, [pageContext.to])

  return (
    <p dir="rtl" style={{ padding: '2rem' }}>
      این صفحه منتقل شده است: <Link to={pageContext.to}>{pageContext.to}</Link>
    </p>
  )
}

export const Head = ({ pageContext }: any) => (
  <>
    <title>انتقال صفحه</title>
    <meta name="robots" content="noindex" />
    <meta httpEquiv="refresh" content={`0;url=${pageContext.to}`} />
    <link rel="canonical" href={`${siteUrl}${pageContext.to}`} />
  </>
)

export default Redirect

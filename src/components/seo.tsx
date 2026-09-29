import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type SeoProps = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  article?: { publishedTime?: string }
  children?: React.ReactNode
}

const Seo = ({ title, description, pathname, image, article, children }: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          twitterUsername
        }
      }
    }
  `)

  const meta = site.siteMetadata
  const siteUrl = meta.siteUrl.replace(/\/$/, '')
  const fullTitle = title && !title.includes(meta.title) ? `${title} | ${meta.title}` : meta.title
  const metaDescription = description || meta.description
  const url = `${siteUrl}${pathname || ''}`
  const imagePath = image || meta.image
  const imageUrl = imagePath.startsWith('http') ? imagePath : `${siteUrl}${imagePath}`

  const jsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: metaDescription,
        image: imageUrl,
        datePublished: article.publishedTime,
        author: { '@type': 'Person', name: meta.title, url: siteUrl },
        mainEntityOfPage: url,
      }
    : null

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {pathname && <link rel="canonical" href={url} />}

      <meta property="og:site_name" content={meta.title} />
      <meta property="og:locale" content="fa_IR" />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {meta.twitterUsername && <meta name="twitter:creator" content={meta.twitterUsername} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
      {children}
    </>
  )
}

export default Seo

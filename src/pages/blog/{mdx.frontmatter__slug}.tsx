import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Disqus } from 'gatsby-plugin-disqus'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }: any) => {
  console.log(data)
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image!} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{' '}
        <a href={data.mdx.frontmatter.hero_image_credit_link} target="_blank">
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>

      {children}

      <Disqus
        config={
          /* Replace PAGE_URL with your post's canonical URL variable */
          // url: 'PAGE_URL',
          /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
          // identifier: 'PAGE_IDENTIFIER',
          /* Replace PAGE_TITLE with the title of the page */
          {
            title: data.mdx.frontmatter.title,
          }
        }
      />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }: any) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost

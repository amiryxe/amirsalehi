import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Disqus } from 'gatsby-plugin-disqus'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import toJalali from '../../helpers/toJalali'

const BlogPost = ({ data, children }: any) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout>
      <h1 className="text-2xl">{data.mdx.frontmatter.title}</h1>
      <em>{toJalali(data.mdx.frontmatter.date)}</em>

      <div className="flex justify-center">
        <GatsbyImage
          image={image!}
          alt={data.mdx.frontmatter.hero_image_alt}
          className="m-3 rounded-md"
        />
      </div>

      <div className="mb-16">{children}</div>

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

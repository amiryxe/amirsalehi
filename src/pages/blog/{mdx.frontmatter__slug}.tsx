import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Disqus } from 'gatsby-plugin-disqus'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import toJalali from '../../helpers/toJalali'

const BlogPost = ({ data, children }: any) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const { categories } = data.mdx.frontmatter

  return (
    <Layout>
      <h1 className="text-2xl font-extrabold">{data.mdx.frontmatter.title}</h1>
      <em>{toJalali(data.mdx.frontmatter.date)}</em>

      {image && (
        <div className="flex justify-center">
          <GatsbyImage
            image={image!}
            alt={data.mdx.frontmatter.hero_image_alt}
            className="my-8 rounded-md"
          />
        </div>
      )}

      <div className="mb-16 post">{children}</div>

      <div className="flex gap-4">
        دسته‌بندی‌ها:{' '}
        <div className="flex gap-2">
          {categories.map((category: any) => (
            <Link
              key={category.slug}
              className="font-bold underline"
              to={'/categories/' + category.slug}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      <Disqus
        config={{
          title: data.mdx.frontmatter.title,
        }}
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
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        categories {
          name
          slug
        }
      }
    }
  }
`

export const Head = ({ data }: any) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost

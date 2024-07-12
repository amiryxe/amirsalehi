import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

const CategoryPage = ({ data, pageContext }: any) => {
  const { category, slug } = pageContext
  const posts = data.allMdx.nodes

  return (
    <Layout pageTitle={`نوشته‌های مربوط به دسته‌بندی "${category}":`}>
      {posts.map((post: any) => (
        <Link key={post.id} to={'/blog' + post.fields.slug} className="mb-4 flex flex-col">
          <h3 className="font-semibold before:content-[''] before:w-3 before:h-3 before:bg-lime-200 before:inline-block before:rounded-full before:ml-2">
            {post.frontmatter.title}
          </h3>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    allMdx(filter: { frontmatter: { categories: { elemMatch: { slug: { eq: $slug } } } } }) {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`

export const Head = ({ pageContext }: any) => <Seo title={`دسته‌بندی ${pageContext.category}`} />

export default CategoryPage

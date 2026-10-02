import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import PostCard from '../components/PostCard'

const CategoryPage = ({ data, pageContext }: any) => {
  const { category, slug } = pageContext
  const posts = data.allMdx.nodes

  return (
    <Layout pageTitle={`نوشته‌های مربوط به دسته‌بندی ${category}:`} narrow>
      <div className="flex flex-col gap-5">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    allMdx(
      filter: {
        frontmatter: { draft: { ne: true }, categories: { elemMatch: { slug: { eq: $slug } } } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 140)
        frontmatter {
          title
          slug
          date(formatString: "MMMM D, YYYY h:mm A")
          categories {
            name
            slug
          }
        }
      }
    }
  }
`

export const Head = ({ pageContext }: any) => <Seo
    title={`دسته‌بندی ${pageContext.category}`}
    pathname={`/categories/${pageContext.slug}/`}
    description={`نوشته‌های امیر صالحی در دسته‌بندی ${pageContext.category}`}
  />

export default CategoryPage

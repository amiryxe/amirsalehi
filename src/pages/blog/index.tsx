import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import PostCard from '../../components/PostCard'

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="تازه‌ترین نوشته‌ها" narrow>
      <div className="flex flex-col gap-5">
        {data.allMdx.nodes.map((node: any) => (
          <PostCard key={node.id} post={node} />
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="بلاگ" pathname="/blog/" description="نوشته‌های امیر صالحی درباره جاوااسکریپت، ری‌اکت و برنامه‌نویسی وب." />

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { ne: "project" }, draft: { ne: true } } }
    ) {
      nodes {
        excerpt(pruneLength: 140)
        frontmatter {
          date(formatString: "MMMM D, YYYY h:mm A")
          title
          slug
          categories {
            name
            slug
          }
        }
        id
      }
    }
  }
`

export default BlogPage

import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }: any) => {
  console.log(data)

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>

      <ul>
        {data.allMdx.nodes.map((node: any) => (
          <Link key={node.id} to={`/blog/${node.frontmatter.slug}`}>
            <li className="border-b-2">
              <h3>{node.frontmatter.title}</h3>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </li>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export default BlogPage

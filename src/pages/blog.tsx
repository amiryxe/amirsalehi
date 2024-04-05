import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = ({ data }: any) => {
  console.log(data)

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>

      <ul>
        {data.allFile.nodes.map((node: any) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage

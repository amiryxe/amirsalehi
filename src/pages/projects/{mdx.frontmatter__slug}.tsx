import * as React from 'react'

import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ProjectPage = ({ data, children, pageContext }: any) => {
  console.log(data)

  return (
    <Layout>
      <h1 className="text-2xl font-extrabold">{data.mdx.frontmatter.title}</h1>

      <div className="mb-16 post">{children}</div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }, filter: { frontmatter: { type: { eq: "project" } } }) {
      frontmatter {
        title
      }
    }
  }
`

export const Head = ({ data }: any) => <Seo title={data.mdx.frontmatter.title} />

export default ProjectPage

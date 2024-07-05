import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import toJalali from '../../helpers/toJalali'

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="نوشته‌های من">
      {data.allMdx.nodes.map((node: any) => (
        <Link key={node.id} to={`/blog/${node.frontmatter.slug}`} className="mb-8 flex flex-col">
          <h3 className="font-semibold before:content-[''] before:w-3 before:h-3 before:bg-lime-200 before:inline-block before:rounded-full before:ml-2">
            {node.frontmatter.title}
          </h3>

          <em className="text-sm">{toJalali(node.frontmatter.date)}</em>
        </Link>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="نوشته‌های من در بلاگ" />

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
      }
    }
  }
`

export default BlogPage

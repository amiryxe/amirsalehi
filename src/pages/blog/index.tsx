import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import toJalali from '../../helpers/toJalali'

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="تازه‌ترین نوشته‌ها">
      {data.allMdx.nodes.map((node: any) => (
        <div key={node.id}>
          <Link to={`/blog/${node.frontmatter.slug}`} className="mb-8 flex-col inline-flex">
            <h3
              className="before:content-[''] before:w-3 before:h-3 before:bg-lime-200 
            before:inline-block before:rounded-full before:ml-3 max-sm:flex max-sm:before:mt-[.6rem] 
            max-sm:before:h-auto max-sm:before:w-2"
            >
              <span className="w-full">{node.frontmatter.title}</span>
            </h3>

            <em className="text-sm max-sm:indent-5">{toJalali(node.frontmatter.date)}</em>
          </Link>

          <br />
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="بلاگ امیر صالحی" />

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { ne: "project" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY h:mm A")
          title
          slug
        }
        id
      }
    }
  }
`

export default BlogPage

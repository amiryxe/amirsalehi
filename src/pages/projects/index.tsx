import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ProjectsPage = ({ data }: any) => {
  const projects = data.allMdx.nodes

  return (
    <Layout pageTitle="پروژه‌های من">
      {projects.length === 0 && <p>به زودی پروژه‌هام رو اینجا معرفی می‌کنم.</p>}
      {projects.map((project: any) => (
        <div key={project.id}>
          <Link to={`/projects/${project.frontmatter.slug}`} className="mb-8 flex flex-col">
            <h2 className="font-semibold before:content-[''] before:w-3 before:h-3 before:bg-lime-200 before:inline-block before:rounded-full before:ml-2">
              {project.frontmatter.title}
            </h2>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const Head = ({ data }: any) => <Seo noindex={data.allMdx.nodes.length === 0} title="پروژه‌ها" pathname="/projects/" description="پروژه‌هایی که امیر صالحی روی آن‌ها کار کرده است." />

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "project" }, draft: { ne: true } } }) {
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

export default ProjectsPage

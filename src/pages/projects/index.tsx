import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ProjectsPage = ({ data }: any) => {
  const projects = data.allMdx.nodes

  return (
    <Layout pageTitle="پروژه‌های من">
      {projects.map((project: any) => (
        <div key={project.id}>
          <Link to={`/projects/${project.frontmatter.slug}`} className="mb-8 flex flex-col">
            <h3 className="font-semibold before:content-[''] before:w-3 before:h-3 before:bg-lime-200 before:inline-block before:rounded-full before:ml-2">
              {project.frontmatter.title}
            </h3>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="پروژه‌های امیر صالحی" />

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
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

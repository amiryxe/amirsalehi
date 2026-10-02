import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ProjectCard from '../../components/ProjectCard'

const ProjectsPage = ({ data }: any) => {
  const projects = data.allMdx.nodes

  return (
    <Layout pageTitle="پروژه‌های من">
      {projects.length === 0 && <p>به زودی پروژه‌هام رو اینجا معرفی می‌کنم.</p>}
      <p className="-mt-6 mb-10 text-gray-600 dark:text-gray-300">
        محصول‌هایی که از ایده تا اجرا خودم ساختم و نگهداری می‌کنم.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  )
}

export const Head = ({ data }: any) => (
  <Seo
    noindex={data.allMdx.nodes.length === 0}
    title="پروژه‌ها"
    pathname="/projects/"
    description="پروژه‌هایی که امیر صالحی ساخته است: لوکیو، فاکتورباکس، نماپویا، یعنی‌چه و جاب‌یو."
  />
)

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "project" }, draft: { ne: true } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          tagline
          color
          tags
          url
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED, quality: 85)
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage

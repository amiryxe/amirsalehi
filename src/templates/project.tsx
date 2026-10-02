import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
import BrowserFrame from '../components/BrowserFrame'
import { domainOf } from '../components/ProjectCard'

const ProjectPage = ({ data, children }: any) => {
  const { title, tagline, color, tags, url, hero_image, hero_image_alt } = data.mdx.frontmatter
  const image = getImage(hero_image)
  const accent = color || '#84cc16'

  return (
    <Layout narrow>
      <Link to="/projects/" className="mb-6 inline-block text-sm text-gray-500 hover:text-lime-700 dark:text-gray-400 dark:hover:text-lime-400">
        → همه‌ی پروژه‌ها
      </Link>

      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: accent }} />
          <h1 className="text-3xl font-extrabold">{title}</h1>
        </div>
        {tagline && <p className="text-lg leading-9 text-gray-600 dark:text-gray-300">{tagline}</p>}

        <div className="flex flex-wrap items-center gap-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              مشاهده‌ی سایت
              <span dir="ltr" className="font-normal opacity-90">{domainOf(url)} ↗</span>
            </a>
          )}
          {tags?.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border px-2.5 py-0.5 text-xs leading-5"
              style={{ borderColor: `${accent}55`, color: accent, backgroundColor: `${accent}12` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {image && (
        <div
          className="relative my-10 rounded-2xl p-4 sm:p-8"
          style={{ background: `linear-gradient(135deg, ${accent}33, ${accent}0d 60%, transparent)` }}
        >
          <BrowserFrame domain={domainOf(url) || 'instagram'} className="shadow-xl">
            <GatsbyImage image={image} alt={hero_image_alt || title} />
          </BrowserFrame>
        </div>
      )}

      <div className="mb-16 post">{children}</div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 160)
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
            gatsbyImageData(width: 1200, placeholder: BLURRED, quality: 85)
          }
        }
      }
    }
  }
`

export const Head = ({ data }: any) => (
  <Seo
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.tagline || data.mdx.excerpt}
    pathname={`/projects/${data.mdx.frontmatter.slug}/`}
  />
)

export default ProjectPage

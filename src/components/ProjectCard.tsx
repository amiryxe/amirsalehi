import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import BrowserFrame from './BrowserFrame'

export const domainOf = (url?: string) => (url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : undefined)

export default function ProjectCard({ project }: { project: any }) {
  const { title, slug, tagline, color, tags, url, hero_image, hero_image_alt } = project.frontmatter
  const image = getImage(hero_image)
  const accent = color || '#84cc16'

  return (
    <Link
      to={`/projects/${slug}/`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/60"
      style={{ ['--accent' as any]: accent }}
    >
      {/* Visual area: accent gradient with the site screenshot in a browser frame */}
      <div
        className="relative px-4 pt-4"
        style={{ background: `linear-gradient(135deg, ${accent}33, ${accent}0d 60%, transparent)` }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(${accent}40 1.2px, transparent 1.2px)`,
            backgroundSize: '14px 14px',
            maskImage: 'linear-gradient(to bottom, #000, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000, transparent 85%)',
          }}
        />
        <BrowserFrame
          domain={domainOf(url) || 'instagram'}
          className="relative -mb-px rounded-b-none border-b-0 transition duration-300 group-hover:-translate-y-1"
        >
          {image && <GatsbyImage image={image} alt={hero_image_alt || title} className="aspect-[16/10]" />}
        </BrowserFrame>
      </div>

      <div className="flex flex-1 flex-col gap-2 border-t border-gray-200 p-4 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
          <h2 className="text-base font-extrabold">{title}</h2>
          {url && (
            <span className="ms-auto text-[11px] text-gray-500 dark:text-gray-400" dir="ltr">
              {domainOf(url)}
            </span>
          )}
        </div>

        <p className="text-xs leading-6 text-gray-600 dark:text-gray-300">{tagline}</p>

        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full border px-2 py-0.5 text-[11px] leading-4"
                style={{ borderColor: `${accent}55`, color: accent, backgroundColor: `${accent}12` }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

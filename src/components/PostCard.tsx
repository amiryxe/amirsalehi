import * as React from 'react'
import { Link } from 'gatsby'

import toJalali from '../helpers/toJalali'

type Props = {
  post: {
    excerpt?: string
    frontmatter: {
      title: string
      slug: string
      date: string
      categories?: { name: string; slug: string }[]
    }
  }
}

export default function PostCard({ post }: Props) {
  const { title, slug, date, categories } = post.frontmatter

  return (
    <Link
      to={`/blog/${slug}/`}
      className="group block rounded-xl border border-gray-200 bg-white/60 p-5 transition hover:-translate-y-0.5 hover:border-lime-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/60 dark:hover:border-lime-400"
    >
      <article className="flex flex-col gap-3">
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category.slug}
                className="rounded-full bg-lime-50 px-2.5 py-0.5 text-xs font-medium leading-5 text-lime-800 dark:bg-lime-400/10 dark:text-lime-300"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}

        <h2 className="text-lg font-bold leading-8 group-hover:text-lime-700 dark:group-hover:text-lime-400">
          {title}
        </h2>

        {post.excerpt && (
          <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        )}

        <time className="text-xs text-gray-500 dark:text-gray-400">{toJalali(date)}</time>
      </article>
    </Link>
  )
}

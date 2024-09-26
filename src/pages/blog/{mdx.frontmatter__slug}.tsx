import * as React from 'react'
import { useState } from 'react'
import PocketBase from 'pocketbase'

import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import toJalali from '../../helpers/toJalali'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'

const url = process.env.POCKETBASE_URL
const client = new PocketBase(url)

client.beforeSend = function (url, options: any) {
  options.headers['x_token'] = process.env.POCKETBASE_KEY

  return { url, options }
}

const BlogPost = ({ data, children, pageContext }: any) => {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState('')
  const [comments, setComments] = useState<any>([])

  const image = getImage(data.mdx.frontmatter.hero_image)
  const { categories } = data.mdx.frontmatter

  React.useEffect(() => {
    const getData = async () => {
      const res = await client
        .collection('comments')
        .getFullList({ filter: `postSlug="${pageContext.frontmatter__slug}"&&isApproved=true` })

      setComments(res)
    }

    getData()
  }, [])

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, text } = e.target as any

    const data = {
      postSlug: pageContext.frontmatter__slug,
      name: name.value,
      email: email.value,
      text: text.value,
    }

    setLoading(true)

    await client
      .collection('comments')
      .create(data)
      .then(() => {
        setAlert('دیدگاه شما با موفقیت ارسال شد و پس از تائید نمایش داده می‌شود')

        name.value = ''
        email.value = ''
        text.value = ''
      })
      .catch((err) => {
        setAlert('خطا در ارسال دیدگاه')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Layout>
      <h1 className="text-2xl font-extrabold">{data.mdx.frontmatter.title}</h1>
      <em>{toJalali(data.mdx.frontmatter.date)}</em>

      {image && (
        <div className="flex justify-center">
          <GatsbyImage
            image={image!}
            alt={data.mdx.frontmatter.hero_image_alt}
            className="my-8 rounded-md"
          />
        </div>
      )}

      <div className="mb-16 post">{children}</div>

      <div className="flex gap-4">
        دسته‌بندی‌ها:
        <div className="flex gap-2">
          {categories?.map((category: any) => (
            <Link
              key={category.slug}
              className="font-bold underline"
              to={'/categories/' + category.slug}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      <form onSubmit={submitHandler} className="space-y-8 mt-12">
        <div className="flex gap-4 max-sm:flex-col">
          <div className="sm:w-1/2 flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium ">
                نام شما
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium ">
                ایمیل
              </label>
              <input
                type="text"
                id="email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                placeholder="you@email.com"
                dir="ltr"
              />
            </div>
          </div>

          <div className="sm:w-full">
            <div className="sm:col-span-2">
              <label htmlFor="text" className="block mb-2 text-sm font-medium">
                متن دیدگاه
              </label>
              <textarea
                required
                id="text"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholder="متن دیدگاه خود را وارد کنید..."
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          {loading ? 'در حال ارسال...' : 'ارسال دیدگاه'}
        </button>
      </form>

      {alert && (
        <p className="mt-4 flex gap-2 animate-[pulse_1s_linear_2_forwards]">
          <CheckBadgeIcon className="w-6 text-green-500" />
          {alert}
        </p>
      )}

      {comments?.length > 0 && (
        <div className="mt-12">
          <hr className="my-4" />
          {comments.map((comment: any) => (
            <div key={comment.id} className="mb-4 border border-gray-200 rounded-md p-3">
              <div className="flex justify-between">
                <h3 className="font-bold">{comment.name}</h3>
                <em>{toJalali(comment.created)}</em>
              </div>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        categories {
          name
          slug
        }
      }
    }
  }
`

export const Head = ({ data }: any) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost

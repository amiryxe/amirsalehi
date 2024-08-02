import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Seo from '../../components/seo'
import Layout from '../../components/layout'

const CategoriesList = ({ data }: any) => {
  return (
    <Layout pageTitle="دسته‌بندی‌ها">
      <div dir="ltr" className="flex flex-col font-mono gap-3">
        {data.allMdx.distinct.map((category: string) => (
          <Link key={category} to={`/categories/${category}`} className="hover:text-lime-400">
            /{category}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx {
      distinct(field: { frontmatter: { categories: { slug: SELECT } } })
    }
  }
`

export const Head = () => <Seo title="تمام دسته‌بندی‌ها" />

export default CategoriesList

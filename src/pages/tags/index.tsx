import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Tags = ({ data }: any) => {
  console.log(data.allMdx.group)

  return (
    <Layout pageTitle="کلیدواژه‌های نوشته‌ها">
      {data.allMdx.group.map((item: any) => (
        <Link
          key={item.fieldValue}
          to={`/tags/${item.fieldValue.replaceAll(' ', '-')}`}
          className="mb-8 flex flex-col"
        >
          <h3 className="font-semibold before:content-[''] before:w-3 before:h-3 before:bg-lime-200 before:inline-block before:rounded-full before:ml-2">
            {item.fieldValue}
          </h3>
        </Link>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="کلیدواژه‌های نوشته‌ها" />

export const pageQuery = graphql`
  query {
    allMdx {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
      }
    }
  }
`

export default Tags

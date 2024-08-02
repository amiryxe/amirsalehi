const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }: any) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'content/blog' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            categories {
              name
              slug
            }
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    return
  }

  const posts = result.data.allMdx.nodes

  // Extract all unique categories
  const categories = new Map()
  posts.forEach((post: any) => {
    if (post.frontmatter.categories) {
      post.frontmatter.categories.forEach((category: any) => {
        categories.set(category.slug, category.name)
      })
    }
  })

  // Create a page for each category
  const categoryTemplate = path.resolve(`src/pages/categories/slug.tsx`)
  categories.forEach((name, slug) => {
    createPage({
      path: `/categories/${slug}/`,
      component: categoryTemplate,
      context: {
        category: name,
        slug: slug,
      },
    })
  })
}

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
          internal {
            contentFilePath
          }
          frontmatter {
            slug
            type
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

  const nodes = result.data.allMdx.nodes
  const posts = nodes.filter((node: any) => node.frontmatter.type !== 'project')
  const projects = nodes.filter((node: any) => node.frontmatter.type === 'project')

  // Blog posts and projects each get a page only under their own route
  const blogTemplate = path.resolve(`src/templates/blog-post.tsx`)
  posts.forEach((node: any) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}/`,
      component: `${blogTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id, frontmatter__slug: node.frontmatter.slug },
    })
  })

  const projectTemplate = path.resolve(`src/templates/project.tsx`)
  projects.forEach((node: any) => {
    createPage({
      path: `/projects/${node.frontmatter.slug}/`,
      component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id, frontmatter__slug: node.frontmatter.slug },
    })
  })

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
  const categoryTemplate = path.resolve(`src/templates/category.tsx`)
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

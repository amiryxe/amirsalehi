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

exports.createSchemaCustomization = ({ actions }: any) => {
  actions.createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      draft: Boolean
    }
  `)
}

exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
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
      context: {
        id: node.id,
        frontmatter__slug: node.frontmatter.slug,
        categorySlugs: (node.frontmatter.categories || []).map((c: any) => c.slug),
      },
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

  // Old duplicate URLs (/projects/<post>/ and /categories/slug/) redirect to the right page
  const redirectTemplate = path.resolve(`src/templates/redirect.tsx`)
  const projectSlugs = new Set(projects.map((node: any) => node.frontmatter.slug))
  const redirects = posts
    .filter((node: any) => !projectSlugs.has(node.frontmatter.slug))
    .map((node: any) => ({
      from: `/projects/${node.frontmatter.slug}/`,
      to: `/blog/${node.frontmatter.slug}/`,
    }))
  redirects.push({ from: '/categories/slug/', to: '/categories/' })
  redirects.forEach(({ from, to }: any) => {
    createPage({ path: from, component: redirectTemplate, context: { to, noindex: true } })
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

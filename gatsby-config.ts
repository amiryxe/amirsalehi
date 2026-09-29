import type { GatsbyConfig } from 'gatsby'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `امیر صالحی`,
    siteUrl: `https://amirsalehi.ir`,
    description: `وبسایت شخصی امیر صالحی، توسعه‌دهنده نرم‌افزار و علاقه‌مند به دنیای جاوااسکریپت؛ نوشته‌هایی درباره جاوااسکریپت، ری‌اکت و برنامه‌نویسی وب، رزومه و پروژه‌ها.`,
    image: `/og-default.jpg`,
    twitterUsername: `@amiryxe`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/about/', '/videos/'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
                pageContext
              }
            }
            projects: allMdx(
              filter: { frontmatter: { type: { eq: "project" }, draft: { ne: true } } }
            ) {
              totalCount
            }
          }
        `,
        // Skip redirect pages, and the projects page while it has no projects
        resolvePages: ({ allSitePage, projects }: any) =>
          allSitePage.nodes.filter(
            (page: any) =>
              !page.pageContext?.noindex && !(page.path === '/projects/' && projects.totalCount === 0)
          ),
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }: any) =>
              allMdx.nodes.map((node: any) => {
                const url = `${site.siteMetadata.siteUrl}/blog/${node.frontmatter.slug}/`
                return {
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url,
                  guid: url,
                }
              }),
            query: `
              {
                allMdx(
                  sort: { frontmatter: { date: DESC } }
                  filter: { frontmatter: { type: { ne: "project" }, draft: { ne: true } } }
                ) {
                  nodes {
                    excerpt(pruneLength: 300)
                    frontmatter {
                      title
                      slug
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'بلاگ امیر صالحی',
            language: 'fa',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          remarkPlugins: [
            [
              require('gatsby-remark-vscode').remarkPlugin,
              {
                theme: {
                  default: 'Quiet Light',
                  parentSelector: {
                    'html[class=dark]': 'Monokai',
                  },
                },
              },
            ],
          ],
        },
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `storage`,
        path: `${__dirname}/storage`,
      },
    },
  ],
}

export default config

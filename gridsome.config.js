// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '0xdt',
  siteUrl: 'https://dtoki.io',
  siteDescription: 'personal blog and portfolio of 0xdt',
  icon: './src/assets/images/favicon.png',
  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        // Exclude specific paths from the sitemap
        exclude: ['/project', '/blog/a-post-with-a-cover-image', '/a-post-with-a-cover-image', '/assets/*', '/old-blog', '/old-blog/*', '/tag/*'],
        // Add custom entries
        config: {
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/blog': {
            changefreq: 'daily',
            priority: 0.9
          },
          '/blog/*': {
            changefreq: 'daily',
            priority: 0.9
          },
          '/': {
            changefreq: 'daily',
            priority: 0.9
          },
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}

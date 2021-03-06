// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Family History',
  plugins: [
    {
      use: 'gridsome-plugin-windicss',
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-PJS56TL',
        enabled: true,
        debug: true
      }
    },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'BlogPost',
      path: './blog/**/*.md',
    },
  },
],
templates: {
  BlogPost: '/blog/:title',
},
}

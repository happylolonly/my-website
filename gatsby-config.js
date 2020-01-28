module.exports = {
  siteMetadata: {
    title: `Cheslav Zhuravsky`,
    description: `Cheslav Zhuravsky's website`,
    author: `Cheslav Zhuravsky`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cheslav Zhuravsky's website`,
        short_name: `Cheslav Zhuravsky`,
        start_url: `/`,
        background_color: `#f1f351`,
        theme_color: `#f1f351`,
        display: `minimal-ui`,
        icon: `static/logo2.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-135914896-1', // Google Analytics / GA
        ],
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};

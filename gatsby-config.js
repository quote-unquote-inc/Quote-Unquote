module.exports = {
  siteMetadata: {
    title: `Quote Unquote, Inc.`,
    description: `Quote Unquote is relaunching operations!`,
    author: `@GabrielWest, @OffTheGrid Development`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about us",
        link: "/about",
      },
      {
        name: "services",
        link: "/services",
      },
      {
        name: "news",
        link: "/news",
      },
      {
        name: "contact us",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sass`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quote Unquote, Inc.`,
        short_name: `QUQ INC.`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#cb1741`,
        display: `minimal-ui`,
        icon: `src/images/QUQupd.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

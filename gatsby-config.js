/* eslint-disable no-undef */
module.exports = {
   siteMetadata: {
      title: `Quote Unquote, Inc.`,
      description: `Quote Unquote is relaunching operations!`,
      author: `@GabrielWest, @OffTheGridDevelopment`,
      menuLinks: [
         {
            name: "home",
            link: "/",
         },
         {
            name: "about",
            link: "/about",
         },
         {
            name: "services",
            link: "/services",
         },
         /*{
            name: "Get Involved!",
            link: "/get-involved",
         },*/
         /*{
            name: "KQUQ",
            link: "/underConstruction",
         },*/
         {
            name: "news",
            link: "/news",
         },
         {
            name: "contact",
            link: "/contact",
         },
      ],
   },

   plugins: [
      `gatsby-plugin-glamor`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-netlify-cms`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: `ab6dp88mt3bz`,
            // Learn about environment variables: https://gatsby.dev/env-vars
            //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            accessToken: `kIvhTZVAyoYt8cvnwnagsoLqbyGVadAUnD0aF19zsmg`,
         },
      },
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            // replace "UA-XXXXXXXXX-X" with your own Tracking ID
            trackingId: "UA-142028943-1",
         },
      },
      {
         resolve: `gatsby-transformer-remark`,
         options: {
            // CommonMark mode (default: true)
            commonmark: true,
            // Footnotes mode (default: true)
            footnotes: true,
            // Pedantic mode (default: true)
            pedantic: true,
            // GitHub Flavored Markdown mode (default: true)
            gfm: true,
            // Plugins configs
            plugins: [`gatsby-remark-responsive-iframe`],
         },
      },
      /*{
         resolve: 'gatsby-plugin-eslint',
         options: {
           test: /\.js$|\.jsx$/,
           exclude: /(node_modules|.cache|public)/,
           stages: ['develop'],
           options: {
             emitWarning: true,
             failOnError: false,
           },
         },
       },*/
      `gatsby-transformer-sharp`,
      `gatsby-plugin-eslint`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `Quote Unquote, Inc.`,
            short_name: `QUQ INC.`,
            start_url: `/`,
            background_color: `white`,
            theme_color: `#cb1741`,
            display: `minimal-ui`,
            icon: `src/images/favicon.png`, // This path is relative to the root of the site.
         },
      },
      {
         resolve: "gatsby-plugin-react-svg",
         options: {
            rule: {
               include: /assets/ // See below to configure properly
            }
         }
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

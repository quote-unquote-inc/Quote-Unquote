const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions
   // we use the provided allContentfulBlogPost query to fetch the data from Contentful
   return graphql(
      `
         {
            allContentfulBoardMeeting {
               edges {
                  node {
                     id
                     slug
                  }
               }
            }
         }
      `
   )
      .then(result => {
         if (result.errors) {
            console.log("Error retrieving contentful data", result.errors)
         }

         // Resolve the paths to our template
         const boardMeetingTemplate = path.resolve("./src/templates/boardMeeting.js")

         // Then for each result we create a page.
         result.data.allContentfulBoardMeeting.edges.forEach(edge => {
            createPage({
               path: `/news/${edge.node.slug}/`,
               component: slash(boardMeetingTemplate),
               context: {
                  slug: edge.node.slug,
                  id: edge.node.id,
               },
            })
         })
      })
      .catch(error => {
         console.log("Error retrieving contentful data", error)
      })
}

exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions
   // we use the provided allContentfulBlogPost query to fetch the data from Contentful
   return graphql(
      `
         {
            allContentfulNews {
               edges {
                  node {
                     id
                     slug
                  }
               }
            }
         }
      `
   )
      .then(result => {
         if (result.errors) {
            console.log("Error retrieving contentful data", result.errors)
         }

         // Resolve the paths to our template
         const newsTemplate = path.resolve(
            "./src/templates/news.js"
         )

         // Then for each result we create a page.
         result.data.allContentfulNews.edges.forEach(edge => {
            createPage({
               path: `/news/${edge.node.slug}/`,
               component: slash(newsTemplate),
               context: {
                  slug: edge.node.slug,
                  id: edge.node.id,
               },
            })
         })
      })
      .catch(error => {
         console.log("Error retrieving contentful data", error)
      })
}

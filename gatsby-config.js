module.exports = {
    siteMetadata: {
        title: `Mathis Boultoureau`,
        description: `Mathis Boultoureau, computer science student.`,
        author: `Mathis Boultoureau`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Mathis Boultoureau`,
                short_name: `mboultoureau`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#222222`,
                display: `minimal-ui`,
                icon: `src/images/icon.png` // This path is relative to the root of the site.
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};

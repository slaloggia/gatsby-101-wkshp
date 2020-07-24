module.exports = {
    siteMetadata:{
        title: 'Sarah Codes',
        author: 'Laloggia'
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-theme-blog`,
            options: {
                basePath: `/blog`,
                mdxOtherwiseConfigured: true
            }
        }
    ]
}
module.exports = {
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-theme-blog`,
            options: {
                basePath: `/blog`,
                preset: 'gatsby-theme-ui-sketchy-preset',
                mdxOtherwiseConfigured: true
            }
        }
    ]
}
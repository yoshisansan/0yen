module.exports = {
  siteUrl: 'https://nora-dev.com',
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://nora-dev.com/server-sitemap.xml', // <==== Add here
    ],
  }
}
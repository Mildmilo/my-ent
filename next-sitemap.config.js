/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://my-ent.com.au',
  generateRobotsTxt: true,
  exclude: ['/patient-portal', '/patient-portal/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/patient-portal/'] },
    ],
  },
  transform: async (_config, pagePath) => {
    const priorityMap = {
      '/': 1.0,
      '/conditions': 0.9,
      '/procedures': 0.9,
      '/about/our-surgeons': 0.9,
      '/appointments/fees-and-medicare': 0.9,
      '/appointments/your-first-visit': 0.85,
      '/for-gps': 0.85,
    }
    return {
      loc: pagePath,
      changefreq: priorityMap[pagePath] ? 'weekly' : 'monthly',
      priority: priorityMap[pagePath] ?? 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
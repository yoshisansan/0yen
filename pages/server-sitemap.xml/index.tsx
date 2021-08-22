import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import microCMS from '../../data/microcms.json'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const postFields = microCMS.map((page) => {
    if(page.slug === '0yen') {
      return {
        loc: `https://nora-dev.com/`,
        changefreq: 'daily',
        lastmod: new Date().toISOString(),
        priority: 1.0,
      }
    }
    return {
      loc: `https://nora-dev.com/${page.slug}`,
      changefreq: 'daily',
      lastmod: new Date().toISOString(),
      priority: 0.8,
    }
  });

  return getServerSideSitemap(ctx, postFields)
}

// Default export to prevent next.js errors
export default () => {}
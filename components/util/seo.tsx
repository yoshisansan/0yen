import { NextSeo } from 'next-seo';

const SEO = ({title, description, url, thumbnail, pageType, }) => {
  const siteTitle = "野良開発のススメ";
  const subTitle = "お金をかけない独学Webサービス開発";

  return (
  <>
  <NextSeo
    title={title}
    description={description}
    openGraph={{
      url,
      title,
      description,
      images: [
        {
          url: thumbnail,
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
        {
          url: '',
          width: 900,
          height: 800,
          alt: 'Og Image Alt Second',
        },
        { url: 'https://www.example.ie/og-image-03.jpg' },
      ],
      site_name: siteTitle,
    }}
    twitter={{
      site: '@akifumiyoshimu',
      cardType: 'summary_large_image',
    }}
    additionalLinkTags={[
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: 'https://www.test.ie/touch-icon-ipad.jpg',
        sizes: '76x76'
      }
    ]}
  />
</>
  )
};
export default SEO;
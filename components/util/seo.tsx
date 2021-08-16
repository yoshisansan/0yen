import { NextSeo } from 'next-seo';
import { VFC } from 'react';

// type ThumbNail = {
//   url: string | undefined;
//   height: number;
//   width: number;
// };
const SEO: VFC<{
  title: string;
  description: string | undefined;
  url: string;
  pageType: string;
}> = ({ title, description, url, pageType }) => {
  const siteTitle = '野良開発のススメ';
  // const subTitle = 'お金をかけない独学Webサービス開発';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description,
          type: pageType,
          images: [
            {
              url: 'images/nora-dev.png',
              width: 1200,
              height: 630,
              alt: `野良開発のススメ画像`
            }
          ],
          site_name: siteTitle
        }}
        twitter={{
          site: '@akifumiyoshimu',
          cardType: 'summary_large_image'
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico'
          },
          {
            rel: 'apple-touch-icon',
            href: 'https://www.test.ie/touch-icon-ipad.jpg',
            sizes: '76x76'
          }
        ]}
      />
    </>
  );
};
export default SEO;

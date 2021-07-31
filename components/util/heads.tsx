import Image from 'next/image'
import Head from 'next/head'

// ダミーデータ
const name = 'あきふみ'
export const siteTitle = '野良開発のススメ | 最小コストで独学Webサービス開発'

const Heads = () => {
  return (
    <Head>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Learn how to build a personal website using Next.js"
    />
    <meta
      property="og:image"
      content={`https://og-image.vercel.app/${encodeURI(
        siteTitle
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name="og:title" content={siteTitle} />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
  );
};
export default Heads;
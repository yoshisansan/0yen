import { FC } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import { getSortedPostsData } from 'lib/posts'
import { client } from 'lib/clients'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'
import debug from 'debug'
import dayjs from 'dayjs'
const lg = debug('log')

const Home: FC<{allPostsData: any, data: any}> = ({ data }) => {

  const posts = data.map((data) => {
    const { id, title, slug, thumbnail, description, time, body } = data;
    return (
      <div key={id}>
        <div>パンクズ</div>
        <div>
        {thumbnail &&
          <Link href={slug}>
            <img src={thumbnail.url} alt="サムネイル" />
          </Link>
        }
          <div>
            <p>{dayjs(time).format('YYYY年MM月DD日')}</p>
            <h1>{title}</h1>
          </div>
          {/* <p>{description}</p> */}
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    )
  }
  )

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box maxW="620px" m="auto">
        {posts}
      </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const allPostsData = getSortedPostsData();
  const data = await client.get({ endpoint: "0yen" });

  return {
    props: {
      allPostsData,
      data: data.contents,
    }
  }
}

export default Home;
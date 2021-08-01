import { FC } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import { getSortedPostsData } from 'lib/posts'
import { client } from 'lib/clients'
import Link from 'next/link'
import Date from 'components/date'
import { GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'
import debug from 'debug'

const lg = debug('log')

const Home: FC<{allPostsData: any}> = ({ allPostsData, microCMS }) => {
  // lg(microCMS);
  
  const posts = microCMS.map((data) => {
    const { id, title, slug, thumbnail: {url}, description, time, body } = data;
    lg(time);
    return (
      <div key={id}>
        <div>パンクズ</div>
        <div>
          <Link href={slug}>
            <img src={url} alt="サムネイル" />
          </Link>
          <div>
            <p>{time}</p>
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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box maxW="620px" m="auto">
        {posts}
      </Box>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const allPostsData = getSortedPostsData()
  const cmsData = await client.get({ endpoint: "0yen" })
  // lg(data);
  return {
    props: {
      allPostsData,
      microCMS: cmsData.contents,
    }
  }
}

export default Home;
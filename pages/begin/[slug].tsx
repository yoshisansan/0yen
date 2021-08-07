import Layout from 'components/layout'
import { getAllPostIds, getPostData } from 'lib/posts'
import { client } from 'lib/clients'
import Head from 'next/head'
import Date from 'components/date'
import dayjs from 'dayjs'
import { Box } from '@chakra-ui/react'
import utilStyles from 'styles/utils.module.css'
import microCMS from 'data/microcms.json'

const Post = ({ postData }) => {
  const {id, thumbnail, time, title, body } = postData;
  return (
    <Layout>
      <Box maxW="620px" m="auto">
      <div key={id}>
        <div>パンクズ</div>
        <div>
          <div>
            {thumbnail && <img src={thumbnail.url} alt="サムネイル" /> }
          </div>
          <div>
            <p>{dayjs(time).format('YYYY年MM月DD日')}</p>
            <h1>{title}</h1>
          </div>
          {/* <p>{description}</p> */}
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = microCMS.map(({slug}) => {

    return {
      params: {
        slug
      }
    }
  })
  // const paths = data.contents.map(({ slug }) => {
  //   return {
  //     params: {
  //       slug
  //     }
  //   }
  // });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // const data = await client.get({ endpoint: "0yen" });
  const postData = microCMS.find((data) => data.slug === params.slug);
  return {
    props: {
      postData
    }
  }
}

export default Post;
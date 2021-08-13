/** @jsxImportSource @emotion/react */
import Layout from 'components/layout'
import { getAllPostIds, getPostData } from 'lib/posts'
import { client } from 'lib/clients'
import Head from 'next/head'
import Date from 'components/date'
import dayjs from 'dayjs'
import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { css } from '@emotion/react'
import utilStyles from 'styles/utils.module.css'
import microCMS from 'data/microcms.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGetPocket } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import SocialBtn from 'components/parts/socialBtn'

const paddingTop = css`
  padding-top: 8px;
`;

const Post = ({ postData }) => {
  const {id, thumbnail, time, title, body } = postData;
  return (
    <Layout>
      <Box maxW="620px" m="auto">
      <div key={id}>
        <div>
          <Box mt="24px">
            <p>{dayjs(time).format('YYYY年MM月DD日')}</p>
            <h1 css={paddingTop}>{title}</h1>
          </Box>
          <Box>
            {thumbnail && <img src={thumbnail.url} alt="サムネイル" /> }
          </Box>
          <Flex w="240px" mt="8px" align="center" justify="space-between">
            <SocialBtn title={title}/>
          </Flex>
          {/* <p>{description}</p> */}
          <Skeleton isLoaded>
            <Box pt="24px" dangerouslySetInnerHTML={{ __html: body }} />
          </Skeleton>
          <Flex w="240px" mt="8px" align="center" justify="space-between">
            <SocialBtn title={title} />
          </Flex>
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
/** @jsxImportSource @emotion/react */
import Layout from 'components/layout'
import Head from 'next/head'
import dayjs from 'dayjs'
import { Box, Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'
import microCMS from 'data/microcms.json'
import SocialBtn from 'components/parts/socialBtn'
import Link from 'next/link'

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
          <Box pt="24px" dangerouslySetInnerHTML={{ __html: body }} />
          <Flex w="240px" mt="32px" align="center" justify="space-between">
            <SocialBtn title={title} />
          </Flex>
        </div>
      </div>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = microCMS.map((data) => {
    return {
      params: {
        slug: data.slug
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // const data = await client.get({ endpoint: "0yen" });
  const postData = microCMS.find((data) => {
    return data.slug === params.slug
  });

  return {
    props: {
      postData
    }
  }
}

export default Post;
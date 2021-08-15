/** @jsxImportSource @emotion/react */
import { VFC } from 'react'
import Image from 'next/image'
import SEO from 'components/util/seo'
import { css } from '@emotion/react'
import Layout from 'components/layout'
import microCMS from 'data/microcms.json'
import { GetStaticProps } from 'next'
import { Box, Flex } from '@chakra-ui/react'
import dayjs from 'dayjs'
import SocialBtn from 'components/parts/socialBtn'
import NextPrev from 'components/parts/nextPrev'
import { OnePostData } from 'types/postsTypes'

const Home: VFC<{data: OnePostData}> = ({data}) => {
  const {id, thumbnail, time, title, body, slug, description, nextSlug, beforeSlug } = data;

  const paddingTop = css`
    padding-top: 8px;
  `;

  return (
    <>
    <SEO title={title} description={description} url={slug} thumbnail={thumbnail} pageType="website" />
    <Layout>
      <Box maxW="620px" m="auto">
      <div key={id}>
        <div>
          <Box mt="24px">
            <p>{dayjs(time).format('YYYY年MM月DD日')}</p>
            <h1 css={paddingTop}>{title}</h1>
          </Box>
          <Box>
          {thumbnail && <Image src={thumbnail.url} alt={`${title}のサムネイル画像`} width="620px" height="190px" objectFit="cover"/> }
          </Box>
          <Flex w="240px" mt="8px" align="center" justify="space-between">
            <SocialBtn title={title}/>
          </Flex>
          { body ? <Box pt="24px" dangerouslySetInnerHTML={{ __html: body }} /> : <div>コンテンツは準備中です。</div> }
          <NextPrev nextSlug={nextSlug} beforeSlug={beforeSlug}/>
          <Flex w="240px" mt="32px" align="center" justify="space-between">
            <SocialBtn title={title} />
          </Flex>
        </div>
      </div>
      </Box>
    </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const data = microCMS.find(item => item.slug === '0yen');

  return {
    props: {
      data,
    }
  }
}

export default Home;
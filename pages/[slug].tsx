/** @jsxImportSource @emotion/react */
import { VFC } from 'react';
import Image from 'next/image';
import Layout from 'components/layout';
import SEO from 'components/util/seo';
import dayjs from 'dayjs';
import { Box, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import microCMS from 'data/microcms.json';
import SocialBtn from 'components/parts/socialBtn';
import NextPrev from 'components/parts/nextPrev';
import { OnePostData, PostStaticProps } from 'types/postsTypes';

const paddingTop = css`
  padding-top: 8px;
`;

const Post: VFC<{ postData: OnePostData }> = ({ postData }) => {
  const { id, thumbnail, time, title, body, slug, description, nextSlug, beforeSlug } = postData;
  return (
    <>
      <SEO
        title={title}
        description={description}
        url={slug}
        pageType="article"
      />
      <Layout>
        <Box maxW="620px" m="auto">
          <div key={id}>
            <div>
              <Box mt="24px">
                <p>{dayjs(time).format('YYYY年MM月DD日')}</p>
                <h1 css={paddingTop}>{title}</h1>
              </Box>
              <Box>
                {thumbnail && (
                  <Image
                    src={thumbnail.url}
                    alt={`${title}のサムネイル画像`}
                    width="620px"
                    height="190px"
                    objectFit="cover"
                    blurDataURL="data:..."
                    placeholder="blur"
                  />
                )}
              </Box>
              <Flex w="240px" mt="8px" align="center" justify="space-between">
                <SocialBtn title={title} />
              </Flex>
              {body ? (
                <Box pt="24px" dangerouslySetInnerHTML={{ __html: body }} />
              ) : (
                <Box pt="24px">コンテンツは準備中です。</Box>
              )}
              <NextPrev nextSlug={nextSlug} beforeSlug={beforeSlug} />
              <Flex w="240px" mt="32px" align="center" justify="space-between">
                <SocialBtn title={title} />
              </Flex>
            </div>
          </div>
        </Box>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const paths = microCMS.map((data) => {
    return {
      params: {
        slug: data.slug
      }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: PostStaticProps }) {
  const postData = microCMS.find((data) => {
    return data.slug === params.slug;
  });

  return {
    props: {
      postData
    }
  };
}

export default Post;

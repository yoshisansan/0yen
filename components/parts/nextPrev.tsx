/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { VFC } from 'react';
import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';

const nextArrow = css`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid #030d1b;
    top: 36%;
    right: 1%;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }
`;
const prevArrow = css`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 34%;
    left: 4%;
    width: 8px;
    height: 8px;
    border: 2px solid;
    border-color: #565656 #565656 transparent transparent;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
`;

const NextPrev: VFC<{ nextSlug: string | undefined; beforeSlug: string | undefined }> = ({
  nextSlug,
  beforeSlug
}) => {
  return (
    <Flex justify="flex-end" mt="36px" h="30px" align="center">
      {beforeSlug !== undefined ? (
        <Link passHref href={'/' + (beforeSlug === '0yen' ? '/' : beforeSlug)}>
          <Box cursor="pointer" mr="24px">
            <Text p="0 2px 0 16px" css={prevArrow}>
              {'前のページ'}
            </Text>
          </Box>
        </Link>
      ) : (
        ''
      )}
      {nextSlug !== undefined ? (
        <Link passHref href={'/' + nextSlug}>
          <Box
            cursor="pointer"
            textAlign="center"
            bg="brand.mark"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Text css={nextArrow} p="0 16px 0 2px" fontWeight="bold">
              次のページ
            </Text>
          </Box>
        </Link>
      ) : (
        ''
      )}
    </Flex>
  );
};
export default NextPrev;

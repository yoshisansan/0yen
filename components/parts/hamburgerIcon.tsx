/** @jsxImportSource @emotion/react */
import { Box, Button, Text, Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"

const HamburgerLine = styled.div`
    position: absolute;
    width: 100%;
    height: 32px;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    &:before {
      position: absolute;
      background: #030D1B;
      width: 100%;
      height: 2px;
      top: 38%;
      content: '';
      display: block;
    }
    &:after {
      position: absolute;
      background: #030D1B;
      width: 100%;
      height: 2px;
      top: 62%;
      content: '';
      display: block;
    }
`

// ダミーデータ
const name = 'あきふみ';
const siteTitle = '野良開発のススメ';
const subTitle = '~ お金をかけない独学Webサービス開発 ~';

const HamburgerIcon = () => {
  return (
    <Box>
      <Box as="button" w="32px" h="32px" cursor="pointer" bg="#fff" position="relative" display="flex">
        <HamburgerLine />
      </Box>
    </Box>
  );
};
export default HamburgerIcon;
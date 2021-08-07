/** @jsxImportSource @emotion/react */
import { Box, Button, Text, Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"

// ダミーデータ
const name = 'あきふみ';
const siteTitle = '野良開発のススメ';
const subTitle = '~ お金をかけない独学Webサービス開発 ~';

const HamburgerIcon = () => {
  return (
    <Box>
      <Box as="button" w="32px" h="32px" cursor="pointer" bg="#fff" position="relative" display="flex">
        <HamburgerIcon />
      </Box>
    </Box>
  );
};
export default HamburgerIcon;
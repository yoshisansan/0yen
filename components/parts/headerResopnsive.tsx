import { Box, Text, Flex, Grid } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import HamburgerMenu from './hamburgerMenu';

// ダミーデータ
const name = 'あきふみ';
const siteTitle = '野良開発のススメ';
const subTitle = '~ お金をかけない独学Webサービス開発 ~';

const HeaderResponsive = () => {
  return (
    <Box w="100vw" h="80px" bg="#fff" boxShadow="0 0 1px 1px #e0e0e0" position="fixed" top="0">
      <Flex justify="space-between">
        <Flex p="10px 16px" h="80px" justify="flex-start" align="center" flexDirection="row" flexWrap="wrap">
          <Box pr="8px" display="flex" align="center" lineHeight="80px">
            <Avatar w="60px" h="60px" name="あきふみ" src="/images/profile.png" />
          </Box>
          <Box w="288px" p="8px 0 4px 0" display="inline-block">
            <Text fontSize="big" bg="brand.main" display="inline" p="0 8px">{siteTitle}</Text>
            <Text as="span" fontSize="12px" display="block">{subTitle}</Text>
          </Box>
        </Flex>
        <Flex align="center">
          <Box p="10px 16px">
            <HamburgerMenu />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
export default HeaderResponsive;
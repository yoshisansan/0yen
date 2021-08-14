import { useState, useEffect } from 'react'
import { Box, Text, Flex, useMediaQuery } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import HamburgerMenu from './hamburgerMenu'
import Link from 'next/link'

// ダミーデータ
const name = 'あきふみ';
const siteTitle = '野良開発のススメ';
const subTitle = '~ お金をかけない独学Webサービス開発 ~';

const HeaderResponsive = () => {
  const [isThan480, setIsThan480] = useState(false)
  const [mq] = useMediaQuery("(min-width: 480px)")
  useEffect(() => {
    if(mq !== isThan480) {
      setIsThan480(mq);
    }
  },[mq]);

  return (
    <Box w="100vw" h="80px" bg="#fff" boxShadow="0 0 1px 1px #e0e0e0" position="fixed" top="0" zIndex="1">
      <Flex justify="space-between">
        <Link href="/">
        <Flex p={"0 0 0 16px"} h="80px" justify="flex-start" align="center" flexDirection="row" flexWrap="wrap" cursor="pointer">
            <Box pr="8px" display="flex" align="center" lineHeight="80px">
              <Avatar w={isThan480 ? "60px" : "50px" } h={isThan480 ? "60px" : "50px" } name="あきふみ" src="/images/profile.png" />
            </Box>
            <Box w={isThan480 ? "260px" : "172px" } p="8px 0 4px 0" display="inline-block">
              <Text fontSize={ isThan480 ? 'big' : '18px'} bg="brand.main" display="inline" p="0 8px">{siteTitle}</Text>
              <Text as="span" fontSize="12px" display="block">{ isThan480 ? subTitle : '~ 独学Webサービス開発 ~' }</Text>
            </Box>
        </Flex>
        </Link>
        <Flex align="center">
          <Box p={ isThan480 ? "10px 16px 10px 0" : "10px 0"}>
            <HamburgerMenu />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderResponsive;
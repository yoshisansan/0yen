import { Box, Text, Flex } from '@chakra-ui/react'
import Link from 'next/link'

// ダミーデータ
const name = 'あきふみ';
const siteTitle = '野良開発のススメ';
const subTitle = '~ お金をかけない独学Webサービス開発 ~';

const Header = () => {
  return (
    <Link href="/">
    <Flex justifyContent="center" cursor="pointer">
      <Box borderBottom="main" w="288px" p="8px 0">
        <Text fontSize="big" bg="brand.main" display="inline" p="0 8px">{siteTitle}</Text>
        <Text as="span" fontSize="12px" display="block">{subTitle}</Text>
      </Box>
    </Flex>
    </Link>
  );
};
export default Header;
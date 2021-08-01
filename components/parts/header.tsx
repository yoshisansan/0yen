import { Box, Text, Flex } from '@chakra-ui/react'


// ダミーデータ
const name = 'あきふみ';
const siteTitle = '野良開発のススメ';
const subTitle = '~ お金をかけない独学Webサービス開発 ~';

const Header = () => {
  return (
    <Flex justifyContent="center">
      <Box borderBottom="main" w="288px" p="8px 0">
        <Text fontSize="big">{siteTitle}<Text as="span" fontSize="12px" display="block">{subTitle}</Text></Text>
      </Box>
    </Flex>
  );
};
export default Header;
import { Box, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box position="relative" zIndex="0" w="100vw" h="80px" bg="#fff" borderTop="1px solid #e0e0e0" mt="24px">
      <Box>
        <Text position="absolute" display="inline" p="0 8px" bottom="8px" right="8px" color="moji.sub" fontSize="mini">Copyright © 2021 あきふみ. All rights reserved.</Text>
      </Box>
    </Box>
  );
};
export default Footer;
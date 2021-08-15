/** @jsxImportSource @emotion/react */
import Header from './header'
import Profile from './profile'
import NavList from './navlist'
import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'

const hiddenOverflowScroll = css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display:none;
  }
`;

const Sidebar = () => {
  return (
    <Box borderRight="main" h="100vh" w="320px" bg="#fff" overflowY="auto" position="fixed" zIndex="1" css={hiddenOverflowScroll}>
      <Header />
      <Box w="288px" m="auto" mt="16px">
        <Profile />
      </Box>
      <Box w="288px" m="auto" mt="16px">
        <NavList onClose="null" isHamburger={false} />
      </Box>
    </Box>
  )
};
export default Sidebar;
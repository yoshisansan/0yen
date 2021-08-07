/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Profile from './profile';
import NavList from './navlist';
import {
  useDisclosure,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import {HamburgerLine} from './hamburgerIcon'

const hamburgerBtn = css`
  position: relative;
  display: flex;
  width: 32px;
  height: 32px;
  cursor: pointer;
  background: #fff;
`;

// ダミーデータ
const name = 'あきふみ';
const siteTitle = '野良開発のススメ';
const subTitle = '~ お金をかけない独学Webサービス開発 ~';

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="32px" h="32px" m="0 16px" cursor="pointer" bg="#fff" position="relative" display="flex">
      <HamburgerLine onClick={onOpen} isOpenBool={isOpen}/>
      {/* <Button as={(isOpen ? HamburgerOpen : HamburgerLine} onClick={onOpen} bg="#fff"/> */}
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>野良開発のススメ</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NavList />
            <Box mt="24px">
              <Profile />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Menu>
        <MenuButton
          // onClick={setFlag.toggle}
          as={(flag ? HamburgerOpen : HamburgerLine)}
          aria-label="Options"
        />
        <MenuList w="90vw">
          <MenuItem>
            New Tab
          </MenuItem>
          <MenuItem>
            New Window
          </MenuItem>
          <MenuItem>
            Open Closed Tab
          </MenuItem>
          <MenuItem>
            Open File...
          </MenuItem>
        </MenuList>
      </Menu> */}
    </Box>
  );
};
export default HamburgerMenu;
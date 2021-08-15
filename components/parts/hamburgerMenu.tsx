/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
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

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="32px" h="32px" m="0 16px" cursor="pointer" bg="#fff" position="relative" display="flex">
      <HamburgerLine onClick={onOpen} isOpenBool={isOpen}/>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>野良開発のススメ</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NavList onClose={onClose} isHamburger="true" />
            <Box mt="24px">
              <Profile />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>閉じる</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default HamburgerMenu;
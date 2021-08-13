/** @jsxImportSource @emotion/react */
import { Box, Button, Text, Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"

type HamburgerLineType = {
  isOpenBool: boolean;
};
export const HamburgerLine = styled.div<HamburgerLineType>`
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
      top: ${(props) => (props.isOpenBool ? '50%' : '38%')};
      content: '';
      display: block;
      transform: ${(props) => (props.isOpenBool ? 'rotate(45deg)' : '0')};
    }
    &:after {
      position: absolute;
      background: #030D1B;
      width: 100%;
      height: 2px;
      top: ${(props) => (props.isOpenBool ? '50%' : '62%')};
      content: '';
      display: block;
      transform: ${(props) => (props.isOpenBool ? 'rotate(-45deg)' : '0')};
    }
`
export const HamburgerOpen = styled.div`
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
      top: 50%;
      content: '';
      display: block;
      transform: rotate(45deg);
    }
    &:after {
      position: absolute;
      background: #030D1B;
      width: 100%;
      height: 2px;
      top: 50%;
      content: '';
      display: block;
      transform: rotate(-45deg);
    }
`
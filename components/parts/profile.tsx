/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import { css } from '@emotion/react'
import { Box, Text } from "@chakra-ui/react"

const imageRadius = css`
  border-radius: 50%;
`;

const name = 'あきふみ'
const siteTitle = '野良開発のススメ | 最小コストで独学Webサービス開発'

const Profile = () => {
  return (
  <Box w={320} alingItems="center" m="auto">
    <Box textAlign="center">
      <Image
        priority
        src="/images/profile.png"
        css={imageRadius}
        height={120}
        width={120}
        alt={name}
      />
    </Box>
    <Box>
      <div>
        <Text alignItems="center">プロフィール</Text>
        <Text>Webサービスを作りたくて独学でフロントエンド開発</Text>
      </div>
      <div>Twiterアイコン</div>
    </Box>
  </Box>
  );
};
export default Profile;
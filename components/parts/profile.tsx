/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import { css } from '@emotion/react'
import { Box, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLine } from '@fortawesome/free-brands-svg-icons'

const imageRadius = css`
  border-radius: 50%;
`;
const marginAutoCss = css`
  margin: 0 auto;
`;

const name = 'あきふみ'
const siteTitle = '野良開発のススメ | 最小コストで独学Webサービス開発'

const Profile = () => {
  return (
  <Box maxW="320px" m="0 auto" p="16px" bg="#fff"boxShadow="0px 0px 3px 2px #eee" fontSize="14px" alignItems="center" m="auto">
    <Box textAlign="center">
      <Image
        priority
        src="/images/profile.png"
        css={imageRadius}
        height={80}
        width={80}
        alt={name}
      />
    </Box>
    <Box m="0 auto">
      <div>
        <Text textAlign="center" color="moji.sub">プロフィール</Text>
        <Text m="16px 0">Webサービスを作りたくて独学でフロントエンド開発に集中して２年（事業を目指している）<Text as="span" mt="12px" display="block">必要なスキルを逆算しながら欲しい栄養素が100gでわかる100g.jpを開発＆運営中</Text><Text as="span" mt="12px" display="block">Qiitaで技術記事書いています</Text></Text>
      </div>
      <Box m="auto"><FontAwesomeIcon css={marginAutoCss}color='#1DA1F2' width={32} icon={faTwitter}/></Box>
    </Box>
  </Box>
  );
};

export default Profile;
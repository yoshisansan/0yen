/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import { css } from '@emotion/react'
import Link from 'next/link'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

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
  <Box maxW="320px" m="0 auto" p="16px" bg="#fff"boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" fontSize="14px" alignItems="center">
    <Box textAlign="center">
      <Avatar bg="#4B95C2" w="80px" h="80px" name="あきふみ" src="/images/profile.png" />
    </Box>
    <Box m="0 auto">
      <div>
        <Text textAlign="center" color="moji.sub">{`あきふみ＠海外個人開発(タイ)`}</Text>
        <Text m="16px 0">Webサービスを作りたくて独学でフロントエンド開発に集中して２年の開発者（事業を目指している）<Text as="span" mt="12px" display="block">必要なスキルを逆算しながら欲しい栄養素が100gでわかる<Link href="https://100g.jp"><a target="_blank" rel="noreferrer">100g.jp</a></Link>を開発＆運営中</Text><Text as="span" mt="12px" display="block"><Link href="https://qiita.com/akifumiyoshimu"><a target="_blank" rel="noreferrer">Qiita</a></Link>で技術記事書いています</Text></Text>
      </div>
    <Link href="https://twitter.com/akifumiyoshimu"><Box m="auto"><FontAwesomeIcon cursor="pointer" css={marginAutoCss} color='#4B95C2' width={24} icon={faTwitter}/></Box></Link>
    </Box>
  </Box>
  );
};

export default Profile;
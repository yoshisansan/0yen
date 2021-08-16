/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { VFC } from 'react';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGetPocket } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, useToast } from '@chakra-ui/react';

const marginAutoCss = css`
  margin: 0 auto;
`;

const boxNeumorphism = css`
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inherit;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;
  }
  &:active {
    background: #ffffff;
    box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;
  }
`;

const hatenaIcon = css`
  width: 28px;
  height: 28px;
  border-radius: 20%;
  background-color: #4b95c2;
  position: relative;
  margin: auto;

  &:before {
    content: 'B!';
    font-family: Verdana;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
    position: absolute;
  }
`;
const SocialBtn: VFC<{ title: string }> = ({ title }) => {
  const toast = useToast();
  const { asPath } = useRouter(),
    url = `https://nora-dev.com${asPath}`,
    twitterURL = `https://twitter.com/intent/tweet?text=${encodeURI(title)}&hashtags=${encodeURI('野良開発のススメ')}&url=${url}`,
    facebookURL = `https://www.facebook.com/share.php?u=${url}`,
    pocketURL = `https://getpocket.com/edit?url=${url}&title=${title}`,
    hatenaURL = `https://b.hatena.ne.jp/add?mode=confirm&url=${url}`;

  return (
    <>
      <a href={twitterURL} css={boxNeumorphism} target="_blank" rel="nofollow noopener noreferrer">
        <FontAwesomeIcon css={marginAutoCss} color="#4B95C2" width={28} icon={faTwitter} />
      </a>
      <a href={facebookURL} css={boxNeumorphism} target="_blank" rel="nofollow noopener noreferrer">
        <FontAwesomeIcon css={marginAutoCss} color="#4B95C2" width={28} icon={faFacebook} />
      </a>
      <a href={pocketURL} css={boxNeumorphism} target="_blank" rel="nofollow noopener noreferrer">
        <FontAwesomeIcon css={marginAutoCss} color="#4B95C2" width={28} icon={faGetPocket} />
      </a>
      <a href={hatenaURL} css={boxNeumorphism} target="_blank" rel="nofollow noopener noreferrer">
        <Box css={hatenaIcon} m="0 auto"></Box>
      </a>
      <CopyToClipboard text={asPath}>
        <Button
          borderRadius="0"
          p="0"
          css={boxNeumorphism}
          onClick={() => {
            toast({
              title: 'リンクをコピーしました',
              status: 'success',
              duration: 2000,
              isClosable: true
            });
            document.execCommand('url');
          }}>
          <FontAwesomeIcon css={marginAutoCss} color="#4B95C2" width={24} icon={faCopy} />
        </Button>
      </CopyToClipboard>
    </>
  );
};
export default SocialBtn;

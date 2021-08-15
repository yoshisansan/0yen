/** @jsxImportSource @emotion/react */
import { VFC, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MicroCMS } from 'components/util/context';
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { OnePostData, ParentPostData } from 'types/postsTypes';

const borderList = css`
  position: relative;
  border-left: solid 1px #e0e0e0;
`;

const NavList: VFC<{ onClose: () => void; isHamburger: boolean }> = ({ onClose, isHamburger }) => {
  const {
    query: { slug },
    asPath
  } = useRouter();
  const { microCMSdata } = useContext(MicroCMS);

  const parentData = microCMSdata
    .filter((onePost: OnePostData) => onePost.isParent === true)
    .sort((a: OnePostData, b: OnePostData) => (a.time > b.time ? 1 : -1));
  const accordData = parentData.map((parentData: ParentPostData) => {
    const genre = parentData.genre[0];
    const childData = microCMSdata.filter((onePost: OnePostData) => onePost.genre[0] === genre);
    // 記事の投稿日時の昇順データとして格納
    parentData['childData'] = childData.sort((a: OnePostData, b: OnePostData) =>
      a.time > b.time ? 1 : -1
    );

    return parentData;
  });

  // locationの記事のあるアコーディオンのIndexを取得
  const indexNum = accordData.findIndex((parentData: ParentPostData) => {
    const res = parentData.childData.findIndex((childData: OnePostData) => {
      const childSlug = childData.slug === '0yen' ? undefined : childData.slug;

      return childSlug === slug;
    });
    if (res === -1) return false;

    return true;
  });

  return (
    <Accordion defaultIndex={[indexNum]} allowMultiple>
      {accordData.map((parentData: ParentPostData, index: number) => {
        return (
          <AccordionItem p={4} key={index}>
            <div>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {parentData.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </div>
            <Box ml="18px" mt="12px" css={borderList} borderLeft="solid 1px #e0e0e0">
              {parentData.childData.map((child: OnePostData, index: number) => {
                const childSlug = child.slug === '0yen' ? '' : child.slug;

                return (
                  <AccordionPanel
                    color={asPath === `/${childSlug}` ? 'moji.main' : 'moji.sub'}
                    fontWeight={asPath === `/${childSlug}` ? 'bold' : 'normal'}
                    key={index}
                    pb={4}>
                    <Box
                      onClick={() => {
                        if (isHamburger) return onClose();
                      }}>
                      <Link passHref href={childSlug === '' ? '/' : childSlug}>
                        <Text cursor="pointer">・{child.title}</Text>
                      </Link>
                    </Box>
                  </AccordionPanel>
                );
              })}
            </Box>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
export default NavList;

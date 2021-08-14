/** @jsxImportSource @emotion/react */
import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MicroCMS } from 'components/util/context'
import { Box, Text, Button, List, ListItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { css } from '@emotion/react'


const borderList = css`
  position: relative;
  border-left: solid 1px #e0e0e0;
  /* &:before {
    content: '';
    height: 100px;
    width: 1px;
    background-color: #e0e0e0;
    position: absolute;
    left: 0;
  } */
`;

const NavList = ({onClose, isHamburger}) => {
  const { query: { slug }, asPath } = useRouter();
  const { microCMSdata } = useContext(MicroCMS);

  const parentData = microCMSdata.filter(item => item.isParent === true).sort((a, b) => a.time > b.time ? 1 : -1);
  const accordData = parentData.map((parentData) => {
    const genre = parentData.genre[0];
    const childData = microCMSdata.filter((data) => data.genre[0] === genre);
    // 記事の投稿日時の昇順データとして格納
    parentData["childData"] = childData.sort((a, b) => a.time > b.time ? 1 : -1);

    return parentData;
  });

  // locationの記事のあるアコーディオンのIndexを取得
  const indexNum = accordData.findIndex((parentData) => {
    const res = parentData.childData.findIndex(childData => {
      const childSlug = childData.slug === '0yen' ? undefined : childData.slug;

      return childSlug === slug
    });
    if(res === -1) return false;

    return true;
  });

  return (
    <Accordion defaultIndex={[indexNum]} allowMultiple>
          {accordData.map((parentData, index) => {
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
                { parentData.childData.map((child, index) => {
                  const childSlug = child.slug === '0yen' ? '' : child.slug;

                  return (
                    <AccordionPanel color={ (asPath === `/${childSlug}` ? 'moji.main' : 'moji.sub') } fontWeight={ (asPath === `/${childSlug}` ? 'bold' : 'normal') } key={index} pb={4}>
                      <Box onClick={() => {
                        if(isHamburger) return onClose();
                      }}>
                        <Link href={( childSlug === '' ? '/' : childSlug) }><Text cursor="pointer">・{child.title}</Text></Link></Box>
                    </AccordionPanel>
                  )
                })
                }
                </Box>
              </AccordionItem>
            )
          })}
    </Accordion>


    // <List>
    //   <ListItem></ListItem>
    //   {menuData.map((menu, index) => {
    //     return (
    //       <ListItem m="8px 0" key={index}>
    //       {menu.title}
    //       </ListItem>
    //     )
    //   })}
    // </List>
  )
};
export default NavList;
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
  const { query: { slug } } = useRouter();

  const { microCMSdata } = useContext(MicroCMS);
  const parentData = microCMSdata.filter(item => item.isParent === true);
  const accordData = parentData.map((parentData) => {
    const genre = parentData.genre[0];
    const childData = microCMSdata.filter((data) => data.genre[0] === genre);
    // 記事の投稿日時の昇順データとして格納
    parentData["childData"] = childData.sort((a, b) => a.time > b.time ? 1 : -1);

    return parentData;
  });

  // locationの記事のあるアコーディオンのIndexを取得
  const indexNum = accordData.findIndex((parentData) => {
    const res = parentData.childData.findIndex(childData => childData.slug === slug);
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
                  return (
                    <AccordionPanel color={ (slug === child.slug ? 'moji.main' : 'moji.sub') } fontWeight={ (slug === child.slug ? 'bold' : 'normal') } key={index} pb={4}>
                      <Box onClick={() => {
                        if(isHamburger) return onClose();
                      }}>
                        <Link href={child.slug}><Text cursor="pointer">・{child.title}</Text></Link></Box>
                    </AccordionPanel>
                  )
                })
                }
                </Box>
              </AccordionItem>
            )
          })}

      {/* <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem> */}
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
import { useContext } from 'react'
import { MicroCMS } from 'components/util/context'
import { Box, List, ListItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
// Propsダミデータ
const title = ''
const titleArr = ['お金をかけずに独学でプログラミングを覚えてWebサービス開発できるようになるまで','自分はこうして0円でプログラミングを独学してきた','野生の個人開発者がプログラミングの独学に使ってきたサイト','【帰納法のススメ】プログラミング独学は何からすべき？']

// const Lists = titleArr.map((title, index) => {
//   return (
//     <ListItem m="8px 0" key={index}>
//       {title}
//     </ListItem>
//   )
// });

const NavList = () => {
  const { microCMSdata } = useContext(MicroCMS);
  const menuData = microCMSdata.map(({ id, title, slug, genre }) => {
    return {
      id,
      title,
      slug,
      genre,
    }
  });
  return (
    <Accordion>
          {menuData.map((menu, index) => {
            return (
              <AccordionItem p={4} key={index}>
                <p>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {menu.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                </p>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
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
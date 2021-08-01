import { Box, List, ListItem } from '@chakra-ui/react'
// Propsダミデータ
const title = ''
const titleArr = ['お金をかけずに独学でプログラミングを覚えてWebサービス開発できるようになるまで','自分はこうして0円でプログラミングを独学してきた','野生の個人開発者がプログラミングの独学に使ってきたサイト','【帰納法のススメ】プログラミング独学は何からすべき？']

const Lists = titleArr.map((title, index) => {
  return (
    <ListItem m="8px 0" key={index}>
      {title}
    </ListItem>
  )
});

const NavList = () => {
  return (
    <List>
      {Lists}
    </List>
  )
};
export default NavList;
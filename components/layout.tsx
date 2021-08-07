import { useState, useEffect } from 'react'
import Heads from './util/heads'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from 'components/parts/sidebar'
import { Box, Flex, Grid, useMediaQuery } from "@chakra-ui/react"
import HeaderResponsive from 'components/parts/headerResopnsive'
import { PhoneIcon } from "@chakra-ui/icons"
import { client } from 'lib/clients'
import useSWR from 'swr'
import microCMS from 'data/microcms.json'
import debug from 'debug'


const lg = debug('log');
const name = 'あきふみ'
export const siteTitle = '野良開発のススメ | 最小コストで独学Webサービス開発'

// const fetcher = (url) => fetch(client).then((res) => res.json())
// const fetcher = () => client.get({ endpoint: "0yen" }).then((res) => res);

const Layout = ({ children }) => {
  // const { data, error } = useSWR('', fetcher)
  const [isThan880, setIsThan880] = useState(false)
  const [mq] = useMediaQuery("(min-width: 880px)")
  useEffect(() => {
    if(mq !== isThan880) {
      setIsThan880(mq);
    }
  },[mq]);


  return (
    <Box m='auto' mt={isThan880 ? '0px' : '80px'} w="100%">
      <Heads />
      { isThan880 &&
        (
          <Grid gridTemplateColumns="320px 1fr" >
            <div>
              <Sidebar />
            </div>
            <Box p="0 16px">{children}</Box>
        </Grid>
        )
      }
      { !isThan880 &&
        (
          <Flex flexDirection="column" justifyContent="center">
            <HeaderResponsive />
            <Box p="0 16px">{children}</Box>
          </Flex>
        )
      }
    </Box>
    // <Box m='auto' w="100%">
    //   <Heads />
    //   <Grid gridTemplateColumns="320px 1fr" >
    //     <div>
    //       <Sidebar />
    //     </div>
    //     <Box p="0 16px">{children}</Box>
    //   </Grid>
    // </Box>
  )
}
export default Layout;
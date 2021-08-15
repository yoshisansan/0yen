import { useState, useEffect } from 'react'
import Sidebar from 'components/parts/sidebar'
import HeaderResponsive from 'components/parts/headerResopnsive'
import Footer from 'components/parts/footer'
import { Box, Flex, Grid, useMediaQuery } from "@chakra-ui/react"

export const siteTitle = '野良開発のススメ | 最小コストで独学Webサービス開発'

const Layout = ({ children }) => {
  const [isThan880, setIsThan880] = useState(false)
  const [mq] = useMediaQuery("(min-width: 880px)")
  useEffect(() => {
    if(mq !== isThan880) {
      setIsThan880(mq);
    }
  },[mq]);

  return (
    <Box m='auto' mt={isThan880 ? '0px' : '80px'} w="100%">
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
      <Footer />
    </Box>
  )
}
export default Layout;
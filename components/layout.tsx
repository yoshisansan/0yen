import Heads from './util/heads'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'
import Sidebar from 'components/parts/sidebar'
import { Box, Flex, Grid } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"

const name = 'あきふみ'
export const siteTitle = '野良開発のススメ | 最小コストで独学Webサービス開発'

const Layout = ({ children, home }) => {
  return (
    <Box m="auto" w="100%">
      <Heads />
      <header>
        {home ? (
          <>
            {/* <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            /> */}
            {/* <h1>{name}</h1> */}
            {/* <PhoneIcon />
            <Box p={4} bg={"red.100"} letterSpacing="1.5em">Chakraテスト</Box> */}
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <Grid gridTemplateColumns="320px 1fr" >
        <Sidebar />
        <main>{children}</main>
      </Grid>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Box>
  )
}
export default Layout;
import Heads from './util/heads'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'
import Sidebar from 'components/parts/sidebar'
import { Box } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"

const name = 'あきふみ'
export const siteTitle = '野良開発のススメ | 最小コストで独学Webサービス開発'

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Heads />
      <header className={styles.header}>
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
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <Sidebar />
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
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
export default Layout;
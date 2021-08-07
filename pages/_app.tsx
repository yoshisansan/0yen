import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { GetStaticProps, GetServerSideProps } from 'next'
import { client } from 'lib/clients'
import { chakraGlobalTheme } from "components/util/chakrGlobalSettings"
import microCMSdata from 'data/microcms.json'
import { MicroCMS } from 'components/util/context'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakraGlobalTheme}>
      <MicroCMS.Provider value={{microCMSdata}}>
        <Component {...pageProps}/>
      </MicroCMS.Provider>
    </ChakraProvider>
  );
}
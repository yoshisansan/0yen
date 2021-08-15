import { VFC } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { chakraGlobalTheme } from "components/util/chakrGlobalSettings"
import microCMSdata from 'data/microcms.json'
import { MicroCMS } from 'components/util/context'
import NextNprogress from 'nextjs-progressbar'
import { AppProps } from 'next/app';

export const App: VFC<AppProps>  = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={chakraGlobalTheme}>
      <NextNprogress
        options={{ easing: 'ease', speed: 500 }}
        color="#D8B189"
      />
      <MicroCMS.Provider value={{microCMSdata}}>
        <Component {...pageProps}/>
      </MicroCMS.Provider>
    </ChakraProvider>
  );
}

export default App;
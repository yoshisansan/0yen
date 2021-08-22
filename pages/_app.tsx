import { VFC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraGlobalTheme } from 'components/util/chakrGlobalSettings';
import microCMSdata from 'data/microcms.json';
import { MicroCMS } from 'components/util/context';
import NextNprogress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import * as gtag from 'lib/gtag';

export const App: VFC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider theme={chakraGlobalTheme}>
      <NextNprogress options={{ easing: 'ease', speed: 500 }} color="#D8B189" />
      <MicroCMS.Provider value={{ microCMSdata }}>
        <Component {...pageProps} />
      </MicroCMS.Provider>
    </ChakraProvider>
  );
};

export default App;

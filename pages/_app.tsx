import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    moji: {
      main: "#030D1B",
      sub: "#A09E9F"
    },
    solid: {
      main: "#DEDCDB",
    },
    brand: {
      main: "#4B95C2",
      mark: "#D8B189",
    },
  },
  fontSizes: {
    xmini: '0.7em',
    mini: '0.8em',
    base: '16px',
    big: '22.6274169968px',
  },
  borders: {
    main: "1px solid #DEDCDB"
  },
  styles: {
    global: {
      "html, body": {
        color: "moji.main",
        background: "#fff",
        lineHeight: "1.4142135623",
        fontSize: "base",
        letterSpacing: "0.08em",
        textAlign: "justify",
        textJustify: "inter-ideograph",
        fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic",Meiryo, sans-serif',
      },
      a: {
        color: "brand.main",
      },
    }
  }
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider>
    </>
  );
}

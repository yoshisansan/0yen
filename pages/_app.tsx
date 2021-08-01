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
    big: '1.4142135623em',
    bigX: '1.6180339887em',
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
      h1: {
        color: "moji.main",
        fontSize: "bigX",
        fontWeight: "bold",
        padding: "0.7071067812em 0em",
      },
      h2: {
        color: "brand.main",
        fontSize: "big",
        fontWeight: "bold",
        padding: "0.7071067812em 0em",
      },
      h3: {
        color: "moji.main",
        fontSize: "bigX",
        fontWeight: "bold",
        padding: "0.7071067812em 0em",
      }
    }
  }
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

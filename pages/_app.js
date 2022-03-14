import '../styles/globals.scss'
import '../styles/Header.scss'
import '../styles/Aside.module.scss'
import '../styles/Layout.module.scss'
import '../styles/Footer.scss'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp

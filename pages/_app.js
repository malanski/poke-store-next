import '../styles/globals.scss'
import '../styles/Header.scss'
import '../styles/Footer.scss'
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp

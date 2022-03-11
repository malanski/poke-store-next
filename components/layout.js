import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'


export default function Layout({ children }) {
    return (
      <div>
         <Head>
         
          <meta name="description" content="Generated by create next app" />
        
        </Head>

        <Header />
            <main>{children}</main>
        <Footer />
      </div>
    )
  }
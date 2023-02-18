import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import { wrapper } from '@/store/index'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)

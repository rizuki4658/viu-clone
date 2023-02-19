import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { wrapper, store } from '@/store/store'


import Header from '@/components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)

import type { AppProps } from 'next/app'

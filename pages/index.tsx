import type { NextPage } from 'next'

import Carousel  from '../components/Carousel'
import Movies from '../components/Movies'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Carousel />
      <Movies />
    </div>
  )
}

export default Home

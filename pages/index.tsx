import type { NextPage } from 'next'

import Carousel  from '@/components/Carousel'
import Movies from '@/components/Movies'

const Home: NextPage = () => {
  return (
    <div>
      <Carousel />
      <Movies />
    </div>
  )
}

export default Home

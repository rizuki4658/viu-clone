import type { NextPage } from 'next'
import { getMovies } from './api/movies'

import Carousel  from '@/components/Carousel'
import Movies from '@/components/Movies'

const Home: NextPage = () => {
  getMovies()

  return (
    <div>
      <Carousel />
      <Movies />
    </div>
  )
}

export default Home

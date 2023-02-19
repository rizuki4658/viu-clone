import type { NextPage } from 'next'
import { useEffect } from 'react'
import { StoreState } from '@/types/store'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesHome } from '@/store/actions/moviesAction'

import Carousel  from '@/components/Carousel'
import Movies from '@/components/Movies'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state: StoreState) => state.movies ? state.movies.home : [])

  useEffect(() => {
    dispatch(getMoviesHome())
  }, [dispatch])

  return (
    <div>
      <Carousel />
      <Movies />
    </div>
  )
}

export default Home

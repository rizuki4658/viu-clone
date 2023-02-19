import React, { useState, useEffect } from 'react'
import {
  MovieListProps,
  MovieListState
} from '../../../types'

import CarouselLists from './carousel'

export const MovieList: React.FC<{ items: any[] }> = ({...props}) => {
  const [ state, setState ]: [MovieListState, any] = useState({
    items: [],
    screen: 0
  })

  const stateSetter = (key: string, value: any) => {
    setState((state: MovieListState) => ({
      ...state,
      [key]: value
    }))
  }

  useEffect(() => {
    stateSetter('items', props.items)
  }, [props.items])

  return (
    <div id="containerList">
      {
        state.items.map((item: any, key: number) => (
          <CarouselLists
            key={key}
            title={item.title}
            items={item.items}
          />
        ))
      }
    </div>
  )
}

export default MovieList

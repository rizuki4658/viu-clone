import React from 'react'
import {
  MovieListProps,
  MovieListState
} from '../../../types'

import CarouselLists from './carousel'

class MovieList extends React.Component<MovieListProps, MovieListState> {
  constructor(props: MovieListProps) {
    super(props)

    this.state = {
      items: [],
      screen: 0
    }
  }

  stateSetter(key: string, value: any) {
    const oldState = {...this.state}
    this.setState({
      ...oldState,
      [key]: value
    })
  }

  render() {
    return (
      <div id="containerList">
        {
          this.state.items.map((item: any) => (
            <CarouselLists
              title={item.title}
              items={item.items}
            />
          ))
        }
      </div>
    )
  }
}

export default MovieList

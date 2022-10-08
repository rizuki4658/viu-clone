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
      title: { ...this.props.title },
      items: [],
      screen: 0
    }

    this.handleResize = this.handleResize.bind(this)
  }

  stateSetter(key: string, value: any) {
    const oldState = {...this.state}
    this.setState({
      ...oldState,
      [key]: value
    })
  }

  handleResize(e: any) {
    this.stateSetter('screen', e.target.innerWidth)
  }

  componentDidMount(): void {
   window.addEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div id="containerList">
        <CarouselLists
          title={this.state.title}
          items={this.state.items}
        />
        <CarouselLists
          title={this.state.title}
          items={this.state.items}
        />
        <CarouselLists
          title={this.state.title}
          items={this.state.items}
        />
        <CarouselLists
          title={this.state.title}
          items={this.state.items}
        />
      </div>
    )
  }
}

export default MovieList

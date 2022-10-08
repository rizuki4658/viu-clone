import React from 'react'
import Link from 'next/link'
import {
  MovieTitle,
  MovieListProps,
  MovieListState
} from '../../../types'

import CarouselLists from './carousel'

const HeaderList: React.FC<MovieTitle> = (props) => {
  return (
    <div className="flex items-center justify-between gap-x-6 py-3">
      <h2 className="text-xl">
        <Link
          href={props.link}>
          <a
            className="hover:text-yellow-500 cbold">
            {props.name}
          </a>
        </Link>
      </h2>
      <Link
        href={props.allLink}>
        <a
          className="text-xs font-bold leading-none bg-gray-500 bg-opacity-20 hover:text-yellow-500 rounded-full px-2.5 py-1.5">
          {props.allText}
        </a>
      </Link>
    </div>
  )
}

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
        <HeaderList {...this.state.title} />
        <CarouselLists
          items={this.state.items}
        />
        <HeaderList {...this.state.title} />
        <CarouselLists
          items={this.state.items}
        />
        <HeaderList {...this.state.title} />
        <CarouselLists
          items={this.state.items}
        />
        <HeaderList {...this.state.title} />
        <CarouselLists
          items={this.state.items}
        />
      </div>
    )
  }
}

export default MovieList

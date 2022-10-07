import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import CarouselLists from './carousel'

type Items = {
  name: string
  img: string
}

type Title = {
  name: string
  link: string
  allText: string
  allLink: string
}

type MovieListProps = {
  title: Title
  items: Items[]
  screen?: number
}

type MovieListState = MovieListProps

const HeaderList: React.FC<Title> = (props) => {
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
    // const test = document.getElementById('containerList')
    // console.log(7 / Math.round(1280 / test?.clientWidth))
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
      </div>
    )
  }
}

export default MovieList

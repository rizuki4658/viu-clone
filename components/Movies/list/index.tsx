import React, { useState, useEffect } from 'react'
import Link from 'next/link'

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
  items: any[] // Items[]
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

const CarouselLists: React.FC<{ items: Items[]}> = (props) => {
  const [state, setState] = useState({
    length: 7
  })

  const stateSetter = (key: string, value: any) => {
    setState((oldState) => ({
      ...oldState,
      ...{
        [key]: value
      }
    }))
  }

  return (
    <div className="relative">
      {/* <button className="absolute lg:-left-12 -left-6 bg-blue-500 top-0 bottom-0 lg:w-24 w-8 carousel-prev" /> */}
      <div
        id="carouselMovieList"
        className="carousel-movie-list mb-10 md:h-64 h-32 space-x-3 whitespace-nowrap overflow-y-auto">
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">1</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">2</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">3</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">4</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">5</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">6</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">7</div>
      </div>
      {/* <div className="bg-red-500 sm:h-60 h-36 mb-7 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 md:gap-x-5 gap-x-2 overflow-auto grid-flow-col w-full">
        <div className="bg-blue-500">1</div>
        <div className="bg-blue-500">2</div>
        <div className="bg-blue-500">3</div>
        <div className="bg-blue-500">4</div>
        <div className="bg-blue-500">5</div>
        <div className="bg-blue-500">6</div>
        <div className="bg-blue-500">7</div>
      </div> */}
      {/* <button className="absolute lg:-right-12 -right-6 bg-blue-500 top-0 bottom-0 lg:w-24 w-8 carousel-next" /> */}
    </div>
  )
}

class MovieList extends React.Component<MovieListProps, MovieListState> {
  constructor(props: MovieListProps) {
    super(props)

    this.state = {
      title: { ...this.props.title },
      items: [1, 2, 3, 4, 5, 6, 7],
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

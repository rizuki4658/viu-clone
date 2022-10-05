import React from 'react'
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
  items: Items[]
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

const CarouselLists: React.FC<{ items: Items[] }> = (props) => {
  return (
    <div className="relative">
      {/* <button className="absolute lg:-left-12 -left-6 bg-blue-500 top-0 bottom-0 lg:w-24 w-8 carousel-prev" /> */}
      <div className="bg-red-500 md:h-60 h-32 mb-7 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 md:gap-x-5 gap-x-2">
        <div className="bg-blue-500">1</div>
        <div className="bg-blue-500">2</div>
        <div className="bg-blue-500">3</div>
        <div className="bg-blue-500">4</div>
        <div className="bg-blue-500">5</div>
        <div className="bg-blue-500">6</div>
        <div className="bg-blue-500">7</div>
      </div>
      {/* <button className="absolute lg:-right-12 -right-6 bg-blue-500 top-0 bottom-0 lg:w-24 w-8 carousel-next" /> */}
    </div>
  )
}

class MovieList extends React.Component<MovieListProps, MovieListState> {
  constructor(props: MovieListProps) {
    super(props)

    this.state = {
      title: { ...this.props.title },
      items: []
    }
  }

  render() {
    return (
      <div>
        <HeaderList {...this.state.title} />
        <CarouselLists items={[]} />
      </div>
    )
  }
}

export default MovieList

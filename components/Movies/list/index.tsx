import React from 'react'

type Items = {
  name: string
  img: string
}

type MovieListProps = {
  title: {
    name: string
    link: string
    allText: string
    allLink: string
  }
  items: Items[]
}

type MovieListState = MovieListProps

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
        {this.state.title.name}
      </div>
    )
  }
}

export default MovieList

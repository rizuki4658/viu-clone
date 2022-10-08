
export type MovieItem = {
  name: string
  img: string
  desc: string
}

export type MovieTitle = {
  name: string
  link: string
  allText: string
  allLink: string
}

export type MovieListProps = {
  title: MovieTitle
  items: MovieItem[]
  screen?: number
}

export type MovieListState = MovieListProps

export type MovieStateType = {
  items?: [],
  counter: 0
}

export type MoviePropsType = {
  items: MovieItem[]
}

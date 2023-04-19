export type MovieItem = {
  name: string
  img: string
  desc: string
  year: string
  language: string
  small_banner: string
  big_banner: string
}

export type MovieTitle = {
  name: string
  link: string
  all_text: string
  all_link: string
  showLink?: boolean
}

export type MovieListProps = {
  title?: MovieTitle
  items: MovieItem[]
  screen?: number
}

export type MovieListState = MovieListProps

export type MovieStateType = {
  items?: []
  showButton: boolean
  refChild: any
  refParent: any
  showLink: boolean
  refCard?: any
  classDetail: string[],
  showCardInfo: boolean
}

export type MoviePropsType = {
  items: MovieItem[]
  title: {
    name: string
    link: string
    all_text: string
    all_link: string
  }
}

export type CardMovieItem = {
  name: string
  img: string
  desc: string
  first?: boolean
  last?: boolean
}

import { RefObject } from "react"

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
  showLink?: boolean
}

export type MovieListProps = {
  title: MovieTitle
  items: MovieItem[]
  screen?: number
}

export type MovieListState = MovieListProps

export type MovieStateType = {
  items?: []
  counter: number
  showButton: boolean
  refChild: any
  refParent: any
  showLink: boolean
}

export type MoviePropsType = {
  items: MovieItem[]
  title: {
    name: string
    link: string
    allText: string
    allLink: string
  }
}

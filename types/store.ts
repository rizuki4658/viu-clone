export interface MoviesState {
  home: any[]
}

export interface Action {
  type: string
  payload: any
}

export interface StoreState {
  movies?: MoviesState
}

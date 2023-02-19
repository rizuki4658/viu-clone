import { MoviesState, Action } from '@/types/store'
import { GET_MOVIES_HOME } from '@/store/types'

const initialState: MoviesState = {
  home: []
}

const moviesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_MOVIES_HOME:
      return {
        ...state,
        home: action.payload
      }

    default:
      return state
  }
}

export default moviesReducer

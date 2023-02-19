import { GET_MOVIES_HOME } from '@/store/types'
import { Dispatch } from 'redux'
import { getMovies } from '@/api/movies'

export const getMoviesHome = () => async (dispatch: Dispatch) => {
  try {
    getMovies()
    console.log(dispatch)
    // dispatch({
    //   type: GET_MOVIES_HOME,
    //   payload: ,
    // })
  } catch (error) {
    console.error(error)
  }
}

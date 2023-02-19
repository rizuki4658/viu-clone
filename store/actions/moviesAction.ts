import { GET_MOVIES_HOME } from '@/store/types'
import { Dispatch } from 'redux'
import { getMovies } from '@/api/movies'

export const getMoviesHome = () => async (dispatch: Dispatch) => {
  try {
    const data = await getMovies()
    dispatch({
      type: GET_MOVIES_HOME,
      payload: data || [],
    })
  } catch (error) {
    console.error(error)
  }
}

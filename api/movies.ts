import Axios from './axios'

export const getMovies = async () => {
  return Axios.get('/movies').then((response) => response.data).catch((err) => console.error(err))
}

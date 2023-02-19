import Axios from './axios'

export const getMovies = () => {
  Axios.get('/movies').then((response) => {
    return response
  }).catch((err) => {
    console.error(err)
  })
}

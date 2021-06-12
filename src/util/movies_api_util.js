import axios from 'axios';


export const fetchMovies = () =>{

  return axios({
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`,
    type: 'GET'
  }).then(res => {
    return res
  })
  .catch(err => {
    console.log(err)
    return err
  })
}


import axios from 'axios';

const API_KEY = 'e9a316947c34b7bf33ae7a42a434912b'

export const getTrendsFilm = () => {
return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
}

export const getFilmByid = (id) => {
return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
}



import fetcher from '~/services/fetcher'
import { IGenres, IMovieDetail, IMoviePlaying, IMovies } from '~/types/movies'

export const ListMoviePlaying = (): Promise<IMoviePlaying> => {
  const url = 'movie/now_playing'
  return fetcher(url, {
    method: 'GET',
  })
}

export const fetchMovieDetail = (id: number): Promise<IMovieDetail> => {
  const url = `movie/${id}`
  return fetcher(url, {
    method: 'GET',
  })
}

export const fetchMovieSimilar = (id: number): Promise<IMovies> => {
  const url = `movie/${id}/similar`
  return fetcher(url, {
    method: 'GET',
  })
}

export const fetchGenres = (): Promise<IGenres> => {
  const url = `genre/movie/list`
  return fetcher(url, {
    method: 'GET',
  })
}

export const fetchTopRated = (): Promise<IMovies> => {
  const url = `movie/top_rated`
  return fetcher(url, {
    method: 'GET',
  })
}

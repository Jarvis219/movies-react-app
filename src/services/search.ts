import fetcher from '~/services/fetcher'
import { IMovies } from '~/types/movies'
import { IPersons } from '~/types/people'
import { ITVShows } from '~/types/tvShow'

export const fetchSearchMovies = (query: string): Promise<IMovies> => {
  const url = `search/movie?query=${query}`
  return fetcher(url, {
    method: 'GET',
  })
}

export const fetchSearchPeople = (query: string): Promise<IPersons> => {
  const url = `search/person?query=${query}`
  return fetcher(url, {
    method: 'GET',
  })
}

export const fetchSearchTVShows = (query: string): Promise<ITVShows> => {
  const url = `search/tv?query=${query}`
  return fetcher(url, {
    method: 'GET',
  })
}

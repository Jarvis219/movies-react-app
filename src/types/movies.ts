export interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IMoviePlaying {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

interface IBelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface IGenre {
  id: number
  name: string
}

interface IProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

interface IProductionCountry {
  iso_3166_1: string
  name: string
}

interface ISpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

interface IVideo {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
}

interface IVideos {
  results: IVideo[]
}

export interface IMovieDetail {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: IBelongsToCollection
  budget: number
  genres: IGenre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IProductionCompany[]
  production_countries: IProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: ISpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  videos: IVideos
}

export interface IMovies {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

export interface IGenres {
  genres: IGenre[]
}

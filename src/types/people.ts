interface IKnownFor {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IPeople {
  adult: boolean
  gender: 1 | 2
  id: number
  known_for: IKnownFor[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export interface IPersons {
  page: number
  results: IPeople[]
  total_pages: number
  total_results: number
}

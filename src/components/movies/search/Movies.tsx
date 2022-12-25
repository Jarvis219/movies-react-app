import { lazy } from 'react'
import { OneBlockCardSkeleton } from '~/components/cards/OneBlockCard'
import { IMovie } from '~/types/movies'
import AppConfig from '../../../../AppConfig'

const MovieCardSimilar = lazy(() => import('~/components/cards/OneBlockCard'))

interface IMoviesProps {
  loading: boolean
  movies: IMovie[]
}

const Movies = ({ loading, movies }: IMoviesProps) => (
  <div className='grid sm:grid-cols-2 xl:grid-cols-1 gap-3'>
    {loading
      ? [...Array(AppConfig.ITEMS_PER_PAGE)].map((_, index) => <OneBlockCardSkeleton key={index} />)
      : movies &&
        movies.map((movie) => (
          <MovieCardSimilar
            id={movie.id}
            key={movie.id}
            src={`${import.meta.env.VITE_BASE_IMAGE_API}${movie.backdrop_path}`}
            title={movie.title}
            voteAverage={movie.vote_average}
            releaseDate={movie.release_date}
            overview={movie.overview}
          />
        ))}
  </div>
)

export default Movies

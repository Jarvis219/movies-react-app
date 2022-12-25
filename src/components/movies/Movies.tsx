import { lazy } from 'react'
import { TwoBlockCardSkeleton } from '~/components/cards/TwoBlockCard'
import { IMovie } from '~/types/movies'
import AppConfig from '../../../AppConfig'

const MovieCard = lazy(() => import('~/components/cards/TwoBlockCard'))

interface IMoviesProps {
  movies: IMovie[]
  loading: boolean
}

const Movies = ({ movies, loading }: IMoviesProps) => (
  <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 place-content-center place-items-center gap-3  mt-3'>
    {loading
      ? [...Array(AppConfig.ITEMS_PER_PAGE)].map((_, index) => <TwoBlockCardSkeleton key={index} />)
      : movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={`${import.meta.env.VITE_BASE_IMAGE_API}${movie.backdrop_path}`}
            title={movie.title}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        ))}
  </section>
)

export default Movies

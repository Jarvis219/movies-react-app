import { lazy } from 'react'
import BoxEmptyData from '~/components/base/BoxEmptyData'
import { TwoBlockCardSkeleton } from '~/components/cards/TwoBlockCard'
import GridLayout from '~/layout/GridLayout'
import { IMovie } from '~/types/movies'
import AppConfig from '../../../AppConfig'

const MovieCard = lazy(() => import('~/components/cards/TwoBlockCard'))

interface IMoviesProps {
  movies: IMovie[]
  loading: boolean
  listLayout: boolean
}

const Movies = ({ movies, loading, listLayout }: IMoviesProps) => {
  if (!movies.length) return <BoxEmptyData />

  return (
    <GridLayout className={`mt-3 ${!listLayout && 'lg:grid-cols-3 xl:!grid-cols-2'}`} listLayout={listLayout}>
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
    </GridLayout>
  )
}

export default Movies

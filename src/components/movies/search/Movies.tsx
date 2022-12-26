import { lazy } from 'react'
import BoxEmptyData from '~/components/base/BoxEmptyData'
import { OneBlockCardSkeleton } from '~/components/cards/OneBlockCard'
import GridLayout from '~/layout/GridLayout'
import { IMovie } from '~/types/movies'
import AppConfig from '../../../../AppConfig'

const MovieCardSimilar = lazy(() => import('~/components/cards/OneBlockCard'))

interface IMoviesProps {
  loading: boolean
  movies: IMovie[]
}

const Movies = ({ loading, movies }: IMoviesProps) => {
  if (!movies.length && !loading) return <BoxEmptyData />
  return (
    <GridLayout>
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
    </GridLayout>
  )
}
export default Movies

import { lazy } from 'react'
import BoxEmptyData from '~/components/base/BoxEmptyData'
import { OneBlockCardSkeleton } from '~/components/cards/OneBlockCard'
import { ITVShow } from '~/types/tvShow'
import AppConfig from '../../../../AppConfig'

const MovieCardSimilar = lazy(() => import('~/components/cards/OneBlockCard'))

interface ITVShowProps {
  loading: boolean
  tvShows: ITVShow[]
}

const TVShow = ({ loading, tvShows }: ITVShowProps) => {
  if (!tvShows.length && !loading) return <BoxEmptyData />

  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-1 gap-3'>
      {loading
        ? [...Array(AppConfig.ITEMS_PER_PAGE)].map((_, index) => <OneBlockCardSkeleton key={index} />)
        : tvShows &&
          tvShows.map((tv) => (
            <MovieCardSimilar
              id={tv.id}
              key={tv.id}
              src={`${import.meta.env.VITE_BASE_IMAGE_API}${tv.backdrop_path}`}
              title={tv.name}
              voteAverage={tv.vote_average}
              releaseDate={tv.first_air_date || new Date().toISOString()}
              overview={tv.overview}
            />
          ))}
    </div>
  )
}

export default TVShow

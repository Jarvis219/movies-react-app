import { lazy } from 'react'
import BoxEmptyData from '~/components/base/BoxEmptyData'
import { OneBlockCardSkeleton } from '~/components/cards/OneBlockCard'
import GridLayout from '~/layout/GridLayout'
import { ITVShow } from '~/types/tvShow'
import AppConfig from '../../../../AppConfig'

const MovieCardSimilar = lazy(() => import('~/components/cards/OneBlockCard'))

interface ITVShowProps {
  loading: boolean
  tvShows: ITVShow[]
  listLayout: boolean
}

const TVShow = ({ loading, tvShows, listLayout }: ITVShowProps) => {
  if (!tvShows.length && !loading) return <BoxEmptyData />

  return (
    <GridLayout className={listLayout ? '' : 'xl:!grid-cols-2'} listLayout={listLayout}>
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
    </GridLayout>
  )
}

export default TVShow

import { lazy } from 'react'
import { OneBlockCardSkeleton } from '~/components/cards/OneBlockCard'
import { IPeople } from '~/types/people'
import AppConfig from '../../../../AppConfig'

const LayerCard = lazy(() => import('~/components/cards/LayerCard'))

interface IPeopleProps {
  loading: boolean
  people: IPeople[]
}

const People = ({ loading, people }: IPeopleProps) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-center place-items-center gap-3 xl:gap-8'>
    {loading
      ? [...Array(AppConfig.ITEMS_PER_PAGE)].map((_, index) => <OneBlockCardSkeleton key={index} />)
      : people &&
        people.map((item) => (
          <LayerCard
            key={item.id}
            src={`${import.meta.env.VITE_BASE_IMAGE_API}${item.profile_path}`}
            title={item.name}
            gender={item.gender}
          />
        ))}
  </div>
)

export default People

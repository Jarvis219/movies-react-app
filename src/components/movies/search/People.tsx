import { lazy } from 'react'
import BoxEmptyData from '~/components/base/BoxEmptyData'
import { OneBlockCardSkeleton } from '~/components/cards/OneBlockCard'
import GridLayout from '~/layout/GridLayout'
import { IPeople } from '~/types/people'
import AppConfig from '../../../../AppConfig'

const LayerCard = lazy(() => import('~/components/cards/LayerCard'))

interface IPeopleProps {
  loading: boolean
  people: IPeople[]
}

const People = ({ loading, people }: IPeopleProps) => {
  if (!people.length && !loading) return <BoxEmptyData />
  return (
    <GridLayout className='xl:!grid-cols-3 2xl:!grid-cols-4'>
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
    </GridLayout>
  )
}

export default People

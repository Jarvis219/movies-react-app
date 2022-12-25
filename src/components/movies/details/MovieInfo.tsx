import { lazy, memo } from 'react'
import { ButtonPrimary } from '~/components/base/ButtonPrimary'
import { Heading1 } from '~/components/base/Heading'
import { IMovieDetail } from '~/types/movies'
import { formatDate } from '~/utils'

const Image = lazy(() => import('~/components/base/Image'))
const Tag = lazy(() => import('~/components/base/Tag'))
const LayoutListLabel = lazy(() => import('~/components/movies/LayoutListLabel'))

const MovieInfo = ({ movie }: { movie: IMovieDetail }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-7 gap-1 xl:gap-10 md:p-4 shadow'>
      <div className='col-span-3 w-full'>
        <Image
          src={`${import.meta.env.VITE_BASE_IMAGE_API}${movie.poster_path}`}
          alt={movie.title}
          width='355'
          className='w-full h-full'
        />
      </div>
      <section className='col-span-4 w-full mx-auto px-2 flex flex-col justify-between'>
        <div>
          <Heading1 className='hover:text-teal-500 font-semibold'>{movie.title}</Heading1>
          <LayoutListLabel className='mt-3' label='Release Date:' value={formatDate(movie.release_date)} />
          <div className='bg-gray-200 p-3 max-h-72 lg:max-h-96 lg:h-96 overflow-y-scroll space-y-2 shadow my-3'>
            <LayoutListLabel label='Vote Average:' value={movie.vote_average.toString().slice(0, 3)} />
            <LayoutListLabel label='Runtime' value={`${movie.runtime} minus`} />
            <LayoutListLabel
              label='Spoken languages:'
              value={movie.spoken_languages.map((item) => item.name).join(', ')}
            />
            <LayoutListLabel
              label='Production countries:'
              value={movie.production_countries.map((item) => item.name).join(', ')}
            />
            <LayoutListLabel
              label='Production companies: '
              value={movie.production_companies.map((item) => item.name).join(', ')}
            />
            <div className='text-gray-700 flex'>
              <label>Genres:</label>
              <div className='flex flex-wrap'>
                {movie.genres.map((item, index) => (
                  <Tag key={index} tag={item.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ButtonPrimary className='w-full mb-3' title='Watch Now' />
      </section>
    </div>
  )
}

export default memo(MovieInfo)

export const MovieInfoSkeleton = () => {
  return (
    <div className='animation-pulse flex gap-28 flex-wrap items-center justify-center xl:flex-nowrap'>
      <div className='w-[416px] h-[532px] bg-gray-200 rounded-3xl xl:ml-10' />
      <section className='w-3/4 mx-auto px-2 flex flex-col justify-between'>
        <div>
          <Heading1 className='h-8 bg-gray-200 rounded' />
          <div className='bg-gray-200 h-6 mt-3 w-1/3 rounded' />
        </div>
        <div className='bg-gray-200 p-3 h-96 overflow-y-scroll space-y-4 shadow my-3'></div>
        <ButtonPrimary className='w-full' title='Watch Now' />
      </section>
    </div>
  )
}

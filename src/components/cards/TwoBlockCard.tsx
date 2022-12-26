import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Heading3 } from '~/components/base/Heading'
import Image from '~/components/base/Image'
import { formatDate } from '~/utils'

interface ITwoBlockCardProps {
  id: number
  image: string
  title: string
  releaseDate: string
  voteAverage: number
  overview: string
}

const TwoBlockCard = ({ id, image, title, releaseDate, voteAverage, overview }: ITwoBlockCardProps) => (
  <article className='w-64 h-[30rem] xl:h-auto xl:w-full xl:max-w-xl xl:min-h-[400px]'>
    <Link to={`/movie/${id}`}>
      <div className='xl:bg-white xl:shadow-lg border-gray-100 lg:max-h-80 xl:border xl:rounded-3xl xl:p-6 xl:flex gap-2'>
        <div className='xl:h-40 overflow-visible xl:w-1/2 relative'>
          <Image
            className='bg-gray-200 w-[230px] h-[345px] rounded xl:rounded-3xl mx-auto xl:mx-0'
            src={image}
            alt={title}
            width='230'
            rounded
          />
          <div className='bg-yellow-400 font-bold rounded-xl p-2 block xl:hidden w-10 absolute top-3 left-6'>
            {voteAverage}
          </div>
        </div>
        <div className='flex flex-col xl:w-1/2 space-y-1 xl:space-y-3 p-4 xl:p-0'>
          <div className='flex justify-between items-start'>
            <Heading3
              className='line-clamp-2transition duration-300 ease-in-out hover:text-teal-500 text-animate-hover'
              tooltip={title}>
              {title}
            </Heading3>
            <div className='bg-yellow-400 font-bold rounded-xl ml-1 p-2 hidden xl:block w-10 h-10 text-center'>
              {voteAverage}
            </div>
          </div>
          {releaseDate && <div className='text-base text-gray-700'>{formatDate(releaseDate)}</div>}

          <div className='text-gray-600 line-clamp-3 overflow-y-hidden'>
            <p className='hidden xl:block'>{overview}</p>
          </div>
        </div>
      </div>
    </Link>
  </article>
)

export default memo(TwoBlockCard)

export const TwoBlockCardSkeleton = () => (
  <article className='w-64 xl:w-full xl:max-w-xl xl:min-h-[400px] animate-pulse'>
    <div className='xl:bg-white xl:shadow-lg border-gray-100 lg:max-h-80 xl:border xl:rounded-3xl xl:p-6 xl:flex gap-2'>
      <div className='xl:h-40 overflow-visible xl:w-1/2 relative'>
        <div className='rounded xl:rounded-3xl shadow-lg mx-auto xl:mx-0 w-[230px] h-[345px] bg-gray-200' />
        <div className='bg-yellow-400 rounded-xl p-2 block xl:hidden w-10 absolute top-3 left-5 h-10' />
      </div>
      <div className='flex flex-col xl:w-1/2 space-y-1 xl:space-y-3 p-4 xl:p-0'>
        <div className='flex justify-between items-start'>
          <div className='line-clamp-2 w-3/4 h-10 bg-gray-200' />
          <div className='bg-yellow-400 rounded-xl p-2 hidden xl:block w-10 h-10' />
        </div>
        <div className='bg-gray-200 h-5 w-32' />

        <div className='line-clamp-3  overflow-y-hidden h-20 w-full'>
          <p className='hidden xl:block bg-gray-200'></p>
        </div>
      </div>
    </div>
  </article>
)

import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Heading4 } from '~/components/base/Heading'
import { formatDate } from '~/utils'
import Image from '../base/Image'

interface IOneBlockCard {
  id: number
  src: string
  title: string
  voteAverage: number
  releaseDate: string
  overview: string
}

const OneBlockCard = ({ id, src, title, voteAverage, releaseDate, overview }: IOneBlockCard) => (
  <article className='bg-white border rounded-lg shadow-md w-full hover:bg-gray-100 relative'>
    <div className='bg-yellow-400 font-bold rounded-xl ml-1 p-2 w-10 h-10 text-center absolute right-1 top-1'>
      {voteAverage.toString().slice(0, 3)}
    </div>
    <Link to={`/movie/${id}`} className='flex items-center flex-row'>
      <div className='h-[180px] md:rounded-none md:rounded-l-lg rounded-t-lg overflow-hidden'>
        <Image
          className='bg-gray-200 h-full !rounded-none mx-auto sm:mx-0'
          src={src}
          alt={title}
          width='120'
          height='180'
        />
      </div>
      <div className='flex flex-col justify-between p-4 leading-normal w-2/3'>
        <Heading4 className='mb-1 tracking-tight text-xl hover:text-teal-500 w-5/6 text-animate-hover truncate'>
          {title}
        </Heading4>
        <div className='text-gray-700 text-sm'>{formatDate(releaseDate)}</div>
        <p className='my-3 font-normal text-gray-700 line-clamp-3'>{overview}</p>
      </div>
    </Link>
  </article>
)

export default memo(OneBlockCard)

export const OneBlockCardSkeleton = () => (
  <article className='bg-white border rounded-lg shadow-md md:max-w-xl hover:bg-gray-100 relative animate-pulse'>
    <div className='bg-yellow-400 rounded-xl ml-1 p-2 hidden sm:block w-10 h-10 absolute right-1 top-1' />
    <div className='flex flex-col md:flex-row'>
      <div className='w-[120px] h-[180px] md:rounded-none md:rounded-l-lg rounded-t-lg overflow-hidden'>
        <div className='bg-gray-200 h-full !rounded-none mx-auto sm:mx-0' />
      </div>
      <div className='flex flex-col items-start p-4 space-y-4'>
        <div className='bg-gray-200 h-6 rounded w-48' />
        <div className='bg-gray-200 h-4 rounded w-20' />
        <div className='bg-gray-200 h-16 rounded w-56' />
      </div>
    </div>
  </article>
)

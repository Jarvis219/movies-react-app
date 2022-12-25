import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Heading1 } from '~/components/base/Heading'

const BoxEmptyData = () => (
  <div className='mx-auto max-w-7xl'>
    <div className='mx-auto max-w-7xl text-center'>
      <Heading1 className='text-4xl font-extrabold text-gray-900'>Movies</Heading1>
      <p className='my-4 text-gray-500'>No movies found</p>
      <Link
        to='/'
        className='mt-6 rounded-md bg-gradient-to-r from-green-400 to-teal-500 px-6 py-3 font-semibold text-white hover:from-teal-500 hover:to-orange-500'>
        Home
      </Link>
    </div>
  </div>
)

export default memo(BoxEmptyData)

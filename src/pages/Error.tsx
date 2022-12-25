import { Link } from 'react-router-dom'
import { Heading1, Heading2 } from '~/components/base/Heading'

const ErrorPage = () => {
  return (
    <div className='bg-gradient-to-r from-teal-300 via-green-300 to-teal-600'>
      <div className='m-auto flex min-h-screen w-9/12 items-center justify-center py-16'>
        <div className='overflow-hidden bg-white pb-8 shadow-2xl sm:rounded-[40px]'>
          <div className='border-t border-gray-200 pt-8 text-center'>
            <Heading1 className='text-9xl font-bold text-green-500'>404</Heading1>
            <Heading2 className='py-8 text-6xl text-[30pt] font-medium'>Oops! Page Not Found</Heading2>
            <p className='px-12 pb-8 text-2xl text-[18pt] font-medium'>
              Oops, we could not find the page you were looking for. Please go back
            </p>
            <Link
              to='/'
              className='mr-6 rounded-md bg-gradient-to-r from-green-400 to-teal-500 px-6 py-3 font-semibold text-white hover:from-teal-500 hover:to-orange-500'>
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ErrorPage

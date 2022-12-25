import { lazy, memo } from 'react'
import { Heading1, Heading3 } from '~/components/base/Heading'

const Search = lazy(() => import('~/components/header/Search'))

const Banner = () => (
  <div className='relative'>
    <img
      src='/assets/images/batman-hero.webp'
      alt='Banner image'
      className='brightness-50 w-screen object-cover'
      width='1500'
      height='561'
    />
    <div className='absolute inset-x-0 mx-auto px-3 bottom-10 md:bottom-24 lg:bottom-40 container'>
      <Heading1 className='text-sky-500 font-black lg:!text-5xl'>Welcome</Heading1>
      <Heading3 className='text-gray-100 lg:!text-3xl'>
        Millions of movies, TV shows and people to discover. Explore now.
      </Heading3>
    </div>
    <Search />
  </div>
)

export default memo(Banner)

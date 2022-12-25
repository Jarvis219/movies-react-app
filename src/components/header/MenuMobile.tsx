import { lazy, memo, useState } from 'react'
import { Form, NavLink } from 'react-router-dom'
import { IGenre } from '~/types/movies'

const Image = lazy(() => import('~/components/base/Image'))

interface IMenuMobileProps {
  menus: IGenre[]
  onClose: () => void
}

const MenuMobile = ({ menus, onClose }: IMenuMobileProps) => {
  const [keyword, setKeyword] = useState('')
  return (
    <>
      <div className='w-screen h-screen bg-gray-400 opacity-70 absolute top-0 z-10' onClick={onClose} />
      <div className='absolute h-screen top-0 max-w-sm rounded-xl bg-white shadow-lg z-20 md:hidden'>
        <header className='rounded-bl-3xl mb-10 flex transform items-center bg-gradient-to-r from-teal-500 to-teal-600 py-8 px-6'>
          <Image
            src='/assets/images/logo.webp'
            alt='This is logo'
            className='ring-4 ring-gray-200 ring-opacity-20'
            width='80'
          />
          <div className='ml-5'>
            <h1 className='text-lg tracking-wide text-white'>Tran Anh Quang</h1>
            <p className='text-sm tracking-wider text-gray-300'>Developer</p>
          </div>
        </header>
        <Form action={`/search/${keyword}`} className='px-2 mb-3'>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only'>Search</label>
          <div className='relative'>
            <input
              type='search'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-none rounded-lg'
              placeholder='Search for a movie, tv show, person...'
              required
              value={keyword}
              onChange={(e) => setKeyword(e.target.value.trim())}
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </div>
        </Form>
        <ul className='relative pb-5 font-medium'>
          <li className='text-md flex items-center py-4 text-gray-700 bg-teal-300 px-4'>
            <NavLink to='/' className='relative block px-3 py-2 transition'>
              Home
            </NavLink>
          </li>
          {menus.slice(0, 7).map((menu) => (
            <li key={menu.id} className='text-md flex items-center py-4 text-gray-700 px-4'>
              <NavLink to={`/genre/${menu.id}`} className='relative block px-3 py-2 transition hover:bg-teal-300'>
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <span className='absolute left-1/2 bottom-10 text-gray-400' onClick={onClose}>
          <svg
            className='h-8 w-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </span>
      </div>
    </>
  )
}

export default memo(MenuMobile)

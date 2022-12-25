import { memo, useState } from 'react'
import { Form } from 'react-router-dom'
import { ButtonPrimary } from '~/components/base/ButtonPrimary'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  return (
    <Form
      action={`/search/${keyword}`}
      className='absolute inset-x-0 mx-auto bottom-8 lg:bottom-20 container opacity-85 hidden md:block'>
      <label className='mb-2 text-sm font-medium text-gray-900 sr-only'>Search</label>
      <div className='relative'>
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
        <input
          type='search'
          className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
          placeholder='Search for a movie, tv show, person...'
          required
          value={keyword}
          onChange={(e) => setKeyword(e.target.value.trim())}
        />
        <ButtonPrimary title='Search' type='submit' className='absolute right-2.5 bottom-2' />
      </div>
    </Form>
  )
}

export default memo(Search)

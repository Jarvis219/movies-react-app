import { lazy, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchGenres } from '~/services/movie'
import { IGenre } from '~/types/movies'
import AppConfig from '../../../AppConfig'

const Image = lazy(() => import('~/components/base/Image'))
const MenuMobile = lazy(() => import('~/components/header/MenuMobile'))

const Menu = () => {
  const [menus, setMenus] = useState<IGenre[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [idActive, setIdActive] = useState<number | null>(null)
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false)

  useEffect(() => {
    getGenres()
    return () => {
      setMenus([])
    }
  }, [])

  const getGenres = async () => {
    setIsLoading(true)
    try {
      const { genres } = await fetchGenres()
      setMenus(genres)
    } catch (error: any) {
      toast.error(error.status_message || 'Something went wrong!')
    } finally {
      setIsLoading(false)
    }
  }

  const handleActive = (id: number) => {
    setIdActive(id)
    return {
      color: 'rgb(20 184 166)',
    }
  }

  if (isLoading) return <MenuSkeleton />

  if (!menus) return <></>

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6 cursor-pointer absolute right-5 top-5 text-white md:hidden'
        onClick={() => setIsShowMenuMobile(true)}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
        />
      </svg>

      <header className='flex-1 justify-end md:justify-center fixed top-6 z-10 inset-x-0 mx-auto hidden md:flex'>
        <nav className='pointer-events-auto'>
          <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur'>
            <li>
              <Image
                src='/assets/images/logo.webp'
                alt='This is logo'
                className='ring-4 ring-gray-200 ring-opacity-20 mt-1'
                width='32'
                height='32'
              />
            </li>
            <li>
              <NavLink
                to='/'
                style={({ isActive }) => (isActive ? handleActive(0) : undefined)}
                className='relative block px-3 py-2 transition hover:text-teal-500'>
                Home
                {idActive === 0 && (
                  <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0' />
                )}
              </NavLink>
            </li>
            {menus.slice(0, 7).map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={`/search/${menu.name}`}
                  style={({ isActive }) => (isActive ? handleActive(menu.id) : undefined)}
                  className='relative block px-3 py-2 transition hover:text-teal-500'>
                  {menu.name}
                  {idActive === menu.id && (
                    <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0' />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {isShowMenuMobile && <MenuMobile menus={menus} onClose={() => setIsShowMenuMobile(false)} />}
    </>
  )
}

export default Menu

const MenuSkeleton = () => (
  <div className='flex flex-1 justify-end md:justify-center fixed top-6 z-10 inset-x-0 mx-auto'>
    <nav>
      <ul className='flex justify-center gap-3 items-center rounded-full relative h-10 w-[680px] bg-white/90 px-3 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur'>
        {[...Array(AppConfig.ITEMS_PER_PAGE - 1)].map((_, index) => (
          <li key={index}>
            <div className='h-5 w-20 rounded  bg-gray-200 animate-pulse' />
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

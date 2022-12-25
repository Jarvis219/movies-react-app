import { createElement, lazy, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ListMoviePlaying, fetchTopRated } from '~/services/movie'
import { IMovie } from '~/types/movies'

const Movies = lazy(() => import('~/components/movies/Movies'))

enum ETabs {
  NowPlaying = 'Now Playing',
  TopRated = 'Top Rated',
}

const HomePage = () => {
  const [topRated, setTopRated] = useState<IMovie[]>([])
  const [moviesPlaying, setMoviesPlaying] = useState<IMovie[]>([])

  const [loading, setLoading] = useState(false)
  const menu = [ETabs.NowPlaying, ETabs.TopRated]
  const [tab, setTab] = useState(menu[0])

  useEffect(() => {
    initMovies()
  }, [])

  const initMovies = async () => {
    setLoading(true)
    try {
      const res = await Promise.all([ListMoviePlaying(), fetchTopRated()])
      setMoviesPlaying(res[0].results)
      setTopRated(res[1].results)
    } catch (error: any) {
      toast.error(error.status_message || 'Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <nav className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 max-w-fit mb-3 mx-2'>
        <ul className='flex flex-wrap -mb-px'>
          {menu.map((item, index) => (
            <li className='mr-2 cursor-pointer' key={index} onClick={() => setTab(item)}>
              <span
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                  tab === item ? 'text-teal-500 border-teal-500' : 'hover:text-teal-500 hover:border-teal-500'
                }`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      {createElement(Movies, { movies: tab === ETabs.NowPlaying ? moviesPlaying : topRated, loading })}
    </>
  )
}

export default HomePage

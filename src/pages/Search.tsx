import { createElement, lazy, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Toggle from '~/components/base/Toggle'
import { useLayoutContext } from '~/context/Layout'
import { fetchSearchMovies, fetchSearchPeople, fetchSearchTVShows } from '~/services/search'
import { ELayout, IMovie } from '~/types/movies'
import { IPeople } from '~/types/people'
import { ITVShow } from '~/types/tvShow'

const Movies = lazy(() => import('~/components/movies/search/Movies'))
const TVShow = lazy(() => import('~/components/movies/search/TVShow'))
const People = lazy(() => import('~/components/movies/search/People'))
const Breadcrumb = lazy(() => import('~/components/base/Breadcrumb'))

enum ETabs {
  Movies = 'Movie',
  TVShows = 'TV Shows',
  People = 'People',
}

const SearchPage = () => {
  const { query } = useParams()
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState<IMovie[]>([])
  const [tvShows, setTVShows] = useState<ITVShow[]>([])
  const [people, setPeople] = useState<IPeople[]>([])
  const [tab, setTab] = useState(ETabs.Movies)

  const { layout, handleToggle } = useLayoutContext()

  const breadcrumbs = [
    {
      href: '/',
      label: 'Home',
    },
    {
      label: 'Search',
    },
  ]

  useEffect(() => {
    initData()
    return () => {
      setMovies([])
      setTVShows([])
      setPeople([])
    }
  }, [query])

  const initData = async () => {
    if (!query) return
    setLoading(true)
    try {
      const res = await Promise.all([fetchSearchMovies(query), fetchSearchTVShows(query), fetchSearchPeople(query)])
      setMovies(res[0].results)
      setTVShows(res[1].results)
      setPeople(res[2].results)
    } catch (error: any) {
      toast.error(error.status_message || 'Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  const menu = [ETabs.Movies, ETabs.TVShows, ETabs.People]

  return (
    <>
      <Breadcrumb links={breadcrumbs} />
      <div className='flex justify-between'>
        <nav className='text-sm font-medium text-center text-gray-500 border-b border-gray-200'>
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
        <Toggle onChange={handleToggle} label={layout} initChecked={layout === ELayout.Grid} />
      </div>
      <div className='mt-4'>
        {tab === ETabs.Movies &&
          createElement(Movies, {
            loading,
            movies,
            listLayout: layout === ELayout.List,
          })}
        {tab === ETabs.TVShows && createElement(TVShow, { loading, tvShows, listLayout: layout === ELayout.List })}
        {tab === ETabs.People && createElement(People, { loading, people, listLayout: layout === ELayout.List })}
      </div>
    </>
  )
}

export default SearchPage

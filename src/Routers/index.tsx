import LayoutRouter from '~/layout'
import ErrorPage from '~/pages/Error'
import HomePage from '~/pages/Home'
import MovieDetailPage from '~/pages/MovieDetail'
import SearchPage from '~/pages/Search'

export const routers = [
  {
    path: '/',
    element: (
      <LayoutRouter>
        <HomePage />
      </LayoutRouter>
    ),
  },
  {
    path: '/movie/:id',
    element: (
      <LayoutRouter>
        <MovieDetailPage />
      </LayoutRouter>
    ),
  },
  {
    path: '/search/:query',
    element: (
      <LayoutRouter>
        <SearchPage />
      </LayoutRouter>
    ),
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]

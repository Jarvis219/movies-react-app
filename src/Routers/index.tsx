import { createBrowserRouter } from 'react-router-dom'
import Header from '~/components/header/Index'
import ErrorPage from '~/pages/Error'
import HomePage from '~/pages/Home'
import MovieDetailPage from '~/pages/MovieDetail'
import SearchPage from '~/pages/Search'

const LayoutRouter = ({ element }: { element: JSX.Element }) => {
  return (
    <>
      <Header />
      <div className='container mx-auto mt-8'>{element}</div>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRouter element={<HomePage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movie/:id',
    element: <LayoutRouter element={<MovieDetailPage />} />,
  },
  {
    path: '/search/:query',
    element: <LayoutRouter element={<SearchPage />} />,
  },
])

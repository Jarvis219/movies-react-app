import { lazy, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import BoxEmptyData from '~/components/base/BoxEmptyData'
import { MovieInfoSkeleton } from '~/components/movies/details/MovieInfo'
import { fetchMovieDetail } from '~/services/movie'
import { IMovieDetail } from '~/types/movies'

const MovieInfo = lazy(() => import('~/components/movies/details/MovieInfo'))
const MovieSimilar = lazy(() => import('~/components/movies/details/MovieSimilar'))
const Image = lazy(() => import('~/components/base/Image'))
const Breadcrumb = lazy(() => import('~/components/base/Breadcrumb'))

const MovieDetailPage = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<IMovieDetail | null>(null)
  const [loading, setLoading] = useState(false)

  const breadcrumbs = [
    {
      href: '/',
      label: 'Home',
    },
    {
      label: movie?.title || 'Movie Detail',
    },
  ]

  useEffect(() => {
    getMovieDetail()
    return () => {
      setMovie(null)
    }
  }, [id])

  const getMovieDetail = async () => {
    if (!id) return
    setLoading(true)
    try {
      const res = await fetchMovieDetail(Number(id))
      setMovie(res)
    } catch (error: any) {
      toast.error(error.status_message || 'Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  const albums = useMemo(
    () =>
      movie
        ? [
            {
              atl: movie.tagline,
              src: movie.backdrop_path,
            },
            {
              atl: movie.belongs_to_collection?.name || movie.title,
              src: movie.belongs_to_collection?.poster_path,
            },
            {
              atl: movie.belongs_to_collection?.name || movie.title,
              src: movie.belongs_to_collection?.backdrop_path || movie?.backdrop_path,
            },
          ]
        : [],
    [movie]
  )

  if (!movie && !loading) return <BoxEmptyData />

  return (
    <>
      <Breadcrumb links={breadcrumbs} />
      <div className='xl:grid grid-cols-3 gap-3'>
        <div className='col-span-2'>
          {loading ? <MovieInfoSkeleton /> : movie && <MovieInfo movie={movie} />}
          <p className='p-4 text-base'>{movie?.overview}</p>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
            {albums.map((album, index) => (
              <Image
                key={index}
                src={`${import.meta.env.VITE_BASE_IMAGE_API}${album.src}`}
                alt={album.atl}
                width='250'
              />
            ))}
          </section>
        </div>
        <div className='col-span-1 mx-auto xl:mx-0'>
          <MovieSimilar />
        </div>
      </div>
    </>
  )
}

export default MovieDetailPage

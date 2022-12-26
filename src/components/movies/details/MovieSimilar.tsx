import { lazy, memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Heading2 } from '~/components/base/Heading'
import { OneBlockCardSkeleton } from '~/components/cards/OneBlockCard'
import GridLayout from '~/layout/GridLayout'
import { fetchMovieSimilar } from '~/services/movie'
import { IMovie } from '~/types/movies'
import AppConfig from '../../../../AppConfig'

const IMovieCardSimilar = lazy(() => import('~/components/cards/OneBlockCard'))

const MovieSimilar = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<IMovie[] | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getMovieSimilar()
    return () => {
      setMovie(null)
    }
  }, [id])

  const getMovieSimilar = async () => {
    if (!id) return
    setLoading(true)
    try {
      const { results } = await fetchMovieSimilar(Number(id))
      setMovie(results)
    } catch (error: any) {
      toast.error(error.status_message || 'Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  if (!movie) return null

  return (
    <>
      <Heading2 className='xl:mt-0 mt-4 mx-2'>Similar Movies</Heading2>
      <div className='xl:bg-gray-50 flex flex-wrap xl:flex-nowrap justify-center items-center xl:items-end xl:justify-start xl:flex-col gap-2 xl:h-screen xl:max-h-fit xl:overflow-y-scroll scroll-custom mt-2'>
        <GridLayout>
          {loading
            ? [...Array(AppConfig.ITEMS_PER_PAGE)].map((_, index) => <OneBlockCardSkeleton key={index} />)
            : movie &&
              movie.map((item) => (
                <IMovieCardSimilar
                  id={item.id}
                  key={item.id}
                  src={`${import.meta.env.VITE_BASE_IMAGE_API}${item.backdrop_path}`}
                  title={item.title}
                  voteAverage={item.vote_average}
                  releaseDate={item.release_date}
                  overview={item.overview}
                />
              ))}
        </GridLayout>
      </div>
    </>
  )
}

export default memo(MovieSimilar)

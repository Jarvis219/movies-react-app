import { lazy } from 'react'
import { Heading4 } from '~/components/base/Heading'

const Image = lazy(() => import('~/components/base/Image'))

interface ILayerCardProps {
  src: string
  title: string
  gender: 1 | 2
}

const EGender = {
  1: 'Female',
  2: 'Male',
}

const LayerCard = ({ src, title, gender }: ILayerCardProps) => (
  <article className='antialiased text-gray-900 w-80 h-[480px] relative shadow-2xl'>
    <Image src={src} alt={title} width='320' className='w-full h-full shadow-2xl' />
    <div className='absolute bottom-0 inset-x-0 mx-auto w-full'>
      <div className='bg-gray-500/50 p-3'>
        <div className='flex items-baseline'>
          <span
            className={`text-sm p-2 inline-block rounded uppercase font-bold tracking-wide ${
              EGender[gender] === EGender[2] ? 'bg-teal-100 text-teal-500' : 'bg-purple-100 text-purple-500 '
            }`}>
            {EGender[gender]}
          </span>
        </div>
        <Heading4 className='mt-3 uppercase leading-tight truncate text-white'>{title}</Heading4>
      </div>
    </div>
  </article>
)

export default LayerCard

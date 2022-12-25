import { useEffect, useState } from 'react'

interface IImageProps {
  src: string
  alt: string
  className?: string
  width?: string
  height?: string
  rounded?: boolean
}

const Image = ({ src, alt, className = '', width = '128', height = '128', rounded = false }: IImageProps) => {
  const [imageSrc, setImageSrc] = useState(src)

  useEffect(() => {
    setImageSrc(src)
  }, [src])

  const onError = () => {
    setImageSrc('https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg')
  }

  return (
    <div className={`overflow-hidden mx-auto ${rounded ? 'sm:rounded-3xl' : ''}`} style={{ width: `${width}px` }}>
      <img
        height={height}
        className={`transition duration-300 ease-in-out hover:scale-105 object-cover ${className}`}
        src={imageSrc}
        alt={alt}
        loading='lazy'
        onError={onError}
      />
    </div>
  )
}

export default Image

import { LazyLoadImage } from 'react-lazy-load-image-component'

function LazyImage({ image, className }) {
  return (
    <LazyLoadImage
      alt={image.alt}
      // effect="blur"
      // placeholderSrc={placeholderImage}
      src={image.src}
      className={className}
    />
  )
}

export default LazyImage

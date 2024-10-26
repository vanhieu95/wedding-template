import { getImageUrl } from '@/utils/imageHelper'

function Footer() {
  const backgroundUrl = getImageUrl('thank-you/background.jpg')
  const heartUrl = getImageUrl('thank-you/heart.png')

  return (
    <div className="relative h-[600px]">
      <img
        className="absolute inset-0 h-[600px] w-full bg-center object-cover opacity-75"
        src={backgroundUrl}
        alt="thank you"
        loading="lazy"
      />
      <img
        className="absolute left-1/2 top-8 w-96 -translate-x-1/2"
        src={heartUrl}
        alt="thank you"
        loading="lazy"
      />
    </div>
  )
}

export default Footer

import { getImageUrl } from '@/utils/imageHelper'

function Footer({ bride, groom }) {
  const backgroundUrl = getImageUrl('thank-you/background.jpg')

  return (
    <div className="relative mt-10 h-[600px]">
      <img
        className="absolute inset-0 h-[600px] w-full bg-center object-cover opacity-90"
        src={backgroundUrl}
        alt="thank you"
        loading="lazy"
      />
      <div className="absolute bottom-16 left-1/2 block w-full -translate-x-1/2 text-center text-3xl backdrop-sepia md:text-4xl">
        <p className="mx-auto mb-3 w-container font-shantell">{`${groom} - ${bride} `}</p>
        <p className="mx-auto w-container font-shantell">
          Xin trân trọng cảm ơn
        </p>
      </div>
    </div>
  )
}

export default Footer

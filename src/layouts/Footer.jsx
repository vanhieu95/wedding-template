import { getImageUrl } from '@/utils/imageHelper'

function Footer({ bride, groom }) {
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
      <div className="absolute bottom-16 left-1/2 block w-full -translate-x-1/2 text-center text-xl text-white backdrop-blur-3xl">
        <p className="mx-auto mb-2 w-container">
          Sẽ thật sự hạnh phúc khi được gặp gỡ và đón mọi người trong ngày đặc
          biệt này.
        </p>
        <p className="mx-auto mb-2 w-container">
          Sự hiện diện của mọi người chính là niềm vui "là món quà lớn nhất,
          giúp cho ngày trọng đại được trọn vẹn và ý nghĩa.
        </p>
        <p className="mx-auto mb-2 w-container">
          {`${groom} - ${bride} cùng bố mẹ 2 bên gia đình chân thânh cảm ơn quý
          ông quý bà, quý anh/chi/em, ban bè và đồng nghiệp vì dành tặng thời
          gian quý báu, những lời chúc và tình cảm vô giá.`}
        </p>
        <p className="mx-auto mb-2 w-container">Trân trọng!</p>
      </div>
    </div>
  )
}

export default Footer

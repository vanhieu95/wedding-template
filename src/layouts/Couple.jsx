import { Avatar } from '@mui/material'
import { getImageUrl } from '@utils/imageHelper'

function Couple() {
  const brideUrl = getImageUrl('couple/bride.jpeg')
  const groomUrl = getImageUrl('couple/groom.jpeg')

  return (
    <div className="flex w-full flex-wrap">
      <div>
        <Avatar
          alt="Chú rể"
          src={groomUrl}
          sx={{ width: 210, height: 210 }}
          className="border-8 border-double border-gray-700 border-white"
        />
      </div>
      <div>
        <Avatar
          alt="Cô dâu"
          src={brideUrl}
          sx={{ width: 210, height: 210 }}
          className="border-8 border-double border-gray-700 border-white"
        />
      </div>
    </div>
  )
}

export default Couple

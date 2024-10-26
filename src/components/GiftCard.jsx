import useScroll from '@/hooks/useScroll'
import { Paper, Slide } from '@mui/material'

function GiftCard({ role, bank, holder, number, branch, position }) {
  const { giftCardAppear } = useScroll()

  return (
    <Slide
      direction={position === 'start' ? 'right' : 'left'}
      in={giftCardAppear}
    >
      <Paper
        elevation={24}
        className="w-96 border-4 border-solid border-rose-300 p-4 text-center"
      >
        <h4 className="text-2xl font-bold">{`Mừng cưới đến ${role}`}</h4>
        <p>
          Ngân hàng: <span className="font-bold">{bank}</span>
        </p>
        <p>
          Tên tài khoản: <span className="font-bold">{holder}</span>
        </p>
        <p>
          Số tài khoản: <span className="font-bold">{number}</span>
        </p>
        <p>
          Chi nhánh: <span className="font-bold">{branch}</span>
        </p>
      </Paper>
    </Slide>
  )
}

export default GiftCard

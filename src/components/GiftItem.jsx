import { Paper } from '@mui/material'

function GiftItem({ role, bank, holder, number, branch }) {
  return (
    <Paper
      elevation={24}
      className="text-center w-96 border-4 border-solid border-rose-300 p-4"
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
  )
}

export default GiftItem

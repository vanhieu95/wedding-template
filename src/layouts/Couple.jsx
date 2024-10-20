import { Box } from '@mui/material'
import couple from '@data/couple'
import CoupleCard from '@/components/CoupleCard'

function Couple() {
  return (
    <Box
      className="mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-12"
      direction="row"
    >
      {couple.map((person, i) => (
        <CoupleCard {...person} key={i} />
      ))}
    </Box>
  )
}

export default Couple

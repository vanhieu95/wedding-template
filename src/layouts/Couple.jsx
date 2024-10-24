import { Box } from '@mui/material'
import couple from '@data/couple'
import CoupleCard from '@/components/CoupleCard'

function Couple() {
  return (
    <Box
      className="mx-auto flex flex-wrap justify-center gap-12 md:flex-nowrap md:justify-between"
      direction="row"
    >
      {couple.map((person, i) => (
        <CoupleCard {...person} key={i} />
      ))}
    </Box>
  )
}

export default Couple

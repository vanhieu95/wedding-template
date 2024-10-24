import GiftItem from '@/components/GiftItem'
import gifts from '@data/gift'
import { Stack } from '@mui/material'

function Gift() {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-evenly'}
      gap={3}
      useFlexGap
      sx={{ flexWrap: 'wrap' }}
    >
      {gifts.map((gift, i) => (
        <GiftItem {...gift} key={i} />
      ))}
    </Stack>
  )
}

export default Gift

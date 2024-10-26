import useScroll from '@/hooks/useScroll'
import { getImageUrl } from '@/utils/imageHelper'
import { Avatar, Box, Paper, Slide, Stack } from '@mui/material'

function CoupleCard({
  name,
  description,
  role,
  image,
  position,
  color,
  borderColor,
}) {
  const imageUrl = getImageUrl(image)
  const { coupleCardAppear } = useScroll()

  return (
    <Slide
      direction={position === 'start' ? 'right' : 'left'}
      in={coupleCardAppear}
    >
      <Box sx={{ textAlign: position }}>
        <h3 className="mb-4 text-start font-shantell text-xl font-bold">
          {name}
        </h3>
        <Paper
          elevation={24}
          className="max-w-md border-4 border-solid p-4"
          square={false}
          sx={{ borderColor: color }}
        >
          <Stack
            direction={position === 'start' ? 'row-reverse' : 'row'}
            spacing={2}
            alignItems={'center'}
          >
            <Avatar
              alt={role}
              src={imageUrl}
              sx={{ width: 180, height: 180, borderColor }}
              className="border-4 border-double border-gray-700 shadow-md"
            />
            <div>{description}</div>
          </Stack>
        </Paper>
      </Box>
    </Slide>
  )
}

export default CoupleCard

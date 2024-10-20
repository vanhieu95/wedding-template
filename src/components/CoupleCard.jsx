import { getImageUrl } from '@/utils/imageHelper'
import { Avatar, Box, Paper, Stack } from '@mui/material'

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

  return (
    <Box className={`text-${position}`}>
      <h3
        className={`font-shantell text-xl font-bold text-start md:text-${position}`}
      >
        {name}
      </h3>
      <Paper
        elevation={24}
        className="p-4 max-w-md border-4 border-solid"
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
            className={`border-4 border-double border-gray-700 shadow-md`}
          />
          <div>{description}</div>
        </Stack>
      </Paper>
    </Box>
  )
}

export default CoupleCard

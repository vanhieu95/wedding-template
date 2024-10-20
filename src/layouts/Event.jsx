import EventCard from '@/components/EventCard'
import { Box, Stack } from '@mui/material'
import { stickyImageUrl, events } from '@data/events'
import { getImageUrl } from '@/utils/imageHelper'

function Event() {
  const stickyImage = getImageUrl(stickyImageUrl)

  return (
    <Stack
      direction={'row'}
      alignItems={'start'}
      justifyContent={'space-between'}
    >
      <Box
        sx={{
          width: '45%',
          height: '400px',
          display: {
            xs: 'none',
            md: 'block',
          },
          backgroundImage: `url(${stickyImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'sticky',
          top: 0,
        }}
      ></Box>
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '50%',
          },
          marginLeft: {
            md: 'auto',
          },
        }}
      >
        {events.map((event, i) => (
          <EventCard {...event} key={i} />
        ))}
      </Box>
    </Stack>
  )
}

export default Event

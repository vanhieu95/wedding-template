import Couple from '@/layouts/Couple'
import Event from '@/layouts/Event'
import Gift from '@/layouts/Gift'
import { Favorite } from '@mui/icons-material'
import ShapeDivider from '@/components/ShapeDivider'
import { Box } from '@mui/material'
import { forwardRef } from 'react'

const Section = forwardRef(function Section({ section: id, name: title }, ref) {
  function renderChildren(section) {
    switch (section) {
      case 'couple':
        return <Couple />
      case 'event':
        return <Event />
      case 'gift':
        return <Gift />
      default:
        break
    }
  }

  return (
    <div id={id} className="relative mb-10" ref={ref}>
      <ShapeDivider />

      <Box className="mx-auto w-container pt-24 text-center">
        <div className="relative mb-24">
          <h2 className="font-shantell text-4xl font-bold">{title}</h2>
          <div className="absolute left-1/2 top-12 h-10 border-l-2 border-solid border-black"></div>
          <Favorite className="absolute left-1/2 top-20 -ml-3" />
        </div>

        {renderChildren(id)}
      </Box>
    </div>
  )
})

export default Section

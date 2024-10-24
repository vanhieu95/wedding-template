import PropTypes from 'prop-types'
import { Favorite } from '@mui/icons-material'
import ShapeDivider from '@/components/ShapeDivider'
import { Box } from '@mui/material'

function Section({ title, children }) {
  return (
    <div className="relative mb-10">
      <ShapeDivider />

      <Box className="mx-auto w-container pt-24 text-center">
        <div className="relative mb-24">
          <h2 className="font-shantell text-4xl font-bold">{title}</h2>
          <div className="absolute left-1/2 top-12 h-10 border-l-2 border-solid border-black"></div>
          <Favorite className="absolute left-1/2 top-20 -ml-3" />
        </div>

        {children}
      </Box>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section

import PropTypes from 'prop-types'
import { Favorite } from '@mui/icons-material'
import { Divider } from '@mui/material'

function Section({ title, children }) {
  return (
    <div className="mx-auto w-container py-12 text-center">
      <div className="relative mb-14">
        <h2 className="font-shantell text-4xl font-bold">{title}</h2>
        <div className="border-l-2 border-solid border-black h-10 absolute left-1/2 top-12"></div>
        <Favorite className="absolute left-1/2 -ml-3 top-20" />
      </div>

      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section

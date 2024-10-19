import PropTypes from 'prop-types'

function Section({ title, children }) {
  return (
    <div className="mx-auto w-container py-12">
      <h2 className="text-center font-shantell text-2xl font-bold">{title}</h2>

      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section

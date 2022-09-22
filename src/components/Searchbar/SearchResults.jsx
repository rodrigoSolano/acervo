import React from 'react'
import PropTypes from 'prop-types'
import { SearchBarResultsContainer, sizes } from './styles'

export default function SearchBarResults({
  show = true,
  size = 'large',
  children
}) {
  if (!show) return null

  return (
    <SearchBarResultsContainer size={size}>
      {children}
    </SearchBarResultsContainer>
  )
}

SearchBarResults.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(sizes)),
    PropTypes.string
  ]),
  children: PropTypes.node
}

import React from 'react'
import PropTypes from 'prop-types'
import { SearchBarContainer, sizes } from './styles'

export default function SearchBar({
  size = 'small',
  border = false,
  children
}) {
  return (
    <SearchBarContainer size={size} border={border}>
      {children}
    </SearchBarContainer>
  )
}

SearchBar.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(sizes)),
    PropTypes.string
  ]),
  border: PropTypes.bool,
  children: PropTypes.node
}

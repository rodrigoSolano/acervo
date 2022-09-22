import React from 'react'
import PropTypes from 'prop-types'
import { ChipStyled } from './styles'

export default function FilterChip({ selected = false, ...props }) {
  return <ChipStyled selected={selected} {...props} />
}

FilterChip.propTypes = {
  selected: PropTypes.bool
}

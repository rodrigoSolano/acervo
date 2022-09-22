import React from 'react'
import PropTypes from 'prop-types'
import CancelIcon from '@mui/icons-material/Cancel'
import { IconButton } from '@mui/material'

export default function SearchBarCleanButton({ show, ...props }) {
  if (!show) return null

  return (
    <IconButton {...props}>
      <CancelIcon sx={{ color: 'black.50', fontSize: 'inherit' }} />
    </IconButton>
  )
}

SearchBarCleanButton.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node
}

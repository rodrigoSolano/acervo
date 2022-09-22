import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

export default function HeaderDescription({ children }) {
  return (
    <Typography variant="body1" color="#767676">
      {children}
    </Typography>
  )
}

HeaderDescription.propTypes = {
  children: PropTypes.node
}

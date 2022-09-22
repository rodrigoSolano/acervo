import React from 'react'
import PropTypes from 'prop-types'
import { Typography, useTheme } from '@mui/material'

export default function Title({ children }) {
  const theme = useTheme()
  return (
    <Typography
      variant="body1"
      sx={{ color: theme.palette.black['100'] }}
      gutterBottom
    >
      {children}
    </Typography>
  )
}

Title.propTypes = {
  children: PropTypes.node
}

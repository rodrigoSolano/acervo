import React from 'react'
import PropTypes from 'prop-types'
import { Typography, useTheme } from '@mui/material'

export default function Description({ children }) {
  const theme = useTheme()
  return (
    <Typography variant="body1" sx={{ color: theme.palette.black['50'] }}>
      {children}
    </Typography>
  )
}

Description.propTypes = {
  children: PropTypes.node
}

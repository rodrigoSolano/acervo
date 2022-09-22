import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from '@mui/material'

export default function HeaderHeader({ children }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="baseline">
      {children}
    </Stack>
  )
}

HeaderHeader.propTypes = {
  children: PropTypes.node.isRequired
}

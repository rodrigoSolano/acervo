import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from '@mui/material'

export default function Header({ children }) {
  return (
    <Stack direction="column" justifyContent="space-between" spacing={3}>
      {children}
    </Stack>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired
}

import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

export default function TabPanel({ children, value, index, ...props }) {
  return (
    <div
      id={`tabpanel-${index}`}
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

export default function Content({ children, layoutMode = 'grid' }) {
  return (
    <Box
      mt={layoutMode === 'grid' ? 2 : 0}
      ml={layoutMode === 'grid' ? 0.5 : 1.5}
      sx={{
        ...(layoutMode === 'list' && {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
        })
      }}
    >
      {children}
    </Box>
  )
}

Content.propTypes = {
  children: PropTypes.node,
  layoutMode: PropTypes.oneOf(['grid', 'list'])
}

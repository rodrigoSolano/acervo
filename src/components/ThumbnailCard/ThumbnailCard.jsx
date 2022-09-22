import React from 'react'
import { Box, styled } from '@mui/material'
import PropTypes from 'prop-types'

const ThumbnailCardContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'layoutMode' && prop !== 'shadow'
})(({ theme, layoutMode, shadow }) => ({
  width: '100%',
  display: 'flex',
  padding: layoutMode === 'grid' ? '8px 8px 16px 8px' : '12px',
  background:
    layoutMode === 'grid' ? theme.palette.background.paper : 'transparent',
  borderRadius: layoutMode === 'grid' ? '8px' : 0,
  borderBottom: layoutMode === 'grid' ? 'none' : '1px solid rgba(0,0,0,0.12)',
  flexDirection: layoutMode === 'grid' ? 'column' : 'row',
  boxShadow: shadow
    ? '0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)'
    : 'none',
  '&:hover': {
    cursor: 'pointer'
  },
  '&:last-of-type': {
    borderBottom: 'none'
  }
}))

export default function ThumbnailCard({
  children,
  layoutMode = 'grid',
  shadow = false,
  ...props
}) {
  return (
    <ThumbnailCardContainer layoutMode={layoutMode} shadow={shadow} {...props}>
      {children}
    </ThumbnailCardContainer>
  )
}

ThumbnailCard.propTypes = {
  children: PropTypes.node,
  layoutMode: PropTypes.oneOf(['grid', 'list']),
  shadow: PropTypes.bool
}

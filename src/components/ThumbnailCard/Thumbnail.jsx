import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, styled } from '@mui/material'

export default function Thumbnail({
  label = 'Thumbnail',
  layoutMode = 'grid',
  ...props
}) {
  return (
    <ThumbnailCardThumbnail layoutMode={layoutMode} {...props}>
      <Typography sx={{ color: 'rgba(255,255,255,0.4)' }}>
        {layoutMode === 'grid' && label}
      </Typography>
    </ThumbnailCardThumbnail>
  )
}

const ThumbnailCardThumbnail = styled(Box, {
  shouldForwardProp: prop => prop !== 'layoutMode'
})(({ theme, layoutMode }) => ({
  width: layoutMode === 'grid' ? '100%' : '82px',
  height: layoutMode === 'grid' ? '100%' : '58px',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.black['100'],
  aspectRatio: layoutMode === 'grid' ? '224/151' : '75/48'
}))

Thumbnail.propTypes = {
  label: PropTypes.string,
  layoutMode: PropTypes.oneOf(['grid', 'list'])
}

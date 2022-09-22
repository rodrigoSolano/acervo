import { Box, styled } from '@mui/material'

const FilterContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '1.5rem'
}))

const ThumbnailCardContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'layoutMode'
})(({ theme, layoutMode }) => ({
  width: '100%',
  marginTop: 24,
  marginBottom: 24,
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
  ...(layoutMode === 'list' && {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[2]
  })
}))

export { FilterContainer, ThumbnailCardContainer }

import { Box, styled } from '@mui/material'

const sizes = {
  small: '32px',
  large: '48px'
}

const SearchBarContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'size' && prop !== 'border'
})(({ theme, size = 'small', border = false }) => ({
  width: '100%',
  height: sizes[size],
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  ...(size === 'large' && {
    gap: '8px',
    padding: '0 8px',
    fontSize: '14px'
  }),
  ...(size === 'small' && {
    padding: '0 4px',
    fontSize: '12px',
    gap: '0'
  }),
  ...(border && {
    border: `1px solid rgba(0, 0, 0, 0.12)`
  })
}))

const SearchBarInput = styled('input')(() => ({
  width: '100%',
  height: '24px',
  fontFamily: 'Open Sans',
  fontWeight: 600,
  fontSize: 'inherit',
  lineHeight: '19px',
  border: 'none',
  outline: 'none',
  '&::placeholder': {
    color: '#595C5F',
    fontWeight: 400
  }
}))

const SearchBarResultsContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'size'
})(({ theme, size }) => ({
  width: '100%',
  height: 'auto',
  maxHeight: '284px',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  marginTop: '1px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  position: 'absolute',
  top: sizes[size],
  left: 0,
  boxShadow: theme.shadows[2]
}))

export { SearchBarContainer, SearchBarInput, SearchBarResultsContainer, sizes }

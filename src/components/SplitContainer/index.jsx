import { Box, styled } from '@mui/material'

const SplitContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'onSplit'
})(({ onSplit = '342px', gap = '16px' }) => ({
  display: 'grid',
  gridTemplateColumns: `1fr`,
  gridGap: gap,
  [`@media (min-width: ${onSplit})`]: {
    gridTemplateColumns: `${onSplit} 1fr`
  }
}))

export default SplitContainer

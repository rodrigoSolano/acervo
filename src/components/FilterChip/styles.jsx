import { Chip, styled } from '@mui/material'

const ChipStyled = styled(Chip)(({ theme, selected }) => ({
  backgroundColor: selected ? theme.palette.primary.main : '#FFFFFF',
  color: selected ? '#FFFFFF' : theme.palette.black['100'],
  '&:hover': {
    cursor: 'pointer'
  }
}))

// eslint-disable-next-line import/prefer-default-export
export { ChipStyled }

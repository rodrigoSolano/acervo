import { Button, styled } from '@mui/material'

const ButtonStyled = styled(Button)(
  ({ theme, selected, direction = 'left' }) => ({
    width: '40px',
    height: '40px',
    backgroundColor: selected ? theme.palette.primary.main : '#FFFFFF',
    color: selected ? '#FFFFFF' : theme.palette.black['50'],
    ...(direction === 'left' && {
      borderRadius: '8px 0 0 8px'
    }),
    ...(direction === 'right' && {
      borderRadius: '0 8px 8px 0'
    })
  })
)

// eslint-disable-next-line import/prefer-default-export
export { ButtonStyled }

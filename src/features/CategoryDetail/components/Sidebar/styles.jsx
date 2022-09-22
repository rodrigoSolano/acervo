import { Box, styled } from '@mui/material'

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '16px',
  backgroundColor: theme.palette.background.default
}))

// eslint-disable-next-line import/prefer-default-export
export { SidebarContainer }

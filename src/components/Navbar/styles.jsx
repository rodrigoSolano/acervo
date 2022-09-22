import { Box, Container, styled } from '@mui/material'

const NavbarWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '72px',
  backgroundColor: theme.palette.background.paper,
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
}))

const NavbarContainer = styled(Container)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 24px'
}))

export { NavbarWrapper, NavbarContainer }

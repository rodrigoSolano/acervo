import React from 'react'
import { Stack, Typography } from '@mui/material'
import AccountMenu from '../AccountMenu'
import { NavbarContainer, NavbarWrapper } from './styles'

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer maxWidth="xl">
        <Stack>
          <Typography variant="body" fontWeight={600}>
            Design System Documentation
          </Typography>
          <Typography variant="body2" fontWeight={400} color="black.25">
            Updated 32 minutes ago...
          </Typography>
        </Stack>
        <AccountMenu />
      </NavbarContainer>
    </NavbarWrapper>
  )
}

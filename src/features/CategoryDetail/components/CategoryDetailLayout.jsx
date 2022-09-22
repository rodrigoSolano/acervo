import React from 'react'
import PropTypes from 'prop-types'
import { Container, Paper, styled } from '@mui/material'
import Sidebar from './Sidebar'

const CategoryDetailLayoutContainer = styled(Container)(() => ({
  display: 'grid',
  gridTemplateColumns: '260px 1fr'
}))

export default function CategoryDetailLayout({ children }) {
  return (
    <CategoryDetailLayoutContainer maxWidth="xl">
      <Sidebar />
      <Paper
        elevation={0}
        sx={{ padding: '48px 64px', borderRadius: 0, minHeight: '100vh' }}
      >
        {children}
      </Paper>
    </CategoryDetailLayoutContainer>
  )
}

CategoryDetailLayout.propTypes = {
  children: PropTypes.node.isRequired
}

import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import { Container } from './styles'

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

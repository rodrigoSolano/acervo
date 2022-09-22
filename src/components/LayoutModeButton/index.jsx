import React from 'react'
import PropTypes from 'prop-types'
import GridViewIcon from '@mui/icons-material/GridView'
import ListIcon from '@mui/icons-material/List'
import { ButtonStyled } from './styles'

export default function LayoutModeButton({
  layoutMode = 'grid',
  setLayoutMode
}) {
  return (
    <>
      <ButtonStyled
        selected={layoutMode === 'grid'}
        direction="left"
        onClick={() => setLayoutMode('grid')}
      >
        <GridViewIcon />
      </ButtonStyled>
      <ButtonStyled
        selected={layoutMode === 'list'}
        direction="right"
        onClick={() => setLayoutMode('list')}
      >
        <ListIcon />
      </ButtonStyled>
    </>
  )
}

LayoutModeButton.propTypes = {
  layoutMode: PropTypes.string.isRequired,
  setLayoutMode: PropTypes.func.isRequired
}

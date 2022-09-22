import React from 'react'
import PropTypes from 'prop-types'
import { Button, styled, Typography } from '@mui/material'
import FigmaIcon from '../../../../components/Icons/FigmaIcon'

const StyledButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'color'
})(({ color }) => ({
  height: '34px',
  backgroundColor: color === 'black' ? '#353535' : '#FFFFFF',
  color: color === 'black' ? '#FFFFFF' : '#353535',
  border: color === 'black' ? 'none' : `1px solid rgba(53, 53, 53, 0.2)`,
  boxShadow: 'none',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: color === 'black' ? '#353535' : '#FFFFFF',
    transition: 'all 0.1s ease-in-out',
    transform: 'scale(1.01)'
  }
}))

export default function HeaderFigmaButton({ href, color = 'black', ...props }) {
  const handleClick = () => window.open(href, '_blank', 'noopener,noreferrer')

  return (
    <StyledButton
      startIcon={<FigmaIcon fontSize="large" />}
      onClick={handleClick}
      variant="contained"
      color={color}
      size="small"
      {...props}
    >
      <Typography variant="body2" textTransform="none" fontWeight={600}>
        Ir al Figma
      </Typography>
    </StyledButton>
  )
}

HeaderFigmaButton.propTypes = {
  href: PropTypes.string,
  color: PropTypes.arrayOf(['black', 'white'])
}

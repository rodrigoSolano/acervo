import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

export default function SearchBarButton({ ...props }) {
  return (
    <IconButton {...props}>
      <SearchRoundedIcon sx={{ color: 'black.50', fontSize: 'inherit' }} />
    </IconButton>
  )
}

SearchBarButton.propTypes = {
  children: PropTypes.string
}

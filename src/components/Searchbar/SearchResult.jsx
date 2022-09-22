import React from 'react'
import PropTypes from 'prop-types'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { Box, Typography } from '@mui/material'

export default function SearchBarResult({ searchTerm, result }) {
  const highlight = result?.slice(0, searchTerm?.length)
  const rest = result?.slice(searchTerm?.length)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '18px',
        padding: '16px',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        '&:last-of-type': {
          borderBottom: 'none'
        }
      }}
    >
      <SearchRoundedIcon sx={{ color: '#D3D3D4', fontSize: '24px' }} />
      <Typography fontWeight={700} component="span">
        {highlight}
        <Typography fontWeight={400} component="span">
          {rest}
        </Typography>
      </Typography>
    </Box>
  )
}

SearchBarResult.propTypes = {
  searchTerm: PropTypes.string,
  result: PropTypes.string
}

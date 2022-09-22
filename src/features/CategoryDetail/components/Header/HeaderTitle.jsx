import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Typography } from '@mui/material'

export default function HeaderTitle({ title, code }) {
  return (
    <Stack direction="row" spacing="24px" alignItems="baseline">
      <Typography variant="h4" fontWeight={700}>
        {title}
      </Typography>
      <Typography color="#A7A7A7" variant="body1" fontWeight={400}>
        {code}
      </Typography>
    </Stack>
  )
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string
}

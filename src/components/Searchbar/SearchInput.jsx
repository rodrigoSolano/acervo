import React from 'react'
import PropTypes from 'prop-types'
import { SearchBarInput as SearchBarInputField } from './styles'

export default function SearchBarInput({
  placeholder = 'Buscar en el acervo...',
  ...props
}) {
  return <SearchBarInputField placeholder={placeholder} {...props} />
}

SearchBarInput.propTypes = {
  placeholder: PropTypes.string
}

// @ts-check
import { useState } from 'react'

export default function useSearchBar(_searchTerm = '') {
  const [searchTerm, setSearchTerm] = useState(_searchTerm)

  /**
   * When the input changes, set the search term to the input's value.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The event object.
   * @returns {void}
   */
  const handleSearchTermChange = event => setSearchTerm(event.target.value)

  /**
   * It sets the searchTerm state to an empty string
   * @returns {void}
   */
  const clearSearchTerm = () => setSearchTerm('')

  return [searchTerm, handleSearchTermChange, clearSearchTerm]
}

import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchBar from './index'
import '@testing-library/jest-dom'

describe('SearchBar', () => {
  beforeEach(() => {
    render(
      <SearchBar>
        <SearchBar.SearchButton />
        <SearchBar.Input placeholder="Search" />
        <SearchBar.ClearButton />
      </SearchBar>
    )
  })
  it('renders SearchBar component', () => {
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
  it('renders SearchButton component', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})

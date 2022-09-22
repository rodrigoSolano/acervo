import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Container, Box, Stack, Typography } from '@mui/material'
import SearchBar from '../components/Searchbar'
import FilterChip from '../components/FilterChip'
import useDebounce from '../hooks/useDebounce'
import useSearchBar from '../hooks/useSearchBar'
import LayoutModeButton from '../components/LayoutModeButton'
import useCategories from '../features/Home/hooks/useCategories'
import ThumbnailCard from '../components/ThumbnailCard'
import useFilterCategories from '../features/Home/hooks/useFilterCategories'
import {
  FilterContainer,
  ThumbnailCardContainer
} from '../features/Home/components/styles'

export default function Index() {
  const { categories, searchResults, searchCategories } = useCategories()
  const {
    filterCategories,
    selectedFilterCategory,
    handleSelectFilterCategory
  } = useFilterCategories()
  const [layoutMode, setLayoutMode] = useState('grid')
  const [searchTerm, handleSearchTermChange, clearSearchTerm] = useSearchBar()
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const router = useRouter()

  const redirectToCategoryDetails = category =>
    router.push(`/category/${category.id}`)

  useEffect(() => {
    searchCategories({ searchTerm: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  return (
    <Container maxWidth="xl">
      <Stack mt={7} mb={7} gap={2}>
        <Typography variant="h2" textAlign="center" fontWeight={700}>
          Smart kit
        </Typography>
        <Image src="/logo-bluepixel.svg" width="104" height="13" priority={1} />
      </Stack>
      <Container maxWidth="sm">
        <SearchBar size="large">
          <SearchBar.SearchButton />
          <SearchBar.Input
            onChange={handleSearchTermChange}
            value={searchTerm}
          />
          <SearchBar.ClearButton
            show={!!searchTerm}
            onClick={clearSearchTerm}
          />
          <SearchBar.Results
            show={!!searchResults && !!searchTerm}
            size="large"
          >
            {searchResults.map(result => (
              <SearchBar.Result
                key={result}
                result={result.name}
                searchTerm={searchTerm}
              />
            ))}
          </SearchBar.Results>
        </SearchBar>
      </Container>
      <Box mt={9}>
        <FilterContainer>
          <Stack direction="row" spacing="8px">
            {filterCategories.map(category => (
              <FilterChip
                key={category.id}
                label={category.name}
                onClick={() => handleSelectFilterCategory(category)}
                selected={category === selectedFilterCategory}
              />
            ))}
          </Stack>
          <Stack direction="row">
            <LayoutModeButton
              layoutMode={layoutMode}
              setLayoutMode={setLayoutMode}
            />
          </Stack>
        </FilterContainer>
      </Box>
      <ThumbnailCardContainer layoutMode={layoutMode}>
        {categories.map(category => (
          <ThumbnailCard
            key={category.id}
            onClick={() => redirectToCategoryDetails(category)}
            layoutMode={layoutMode}
          >
            <ThumbnailCard.Thumbnail layoutMode={layoutMode} />
            <ThumbnailCard.Content layoutMode={layoutMode}>
              <ThumbnailCard.Title>{category.name}</ThumbnailCard.Title>
              <ThumbnailCard.Description>
                {category.numberOfComponents} components
              </ThumbnailCard.Description>
            </ThumbnailCard.Content>
          </ThumbnailCard>
        ))}
      </ThumbnailCardContainer>
    </Container>
  )
}

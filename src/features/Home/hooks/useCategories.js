import { useEffect, useState } from 'react'
import categorySearchService from '../services/categorySearchService'
import getCategoriesService from '../services/getCategoriesService'

export default function useCategories() {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const fetchCategories = async () => {
    const response = await getCategoriesService()
    setCategories(response.edges)
    setIsLoading(false)
  }

  const searchCategories = async ({ searchTerm }) => {
    const { edges } = await categorySearchService({
      filter: { query: searchTerm }
    })
    setSearchResults(edges)
    setCategories(edges)
    return edges
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return {
    isLoading,
    categories,
    searchResults,
    searchCategories
  }
}

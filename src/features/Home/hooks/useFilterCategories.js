import { useEffect, useState } from 'react'
import getFilterCategoriesService from '../services/getFilterCategoriesService'

export default function useFilterCategories() {
  const [filterCategories, setFilterCategories] = useState([])
  const [selectedFilterCategory, setSelectedFilterCategory] = useState(null)

  const handleSelectFilterCategory = filterCategory => {
    setSelectedFilterCategory(filterCategory)
  }

  const fetchFilterCategories = async () => {
    const response = await getFilterCategoriesService()
    setFilterCategories(response)
    setSelectedFilterCategory(response[0])
  }

  useEffect(() => {
    fetchFilterCategories()
  }, [])

  return {
    filterCategories,
    selectedFilterCategory,
    handleSelectFilterCategory
  }
}

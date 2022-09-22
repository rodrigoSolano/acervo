import { useEffect, useState } from 'react'
import getCategoryDetail from '../services/getCategoryDetailService'

export default function useCategoryDetail() {
  const [category, setCategory] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchCategoryDetail = async () => {
    setLoading(true)
    const Category = await getCategoryDetail()
    setCategory(Category)
    setLoading(false)
  }

  useEffect(() => {
    fetchCategoryDetail()
  }, [])

  return { category, loading }
}

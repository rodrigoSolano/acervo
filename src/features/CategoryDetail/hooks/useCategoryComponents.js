import { useEffect, useState } from 'react'
import getCategoryComponentsService from '../services/getCategoryComponentsService'

export default function useCategoryComponents() {
  const [components, setComponents] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCategoryComponents = async () => {
    setLoading(true)
    const Components = await getCategoryComponentsService()
    setComponents(Components)
    setLoading(false)
  }

  useEffect(() => {
    fetchCategoryComponents()
  }, [])

  return { components, loading }
}

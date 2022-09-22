import { useEffect, useState } from 'react'
import getComponentDetailService from '../services/getComponentDetailService'

export default function useComponentDetail() {
  const [component, setComponent] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchComponentDetail = async () => {
    setLoading(true)
    const Component = await getComponentDetailService()
    setComponent(Component)
    setSelectedPlatform(Component.platforms[0])
    setLoading(false)
  }

  const changePlatform = platform => {
    setSelectedPlatform(platform)
  }

  useEffect(() => {
    fetchComponentDetail()
  }, [])

  return { component, selectedPlatform, loading, changePlatform }
}

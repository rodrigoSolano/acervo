import React from 'react'
import { useRouter } from 'next/router'
import { Box, styled, Typography } from '@mui/material'
import ThumbnailCard from '../../../../components/ThumbnailCard'
import CategoryDetailLayout from '../../../../features/CategoryDetail/components/CategoryDetailLayout'
import useCategoryComponents from '../../../../features/CategoryDetail/hooks/useCategoryComponents'

const CategoryComponentContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(252px, 1fr))',
  gap: '16px'
}))

export default function CategoryComponent() {
  const router = useRouter()
  const { categoryId } = router.query
  const { components } = useCategoryComponents()

  const redirectToComponent = componentId =>
    router.push(`/category/${categoryId}/components/${componentId}`)

  return (
    <CategoryDetailLayout>
      <Typography variant="h4" fontWeight={700} mb={3} gutterBottom>
        Components
      </Typography>
      <Typography variant="h5" fontWeight={600} mb={5} gutterBottom>
        These components from the core building blocks of our application and
        work together to form the interface
      </Typography>
      <CategoryComponentContainer>
        {components.map(component => (
          <ThumbnailCard
            onClick={() => redirectToComponent(component.id)}
            shadow
            key={component.id}
          >
            <ThumbnailCard.Thumbnail />
            <ThumbnailCard.Content>
              <ThumbnailCard.Title>{component.name}</ThumbnailCard.Title>
              <ThumbnailCard.Description>
                {component.numberOfComponents} components
              </ThumbnailCard.Description>
            </ThumbnailCard.Content>
          </ThumbnailCard>
        ))}
      </CategoryComponentContainer>
    </CategoryDetailLayout>
  )
}

import React from 'react'
import { useRouter } from 'next/router'
import { Box, Stack, Typography } from '@mui/material'
import SplitContainer from '../../../components/SplitContainer'
import useCategoryDetails from '../../../features/CategoryDetail/hooks/useCategoryDetail'
import CategoryDetailLayout from '../../../features/CategoryDetail/components/CategoryDetailLayout'
import HeaderCategoryDetail from '../../../features/CategoryDetail/components/Header'

export default function CategoryDetail() {
  const router = useRouter()
  const { category, loading } = useCategoryDetails()

  const redirectToComponent = componentId => {
    router.push(
      `/category/${router.query.categoryId}/components/${componentId}`
    )
  }

  if (loading) return <div>Loading...</div>

  return (
    <CategoryDetailLayout>
      <HeaderCategoryDetail>
        <HeaderCategoryDetail.Header>
          <HeaderCategoryDetail.Title
            title={category.name}
            code={category.code}
          />
          <HeaderCategoryDetail.FigmaButton href={category.figmaURL} />
        </HeaderCategoryDetail.Header>
        <HeaderCategoryDetail.Description>
          {category.description}
        </HeaderCategoryDetail.Description>
      </HeaderCategoryDetail>
      <Stack mt={3} spacing="16px">
        <Typography variant="body1" color="black.75">
          Thumbnail
        </Typography>
        <SplitContainer onSplit="342px">
          <Box
            width="100%"
            sx={{
              minHeight: '192px',
              backgroundImage: `url(${category.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px'
            }}
          />
          <Stack>
            <Typography variant="body1" color="black.75" gutterBottom>
              Año
            </Typography>
            <Typography variant="body1" color="black.40" gutterBottom>
              {category.year}
            </Typography>
            <Typography variant="body1" color="black.75" gutterBottom>
              Keywords
            </Typography>
            <Typography variant="body1" color="black.40" gutterBottom>
              {category?.keywords?.join(', ')}
            </Typography>
          </Stack>
        </SplitContainer>
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight={700} color="black.75" mt={8}>
            Componentes usados en este proyecto
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(163px, 1fr))',
              gap: '16px'
            }}
          >
            {category?.components?.map(component => (
              <Box
                key={component.id}
                sx={{
                  width: '163px',
                  height: '120px',
                  backgroundImage: `url(${component.thumbnail})`,
                  borderRadius: '8px',
                  '&:hover': {
                    cursor: 'pointer',
                    opacity: 0.8
                  }
                }}
                onClick={() => redirectToComponent(component.id)}
              />
            ))}
          </Box>
        </Stack>
      </Stack>
    </CategoryDetailLayout>
  )
}

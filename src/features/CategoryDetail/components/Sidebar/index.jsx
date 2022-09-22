import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Stack, Typography, styled } from '@mui/material'
import { useRouter } from 'next/router'
import SearchBar from '../../../../components/Searchbar'
import { SidebarContainer } from './styles'

const StyledLink = styled('a')(() => ({
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}))

export default function Sidebar() {
  const router = useRouter()
  const { categoryId } = router.query

  return (
    <SidebarContainer>
      <Stack justifyContent="center" mt={4}>
        <Image src="/logo-bluepixel.svg" width="144" height="18" priority={1} />
      </Stack>
      <Box mt={4}>
        <SearchBar size="small" border>
          <SearchBar.SearchButton size="small" />
          <SearchBar.Input />
        </SearchBar>
      </Box>
      <Box mt={3}>
        <Stack spacing={3}>
          <Link href={`/category/${categoryId}`}>
            <StyledLink>
              <Typography variant="body2" fontWeight={700}>
                OVERVIEW
              </Typography>
            </StyledLink>
          </Link>
          <Link href={`/category/${categoryId}/status`}>
            <StyledLink>
              <Typography variant="body2" fontWeight={700}>
                STATUS
              </Typography>
            </StyledLink>
          </Link>
          <Link href={`/category/${categoryId}/process`}>
            <StyledLink>
              <Typography variant="body2" fontWeight={700}>
                PROCESS
              </Typography>
            </StyledLink>
          </Link>
          <Stack spacing={3}>
            <Link href={`/category/${categoryId}/guidelines`}>
              <StyledLink>
                <Typography variant="body2" fontWeight={700}>
                  GUIDELINES
                </Typography>
              </StyledLink>
            </Link>
            <Stack spacing={3} sx={{ paddingLeft: 2 }}>
              <Link href={`/category/${categoryId}/guidelines/1`}>
                <StyledLink>
                  <Typography variant="body2" fontWeight={600}>
                    Logo
                  </Typography>
                </StyledLink>
              </Link>
              <Link href={`/category/${categoryId}/guidelines/1`}>
                <StyledLink>
                  <Typography variant="body2" fontWeight={600}>
                    Mobile
                  </Typography>
                </StyledLink>
              </Link>
              <Link href={`/category/${categoryId}/guidelines/1`}>
                <StyledLink>
                  <Typography variant="body2" fontWeight={600}>
                    Layout
                  </Typography>
                </StyledLink>
              </Link>
              <Link href={`/category/${categoryId}/guidelines/1`}>
                <StyledLink>
                  <Typography variant="body2" fontWeight={600}>
                    Colors
                  </Typography>
                </StyledLink>
              </Link>
              <Link href={`/category/${categoryId}/guidelines/1`}>
                <StyledLink>
                  <Typography variant="body2" fontWeight={600}>
                    Typography
                  </Typography>
                </StyledLink>
              </Link>
              <Link href={`/category/${categoryId}/guidelines/1`}>
                <StyledLink>
                  <Typography variant="body2" fontWeight={600}>
                    Iconography
                  </Typography>
                </StyledLink>
              </Link>
            </Stack>
          </Stack>
          <Link href={`/category/${categoryId}/components`}>
            <StyledLink>
              <Typography variant="body2" fontWeight={700}>
                COMPONENTS
              </Typography>
            </StyledLink>
          </Link>
        </Stack>
      </Box>
    </SidebarContainer>
  )
}

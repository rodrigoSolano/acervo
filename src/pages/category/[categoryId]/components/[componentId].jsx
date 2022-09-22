import React from 'react'
import dynamic from 'next/dynamic'
import LinkIcon from '@mui/icons-material/Link'
import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material'
import TabPanel from '../../../../components/TabPanel'
import useComponentDetail from '../../../../features/ComponentDetail/hooks/useComponentDetail'
import CategoryDetailLayout from '../../../../features/CategoryDetail/components/CategoryDetailLayout'
import HeaderCategoryDetail from '../../../../features/CategoryDetail/components/Header'
import PreviewComponent from '../../../../features/ComponentDetail/components/PreviewComponent'
import CodeComponent from '../../../../features/ComponentDetail/components/CodeComponent'
import {
  index,
  Navbar,
  NavbarBurgerButton,
  context,
  NavbarItem,
  NavbarItems,
  NavbarLeftItems,
  NavbarLogo,
  NavbarRightItems,
  App,
  entry
} from '../../../../features/ComponentDetail/mocks/component'

const DynamicComponent = dynamic(() => Promise.resolve(PreviewComponent), {
  ssr: false
})

const CodeComponentDynamic = dynamic(() => Promise.resolve(CodeComponent), {
  ssr: false
})

export default function CategoryComponentDetail() {
  const { component, loading, changePlatform } = useComponentDetail()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => setValue(newValue)

  const convertStringToFile = (string, fileName) => {
    const file = new File([string], fileName, { type: 'text/plain' })
    return file
  }

  const downloadAllFiles = () => {
    const strings = [
      {
        string: index,
        fileName: 'index.js'
      },
      {
        string: Navbar,
        fileName: 'Navbar.js'
      },
      {
        string: NavbarBurgerButton,
        fileName: 'NavbarBurgerButton.js'
      },
      {
        string: context,
        fileName: 'context.js'
      },
      {
        string: NavbarItem,
        fileName: 'NavbarItem.js'
      },
      {
        string: NavbarItems,
        fileName: 'NavbarItems.js'
      },
      {
        string: NavbarLeftItems,
        fileName: 'NavbarLeftItems.js'
      },
      {
        string: NavbarLogo,
        fileName: 'NavbarLogo.js'
      },
      {
        string: NavbarRightItems,
        fileName: 'NavbarRightItems.js'
      },
      {
        string: App,
        fileName: 'App.js'
      },
      {
        string: entry,
        fileName: 'entry.js'
      }
    ]
    const files = strings.map(file =>
      convertStringToFile(file.string, file.fileName)
    )

    // download all files by one by one
    files.forEach(file => {
      const url = URL.createObjectURL(file)
      const a = document.createElement('a')
      a.href = url
      a.download = file.name
      a.click()
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <CategoryDetailLayout>
      <HeaderCategoryDetail>
        <HeaderCategoryDetail.Header>
          <HeaderCategoryDetail.Title
            title={component?.name}
            code={component?.code}
          />
          <HeaderCategoryDetail.FigmaButton href={component?.figmaURL} />
        </HeaderCategoryDetail.Header>
        <HeaderCategoryDetail.Description>
          {component?.description}
        </HeaderCategoryDetail.Description>
      </HeaderCategoryDetail>
      <Stack spacing={3} mt={2}>
        <Stack>
          <Typography fontWeight={700} color="#767676" component="span">
            Tiempo estimado:
          </Typography>
          <Typography color="primary" component="span">
            {component?.estimatedDevelopmentTime}
          </Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={700} color="#767676" component="span">
            Referencias:
          </Typography>
          <Stack mt="16px" direction="row" spacing="16px">
            <Button
              sx={{ borderRadius: '8px' }}
              color="primary"
              variant="contained"
              startIcon={<LinkIcon sx={{ color: 'white' }} />}
              onClick={() => window.open('https://mui.com/', '_blank')}
            >
              <Typography color="white" textTransform="none">
                material.io
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Box mt={4}>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            {component?.platforms.map(platform => (
              <Tab
                key={platform.id}
                label={platform.name}
                onClick={() => changePlatform(platform)}
              />
            ))}
            <Tab label="Desarrollo" />
          </Tabs>
        </Box>
        {component?.platforms.map((platform, _index) => (
          <TabPanel key={platform.id} value={value} index={_index}>
            <DynamicComponent />
          </TabPanel>
        ))}
        <TabPanel value={value} index={2}>
          <Box mb={5}>
            <Button variant="contained" onClick={() => downloadAllFiles()}>
              <Typography color="white">Download All Files</Typography>
            </Button>
          </Box>
          <CodeComponentDynamic />
        </TabPanel>
      </Box>
    </CategoryDetailLayout>
  )
}

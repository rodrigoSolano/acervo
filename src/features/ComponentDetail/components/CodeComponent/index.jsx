import React from 'react'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor
} from '@codesandbox/sandpack-react'

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
} from '../../mocks/component'

export default function CodeComponent() {
  return (
    <SandpackProvider
      template="react"
      files={{
        '/App.js': App,
        '/NavbarRightItems.js': NavbarRightItems,
        '/NavbarLogo.js': NavbarLogo,
        '/NavbarLeftItems.js': NavbarLeftItems,
        '/NavbarItems.js': NavbarItems,
        '/NavbarItem.js': NavbarItem,
        '/NavbarBurgerButton.js': NavbarBurgerButton,
        '/Navbar.js': Navbar,
        '/index.js': index,
        '/context.js': context,
        '/entry.js': {
          code: entry,
          hidden: true
        }
      }}
      customSetup={{
        dependencies: {
          '@emotion/react': '^11.10.4',
          '@emotion/styled': '^11.10.4',
          '@mui/icons-material': '^5.10.6',
          '@mui/material': '^5.10.6',
          '@testing-library/jest-dom': '^5.16.5',
          '@testing-library/react': '^13.4.0',
          '@testing-library/user-event': '^13.5.0',
          react: '^18.2.0',
          'react-dom': '^18.2.0',
          'react-scripts': '5.0.1',
          'web-vitals': '^2.1.4'
        },
        entry: 'entry.js'
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor showTabs showInlineErrors wrapContent />
      </SandpackLayout>
    </SandpackProvider>
  )
}

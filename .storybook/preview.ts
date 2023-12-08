import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { mockItemsRequestInterceptors } from '../src/features/items/hooks/apiMock/item'
import { mockItemGroupsRequestInterceptors } from '../src/features/items/hooks/apiMock/itemGroup'

initialize({
  onUnhandledRequest: () => {},
})

const preview: Preview = {
  parameters: {
    msw: {
      handlers: [
        ...mockItemGroupsRequestInterceptors,
        ...mockItemsRequestInterceptors,
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  loaders: [mswLoader],
}

export default preview

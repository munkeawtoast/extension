import type { Meta, StoryObj } from '@storybook/react'
import ActiveItemsDisplayContent from '.'
import { mockItemGroups } from '~/model/item/itemGroup.mock'

const meta: Meta<typeof ActiveItemsDisplayContent> = {
  component: ActiveItemsDisplayContent,
  parameters: {
    backgrounds: {
      default: 'loadouttf',
      values: [
        {
          name: 'loadouttf',
          value: '#13385D',
        },
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof ActiveItemsDisplayContent>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    itemGroups: mockItemGroups,
  },
}

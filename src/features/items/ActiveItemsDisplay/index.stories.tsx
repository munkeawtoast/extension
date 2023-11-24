import type { Meta, StoryObj } from '@storybook/react'
import ActiveItemsDisplay from '.'
import { mockItemGroups } from '~/model/item/itemGroup.mock'

const meta: Meta<typeof ActiveItemsDisplay> = {
  component: ActiveItemsDisplay,
  render: (props) => (
    <div className="flex flex-col h-screen">
      <div className="flex-1"></div>
      <ActiveItemsDisplay {...props} />,
    </div>
  ),
  parameters: {
    layout: 'padded',
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
type Story = StoryObj<typeof ActiveItemsDisplay>

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

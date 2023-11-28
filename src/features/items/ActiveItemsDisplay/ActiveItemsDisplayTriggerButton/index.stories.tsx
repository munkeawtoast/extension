import { Collapsible } from '@radix-ui/react-collapsible'
import type { Meta, StoryObj } from '@storybook/react'
import ActiveItemsDetailTriggerButton from '.'

const meta: Meta<typeof ActiveItemsDetailTriggerButton> = {
  component: ActiveItemsDetailTriggerButton,
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
  render: (args) => (
    <Collapsible>
      <ActiveItemsDetailTriggerButton {...args} />
    </Collapsible>
  ),
}

export default meta
type Story = StoryObj<typeof ActiveItemsDetailTriggerButton>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

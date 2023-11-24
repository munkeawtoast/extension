import { Collapsible } from '@radix-ui/react-collapsible'
import type { Meta, StoryObj } from '@storybook/react'
import ActiveItemsTriggerButton from '.'

const meta: Meta<typeof ActiveItemsTriggerButton> = {
  component: ActiveItemsTriggerButton,
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
      <ActiveItemsTriggerButton {...args} />
    </Collapsible>
  ),
}

export default meta
type Story = StoryObj<typeof ActiveItemsTriggerButton>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

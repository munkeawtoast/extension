import type { Meta, StoryObj } from '@storybook/react'
import ActiveItemsDisplayFooter from '.'

const meta: Meta<typeof ActiveItemsDisplayFooter> = {
  component: ActiveItemsDisplayFooter,
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
type Story = StoryObj<typeof ActiveItemsDisplayFooter>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

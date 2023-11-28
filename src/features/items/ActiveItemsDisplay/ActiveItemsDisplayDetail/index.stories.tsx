import type { Meta, StoryObj } from '@storybook/react'
import ActiveItemsDisplayDetail from '.'

const meta: Meta<typeof ActiveItemsDisplayDetail> = {
  component: ActiveItemsDisplayDetail,
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
type Story = StoryObj<typeof ActiveItemsDisplayDetail>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

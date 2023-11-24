import type { Meta, StoryObj } from '@storybook/react'

import ActiveItemGroup from './index'

const meta: Meta<typeof ActiveItemGroup> = {
  component: ActiveItemGroup,
}

export default meta
type Story = StoryObj<typeof ActiveItemGroup>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  // render: () => <ActiveItemContent primary label="Button" />,
}

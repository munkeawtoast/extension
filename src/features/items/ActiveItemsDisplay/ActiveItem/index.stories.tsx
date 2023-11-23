import type { Meta, StoryObj } from '@storybook/react'

import ActiveItem from '.'

const meta: Meta<typeof ActiveItem> = {
  component: ActiveItem,
}

export default meta
type Story = StoryObj<typeof ActiveItem>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  // render: () => <ActiveItemContent primary label="Button" />,
}

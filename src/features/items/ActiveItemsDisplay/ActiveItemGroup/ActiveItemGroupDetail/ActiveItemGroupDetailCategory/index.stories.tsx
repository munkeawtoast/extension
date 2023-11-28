import type { Meta, StoryObj } from '@storybook/react'

import ActiveItemGroupDetailCategory from '.'

const meta: Meta<typeof ActiveItemGroupDetailCategory> = {
  component: ActiveItemGroupDetailCategory,
}

export default meta
type Story = StoryObj<typeof ActiveItemGroupDetailCategory>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {}

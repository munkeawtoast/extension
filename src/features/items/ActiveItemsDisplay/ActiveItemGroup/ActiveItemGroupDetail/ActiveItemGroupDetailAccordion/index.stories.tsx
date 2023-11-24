import type { Meta, StoryObj } from '@storybook/react'

import ActiveItemGroupDetailAccordion from '.'

const meta: Meta<typeof ActiveItemGroupDetailAccordion> = {
  component: ActiveItemGroupDetailAccordion,
}

export default meta
type Story = StoryObj<typeof ActiveItemGroupDetailAccordion>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {}

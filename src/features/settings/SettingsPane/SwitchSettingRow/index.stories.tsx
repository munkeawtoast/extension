import type { Meta, StoryObj } from '@storybook/react'
import SwitchSettingRow from '.'

const meta: Meta<typeof SwitchSettingRow> = {
  component: SwitchSettingRow,
}

export default meta
type Story = StoryObj<typeof SwitchSettingRow>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

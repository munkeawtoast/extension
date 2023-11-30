import type { Meta, StoryObj } from '@storybook/react'
import SettingsPane from '.'

const meta: Meta<typeof SettingsPane> = {
  parameters: {
    layout: 'fullscreen',
  },
  component: SettingsPane,
  render: () => (
    <div className="flex w-full justify-end pr-[200px]">
      <SettingsPane />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof SettingsPane>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
}

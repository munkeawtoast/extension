import { Accordion } from '@radix-ui/react-accordion'
import type { Meta, StoryObj } from '@storybook/react'
import { mockItemGroups } from '../../model/itemGroup.mock'
import ActiveItemGroup from './index'

const meta: Meta<typeof ActiveItemGroup> = {
  component: ActiveItemGroup,
  render: (props) => (
    <Accordion type="single">
      <ActiveItemGroup {...props} />
    </Accordion>
  ),
}

export default meta
type Story = StoryObj<typeof ActiveItemGroup>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    itemGroup: mockItemGroups[0],
  },
  // render: () => <ActiveItemContent primary label="Button" />,
}

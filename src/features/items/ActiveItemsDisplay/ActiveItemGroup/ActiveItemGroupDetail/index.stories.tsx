import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionItem } from '@radix-ui/react-accordion'
import ActiveItemGroupDetail from '.'
import { mockItemGroups } from '~/features/items/model/itemGroup.mock'

const meta: Meta<typeof ActiveItemGroupDetail> = {
  component: ActiveItemGroupDetail,
  render: (args) => (
    <Accordion type="single">
      <AccordionItem value="test">
        <ActiveItemGroupDetail {...args} />
      </AccordionItem>
    </Accordion>
  ),
}

export default meta
type Story = StoryObj<typeof ActiveItemGroupDetail>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
  args: {
    itemGroup: mockItemGroups[0],
  },
}

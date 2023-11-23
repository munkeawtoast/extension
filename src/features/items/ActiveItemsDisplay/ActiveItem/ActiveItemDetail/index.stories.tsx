import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionItem } from '@radix-ui/react-accordion'
import ActiveItemDetail from '.'

const meta: Meta<typeof ActiveItemDetail> = {
  component: ActiveItemDetail,
  render: (args) => (
    <Accordion type="single" defaultValue={args.baseName}>
      <AccordionItem value={args.baseName}>
        <ActiveItemDetail {...args} />
      </AccordionItem>
    </Accordion>
  ),
}

export default meta
type Story = StoryObj<typeof ActiveItemDetail>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
  args: {},
}

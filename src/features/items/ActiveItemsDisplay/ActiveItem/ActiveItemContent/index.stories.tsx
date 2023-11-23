import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionItem } from '@radix-ui/react-accordion'
import ActiveItemContent from '.'

const meta: Meta<typeof ActiveItemContent> = {
  component: ActiveItemContent,
}

export default meta
type Story = StoryObj<typeof ActiveItemContent>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
  args: {
    baseName: 'Golden Frying Pan',
    image:
      'https://steamcdn-a.akamaihd.net/apps/440/icons/c_frying_pan_gold.babf22c60b24a75403a2e1e4a02b48eca4145633.png',
    item: {
      buy: {
        keys: 30000,
        metal: 0,
      },
      name: 'Strange Golden Frying Pan',
      sku: '1071;11',
      source: 'bptf',
      time: 1700736065916,
    },
  },
  render: (args) => (
    <Accordion type="single" defaultValue={args.baseName}>
      <AccordionItem value={args.baseName}>
        <ActiveItemContent {...args} />
      </AccordionItem>
    </Accordion>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '@iconify/react'
import StyledQualityColoredActionRowLikeButton from '.'

const meta: Meta<typeof StyledQualityColoredActionRowLikeButton> = {
  component: StyledQualityColoredActionRowLikeButton,
  parameters: {
    backgrounds: {
      default: 'active detail',
      values: [
        {
          name: 'active detail',
          value: '#323232',
        },
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof StyledQualityColoredActionRowLikeButton>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const OptionHeader: Story = {
  args: {
    quality: 15,
    size: '3xl',
    title: 'Quality',
    variant: 'transparent',
    children: <Icon icon="ph:caret-down" className="text-3xl" />,
  },
}

export const Quality: Story = {
  args: {
    quality: 11,
    title: 'Strange',
    variant: 'filled',
    children: (
      <>
        <div className="flex-1" />
        <Icon icon="ph:caret-down" className="text-md" />
      </>
    ),
  },
  // render: () => <ActiveItemContent primary label="Button" />,
}

export const Item: Story = {
  args: {
    quality: 11,
    title: 'Strange Golden Flying Pan',
    variant: 'filled',
  },
  // render: () => <ActiveItemContent primary label="Button" />,
}

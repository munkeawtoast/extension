import type { Meta, StoryObj } from '@storybook/react'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import PricetagApp from './app'

const meta: Meta<typeof PricetagApp> = {
  component: PricetagApp,
  render: () => {
    const [domReady, setDomReady] = useState(false)
    useEffect(() => {
      setDomReady(true)
    }, [])
    return (
      <>
        <div id="pricetag-extension" className="flex h-screen">
          <div className="flex-1 bg-[#41454D]" />
          <div className="relative flex-1 h-screen">
            <div className="absolute top-0 right-0 w-[38rem] h-10 bg-red-300"></div>
            <div className="character-manager-character-selector-outer absolute bottom-0 right-0 ">
              <div className="bg-red-300 h-[3.5rem] w-[33.75rem]" />
            </div>
          </div>
        </div>
        {domReady
          ? createPortal(
              <PricetagApp />,
              document.querySelector('#pricetag-extension')!
            )
          : null}
      </>
    )
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'loadouttf',
      values: [
        {
          name: 'loadouttf',
          value: '#13385D',
        },
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof PricetagApp>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

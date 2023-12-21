import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { waitForEl } from '../util'
import ActiveItemsDisplay from '~/features/items/ActiveItemsDisplay'
import { StyleApplier } from '~/hooks/style'

const ActiveItemsManager = () => {
  const [container, setContainer] = useState<DocumentFragment | Element | null>(
    null
  )

  async function createActiveItemsManagerElement() {
    const outerElement = await waitForEl(
      '.character-manager-character-selector-outer'
    )!

    let container: HTMLDivElement | DocumentFragment =
      document.createElement('div')
    container.style.marginRight = '12px'
    container.style.position = 'absolute'
    container.style.bottom = '60px'
    container.style.right = '0'
    container.style.zIndex = '20'
    container.style.fontSize = '16px'

    let isStorybook: boolean
    try {
      isStorybook = !!__STORYBOOK_CLIENT_API__
    } catch {
      isStorybook = false
    }
    // outerElement.prepend(container)
    outerElement.insertAdjacentElement('beforebegin', container)
    if (!isStorybook) {
      const shadowContainer = container.attachShadow({
        mode: __DEV__ ? 'open' : 'closed',
      })
      container = shadowContainer
    }
    setContainer(container)
  }

  useEffect(() => {
    createActiveItemsManagerElement()
  }, [])

  return container
    ? createPortal(
        <>
          <StyleApplier />
          <ActiveItemsDisplay />
        </>,
        container,
        'active-items'
      )
    : null
}

export default ActiveItemsManager

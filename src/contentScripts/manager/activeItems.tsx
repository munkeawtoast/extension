import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { waitForEl } from '../util'
import ActiveItemsDisplay from '~/features/items/ActiveItemsDisplay'
import type { ItemGroup } from '~/features/items/model/ItemGroup'
import { useGetAllGroupedPricings } from '~/features/items/hooks/internalApi/query'
import { StyleApplier } from '~/hooks/style'

const ActiveItemsManager = () => {
  const { data: _data } = useGetAllGroupedPricings()

  const [container, setContainer] = useState<DocumentFragment | Element | null>(
    null
  )
  const [itemGroups, setItemGroups] = useState<Array<ItemGroup>>([])

  async function createActiveItemsManagerElement() {
    const outerElement = await waitForEl(
      '.character-manager-character-selector-outer'
    )!
    let container: HTMLDivElement | DocumentFragment =
      document.createElement('div')
    container.style.fontSize = '16px'
    let isStorybook: boolean
    try {
      isStorybook = !!__STORYBOOK_CLIENT_API__
    } catch {
      isStorybook = false
    }
    outerElement.prepend(container)
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
          <ActiveItemsDisplay itemGroups={itemGroups} />
        </>,
        container,
        'active-items'
      )
    : null
}

export default ActiveItemsManager

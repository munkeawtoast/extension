import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { waitForEl } from '../util'
import ActiveItemsDisplay from '~/features/items/ActiveItemsDisplay'
import type { ItemGroup } from '~/features/items/model/ItemGroup'

const ActiveItemsManager = () => {
  const itemGroups: Array<ItemGroup> = []
  const [container, setContainer] = useState<Element | null>(null)

  async function setContainerWhenReady() {
    const outer = await waitForEl(
      '.character-manager-character-selector-outer'
    )!
    const container = document.createElement('div')
    outer.prepend(container)
    setContainer(container)
  }

  useEffect(() => {
    setContainerWhenReady()
  }, [])

  return container
    ? createPortal(
        <ActiveItemsDisplay itemGroups={itemGroups} />,
        container,
        'active-items'
      )
    : null
}

export default ActiveItemsManager

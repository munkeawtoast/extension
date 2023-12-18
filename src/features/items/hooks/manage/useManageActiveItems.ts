import { useEffect, useState } from 'react'
import { useActiveItemsStore } from '../../stores/useActiveItemsStore'
import { useGetAllGroupedPricings } from '../query'
import type { ItemGroup } from '../../model/ItemGroup'
import { ActiveItemsEmitter } from '~/features/loadouttf/emitters/activeItems'
import type { ItemManagerItemElement } from '~/features/loadouttf/elements'

// TODO: Move this to a separate file
export function getItemNameByItemManager(itemManager: ItemManagerItemElement) {
  return itemManager.title.split(' (')[0]
}

export function useManageActiveItems() {
  const { setActiveItems, activeItems } = useActiveItemsStore((state) => ({
    setActiveItems: state.setActiveItems,
    activeItems: state.activeItems,
  }))

  const [isReady, setIsReady] = useState(false)

  const { data } = useGetAllGroupedPricings()
  const [itemGroupsArray, setItemGroupsArray] = useState<Array<ItemGroup>>()

  useEffect(() => {
    if (data) {
      const itemGroups: Array<ItemGroup> = data.pricings
      setItemGroupsArray(itemGroups)
      setIsReady(true)
    }
  }, [data])

  useEffect(() => {
    if (!isReady) {
      return
    }
    const activeItemsEmitter = new ActiveItemsEmitter()
    activeItemsEmitter.on('changed', (event) => {
      setActiveItems(
        event.newItems.map(({ element }) => {
          const theItem = itemGroupsArray!.find(
            (itemGroup) => itemGroup.name === getItemNameByItemManager(element)
          )!
          return theItem
        })
      )
    })
  }, [itemGroupsArray, isReady])
  return [isReady]
}

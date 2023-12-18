import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import type { ItemGroup } from '../model/ItemGroup'
import type { ItemManagerItemElement } from '~/features/loadouttf/elements'

export type RawActiveItem = {
  name: string
  element: ItemManagerItemElement
  referenceElement: HTMLDivElement
  imageUrl: string
}

type ActiveItemsStoreState = {
  activeItems: Array<ItemGroup>
}

type ActiveItemsStoreActions = {
  setActiveItems: (activeItems: Array<ItemGroup>) => Promise<void>
}

const initialState: ActiveItemsStoreState = {
  activeItems: [],
}

export const useActiveItemsStore = create<
  ActiveItemsStoreActions & ActiveItemsStoreState
>()(
  combine(initialState, (set, _get) => ({
    setActiveItems: async (activeItems) => {
      set({
        activeItems,
      })
      // set({
      //   rawActiveItems,
      //   // activeItems: rawActiveItems.map((item) => {}),
      // })
    },
  }))
)

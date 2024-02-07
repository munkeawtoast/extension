import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import type { Item } from '../model/item'

export type SKU = string

export type SelectedItem = Item
export type RawSelectedItem = SKU

type SelectedItemsStoreState = {
  rawItems: Array<RawSelectedItem>
}

type SelectedItemsStoreActions = {
  setSelectedItems: (skus: Array<RawSelectedItem>) => Promise<void>
}

const initialState: SelectedItemsStoreState = {
  rawItems: [],
}

export const useSelectedItemsStore = create<
  SelectedItemsStoreActions & SelectedItemsStoreState
>()(
  combine(initialState, (set, _get) => ({
    setSelectedItems: async (skus) => {
      set({
        rawItems: skus,
      })
    },
  }))
)

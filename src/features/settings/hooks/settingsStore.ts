import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { FilterKey } from '../filter'
import type { CustomFilterMerged } from '../SettingsPane/CustomChoice'
import { extensionStorage } from '~/hooks/storage'

export type SettingsStateV1 = {
  filter: FilterKey
  customFilter?: CustomFilterMerged[]
  customFilterLastId: number
}

export type SettingsState = SettingsStateV1
export type SettingsAction = {
  setFilter: (filter: FilterKey) => void
  addCustomFilter: (filter: Omit<CustomFilterMerged, 'id'>) => void
  removeCustomFilterById: (filterId: CustomFilterMerged['id']) => void
}

const defaultSettings: SettingsStateV1 = {
  filter: 'only-budget-unique',
  customFilterLastId: 0,
}
export const useSettingsStore = create<SettingsState & SettingsAction>()(
  persist(
    (set, get) => ({
      ...defaultSettings,
      setFilter: (filter) => set({ filter }),
      addCustomFilter: (filter) => {
        const newFilter: CustomFilterMerged = filter as CustomFilterMerged
        newFilter.id = get().customFilterLastId + 1
        set({
          customFilter: [...(get().customFilter ?? []), newFilter],
          customFilterLastId: newFilter.id,
        })
      },
      removeCustomFilterById: (filterId) => {
        const customFilters = get().customFilter
        if (!customFilters) {
          return
        }
        set({
          customFilter: customFilters.filter(
            (filter) => filter.id !== filterId
          ),
        })
      },
    }),
    {
      name: 'settings',
      storage: createJSONStorage(() => {
        // TODO: fix unable to import webextension-polyfill due to environment not being extension
        // HACK: i guess ill just use extensionStorage for now lol
        // if (chrome?.extension || browser?.extension) {
        //   return extensionStorage
        // } else {
        //   return localStorage
        // }
        return extensionStorage
      }),
      version: 1,
      // migrate: (state, version) => {
      //   return { mode: state.mode }
      // },
    }
  )
)

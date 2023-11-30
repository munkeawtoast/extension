import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type Modes = 'budget' | 'normal'

export type SettingsStateV1 = {
  mode: Modes
}

export type SettingsState = SettingsStateV1

export type SettingsAction = {
  setMode: (mode: Modes) => void
}

const defaultSettings: SettingsStateV1 = {
  mode: 'budget',
}

export const useSettingsStore = create<SettingsState & SettingsAction>()(
  persist(
    (set, _get) => ({
      mode: defaultSettings.mode,
      setMode: (mode) => set({ mode }),
    }),
    {
      name: 'settings',
      storage: createJSONStorage(() => {
        // TODO: fix unable to import webextension-polyfill due to environment not being extension
        // if (chrome?.extension || browser?.extension) {
        //   return extensionStorage
        // } else {
        //   return localStorage
        // }
        return localStorage
      }),
      version: 1,
      // migrate: (state, version) => {
      //   return { mode: state.mode }
      // },
    }
  )
)

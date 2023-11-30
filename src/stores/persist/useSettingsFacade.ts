import { useShallow } from 'zustand/react/shallow'
import type {
  SettingsAction,
  SettingsState,
} from '~/features/settings/hooks/settingsStore'
import { useSettingsStore } from '~/features/settings/hooks/settingsStore'

export type UserSettingsFacadeState = SettingsState & SettingsAction

const useSettingsFacade = <T extends keyof UserSettingsFacadeState>(
  states: T[]
) => {
  const store = useSettingsStore(
    useShallow((state) => {
      return states.reduce(
        (acc, key) => {
          acc[key] = state[key]
          return acc
        },
        {} as Pick<UserSettingsFacadeState, T>
      )
    })
  )
  return store
}

export default useSettingsFacade

import { storage } from 'webextension-polyfill'
import type { StateStorage } from 'zustand/middleware'

export const extensionStorage: StateStorage = {
  removeItem(key: string) {
    return storage.local.remove(key)
  },
  setItem(key: string, value: string) {
    return storage.local.set({ [key]: value })
  },
  async getItem(key: string) {
    return (await storage.local.get(key))[key]
  },
}

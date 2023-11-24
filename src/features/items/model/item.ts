import type { ItemGroup } from './ItemGroup'

export type Currencies = {
  keys: number
  metal: number
}
export type Item = {
  sku: string
  name: string
  source?: string
  time?: number
  buy: Currencies
}

export type Qualities = keyof ItemGroup['groups']

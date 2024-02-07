import TF2SKU from '@tf2autobot/tf2-sku'
import type { Item } from '../items/model/item'
// import { useSettingsStore } from './hooks/settingsStore'

export type FilterKey = 'only-budget-unique' | 'all'
export type FilterFunction = (item: Item) => boolean

export const onlyBudgetUniqueFilter: FilterFunction = (item: Item) => {
  const sku = TF2SKU.fromString(item.sku)
  return [sku.quality === 6, !sku.festive, !sku.killstreak].every((val) => val)
}

export const allFilter: FilterFunction = (item: Item) => {
  return true
}

export function filterFunctionMap(filterName: FilterKey) {
  const functionMap: Record<FilterKey, FilterFunction> = {
    'only-budget-unique': onlyBudgetUniqueFilter,
    // custom: customFilter,
    all: allFilter,
  }
  return functionMap[filterName]
}

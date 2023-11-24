import type {
  ItemServiceGroupedPricings,
  ItemServicePricingsItemEntry,
} from './schemas'

export type ItemServiceGroupedPricingsDTO = {
  pricings: Array<ItemServiceGroupedPricings>
  success: true
  timestamp: number
}

export type ItemServicePricingsDTO = {
  pricings: Array<ItemServicePricingsItemEntry>
  success: true
  timestamp: number
}

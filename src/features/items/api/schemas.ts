// shared

export type ItemServiceCurrencies = {
  keys: number
  metal: number
}
// grouped items
export type ItemServiceGroupedPricings = {
  defindex: number
  name: string
  image: string
  groups: {
    0: Array<ItemServiceGroupedPricingsItemEntry>
    1: Array<ItemServiceGroupedPricingsItemEntry>
    3: Array<ItemServiceGroupedPricingsItemEntry>
    5: Array<ItemServiceGroupedPricingsItemEntry>
    6: Array<ItemServiceGroupedPricingsItemEntry>
    9: Array<ItemServiceGroupedPricingsItemEntry>
    11: Array<ItemServiceGroupedPricingsItemEntry>
    13: Array<ItemServiceGroupedPricingsItemEntry>
    14: Array<ItemServiceGroupedPricingsItemEntry>
    15: Array<ItemServiceGroupedPricingsItemEntry>
  }
}

export type ItemServiceGroupedPricingsItemEntry = {
  sku: string
  name: string
  source?: string
  time?: number
  buy: ItemServiceCurrencies
}

// items
export type ItemServicePricingsItemEntry = {
  sku: string
  name: string
  baseName: string
  source?: string
  time?: number
  buy: ItemServiceCurrencies
  sell: ItemServiceCurrencies
  image: string
}

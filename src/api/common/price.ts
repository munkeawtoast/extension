export interface Price {
  sku: string
  name?: string
  baseName?: string
  source?: string
  time: number | null
  buy: Currencies | null
  sell: Currencies | null
}

interface Currencies {
  keys: number
  metal: number
}

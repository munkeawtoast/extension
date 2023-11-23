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

export type ItemGroup = {
  defindex: number
  name: string
  image: string
  groups: {
    0: Array<Item>
    1: Array<Item>
    3: Array<Item>
    5: Array<Item>
    6: Array<Item>
    9: Array<Item>
    11: Array<Item>
    13: Array<Item>
    14: Array<Item>
    15: Array<Item>
  }
}

import Tf2Sku from '@tf2autobot/tf2-sku'
import type { Price } from '~/api/common/price'

export interface GroupedPrice {
  defindex: number
  name: string
  groups: {
    '0': Array<Price>
    '1': Array<Price>
    '3': Array<Price>
    '5': Array<Price>
    '6': Array<Price>
    '9': Array<Price>
    '11': Array<Price>
    '13': Array<Price>
    '14': Array<Price>
    '15': Array<Price>
  }
}

export function useGroupedPricing(prices: Price[]): GroupedPrice[] {
  return prices.reduce<GroupedPrice[]>((acc, item) => {
    function pushNewItem(group: GroupedPrice, item: Price) {
      const sku = Tf2Sku.fromString(item.sku)
      if (!group.name && sku.craftable && sku.quality === 6) {
        group.name = item.name!
        const groups = Object.values(group.groups)
        groups.forEach((gItems) => {
          gItems.forEach((it) => {
            it.baseName = group.name
          })
        })
      }
      item.baseName = group.name
      group.groups[`${sku.defindex}` as keyof GroupedPrice['groups']].push(item)
      acc.push(group)
    }

    const sku = Tf2Sku.fromString(item.sku)
    const itGroup = acc.find((p) => p.defindex)
    if (!itGroup) {
      const newGroup = structuredClone({
        defindex: sku.defindex,
        name: null,
        groups: {
          '0': [],
          '1': [],
          '3': [],
          '5': [],
          '6': [],
          '9': [],
          '11': [],
          '13': [],
          '14': [],
          '15': [],
        },
      }) as unknown as GroupedPrice
      pushNewItem(newGroup, item)
    } else {
      pushNewItem(itGroup, item)
    }
    return acc
  }, [])
}

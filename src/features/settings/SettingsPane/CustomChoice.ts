// export type CustomChoiceType = 'quality'

import TF2SKU from '@tf2autobot/tf2-sku'
import type { FilterFunction } from '../filter'
import type { Qualities } from '~/features/items/model/item'

export type BaseCustomFilter = {
  name: string
  id: string
}

export type CustomFilterMerged = QualityCustomFilter

export type QualityCustomFilter = {
  type: 'quality'
  id: number
  quality: Qualities
  selectionType: 'not' | 'only'
} & (
  | {
      isUnusual: false
      isDecorated: false
    }
  | {
      isUnusual: true
      isDecorated: false
      unusualEffect?: number
    }
  | {
      isUnusual: false
      isDecorated: true
      decoration?: any // TODO: quality decoration type
    }
)

export function customFilterFactory(filters: QualityCustomFilter[]): FilterFunction[] {
  const filterChain = filters.flatMap((filter) => {
    switch (filter.type) {
      case 'quality':
        return qualityFilterFactory(filter)
      default:
        return []
    }
  })

  return filterChain
}

function qualityFilterFactory(filter: QualityCustomFilter): FilterFunction[] {
  const filterChain: FilterFunction[] = []

  filterChain.push(
    (item) => {
      const { isUnusual, isDecorated } = filter
      const sku = TF2SKU.fromString(item.sku)
      const quality = sku.quality 

      switch (filter.selectionType) {
        case 'not':
          return quality !== filter.quality
        case 'only':
          return quality === filter.quality
      }
    },
  )

  if (filter.isUnusual) {
    filterChain.push((item) => {
      const sku = TF2SKU.fromString(item.sku)
      if (!sku.effect) {
        return false
      }
      if (filter.unusualEffect) {
        return sku.effect === filter.unusualEffect
      }
      return true
    })
  }

  return filterChain

}

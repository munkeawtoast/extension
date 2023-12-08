import classNames from 'classnames'
import type { ItemGroup } from './model/ItemGroup'
import type { Qualities } from '~/features/items/model/item'

export function getNameOfQuality(quality: Qualities) {
  const qualityNameMap: Record<Qualities, string> = {
    '0': 'Normal',
    '1': 'Genuine',
    '3': 'Vintage',
    '5': 'Unusual',
    '6': 'Unique',
    '9': 'Self-made',
    '11': 'Strange',
    '13': 'Haunted',
    '14': "Collector's",
    '15': 'Decorated',
  }

  return qualityNameMap[quality]
}

export function getClassnameColorByQuality(
  quality: Qualities,
  _decorationQuality: any,
  options: {
    border?: boolean
    background?: boolean
    text?: boolean
  }
) {
  const textColorStyleMap: Record<Qualities, string> = {
    '0': 'text-quality-normal',
    '1': 'text-quality-genuine',
    '3': 'text-quality-vintage',
    '5': 'text-quality-unusual',
    '6': 'text-quality-unique',
    '9': 'text-quality-selfmade',
    '11': 'text-quality-strange',
    '13': 'text-quality-haunted',
    '14': 'text-quality-collectors',
    '15': 'text-quality-decorated',
  }
  const bgColorStyleMap: Record<Qualities, string> = {
    '0': 'bg-quality-normal/75',
    '1': 'bg-quality-genuine/75',
    '3': 'bg-quality-vintage/75',
    '5': 'bg-quality-unusual/75',
    '6': 'bg-quality-unique/75',
    '9': 'bg-quality-selfmade/75',
    '11': 'bg-quality-strange/75',
    '13': 'bg-quality-haunted/75',
    '14': 'bg-quality-collectors/75',
    '15': 'bg-quality-decorated/75',
  }
  const borderColorStyleMap: Record<Qualities, string> = {
    '0': 'border-quality-normal',
    '1': 'border-quality-genuine',
    '3': 'border-quality-vintage',
    '5': 'border-quality-unusual',
    '6': 'border-quality-unique',
    '9': 'border-quality-selfmade',
    '11': 'border-quality-strange',
    '13': 'border-quality-haunted',
    '14': 'border-quality-collectors',
    '15': 'border-quality-decorated',
  }
  const { border, background, text } = options
  return classNames(
    text && (textColorStyleMap[quality] ?? 'text-quality-normal'),
    background && (bgColorStyleMap[quality] ?? 'bg-quality-normal'),
    border && (borderColorStyleMap[quality] ?? 'border-quality-normal')
  )
}

export function filterGroupsQuality(
  itemGroups: Array<ItemGroup>,
  qualities: Array<keyof ItemGroup['groups']>
): Array<ItemGroup> {
  return itemGroups.map((itemGroup) => {
    const { groups, ...rest } = itemGroup
    return {
      ...rest,
      groups: Object.fromEntries(
        Object.entries(groups).map(([quality, items]) =>
          qualities.includes(quality as unknown as keyof ItemGroup['groups'])
            ? [quality, items]
            : [
                quality,
                [] as Array<ItemGroup['groups'][keyof ItemGroup['groups']]>,
              ]
        )
      ),
    }
  })
}

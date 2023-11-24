import classNames from 'classnames'
import type { Qualities } from '~/features/items/model/item'

export function getClassnameColorByQuality(
  quality: number,
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
    text && (textColorStyleMap[quality as Qualities] ?? 'text-quality-normal'),
    background &&
      (bgColorStyleMap[quality as Qualities] ?? 'bg-quality-normal'),
    border &&
      (borderColorStyleMap[quality as Qualities] ?? 'border-quality-normal')
  )
}

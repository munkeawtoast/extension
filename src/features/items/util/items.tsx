import classNames from 'classnames'
import type { Qualities } from '~/model/item/item'

export function getItemClassnameColor(
  quality: number,
  _decorationQuality: any,
  border = false
) {
  const bgColorMap: Record<Qualities, string> = {
    '0': 'bg-quality-normal/70',
    '1': 'bg-quality-genuine/70',
    '3': 'bg-quality-vintage/70',
    '5': 'bg-quality-unusual/70',
    '6': 'bg-quality-unique/70',
    '9': 'bg-quality-selfmade/70',
    '11': 'bg-quality-strange/70',
    '13': 'bg-quality-haunted/70',
    '14': 'bg-quality-collectors/70',
    '15': 'bg-quality-unique/70',
  }
  const borderColorMap: Record<Qualities, string> = {
    '0': 'border-quality-normal',
    '1': 'border-quality-genuine',
    '3': 'border-quality-vintage',
    '5': 'border-quality-unusual',
    '6': 'border-quality-unique',
    '9': 'border-quality-selfmade',
    '11': 'border-quality-strange',
    '13': 'border-quality-haunted',
    '14': 'border-quality-collectors',
    '15': 'border-quality-unique',
  }
  return classNames(
    bgColorMap[quality as Qualities] ?? 'bg-quality-normal',
    border && (borderColorMap[quality as Qualities] ?? 'border-quality-normal')
  )
}

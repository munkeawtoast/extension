import type { Size } from './base'

export type FontSize = Size

const fontSizeStyleMap: Record<Size, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
}

export function getFontSize(size?: Size) {
  return size ? fontSizeStyleMap[size] : fontSizeStyleMap.md
}

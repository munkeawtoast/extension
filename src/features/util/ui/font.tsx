import type { TwSize } from './base'

export type FontSize = TwSize

const fontSizeStyleMap: Record<TwSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
}

export function getTwFontSize(size?: TwSize) {
  return size ? fontSizeStyleMap[size] : fontSizeStyleMap.md
}

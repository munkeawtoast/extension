import classNames from 'classnames'
import { forwardRef } from 'react'
import { getClassnameColorByQuality } from '~/features/items/util/items'
import type { Size } from '~/features/items/util/ui/base'
import { getFontSize } from '~/features/items/util/ui/font'
import type { Qualities } from '~/model/item/item'

type StyleQualityColoredActionRowLikeButtonProps = {
  title: string
  quality: Qualities
  decorationQuality?: any
  size?: Size
  variant?: 'filled' | 'transparent'
  containerClassName?: string
  children: React.ReactNode
}

const StyleQualityColoredActionRowLikeButton = forwardRef<
  HTMLButtonElement,
  StyleQualityColoredActionRowLikeButtonProps
>(
  (
    {
      title,
      variant = 'filled',
      quality,
      decorationQuality,
      size: fontSize,
      children,
      containerClassName,
    },
    forwardedRef
  ) => {
    const baseStyle = classNames(
      getClassnameColorByQuality(quality, decorationQuality, {
        text: true,
      })
    )
    const variantStyleMap: Record<
      NonNullable<StyleQualityColoredActionRowLikeButtonProps['variant']>,
      string
    > = {
      filled: 'bg-[#2A2A2A] border-2 border-[#5F5F5F]',
      transparent: '',
    }
    return (
      <button
        className={classNames(
          'px-2 py-1 rounded items-stretch flex w-full',
          baseStyle,
          variantStyleMap[variant]
        )}
        ref={forwardedRef}
      >
        <div>
          <span className={getFontSize(fontSize)}>{title}</span>
        </div>
        <div
          className={classNames('flex-1 flex items-center', containerClassName)}
        >
          {children}
        </div>
      </button>
    )
  }
)

export default StyleQualityColoredActionRowLikeButton

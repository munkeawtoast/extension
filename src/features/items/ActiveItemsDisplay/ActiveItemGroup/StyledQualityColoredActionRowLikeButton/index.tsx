import classNames from 'classnames'
import { forwardRef } from 'react'
import type { Qualities } from '~/features/items/model/item'
import { getClassnameColorByQuality } from '~/features/items/util'
import type { TwSize } from '~/features/util/ui/base'
import { getTwFontSize } from '~/features/util/ui/font'

type StyleQualityColoredActionRowLikeButtonProps = {
  title: string
  quality: Qualities
  decorationQuality?: any
  size?: TwSize
  variant?: 'filled' | 'transparent'
  containerClassName?: string
  children?: React.ReactNode
  onClick?: () => void
  outerClassName?: string
  isOn?: boolean
}

const StyledQualityColoredActionRowLikeButton = forwardRef<
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
      outerClassName: className,
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
      filled: 'bg-component-content border-2 border-component-border',
      transparent: '',
    }
    return (
      <button
        className={classNames(
          'px-2 py-1 rounded items-stretch flex w-full',
          baseStyle,
          variantStyleMap[variant],
          className
        )}
        ref={forwardedRef}
      >
        <div>
          <span className={getTwFontSize(fontSize)}>{title}</span>
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

export default StyledQualityColoredActionRowLikeButton

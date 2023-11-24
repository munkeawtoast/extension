import classNames from 'classnames'
import type { FC } from 'react'
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
  children?: ChildrenPropInjectedProps
  onClick?: () => void
  isOn?: boolean
}

export type ChildrenPropInjectedProps = FC<{
  isOn: boolean
}>

// TODO ส่ง ref แต่ ก็ต้องมี isOnด้วย ทำไงนิ
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
          <span className={getTwFontSize(fontSize)}>{title}</span>
        </div>
        <div
          className={classNames('flex-1 flex items-center', containerClassName)}
        >
          {children ? children({ isOn: false }) : null}
        </div>
      </button>
    )
  }
)

export default StyleQualityColoredActionRowLikeButton

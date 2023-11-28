import React, { forwardRef } from 'react'
import { CollapsibleTrigger } from '@radix-ui/react-collapsible'
import classNames from 'classnames'
import StyledQualityColoredActionRowLikeButton from '../../StyledQualityColoredActionRowLikeButton'
import type { Qualities } from '~/features/items/model/item'
import { getNameOfQuality } from '~/features/items/util'

export type ActiveItemGroupDetailQualityCollapsibleHeaderProps = {
  quality: Qualities
  count?: number
}

const ActiveItemGroupDetailQualityCollapsibleHeader = forwardRef<
  HTMLButtonElement,
  ActiveItemGroupDetailQualityCollapsibleHeaderProps
>(({ quality, count }, forwardedRef) => {
  return (
    <CollapsibleTrigger className={classNames('w-full')} ref={forwardedRef}>
      <StyledQualityColoredActionRowLikeButton
        quality={quality}
        title={`${getNameOfQuality(quality)} ${count}`}
        children
      />
    </CollapsibleTrigger>
  )
})

export default ActiveItemGroupDetailQualityCollapsibleHeader

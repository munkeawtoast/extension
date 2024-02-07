import { ToggleGroupItem } from '@radix-ui/react-toggle-group'
import classNames from 'classnames'
import { forwardRef } from 'react'
import tf2Sku from '@tf2autobot/tf2-sku'
import { Icon } from '@iconify/react'
import StyledQualityColoredActionRowLikeButton from '../../StyledQualityColoredActionRowLikeButton'
import type { Item, Qualities } from '~/features/items/model/item'
import BuyPrice from '~/features/items/BuyPrice'

export type ActiveItemDetailEntryChoiceProps = {
  item: Item
}

const ActiveItemGroupDetailEntryChoice = forwardRef<
  HTMLButtonElement,
  ActiveItemDetailEntryChoiceProps
>(({ item }, forwardedRef) => {
  return (
    <ToggleGroupItem
      ref={forwardedRef}
      className={classNames(`group/item flex-1 flex`)}
      value={item.sku}
      aria-label={item.name}
    >
      <div className="px-2 items-center flex justify-center self-stretch">
        <label className="h-5 cursor-pointer w-5 bg-neutral-800 border-2 rounded-sm border-component-border block">
          <Icon
            icon="ph:check-bold"
            className="text-white scale-[1.75] translate-x-1 -translate-y-1.5 group-data-[state=off]/item:opacity-0"
          />
        </label>
      </div>
      <StyledQualityColoredActionRowLikeButton
        quality={tf2Sku.fromString(item.sku).quality as unknown as Qualities}
        outerClassName="text-left"
        title={`${item.name} ${item.sku}`}
        children={
          <>
            <div className="flex-1" />
            <BuyPrice className="pl-2 w-20" price={item.buy} />
          </>
        }
      />
    </ToggleGroupItem>
  )
})

export default ActiveItemGroupDetailEntryChoice

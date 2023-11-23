import { ToggleGroupItem } from '@radix-ui/react-toggle-group'
import classNames from 'classnames'
import { forwardRef } from 'react'
import type { Item } from '~/model/item/item'

export type ActiveItemDetailEntryChoiceProps = {
  item: Item
}

// TODO: Implement this component
const ActiveItemDetailEntryChoice = forwardRef<
  HTMLButtonElement,
  ActiveItemDetailEntryChoiceProps
>(({ item }, forwardedRef) => {
  return (
    <ToggleGroupItem
      className={classNames(`group/${item.name}`)}
      value={item.sku}
      aria-label={item.name}
    ></ToggleGroupItem>
  )
})

export default ActiveItemDetailEntryChoice

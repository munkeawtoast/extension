import { AccessibleIcon } from '@radix-ui/react-accessible-icon'
import { Icon } from '@iconify/react'
import BuyPrice from '~/features/items/BuyPrice'
import type { Item } from '~/features/items/model/item'

export type ActiveItemsDisplayDetailItemEntryProps = {
  item: Item
  handleItemRemove: () => void
}

const ActiveItemsDisplayDetailItemEntry: React.FC<
  ActiveItemsDisplayDetailItemEntryProps
> = ({ item, handleItemRemove }) => {
  return (
    <div className="flex px-3">
      <div className="flex-1 flex">
        <span>{item.name}</span>
        <div>
          <BuyPrice
            containerClassName="flex gap-2"
            className="flex-row"
            price={item.buy}
          />
        </div>
      </div>
      <button
        onClick={handleItemRemove}
        className="w-12 h-12 items-center flex justify-center"
      >
        <AccessibleIcon label={`Remove ${item.name}`}>
          <Icon icon="ph:x-bold" className="text-red-500 text-2xl" />
        </AccessibleIcon>
      </button>
    </div>
  )
}

/* <div key={item.sku}>{item.sku}</div> */
export default ActiveItemsDisplayDetailItemEntry

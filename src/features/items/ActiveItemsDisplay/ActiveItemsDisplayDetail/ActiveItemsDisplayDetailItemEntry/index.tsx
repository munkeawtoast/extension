import { AccessibleIcon } from '@radix-ui/react-accessible-icon'
import { Icon } from '@iconify/react'
import classNames from 'classnames'
import sku from '@tf2autobot/tf2-sku'
import BuyPrice from '~/features/items/BuyPrice'
import type { Item, Qualities } from '~/features/items/model/item'
import { getClassnameColorByQuality } from '~/features/items/util'

export type ActiveItemsDisplayDetailItemEntryProps = {
  item: Item
  handleItemRemove: () => void
}

const ActiveItemsDisplayDetailItemEntry: React.FC<
  ActiveItemsDisplayDetailItemEntryProps
> = ({ item, handleItemRemove }) => {
  const skuObject = sku.fromString(item.sku)
  const { quality } = skuObject

  return (
    <div className="flex px-3">
      <div className="flex-1 flex">
        <span
          className={classNames(
            getClassnameColorByQuality(quality as unknown as Qualities, null, {
              text: true,
            }),
            'px-2 py-1 rounded items-stretch flex w-full'
          )}
        >
          {item.name}
          {item.sku}
        </span>
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

import sku from '@tf2autobot/tf2-sku'
import type { ActiveItemsRecord } from '..'
import type { Item } from '../../model/item'
import ActiveItemsDisplayDetailItemEntry from './ActiveItemsDisplayDetailItemEntry'

export type ActiveItemsDisplayDetailProps = {
  selectedItems: ActiveItemsRecord
  setSelectedItems?: (newItems: ActiveItemsRecord) => void
}

const ActiveItemsDisplayDetail: React.FC<ActiveItemsDisplayDetailProps> = ({
  selectedItems,
  setSelectedItems,
}) => {
  function removeItem(item: Item) {
    if (!setSelectedItems) {
      return
    }
    const defIndex = sku.fromString(item.sku).defindex
    const { [defIndex]: thisRecord, ...items } = selectedItems
    return setSelectedItems({
      ...items,
      [defIndex]: thisRecord.filter((i) => i.sku !== item.sku),
    })
  }
  return (
    <div className="bg-card-footer text-neutral-300 rounded-b-md">
      <div className="flex justify-between items-center py-2 px-3">
        <div className="flex items-center">
          <div className="mr-2">Estimated Price: </div>
          <div className="text-xl font-bold">0.00</div>
        </div>
        <div className="flex items-center">
          <div className="mr-2">Items:</div>
          {/* {selectedItems.length > 0 ? (
            <>
              <div className="text-xl font-bold">{selectedItems.length}</div>
            </>
          ) : (
            <div className="text-xl font-bold">0</div>
          )} */}
        </div>
      </div>
      <div>
        {Object.values(selectedItems)
          .flat()
          .map((item) => (
            <ActiveItemsDisplayDetailItemEntry
              key={item.sku}
              item={item}
              handleItemRemove={() => removeItem(item)}
            />
          ))}
      </div>
    </div>
  )
}

export default ActiveItemsDisplayDetail

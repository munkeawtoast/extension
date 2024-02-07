import TF2SKU from '@tf2autobot/tf2-sku'
import type { SelectedItemsRecord } from '..'
import type { Item } from '../../model/item'
import { useActiveItemsStore } from '../../stores/useActiveItemsStore'
import ActiveItemsDisplayDetailItemEntry from './ActiveItemsDisplayDetailItemEntry'

export type ActiveItemsDisplayDetailProps = {
  selectedItems: SelectedItemsRecord
  setSelectedItems: (newItems: SelectedItemsRecord) => void
  skus: Array<string>
  setSkus: (newSkus: Array<string>) => void
}

const ActiveItemsDisplayDetail: React.FC<ActiveItemsDisplayDetailProps> = ({
  selectedItems,
  setSelectedItems,
}) => {
  const activeItems = useActiveItemsStore((state) => state.activeItems)
  function removeItem(item: Item) {
    if (!setSelectedItems) {
      return
    }
    const { defindex: defIndex } = TF2SKU.fromString(item.sku)
    const { [defIndex]: thisRecord, ...items } = selectedItems
    return setSelectedItems({
      ...items,
      [defIndex]: thisRecord.filter((i) => i.sku !== item.sku),
    })
  }

  function getActiveAndSelecteditems() {
    return Object.values(selectedItems)
      .flat()
      .filter((item) =>
        activeItems
          .map((i) => i.defindex)
          .includes(TF2SKU.fromString(item.sku).defindex)
      )
  }
  return (
    <div className="bg-card-footer text-neutral-300 rounded-b-md">
      <div className="flex justify-between items-center py-2 px-3">
        {/* <div className="flex items-center">
          <div className="mr-2">Estimated Price: </div>
          <div className="text-xl font-bold">0.00</div>
        </div> */}
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
        {getActiveAndSelecteditems().map((item) => (
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

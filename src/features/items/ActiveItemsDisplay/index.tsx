import { Collapsible, CollapsibleContent } from '@radix-ui/react-collapsible'
import type { FC } from 'react'
import { useState } from 'react'
import type { Item } from '../model/item'
import ActiveItemsDisplayContent from './ActiveItemsDisplayContent'
import ActiveItemsDisplayDetail from './ActiveItemsDisplayDetail'
import ActiveItemsDetailTriggerButton from './ActiveItemsDisplayTriggerButton'
import type { ItemGroup } from '~/features/items/model/ItemGroup'

export type ActiveItemsDisplayProps = {
  itemGroups: Array<ItemGroup>
}

export type ActiveItemsRecord = Record<string, Array<Item>>

const ActiveItemsDisplay: FC<ActiveItemsDisplayProps> = ({ itemGroups }) => {
  const [selectedItems, setSelectedItems] = useState<ActiveItemsRecord>({})
  function handleSelectedItemsChange(newItems: ActiveItemsRecord) {
    setSelectedItems(newItems)
  }
  return (
    <Collapsible className="flex flex-col items-end">
      <CollapsibleContent asChild>
        <div className="mb-3 shadow-lg w-96">
          <div className="bg-card-header py-2 px-3 rounded-t-md text-white text-xl">
            LISTING
          </div>
          <ActiveItemsDisplayContent
            selectedItems={selectedItems}
            setSelectedItems={handleSelectedItemsChange}
            itemGroups={itemGroups}
          />
          <ActiveItemsDisplayDetail selectedItems={selectedItems} />
        </div>
      </CollapsibleContent>
      <ActiveItemsDetailTriggerButton />
    </Collapsible>
  )
}

export default ActiveItemsDisplay

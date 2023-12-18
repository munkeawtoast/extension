import { Collapsible, CollapsibleContent } from '@radix-ui/react-collapsible'
import { useState } from 'react'
import type { Item } from '../model/item'
import ActiveItemsDisplayContent from './ActiveItemsDisplayContent'
import ActiveItemsDisplayDetail from './ActiveItemsDisplayDetail'
import ActiveItemsDetailTriggerButton from './ActiveItemsDisplayTriggerButton'

export type ActiveItemsDisplayProps = {}

export type SelectedItemsRecord = Record<string, Array<Item>>

const ActiveItemsDisplay: React.FC<ActiveItemsDisplayProps> = () => {
  const [selectedItems, setSelectedItems] = useState<SelectedItemsRecord>({})
  function handleSelectedItemsChange(newItems: SelectedItemsRecord) {
    setSelectedItems(newItems)
  }
  return (
    <Collapsible className="mr-3 flex flex-col items-end">
      <CollapsibleContent asChild>
        <div className="mb-3 shadow-lg w-96">
          <div className="bg-card-header uppercase py-2 px-3 rounded-t-md text-white text-xl">
            Listing
          </div>
          <ActiveItemsDisplayContent
            selectedItems={selectedItems}
            setSelectedItems={handleSelectedItemsChange}
          />
          <ActiveItemsDisplayDetail selectedItems={selectedItems} />
        </div>
      </CollapsibleContent>
      <ActiveItemsDetailTriggerButton />
    </Collapsible>
  )
}

export default ActiveItemsDisplay

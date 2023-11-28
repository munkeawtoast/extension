import { Accordion } from '@radix-ui/react-accordion'
import type { FC } from 'react'
import ActiveItemGroup from '../ActiveItemGroup'
import type { ActiveItemsRecord } from '..'
import type { ItemGroup } from '~/features/items/model/ItemGroup'

export type ActiveItemsDisplayContentProps = {
  itemGroups: Array<ItemGroup>
  selectedItems: ActiveItemsRecord
  setSelectedItems: (newItems: ActiveItemsRecord) => void
}

const ActiveItemsDisplayContent: FC<ActiveItemsDisplayContentProps> = ({
  itemGroups,
  selectedItems,
  setSelectedItems,
}) => {
  return (
    <Accordion
      collapsible
      type="single"
      className="max-h-[32rem] overflow-scroll"
    >
      {itemGroups.map((itemGroup) => (
        <ActiveItemGroup
          key={itemGroup.defindex}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          itemGroup={itemGroup}
        />
      ))}
    </Accordion>
  )
}

export default ActiveItemsDisplayContent
